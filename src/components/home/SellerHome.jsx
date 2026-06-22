import { motion } from 'framer-motion';
import { Star, TrendingUp, Clock, Globe, CheckCircle2, XCircle } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

/* ── REAL DEAL RESULTS ── */
const DEALS = [
  {
    type: '2BR Apartment',
    area: 'Business Bay',
    listed: 'AED 1,400,000',
    sold: 'AED 1,580,000',
    delta: '+AED 180K above ask',
    days: '11 days',
    buyer: 'UK investor — remote close',
  },
  {
    type: 'Studio',
    area: 'Downtown Dubai',
    listed: 'AED 950,000',
    sold: 'AED 950,000',
    delta: 'Full asking price',
    days: '8 days',
    buyer: 'Indian expat — cash buyer',
  },
  {
    type: '3BR Villa',
    area: 'Dubai Hills Estate',
    listed: 'AED 4,200,000',
    sold: 'AED 4,350,000',
    delta: '+AED 150K above ask',
    days: '19 days',
    buyer: 'Saudi family — RE/MAX referral',
  },
];

/* ── HARD TRUTHS ── */
const TRUTHS = [
  {
    tag: 'Pricing Strategy',
    num: '37%',
    headline: 'of Dubai listings never sell',
    why: 'The agent quoted a high price to win the listing. No offers came. 60 days later they asked for a reduction. By then the property looked stale and buyers assumed something was wrong.',
    fix: 'We show you live DLD comparables before we even talk price. You see exactly what sold, when, and for how much. No inflation. No bait-and-switch.',
  },
  {
    tag: 'Presentation',
    num: '3 sec',
    headline: 'is how long buyers take to scroll past bad photos',
    why: 'An agent with an iPhone, one visit, 8 blurry photos. Your property looks like every other listing. Buyers screenshot the nice ones and send to their partners. Yours isn\'t one of them.',
    fix: 'We send a professional photographer, videographer, and drone operator. Staging advice included. We write the listing copy. Your property becomes the one buyers can\'t stop looking at.',
  },
  {
    tag: 'Market Reach',
    num: '61%',
    headline: 'of our buyers come from outside the UAE',
    why: 'Most Dubai agents only reach local buyers on Bayut and Dubizzle. The buyers who move fastest — expats relocating, foreign investors, RE/MAX referrals from 110+ countries — never even see your listing.',
    fix: 'Day 1 your property goes live across our global RE/MAX network and gets emailed to 12,000+ pre-qualified international investors. No other Dubai brokerage can say that.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    country: 'UK',
    flag: '🇬🇧',
    text: 'Sold my Business Bay apartment in 21 days. Handled remotely — I just signed digitally and the funds hit my account. Genuinely the easiest thing I\'ve done in Dubai.',
    result: 'Sold in 21 days',
  },
  {
    name: 'Ahmed K.',
    country: 'UAE',
    flag: '🇦🇪',
    text: 'Got AED 180K above my asking price. The international buyer network is real — serious offers came in the first week. My previous agent couldn\'t sell it for 4 months.',
    result: '+AED 180K above ask',
  },
  {
    name: 'Priya R.',
    country: 'India',
    flag: '🇮🇳',
    text: 'Needed a fast clean sale before relocating. They priced it right from day one, pre-qualified every viewer, and closed in 19 days. Zero stress.',
    result: 'Closed in 19 days',
  },
];

