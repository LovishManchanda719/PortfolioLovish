"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';
import { firestore } from '@/lib/firebaseConfig';
import { useAuth } from '@/context/AuthContext';

interface Message {
  id: string;
  text: string;
  createdAt: any;
  userId: string;
  userName: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { currentUser } = useAuth();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!currentUser) return;

    const messagesRef = collection(firestore, 'chats');
    const q = query(messagesRef, orderBy('createdAt', 'asc'), limit(50));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Message));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentUser || newMessage.trim() === '') return;

    try {
      await addDoc(collection(firestore, 'chats'), {
        text: newMessage,
        createdAt: serverTimestamp(),
        userId: currentUser.uid,
        userName: currentUser.email || 'Anonymous'
      });

      setNewMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  if (!currentUser) {
    return <div className="text-center mt-10">Please log in to access the chat.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div 
          className="h-[500px] overflow-y-auto p-4 space-y-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${
                msg.userId === currentUser.uid 
                  ? 'justify-end' 
                  : 'justify-start'
              }`}
            >
              <div 
                className={`max-w-[70%] p-2 rounded-lg ${
                  msg.userId === currentUser.uid 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                {msg.userId !== currentUser.uid && (
                  <p className="text-xs mt-1 opacity-70">{msg.userName}</p>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="border-t p-4 flex">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l-lg dark:bg-gray-700 dark:text-white"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;