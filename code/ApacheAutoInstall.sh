#!/bin/bash
#
# Script for Apache Installation
# Date Created: 2017-10-02
# Version: install_apache v1.0
# Author: Cynthia Ayu (cynthiayu)
# Github: https://github.com/cynthiayu
#

# Start from here.

# Execute command as root (or sudo)
do_with_root() {
	if [[ `whoami` = 'root' ]]; then
		$*
	elif [[ -x /bin/sudo || -x /usr/bin/sudo ]]; then
		echo "sudo $*"
		sudo $*
	else
		echo "Packages requires root privileges to be installed."
		echo "Please run this script as root."
		exit 1
	fi
}

#Add PPA for PHP before installing
add-apt-repository ppa:ondrej/php -y
apt-get update

# Installing Apache based on $1 value
# $1 = php7 or php5. Package will be installed differently.

if [[ $1 == "php7" ]]; then
	echo "Installing Apache2 and PHP7 stack now..."	
	#Installing Apache2 and PHP7
	apt-get install apache2 -y
	apt-get install php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv php7.0-fpm php7.0-dev -y

	#Installing Redis 3.x
	pecl install redis-3.1.2
	phpenmod redis

	#Enable Module
	service apache2 restart
	a2enmod rewrite expires headers actions alias proxy proxy_fcgi setenvif
	a2enconf php7.0-fpm

	echo "Installation is finished!"

elif [[ $1 == "php5" ]]; then
	echo "Installing Apache2 and PHP5 stack now..."
	#Installing Apache2 and PHP5
	apt-get install apache2 -y
	apt-get install php5.6 php5.6-common php5.6-gd php5.6-mysql php5.6-mcrypt php5.6-curl php5.6-intl php5.6-xsl php5.6-mbstring php5.6-zip php5.6-bcmath php5.6-iconv php5.6-fpm php5.6-dev -y

	#Enable Module
	service apache2 restart
	a2enmod rewrite expires headers actions alias proxy proxy_fcgi setenvif
	a2enconf php5.6-fpm

	echo "Installation is finished!"

else
	# Wrong value
	echo "Sorry, Apache Auto Install need your specified packages."
	echo "Please specify ./install_apache.sh php5 or ./install_apache.sh php7, based on your needed packages."
	exit 1
fi
