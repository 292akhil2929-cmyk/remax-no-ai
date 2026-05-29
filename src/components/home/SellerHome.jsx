import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Search, BadgeCheck, Globe, Users, TrendingUp, Star } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Free Property Valuation',
    desc: "We assess your property's market value using live DLD transaction data and comparable sales. No cost, no obligation.",
    img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Professional Marketing',
    desc: 'HD photography, staging advice, and your property live across 40+ portals with targeted social campaigns.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: Search,
    step: '03',
    title: 'Qualified Buyer Matching',
    desc: 'We pre-qualify every buyer. You only meet serious, finance-approved purchasers — no time wasted.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Seamless Transaction',
    desc: 'From negotiation to NOC, DLD registration to keys handover — we manage every detail of the close.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
];

const STATS = [
  { value: '145K+', label: 'RE/MAX agents promoting your property' },
  { value: '1,200+', label: 'Active buyers in our database' },
  { value: '94%', label: 'Listings sold within agreed timeframe' },
  { value: '4.9★', label: 'Average seller satisfaction rating' },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    country: 'United Kingdom',
    text: 'Sold my Business Bay apartment 3 weeks after listing. The team handled absolutely everything — I just signed and received the funds.',
    result: 'Sold in 21 days',
  },
  {
    name: 'Ahmed K.',
    country: 'UAE',
    text: 'Got AED 180K above my original asking price. Their buyer network is real — serious offers came in within the first week.',
    result: '+AED 180K above ask',
  },
  {
    name: 'Priya R.',
    country: 'India',
    text: 'I needed a fast, clean sale before relocating. They delivered exactly that. Professional, transparent, and genuinely excellent.',
    result: 'Sold, stress-free',
  },
];

export default function SellerHome() {
  return (
    <>
      {/* ── TRUST BAR ── */}
      <section className="bg-black border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, idx) => (
              <motion.div key={s.value} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="text-center">
                <p className="text-2xl sm:text-3xl font-display font-black text-white">{s.value}</p>
                <p className="text-white/40 font-body text-xs mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Simple. Transparent. Effective.</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              How We Sell<br />Your Property
            </h2>
          </motion.div>

          <div className="space-y-6">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100`}
                >
                  {/* Image */}
                  <div className="lg:w-2/5 aspect-[16/9] lg:aspect-auto relative overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-5 left-5">
                      <span className="text-5xl font-display font-black text-white/20">{s.step}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELLER TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Seller Stories</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900">What Sellers Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-0.5 mb-5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-700 font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-display font-black text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400 font-body">{t.country}</p>
                  </div>
                  <span className="text-xs font-heading font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">{t.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLER CTA ── */}
      <section id="seller-valuation" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(100,180,100,0.08),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-white/40 font-body text-xs tracking-[0.2em] uppercase">No Cost. No Obligation.</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
                What Is Your<br />Property Worth?
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-8">
                Get an accurate, data-driven valuation backed by live DLD transaction records — and a clear pricing strategy to attract the best buyers.
              </p>
              <ul className="space-y-4">
                {[
                  'Valuation based on recent comparable DLD transactions',
                  'Pricing strategy to attract premium, qualified buyers',
                  'Current buyer demand analysis for your specific area',
                  'Honest advice — no pressure, just expert guidance',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 font-body">
                    <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-display font-black text-white mb-1">Request a Free Valuation</h3>
              <p className="text-xs text-gray-500 font-body mb-7">Our consultants respond within 24 hours.</p>
              <SellerLeadForm source="Home - Seller" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}