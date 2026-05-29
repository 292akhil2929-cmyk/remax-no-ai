import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowRight, Mic, Eye, TrendingUp, Shield, ExternalLink, Youtube } from 'lucide-react';

// ── EPISODES ──────────────────────────────────────────────────────────────────
// All YouTube video IDs pulled directly from @REMAXZAM channel
const EPISODES = [
  {
    ep: 'Episode 4',
    title: 'HNI Wealth Secrets: How Dubai Elite Invest With DAMAC',
    description: 'Uncover the secrets for scaling luxury HNI portfolios and building trust while navigating mixed sentiments in Dubai\'s current real estate market.',
    youtubeId: 'JSnKOFfZRIY',
    thumbnail: `https://i.ytimg.com/vi/JSnKOFfZRIY/maxresdefault.jpg`,
    duration: '16:02',
    guest: 'DAMAC Properties',
    tag: 'Luxury Investing',
    featured: false,
  },
  {
    ep: 'Episode 3',
    title: 'Is Dubai Real Estate in Trouble? The Real Problem Isn\'t What You Think.',
    description: 'Discover exactly how smart investors navigate the current Dubai property market. Learn to identify highly secure opportunities and filter out the noise.',
    youtubeId: 'x4fUoWMCSjQ',
    thumbnail: `https://i.ytimg.com/vi/x4fUoWMCSjQ/maxresdefault.jpg`,
    duration: '27:30',
    guest: 'Devmark',
    tag: 'Market Reality',
    featured: false,
  },
  {
    ep: 'Episode 2',
    title: 'Smart Money, Real Moves: How Smart Investors Move Capital',
    description: 'Explore how UAE developers leverage iconic design and branding to build investor wealth within Dubai\'s evolving property market.',
    youtubeId: 'XCrtYo-W5Es',
    thumbnail: `https://i.ytimg.com/vi/XCrtYo-W5Es/maxresdefault.jpg`,
    duration: '24:57',
    guest: 'Sobha Realty',
    tag: 'Wealth Strategy',
    featured: false,
  },
  {
    ep: 'Episode 1',
    title: 'Beyond the Hype: Don\'t Invest in Dubai Real Estate in 2026 Until You Watch This',
    description: 'Discover how smart investors build and grow high-performing real estate portfolios in Dubai\'s thriving property market. The episode that started it all.',
    youtubeId: 'X0YeF0lsHYU',
    thumbnail: `https://i.ytimg.com/vi/X0YeF0lsHYU/maxresdefault.jpg`,
    duration: '23:01',
    guest: 'Industry Panel',
    tag: 'Foundation',
    featured: true,
  },
];

const WHY_CARDS = [
  {
    icon: Mic,
    title: 'No Scripts. No Sales Pitches.',
    desc: 'Every episode is an unscripted conversation. Guests say what they actually think — including the risks, the challenges, and the things most agents won\'t tell you.',
  },
  {
    icon: Eye,
    title: 'Straight From the Source',
    desc: 'We bring in the developers, analysts and decision-makers themselves. You hear directly from the people shaping Dubai\'s real estate market — not through a middleman.',
  },
  {
    icon: TrendingUp,
    title: 'Data, Not Hype',
    desc: 'The Dubai market is full of inflated projections and cherry-picked statistics. Every conversation on this show is grounded in real market data.',
  },
  {
    icon: Shield,
    title: 'Built for Investors, Not Sellers',
    desc: 'This show was not built to move units. It was built to help investors make smarter decisions. If that means a guest talks about risks, that stays in the episode.',
  },
];

