/**
 * SELLER JOURNEY
 * Purpose: List their property, get a valuation, understand the selling process, reach buyers
 * Sections: How It Works → Why Sell With Us → Network Stats → Free Valuation Form
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, Search, Users, BadgeCheck, Globe, TrendingUp, Star, PhoneCall } from 'lucide-react';
import SellerLeadForm from '@/components/SellerLeadForm';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Free Property Valuation',
    desc: "We assess your property's market value using live Dubai transaction data and comparable sales — no cost, no obligation.",
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'We List & Market It',
    desc: 'Professional photography, staging advice, and your property promoted across 40+ portals and to our global buyer network.',
  },
  {
    icon: Search,
    step: '03',
    title: 'Qualified Buyer Matching',
    desc: 'We pre-qualify buyers so your time is never wasted. You only meet serious, ready-to-transact purchasers.',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'We Handle Everything',
    desc: 'From negotiation to NOC, DLD registration to keys handover — our team manages every step of the transaction.',
  },
];

const stats = [
  { icon: Globe, value: '145K+', label: 'RE/MAX agents promoting your property worldwide' },
  { icon: Users, value: '1,200+', label: 'Active buyers in our current database' },
  { icon: TrendingUp, value: '94%', label: 'Of listings sold within agreed timeframe' },
  { icon: Star, value: '4.9★', label: 'Average seller satisfaction rating' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    country: 'UK',
    text: 'Sold my Business Bay apartment 3 weeks after listing. The team handled absolutely everything — I just signed and received the funds.',
  },
  {
    name: 'Ahmed K.',
    country: 'UAE',
    text: 'Got AED 180K above my asking price. Their buyer network is real — serious offers came within days.',
  },
  {
    name: 'Priya R.',
    country: 'India',
    text: 'Moving back home, I needed a fast sale. They delivered. Professional, transparent, and genuinely excellent.',
  },
];

export default function SellerHome() {
  return (
    <>
      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs text-gray-400 font-body tracking-widest uppercase mb-2">Simple. Transparent. Effective.</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900">How We Sell Your Property</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* connector line */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gray-200 z-0" style={{ width: 'calc(100% - 3rem)', left: '3rem' }} />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-display font-black text-gray-300">{s.step}</span>
                    </div>
                    <h3 className="text-base font-display font-black text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 font-body leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-center"
                >
                  <Icon className="w-5 h-5 text-gray-400 mx-auto mb-3" />
                  <p className="text-3xl font-display font-black text-gray-900 mb-1">{s.value}</p>
                  <p className="text-xs text-gray-500 font-body leading-relaxed">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seller Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900">What Sellers Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <p className="text-sm text-gray-600 font-body leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm font-display font-black text-gray-900">{t.name} <span className="text-gray-400 font-body font-normal">— {t.country}</span></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller CTA — free valuation */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs text-white/40 font-body tracking-widest uppercase mb-3">No Cost, No Obligation</p>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4 leading-tight">
                Find Out What<br />Your Property Is Worth
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                Get an accurate, data-driven valuation from our senior property consultants — backed by live DLD transaction records.
              </p>
              <ul className="space-y-3">
                {[
                  'Accurate valuation based on recent comparable sales',
                  'Advice on pricing strategy to attract premium buyers',
                  'Understanding of current buyer demand in your area',
                  'No pressure — just honest, expert guidance',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                    <span className="text-white mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-display font-black text-white mb-1">Request a Free Valuation</h3>
              <p className="text-xs text-gray-400 font-body mb-5">Our consultants respond within 24 hours.</p>
              <SellerLeadForm source="Home - Seller" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}