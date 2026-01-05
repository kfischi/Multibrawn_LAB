import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['hebrew'] });

export const metadata: Metadata = {
  title: 'Multibrawn - חופשות ואירועים',
  description: 'מציאת לוקיישנים מושלמים לחופשות ואירועים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
      </head>
      <body className={rubik.className}>
        {children}

        {/* N8N Chat Integration */}
        <script type="module" dangerouslySetInnerHTML={{
          __html: `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

            createChat({
              webhookUrl: 'http://n8n-z4scwo0kg0c088wsswwcc8kw.185.216.203.28.sslip.io/webhook-test/650fbb2de97b4ff593c0d4b0ab1c7a63',
              mode: 'window',
              target: '#n8n-chat',
              showWelcomeScreen: true,
              initialMessages: [
                'היי! אני ערדית 👋',
                'איך אני יכולה לעזור לכם למצוא את החופשה הבאה?'
              ],
              i18n: {
                en: {
                  title: 'ערדית - העוזרת הדיגיטלית',
                  subtitle: 'זמינה עבורך 24/7',
                  footer: '',
                  getStarted: 'התחל שיחה',
                  inputPlaceholder: 'כתוב הודעה...',
                },
              },
              style: {
                default: {
                  background: '#0070f3',
                  logo: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg',
                }
              }
            });
          `
        }} />
      </body>
    </html>
  );
}
