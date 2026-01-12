'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotUrl = process.env.NEXT_PUBLIC_N8N_CHATBOT_URL;

  if (!chatbotUrl) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* כפתור פתיחה/סגירה */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-cyan-500 to-purple-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform border border-white/20"
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
      </button>

      {/* חלון הצ'אט */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fadeIn">
          <iframe
            src={chatbotUrl}
            className="w-full h-full border-none"
            title="Ardit AI Assistant"
          />
        </div>
      )}
    </div>
  );
}
