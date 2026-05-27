import { Play } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    id: 'X0YeF0lsHYU',
    title: "Don't Invest in Dubai Real Estate in 2026 Until You Watch This",
    label: 'Episode 1',
  },
  {
    id: 'XCrtYo-W5Es',
    title: 'How Smart Investors Move Capital',
    label: 'Episode 2',
  },
  {
    id: 'Lk8xaih-zGY',
    title: 'Is Dubai Real Estate in Trouble? The Real Problem',
    label: 'Episode 3',
  },
  {
    id: 'JSnKOFfZRIY',
    title: 'HNI Wealth Secrets: How Dubai Elite Invest With DAMAC',
    label: 'Episode 4',
  },
  {
    id: 'zPrzvt_xo8U',
    title: 'H1 Dubai Property Market Review',
    label: 'Episode 5',
  },
  {
    id: 'xOqgW9LZR44',
    title: "Why REMAX ZAM Is Dubai's Most Data-Driven Brokerage",
    label: 'About Us',
  },
];

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className="rounded-lg overflow-hidden border border-border/50 bg-card group">
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="relative aspect-video cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          <img src={thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-primary text-white shadow">
              {video.label}
            </span>
          </div>
        </div>
      )}
      <div className="p-4">
        <p className="text-sm font-heading font-semibold text-foreground line-clamp-2">{video.title}</p>
      </div>
    </div>
  );
}

export default function YouTubeSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2 uppercase">Dubai Real Estate Unfiltered</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Watch. Learn. Invest Smarter.</h2>
          </div>
          <a
            href="https://www.youtube.com/@REMAXZAM"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View All Videos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <a
            href="https://www.youtube.com/@REMAXZAM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-heading font-semibold text-primary hover:text-primary/80"
          >
            View All Videos →
          </a>
        </div>
      </div>
    </section>
  );
}