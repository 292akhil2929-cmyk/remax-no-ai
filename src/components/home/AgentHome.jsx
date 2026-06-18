import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, BadgeCheck, Zap, BookOpen, TrendingUp, Headphones, ArrowRight } from 'lucide-react';

const BENEFITS = [
  {
    icon: Globe,
    title: 'Global Referral Network',
    desc: '145,000+ RE/MAX agents across 110 countries. Inbound international referrals. Outbound global reach. Built-in deal flow from day one.',
  },
  {
    icon: BadgeCheck,
    title: 'RE/MAX Brand Power',
    desc: "The world's most recognised real estate brand. Your clients already trust the name before you say a word.",
  },
  {
    icon: Zap,
    title: 'Marketing & Lead Generation',
    desc: 'Listing campaigns, portal presence, social promotion and qualified leads — managed by our in-house marketing team.',
  },
  {
    icon: BookOpen,
    title: 'Training & Technology',
    desc: 'RE/MAX University access, CRM system, market data tools, and deal management platform — available from day one.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Commission Splits',
    desc: 'Industry-leading structure. The more you grow, the more you keep. Transparent tiers with no hidden fees.',
  },
  {
    icon: Headphones,
    title: 'Full Back-Office Support',
    desc: 'Legal, NOC, DLD registration, mortgage coordination — our admin team handles it so you can focus entirely on closing.',
  },
];

const TIERS = [
  {
    title: 'Associate',
    who: 'New to Dubai real estate',
    split: '50/50',
    color: 'bg-white border-gray-100',
    textColor: 'text-gray-900',
    subColor: 'text-gray-400',
    includes: ['Full RE/MAX training program', 'Brand & marketing support', 'CRM & leads access', 'Senior agent mentorship'],
  },
  {
    title: 'Senior Agent',
    who: '1+ year experience',
    split: '70/30',
    color: 'bg-black border-black',
    textColor: 'text-white',
    subColor: 'text-gray-400',
    highlight: true,
    includes: ['Priority lead allocation', 'Dedicated marketing budget', 'Direct developer relationships', 'Global referral network'],
  },
  {
    title: 'Team Leader',
    who: 'Building your own team',
    split: 'Custom',
    color: 'bg-white border-gray-100',
    textColor: 'text-gray-900',
    subColor: 'text-gray-400',
    includes: ['Own office branding', 'Team training & onboarding', 'Override commissions', 'Strategic partnership terms'],
  },
];

export default function AgentHome() {
  return (
    <>
      {/* ── BENEFITS GRID ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">What You Get</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight max-w-xl">
              Everything You Need<br />to Win in Dubai
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {BENEFITS.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-8 group hover:bg-black transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-900 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-heading font-semibold tracking-tight text-gray-900 group-hover:text-white mb-2 transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 font-body leading-relaxed transition-colors">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMISSION TIERS ── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Clear Progression</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              Partnership Tiers
            </h2>
            <p className="text-gray-500 font-body text-sm mt-2">The more you grow, the more you keep.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TIERS.map((tier, idx) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-8 border-2 relative overflow-hidden ${tier.color}`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300" />
                )}
                {tier.highlight && (
                  <span className="inline-block text-xs font-heading font-bold bg-white text-black px-3 py-1 rounded-full mb-5">Most Popular</span>
                )}
                <h3 className={`text-lg font-heading font-semibold tracking-tight mb-1 ${tier.textColor}`}>{tier.title}</h3>
                <p className={`text-xs font-body mb-6 ${tier.subColor}`}>{tier.who}</p>
                <div className={`text-4xl font-display font-black mb-1 ${tier.textColor}`}>{tier.split}</div>
                <p className={`text-xs font-body mb-7 ${tier.subColor}`}>Commission Split</p>
                <ul className="space-y-2.5">
                  {tier.includes.map(item => (
                    <li key={item} className={`flex items-start gap-2.5 text-xs font-body ${tier.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-white' : 'text-black'}`}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT CTA ── */}
      <section id="agent-apply" className="py-12 sm:py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(50,100,200,0.08),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-white/40 font-body text-xs tracking-[0.2em] uppercase">Join RE/MAX ZAM</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
                Ready to Build Your<br />Career in Dubai?
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-8">
                Whether you're an experienced agent ready to scale, or brand new and hungry to start — we have a clear path, real support, and the brand to match.
              </p>
              <ul className="space-y-4">
                {[
                  'RERA-licensed brokerage with full compliance support',
                  'No desk fees for qualifying associates',
                  'Direct access to exclusive off-plan developer inventory',
                  'Weekly deal-sharing sessions & ongoing training',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 font-body">
                    <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-heading font-semibold tracking-tight text-white mb-2">Apply to Join Our Team</h3>
              <p className="text-xs text-gray-500 font-body mb-7">We'll be in touch within 48 hours.</p>
              <Link to="/apply">
                <button className="w-full bg-white text-black hover:bg-gray-100 font-heading font-bold text-sm py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Apply to Join <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}