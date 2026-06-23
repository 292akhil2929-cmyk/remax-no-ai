import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

const STEPS = [
  {
    step: '01',
    title: 'Free Property Valuation',
    desc: "We assess your property's market value using live DLD transaction data and comparable sales. No cost, no obligation.",
  },
  {
    step: '02',
    title: 'Professional Marketing',
    desc: 'HD photography, staging advice, and your property live across 40+ portals with targeted social campaigns.',
  },
  {
    step: '03',
    title: 'Qualified Buyer Matching',
    desc: 'We pre-qualify every buyer. You only meet serious, finance-approved purchasers — no time wasted.',
  },
  {
    step: '04',
    title: 'Seamless Transaction',
    desc: 'From negotiation to NOC, DLD registration to keys handover — we manage every detail of the close.',
  },
];

const STATS = [
  { value: '145K+', label: 'Global Agents' },
  { value: '1,200+', label: 'Active Buyers' },
  { value: '94%', label: 'Sold At Ask' },
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
      {/* ── HERO SPLIT: About Us style (SK Builders) ── */}
      <section className="bg-[#0F2318] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT: label + body + stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 self-start">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-heading font-bold tracking-[0.22em] uppercase">About Our Sell Process</span>
              </div>

              <p className="text-white/55 font-body text-sm sm:text-base leading-relaxed max-w-sm">
                We take great pride in ensuring the complete satisfaction of our sellers — from first valuation to final handover. Only the right buyers, only the best outcome.
              </p>

              {/* Stats row */}
              <div className="flex gap-10 pt-4 border-t border-white/10">
                {STATS.map((s) => (
                  <div key={s.value}>
                    <p className="text-white font-display font-black text-3xl sm:text-4xl leading-none">{s.value}</p>
                    <p className="text-white/40 font-body text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div>
                <a
                  href="#seller-valuation"
                  className="inline-flex items-center gap-3 bg-[#C9A84C] text-black font-heading font-bold text-xs tracking-[0.15em] uppercase px-6 py-3.5 rounded-full hover:bg-[#e0bc5a] transition-colors"
                >
                  Get Free Valuation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* RIGHT: large headline + 4 steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-10"
            >
              <h2
                className="text-white font-display font-black leading-[1.0] tracking-tight"
                style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
              >
                HOW WE SELL<br />YOUR PROPERTY<br />
                <span className="text-[#C9A84C]">RIGHT.</span>
              </h2>

              {/* 4 Steps vertical list */}
              <div className="divide-y divide-white/10">
                {STEPS.map((s, idx) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-6 py-6 group"
                  >
                    <span className="text-[#C9A84C]/40 font-display font-black text-4xl leading-none w-12 shrink-0 group-hover:text-[#C9A84C] transition-colors">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="text-white font-heading font-bold text-base mb-1.5">{s.title}</h3>
                      <p className="text-white/45 font-body text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── DREAM HOUSE style — full-width oval image ── */}
      <section className="bg-[#0F2318] pb-0">
        <div className="px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-[16/7] w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85"
              alt="Dubai luxury property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-10">
              <p className="text-white font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight">SELL SMARTER.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROJECT style — results section ── */}
      <section className="bg-[#F5F5F0] py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0F2318]" />
                <span className="text-[#0F2318] text-xs font-heading font-bold tracking-[0.22em] uppercase">Seller Stories</span>
              </div>
              <h2 className="font-display font-black text-[#0F2318] leading-tight mb-6" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                WHAT SELLERS<br />ACTUALLY SAY.
              </h2>
              <p className="text-gray-500 font-body text-sm leading-relaxed max-w-sm">
                Real results from real sellers. Not estimates — actual closed transactions with verified outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 flex gap-4 items-start border border-gray-100 hover:border-[#0F2318]/20 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0F2318] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white font-display font-black text-sm">{t.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-sm font-heading font-bold text-gray-900">{t.name}</span>
                        <span className="text-gray-400 font-body text-xs ml-2">{t.country}</span>
                      </div>
                      <span className="text-xs font-heading font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">{t.result}</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">"{t.text}"</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── LET'S COMBINE OUR STRENGTHS style — dark CTA ── */}
      <section id="seller-valuation" className="bg-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="font-display font-black text-white leading-[1.0] tracking-tight mb-8"
                style={{ fontSize: 'clamp(44px, 6vw, 90px)' }}
              >
                LET'S SELL<br />YOUR<br />PROPERTY.
              </h2>
              <div className="flex items-center gap-4">
                <a
                  href="#seller-valuation"
                  className="w-14 h-14 rounded-full border border-[#C9A84C] flex items-center justify-center hover:bg-[#C9A84C]/10 transition-colors group"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#C9A84C] group-hover:scale-110 transition-transform" />
                </a>
                <span className="text-white/40 font-body text-sm">Start with a free valuation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10"
            >
              <h3 className="text-xl font-display font-black text-white mb-1">Request a Free Valuation</h3>
              <p className="text-xs text-white/35 font-body mb-8">Our consultants respond within 24 hours. No pressure.</p>
              <SellerLeadForm source="Home - Seller" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
