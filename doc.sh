#!/bin/bash
npm run build
git checkout gh-page
cp docs/.vuepress/dist/* . -fr
git add . && git commit -m "update" && git push gitee gh-page
git checkout -