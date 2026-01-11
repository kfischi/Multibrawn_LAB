import { getLocations } from '@/lib/cloudinary';
import { CldImage } from 'next-cloudinary';
import { Camera, MapPin, Users, Share2 } from 'lucide-react';

export default async function SingleLocationPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section עם תמונה רחבה */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <CldImage
          src={id}
          alt="Location Preview"
          fill
          className="object-cover transition-transform duration-[2s] hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* תוכן הדף */}
      <main className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* צד שמאל: פירוט ותמונות נוספות */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
              <h1 className="text-5xl font-black mb-4 tracking-tighter">PREMIUM SPACE</h1>
              <div className="flex items-center gap-4 text-gray-400 mb-8">
                <span className="flex items-center gap-1"><MapPin size={16} className="text-gold"/> תל אביב והמרכז</span>
                <span className="flex items-center gap-1"><Camera size={16} className="text-gold"/> מתאים לצילומי וידאו/סטילס</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                חלל מעוצב בקפידה עם דגש על אסתטיקה מודרנית. תאורה טבעית מרהיבה ומרחב עבודה נוח להפקה.
              </p>
            </div>

            {/* גריד נתונים מהיר */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'קיבולת', value: '40 איש', icon: Users },
                { label: 'שטח', value: '180 מ"ר', icon: MapPin },
                { label: 'חניה', value: 'בשפע', icon: Camera },
                { label: 'חשמל', value: 'תלת פאזי', icon: Share2 },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <item.icon className="mx-auto mb-3 text-gold" size={20} />
                  <div className="text-xs text-gray-500 uppercase">{item.label}</div>
                  <div className="font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* צד ימין: תיבת יצירת קשר דביקה (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass p-8 rounded-3xl border border-gold/20 shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)]">
              <h3 className="text-2xl font-bold mb-2">מעוניין בלוקיישן?</h3>
              <p className="text-gray-400 text-sm mb-8">ערדית מחכה לפנייה שלך כדי לתאם סיור או לסגור תאריך.</p>
              
              <div className="space-y-4">
                <a href={`https://wa.me/972500000000?text=היי, אשמח לפרטים על לוקיישן ${id}`} 
                   className="w-full bg-gold hover:bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                   דברו איתי בווטסאפ
                </a>
                <button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <Share2 size={18} /> שתף לוקיישן
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
