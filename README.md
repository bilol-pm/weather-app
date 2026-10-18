# Weather App

A weather app built in two parts: a command-line Python app and a web frontend.

## Project structure

- `backend/` - Python command-line app: searches weather by city and saves search history to JSON
- `frontend/` - web app (HTML, CSS, JavaScript) that shows the weather for any city

## Features

### Web app (frontend)
- Search weather by city name
- Shows temperature, weather description, humidity, and wind speed
- Loading state and error handling (city not found, no connection)
- Data from the free [Open-Meteo](https://open-meteo.com/) API (no API key needed)

### Command-line app (backend)
- Search weather by city
- Save search history to JSON
- Simple command-line interface

## How to run

### Web app
Open `frontend/index.html` in a browser (or use the Live Server extension in VS Code).

### Command-line app

Requires a free [OpenWeatherMap](https://openweathermap.org/api) API key.

1. Create a `backend/.env` file:
```
   WEATHER_API_KEY=your_key_here
```
2. Install dependencies and run:
```
   cd backend
   pip install requests python-dotenv
   python main.py
```

## Technologies

- Python, JSON
- HTML, CSS, JavaScript (fetch, async/await)
- Open-Meteo Geocoding and Forecast APIs (web app)
- OpenWeatherMap API (command-line app)

## Roadmap

- [ ] Rebuild the backend as a FastAPI service
- [ ] Connect the frontend to the FastAPI backend
- [ ] Store search history in SQLite
- [ ] Deploy online