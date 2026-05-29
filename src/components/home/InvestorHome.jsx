import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, PiggyBank, Landmark, FileCheck, Sparkles, Shield, Sun } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import MarketTicker from '@/components/MarketTicker';

const WHY_CARDS = [
  { icon: PiggyBank, stat: '0%', label: 'Tax on rental income & capital gains' },
  { icon: Landmark, stat: 'AED 2M+', label: 'Golden Visa through property ownership' },
  { icon: TrendingUp, stat: '7–9%', label: 'Average net rental yield in prime areas' },
  { icon: Shield, stat: 'RERA', label: 'Fully regulated, investor-protected market' },
  { icon: Sun, stat: '300+', label: 'Days of sunshine per year — lifestyle asset' },
  { icon: FileCheck, stat: '4hrs', label: 'Flight to ⅓ of the world\'s population' },
];

const COMMUNITIES = [
  {
    name: 'Palm Jumeirah',
    tag: 'Ultra-Luxury',
    roi: '5.2%',
    img: 'https://images.unsplash.com/photo-1490077476659-095dd1766b63?w=600&q=90&auto=format&fit=crop',
  },
  {
    name: 'Downtown Dubai',
    tag: 'City Living',
    roi: '6.1%',
    img: 'https://images.unsplash.com/photo-1502784777745-55ac69b1e404?w=600&q=90&auto=format&fit=crop',
  },
  {
    name: 'Dubai Marina',
    tag: 'Waterfront',
    roi: '7.4%',
    img: 'https://images.unsplash.com/photo-1511249acb87dd08a1e39c4a3e6c0dfd1e957e87?w=600&q=90&auto=format&fit=crop',
  },
  {
    name: 'Business Bay',
    tag: 'High Yield',
    roi: '8.2%',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=90&auto=format&fit=crop',
  },
];

export default function InvestorHome() {
  const navigate = useNavigate();
  const { data: properties = [] } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: () => base44.entities.Property.filter({ featured: true }, '-created_date', 6),
  });

  return (
    <>
      <MarketTicker />

      {/* ── FEATURED PROPERTIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-amber-500" /> Handpicked Listings
              </p>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
                Dubai's Most Attractive<br />Investment Opportunities
              </h2>
            </div>
            <Link to="/properties" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm font-body transition-colors group">
              View all listings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {properties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {properties.map((p, idx) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}>
                  <PropertyCard property={p} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-[4/3] bg-gray-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          )}

          <div className="text-center mt-8 sm:hidden">
            <Link to="/properties" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm font-body">
              View all listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY DUBAI ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">The Investment Case</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 max-w-xl leading-tight">
              Six Reasons Dubai<br />Outperforms
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-100">
            {WHY_CARDS.map(({ icon: Icon, stat, label }, idx) => (
              <motion.div
                key={stat}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-8 group hover:bg-black transition-colors duration-300"
              >
                <Icon className="w-5 h-5 text-gray-300 group-hover:text-white/40 mb-5 transition-colors" />
                <p className="text-3xl font-display font-black text-gray-900 group-hover:text-white mb-2 transition-colors">{stat}</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 font-body leading-relaxed transition-colors">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY GUIDE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Where to Invest</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              Dubai's Highest<br />Yield Communities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMUNITIES.map((c, idx) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => navigate(`/properties?community=${c.name}`)}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-xs font-heading font-bold text-white/60 tracking-wider uppercase mb-1">{c.tag}</span>
                  <p className="text-white font-display font-black text-lg leading-tight mb-2">{c.name}</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-400 font-heading font-bold text-sm">{c.roi} yield</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/area-guides" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-body transition-colors group">
              Explore all area guides <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INVESTOR CTA ── */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,130,50,0.15),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-white/40 font-body text-xs tracking-[0.2em] uppercase">Free Consultation</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
                Build Your<br />Dubai Portfolio
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-8">
                Our senior advisors will sit down with you, understand what you are trying to achieve, and show you exactly which properties match your budget and goals. No jargon, no pressure.
              </p>
              <ul className="space-y-4">
                {[
                  'ROI analysis based on your actual budget and timeline',
                  'An honest comparison of off-plan versus ready property',
                  'Golden Visa pathway and tax-free income structuring',
                  'Free 30-minute strategy session with no obligation',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 font-body">
                    <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-display font-black text-white mb-1">Start Your Investment Journey</h3>
              <p className="text-xs text-gray-500 font-body mb-7">We respond within 24 hours.</p>
              <LeadCaptureForm leadType="Investor" source="Home - Investor" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}