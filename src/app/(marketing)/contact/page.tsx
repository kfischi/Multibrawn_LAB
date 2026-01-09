'use client';

import Link from 'next/link';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.hero}>
        <h1 className={styles.title}>בואו נדבר!</h1>
        <p className={styles.subtitle}>
          צוות MULTIBRAWN כאן בשבילכם 24/7
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Contact Card 1 - WhatsApp */}
          <a 
            href="https://wa.me/972523983394?text=היי%20מולטיבראון!%20אשמח%20לקבל%20מידע%20על%20נכסים"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>WhatsApp</h3>
            <p className={styles.cardText}>052-398-3394</p>
            <span className={styles.cardLink}>שלח הודעה →</span>
          </a>

          {/* Contact Card 2 - Phone */}
          <a 
            href="tel:+972523983394"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>טלפון</h3>
            <p className={styles.cardText}>052-398-3394</p>
            <span className={styles.cardLink}>התקשר עכשיו →</span>
          </a>

          {/* Contact Card 3 - Email */}
          <a 
            href="mailto:info@multibrawn.co.il"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>אימייל</h3>
            <p className={styles.cardText}>info@multibrawn.co.il</p>
            <span className={styles.cardLink}>שלח מייל →</span>
          </a>

          {/* Contact Card 4 - Chat with Ardit */}
          <button 
            onClick={() => {
              const chatButton = document.querySelector('[data-chatbot]') as HTMLButtonElement;
              if (chatButton) chatButton.click();
            }}
            className={`${styles.contactCard} ${styles.chatCard}`}
          >
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>צ'אט עם ערדית</h3>
            <p className={styles.cardText}>העוזרת הדיגיטלית שלנו</p>
            <span className={styles.cardLink}>פתח צ'אט →</span>
          </button>
        </div>

        {/* Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>⏰ שעות פעילות</h3>
            <p>אנחנו זמינים 24/7 דרך WhatsApp</p>
            <p>מענה טלפוני: ראשון-חמישי 09:00-20:00</p>
          </div>

          <div className={styles.infoCard}>
            <h3>💬 איך נעזור לכם?</h3>
            <p>מחפשים צימר? וילה? מתחם לאירוע?</p>
            <p>ערדית הבוט שלנו תעזור לכם למצוא את המקום המושלם!</p>
          </div>

          <div className={styles.infoCard}>
            <h3>🏆 למה MULTIBRAWN?</h3>
            <p>9+ שנות ניסיון במציאת מקומות מושלמים</p>
            <p>מאות לקוחות מרוצים כל שנה</p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>מוכנים למצוא את המקום המושלם?</h2>
          <p>צ'אט עם ערדית - זה מהיר, קל, וללא התחייבות!</p>
          <button 
            onClick={() => {
              const chatButton = document.querySelector('[data-chatbot]') as HTMLButtonElement;
              if (chatButton) chatButton.click();
            }}
            className={styles.ctaButton}
          >
            💬 בואו נתחיל!
          </button>
        </div>
      </div>
    </div>
  );
}
