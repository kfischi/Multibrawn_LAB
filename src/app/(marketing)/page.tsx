import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      {/* אפקט תאורה ברקע */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-4">
          MULTI<span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">BRAWN</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl uppercase tracking-[0.3em] mb-12">
          Premium Location Scouting
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/gallery" className="px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all uppercase tracking-widest text-sm">
            Explore Gallery
          </Link>
          <Link href="/contact" className="px-12 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-md transition-all uppercase tracking-widest text-sm">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
