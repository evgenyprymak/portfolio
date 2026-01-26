# Deploy to gh-pages
Write-Host "Checking for uncommitted changes on main..." -ForegroundColor Blue

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Found uncommitted changes. Committing to main..." -ForegroundColor Yellow
    git add .
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Update: $timestamp"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Changes committed to main" -ForegroundColor Green
        Write-Host "Pushing to main branch..." -ForegroundColor Blue
        git push origin main
    }
}

Write-Host "Building project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Preparing gh-pages..." -ForegroundColor Blue
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "Current branch: $currentBranch"

# Save dist to temp folder before switching branches
$tempDir = Join-Path $env:TEMP "portfolio_dist_$(Get-Date -Format 'yyyyMMddHHmmss')"
Write-Host "Copying dist to temp: $tempDir" -ForegroundColor Cyan
Copy-Item -Path "dist" -Destination $tempDir -Recurse -Force

# Switch to gh-pages
git checkout gh-pages

# Remove old files (keep .git and node_modules)
Get-ChildItem -Path "." -Exclude ".git", "node_modules", ".gitignore" -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Copy new files from temp
Write-Host "Deploying files from temp..." -ForegroundColor Cyan
Copy-Item -Path "$tempDir\*" -Destination "." -Recurse -Force

# Clean up temp
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue

# Commit and push
git add .
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Pushing to GitHub..." -ForegroundColor Blue
    git push origin gh-pages
    Write-Host "Successfully deployed to gh-pages!" -ForegroundColor Green
} else {
    Write-Host "No changes to commit" -ForegroundColor Yellow
}

# Switch back to original branch
git checkout $currentBranch
Write-Host "Back on branch: $currentBranch" -ForegroundColor Green
