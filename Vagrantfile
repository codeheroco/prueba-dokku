# -*- mode: ruby -*-
# vi: set ft=ruby :

BOX = "hashicorp/precise64"
DOKKU_DOMAIN = "servidordokku.com"
DOKKU_IP = ENV["DOKKU_IP"] || "192.168.33.10"

Vagrant.configure("2") do |config|
  config.vm.box = BOX
  config.vm.hostname = "#{DOKKU_DOMAIN}"
  config.vm.network :private_network, ip: DOKKU_IP
  config.vm.provision :shell, :path => "provision.sh"
end
