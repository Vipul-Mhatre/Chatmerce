import React, { useState } from 'react';
import { getChatbotResponse } from '../services/api'; // Correct relative import

function Chatbot() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getChatbotResponse(query); // Use the exported function
      setMessages(response);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Ask me something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Send</button>
    </div>
  );
}

export default Chatbot;