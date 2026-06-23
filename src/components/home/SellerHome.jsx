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
      <section className="bg-white pt-16 pb-10">
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
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              How We Sell<br />Your Property.
            </motion.h2>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          SECTION 2 — PlumFix style: sticky left + stacked image cards right
      ───────────────────────────────────────── */}
      <section className="bg-[#F7F6F3] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

            {/* LEFT — sticky label */}
            <div className="lg:sticky lg:top-32 lg:w-72 shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 mb-7">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  <span className="text-xs font-heading font-bold text-gray-700 tracking-wide">How We Sell</span>
                </div>
                <h2 className="font-display font-black text-gray-900 uppercase leading-[1.0] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}>
                  Sell Your<br />Property<br />
                  <span className="text-[#C9A84C]">The Right Way.</span>
                </h2>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  Four clear steps, every detail handled by senior RE/MAX advisors backed by live DLD data.
                </p>
              </motion.div>
            </div>

            {/* RIGHT — stacked cards each with icon + image */}
            <div className="flex-1 flex flex-col gap-4">
              {STEPS.map((s, idx) => {
                const Icon = s.icon;
                const imgs = [
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
                  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
                  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
                  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
                ];
                return (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex min-h-[190px]">
                      {/* Left: icon top, title+desc bottom */}
                      <div className="flex-1 p-7 sm:p-8 flex flex-col justify-between">
                        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-[#C9A84C]/10 group-hover:border-[#C9A84C]/20 flex items-center justify-center transition-colors">
                          <Icon style={{ width: '26px', height: '26px' }} className="text-gray-500 group-hover:text-[#C9A84C] transition-colors" />
                        </div>
                        <div>
                          <p className="text-[9px] font-heading font-bold tracking-[0.22em] text-[#C9A84C] uppercase mb-1.5">Step {s.step}</p>
                          <h3 className="font-display font-black text-gray-900 uppercase text-lg leading-tight mb-2">{s.title}</h3>
                          <p className="text-gray-500 font-body text-sm leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                      {/* Right: image */}
                      <div className="w-44 sm:w-56 shrink-0 relative overflow-hidden">
                        <img
                          src={imgs[idx]}
                          alt={s.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

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
                  className="bg-[#F9F8F6] border border-gray-200/70 rounded-2xl p-7 hover:shadow-sm transition-all"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-amber-400 text-2xl leading-none">★</span>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-800 font-body font-medium text-sm leading-relaxed mb-7">"{t.text}"</p>
                  {/* Author row */}
                  <div className="flex items-center gap-3">
                    {/* Empty circle placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
                    <div>
                      <p className="font-heading font-bold text-gray-900 text-sm leading-tight">{t.name}</p>
                      <p className="text-gray-400 font-body text-xs mt-0.5">{t.country}</p>
                    </div>
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
