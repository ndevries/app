# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<'SCRIPT'
#!/usr/bin/env bash

echo "Updating system..."
sudo apt-get update &> /dev/null

echo "Installing Apache..."
sudo apt-get install -y apache2 &> /dev/null

echo "Installing PHP..."
sudo apt-get install -y libapache2-mod-php5 &> /dev/null

echo "Installing PHP extensions..."
sudo apt-get install php5-cli &> /dev/null
sudo apt-get install -y php5-mcrypt &> /dev/null
sudo apt-get install php5-json &> /dev/null
sudo apt-get install -y php5-curl &> /dev/null

echo "Installing cURL..."
sudo apt-get install curl &> /dev/null

echo "Installing Git..."
sudo apt-get install -y git &> /dev/null

echo "Installing Node.js..."
sudo apt-get update &> /dev/null
sudo apt-get install -y python-software-properties python g++ make &> /dev/null
sudo add-apt-repository -y ppa:chris-lea/node.js &> /dev/null
sudo apt-get update &> /dev/null
sudo apt-get install -y nodejs &> /dev/null

echo "Installing Grunt CLI..."
sudo npm install -g grunt-cli &> /dev/null

echo "Configuring virtual host..."
VHOST=$(cat <<EOF
<VirtualHost *:80>
DocumentRoot /var/www
ServerName localhost
<Directory /var/www>
AllowOverride All
</Directory>
</VirtualHost>
EOF
)
sudo echo "${VHOST}" > /etc/apache2/sites-enabled/000-default

echo "Enabling mod_rewrite..."
sudo a2enmod rewrite &> /dev/null

echo "Restarting Apache..."
sudo service apache2 restart &> /dev/null

echo "Symlinking /vagrant and /var/www..."
sudo rm -rf /var/www
sudo ln -fs /vagrant /var/www

echo "Disabling SSH timeout..."
echo "ClientAliveInterval 30" | sudo tee -a /etc/ssh/sshd_config &> /dev/null
echo "ClientAliveCountMax 90" | sudo tee -a /etc/ssh/sshd_config &> /dev/null
sudo service ssh restart &> /dev/null

echo "Provisioning complete..."
SCRIPT

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "precise32"

  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.network :forwarded_port, guest: 80, host: 8080

  config.vm.synced_folder "./", "/vagrant", :mount_options => ["dmode=777","fmode=666"]

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.provision :shell, :inline => $script

end