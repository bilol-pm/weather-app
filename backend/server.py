from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import weather_service
import os
from dotenv import load_dotenv
load_dotenv()
API_KEY = os.getenv("WEATHER_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_methods=["GET"],
)

@app.get("/weather")
def weather(city: str):
    data = weather_service.fetch_data(city, API_KEY)
    if str(data["cod"]) == "404":
        raise HTTPException(status_code=404, detail="City not found")
    return data