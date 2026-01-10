import { getLocations } from '@/lib/cloudinary';
import { CldImage } from 'next-cloudinary';
import * as motion from 'framer-motion/client'; // שימוש בגרסת הלקוח

export default async function GalleryPage() {
  const locations = await getLocations();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-black tracking-tighter mb-4 text-gold">LOCATIONS</h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">Curated Space Discovery</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {locations.map((loc: any, index: number) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
          >
            <CldImage
              src={loc.id}
              alt={loc.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..." // כאן נכניס בהמשך Base64 קטן לטעינה חלקה
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-light tracking-tight transition-all group-hover:text-gold">
                {loc.title}
              </h3>
              <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500 mt-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