export default function SellerHome() {
  return (
    <>
      {/* ── TRUTHS: SPLIT CARD LAYOUT ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <p className="text-[10px] font-heading font-bold text-gray-400 tracking-[0.22em] uppercase mb-4">
              What every Dubai seller should know
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 leading-[1.05]">
                What makes or breaks<br />a Dubai property sale
              </h2>
              <p className="text-gray-400 font-body text-sm max-w-xs leading-relaxed shrink-0">
                Three factors that determine your final sale price — and how we handle each one.
              </p>
            </div>
          </motion.div>

          {/* Split cards */}
          <div className="space-y-5">
            {TRUTHS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* LEFT: dark stat panel */}
                <div className="relative bg-gray-950 p-9 sm:p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[340px] overflow-hidden">
                  {/* Huge watermark number */}
                  <span
                    aria-hidden
                    className="absolute right-0 bottom-0 font-display font-black leading-none select-none pointer-events-none text-white/[0.04]"
                    style={{ fontSize: 'clamp(100px, 14vw, 180px)', lineHeight: 1, transform: 'translate(10%, 20%)' }}
                  >
                    {t.num}
                  </span>

                  {/* Gold accent + tag */}
                  <div className="flex items-center gap-3">
                    <div className="w-[3px] h-7 rounded-full bg-[#C9A84C]" />
                    <span className="text-[10px] font-heading font-bold tracking-[0.2em] text-[#C9A84C] uppercase">
                      {t.tag}
                    </span>
                    <span className="ml-auto text-[10px] font-heading font-bold text-white/15 tracking-widest">0{i + 1}&thinsp;/&thinsp;03</span>
                  </div>

                  {/* Main stat */}
                  <div className="mt-8 relative z-10">
                    <div className="font-display font-black text-white leading-none mb-4"
                      style={{ fontSize: 'clamp(60px, 9vw, 110px)' }}>
                      {t.num}
                    </div>
                    <p className="text-white/45 font-body text-base sm:text-lg leading-snug max-w-[280px]">
                      {t.headline}
                    </p>
                  </div>
                </div>

                {/* RIGHT: two-tone comparison panel */}
                <div className="flex flex-col divide-y divide-gray-100">
                  {/* Common approach — top */}
                  <div className="flex-1 bg-gray-50 px-8 sm:px-10 py-8 sm:py-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-[10px] font-heading font-bold tracking-[0.18em] text-red-400 uppercase">
                        The common approach
                      </span>
                    </div>
                    <p className="text-gray-500 font-body text-sm sm:text-[15px] leading-relaxed">{t.why}</p>
                  </div>

                  {/* RE/MAX Zam approach — bottom */}
                  <div className="flex-1 bg-white px-8 sm:px-10 py-8 sm:py-10 relative overflow-hidden">
                    {/* Soft gold glow top-right */}
                    <div
                      className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none opacity-25"
                      style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
                    />
                    <div className="flex items-center gap-2.5 mb-4 relative z-10">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      <span className="text-[10px] font-heading font-bold tracking-[0.18em] text-[#C9A84C] uppercase">
                        The RE/MAX Zam approach
                      </span>
                    </div>
                    <p className="text-gray-700 font-body text-sm sm:text-[15px] leading-relaxed relative z-10">{t.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL DEAL RESULTS ── */}
      <section className="py-14 sm:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[#C9A84C] text-[10px] font-heading font-bold tracking-[0.25em] uppercase mb-3">Real transactions · DLD verified</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-[1.05]">
              Recent deals,<br />real numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {DEALS.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-heading font-bold text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">{d.type}</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/50 text-xs font-body">{d.area}</span>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-white/35 font-body text-xs">Listed</span>
                    <span className="text-white/50 font-body text-sm line-through">{d.listed}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-white/60 font-body text-xs">Sold</span>
                    <span className="text-white font-display font-black text-lg">{d.sold}</span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 mb-4 flex items-center justify-between">
                  <span className="text-emerald-400 text-xs font-heading font-bold">{d.delta}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-white/30" />
                    <span className="text-white/40 text-[10px] font-body">{d.days}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pt-3 border-t border-white/[0.06]">
                  <Globe className="w-3 h-3 text-white/25 shrink-0" />
                  <span className="text-white/30 text-[10px] font-body">{d.buyer}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center gap-2 text-white/30 font-body text-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            94% of our listings sell at or above asking price · Average 28 days on market
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">From sellers who've been through it</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900">What they actually said</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-lg">{t.flag}</span>
                  </div>
                  <p className="text-gray-700 font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <p className="text-sm font-heading font-bold text-gray-900">{t.name}</p>
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
      <div className="bg-white px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5 box-border">
        <section id="seller-valuation" className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/images/landscape.png')" }} />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-xl">
                <p className="text-[#C9A84C] text-[10px] font-heading font-bold tracking-widest uppercase mb-4">Step 1 of the process</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.05] tracking-tight mb-6">
                  Find out what your<br />property is really worth
                </h2>
                <p className="text-white/65 font-body text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  Not what your neighbour thinks. Not what an agent tells you to win the listing. What buyers are actually paying right now — backed by live DLD data.
                </p>
                <div className="space-y-3">
                  {[
                    { stat: 'Within 24 hrs', label: 'Valuation delivered' },
                    { stat: 'Zero cost', label: 'No obligation, ever' },
                    { stat: 'DLD data', label: 'Not estimates — real transactions' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="font-display font-black text-[#C9A84C] text-lg w-24 shrink-0">{item.stat}</span>
                      <span className="text-white/50 font-body text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">Get Your Free Valuation</h3>
                  <p className="text-white/40 font-body text-xs mb-8">We respond within 24 hours. No spam, no pressure.</p>
                  <SellerLeadForm source="Home - Seller" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
