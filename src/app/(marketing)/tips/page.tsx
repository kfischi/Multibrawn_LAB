'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Play, X } from 'lucide-react';
import styles from './Tips.module.css';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';

export default function TipsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const reels = [
    {
      id: 'reel1',
      title: 'שבת חתן בראש שקט',
      summary: 'איך לבחור לוקיישן שמתאים לכל המשפחה בלי כאב ראש.',
      thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1763828299/%D7%A9%D7%91%D7%AA_%D7%97%D7%AA%D7%9F_zo14ig.png',
      video: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1763684490/%D7%A9%D7%91%D7%AA_%D7%97%D7%AA%D7%9F_gamaqi.mp4',
    },
    {
      id: 'reel2',
      title: 'נוסעים לאילת? תיזהרו',
      summary: '3 דברים שאתם חייבים לבדוק לפני שאתם סוגרים וילה באילת.',
      thumbnail: 'https://res.cloudinary.com/dptyfvwyo/image/upload/v1763828637/%D7%90%D7%99%D7%9C%D7%AA_rtmczk.png',
      video: 'https://res.cloudinary.com/dptyfvwyo/video/upload/v1763684426/%D7%90%D7%99%D7%9C%D7%AA_ba7jjj.mp4',
    },
    // ... שאר הטיפים
  ];

  const shareTip = (title: string, id: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href + '#' + id,
      });
    }
  };

  return (
    <div className="container py-12">
      {/* Header מוגדל עם Gradient Text */}
      <div className="text-center mb-16 animate-fadeIn">
        <h1 className="gradient-text mb-4">טיפים מקצועיים</h1>
        <p className="text-[var(--color-text-secondary)] text-xl font-light">
          הסודות של Multibrawn להפקה מושלמת
        </p>
      </div>

      {/* Grid משופר עם Framer Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-[var(--radius-lg)] overflow-hidden flex flex-col group"
          >
            {/* Thumbnail עם Overlay של כפתור Play */}
            <div 
              className="relative aspect-[9/16] cursor-pointer overflow-hidden"
              onClick={() => { setCurrentVideo(reel.video); setModalOpen(true); }}
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
                  <Play fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-black text-[var(--color-text-primary)]">{reel.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {reel.summary}
              </p>
              
              <div className="pt-4 flex justify-between items-center border-t border-[var(--glass-border)]">
                <button 
                  onClick={() => { setCurrentVideo(reel.video); setModalOpen(true); }}
                  className="text-[var(--color-blue)] font-bold text-sm hover:underline"
                >
                  צפה בטיפ
                </button>
                <button 
                  onClick={() => shareTip(reel.title, reel.id)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Share2 size={18} className="text-[var(--color-pink)]" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal משופר */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center border border-white/20"
                onClick={() => setModalOpen(false)}
              >
                <X size={20} />
              </button>
              <video
                src={currentVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
