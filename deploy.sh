#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run home:build # 生成静态文件
cd home/.vuepress/dist # 进入生成的文件夹
echo 'sumsc.xin' > CNAME # 发布到自定义域名
git config --global user.email "wzhzzmzzy@gmail.com"
git config --global user.name "wzhzzmzzy"
git init
git add -A
git commit -m 'deploy home'
git push -f 'https://github.com/SUMSC/SUMSC.github.io.git' master # 发布到 https://SUMSC.github.io

cd -