// ── VIDEO MODAL ───────────────────────────────────────────────────────────────
function VideoModal({ episode, onClose }) {
  return (
    <AnimatePresence>
      {episode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&rel=0`}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-black flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── EPISODE CARD ─────────────────────────────────────────────────────────────
function EpisodeCard({ episode, onPlay, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer"
      onClick={() => onPlay(episode)}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = `https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`; }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
        {/* Duration */}
        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-body px-2 py-0.5 rounded">
          {episode.duration}
        </span>
        {/* Tag */}
        <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-heading font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {episode.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-gray-400 font-body text-[10px] uppercase tracking-widest mb-1.5">{episode.ep} · {episode.guest}</p>
        <h3 className="font-heading font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-gray-500 font-body text-xs leading-relaxed line-clamp-2">{episode.description}</p>
        <div className="mt-4 flex items-center gap-1.5 text-red-600 font-heading font-semibold text-xs">
          <Play className="w-3 h-3 fill-red-600" /> Watch Episode
        </div>
      </div>
    </motion.div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function DubaiUnfiltered() {
  const [activeEpisode, setActiveEpisode] = useState(null);
  const featured = EPISODES.find(e => e.featured);
  const rest = EPISODES.filter(e => !e.featured);

  return (
    <div className="min-h-screen bg-white">
      <VideoModal episode={activeEpisode} onClose={() => setActiveEpisode(null)} />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Background image — Faisal with mic from official site */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(https://remax-zam.b-cdn.net/wp-content/uploads/2025/12/Rectangle-429.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        {/* Red accent glow */}
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.12),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            {/* Logo */}
            <img
              src="https://remax-zam.b-cdn.net/wp-content/uploads/2026/04/logo312.png"
              alt="Dubai Real Estate Unfiltered"
              className="h-20 mb-8"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h1 className="font-display font-black text-white leading-[0.95] mb-5">
              <span className="block text-4xl sm:text-5xl lg:text-6xl">Dubai Real Estate</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-red-500">Unfiltered</span>
            </h1>
            <p className="text-white/70 font-body text-base leading-relaxed max-w-xl mb-8">
              Real conversations with Dubai's top developers and industry experts — breaking down market realities, opportunities, and investment strategies. <strong className="text-white">No scripts. No sales pitches. Just the truth.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setActiveEpisode(featured)}
                className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Latest Episode
              </button>
              <a
                href="https://www.youtube.com/@REMAXZAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <Youtube className="w-4 h-4" /> Subscribe on YouTube
              </a>
            </div>
          </motion.div>

          {/* Right — intro/trailer thumbnail → opens on YouTube */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <a
              href="https://www.youtube.com/watch?v=hum-yWzaMnY"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden aspect-video shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="https://i.ytimg.com/vi/hum-yWzaMnY/maxresdefault.jpg"
                alt="Dubai Real Estate: The Unfiltered Truth (2026 Market Analysis)"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = 'https://i.ytimg.com/vi/hum-yWzaMnY/hqdefault.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-red-400 font-body text-[10px] uppercase tracking-widest mb-1">The Initiative · Watch on YouTube</p>
                <p className="text-white font-heading font-bold text-sm leading-snug">Dubai Real Estate: The Unfiltered Truth (2026 Market Analysis)</p>
              </div>
            </a>
            <p className="text-white/30 font-body text-[10px] text-center mt-3 uppercase tracking-widest">The video that launched this initiative</p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY THIS INITIATIVE ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Why This Exists</p>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight mb-6">
                In a Market Full of Noise,<br />
                <span className="text-red-600">Investors Deserve Clarity</span>
              </h2>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                The Dubai real estate market is one of the most exciting in the world — and one of the most misrepresented. Too much of what investors hear is curated, polished and designed to sell rather than to inform.
              </p>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                Dubai Real Estate Unfiltered was built to change that. Every episode brings you the developers, analysts and market insiders who actually shape this city — and asks them the questions that most agents are afraid to ask.
              </p>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-8">
                At REMAX ZAM, we believe that an informed investor is a better investor. And a better investor makes decisions they don't regret. That is the entire purpose of this show.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@REMAXZAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                >
                  <Youtube className="w-4 h-4" /> Subscribe Free
                </a>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-gray-700 hover:text-black font-heading font-semibold text-sm transition-colors">
                  Speak to an Advisor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CARDS.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-heading font-bold text-gray-900 text-sm mb-2">{title}</h4>
                  <p className="text-gray-500 font-body text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL EPISODES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">All Episodes</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-4xl font-display font-black text-gray-900 leading-tight">
                Every Episode,<br />Every Conversation
              </h2>
              <a
                href="https://www.youtube.com/@REMAXZAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-gray-500 hover:text-red-600 transition-colors shrink-0"
              >
                View on YouTube <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Featured episode — large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer mb-6"
            onClick={() => setActiveEpisode(featured)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-0">
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = `https://i.ytimg.com/vi/${featured.youtubeId}/hqdefault.jpg`; }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-body px-2 py-0.5 rounded">{featured.duration}</span>
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-heading font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Start Here · {featured.tag}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-gray-400 font-body text-[10px] uppercase tracking-widest mb-2">{featured.ep} · {featured.guest}</p>
                <h3 className="font-heading font-bold text-gray-900 text-xl leading-snug mb-3 group-hover:text-red-600 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">{featured.description}</p>
                <div className="flex items-center gap-2 text-red-600 font-heading font-semibold text-sm">
                  <Play className="w-4 h-4 fill-red-600" /> Watch Episode 1
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remaining episodes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {rest.map((ep, i) => (
              <EpisodeCard key={ep.youtubeId} episode={ep} onPlay={setActiveEpisode} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ── */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://remax-zam.b-cdn.net/wp-content/uploads/2026/04/logo312.png"
              alt="Dubai Real Estate Unfiltered"
              className="h-16 mx-auto mb-8"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
              New Episodes Drop Every Month
            </h2>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xl mx-auto mb-10">
              Subscribe on YouTube and never miss a conversation. Each episode brings you a different developer, a different perspective, and a different set of investment insights you won't find anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@REMAXZAM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors"
              >
                <Youtube className="w-5 h-5" /> Subscribe on YouTube
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold text-sm px-8 py-4 rounded-xl transition-colors"
              >
                Speak to an Advisor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}