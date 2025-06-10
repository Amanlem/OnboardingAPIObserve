# 🚀 Asset Ingestion Dashboard

A full-stack dashboard built with **FastAPI**, **React**, **SQLite**, and **TailwindCSS** to visualize asset ingestion status in real-time. Includes retry logic, chart analytics, and database persistence.

![screenshot](./screenshots/dashboard-preview.png)

---

## Features

- **FastAPI backend** with `/ingest`, `/assets`, `/chart-data` & `/webhook`
- **SQLite + aiosqlite** persistence for assets and metrics
- **Retry simulation & webhook logic**
- **Responsive React dashboard** with Chart.js
- **TailwindCSS UI** with sidebar, metrics cards, and charts
- **Fully local + deployable with Terraform (optional)**

---

## Tech Stack

| Layer      | Tech                      |
|------------|---------------------------|
| Frontend   | React, Chart.js, Tailwind |
| Backend    | FastAPI, HTTPX, asyncio   |
| Database   | SQLite via aiosqlite      |
| Styling    | Tailwind CSS              |
| Deployment | Terraform-ready structure |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Amanlem/API-ingestion-dashboard.git
cd API-ingestion-dashboard
