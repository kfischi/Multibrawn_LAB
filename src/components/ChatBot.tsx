"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react'; // נשתמש ב-lucide לאייקונים נקיים

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white shadow-2xl rounded-2xl w-[350px] h-[500px] mb-4 overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Header של הבוט */}
            <div className="bg-black p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-gold">ערדית - Multibrawn</h3>
                <p className="text-xs opacity-70">מומחית הלוקיישנים שלך</p>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20}/></button>
            </div>

            {/* כאן נטמיע את ה-Iframe של Callify או Typebot שיחובר ל-n8n */}
            <div className="flex-1 bg-gray-50">
               <iframe 
                 src="YOUR_CALLIFY_OR_TYPEBOT_URL" 
                 className="w-full h-full border-none"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center border-2 border-gold"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </motion.button>
    </div>
  );
}
