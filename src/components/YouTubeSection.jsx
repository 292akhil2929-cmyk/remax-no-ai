import { Play, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'X0YeF0lsHYU', title: "Don't Invest in Dubai Real Estate in 2026 Until You Watch This", label: 'Episode 1' },
  { id: 'XCrtYo-W5Es', title: 'How Smart Investors Move Capital', label: 'Episode 2' },
  { id: 'Lk8xaih-zGY', title: 'Is Dubai Real Estate in Trouble? The Real Problem', label: 'Episode 3' },
  { id: 'JSnKOFfZRIY', title: 'HNI Wealth Secrets: How Dubai Elite Invest With DAMAC', label: 'Episode 4' },
  { id: 'zPrzvt_xo8U', title: 'H1 Dubai Property Market Review', label: 'Episode 5' },
  { id: 'xOqgW9LZR44', title: "Why REMAX ZAM Is Dubai's Most Data-Driven Brokerage", label: 'About Us' },
];

function VideoCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900 hover:border-[#B87333]/50 transition-all duration-300"
    >
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative aspect-video cursor-pointer overflow-hidden bg-black" onClick={() => setPlaying(true)}>
          <img src={thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.2 }} className="w-16 h-16 rounded-full bg-gradient-to-r from-[#B87333] to-[#A86228] flex items-center justify-center">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </motion.div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-[#B87333] to-[#A86228] text-white text-xs font-heading font-bold">
              {video.label}
            </span>
          </div>
        </div>
      )}
      <div className="p-5 bg-slate-900">
        <p className="text-sm font-heading font-bold text-white line-clamp-2 group-hover:text-[#B87333] transition-colors">{video.title}</p>
      </div>
    </motion.div>
  );
}

export default function YouTubeSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#B87333]/15 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#B87333]" />
              <span className="text-xs font-heading font-bold text-[#B87333] tracking-widest uppercase">Video Education</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-black text-white">Watch. Learn. Invest Smarter.</h2>
          </div>
          <motion.a
            whileHover={{ x: 4 }}
            href="https://www.youtube.com/@REMAXZAM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-heading font-bold text-[#B87333] hover:text-[#A86228] transition-colors shrink-0"
          >
            View All Videos <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, idx) => (
            <VideoCard key={v.id} video={v} index={idx} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <a href="https://www.youtube.com/@REMAXZAM" target="_blank" rel="noopener noreferrer" className="text-sm font-heading font-bold text-[#B87333]">
            View All Videos →
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';