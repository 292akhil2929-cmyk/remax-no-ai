import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, PiggyBank, Shield, ArrowRight, CheckCircle2, MapPin, Star } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

const TOP_AREAS = [
  { area: 'JVC', avgYield: '8.2%', avgPrice: 'AED 950/sqft', type: 'Apartments', why: 'Strong rental demand from young professionals and proximity to major highways.' },
  { area: 'Business Bay', avgYield: '7.8%', avgPrice: 'AED 1,480/sqft', type: 'Apartments & Offices', why: "Dubai's prime CBD — perpetual corporate rental demand and strong short-term rental yields." },
  { area: 'Dubai Marina', avgYield: '7.4%', avgPrice: 'AED 1,650/sqft', type: 'Apartments', why: 'Waterfront lifestyle and tourist appeal drive strong Airbnb and annual rental performance.' },
  { area: 'Al Warsan / Dubailand', avgYield: '9–11%', avgPrice: 'AED 650/sqft', type: 'Apartments', why: 'Low entry price + high rental demand from an underserved catchment = highest yields in Dubai.' },
  { area: 'International City', avgYield: '9.5%', avgPrice: 'AED 480/sqft', type: 'Apartments', why: 'Lowest entry price in Dubai with consistently high occupancy rates — ideal for yield-first investors.' },
  { area: 'Arjan / Motor City', avgYield: '8.0%', avgPrice: 'AED 850/sqft', type: 'Apartments', why: 'Growing infrastructure and strong school catchment drive family-focused rental demand year-round.' },
];

const ROI_TYPES = [
  { icon: PiggyBank, title: 'Rental Yield', desc: 'Earn 7–11% annually from long-term tenants. Dubai has zero rental income tax — every dirham you earn, you keep.' },
  { icon: TrendingUp, title: 'Capital Appreciation', desc: 'Dubai property values rose 20%+ in 2023–2024. Off-plan investors in high-growth areas can capture 30–40% appreciation by handover.' },
  { icon: Star, title: 'Short-Term Rentals', desc: 'Platforms like Airbnb generate 15–25% gross yields in Marina, JBR, and Downtown. Fully legal with a DTCM holiday home permit.' },
];

export default function HighROI() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative py-28 overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-amber-500/60" />
              <span className="text-amber-400/80 font-body text-xs tracking-[0.2em] uppercase">Passive Income & Capital Growth</span>
            </div>
            <h1 className="font-display font-black text-white leading-[1.0] mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-[5rem]">High Yield</span>
              <span className="block text-5xl sm:text-6xl lg:text-[5rem]">Dubai Property</span>
              <span className="block text-3xl sm:text-4xl text-amber-400 font-light italic mt-2">7–11% Returns. Zero Tax.</span>
            </h1>
            <p className="text-white/60 font-body text-base leading-relaxed mb-10 max-w-xl">
              Dubai is the world's top-performing major real estate market. Zero income tax on rents. Exceptional infrastructure. A city that never stops attracting global talent, tourists, and business — all driving your rental income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black font-heading font-bold text-sm px-8 py-4 rounded-xl hover:bg-gray-100 transition-all">
                Get My Free ROI Analysis <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/properties" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 font-heading font-semibold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
                Browse High-Yield Listings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap gap-10 sm:gap-16">
            {[
              { value: '0%', label: 'Income Tax on Rental Returns', source: 'UAE Gov' },
              { value: '7–11%', label: 'Average Net Rental Yield', source: 'RERA/DLD' },
              { value: '20%+', label: 'Capital Growth (2023–24)', source: 'DLD' },
              { value: '3.5M+', label: 'Dubai Population — Growing', source: 'DSC' },
            ].map(s => (
              <div key={s.label} className="shrink-0">
                <p className="text-black font-display font-black text-2xl">{s.value}</p>
                <p className="text-gray-500 font-body text-xs mt-0.5">{s.label}</p>
                <p className="text-gray-300 font-body text-[10px] tracking-wider uppercase mt-0.5">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI TYPES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Your Return Strategy</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight max-w-xl">
              Three Ways Dubai<br />Property Makes You Money
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ROI_TYPES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group border border-gray-100 rounded-2xl p-8 hover:border-black hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-black flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP YIELD AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Where to Invest</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              Dubai's Highest Yielding<br />Communities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOP_AREAS.map((a, i) => (
              <motion.div key={a.area} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-heading font-black text-gray-900 text-lg">{a.area}</p>
                    <p className="text-gray-400 font-body text-xs flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{a.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-black text-emerald-600 text-xl">{a.avgYield}</p>
                    <p className="text-gray-400 text-[10px] font-body">avg yield</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-gray-700 font-heading font-semibold text-sm">{a.avgPrice}</span>
                  <span className="text-gray-400 font-body text-xs">avg price</span>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{a.why}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/area-guides" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-body transition-colors group">
              View all area guides <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* DUGASTA HIGHLIGHT */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-3 py-1 mb-5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-heading font-bold text-[10px] tracking-[0.2em] uppercase">Exclusive Partner</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
                Dugasta Projects:<br />9–11% Yields
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                RE/MAX ZAM is the exclusive sales partner for Dugasta Properties — one of Dubai's fastest-growing off-plan developers. Dugasta's 1% monthly payment plans and Dubailand locations consistently deliver the highest rental yields in our portfolio.
              </p>
              <ul className="space-y-3 mb-8">
                {['Access pre-launch inventory before public release', '1% monthly payment plans — lowest in the market', 'Yields of 9–11% verified by independent analysis', 'No agency fees on Dugasta direct purchases'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300 font-body">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/dugasta" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                View Dugasta Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80" alt="Dugasta" className="w-full rounded-2xl object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA + LEAD FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-4">Free ROI Analysis</p>
              <h2 className="text-4xl font-display font-black text-gray-900 leading-tight mb-5">
                Get a Personalised<br />ROI Breakdown
              </h2>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-8">
                Tell us your budget and goals. Our investment analysts will map out the exact communities, projects, and structures to maximise your return — at zero cost.
              </p>
              <ul className="space-y-3">
                {['Personalised yield projections for your budget', 'Off-plan vs ready — honest comparison', 'Best communities matched to your investment goal', 'Golden Visa eligibility check included'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-body">
                    <span className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 text-xs shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-display font-black text-gray-900 mb-1">Start Your ROI Journey</h3>
              <p className="text-xs text-gray-400 font-body mb-6">We respond within 24 hours.</p>
              <LeadCaptureForm leadType="Investor" source="High ROI Page" />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}