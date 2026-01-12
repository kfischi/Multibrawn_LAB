import { getLocations } from '@/lib/cloudinary';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default async function GalleryPage(props: {
  params: Promise<{ id?: string }>;
}) {
  // ב-Next 15 חייבים await גם אם לא משתמשים בזה כרגע כדי לעבור Type Check
  await props.params;
  const locations = await getLocations();

  return (
    <div className="container py-20 min-h-screen">
      <h1 className="gradient-text text-center mb-16 uppercase tracking-tighter">
        Our Locations
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((loc: any) => (
          <Link 
            key={loc.id} 
            href={`/gallery/${loc.id}`}
            className="glass group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] transition-transform hover:-translate-y-2 shadow-lg"
          >
            <CldImage
              src={loc.id}
              alt="Location"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-bold uppercase tracking-widest">צפה בפרטים</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
