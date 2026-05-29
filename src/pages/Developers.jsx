import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink, Building2 } from 'lucide-react';

const DEVELOPERS = [
  {
    name: 'Emaar Properties',
    tier: 'Tier 1',
    tierLabel: 'Most Trusted',
    founded: '1997',
    projects: '200+',
    units: '85,000+',
    yield: '6–8%',
    paymentPlan: 'Flexible Post-Handover',
    tagline: 'They built Burj Khalifa, Downtown Dubai and Dubai Hills. The benchmark every other developer is measured against.',
    description: 'Emaar is the most trusted name in Dubai real estate. 25+ years of consistent delivery, a public listing on the DFM, and communities that consistently outperform on resale. If you want certainty, start here.',
    highlights: ['Listed on Dubai Financial Market (DFM)', '25+ years of on-time delivery', 'Best-in-class resale values'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    currentProjects: [
      { name: 'The Oasis by Emaar', status: 'Selling', path: '/properties?developer=Emaar&community=The+Oasis' },
      { name: 'Emaar Beachfront', status: 'Selling', path: '/properties?developer=Emaar&community=Emaar+Beachfront' },
      { name: 'Dubai Hills Estate', status: 'Selling', path: '/properties?developer=Emaar&community=Dubai+Hills+Estate' },
      { name: 'Creek Harbour', status: 'Selling', path: '/properties?developer=Emaar&community=Creek+Harbour' },
      { name: 'The Valley', status: 'Upcoming', path: '/properties?developer=Emaar&community=The+Valley' },
    ],
  },
  {
    name: 'DAMAC Properties',
    tier: 'Tier 1',
    tierLabel: 'Highly Trusted',
    founded: '2002',
    projects: '100+',
    units: '40,000+',
    yield: '7–9%',
    paymentPlan: '70/30',
    tagline: 'Dubai\'s luxury off-plan leader. Versace, Cavalli, Lamborghini — branded residences with strong resale value.',
    description: "DAMAC dominates the branded luxury segment. Their communities like DAMAC Hills and DAMAC Lagoons consistently attract international investors who want a premium address with genuine yield.",
    highlights: ['Versace, Cavalli, Pagani branded residences', 'Strong secondary market demand', 'Full community infrastructure from day one'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    currentProjects: [
      { name: 'DAMAC Lagoons', status: 'Selling', path: '/properties?developer=DAMAC&community=DAMAC+Lagoons' },
      { name: 'DAMAC Hills 2', status: 'Selling', path: '/properties?developer=DAMAC&community=DAMAC+Hills+2' },
      { name: 'Cavalli Couture', status: 'Selling', path: '/properties?developer=DAMAC&community=Business+Bay' },
      { name: 'Canal Crown', status: 'Selling', path: '/properties?developer=DAMAC&community=Business+Bay' },
      { name: 'Riverside by DAMAC', status: 'Upcoming', path: '/properties?developer=DAMAC' },
    ],
  },
  {
    name: 'Sobha Realty',
    tier: 'Tier 1',
    tierLabel: 'Highly Trusted',
    founded: '1976',
    projects: '40+',
    units: '20,000+',
    yield: '6–8%',
    paymentPlan: '60/40',
    tagline: 'The only developer in Dubai that manufactures its own building materials. End-to-end quality control.',
    description: 'Sobha is genuinely different. They control everything — from raw materials to finishing — which means quality is never compromised. Sobha Hartland and SeaHaven are two of the most respected luxury addresses in Dubai.',
    highlights: ['No third-party contractors — complete quality control', 'Ultra-luxury finishes as standard', 'Strong demand from Indian and Asian investors'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    currentProjects: [
      { name: 'Sobha Hartland II', status: 'Selling', path: '/properties?developer=Sobha&community=Sobha+Hartland' },
      { name: 'Sobha SeaHaven', status: 'Selling', path: '/properties?developer=Sobha&community=Dubai+Harbour' },
      { name: 'Sobha One', status: 'Selling', path: '/properties?developer=Sobha&community=Sobha+One' },
      { name: 'Sobha Reserve', status: 'Upcoming', path: '/properties?developer=Sobha' },
    ],
  },
  {
    name: 'Nakheel',
    tier: 'Tier 1',
    tierLabel: 'Government-Backed',
    founded: '2000',
    projects: '50+',
    units: '60,000+',
    yield: '5–7%',
    paymentPlan: 'Varies by Project',
    tagline: 'They built Palm Jumeirah. The most iconic addresses in Dubai. Value that holds over decades.',
    description: 'Government-backed and globally recognised, Nakheel properties carry implicit credibility. Palm Jumeirah is the most famous piece of real estate in the world. Values here are some of the most resilient in the entire city.',
    highlights: ['Government-backed, institutionally credible', 'Palm Jumeirah — globally recognised address', 'Long-term capital appreciation track record'],
    image: 'https://images.unsplash.com/photo-1597423498219-04418210827d?w=800&q=80',
    currentProjects: [
      { name: 'Palm Jumeirah Villas', status: 'Selling', path: '/properties?developer=Nakheel&community=Palm+Jumeirah' },
      { name: 'Dubai Islands', status: 'Selling', path: '/properties?developer=Nakheel&community=Dubai+Islands' },
      { name: 'Jumeirah Village Triangle', status: 'Selling', path: '/properties?developer=Nakheel&community=JVT' },
      { name: 'Palm Jebel Ali', status: 'Upcoming', path: '/properties?developer=Nakheel&community=Palm+Jebel+Ali' },
    ],
  },
  {
    name: 'Meraas',
    tier: 'Tier 1',
    tierLabel: 'Government-Backed',
    founded: '2007',
    projects: '30+',
    units: '15,000+',
    yield: '5–7%',
    paymentPlan: 'Flexible',
    tagline: 'The developer behind Bluewaters Island, City Walk and La Mer. Lifestyle destinations that command premium pricing.',
    description: 'Meraas is the lifestyle developer for Dubai. They create destinations first and residences second — which is why City Walk, Bluewaters and La Mer attract consistent premium pricing. Owning here means owning in a place people actually want to be.',
    highlights: ['Government-backed lifestyle destinations', 'Consistently above-market resale premiums', 'Unmatched retail, F&B and entertainment integration'],
    image: 'https://images.unsplash.com/photo-1534240177524-30dc7a82f773?w=800&q=80',
    currentProjects: [
      { name: 'Bluewaters Residences', status: 'Selling', path: '/properties?developer=Meraas&community=Bluewaters+Island' },
      { name: 'City Walk Residences', status: 'Selling', path: '/properties?developer=Meraas&community=City+Walk' },
      { name: 'Port De La Mer', status: 'Selling', path: '/properties?developer=Meraas&community=La+Mer' },
      { name: 'The Beach JBR', status: 'Upcoming', path: '/properties?developer=Meraas' },
    ],
  },
  {
    name: 'Aldar Properties',
    tier: 'Tier 1',
    tierLabel: 'Highly Trusted',
    founded: '2004',
    projects: '60+',
    units: '30,000+',
    yield: '6–8%',
    paymentPlan: 'Post-Handover Available',
    tagline: 'Abu Dhabi\'s largest developer, now building actively in Dubai. RERA-backed with a DFM listing.',
    description: "Aldar is the most prominent developer moving into Dubai from Abu Dhabi, bringing institutional credibility and a strong track record. Their Dubai launches — particularly in Yas Island expansions and new Dubai masterplans — have sold out quickly.",
    highlights: ['Listed on Abu Dhabi Securities Exchange', 'Strong government and institutional backing', 'Expanding aggressively into Dubai market'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    currentProjects: [
      { name: 'Aldar in Dubai Hills', status: 'Selling', path: '/properties?developer=Aldar&community=Dubai+Hills' },
      { name: 'Aldar Verdes', status: 'Selling', path: '/properties?developer=Aldar' },
      { name: 'Saadiyat Reserve', status: 'Upcoming', path: '/properties?developer=Aldar' },
    ],
  },
  {
    name: 'Ellington Properties',
    tier: 'Tier 2',
    tierLabel: 'Established',
    founded: '2014',
    projects: '20+',
    units: '5,000+',
    yield: '7–9%',
    paymentPlan: '60/40',
    tagline: 'Award-winning boutique developer. Beautifully designed buildings with consistent resale premiums.',
    description: 'Ellington makes beautiful buildings. If you are buying in MBR City or JVC and want something that feels designed rather than just built, Ellington is the developer you want. Their resale premiums consistently outperform the wider market.',
    highlights: ['Award-winning architecture in every project', 'Premium finishes at accessible price points', 'Boutique resale premiums in the secondary market'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    currentProjects: [
      { name: 'Crestmark', status: 'Selling', path: '/properties?developer=Ellington&community=Business+Bay' },
      { name: 'The Highbury', status: 'Selling', path: '/properties?developer=Ellington&community=MBR+City' },
      { name: 'Ellington Ocean House', status: 'Selling', path: '/properties?developer=Ellington&community=Palm+Jumeirah' },
      { name: 'Burlington Residences', status: 'Upcoming', path: '/properties?developer=Ellington' },
    ],
  },
  {
    name: 'Binghatti Developers',
    tier: 'Tier 2',
    tierLabel: 'Established',
    founded: '2013',
    projects: '50+',
    units: '18,000+',
    yield: '7–10%',
    paymentPlan: '50/50 to 70/30',
    tagline: 'Known for striking architecture and high yields. Binghatti Bugatti is the most expensive apartment in Dubai history.',
    description: "Binghatti has built a name with distinctive architecture and strong yield performance. Their properties in Business Bay and Dubai Silicon Oasis attract investors looking for above-average returns. The Bugatti Residences placed them firmly on the global luxury map.",
    highlights: ['Above-market yields in key investment corridors', 'Distinctive architecture with strong brand recognition', 'Bugatti, Mercedes-Benz branded residences'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    currentProjects: [
      { name: 'Binghatti Nova', status: 'Selling', path: '/properties?developer=Binghatti&community=JVC' },
      { name: 'Binghatti Skyrise', status: 'Selling', path: '/properties?developer=Binghatti&community=Business+Bay' },
      { name: 'Mercedes-Benz Places', status: 'Selling', path: '/properties?developer=Binghatti&community=Downtown+Dubai' },
      { name: 'Bugatti Residences', status: 'Selling', path: '/properties?developer=Binghatti&community=Business+Bay' },
    ],
  },
  {
    name: 'Danube Properties',
    tier: 'Tier 2',
    tierLabel: 'Established',
    founded: '2014',
    projects: '25+',
    units: '10,000+',
    yield: '7–9%',
    paymentPlan: '1% Monthly',
    tagline: 'The best payment plans in the market. 1% per month makes entry accessible for first-time investors.',
    description: "Danube is one of the most investor-friendly developers in Dubai. Their 1% monthly payment plan has made Dubai property accessible to a much wider pool of buyers, and they consistently deliver on time. Strong yields across JVC, Arjan and Al Furjan.",
    highlights: ['Market-leading 1% monthly payment plans', 'Consistent on-time delivery track record', 'Ideal for first-time Dubai investors'],
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
    currentProjects: [
      { name: 'Fashionz by Danube', status: 'Selling', path: '/properties?developer=Danube&community=JVC' },
      { name: 'Pearlz by Danube', status: 'Selling', path: '/properties?developer=Danube&community=Al+Furjan' },
      { name: 'Skyz by Danube', status: 'Selling', path: '/properties?developer=Danube&community=Arjan' },
      { name: 'Bayz 102', status: 'Upcoming', path: '/properties?developer=Danube&community=Business+Bay' },
    ],
  },
  {
    name: 'Select Group',
    tier: 'Tier 2',
    tierLabel: 'Established',
    founded: '2002',
    projects: '15+',
    units: '8,000+',
    yield: '6–8%',
    paymentPlan: '60/40',
    tagline: 'One of Dubai Marina\'s most prolific developers. Six Senses Residences is their crown jewel.',
    description: "Select Group has defined large parts of Dubai Marina's skyline. They are responsible for some of the most desirable mid-to-luxury residential buildings along the waterfront. Their Six Senses Residences on Palm Jumeirah is one of the most anticipated launches in recent memory.",
    highlights: ['Strong track record in Dubai Marina and waterfront', 'Six Senses wellness residences — a market first', 'Consistent delivery with premium tenant demand'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    currentProjects: [
      { name: 'Six Senses Residences Palm', status: 'Selling', path: '/properties?developer=Select+Group&community=Palm+Jumeirah' },
      { name: 'The Edge', status: 'Selling', path: '/properties?developer=Select+Group&community=Business+Bay' },
      { name: 'Marina Gate', status: 'Selling', path: '/properties?developer=Select+Group&community=Dubai+Marina' },
    ],
  },
];

const tierColors = {
  'Tier 1': { badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', dot: 'bg-emerald-500' },
  'Tier 2': { badge: 'bg-blue-50 text-blue-700 border border-blue-200', dot: 'bg-blue-500' },
};

const statusColors = {
  'Selling': 'bg-emerald-50 text-emerald-700',
  'Upcoming': 'bg-amber-50 text-amber-700',
};

export default function Developers() {
  return (
    <div className="min-h-screen bg-gray-50">

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
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Top 10 Dubai</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-white/30 italic font-light">Developer Profiles</span>
            </h1>
            <p className="text-white/50 font-body text-base leading-relaxed max-w-xl">
              Who built your property matters more than most people realise. Here are the developers we trust, their projects currently selling, and what you can expect from each one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DEVELOPER LIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          {DEVELOPERS.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">

                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[180px] overflow-hidden">
                  <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-heading font-bold px-2.5 py-1 rounded-full mb-2 ${tierColors[dev.tier].badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tierColors[dev.tier].dot}`} />
                      {dev.tier} — {dev.tierLabel}
                    </span>
                    <p className="text-white font-display font-black text-xl leading-tight">{dev.name}</p>
                    <p className="text-white/60 font-body text-xs mt-1">Est. {dev.founded}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <p className="text-gray-800 font-heading font-semibold text-sm mb-2 leading-snug">{dev.tagline}</p>
                  <p className="text-gray-500 font-body text-xs leading-relaxed mb-5">{dev.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Projects', value: dev.projects },
                      { label: 'Units Delivered', value: dev.units },
                      { label: 'Avg Yield', value: dev.yield },
                      { label: 'Payment Plan', value: dev.paymentPlan },
                    ].map(s => (
                      <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="font-display font-black text-gray-900 text-sm leading-tight">{s.value}</p>
                        <p className="text-gray-400 font-body text-[9px] uppercase tracking-wider mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-3.5 h-3.5 text-gray-400" />
                      <p className="text-gray-400 font-heading font-bold text-[10px] uppercase tracking-widest">Current &amp; Upcoming Projects</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dev.currentProjects.map(proj => (
                        <Link
                          key={proj.name}
                          to={proj.path}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all hover:shadow-sm hover:scale-[1.02] ${statusColors[proj.status]}`}
                        >
                          {proj.name}
                          <span className="text-[9px] font-body opacity-70">· {proj.status}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Highlights + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                      {dev.highlights.map(h => (
                        <li key={h} className="flex items-center gap-1.5 text-[11px] text-gray-500 font-body">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/properties?developer=${encodeURIComponent(dev.name.split(' ')[0])}`}
                      className="shrink-0 inline-flex items-center gap-1.5 border border-gray-200 hover:border-black hover:text-black text-gray-500 font-heading font-semibold text-xs px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
                    >
                      All Listings <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-4">
              Not Sure Which Developer to Go With?
            </h2>
            <p className="text-gray-500 font-body text-sm mb-8 leading-relaxed max-w-xl mx-auto">
              Our advisors work directly with every developer on this page. Tell us your budget and goals and we will match you to the right project within 24 hours.
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