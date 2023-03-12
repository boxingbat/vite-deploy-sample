#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://boxingbat.github.io
# git push -f git@github.com:boxingbat/boxingbat.github.io.git master

# 部署到 https://boxingbat.github.io/vite-deploy-sample
git push -f git@github.com:boxingbat/vite-deploy-sample.git main:gh-pages

cd -