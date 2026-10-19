from fastapi import FastAPI
import weather_service
import os
from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv("WEATHER_API_KEY")

app = FastAPI()

@app.get("/weather")
def weather(city: str):
    data = weather_service.fetch_data(city, API_KEY)
    return data