import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Search, BadgeCheck, Star, ArrowRight } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

const STEPS = [
  {
    icon: PhoneCall,
    step: 'Step 01',
    title: 'Free Property Valuation',
    desc: "We assess your property's market value using live DLD transaction data and comparable sales. No cost, no obligation.",
  },
  {
    icon: ClipboardList,
    step: 'Step 02',
    title: 'Professional Marketing',
    desc: 'HD photography, staging advice, and your property live across 40+ portals with targeted social campaigns.',
  },
  {
    icon: Search,
    step: 'Step 03',
    title: 'Qualified Buyer Matching',
    desc: 'We pre-qualify every buyer. You only meet serious, finance-approved purchasers — no time wasted.',
  },
  {
    icon: BadgeCheck,
    step: 'Step 04',
    title: 'Seamless Transaction',
    desc: 'From negotiation to NOC, DLD registration to keys handover — we manage every detail of the close.',
  },
];

const STATS = [
  { value: '10+', label: 'Years Experience' },
  { value: '20+', label: 'Partners' },
  { value: '598', label: 'Homes Sold' },
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
      {/* ── STATS BAR ── */}
      <section className="bg-[#1a1a1a] py-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-display font-black text-white leading-none">{s.value}</p>
                <p className="text-white/40 font-body text-xs mt-1.5 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE SELL — HouseMarket split layout ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT: large rounded image, sticky on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85"
                  alt="Dubai luxury property"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT: heading + 4 steps */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-0"
            >
              {/* Section heading */}
              <div className="mb-10">
                <p className="text-[#C9A84C] font-body text-xs tracking-[0.2em] uppercase mb-3">Simple. Transparent. Effective.</p>
                <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
                  How we sell your<br />property as 1, 2, 3, 4.
                </h2>
              </div>

              {/* Steps */}
              <div className="divide-y divide-gray-100">
                {STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="py-7 flex gap-5 group"
                    >
                      {/* Icon circle */}
                      <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#C9A84C] group-hover:bg-[#C9A84C]/5 transition-colors">
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#C9A84C] transition-colors" />
                      </div>

                      <div className="flex-1">
                        <p className="text-[#C9A84C] font-body text-[10px] tracking-[0.2em] uppercase mb-1">{s.step}</p>
                        <h3 className="text-gray-900 font-heading font-bold text-base mb-2">{s.title}</h3>
                        <p className="text-gray-500 font-body text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA under steps */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a
                  href="#seller-valuation"
                  className="inline-flex items-center gap-2.5 bg-gray-900 text-white font-heading font-bold text-xs tracking-[0.12em] uppercase px-6 py-3.5 rounded-full hover:bg-[#C9A84C] transition-colors"
                >
                  Get Free Valuation
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">From sellers who've been through it</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900">What sellers say.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between"
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
                  <span className="text-xs font-heading font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">{t.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLER CTA ── */}
      <section id="seller-valuation" className="bg-[#1a1a1a] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#C9A84C] font-body text-[10px] tracking-[0.2em] uppercase mb-4">No Cost. No Obligation.</p>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
                What is your<br />property worth?
              </h2>
              <p className="text-white/50 font-body text-sm leading-relaxed mb-8 max-w-sm">
                Get an accurate, data-driven valuation backed by live DLD transaction records — and a clear pricing strategy to attract the best buyers.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Valuation based on recent DLD transactions',
                  'Pricing strategy to attract premium buyers',
                  'Current buyer demand analysis for your area',
                  'Honest advice — no pressure, just expert guidance',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60 font-body">
                    <span className="w-4 h-4 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-[9px] shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10"
            >
              <h3 className="text-xl font-display font-black text-gray-900 mb-1">Request a Free Valuation</h3>
              <p className="text-xs text-gray-400 font-body mb-8">Our consultants respond within 24 hours.</p>
              <SellerLeadForm source="Home - Seller" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
