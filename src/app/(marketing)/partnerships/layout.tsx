import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'שיתופי פעולה | MULTIBRAWN - הצטרפו לרשת השיווק המובילה',
  description: 'הצטרפו לשיתוף פעולה עם MULTIBRAWN והגדילו את החשיפה וההזמנות לנכסים שלכם. עמלה רק על תוצאות, ללא עלויות הצטרפות. הצטרפו עכשיו!',
  keywords: 'שיתוף פעולה צימרים, אפיליאייט צימרים, שיווק צימרים, רשת שיווק נופש, שותפות עסקית',
  openGraph: {
    title: 'שיתופי פעולה עם MULTIBRAWN | הגדל חשיפה והזמנות',
    description: 'הצטרף לרשת השיווק המובילה למתחמי נופש. עמלה רק על תוצאות, ללא עלויות קבועות.',
    images: [
      {
        url: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1735555555/partnerships-og.jpg',
        width: 1200,
        height: 630,
        alt: 'שיתופי פעולה MULTIBRAWN',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'שיתופי פעולה | MULTIBRAWN',
    description: 'הצטרף לרשת השיווק המובילה למתחמי נופש בישראל',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
