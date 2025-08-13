#!/bin/bash

set -e

# Step 1: Terraform init and apply
cd terraform
terraform init
terraform apply -auto-approve

# Step 2: Get EC2 public IP
INSTANCE_IP=$(terraform output -raw ec2_public_ip)

# Step 3: SSH and deploy backend
echo "Connecting to EC2 at $INSTANCE_IP ..."
ssh -o StrictHostKeyChecking=no -i ../your-key.pem ubuntu@$INSTANCE_IP << 'EOF'
  sudo apt update
  sudo apt install -y python3-pip git
  git clone https://github.com/Amanlem/OnboardingAPIObserve.git app
  cd app/backend
  pip install -r requirements.txt
  nohup uvicorn main:app --host 0.0.0.0 --port 8000 &
EOF

echo "✅ Deployment complete. Visit: http://$INSTANCE_IP:8000"
