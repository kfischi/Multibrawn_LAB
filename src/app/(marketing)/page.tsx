'use client';

import { motion } from 'framer-motion';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section - הלב של דף הבית */}
      <section className={styles.hero}>
        {/* וידאו רקע איכותי מ-Cloudinary */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="https://res.cloudinary.com/dptyfvwyo/video/upload/v1736545260/Multibrawn_Hero_Video.mp4" type="video/mp4" />
        </video>

        {/* Overlay כהה לקריאות הטקסט */}
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.mainTitle}
          >
            THE CANVAS FOR YOUR <br />
            <span className="gradient-text">NEXT MASTERPIECE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.subtitle}
          >
            חיבור מדויק בין הפקות ללוקיישנים הכי אקסקלוסיביים בישראל. <br />
            בלי פשרות. בלי כאבי ראש. רק קסם על הסט.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className={styles.ctaWrapper}
          >
            <a href="/gallery" className={styles.primaryBtn}>גלו לוקיישנים</a>
            <a href="/contact" className={styles.secondaryBtn}>דברו עם ערדית</a>
          </motion.div>
        </div>
      </section>

      {/* סקשן "למה אנחנו" - קצר וקולע */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className="glass p-8 rounded-[var(--radius-lg)] text-center">
              <h3 className="gradient-text mb-2">אוצרות מדויקת</h3>
              <p>כל לוקיישן נבחר בקפידה כדי להתאים לסטנדרט הפקה בינלאומי.</p>
            </div>
            <div className="glass p-8 rounded-[var(--radius-lg)] text-center">
              <h3 className="gradient-text mb-2">חיסכון בזמן</h3>
              <p>מערכת סינון חכמה ובוט אישי שמוצאים לך את המקום המושלם תוך דקות.</p>
            </div>
            <div className="glass p-8 rounded-[var(--radius-lg)] text-center">
              <h3 className="gradient-text mb-2">ליווי אישי</h3>
              <p>אנחנו איתך מהרגע הראשון ועד שהצילום האחרון מסתיים.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
