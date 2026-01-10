'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', projectType: '' });

  const nextStep = () => setStep(step + 1);

  const handleSubmit = async () => {
    // שליחה ל-Webhook של n8n שמאזין לפניות חדשות
    await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    nextStep(); // מעבר למסך תודה
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`${styles.chatCard} glass`}
        >
          {step === 1 && (
            <div className={styles.step}>
              <h2 className="gradient-text">היי! אני ערדית.</h2>
              <p>איך קוראים לך?</p>
              <input 
                type="text" 
                placeholder="השם שלך כאן..." 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={styles.input}
              />
              <button onClick={nextStep} className={styles.nextBtn}>נעים להכיר - בוא נמשיך</button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.step}>
              <h2>מה מספר הווטסאפ שלך?</h2>
              <p>כדי שאוכל לשלוח לך לינקים ללוקיישנים רלוונטיים.</p>
              <input 
                type="tel" 
                placeholder="050-0000000" 
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className={styles.input}
              />
              <button onClick={nextStep} className={styles.nextBtn}>מעולה, עוד שלב אחד</button>
            </div>
          )}

          {step === 3 && (
            <div className={styles.step}>
              <h2>באיזה סוג הפקה מדובר?</h2>
              <div className={styles.optionsGrid}>
                {['קליפ', 'פרסומת', 'סרט קצר', 'אירוע בוטיק'].map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => { setFormData({...formData, projectType: opt}); handleSubmit(); }}
                    className={styles.optionBtn}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.step}>
              <h2 className="gradient-text">תודה, {formData.name}!</h2>
              <p>הפרטים עברו אלי. בדוק את הווטסאפ שלך בדקות הקרובות.</p>
              <div className={styles.successIcon}>✅</div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
