import { getLocations } from '@/lib/cloudinary';
import { CldImage } from 'next-cloudinary';
import { MapPin, Users, Info, MessageCircle } from 'lucide-react';

export default async function SingleLocationPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    // שימוש ברקע הגרדיאנטי המקורי מה-CSS שלך
    <div className="min-h-screen pb-20">
      
      {/* Hero Image - Glass Effect Header */}
      <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden border-b border-[var(--glass-border)]">
        <CldImage
          src={id}
          alt="Location Detail"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-transparent opacity-60" />
      </div>

      <main className="container -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-8 rounded-[var(--radius-lg)] animate-fadeIn">
              <h1 className="text-[var(--color-text-primary)] mb-4 uppercase tracking-tighter">
                Premium Space
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="flex items-center gap-2 bg-[var(--glass-bg)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--glass-border)]">
                  <MapPin size={16} className="text-[var(--color-blue)]" /> מרכז הארץ
                </span>
                <span className="flex items-center gap-2 bg-[var(--glass-bg)] px-4 py-2 rounded-full text-sm font-bold border border-[var(--glass-border)]">
                  <Users size={16} className="text-[var(--color-purple)]" /> עד 50 משתתפים
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-xl font-medium leading-relaxed">
                לוקיישן ייחודי המשלב אסתטיקה מודרנית עם נוחות פונקציונלית. 
                מתאים במיוחד להפקות תוכן, ימי צילום ואירועי בוטיק.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slideUp">
              {[
                { label: 'תאורה', value: 'טבעית', color: 'var(--color-cyan-light)' },
                { label: 'גודל', value: '150 מ"ר', color: 'var(--color-blue)' },
                { label: 'חניה', value: 'פרטית', color: 'var(--color-purple)' },
                { label: 'מיזוג', value: 'מלא', color: 'var(--color-pink)' },
              ].map((f, i) => (
                <div key={i} className="glass p-4 rounded-[var(--radius-md)] text-center border-b-4" style={{ borderColor: f.color }}>
                   <div className="text-[var(--color-text-muted)] text-xs uppercase font-bold mb-1">{f.label}</div>
                   <div className="text-[var(--color-text-primary)] font-black">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 glass p-8 rounded-[var(--radius-xl)] border-2 border-[var(--site-accent)] animate-scaleIn shadow-xl">
              <h3 className="gradient-text mb-4">מעוניינים בפרטים?</h3>
              <p className="mb-8 font-medium">ערדית מחכה לעזור לך להתאים את הלוקיישן להפקה שלך.</p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/972500000000?text=היי, אשמח לפרטים על לוקיישן ${id}`}
                  className="block w-full text-center py-5 rounded-[var(--radius-full)] font-black uppercase tracking-widest transition-all glass-hover bg-[var(--gradient-pink)] text-white shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    צ'אט עם ערדית
                  </div>
                </a>
                
                <button className="w-full py-4 rounded-[var(--radius-full)] font-bold text-[var(--color-text-primary)] border border-[var(--glass-border)] hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Info size={18} /> שמירת לוקיישן
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
