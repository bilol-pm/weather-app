const form = document.getElementById("weatherForm")
const input = document.getElementById("cityInput")

async function getWeather(city) {
    const url = `http://127.0.0.1:8000/weather?city=${encodeURIComponent(city)}`
    const response = await fetch(url)
    
    if (response.status === 404) {
        document.querySelector(".info_title").textContent = "City not found"
        return null
    }

    if (!response.ok) {
        throw new Error("Server error")
    }
    return await response.json() 
}

function clearWeather() {
    document.querySelector(".temp").textContent = "--"
    document.querySelector(".description").textContent = "--"
    document.querySelector(".wet_perc").textContent = "--"
    document.querySelector(".wind_perc").textContent = "--"
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const city = input.value.trim()
    if (!city) return

    const title = document.querySelector(".info_title")
    clearWeather()
    title.textContent = "Loading..."

    try {
        const data = await getWeather(city)
        if (!data) return

        title.textContent = data.name
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`
        document.querySelector(".description").textContent = data.weather[0].description
        document.querySelector(".wet_perc").textContent = `${data.main.humidity}%`
        document.querySelector(".wind_perc").textContent = `${data.wind.speed} m/s`
    } catch (error) {
        title.textContent = "Something went wrong"
        console.error(error)
    }
})