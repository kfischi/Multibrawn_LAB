'use client';

import { useState } from 'react';

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    propertyCount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `
🤝 *בקשת שיתוף פעולה חדשה*

👤 שם: ${formData.name}
📧 אימייל: ${formData.email}
📱 טלפון: ${formData.phone}
🌐 אתר: ${formData.website}
🏠 מספר נכסים: ${formData.propertyCount}

💬 הודעה:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/972523983394?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style jsx>{`
        .partnerships {
          min-height: 100vh;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
        }

        .hero {
          background: linear-gradient(135deg, #00E0FF 0%, #A06BFF 50%, #FF5EA1 100%);
          padding: 100px 0 80px;
          text-align: center;
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .hero p {
          font-size: 1.5rem;
          margin: 0 0 2rem 0;
          opacity: 0.95;
        }

        .heroCta {
          display: inline-block;
          padding: 18px 48px;
          background: white;
          color: #A06BFF;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.2rem;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .heroCta:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .content {
          padding: 80px 0;
        }

        .section {
          margin-bottom: 80px;
        }

        .section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin: 0 0 1rem 0;
          color: #1a202c;
        }

        .section .subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #718096;
          margin: 0 0 3rem 0;
        }

        .howItWorks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .step {
          text-align: center;
        }

        .stepNumber {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #00E0FF 0%, #A06BFF 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 4px 20px rgba(160, 107, 255, 0.3);
        }

        .step h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          color: #2d3748;
        }

        .step p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .benefit {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .benefit:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .benefitIcon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit h3 {
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          color: #2d3748;
        }

        .benefit p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .commission {
          background: linear-gradient(135deg, rgba(0, 224, 255, 0.1) 0%, rgba(160, 107, 255, 0.1) 100%);
          padding: 3rem;
          border-radius: 20px;
          margin-top: 3rem;
        }

        .commissionGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .commissionCard {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .commissionCard h4 {
          font-size: 1.3rem;
          margin: 0 0 0.5rem 0;
          color: #A06BFF;
        }

        .commissionRate {
          font-size: 3rem;
          font-weight: 800;
          color: #00E0FF;
          margin: 0.5rem 0;
        }

        .commissionCard p {
          font-size: 1rem;
          color: #718096;
          margin: 0;
        }

        .form {
          max-width: 700px;
          margin: 3rem auto 0;
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .formGroup {
          margin-bottom: 1.5rem;
        }

        .formGroup label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2d3748;
        }

        .formGroup input,
        .formGroup select,
        .formGroup textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .formGroup input:focus,
        .formGroup select:focus,
        .formGroup textarea:focus {
          outline: none;
          border-color: #A06BFF;
          box-shadow: 0 0 0 3px rgba(160, 107, 255, 0.1);
        }

        .formGroup textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submitBtn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #00E0FF 0%, #A06BFF 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submitBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(160, 107, 255, 0.3);
        }

        .faq {
          max-width: 900px;
          margin: 3rem auto 0;
        }

        .faqItem {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .faqItem h4 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: #2d3748;
        }

        .faqItem p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .partners {
          text-align: center;
          margin-top: 3rem;
        }

        .partnerLogos {
          display: flex;
          gap: 3rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 2rem;
          opacity: 0.6;
        }

        .partnerLogo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #718096;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 0 40px;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1.2rem;
          }

          .heroCta {
            padding: 14px 32px;
            font-size: 1.1rem;
          }

          .section h2 {
            font-size: 2rem;
          }

          .howItWorks {
            gap: 2rem;
          }

          .benefits {
            gap: 1.5rem;
          }

          .form {
            padding: 2rem 1.5rem;
          }

          .commissionGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="partnerships">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>שיתופי פעולה עם MULTIBRAWN</h1>
            <p>הגדל חשיפה והזמנות לנכסים שלך - בחינם!</p>
            <a href="#join" className="heroCta">
              הצטרפו עכשיו
            </a>
          </div>
        </section>

        {/* Main Content */}
        <div className="content">
          <div className="container">
            
            {/* How It Works */}
            <section className="section">
              <h2>איך זה עובד?</h2>
              <p className="subtitle">תהליך פשוט ושקוף - 4 שלבים בלבד</p>
              
              <div className="howItWorks">
                <div className="step">
                  <div className="stepNumber">1</div>
                  <h3>הצטרפות</h3>
                  <p>
                    מלא טופס קצר או שלח לנו הודעה ב-WhatsApp.
                    נחזור אליך תוך 24 שעות.
                  </p>
                </div>

                <div className="step">
                  <div className="stepNumber">2</div>
                  <h3>לינק אפיליאייט</h3>
                  <p>
                    נקבל לך לינק אפיליאייט מיוחד לנכסים שלך
                    עם tracking מלא.
                  </p>
                </div>

                <div className="step">
                  <div className="stepNumber">3</div>
                  <h3>פרסום באתר</h3>
                  <p>
                    הנכסים שלך יופיעו באתר MULTIBRAWN
                    עם חשיפה לאלפי מבקרים.
                  </p>
                </div>

                <div className="step">
                  <div className="stepNumber">4</div>
                  <h3>עמלה על הזמנה</h3>
                  <p>
                    על כל הזמנה שמגיעה דרך האתר שלנו,
                    אנחנו מקבלים עמלה. Win-Win!
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="section">
              <h2>למה להצטרף ל-MULTIBRAWN?</h2>
              <p className="subtitle">יתרונות שלא תמצא בשום מקום אחר</p>
              
              <div className="benefits">
                <div className="benefit">
                  <div className="benefitIcon">🚀</div>
                  <h3>חשיפה מקסימלית</h3>
                  <p>
                    הנכסים שלך יקבלו חשיפה לאלפי מבקרים חודשיים
                    באתר MULTIBRAWN ובערוצי השיווק שלנו.
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">💰</div>
                  <h3>עלות אפסית</h3>
                  <p>
                    אין עלות הצטרפות, אין דמי מנוי חודשיים.
                    משלם רק על תוצאות - הזמנות שמגיעות דרכנו!
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">🎯</div>
                  <h3>לקוחות איכותיים</h3>
                  <p>
                    AI Bot חכם מסנן לידים ושולח רק לקוחות רציניים
                    עם כוונת הזמנה אמיתית.
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">📊</div>
                  <h3>דשבורד מעקב</h3>
                  <p>
                    מערכת tracking מתקדמת - תראה בדיוק כמה קליקים,
                    כמה הזמנות וכמה עמלה הרווחנו.
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">🤝</div>
                  <h3>שותפות אמיתית</h3>
                  <p>
                    אנחנו לא פלטפורמת הזמנות - אנחנו שותפים שלך
                    לצמיחה. ההצלחה שלך = ההצלחה שלנו!
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">⚡</div>
                  <h3>התחלה מהירה</h3>
                  <p>
                    תוך 48 שעות הנכסים שלך כבר באתר ומקבלים חשיפה.
                    אין צורך בהתקנות מורכבות או שינויים באתר שלך.
                  </p>
                </div>
              </div>
            </section>

            {/* Commission Structure */}
            <section className="section">
              <h2>מבנה עמלות</h2>
              <p className="subtitle">שקיפות מלאה - אתה יודע בדיוק מה אתה משלם</p>
              
              <div className="commission">
                <div className="commissionGrid">
                  <div className="commissionCard">
                    <h4>עמלה סטנדרטית</h4>
                    <div className="commissionRate">10%</div>
                    <p>על כל הזמנה שמגיעה דרך האתר שלנו</p>
                  </div>

                  <div className="commissionCard">
                    <h4>שותפים VIP</h4>
                    <div className="commissionRate">8%</div>
                    <p>לשותפים עם 10+ נכסים או 50+ הזמנות/שנה</p>
                  </div>

                  <div className="commissionCard">
                    <h4>אין עלויות נסתרות</h4>
                    <div className="commissionRate">₪0</div>
                    <p>ללא דמי הצטרפות, מנוי חודשי או עלויות נוספות</p>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>
                    💡 <strong>לדוגמה:</strong> הזמנה של ₪2,000 = עמלה של ₪200 (10%)
                    <br />
                    אתה מקבל ₪1,800 ואנחנו ₪200. פשוט וברור!
                  </p>
                </div>
              </div>
            </section>

            {/* Who Can Join */}
            <section className="section">
              <h2>מי יכול להצטרף?</h2>
              
              <div className="benefits">
                <div className="benefit">
                  <div className="benefitIcon">🏢</div>
                  <h3>אתרי צימרים</h3>
                  <p>
                    יש לך אתר צימרים עם 5+ נכסים? מושלם!
                    דוגמה: tzimer360.co.il
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">🏠</div>
                  <h3>בעלי נכסים בודדים</h3>
                  <p>
                    יש לך צימר, וילה או מתחם אירועים אחד?
                    גם זה מעולה - בוא נשתף פעולה!
                  </p>
                </div>

                <div className="benefit">
                  <div className="benefitIcon">📱</div>
                  <h3>משווקים ומנהלי נכסים</h3>
                  <p>
                    אתה מנהל/משווק מספר נכסים?
                    יש לנו פתרונות מותאמים אישית.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="section">
              <h2>שאלות נפוצות</h2>
              
              <div className="faq">
                <div className="faqItem">
                  <h4>❓ האם יש עלות הצטרפות?</h4>
                  <p>
                    לא! ההצטרפות חינמית לגמרי. אין דמי הצטרפות, אין דמי מנוי חודשיים.
                    אתה משלם רק עמלה על הזמנות שמגיעות דרכנו.
                  </p>
                </div>

                <div className="faqItem">
                  <h4>❓ איך אני יודע כמה הזמנות הגיעו דרככם?</h4>
                  <p>
                    יש לנו מערכת tracking מלאה. כל הזמנה שמגיעה דרך הלינק האפיליאייט
                    נרשמת אוטומטית במערכת. תקבל דשבורד אישי לצפייה בזמן אמת.
                  </p>
                </div>

                <div className="faqItem">
                  <h4>❓ כמה זמן לוקח להצטרף?</h4>
                  <p>
                    התהליך מהיר מאוד! מלא את הטופס או שלח הודעה ב-WhatsApp,
                    ותוך 24-48 שעות הנכסים שלך כבר באתר ומקבלים חשיפה.
                  </p>
                </div>

                <div className="faqItem">
                  <h4>❓ האם אני צריך לשנות משהו באתר שלי?</h4>
                  <p>
                    לא! אין צורך בשום שינוי באתר שלך. אנחנו לוקחים את המידע
                    על הנכסים, מעלים אותם לאתר MULTIBRAWN, וכל הזמנה מופנית אליך
                    דרך הלינק האפיליאייט שלך.
                  </p>
                </div>

                <div className="faqItem">
                  <h4>❓ מה קורה אם אני רוצה להפסיק?</h4>
                  <p>
                    אין התחייבות! אתה יכול להפסיק בכל רגע. פשוט תודיע לנו
                    ונסיר את הנכסים שלך מהאתר תוך 24 שעות. אין קנסות או עמלות ביטול.
                  </p>
                </div>

                <div className="faqItem">
                  <h4>❓ איך משלמים את העמלה?</h4>
                  <p>
                    העמלה משולמת חודשית, עד ה-5 לחודש הבא. אפשר לקבל את התשלום
                    בהעברה בנקאית, PayPal, או bit. הכל שקוף ומתועד.
                  </p>
                </div>
              </div>
            </section>

            {/* Join Form */}
            <section className="section" id="join">
              <h2>מוכנים להצטרף?</h2>
              <p className="subtitle">מלא את הפרטים ונחזור אליך תוך 24 שעות</p>
              
              <form className="form" onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">שם מלא *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="שם מלא"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">אימייל *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">טלפון *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="050-1234567"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="website">כתובת אתר (אם יש)</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="propertyCount">כמה נכסים יש לך? *</label>
                  <select
                    id="propertyCount"
                    name="propertyCount"
                    required
                    value={formData.propertyCount}
                    onChange={handleChange}
                  >
                    <option value="">בחר...</option>
                    <option value="1">נכס אחד</option>
                    <option value="2-5">2-5 נכסים</option>
                    <option value="6-10">6-10 נכסים</option>
                    <option value="11-20">11-20 נכסים</option>
                    <option value="20+">יותר מ-20 נכסים</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="message">ספר לנו עוד (אופציונלי)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספר לנו על העסק שלך, סוגי הנכסים, וכל מידע נוסף שחשוב לך..."
                  />
                </div>

                <button type="submit" className="submitBtn">
                  שלח בקשה והצטרף עכשיו 🚀
                </button>

                <p style={{ marginTop: '1rem', textAlign: 'center', color: '#718096', fontSize: '0.9rem' }}>
                  או שלח הודעה ישירות ב-
                  <a href="https://wa.me/972523983394" target="_blank" rel="noopener noreferrer" style={{ color: '#A06BFF', fontWeight: '600', marginRight: '4px' }}>
                    WhatsApp
                  </a>
                </p>
              </form>
            </section>

            {/* Existing Partners */}
            <section className="section partners">
              <h2>שותפים קיימים</h2>
              <p className="subtitle">הצטרף לרשת הגדלה של אתרים ובעלי נכסים</p>
              
              <div className="partnerLogos">
                <div className="partnerLogo">Tzimer360</div>
                <div className="partnerLogo">+ עוד רבים בקרוב...</div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
