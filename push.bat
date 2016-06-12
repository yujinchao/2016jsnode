@echo off

git pull node master
git add -A

git commit -m"update"

git push origin master