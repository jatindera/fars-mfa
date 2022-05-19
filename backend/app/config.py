from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_HOSTNAME:str
    DATABASE_NAME:str
    DATABASE_USER:str
    DATABASE_PASSWORD:str
    DATABASE_PORT:int
    SECRET_KEY:str
    ALGORITHM:str
    ACCESS_TOKEN_EXPIRE_MINS:int

    class Config:
        env_file = ".env"

settings = Settings()
