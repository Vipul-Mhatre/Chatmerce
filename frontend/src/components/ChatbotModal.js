import React, { useState } from "react";
import axios from "../services/api";

function ChatbotModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    if (!query.trim()) return;

    try {
      const res = await axios.post("/chatbot", { message: query });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
      setResponse("Error: Unable to fetch response.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Chatbot</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ask me something..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleQuery}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
        {response && (
          <div className="mt-4 p-2 bg-gray-100 rounded-lg">
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotModal;