import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Search, BadgeCheck, Star, ArrowUpRight } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Free Property Valuation',
    desc: "We assess your property's market value using live DLD transaction data and comparable sales. No cost, no obligation.",
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Professional Marketing',
    desc: 'HD photography, staging advice, and your property live across 40+ portals with targeted social campaigns.',
  },
  {
    icon: Search,
    step: '03',
    title: 'Qualified Buyer Matching',
    desc: 'We pre-qualify every buyer. You only meet serious, finance-approved purchasers — no time wasted.',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Seamless Transaction',
    desc: 'From negotiation to NOC, DLD registration to keys handover — we manage every detail of the close.',
  },
];

const STATS = [
  { value: '145K+', label: 'RE/MAX Agents' },
  { value: '28', label: 'Avg Days to Sell' },
  { value: '94%', label: 'At or Above Ask' },
  { value: '4.9★', label: 'Seller Rating' },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    country: 'United Kingdom',
    text: 'Sold my Business Bay apartment in 3 weeks. They handled everything — I just signed and received the funds.',
    result: 'Sold in 21 days',
  },
  {
    name: 'Ahmed K.',
    country: 'UAE',
    text: 'Got AED 180K above my asking price. Their buyer network is real — serious offers came in within the first week.',
    result: '+AED 180K above ask',
  },
  {
    name: 'Priya R.',
    country: 'India',
    text: 'I needed a fast, clean sale before relocating. Professional, transparent, and genuinely excellent.',
    result: 'Sold, stress-free',
  },
];

export default function SellerHome() {
  return (
    <>
      {/* ─────────────────────────────────────────
          SECTION 1 — Editorial Header (pure white)
      ───────────────────────────────────────── */}
      <section className="bg-white pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Top label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-heading font-bold tracking-[0.28em] text-[#C9A84C] uppercase mb-6"
          >
            Simple · Transparent · Effective
          </motion.p>

          {/* Headline + subtitle split */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-14 border-b border-gray-100">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display font-black text-gray-900 leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
            >
              How We Sell<br />Your Property.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-400 font-body text-sm leading-relaxed max-w-xs lg:text-right lg:mb-2"
            >
              Four steps. Zero guesswork.<br />
              Every detail handled by senior advisors.
            </motion.p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100 py-8">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="px-6 first:pl-0 last:pr-0 text-center"
              >
                <p className="font-display font-black text-gray-900 text-3xl sm:text-4xl leading-none">{s.value}</p>
                <p className="text-gray-400 font-body text-xs mt-1.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 2 — Option A: staggered waterfall cascade
      ───────────────────────────────────────── */}
      <section className="bg-[#F7F6F3] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-heading font-bold tracking-[0.25em] text-[#C9A84C] uppercase mb-12"
          >
            Simple · Transparent · Effective
          </motion.p>

          {/* Staggered cascade — each card offset further down */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 lg:items-start">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              // each card drops further: 0, 80px, 160px, 240px
              const offsetClass = ['lg:mt-0', 'lg:mt-20', 'lg:mt-40', 'lg:mt-60'][idx];
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  className={`group flex-1 bg-white rounded-3xl p-7 sm:p-8 hover:shadow-xl transition-all duration-300 ${offsetClass} border border-gray-100 hover:border-gray-200`}
                >
                  {/* Top: icon + step number */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gray-900 group-hover:bg-[#C9A84C] transition-colors duration-300 flex items-center justify-center">
                      <Icon style={{ width: '17px', height: '17px' }} className="text-white" />
                    </div>
                    <span className="font-display font-black text-gray-100 group-hover:text-[#C9A84C]/20 transition-colors text-5xl leading-none select-none">
                      {s.step}
                    </span>
                  </div>

                  {/* Step label */}
                  <p className="text-[10px] font-heading font-bold tracking-[0.22em] text-[#C9A84C] uppercase mb-2">
                    Step {s.step}
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-black text-gray-900 text-xl leading-tight mb-3">
                    {s.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 3 — Image left + Testimonials right
      ───────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* LEFT — real Dubai photo, no AI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative lg:sticky lg:top-24"
            >
              {/* Main image — Dubai Marina, real photography */}
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85"
                  alt="Luxury Dubai property with pool"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat chip — bottom left */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg border border-white">
                <div>
                  <p className="font-display font-black text-gray-900 text-2xl leading-none">94%</p>
                  <p className="text-gray-500 font-body text-xs mt-1">sold at or above asking price</p>
                </div>
                <div className="text-right">
                  <p className="font-display font-black text-gray-900 text-2xl leading-none">28</p>
                  <p className="text-gray-500 font-body text-xs mt-1">avg days on market</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — heading + stacked testimonials */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-2"
              >
                <h2 className="font-display font-black text-gray-900 text-4xl sm:text-5xl leading-[1.05]">
                  What sellers<br />actually say.
                </h2>
              </motion.div>

              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col justify-between border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-body text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-heading font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-400 font-body text-xs mt-0.5">{t.country}</p>
                    </div>
                    <span className="text-xs font-heading font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {t.result}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 4 — CTA (off-white + dark card)
      ───────────────────────────────────────── */}
      <section id="seller-valuation" className="bg-[#F7F6F3] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-10 sm:p-14 flex flex-col justify-between gap-10"
            >
              <div>
                <p className="text-[#C9A84C] text-[10px] font-heading font-bold tracking-[0.25em] uppercase mb-5">
                  No Cost · No Obligation
                </p>
                <h2 className="font-display font-black text-white leading-[1.05] tracking-tight mb-5"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
                  Find out what<br />your property<br />is really worth.
                </h2>
                <p className="text-white/45 font-body text-sm leading-relaxed max-w-xs">
                  Not what your neighbour thinks. What buyers are actually paying right now — backed by live DLD data.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Valuation based on real DLD transactions',
                  'Strategy to attract premium, qualified buyers',
                  'Response within 24 hours — zero pressure',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-white/50 font-body text-sm">
                    <span className="mt-0.5 w-4 h-4 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-[9px] shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — form on slightly lighter dark bg */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/[0.04] border-l border-white/[0.06] p-10 sm:p-14"
            >
              <h3 className="font-display font-black text-white text-xl mb-1">
                Request a Free Valuation
              </h3>
              <p className="text-white/30 font-body text-xs mb-8">
                Our consultants respond within 24 hours.
              </p>
              <SellerLeadForm source="Home - Seller" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
