# Deploy to gh-pages
Write-Host "🔨 Building project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Preparing gh-pages..." -ForegroundColor Blue
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $currentBranch"

# Switch to gh-pages
git checkout gh-pages

# Remove old files (keep .git and node_modules)
Get-ChildItem -Path "." -Exclude ".git", "node_modules", ".gitignore" -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Copy new files from dist
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Commit and push
git add .
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

if ($LASTEXITCODE -eq 0) {
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Blue
    git push origin gh-pages
    Write-Host "✅ Successfully deployed to gh-pages!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No changes to commit" -ForegroundColor Yellow
}

# Switch back to original branch
git checkout $currentBranch
Write-Host "✨ Back on branch: $currentBranch" -ForegroundColor Green
