import React from 'react';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>E-commerce Sales Chatbot</h1>
      <Login />
      <Chatbot />
    </div>
  );
}

export default App;