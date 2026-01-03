'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SmartLeadForm from '@/components/ui/SmartLeadForm'; // הייבוא מהקובץ החדש

export default function HomePage() {
  // פונקציה פשוטה לגלילה
  const scrollToForm = () => {
    document.getElementById('smart-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dptyfvwyo/video/upload/v1763834667/Video-Multi_b11ehy.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">הלוקיישן המושלם מחכה לכם</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">וילות יוקרה, צימרים ומתחמי אירועים בסטנדרט בינלאומי</p>
          <div className="flex gap-4">
            <button onClick={scrollToForm} className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold transition-all">
              בואו נמצא לכם מקום
            </button>
            <Link href="/gallery" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white text-white rounded-full font-bold transition-all">
              צפו בגלריה
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['villa', 'zimmer', 'apartment', 'hotel'].map((cat) => (
            <Link key={cat} href={`/gallery?category=${cat}`} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
               <Image 
                 src="https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg" 
                 alt={cat} fill className="object-cover group-hover:scale-110 transition-transform duration-500" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                 <h3 className="text-white text-xl font-bold capitalize">{cat}</h3>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* הטופס החכם - הלב של האוטומציה */}
      <section id="smart-form" className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dptyfvwyo/image/upload/v1760818934/22_tt9jvz.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">מוכנים למצוא את המקום המושלם?</h2>
            <p className="text-gray-300">השאירו פרטים וערדית תמצא לכם את ההתאמה המדויקת</p>
          </div>
          <SmartLeadForm />
        </div>
      </section>
    </div>
  );
}
