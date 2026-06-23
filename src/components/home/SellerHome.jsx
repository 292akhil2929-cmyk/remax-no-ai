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
          SECTION 2 — 4 Step Cards (light gray)
      ───────────────────────────────────────── */}
      <section className="bg-[#F7F6F3] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group bg-white rounded-3xl p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Large faded step number background */}
                  <span
                    className="absolute top-4 right-6 font-display font-black text-gray-900/[0.04] select-none pointer-events-none"
                    style={{ fontSize: '120px', lineHeight: 1 }}
                  >
                    {s.step}
                  </span>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-gray-900 flex items-center justify-center mb-8 group-hover:bg-[#C9A84C] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Step label */}
                  <p className="text-[10px] font-heading font-bold tracking-[0.22em] text-[#C9A84C] uppercase mb-3">
                    Step {s.step}
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-black text-gray-900 text-xl sm:text-2xl leading-tight mb-4">
                    {s.title}
                  </h3>

                  {/* Description */}
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
          SECTION 3 — Image + Testimonials (white)
      ───────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

            {/* Left — property photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85"
                  alt="Luxury Dubai property"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-lg">
                <p className="font-display font-black text-gray-900 text-lg">94%</p>
                <p className="text-gray-500 font-body text-xs mt-0.5">sold at or above asking</p>
              </div>
            </motion.div>

            {/* Right — heading + testimonials */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <p className="text-[10px] font-heading font-bold tracking-[0.25em] text-gray-400 uppercase mb-3">
                  From Sellers Who've Been Through It
                </p>
                <h2 className="font-display font-black text-gray-900 text-4xl sm:text-5xl leading-tight">
                  What sellers<br />actually say.
                </h2>
              </motion.div>

              <div className="space-y-4">
                {TESTIMONIALS.map((t, idx) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#F7F6F3] rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex gap-0.5 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-gray-400 font-body text-xs">{t.country}</p>
                      </div>
                      <span className="text-xs font-heading font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                        {t.result}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
