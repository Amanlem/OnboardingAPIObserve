from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import httpx, random, asyncio, json, os
from typing import Optional
from fastapi import FastAPI
import asyncio
from db import init_db
from db import init_db, get_chart_data_from_db




# ✅ FIRST: define the FastAPI app
app = FastAPI()


@app.on_event("startup")
async def startup_event():
    await init_db()

@app.get("/chart-data")
async def get_chart_data():
    data = await get_chart_data_from_db()
    return data


@app.get("/")
def read_root():
    return {"message": "FastAPI backend is running!"}
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


@app.get("/assets")
def get_assets():
    return [
        {"external_id": "user-123", "status": "ingested", "latency": 1.2},
        {"external_id": "video-789", "status": "failed", "latency": 4.3},
        {"external_id": "app-456", "status": "ingested", "latency": 2.5}
    ]




# 👇 Allow frontend requests (React runs on localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def is_processed(external_id):
    async with aiosqlite.connect(DB_FILE) as db:
        cursor = await db.execute("SELECT 1 FROM assets WHERE external_id = ?", (external_id,))
        result = await cursor.fetchone()
        return result is not None


# ✅ THEN: define the request model
class IngestRequest(BaseModel):
    external_id: str
    filename: str
    metadata: Optional[str] = None

# ✅ NOW your routes can use the model
@app.post("/ingest")
async def ingest(body: IngestRequest):
    ...

    external_id = body.external_id
    filename = body.filename

    if not external_id:
        raise HTTPException(status_code=400, detail="external_id is required")

    if external_id in processed_ids:
        return {"message": f"Asset with external_id '{external_id}' already processed. Skipping."}

    print(f"Processing new asset: {body.dict()}")

    async def send_webhook():
        for attempt in range(3):
            try:
                status = "ok" if random.random() > 0.3 else "fail"
                res = await httpx.post("http://localhost:8000/webhook", json={"status": status})
                if res.status_code == 200:
                    print(f"Webhook attempt {attempt + 1}: success")
                    return True
            except Exception as e:
                print(f"Webhook error: {e}")
            await asyncio.sleep(2)
        print("Webhook failed after 3 retries")
        return False

    result = await send_webhook()

    if result:
        processed_ids[external_id] = "processed"
        with open(PROCESSED_IDS_FILE, "w") as f:
            json.dump(processed_ids, f)

    return {"message": "Asset processed" if result else "Webhook failed after retries"}
@app.post("/webhook")
async def receive_webhook(request: Request):
    data = await request.json()
    print("Webhook received:", data)
    return {"message": "Webhook processed"}
    for attempt in range(3):
        try:
            status = "ok" if random.random() > 0.3 else "fail"
            async with httpx.AsyncClient(timeout=5.0) as client:
                res = await client.post("http://localhost:8000/webhook", json={"status": status})
            if res.status_code == 200:
                print(f"Webhook attempt {attempt + 1}: success")
                return True
        except httpx.TimeoutException:
            print(f"Webhook timeout on attempt {attempt + 1}")
        except Exception as e:
            print(f"Webhook error on attempt {attempt + 1}: {e}")
        await asyncio.sleep(2)
    print("Webhook failed after 3 retries")
    return False

