import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* תאורת רקע עדינה */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4">
          MULTI<span className="gradient-text">BRAWN</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-lg uppercase tracking-[0.4em] mb-12 font-light">
          Premium Location Scouting & Production
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/gallery" className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all uppercase tracking-widest text-xs">
            Explore Gallery
          </Link>
          <Link href="/contact" className="w-full md:w-auto px-12 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
