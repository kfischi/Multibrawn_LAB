import { getLocations } from '@/lib/cloudinary';
import { CldImage } from 'next-cloudinary';
import { MapPin, Users, Info, MessageCircle } from 'lucide-react';

// הגדרת הטיפוס כך ש-params הוא Promise, כפי ש-Next.js 15 דורש
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleLocationPage({ params }: PageProps) {
  // חייבים להשתמש ב-await כדי לחלץ את ה-id מתוך ה-Promise
  const { id } = await params;

  return (
    <div className="min-h-screen pb-20">
      {/* ... שאר ה-JSX שכתבנו נשאר ללא שינוי ... */}
      <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden border-b border-[var(--glass-border)]">
        <CldImage
          src={id}
          alt="Location Detail"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>
      {/* ... */}
    </div>
  );
}
