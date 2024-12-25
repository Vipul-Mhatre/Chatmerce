import json
import random
import nltk
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from nltk.stem import WordNetLemmatizer
import pickle

nltk.download('punkt')
nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

with open('data/trainingData.json') as file:
    data = json.load(file)

tags, patterns, responses = [], [], {}
for intent in data['intents']:
    for pattern in intent['patterns']:
        tags.append(intent['tag'])
        patterns.append(pattern.lower())
    responses[intent['tag']] = intent['responses']

lemmatized_patterns = [" ".join([lemmatizer.lemmatize(word) for word in nltk.word_tokenize(pattern)]) for pattern in patterns]

pipeline = Pipeline([
    ('vectorizer', CountVectorizer()),
    ('classifier', MultinomialNB())
])

pipeline.fit(lemmatized_patterns, tags)

with open('models/chatbot_pipeline.pkl', 'wb') as model_file:
    pickle.dump(pipeline, model_file)

with open('models/chatbot_responses.pkl', 'wb') as response_file:
    pickle.dump(responses, response_file)