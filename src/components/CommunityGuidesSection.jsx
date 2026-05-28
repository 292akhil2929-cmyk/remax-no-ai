import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const areas = [
  {
    id: 'dubai-marina',
    name: 'Dubai Marina',
    tagline: "Investor's Favourite",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    tags: ['High Yield', 'Waterfront'],
    yield: '6–8%',
    entry: 'AED 700K',
    highlight: 'Highest transaction volume of any Dubai community with robust short-term rental market.',
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    tagline: 'Proven Capital Growth',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    tags: ['Capital Growth', 'Central'],
    yield: '5–7%',
    entry: 'AED 1.2M',
    highlight: "Home to Burj Khalifa — 40% price appreciation since 2020 with 90%+ occupancy rates.",
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Trophy Asset',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tags: ['Ultra-Premium', 'Luxury'],
    yield: '5–7%',
    entry: 'AED 1.5M',
    highlight: 'Limited supply island community — consistent 10–15% annual appreciation since 2020.',
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'Best Value Entry',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    tags: ['Growth Zone', 'Affordable'],
    yield: '6–8%',
    entry: 'AED 600K',
    highlight: '20–30% discount vs Downtown for comparable specs — best capital upside in current market.',
  },
  {
    id: 'dubai-hills-estate',
    name: 'Dubai Hills Estate',
    tagline: 'Premium Family Living',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tags: ['Family', 'Villas'],
    yield: '5–6%',
    entry: 'AED 1.5M',
    highlight: 'EMAAR flagship community — 60–80% villa appreciation since 2020 with top schools on site.',
  },
  {
    id: 'jumeirah-village-circle',
    name: 'JVC',
    tagline: "Dubai's Highest Yields",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['Best Value', '8–10% Yield'],
    yield: '8–10%',
    entry: 'AED 350K',
    highlight: "Dubai's most transacted community — ideal for portfolio building with entry from AED 350K.",
  },
];

export default function CommunityGuidesSection() {
  const [active, setActive] = useState(areas[0].id);
  const area = areas.find(a => a.id === active);

  return (
    <section className="py-20 bg-[#0d1b3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[#c9a84c] font-heading font-semibold text-xs tracking-widest uppercase mb-2">Location Intelligence</p>
            <h2 className="text-2xl lg:text-4xl font-display font-black text-white leading-tight">
              Explore Dubai's Top<br className="hidden sm:block" /> Investment Communities
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 font-heading shrink-0"
            asChild
          >
            <Link to="/area-guides">View All Area Guides <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>

        {/* Area Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {areas.map(a => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                active === a.id
                  ? 'bg-[#c9a84c] text-[#0d1b3e]'
                  : 'bg-white/8 text-white/70 border border-white/15 hover:bg-white/15 hover:text-white'
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Image */}
            <div className="lg:col-span-3 relative">
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-display font-black text-2xl lg:text-3xl">{area.name}</p>
                <p className="text-[#c9a84c] font-body text-sm mt-0.5">{area.tagline}</p>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 bg-[#111c38] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {area.tags.map(t => (
                    <Badge key={t} className="bg-white/10 text-white/80 border-white/10 text-xs">{t}</Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <TrendingUp className="w-4 h-4 text-[#c9a84c] mx-auto mb-1" />
                    <p className="text-xs text-white/50 font-body mb-0.5">Rental Yield</p>
                    <p className="text-lg font-heading font-black text-[#c9a84c]">{area.yield}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <MapPin className="w-4 h-4 text-white/50 mx-auto mb-1" />
                    <p className="text-xs text-white/50 font-body mb-0.5">Entry From</p>
                    <p className="text-sm font-heading font-bold text-white">{area.entry}</p>
                  </div>
                </div>

                {/* Highlight */}
                <div className="border-l-2 border-[#c9a84c] pl-4 mb-6">
                  <p className="text-sm text-white/70 font-body leading-relaxed">{area.highlight}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full bg-[#c9a84c] hover:bg-[#b8943f] text-[#0d1b3e] font-heading font-bold border-0"
                  asChild
                >
                  <Link to="/properties">View Properties <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-white/70 hover:text-white hover:bg-white/10 font-heading text-sm"
                  asChild
                >
                  <Link to="/area-guides">Full Area Guide</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mini stats bar */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { label: 'Communities Covered', value: '6+' },
            { label: 'Avg. Rental Yield', value: '7.2%' },
            { label: 'Price Entry Points', value: 'AED 350K+' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-heading font-black text-white">{value}</p>
              <p className="text-xs text-white/40 font-body mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}