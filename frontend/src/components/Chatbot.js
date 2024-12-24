import React, { useState } from 'react';
import axios from '../services/api'; // Adjust the path if needed

function Chatbot() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/products?query=${query}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.name} - ${msg.price}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Chatbot;