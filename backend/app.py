from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import nltk
from nltk.stem import WordNetLemmatizer

app = Flask(__name__)
CORS(app)

with open('models/chatbot_pipeline.pkl', 'rb') as model_file:
    pipeline = pickle.load(model_file)

with open('models/chatbot_responses.pkl', 'rb') as response_file:
    responses = pickle.load(response_file)

lemmatizer = WordNetLemmatizer()

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message', '').strip()
    if not user_message:
        return jsonify({'response': "Please provide a message."})

    lemmatized_message = " ".join([lemmatizer.lemmatize(word) for word in nltk.word_tokenize(user_message.lower())])
    tag = pipeline.predict([lemmatized_message])[0]

    reply = random.choice(responses.get(tag, responses['out_of_context']))
    return jsonify({'response': reply})

if __name__ == '__main__':
    app.run(debug=True)