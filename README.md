🚀 Asset Ingestion Dashboard
A full-stack asset ingestion dashboard built with:

✅ FastAPI backend + retry & webhook logic
✅ React + TailwindCSS frontend
✅ SQLite database for persistence
✅ Interactive charts with Chart.js
✅ Modular structure: easy to deploy and extend

## ⚙️ Quick Start

### 🖥️ Local Setup
1. Clone the repo
2. Copy config file:
```bash
cp config.local.json config.json
Run frontend and backend

☁️ Terraform Deployment
Copy Terraform vars:

bash
Copy
Edit
cp terraform.tfvars.example terraform.tfvars
Edit values to match your AWS setup

Run Terraform:

bash
Copy
Edit
terraform init
terraform apply
yaml
Copy
Edit

---

### ✅ Bonus: Add `.gitignore`
Make sure these are not committed:

```gitignore
.env
*.tfvars
*.pem
__pycache__/
*.sqlite

## ⚙️ Running Locally
Backend (FastAPI)
bash
Copy
Edit
cd backend
python -m venv venv
venv\Scripts\activate    # Windows
# source venv/bin/activate  # Linux/Mac

pip install -r requirements.txt

uvicorn main:app --reload
Runs at → http://127.0.0.1:8000

Frontend (React + Tailwind)
bash
Copy
Edit
cd frontend
npm install
npm start
Runs at → http://localhost:3000

Why this API?
This project simulates an Asset Ingestion Pipeline, a common pattern in:

Media processing pipelines (video/audio ingestion)

Machine Learning pipelines

ETL systems

Data streaming dashboards

Product ingestion + monitoring

It provides a full-stack example of:

Backend REST API with retry logic

Persistent asset tracking

Real-time dashboard with metrics & charts

The project is structured to support cloud deployment — stay tuned for full upgrade in setup.

Credits
Built by Amanuel Lemma Dessalegn — feel free to ⭐️ or fork!
