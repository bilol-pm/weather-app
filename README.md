# Weather App

A web weather app. The HTML/CSS/JavaScript frontend talks to a FastAPI backend, which gets the data from OpenWeatherMap. The API key stays on the server and never reaches the browser.

## How it works

Browser -> FastAPI backend (`/weather?city=...`) -> OpenWeatherMap

## Project structure

- `backend/` - FastAPI server (`server.py`), weather logic, command-line app
- `frontend/` - web page (HTML, CSS, JavaScript)

## Run locally

### 1. Backend

1. Get a free API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Copy `backend/.env.example` to `backend/.env` and add your key.
3. Install and start the server:

```
cd backend
pip install -r requirements.txt
python -m uvicorn server:app --reload
```

API docs: http://127.0.0.1:8000/docs

### 2. Frontend

Open `frontend/index.html` with the VS Code Live Server extension. It must run at `http://127.0.0.1:5500`, because the backend allows only this address (CORS).

### Command-line app (optional)

```
cd backend
python main.py
```

## API

`GET /weather?city=Tashkent`

- `200` - weather data as JSON
- `404` - city not found

## Roadmap

- [x] FastAPI backend
- [x] Frontend connected to the backend
- [ ] Store search history in SQLite
- [ ] Deploy online