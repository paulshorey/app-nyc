iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3080

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/ps1-git
cd /www/app-nyc
git reset HEAD -\-hard;
git pull

i=0;
while true; do
	i=$[$i+1]
	echo node app.js \#$i starting...
	node app.js
	sleep 6
done