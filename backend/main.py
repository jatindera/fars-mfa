from array import array
from typing import List, Union
from fastapi import FastAPI, Depends
from auth import validate_token
from fastapi.middleware.cors import CORSMiddleware

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


@app.post("/")
def read_root(is_valid_token: dict=Depends(validate_token)) -> dict:
    return is_valid_token


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/dummyList")
def get_dummy_list(is_valid_token: dict=Depends(validate_token)) -> List:
    print("1111111111",is_valid_token)
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