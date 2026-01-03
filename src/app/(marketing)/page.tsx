'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css'; // שימוש בעיצוב המקורי שלך
import SmartLeadForm from '@/components/ui/SmartLeadForm'; // הטופס החדש

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll Reveal Animation (מהקוד המקורי שלך)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.revealOnScroll}`);
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // פונקציה לגלילה חלקה לטופס
  const scrollToForm = () => {
    document.getElementById('smart-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Video Section */}
      <section className={styles.heroVideo}>
        <video
          className={styles.videoBg}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dptyfvwyo/video/upload/v1763834667/Video-Multi_b11ehy.mp4"
            type="video/mp4"
          />
        </video>
        
        <div className={styles.videoOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>הלוקיישן המושלם מחכה לכם</h1>
            <p className={styles.heroSubtitle}>
              וילות יוקרה, צימרים ומתחמי אירועים בסטנדרט בינלאומי
            </p>
            
            <div className={styles.heroBtnGroup}>
              <button 
                onClick={scrollToForm}
                className={`${styles.heroBtn} ${styles.btnPrimary}`}
              >
                בואו נמצא לכם מקום
              </button>
              <Link href="/gallery" className={`${styles.heroBtn} ${styles.btnGlass}`}>
                צפו בגלריה
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className={styles.locationsGrid}>
        {/* Villa Card */}
        <Link href="/gallery?category=villa" className={styles.locationCard}>
          <Image
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg"
            alt="וילות מפוארות"
            fill
            className={styles.locationImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={styles.locationOverlay}>
            <h3>וילות מפוארות</h3>
          </div>
        </Link>

        {/* Zimmer Card */}
        <Link href="/gallery?category=zimmer" className={styles.locationCard}>
          <Image
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1763726367/AA_s4nej0.jpg"
            alt="צימרים"
            fill
            className={styles.locationImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={styles.locationOverlay}>
            <h3>צימרים</h3>
          </div>
        </Link>

        {/* Apartment Card */}
        <Link href="/gallery?category=apartment" className={styles.locationCard}>
          <Image
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Apartment1_mrxdad.jpg"
            alt="דירות נופש"
            fill
            className={styles.locationImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={styles.locationOverlay}>
            <h3>דירות נופש</h3>
          </div>
        </Link>

        {/* Hotel Card */}
        <Link href="/gallery?category=hotel" className={styles.locationCard}>
          <Image
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818995/Hotel1_ihkey7.jpg"
            alt="מלונות בוטיק"
            fill
            className={styles.locationImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={styles.locationOverlay}>
            <h3>מלונות בוטיק</h3>
          </div>
        </Link>

        {/* Event Card */}
        <Link href="/gallery?category=event" className={styles.locationCard}>
          <Image
            src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg"
            alt="מתחמי אירועים"
            fill
            className={styles.locationImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={styles.locationOverlay}>
            <h3>מתחמי אירועים</h3>
          </div>
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.whyUs} ${styles.revealOnScroll}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>למה לבחור ב-MULTIBRAWN?</h2>
          <p className={styles.sectionSubtitle}>אנחנו לא רק מוצאים לכם מקום - אנחנו מוצאים את המקום המושלם</p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✓</div>
              <h3>ניסיון של 10+ שנים</h3>
              <p>מומחיות מוכחת במציאת הלוקיישנים הטובים ביותר בישראל</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>♥</div>
              <h3>500+ לקוחות מרוצים</h3>
              <p>לקוחות שמצאו את החופשה המושלמת דרכנו</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡</div>
              <h3>נכסים מאומתים בלבד</h3>
              <p>כל נכס עובר בדיקה קפדנית לפני שאנחנו ממליצים עליו</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>☺</div>
              <h3>שירות אישי ומקצועי</h3>
              <p>זמינים עבורכם בוואטסאפ לכל שאלה</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className={`${styles.featured} ${styles.revealOnScroll}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>הצלחות אחרונות שלנו</h2>
          <p className={styles.sectionSubtitle}>לקוחות שמצאו את המקום המושלם דרך ערדית</p>
          
          <div className={styles.featuredGrid}>
            <article className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg"
                  alt="וילה יוקרתית"
                  fill
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>סיפור הצלחה</span>
              </div>
              <div className={styles.featuredContent}>
                <h3>משפחת כהן - וילה בגליל</h3>
                <p className={styles.featuredDesc}>"מצאנו מקום מושלם ל-20 איש תוך יום!"</p>
              </div>
            </article>
            <article className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1763726074/A7_rwzsuo.jpg"
                  alt="צימר רומנטי"
                  fill
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>סיפור הצלחה</span>
              </div>
              <div className={styles.featuredContent}>
                <h3>דני ורונית - צימר רומנטי</h3>
                <p className={styles.featuredDesc}>"התאמה מושלמת למה שחיפשנו."</p>
              </div>
            </article>
            <article className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1762003191/1_tsc6xx.jpg"
                  alt="מתחם אירועים"
                  fill
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>סיפור הצלחה</span>
              </div>
              <div className={styles.featuredContent}>
                <h3>חברת Hi-Tech - אירוע חברה</h3>
                <p className={styles.featuredDesc}>"ארגון מושלם ומקצועי."</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* אזור הטופס החדש - משתלב בעיצוב */}
      <section id="smart-form" className={`${styles.finalCta} ${styles.revealOnScroll}`} style={{paddingBottom: '4rem'}}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className={styles.ctaTitle}>מוכנים למצוא את המקום המושלם?</h2>
            <p className={styles.ctaSubtitle}>
              ערדית, העוזרת הדיגיטלית שלנו, מחכה לעזור לכם למצוא את הלוקיישן שתמיד חלמתם עליו
            </p>
          </div>
          
          {/* הזרקת הטופס החדש כאן */}
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <SmartLeadForm />
          </div>

        </div>
      </section>
    </div>
  );
}
