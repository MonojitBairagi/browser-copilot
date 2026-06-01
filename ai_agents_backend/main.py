from fastapi import FastAPI

from routers.test_router import router as test_router
from middlewares.welcome_middleware import welcome_middleware
from routers.webpage_router import router as webpage_router
# main.py

from dotenv import load_dotenv

load_dotenv()
app = FastAPI(
    title="Browser Copilot API"
)

app.middleware("http")(welcome_middleware)

app.include_router(test_router)
app.include_router(webpage_router)
@app.get("/")
async def root():
    return {
        "message": "Browser Copilot Backend Running"
    }