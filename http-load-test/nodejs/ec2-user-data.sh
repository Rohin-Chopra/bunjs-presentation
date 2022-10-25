#!/bin/bash

sudo apt update && sudo apt upgrade

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt install -y gcc g++ make sqlite3

mkdir repos
cd repos
git clone https://github.com/Rohin-Chopra/bunjs-presentation-demo.git
cd bunjs-presentation-demo/http-load-test/nodejs
sqlite3 src/database.sqlite "VACUUM"
npm install
npm run build
npm run seed

tmux
sudo env "PATH=$PATH" node dist/server.js
