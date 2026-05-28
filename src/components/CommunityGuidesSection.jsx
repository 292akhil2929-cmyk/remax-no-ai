import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, MapPin, Home, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const communities = [
  {
    id: 'dubai-marina',
    name: 'Dubai Marina',
    tagline: "Investor's Favourite",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    tags: ['🌊 Waterfront', '📈 High Yield', '🏖️ Beach Access'],
    yield: '6–8%',
    entry: 'AED 700K',
    avgPsf: 'AED 1,650',
    occupancy: '88%+',
    highlight: 'Highest transaction volume of any Dubai community with a robust short-term rental market.',
    col: 'col-span-2 row-span-2',
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    tagline: 'Proven Capital Growth',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    tags: ['🏙️ Iconic Address', '📊 Capital Growth', '🚇 Metro'],
    yield: '5–7%',
    entry: 'AED 1.2M',
    avgPsf: 'AED 2,200',
    occupancy: '90%+',
    highlight: "Burj Khalifa views — 40% price appreciation since 2020.",
    col: 'col-span-1 row-span-1',
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Trophy Asset',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tags: ['🌴 Island Living', '💎 Ultra-Premium', '🏨 5-Star Hotels'],
    yield: '5–7%',
    entry: 'AED 1.5M',
    avgPsf: 'AED 2,800',
    occupancy: '85%+',
    highlight: 'Limited supply island — 10–15% annual appreciation since 2020.',
    col: 'col-span-1 row-span-1',
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'Best Value Entry',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    tags: ['🏢 Canal Views', '💰 Value Play', '📍 Central'],
    yield: '6–8%',
    entry: 'AED 600K',
    avgPsf: 'AED 1,480',
    occupancy: '87%+',
    highlight: '20–30% discount vs Downtown — best capital upside right now.',
    col: 'col-span-1 row-span-1',
  },
  {
    id: 'dubai-hills-estate',
    name: 'Dubai Hills',
    tagline: 'Premium Family Living',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tags: ['🏡 Villas', '🌳 Green Community', '🏫 Top Schools'],
    yield: '5–6%',
    entry: 'AED 1.5M',
    avgPsf: 'AED 1,750',
    occupancy: '92%+',
    highlight: 'EMAAR flagship — 60–80% villa appreciation since 2020.',
    col: 'col-span-1 row-span-1',
  },
  {
    id: 'jumeirah-village-circle',
    name: 'JVC',
    tagline: "Dubai's Highest Yields",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['💹 8–10% Yield', '🏠 Affordable', '🔑 Portfolio Pick'],
    yield: '8–10%',
    entry: 'AED 350K',
    avgPsf: 'AED 950',
    occupancy: '89%+',
    highlight: "Dubai's most transacted community — perfect for portfolio building.",
    col: 'col-span-2 row-span-1',
  },
];

function CommunityCard({ area, isSelected, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group border-2 transition-all duration-300 ${
        isSelected ? 'border-[#B87333]' : 'border-transparent'
      } ${area.col}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <img
        src={area.image}
        alt={area.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Selected Glow */}
      {isSelected && (
        <div className="absolute inset-0 ring-2 ring-[#B87333] ring-inset rounded-2xl pointer-events-none" />
      )}

      {/* Avg PSF Badge */}
      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1.5 text-center">
         <p className="text-[10px] text-white/50 font-body leading-none mb-0.5">Avg / sqft</p>
         <p className="text-xs font-heading font-bold text-[#B87333] leading-none">{area.avgPsf}</p>
       </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {area.tags.slice(0, 2).map(t => (
            <span
              key={t}
              className="px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-[10px] text-white/80 font-body"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-white font-display font-black text-lg leading-tight">{area.name}</h3>
         <p className="text-[#B87333] font-body text-xs mt-0.5 mb-3">{area.tagline}</p>

        {/* Key Stats Row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
             <TrendingUp className="w-3 h-3 text-[#B87333]" />
             <span className="text-xs font-heading font-bold text-[#B87333]">{area.yield}</span>
            <span className="text-[10px] text-white/40 font-body">yield</span>
          </div>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-white/50" />
            <span className="text-xs text-white/70 font-body">from {area.entry}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunityGuidesSection() {
  const [selected, setSelected] = useState(communities[0].id);
  const area = communities.find(c => c.id === selected);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#B87333] font-heading font-semibold text-xs tracking-widest uppercase mb-2">Location Intelligence</p>
            <h2 className="text-2xl lg:text-4xl font-display font-black text-white leading-tight">
              Dubai's Top Investment<br className="hidden sm:block" /> Communities
            </h2>
            <p className="text-white/50 font-body text-sm mt-2">Click any community to explore investment metrics</p>
          </div>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-heading shrink-0"
            asChild
          >
            <Link to="/area-guides">All Area Guides <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[160px]">
          {communities.map(c => (
            <CommunityCard
              key={c.id}
              area={c}
              isSelected={selected === c.id}
              onClick={() => setSelected(c.id)}
            />
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-4 bg-gray-900 border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          >
            {/* Community Info */}
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2 mb-3">
                {area.tags.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/8 border border-white/15 rounded-full text-xs text-white/80 font-body">{t}</span>
                ))}
              </div>
              <div className="border-l-2 border-[#B87333] pl-4">
                <p className="text-sm text-white/70 font-body leading-relaxed">{area.highlight}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: TrendingUp, label: 'Rental Yield', value: area.yield, color: 'text-[#B87333]' },
                { icon: MapPin, label: 'Entry From', value: area.entry, color: 'text-white' },
                { icon: Home, label: 'Avg Price/sqft', value: area.avgPsf, color: 'text-white' },
                { icon: Users, label: 'Occupancy', value: area.occupancy, color: 'text-emerald-400' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="bg-white/5 rounded-xl p-3 text-center">
                  <Icon className="w-4 h-4 text-white/30 mx-auto mb-1" />
                  <p className="text-[10px] text-white/40 font-body mb-0.5">{label}</p>
                  <p className={`text-sm font-heading font-bold ${color}`}>{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="md:col-span-3 flex flex-col sm:flex-row gap-2 pt-2 border-t border-white/10">
              <Button className="bg-[#B87333] hover:bg-[#A86228] text-white font-heading font-bold border-0" asChild>
                <Link to="/properties">View {area.name} Properties <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 font-heading text-sm" asChild>
                <Link to="/area-guides">Full Area Guide</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}