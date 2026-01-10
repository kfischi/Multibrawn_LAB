'use client';

import { motion } from 'framer-motion';
import styles from './Partnerships.module.css';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

export default function PartnershipsPage() {
  return (
    <div className={styles.partnersPage}>
      <section className={styles.hero}>
        <h1 className="gradient-text">הפוך את הנכס שלך ללוקיישן הבא</h1>
        <p className={styles.subtitle}>אנחנו מחברים בין החללים המיוחדים ביותר להפקות המובילות בישראל.</p>
      </section>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { title: 'חשיפה מקסימלית', desc: 'הנכס שלך יוצג בפני במאים ומפיקים מובילים.', icon: Globe },
          { title: 'ניהול מלא', desc: 'אנחנו מטפלים בכל הלוגיסטיקה, מהתיאום ועד הסגירה.', icon: Zap },
          { title: 'ביטחון ושקט', desc: 'עבודה מול גורמים מקצועיים בלבד עם כיסוי מלא.', icon: ShieldCheck },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[var(--radius-lg)] text-center"
          >
            <item.icon className="mx-auto mb-6 text-[var(--color-blue)]" size={40} />
            <h3 className="mb-4">{item.title}</h3>
            <p className="text-[var(--color-text-muted)]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <button className="bg-[var(--gradient-pink)] text-white px-12 py-5 rounded-full font-black shadow-xl hover:scale-105 transition-all">
          שלח לנו את הנכס שלך
        </button>
      </div>
    </div>
  );
}
