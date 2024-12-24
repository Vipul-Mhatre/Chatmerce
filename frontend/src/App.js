import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ChatbotModal from "./components/ChatbotModal";

function App() {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="App">
      <Home />
      <button
        onClick={() => setChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        💬
      </button>
      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setChatbotOpen(false)} />
    </div>
  );
}

export default App;