import logging
import requests
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)
RASA_API_URL = 'http://localhost:5005/webhooks/rest/webhook'


@app.route('/')
def index():
    return render_template('./ClothesStore/src/index.html')


@app.route('/webhook', methods=['POST'])
def webhook():
    user_message = request.json.get('message', '')
    try:
        rasa_response = requests.post(RASA_API_URL, json={'sender': 'user', 'message': user_message})
        rasa_response.raise_for_status()
        rasa_response_json = rasa_response.json()
        print(rasa_response_json)
        return jsonify(rasa_response_json)
    except requests.exceptions.RequestException as e:
        logging.error(f"Error communicating with Rasa: {e}")
        return jsonify({'response': 'Sorry, there was an error processing your request!'}), 503


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
