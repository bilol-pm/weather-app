import os
from dotenv import load_dotenv
import weather_service
import storage_manager

# Load the API Key from .env
load_dotenv()
API_KEY = os.getenv("WEATHER_API_KEY")


def run_app():
    print("--- 🌍 Real-Time Weather Tracker ---")
    print("(Type 'exit' to close the program)\n")

    while True:
        # 1. Get User Input
        city = input("Enter city name: ").strip()

        # 2. Check if the user wants to quit
        if city.lower() == 'exit':
            print("Cleaning up... Goodbye! 👋")
            break

        # 3. Fetch data using our module
        data = weather_service.fetch_data(city, API_KEY)

        # 4. Process and Display Results
        if data.get("cod") == 200:
            temp = data["main"]["temp"]
            desc = data["weather"][0]["description"].lower()

            # --- Visual Logic Start ---
            if "cloud" in desc:
                icon = "☁️"
            elif "rain" in desc or "drizzle" in desc:
                icon = "🌧️"
            elif "sun" in desc or "clear" in desc:
                icon = "☀️"
            elif "snow" in desc:
                icon = "❄️"
            else:
                icon = "🌍"
            # --- Visual Logic End ---

            print(f"📍 City: {city.capitalize()}")
            print(f"🌡️  Temperature: {temp}°C")
            print(f"✨ Conditions: {icon} {desc.capitalize()}")
            storage_manager.save_search(city, temp, desc)
            print("✅ Saved to history.")
            print("-" * 30)  # Visual separator
        else:
            print("❌ Error: Could not find that city. Try again.")


if __name__ == "__main__":
    run_app()