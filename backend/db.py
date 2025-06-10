import aiosqlite

DB_FILE = "data.db"

# ✅ Create both necessary tables
async def init_db():
    async with aiosqlite.connect(DB_FILE) as db:
        await db.execute("""
            CREATE TABLE IF NOT EXISTS delivery_stats (
                date TEXT PRIMARY KEY,
                success_rate REAL,
                retry_rate REAL,
                schema_errors INTEGER
            )
        """)
        await db.execute("""
            CREATE TABLE IF NOT EXISTS assets (
                external_id TEXT PRIMARY KEY,
                status TEXT,
                latency REAL
            )
        """)
        await db.commit()

# ✅ Used by /chart-data
async def get_chart_data_from_db():
    async with aiosqlite.connect(DB_FILE) as db:
        cursor = await db.execute(
            "SELECT date, success_rate, retry_rate, schema_errors FROM delivery_stats ORDER BY date ASC"
        )
        rows = await cursor.fetchall()
        return {
            "dates": [row[0] for row in rows],
            "success_rates": [row[1] for row in rows],
            "retry_rates": [row[2] for row in rows],
            "schema_errors": [row[3] for row in rows],
        }

# ✅ Used by /assets
async def get_assets_from_db():
    async with aiosqlite.connect(DB_FILE) as db:
        cursor = await db.execute("SELECT external_id, status, latency FROM assets")
        rows = await cursor.fetchall()
        return [
            {"external_id": row[0], "status": row[1], "latency": row[2]}
            for row in rows
        ]

# ✅ Used by ingest() logic in main.py
async def save_asset_to_db(external_id, status, latency):
    async with aiosqlite.connect(DB_FILE) as db:
        await db.execute(
            "INSERT OR REPLACE INTO assets (external_id, status, latency) VALUES (?, ?, ?)",
            (external_id, status, latency)
        )
        await db.commit()

# ✅ Optional: to simulate ingesting stats
async def save_stat(date, success_rate, retry_rate, schema_errors):
    async with aiosqlite.connect(DB_FILE) as db:
        await db.execute(
            "INSERT OR REPLACE INTO delivery_stats (date, success_rate, retry_rate, schema_errors) VALUES (?, ?, ?, ?)",
            (date, success_rate, retry_rate, schema_errors)
        )
        await db.commit()
