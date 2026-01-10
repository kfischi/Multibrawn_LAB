"use client";
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

const locations = [
  { id: '1', publicId: 'multibrawn/loc1', title: 'Modern Penthouse', tag: 'Luxury' },
  { id: '2', publicId: 'multibrawn/loc2', title: 'Industrial Studio', tag: 'Urban' },
  // בהמשך זה יגיע מ-API/n8n
];

export default function LocationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {locations.map((loc, index) => (
        <motion.div
          key={loc.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative aspect-[4/5] overflow-hidden bg-gray-900 rounded-sm"
        >
          {/* שימוש ב-Cloudinary לאופטימיזציה מקסימלית */}
          <CldImage
            src={loc.publicId}
            alt={loc.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Overlay טקסט מינימליסטי */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-gold text-xs uppercase tracking-widest mb-2">{loc.tag}</span>
            <h3 className="text-white text-2xl font-light tracking-tight">{loc.title}</h3>
            <div className="w-0 group-hover:w-full h-[1px] bg-gold transition-all duration-500 mt-4"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
