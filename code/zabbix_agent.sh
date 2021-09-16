#!/bin/bash -e

if [ "$UID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# Only run it if we can (ie. on Ubuntu/Debian)
if [ -x /usr/bin/apt-get ]; then
  sudo wget https://repo.zabbix.com/zabbix/5.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_5.0-1+bionic_all.deb
  dpkg -i zabbix-release_5.0-1+bionic_all.deb
  apt-get update
  apt-get -y install zabbix-agent
  sed -i 's/Server=127.0.0.1/Server=192.168.57.224/' /etc/zabbix/zabbix_agentd.conf
  sed -i 's/ServerActive=127.0.0.1/ServerActive=192.168.57.224/' /etc/zabbix/zabbix_agentd.conf
  HOSTNAME=`hostname` && sed -i "s/Hostname=Zabbix\ server/Hostname=$HOSTNAME/" /etc/zabbix/zabbix_agentd.conf
  sudo systemctl enable zabbix-agent
  service zabbix-agent restart
fi

# Only run it if we can (ie. on RHEL/CentOS)
#if [ -x /usr/bin/yum ]; then
#  yum -y update
#  rpm -ivh http://repo.zabbix.com/zabbix/2.4/rhel/6/x86_64/zabbix-release-2.4-1.el6.noarch.rpm
#  yum -y install zabbix-agent
#  chkconfig zabbix-agent on
#  sed -i 's/Server=127.0.0.1/Server=52.90.49.206/' /etc/zabbix/zabbix_agentd.conf
#  sed -i 's/ServerActive=127.0.0.1/ServerActive=52.90.49.206/' /etc/zabbix/zabbix_agentd.conf
#  HOSTNAME=`hostname` && sed -i "s/Hostname=Zabbix\ server/Hostname=$HOSTNAME/" /etc/zabbix/zabbix_agentd.conf
#  service zabbix-agent restart
#fi