from fastapi import FastAPI

from database.connection import init_db
from backend.app.routers.papers import router as papers_router


app = FastAPI(
    title="NEXUS",
    description="AI Research Intelligence Engine",
    version="0.1.0",
)


@app.on_event("startup")
def startup():
    init_db()


app.include_router(papers_router)


@app.get("/")
def root():
    return {
        "name": "NEXUS",
        "description": "AI Research Intelligence Engine",
        "version": "0.1.0",
        "status": "online",
    }


@app.get("/health")
def health_check():
    return {"status": "healthy"}
