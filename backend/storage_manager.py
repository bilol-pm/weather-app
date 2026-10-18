import json
import os

FILE_NAME = "history.json"

def save_search(city, temp, desc):
    # 1. Load existing data if the file exists
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME, "r") as file:
            try:
                history = json.load(file)
            except json.JSONDecodeError:
                history = []
    else:
        history = []

    # 2. Add the new search as a dictionary
    new_entry = {
        "city": city.capitalize(),
        "temp": temp,
        "condition": desc
    }
    history.append(new_entry)

    # 3. Write the updated list back to the JSON file
    with open(FILE_NAME, "w") as file:
        json.dump(history, file, indent=4)