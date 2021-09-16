#!/bin/bash -e

if [ "$UID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# Only run it if we can (ie. on Ubuntu/Debian)
if [ -x /usr/bin/apt-get ]; then
  apt-get update
  apt-get -y install zabbix-agent
  sed -i 's/Server=127.0.0.1/Server=192.168.57.224/' /etc/zabbix/zabbix_agentd.conf
  sed -i 's/ServerActive=127.0.0.1/ServerActive=192.168.57.224/' /etc/zabbix/zabbix_agentd.conf
  HOSTNAME=`hostname` && sed -i "s/Hostname=Zabbix\ server/Hostname=$HOSTNAME/" /etc/zabbix/zabbix_agentd.conf
  service zabbix-agent restart
fi