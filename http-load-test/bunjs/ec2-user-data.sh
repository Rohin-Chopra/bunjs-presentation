#!/bin/bash

sudo apt-get update

sudo apt install -y unzip sqlite3

curl https://bun.sh/install | bash
echo "export BUN_INSTALL=\"$HOME/.bun\"" >>~/.bashrc
echo "export PATH=\"$BUN_INSTALL/bin:$PATH\"" >>~/.bashrc
source ~/.bashrc

mkdir repos
cd repos
git clone https://github.com/Rohin-Chopra/bunjs-presentation-demo.git
cd bunjs-presentation-demo/http-load-test/bunjs
sqlite3 src/database.sqlite "VACUUM"
bun install
bun src/seed.ts
tmux
sudo env "PATH=$PATH" bun src/server.ts
