#!/bin/sh

sudo apt-get update
sudo apt-get install -y python-software-properties
wget -qO- https://raw.github.com/progrium/dokku/v0.2.2/bootstrap.sh | sudo DOKKU_TAG=v0.2.2 bash
echo servidordokku.com > /home/dokku/VHOST
