import json
file = open("video_games.json", "r")
video_games = json.load(file)
file.close()