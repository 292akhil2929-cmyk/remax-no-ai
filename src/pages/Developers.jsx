import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, TrendingUp } from 'lucide-react';

const DEVELOPERS = [
  {
    name: 'Dugasta Properties',
    slug: 'dugasta',
    link: '/dugasta',
    tagline: "Our exclusive partner. Guaranteed 10% returns with a buyback option.",
    badge: 'Exclusive Partner',
    tier: 'Tier 1',
    projects: '15+',
    units: '5,000+',
    yield: '9–11%',
    paymentPlan: '1% Monthly',
    description: 'Dugasta is one of the fastest growing off-plan developers in Dubai right now. They are known for their investor-first approach and their 10 on 10 plan, which guarantees a 10% return for 10 years with no service charges and a full buyback option. RE/MAX ZAM is their exclusive sales partner in Dubai.',
    highlights: ['1% monthly payment plans', 'RERA regulated and escrow protected', 'Pre-launch inventory available through RE/MAX ZAM'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    featured: true,
  },
  {
    name: 'Emaar Properties',
    slug: 'emaar',
    link: '/properties?developer=Emaar',
    tagline: "The most trusted name in Dubai real estate. 25 years of delivery and counting.",
    badge: 'Tier 1 Highly Trusted',
    tier: 'Tier 1',
    projects: '200+',
    units: '85,000+',
    yield: '6–8%',
    paymentPlan: 'Flexible Post-Handover',
    description: 'Emaar built the Burj Khalifa and the Dubai Mall. They created Downtown Dubai, Dubai Hills Estate and Emaar Beachfront. When investors ask us who has the strongest track record in this market, Emaar is always first on the list.',
    highlights: ['Publicly listed on the Dubai Financial Market', 'Over 25 years of consistent on-time delivery', 'Strong resale values across all their communities'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    featured: false,
  },
  {
    name: 'DAMAC Properties',
    slug: 'damac',
    link: '/properties?developer=DAMAC',
    tagline: 'Dubai\'s luxury off-plan leader. Versace, Cavalli and strong resale value.',
    badge: 'Tier 1 Highly Trusted',
    tier: 'Tier 1',
    projects: '100+',
    units: '40,000+',
    yield: '7 to 9%',
    paymentPlan: '70/30',
    description: "DAMAC is behind some of Dubai's most recognisable luxury communities including DAMAC Hills and DAMAC Lagoons. Their branded residences with Versace, Cavalli and Pagani attract international buyers looking for a premium address with genuine resale potential.",
    highlights: ['Branded partnerships with globally recognised names', 'Strong secondary market for resale', 'Full community infrastructure from day one'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    featured: false,
  },
  {
    name: 'Sobha Realty',
    slug: 'sobha',
    link: '/properties?developer=Sobha',
    tagline: 'The only developer in Dubai that makes its own building materials. Quality you can see.',
    badge: 'Tier 1 Highly Trusted',
    tier: 'Tier 1',
    projects: '40+',
    units: '20,000+',
    yield: '6 to 8%',
    paymentPlan: '60/40',
    description: 'Sobha is genuinely different. They manufacture their own building materials, which means the quality is entirely under their control from start to finish. Sobha Hartland and Sobha SeaHaven are two of the most respected luxury addresses in Dubai.',
    highlights: ['End-to-end quality control with no third party contractors', 'Ultra-luxury finishes in every project', 'Consistently high demand from Indian and international buyers'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    featured: false,
  },
  {
    name: 'Nakheel',
    slug: 'nakheel',
    link: '/properties?developer=Nakheel',
    tagline: 'They built Palm Jumeirah. Properties here hold value like nowhere else in the city.',
    badge: 'Tier 1 Highly Trusted',
    tier: 'Tier 1',
    projects: '50+',
    units: '60,000+',
    yield: '5 to 7%',
    paymentPlan: 'Varies by Project',
    description: 'Nakheel built Palm Jumeirah, which is probably the most famous piece of real estate in the world. As a government-backed developer, they carry an implicit level of credibility that very few others can match. Properties here hold their value exceptionally well.',
    highlights: ['Government-backed with strong institutional credibility', 'An address that carries genuine global recognition', 'Palm Jumeirah, Dubai Islands and waterfront communities'],
    image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=800&q=80',
    featured: false,
  },
  {
    name: 'Ellington Properties',
    slug: 'ellington',
    link: '/properties?developer=Ellington',
    tagline: 'Award-winning boutique developer. Beautiful buildings that hold a strong resale premium.',
    badge: 'Tier 2 Established',
    tier: 'Tier 2',
    projects: '20+',
    units: '5,000+',
    yield: '7–9%',
    paymentPlan: '60/40',
    description: "Ellington makes beautiful buildings. If you are buying in MBR City and want something that feels like it was actually designed rather than just built, Ellington is the developer you want. Their resale premiums consistently outperform the wider market.",
    highlights: ['Award-winning architectural design across every project', 'Premium finishes at relatively accessible price points', 'Boutique resale premiums in the secondary market'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    featured: false,
  },
];

const tierColors = {
  'Tier 1': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Tier 2': 'bg-blue-50 text-blue-700 border-blue-200',
};

export default function Developers() {
  const featured = DEVELOPERS.find(d => d.featured);
  const rest = DEVELOPERS.filter(d => !d.featured);

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/40 font-body text-xs tracking-[0.2em] uppercase">Developer Intelligence</span>
            </div>
            <h1 className="font-display font-black text-white leading-[1.0] mb-5">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Dubai Developer</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white/30 italic font-light">Profiles & Insights</span>
            </h1>
            <p className="text-white/50 font-body text-base leading-relaxed max-w-xl">
              Knowing who built your property matters more than most people realise. RE/MAX ZAM profiles every major Dubai developer so you understand their delivery history, payment plans and yield performance before you commit to anything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXCLUSIVE PARTNER FEATURE */}
      {featured && (
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 bg-amber-500 rounded-full px-3 py-1 mb-4">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <span className="text-white font-heading font-bold text-[10px] tracking-[0.2em] uppercase">RE/MAX ZAM Exclusive Partner</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight mb-4">{featured.name}</h2>
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">{featured.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Projects', value: featured.projects },
                    { label: 'Units', value: featured.units },
                    { label: 'Avg Yield', value: featured.yield },
                    { label: 'Payment', value: featured.paymentPlan },
                  ].map(s => (
                    <div key={s.label} className="bg-white rounded-xl p-3 border border-amber-100">
                      <p className="font-display font-black text-gray-900 text-lg">{s.value}</p>
                      <p className="text-gray-400 font-body text-[10px] uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2 mb-8">
                  {featured.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700 font-body">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
                <Link to={featured.link} className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                  View Dugasta Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={featured.image} alt={featured.name} className="w-full rounded-2xl object-cover aspect-[4/3] shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ALL DEVELOPERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Developer Directory</p>
            <h2 className="text-4xl font-display font-black text-gray-900 leading-tight">All Developer Profiles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((dev, i) => (
              <motion.div key={dev.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img src={dev.image} alt={dev.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 right-3 text-[10px] font-heading font-bold px-2 py-1 rounded border ${tierColors[dev.tier]}`}>{dev.badge}</span>
                  <p className="absolute bottom-3 left-4 text-white font-display font-black text-lg">{dev.name}</p>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 font-body text-xs mb-4 leading-relaxed">{dev.tagline}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Projects', value: dev.projects },
                      { label: 'Avg Yield', value: dev.yield },
                      { label: 'Payment', value: dev.paymentPlan },
                    ].map(s => (
                      <div key={s.label} className="text-center bg-gray-50 rounded-lg p-2">
                        <p className="font-heading font-bold text-gray-900 text-sm">{s.value}</p>
                        <p className="text-gray-400 font-body text-[9px] uppercase tracking-wider mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    {dev.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-500 font-body">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link to={dev.link} className="flex items-center justify-center gap-1.5 w-full border border-gray-200 hover:border-black hover:text-black text-gray-500 font-heading font-semibold text-xs py-2.5 rounded-xl transition-colors">
                    View Listings <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-4">
              Need Help Choosing the Right Developer?
            </h2>
            <p className="text-gray-500 font-body text-sm mb-8 leading-relaxed max-w-xl mx-auto">
              Our advisors have worked directly with every developer on this page. Share your budget and what you are hoping to achieve and we will point you in the right direction.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors">
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}