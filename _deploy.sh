#!/bin/bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ps1-git
cd /www/app-nyc
git reset HEAD -\-hard;
git pull

killall node
reboot