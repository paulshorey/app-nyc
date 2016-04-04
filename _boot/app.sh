iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 1080
cd /www/app-nyc
i=0;
while true; do
	i=$[$i+1]
	node node.js --iteration=$i --port=1080
	sleep 6
done