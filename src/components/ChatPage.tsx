"use client";

import React from 'react';

const ChatPage: React.FC = () => {
  const handleChatClick = () => {
    // Open WhatsApp chat with the given number
    const phoneNumber = '8750703059';
    const message = 'Hello! I would like to chat.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="text-center mt-10">
          <button
            onClick={handleChatClick}
            className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600"
          >
            Chat with us on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
