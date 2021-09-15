#!/bin/bash

################################ Install the Zabbix Agent ###################################

sudo wget https://repo.zabbix.com/zabbix/5.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_5.0-1+xenial_all.deb
dpkg -i zabbix-release_5.0-1+xenial_all.deb
sudo apt update
sudo apt install -y zabbix-agent

################################# Edit the file conf #############################################
# edit file /etc/zabbix/zabbix_agentd.conf and add this change
ZABBIX_AGENT_CONF="/etc/zabbix/zabbix_agentd.conf";
ZABBIX_SERVER="192.168.57.224";
HOSTNAME=`hostname`;
# add some params to the configure file of zabbix-agent
echo "PidFile=/var/run/zabbix/zabbix_agentd.pid" >> $ZABBIX_AGENT_CONF;
echo "LogFile=/var/log/zabbix/zabbix_agentd.log" >> $ZABBIX_AGENT_CONF;
echo "LogFileSize=0" >> $ZABBIX_AGENT_CONF;
echo "Server=$ZABBIX_SERVER" >> $ZABBIX_AGENT_CONF;
echo "ServerActive=$ZABBIX_SERVER" >> $ZABBIX_AGENT_CONF;
echo "Hostname=$HOSTNAME" >> $ZABBIX_AGENT_CONF;
echo "Include=/etc/zabbix/zabbix_agentd.d/" >> $ZABBIX_AGENT_CONF;

############## Add Firewall Rules #####################################

# Open port 10050 on firewall (iptables) Only for CentOS 7
#PORT=10050;
# remember to hability the port in the local firewall.
# firewall-cmd --permanent --add-port=$PORT/tcp
# firewall-cmd --permanent --add-port=10051/tcp
#sudo systemctl restart firewalld

# Open port 10050 on firewall (iptables) Only for CentOS 6.X
#sudo iptables -I INPUT -p tcp -m tcp --dport $PORT -j ACCEPT
#sudo iptables -I INPUT -p udp -m udp --dport $PORT -j ACCEPT
#sudo iptables -A INPUT -m state --state NEW -p tcp --dport $PORT -j ACCEPT
#sudo iptables -A INPUT -m state --state NEW -p udp --dport $PORT -j ACCEPT
#sudo service iptables save

######################################################################
#### Restart the services ############################################
#sudo systemctl start zabbix-agent
#sudo systemctl enable zabbix-agent
######################################################################
sudo systemctl enable zabbix-agent
sudo service zabbix-agent restart