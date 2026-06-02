import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useAudience } from '@/lib/AudienceContext';

const DUBAI_BG = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/e55db5afd_generated_image.png';

const communities = [
  'Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Business Bay', 'Dubai Hills Estate',
];

const HERO_CONTENT = {
  investor: {
    eyebrow: 'Dubai Real Estate Investment',
    headline: ['Own a Piece of', "The World's Most"],
    accent: 'Investable City',
    sub: 'Tax-free returns. Golden Visa eligibility. World-class infrastructure.',
    tabs: [
      { id: 'buy', label: 'Buy' },
      { id: 'off-plan', label: 'Off-Plan' },
      { id: 'rent', label: 'Rent' },
    ],
    searchPlaceholder: 'Search by community, area or property type...',
  },
  seller: {
    eyebrow: 'Sell with RE/MAX ZAM',
    headline: ['Get the Best Price', 'For Your'],
    accent: 'Dubai Property',
    sub: '1,200+ active buyers. 145,000 global RE/MAX agents. Zero guesswork.',
    tabs: null,
    searchPlaceholder: null,
  },
  agent: {
    eyebrow: 'Join RE/MAX ZAM Dubai',
    headline: ['Build the Real Estate', 'Career You'],
    accent: 'Deserve',
    sub: 'Global brand. Proven systems. Competitive splits. Start selling from day one.',
    tabs: null,
    searchPlaceholder: null,
  },
};

const DEFAULT = HERO_CONTENT.investor;

const YOUTUBE_VIDEO_ID = 'xOqgW9LZR44';

export default function HeroSection() {
  const navigate = useNavigate();
  const { audience } = useAudience();
  const [activeTab, setActiveTab] = useState('buy');
  const [query, setQuery] = useState('');

  const content = HERO_CONTENT[audience] || DEFAULT;

  // YouTube player refs/state
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const createPlayer = () => {
      if (!iframeRef.current || !window.YT) return;
      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (e) => {
              if (!mounted) return;
              setPlayerReady(true);
              try { e.target.playVideo(); } catch (e) {}
            },
            onStateChange: (e) => {
              if (!mounted) return;
              setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
            }
          }
        });
      } catch (err) {
        // ignore
      }
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        if (mounted) createPlayer();
      };
    }

    return () => {
      mounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (e) {}
        playerRef.current = null;
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('community', query);
    if (activeTab === 'rent') params.set('transaction', 'Residential Rental');
    if (activeTab === 'off-plan') params.set('listing_status', 'Off-Plan');
    navigate(`/properties?${params.toString()}`);
  };

  const handleSellerCTA = () => {
    document.getElementById('seller-valuation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAgentCTA = () => {
    document.getElementById('agent-apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dubai Skyline Background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90&fit=crop')` }}
      />
      {/* Dark gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Headline with Red Accent Box */}
          <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={audience || 'default'}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-red-500" />
                <span className="text-red-400 font-body text-xs tracking-[0.25em] uppercase font-semibold">{content.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black leading-[1.05] mb-4">
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">{content.headline[0]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">{content.headline[1]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-red-500 italic font-light">{content.accent}</span>
              </h1>

              {/* Red underline accent */}
              <div className="w-16 h-1 bg-red-600 rounded-full mb-6" />

              {/* Subheading */}
              <p className="text-white/65 font-body text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                {content.sub}
              </p>

              {/* Investor: Search Box */}
              {content.tabs && (
                <div>
                  <div className="flex gap-1 mb-0">
                    {content.tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-2 text-xs font-heading font-bold tracking-wider uppercase rounded-t-lg transition-all ${
                          activeTab === tab.id
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-b-2xl rounded-tr-2xl shadow-2xl p-2 flex items-center gap-2 max-w-xl">
                    <div className="flex-1 flex items-center gap-2 px-3">
                      <Search className="w-4 h-4 text-gray-400 shrink-0" />
                      <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={content.searchPlaceholder}
                        className="w-full text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none font-body py-2.5"
                      />
                    </div>
                    <button type="submit" className="bg-black hover:bg-gray-800 text-white font-heading font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl transition-colors shrink-0">
                      Search
                    </button>
                  </form>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4">
                    <span className="text-white/30 text-xs font-body">Popular:</span>
                    {communities.map(c => (
                      <button key={c} onClick={() => navigate(`/properties?community=${c}`)}
                        className="text-xs text-white/50 hover:text-white transition-colors font-body hover:underline underline-offset-2">
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Seller CTA */}
              {audience === 'seller' && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSellerCTA}
                    className="inline-flex items-center gap-2 bg-white text-black font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Get Free Valuation
                    <span className="text-lg">→</span>
                  </button>
                  <button
                    onClick={() => navigate('/landlords')}
                    className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    How It Works
                  </button>
                </div>
              )}

              {/* Agent CTA */}
              {audience === 'agent' && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAgentCTA}
                    className="inline-flex items-center gap-2 bg-white text-black font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Apply to Join
                    <span className="text-lg">→</span>
                  </button>
                  <button
                    onClick={() => navigate('/join')}
                    className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    View Partner Tiers
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Right: Embedded Autoplay Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-red-600/20 rounded-3xl blur-2xl" />
            
            {/* Video Container */}
            <div className="relative block rounded-2xl p-1 bg-gradient-to-br from-red-600/60 via-white/10 to-transparent shadow-2xl">
              <div style={{ paddingBottom: '56.25%' }} className="relative rounded-xl overflow-hidden bg-black">
                {/* YouTube player mount point (replaced by IFrame API) */}
                <div id="hero-youtube-player" ref={iframeRef} className="absolute top-0 left-0 w-full h-full" />
              </div>
            </div>
            <p className="text-center text-white/40 text-xs font-body mt-3 tracking-wider uppercase">RE/MAX ZAM — Dubai Real Estate</p>
          </motion.div>
        </div>
      </div>

    </section>

    {/* Stats strip — sits below hero, no overlap */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-5">
        <div className="flex items-center gap-10 sm:gap-16 overflow-x-auto scrollbar-none">
          {[
            { label: 'Total Transactions (H1 2026)', value: 'AED 300B+', source: 'DLD' },
            { label: 'Average Rental Yield', value: '7–10%', source: 'RERA' },
            { label: 'Capital Gains Tax', value: '0%', source: 'UAE Gov' },
            { label: 'RE/MAX Agents Worldwide', value: '150K+', source: 'RE/MAX' },
          ].map(s => (
            <div key={s.label} className="shrink-0">
              <p className="text-black font-display font-black text-xl">{s.value}</p>
              <p className="text-gray-500 font-body text-xs mt-0.5">{s.label}</p>
              <p className="text-gray-300 font-body text-[10px] tracking-wider uppercase mt-0.5">Source: {s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}