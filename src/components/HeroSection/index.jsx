import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAudience } from '@/lib/AudienceContext';

const DUBAI_VIDEO = 'https://cdn.pixabay.com/vimeo/358317471/Dubai%20-%2033926.mp4';

const communities = [
  'Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Business Bay',
  'Dubai Hills Estate', 'Jumeirah Village Circle', 'Dubai Creek Harbour',
  'Emaar Beachfront', 'DIFC', 'Meydan',
];

const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'off-plan', label: 'Off-Plan' },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const { audience } = useAudience();
  const [activeTab, setActiveTab] = useState('buy');
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('community', query);
    if (activeTab === 'rent') params.set('transaction', 'Residential Rental');
    if (activeTab === 'off-plan') params.set('listing_status', 'Off-Plan');
    navigate(`/properties?${params.toString()}`);
  };

  const getHeadline = () => {
    if (audience === 'seller') return { top: 'Sell with', bottom: 'Confidence' };
    if (audience === 'agent') return { top: 'Grow Your', bottom: 'Business' };
    return { top: 'Your Gateway to', bottom: "Dubai's Finest Homes" };
  };

  const headline = getHeadline();

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex flex-col justify-end overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={DUBAI_VIDEO} type="video/mp4" />
      </video>

      {/* Gradient overlay — dark at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <p className="text-white/70 font-body text-sm tracking-widest uppercase mb-3">
              RE/MAX ZAM — Dubai Real Estate
            </p>
            <h1 className="font-display font-black text-white leading-none">
              <span className="block text-4xl sm:text-5xl lg:text-7xl">{headline.top}</span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl italic font-light text-white/90">{headline.bottom}</span>
            </h1>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Tabs */}
            <div className="flex gap-1 mb-0">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 text-sm font-heading font-semibold rounded-t-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-black'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-3 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 px-2">
                <Search className="w-5 h-5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search by community, location, or property type..."
                  className="w-full text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none font-body py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-heading font-semibold text-sm px-6 py-3 rounded-xl transition-colors shrink-0"
              >
                Search
              </button>
            </form>

            {/* Quick links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
              {communities.slice(0, 5).map(c => (
                <button
                  key={c}
                  onClick={() => navigate(`/properties?community=${c}`)}
                  className="text-xs text-white/70 hover:text-white transition-colors font-body underline-offset-2 hover:underline"
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 right-8 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs font-body tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}