const form = document.getElementById("weatherForm")
const input = document.getElementById("cityInput")

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Dense drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with hail"
}

async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    const response = await fetch(url)
    const data = await response.json()

    if (!data.results) {
        document.querySelector(".info_title").textContent = "City not found"
        return null
    }

    return data.results[0]
}

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
    const response = await fetch(url)
    const data = await response.json()
    return data.current
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const city = input.value.trim()
    const place = await getCoordinates(city)

    if (!place) return

    const weather = await getWeather(place.latitude, place.longitude)

    document.querySelector(".info_title").textContent = place.name
    document.querySelector(".temp").textContent = `${Math.round(weather.temperature_2m)}°C`
    document.querySelector(".description").textContent = weatherCodes[weather.weather_code] || "Unknown"
    document.querySelector(".wet_perc").textContent = `${weather.relative_humidity_2m}%`
    document.querySelector(".wind_perc").textContent = `${weather.wind_speed_10m} km/h`
})