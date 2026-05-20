import requests

def fetch_data(city, key):  # <--- Make sure this name is spelled exactly like this
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric"
    response = requests.get(url)
    return response.json()