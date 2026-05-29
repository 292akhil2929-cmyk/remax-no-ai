import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useAudience } from '@/lib/AudienceContext';

const DUBAI_BG = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90&auto=format&fit=crop';

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
    <section className="relative h-screen min-h-[680px] max-h-[960px] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full scale-105 bg-center bg-cover"
        style={{ backgroundImage: `url(${DUBAI_BG})` }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={audience || 'default'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/60" />
                <span className="text-white/70 font-body text-xs tracking-[0.2em] uppercase">{content.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black leading-[1.0] mb-5">
                <span className="block text-4xl sm:text-5xl lg:text-[5.5rem] text-white">{content.headline[0]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-[5.5rem] text-white">{content.headline[1]}</span>
                <span className="block text-4xl sm:text-5xl lg:text-[5.5rem] text-white/40 italic font-light">{content.accent}</span>
              </h1>

              {/* Subheading */}
              <p className="text-white/60 font-body text-sm sm:text-base leading-relaxed mb-10 max-w-md">
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
      </div>

      {/* Bottom stats strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-4">
          <div className="flex items-center gap-8 sm:gap-16 overflow-x-auto scrollbar-none">
            {[
              { label: 'Transactions in 2024', value: 'AED 528B' },
              { label: 'Avg Rental Yield', value: '7–9%' },
              { label: 'Tax on Gains', value: '0%' },
              { label: 'RE/MAX Global Agents', value: '145K+' },
            ].map(s => (
              <div key={s.label} className="shrink-0">
                <p className="text-white font-display font-black text-lg">{s.value}</p>
                <p className="text-white/40 font-body text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}