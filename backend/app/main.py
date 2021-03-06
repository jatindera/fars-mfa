from array import array
from typing import List, Union
from fastapi import FastAPI, Depends
from app.routers.auth import validate_token
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from app import schemas
from . import models
from .db import engine
from .routers import auth,post
from .config import settings

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(post.router)
app.include_router(auth.router)


@app.post("/")
def read_root(is_valid_token: dict=Depends(validate_token)) -> dict:
    return is_valid_token




