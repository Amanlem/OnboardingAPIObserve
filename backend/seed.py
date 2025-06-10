import asyncio
from db import save_stat

async def run():
    await save_stat("2024-05-28", 91, 10, 2)
    await save_stat("2024-05-29", 93, 7.5, 1)
    await save_stat("2024-05-30", 94, 6, 0)

asyncio.run(run())