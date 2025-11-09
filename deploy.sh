#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v25.1.0/bin

cd Cohort-Week-9-Deployemet-Learning
git pull origin main
cd Backend
pm2 restart all || pm2 start index.js