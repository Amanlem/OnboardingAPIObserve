🚀 Asset Ingestion Dashboard
A full-stack asset ingestion dashboard built with:

✅ FastAPI backend + retry & webhook logic
✅ React + TailwindCSS frontend
✅ SQLite database for persistence
✅ Interactive charts with Chart.js
✅ Modular structure: easy to deploy and extend

✨ Features
Real-time asset ingestion flow simulation

/ingest, /assets, /chart-data, /webhook endpoints

Retry logic & webhook delivery

Chart visualizations of success, retry rate, schema errors

Persistent database (SQLite + aiosqlite)

Modern UI built with React and TailwindCSS

Modular project structure (backend & frontend separated)

Deployment-ready (Terraform config in progress 🚀)

🗂️ Project Structure
arduino
Copy
Edit
API INGESTION DASHBOARD/
├── backend/
│   ├── main.py
│   ├── db.py
│   ├── data.db
│   ├── seed.py
│   ├── requirements.txt
│   ├── processed_ids.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
├── .gitignore
├── README.md
⚙️ Running Locally
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

Deployment
🚀 Terraform-ready structure → coming soon!
The project is structured to support cloud deployment — stay tuned for full IaC (Infrastructure as Code) setup.

Credits
Built by Amanuel Lemma Dessalegn — feel free to ⭐️ or fork!
