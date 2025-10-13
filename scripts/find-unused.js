const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const entry = path.join(src, 'main.tsx');

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(listFiles(full));
    else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) files.push(full);
  }
  return files;
}

const allFiles = listFiles(src);
const allFilesSet = new Set(allFiles.map(p => path.normalize(p)));

const extCandidates = ['.tsx', '.ts', '.js', '.jsx', '/index.tsx', '/index.ts', '/index.js'];

function resolveImport(fromFile, imp) {
  if (!imp.startsWith('.')) return null;
  const base = path.resolve(path.dirname(fromFile), imp);
  for (const ext of extCandidates) {
    const candidate = base.endsWith(ext) ? base : base + ext;
    if (fs.existsSync(candidate)) return path.normalize(candidate);
  }
  // try as file without adding ext if matches
  if (fs.existsSync(base)) return path.normalize(base);
  return null;
}

const importRegex = /import\s+(?:[^'";]+)\s+from\s+['"]([^'\"]+)['"]/g;
const importRegex2 = /require\(\s*['"]([^'\"]+)['"]\s*\)/g;

const reachable = new Set();
const todo = [path.normalize(entry)];

while (todo.length) {
  const file = todo.pop();
  if (reachable.has(file)) continue;
  if (!fs.existsSync(file)) continue;
  reachable.add(file);
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = importRegex.exec(content)) !== null) {
    const imp = m[1];
    const resolved = resolveImport(file, imp);
    if (resolved && !reachable.has(resolved)) todo.push(resolved);
  }
  while ((m = importRegex2.exec(content)) !== null) {
    const imp = m[1];
    const resolved = resolveImport(file, imp);
    if (resolved && !reachable.has(resolved)) todo.push(resolved);
  }
}

const unused = allFiles.filter(f => !reachable.has(path.normalize(f)));

console.log('REACHABLE FILES:');
reachable.forEach(f => console.log(path.relative(root, f)));
console.log('\nUNUSED FILES:');
unused.forEach(f => console.log(path.relative(root, f)));
console.log('\nSUMMARY:');
console.log('total files under src:', allFiles.length);
console.log('reachable count:', reachable.size);
console.log('unused count:', unused.length);

// write results to file
fs.writeFileSync(path.join(root, 'scripts', 'find-unused-output.json'), JSON.stringify({reachable: Array.from(reachable), unused}, null, 2));
console.log('\nWrote scripts/find-unused-output.json');
