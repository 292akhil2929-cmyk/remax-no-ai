import { useState } from 'react';
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

const FOUNDER_VIDEO_URL = 'https://www.youtube.com/embed/xOqgW9LZR44';

export default function HeroSection() {
  const navigate = useNavigate();
  const { audience } = useAudience();
  const [activeTab, setActiveTab] = useState('buy');
  const [query, setQuery] = useState('');

  const content = HERO_CONTENT[audience] || DEFAULT;

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

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
              {/* Red Accent Box with Headline */}
              <div className="bg-red-600 rounded-lg p-8 mb-8">
                <h1 className="font-display font-black text-white leading-tight text-3xl sm:text-4xl lg:text-5xl">
                  {content.headline[0]}<br />{content.headline[1]} <span className="italic font-light">{content.accent}</span>
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-white/70 font-body text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
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

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                width="100%"
                height="100%"
                src={FOUNDER_VIDEO_URL}
                title="REMAX ZAM Founder Message"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>

    {/* Stats strip — sits below hero, no overlap */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-5">
        <div className="flex items-center gap-10 sm:gap-16 overflow-x-auto scrollbar-none">
          {[
            { label: 'Total Transactions (2024)', value: 'AED 528B', source: 'DLD' },
            { label: 'Average Rental Yield', value: '7–9%', source: 'RERA' },
            { label: 'Capital Gains Tax', value: '0%', source: 'UAE Gov' },
            { label: 'RE/MAX Agents Worldwide', value: '145K+', source: 'RE/MAX' },
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