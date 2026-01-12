import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {/* תפריט עליון קבוע (Navbar) */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black italic tracking-tighter">
            MULTI<span className="text-cyan-400">BRAWN</span>
          </div>
          <div className="flex gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <a href="/gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
