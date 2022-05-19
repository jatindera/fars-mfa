from lib2to3.pgen2.token import EQUAL
from operator import contains
from jose import jwt
from jose.exceptions import JOSEError
import os
from os.path import join, dirname
from dotenv import load_dotenv
from fastapi import HTTPException, Depends, APIRouter
from fastapi.security import HTTPBasicCredentials, HTTPBearer

router = APIRouter(
    prefix="/auth",
    tags=['Auth']
)

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


# client_id = os.environ.get("CLIENT_ID")
# tenant_id = os.environ.get("TENANT_ID")
client_id = "b189805b-2794-44c8-a302-a195f1522a95"
tenant_id = "c643d250-0dd7-416f-889e-a93f0e4ef800"

security = HTTPBearer()

async def validate_token(credentials: HTTPBasicCredentials = Depends(security)):
    token = credentials.credentials
    # print("===========Token==============", token)
    try:
        payload = jwt.decode(token, key='secret', options={"verify_signature": False,
                                                           "verify_aud": False,
                                                           "verify_iss": False})
        print("payload => ", payload["iss"])
        # print(payload)
        # print(contains(payload["iss"], tenant_id))

        if(contains(payload["iss"], tenant_id) and (client_id==payload["appid"])):
            return {"is_valid_token": "true"}

    except JOSEError as e:  # catches any exception
        raise HTTPException(
            status_code=401,
            detail=str(e))

    

