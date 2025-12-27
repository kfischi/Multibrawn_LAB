'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedProperties.module.css';

interface Property {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  rating: number;
  testimonial: string;
  author: string;
  location: string;
  features: {
    icon: string;
    text: string;
  }[];
}

const properties: Property[] = [
  {
    id: 1,
    title: 'בגד למלכה',
    subtitle: 'צימר רומנטי בגליל העליון',
    description: '"היאמבטבו הגן, צימר שקט עם ג\'קוזי ונוף. התוצאה היתה מדהימה ומושלמת!"',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1735000000/zimmer-jacuzzi-romantic.jpg',
    rating: 5,
    testimonial: 'ארגנו אירוע חברה מושלם במתחם שמצאו לנו. הכל היה מקצועי ומדויק. חוויה בהנדת!',
    author: 'מיכל כהן',
    location: 'חיפה',
    features: [
      { icon: '💑', text: 'זוג' },
      { icon: '🛁', text: 'ג\'קוזי פרטי' },
      { icon: '🎯', text: 'התאמה מושלמת' }
    ]
  },
  {
    id: 2,
    title: 'חברת Hi-Tech – אירוע',
    subtitle: 'אירוע חברה במרכז הארץ',
    description: '"ארגנו לנו אירוע ל-100+ עובדים. עזרתי תכנית את הצרכים והתקציק והמקום היה בדיוק מה שחיפשנו!"',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1735324800/event-corporate_sample.jpg',
    rating: 5,
    testimonial: 'אחרי נסיונות רבים בפופשים סוף סוף מצאנו את הצימר המושלם לחופשה משפחתית. מודה ערדית!',
    author: 'דני לוי',
    location: 'ירושלים',
    features: [
      { icon: '🏆', text: 'מקצועיות מלאה' },
      { icon: '💼', text: 'אירוע חברה' },
      { icon: '👥', text: '100 אורחים' }
    ]
  },
  {
    id: 3,
    title: 'משפחת כהן - וילה',
    subtitle: 'וילה בגליל העליון',
    description: '"חיפשנו וילה ל-20 איש עם בריכה מחוממת. דיברנו עם ערדית בצ\'אט והיא מצאה לנו תוך יום את המקום המושלם!"',
    image: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1735324800/villa-pool_sample.jpg',
    rating: 5,
    testimonial: 'מצאו לנו וילה מדהימה בצפון תוך יומיים. השירות היה מקצועי ואדיב. ממליצה בחום!',
    author: 'שירה כהן',
    location: 'תל אביב',
    features: [
      { icon: '⏰', text: 'תוך יומיים' },
      { icon: '🏊', text: 'בריכה מחוממת' },
      { icon: '👨‍👩‍👧‍👦', text: '20 אורחים' }
    ]
  }
];

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>מה הלקוחות שלנו אומרים.</h2>
        
        {/* Desktop - 3 Cards */}
        <div className={styles.desktopGrid}>
          {properties.map((property) => (
            <div key={property.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.imageOverlay}>
                  <h3>{property.title}</h3>
                  <p>{property.subtitle}</p>
                </div>
              </div>
              
              <div className={styles.content}>
                <p className={styles.description}>{property.description}</p>
                
                <div className={styles.features}>
                  {property.features.map((feature, idx) => (
                    <div key={idx} className={styles.feature}>
                      <span className={styles.featureIcon}>{feature.icon}</span>
                      <span className={styles.featureText}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className={styles.mobileCarousel}>
          <button onClick={prevProperty} className={styles.navButton} aria-label="Previous">
            ←
          </button>
          
          <div className={styles.carouselCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={properties[currentIndex].image}
                alt={properties[currentIndex].title}
                fill
                className={styles.image}
                sizes="100vw"
                priority
              />
              <div className={styles.imageOverlay}>
                <h3>{properties[currentIndex].title}</h3>
                <p>{properties[currentIndex].subtitle}</p>
              </div>
            </div>
            
            <div className={styles.content}>
              <p className={styles.description}>{properties[currentIndex].description}</p>
              
              <div className={styles.features}>
                {properties[currentIndex].features.map((feature, idx) => (
                  <div key={idx} className={styles.feature}>
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button onClick={nextProperty} className={styles.navButton} aria-label="Next">
            →
          </button>
          
          <div className={styles.dots}>
            {properties.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          {properties.map((property) => (
            <div key={property.id} className={styles.testimonial}>
              <div className={styles.stars}>
                {[...Array(property.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.testimonialText}>&quot;{property.testimonial}&quot;</p>
              <p className={styles.author}>
                <strong>{property.author}</strong>, {property.location}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>מוכנים למצוא את המקום שתמיד חלמתם עליו?</h3>
          <p className={styles.ctaText}>
            ערדית, התוועדות הדיגיטלית שלנו, מחכה לעזור לכם למצוא את החלום. 
            השיחה הבאה שלכם יכולה להיות תחילת החופשה המושלמת.
          </p>
          <div className={styles.ctaButtons}>
            <button 
              onClick={() => {
                const chatbot = document.querySelector('[data-chatbot]') as HTMLButtonElement;
                if (chatbot) chatbot.click();
              }}
              className={styles.ctaButtonPrimary}
            >
              שוחח עם ערדית עכשיו
            </button>
            <a 
              href="https://wa.me/972523983394" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButtonSecondary}
            >
              או דבר איתנו בווטסאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
