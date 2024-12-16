"use client";

import React from 'react';
import ChatPage from '@/components/ChatPage';
import { useAuth } from '@/context/AuthContext';

const ChatAppPage: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Please log in to access the chat.
      </div>
    );
  }

  return <ChatPage />;
};

export default ChatAppPage;