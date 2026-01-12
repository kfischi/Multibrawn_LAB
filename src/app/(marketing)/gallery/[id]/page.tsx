import { CldImage } from 'next-cloudinary';
import { MapPin, Users, Info, MessageCircle } from 'lucide-react';

export default async function SingleLocationPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  return (
    <div className="min-h-screen pb-20 bg-black text-white">
      <div className="relative h-[60vh] w-full overflow-hidden border-b border-[var(--glass-border)]">
        <CldImage
          src={id}
          alt="Location Detail"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      <main className="container -mt-20 relative z-10 px-6">
        <div className="glass p-8 rounded-[var(--radius-lg)] border border-[var(--glass-border)] animate-fadeIn">
          <h1 className="gradient-text mb-4 uppercase tracking-tighter text-4xl font-black">
            לוקיישן: {id}
          </h1>
          <p className="text-gray-300 text-xl font-medium max-w-2xl">
            חלל פרימיום מעוצב, מוכן לצילומים והפקות ברמה הגבוהה ביותר.
          </p>
          
          <div className="mt-8">
            <a 
              href={`https://wa.me/972500000000?text=היי ערדית, אשמח לפרטים על לוקיישן ${id}`}
              className="inline-flex items-center gap-2 bg-[var(--gradient-pink)] px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-all shadow-xl"
            >
              <MessageCircle size={20} />
              דברו עם ערדית בווטסאפ
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
