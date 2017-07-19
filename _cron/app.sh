#!/bin/bash

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/gitlab
cd /www/app.allevents.nyc
git reset HEAD -\-hard;
git pull

iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3080
# i=0;
# while true; do
# 	i=$[$i+1]
# 	node app.js
# 	sleep 6
# done
node app.js