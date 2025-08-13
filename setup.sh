#!/bin/bash

# Update & install core packages
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y python3-pip git curl unzip

# Install Node.js + npm (v18 LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone your GitHub repo (REPLACE BELOW)
cd /home/ubuntu
git clone https://github.com/Amanlem/ObserveAPIOnboarding.git

cd ObserveAPIOnboarding

# === Backend setup ===
cd backend
pip3 install fastapi "uvicorn[standard]"

# === Frontend setup ===
cd ../frontend
npm install
npm run build

# === Run Backend ===
cd ../backend
# Use nohup to keep the server running after user_data completes
nohup uvicorn main:app --host 0.0.0.0 --port 80 &
echo "📡 Installing CloudWatch Agent..."
cd /opt
sudo wget https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb
sudo dpkg -i amazon-cloudwatch-agent.deb

cat << EOF | sudo tee /opt/cloudwatch-config.json
{
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/home/ubuntu/backend.log",
            "log_group_name": "fastapi-backend-logs",
            "log_stream_name": "backend"
          }
        ]
      }
    }
  }
}
EOF

sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
  -a fetch-config -m ec2 \
  -c file:/opt/cloudwatch-config.json -s

# Optional: Pipe FastAPI logs to file
nohup uvicorn main:app --host 0.0.0.0 --port 80 > /home/ubuntu/backend.log 2>&1 &


# Optional: Write a marker to know setup completed
echo "Setup completed successfully" > /home/ubuntu/setup.log

