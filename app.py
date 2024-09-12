# app.py
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Přidání CORS podpory
API_KEY = '19d293d7b45bdd9c3641ad37758d2e48'

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if city:
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
        response = requests.get(url)
        data = response.json()
        return jsonify(data)
    return jsonify({'error': 'City not provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
