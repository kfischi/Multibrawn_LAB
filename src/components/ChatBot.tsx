"use client";
import { useParams } from 'next/navigation';
// ... שאר ה-imports

export default function ChatBot() {
  const params = useParams();
  const locationId = params?.id; // מזהה את הלוקיישן הנוכחי מה-URL

  // שליחת הנתונים ל-n8n עם ההקשר של הדף
  const startChat = () => {
    const n8nUrl = `${process.env.NEXT_PUBLIC_N8N_CHATBOT_URL}?location=${locationId || 'homepage'}`;
    // כאן נפתח את הצ'אט עם ה-URL המותאם
  };

  return (
    // ... ה-JSX של הבוט
  );
}
