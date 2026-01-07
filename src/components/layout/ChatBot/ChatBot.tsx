'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ChatBot.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  options?: string[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_CHATBOT_URL || 'https://n8n.multibrawn.co.il/webhook-test/chatbot';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Generate session ID
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      
      // Start conversation
      setTimeout(() => {
        sendMessageToN8N('__START__', newSessionId);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const addBotMessage = (content: string, options?: string[]) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'assistant',
        content,
        timestamp: new Date(),
        options,
      },
    ]);
  };

  const addUserMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessageToN8N = async (userMessage: string, session: string = sessionId) => {
    try {
      setIsTyping(true);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: session,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();

      setIsTyping(false);

      // Handle response from n8n
      if (data.message) {
        addBotMessage(data.message, data.options || []);
      }

      // Handle special actions
      if (data.action === 'show_input') {
        setShowInput(true);
      } else if (data.action === 'hide_input') {
        setShowInput(false);
      } else if (data.action === 'show_properties') {
        // Display properties
        if (data.properties && data.properties.length > 0) {
          displayProperties(data.properties);
        }
      } else if (data.action === 'send_whatsapp') {
        // Trigger WhatsApp with summary
        sendToWhatsApp(data.summary);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      addBotMessage(
        'אופס! נראה שיש בעיה בחיבור. 😕\n\nאתה יכול לשלוח לנו הודעה ישירות ב-WhatsApp:',
        ['פתח WhatsApp 💬']
      );
    }
  };

  const displayProperties = (properties: any[]) => {
    const propertiesMessage = properties.map((prop, index) => {
      const medal = index === 0 ? '🏆' : index === 1 ? '🥈' : '🥉';
      return `${medal} *${prop.name}*\n📍 ${prop.location}\n👥 עד ${prop.max_guests} אורחים\n💰 ₪${prop.price_per_night.toLocaleString()}/לילה\n⭐ התאמה: ${prop.match_percentage}%`;
    }).join('\n\n─────────────\n\n');

    addBotMessage(
      `מצאתי ${properties.length} אופציות מעולות! 🎉\n\n${propertiesMessage}\n\nרוצה פרטים נוספים?`,
      ['כן, שלח לי פרטים!', 'חפש אפשרויות אחרות']
    );
  };

  const sendToWhatsApp = (summary: string) => {
    const message = encodeURIComponent(
      `היי MULTIBRAWN! 👋\n\n${summary}\n\nאשמח לקבל הצעות מתאימות!`
    );
    window.open(`https://wa.me/972523983394?text=${message}`, '_blank');
  };

  const handleInputSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    addUserMessage(userMessage);
    setInputValue('');
    
    // Send to n8n
    sendMessageToN8N(userMessage);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);

    // Special handling for WhatsApp button
    if (option === 'פתח WhatsApp 💬') {
      window.open('https://wa.me/972523983394', '_blank');
      return;
    }

    // Send option to n8n
    sendMessageToN8N(option);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <div className={styles.chatButtonWrapper}>
        <button
          onClick={toggleChat}
          className={`${styles.chatButton} ${isVisible ? styles.visible : ''}`}
          data-chatbot
          aria-label="פתח צ'אט עם ערדית"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <img 
              src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1764669572/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%9C%D7%91%D7%95%D7%98_dl5w3z.png"
              alt="ערדית"
              className={styles.avatarImage}
            />
          )}
        </button>
        {!isOpen && <div className={styles.chatLabel}>צ'אט עם ערדית</div>}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <h3>ערדית - העוזרת החכמה שלכם 🤖</h3>
              <p>🟢 מופעלת ע"י AI</p>
            </div>
          </div>

          <div className={styles.messages}>
            {messages.map((message) => (
              <div key={message.id} className={styles.messageWrapper}>
                <div className={`${styles.message} ${styles[message.role]}`}>
                  <div className={styles.messageContent}>{message.content}</div>
                  
                  {message.options && message.options.length > 0 && (
                    <div className={styles.options}>
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className={styles.optionButton}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={styles.messageWrapper}>
                <div className={`${styles.message} ${styles.assistant}`}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {showInput && (
            <form onSubmit={handleInputSubmit} className={styles.inputArea}>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="הקלד כאן..."
                className={styles.input}
              />
              <button type="submit" className={styles.sendButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
