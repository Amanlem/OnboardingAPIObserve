# 🚀 Asset Ingestion Dashboard

This project simulates an **async asset ingestion system** — visualizing webhook delivery, retry logic, and ingestion health in real-time. 

Originally a weekend prototype, it now includes:

- FastAPI backend with retry + webhook logic
- React + Tailwind frontend with Chart.js
- SQLite persistence
- Modular, cloud-deployable setup with Terraform + Bash automation

> Ideal for API onboarding, data ingestion, or delivery infrastructure teams who need quick visibility — without full observability tools.

---

## 🧪 Local Setup

### 1. Clone and prepare configs
```bash
git clone https://github.com/Amanlem/OnboardingAPIObserve.git
cd OnboardingAPIObserve

# (optional) For local config if needed:
cp config.local.json config.json
2. Run the backend (FastAPI)
bash
Copy
Edit
cd backend
python -m venv venv
venv\Scripts\activate       # or source venv/bin/activate for macOS/Linux

pip install -r requirements.txt
uvicorn main:app --reload
# → http://127.0.0.1:8000
3. Run the frontend (React + Tailwind)
bash
Copy
Edit
cd frontend
npm install
npm run start
# → http://localhost:3000
☁️ Terraform Deployment (Optional)
You can deploy the backend on AWS using the Terraform scripts provided.

1. Create your vars file:
bash
Copy
Edit
cp terraform/terraform.tfvars.example terraform/terraform.tfvars
Then edit the new file with your values:

hcl
Copy
Edit
aws_region      = "us-east-1"
key_name        = "your-ec2-key-name"
instance_type   = "t2.micro"
bucket_name     = "your-s3-bucket-name"
dynamodb_table  = "your-lock-table-name"
2. Deploy with Terraform:
bash
Copy
Edit
cd terraform
terraform init
terraform apply
📂 Project Structure
bash
Copy
Edit
OnboardingAPIObserve/
│
├── backend/          # FastAPI app, SQLite, webhook logic
├── frontend/         # React UI + Chart.js + Tailwind
├── terraform/        # EC2 + S3 + ELB + AutoScaling setup
├── deploy.sh         # Optional Bash automation
├── README.md
└── .gitignore
🔐 .gitignore
Ensure sensitive files are ignored:

gitignore
Copy
Edit
.env
*.tfvars
*.pem
*.sqlite
__pycache__/
💡 Why This Exists
This project models patterns found in:

Media/video processing platforms

ML data pipelines

ETL ingestion systems

SaaS product onboarding metrics

The goal: Visibility for delivery teams without needing full observability tooling.

🙌 Credits
Built by Amanuel Lemma Dessalegn
Feel free to ⭐️ or fork — feedback welcome!