from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List, Optional
from ..db import get_db
from sqlalchemy import func, text
from sqlalchemy.sql.functions import func
from .. import models, schemas

from app.routers.auth import validate_token


router = APIRouter(
    prefix="/posts",
    tags=['Posts']
)

# @router.get('/', response_model=schemas.PostOut)
@router.get('/',)
def getPost(db: Session = Depends(get_db), is_valid_token: dict=Depends(validate_token)):
    posts = db.query(models.Post).all()
    if not posts:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"No post found")

    return posts


@router.get("/dummyList")
def get_dummy_list(is_valid_token: dict=Depends(validate_token)) -> List:
    print(is_valid_token)
    dummy_d = [
        {
        "id": "1",
        "name" : "Jatinder Arora",
        "team" : "Spark Digital",
        "workLocation" : "Gurgaon, India"
        },
        {
        "id": "2",
        "name" : "Richard Boehmer",
        "team" : "Spark Digital",
        "workLocation" : "US"
        },
        {
        "id": "3",
        "name" : "Jatinder Arora",
        "team" : "Spark Digital",
        "workLocation" : "Gurgaon, India"
        },
        {
        "id": "4",
        "name" : "Richard Boehmer",
        "team" : "Spark Digital",
        "workLocation" : "US"
        },
        {
        "id": "3",
        "name" : "Jatinder Arora",
        "team" : "Spark Digital",
        "workLocation" : "Gurgaon, India"
        },
        {
        "id": "4",
        "name" : "Richard Boehmer",
        "team" : "Spark Digital",
        "workLocation" : "US"
        }
    ]
    if(is_valid_token):
        return dummy_d
    else:
        return ""