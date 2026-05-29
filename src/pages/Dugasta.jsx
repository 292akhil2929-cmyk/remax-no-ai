import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, CheckCircle2, ArrowRight, MapPin, Calendar,
  Star, Shield, Building2, Phone, ChevronDown, Users, Award, Banknote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

// ─── DATA ──────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    name: 'Terra Tower',
    community: 'Dubailand Residence Complex',
    type: 'Apartments',
    priceFrom: 'AED 634,000',
    bedrooms: '1–3 BR',
    handover: 'Q2 2027',
    paymentPlan: '5-Year Post-Handover Plan',
    roi: '10% Guaranteed',
    area: '719–1,400 sqft',
    tag: '10 on 10 Plan',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
    highlights: [
      '10% net ROI guaranteed for 10 years',
      'Zero service charges for 10 years',
      '100% buyback option after 10 years',
      '22 mins to Burj Khalifa, 23 mins to Dubai Airport',
      '12 floors | 430,000+ sqft total area | 400+ parking spaces',
    ],
    description: 'Terra Tower is Dugasta\'s flagship investment product in Dubailand Residence Complex — a premium off-plan project with 12 floors, world-class amenities, and the full "10 on 10" guarantee package.',
  },
  {
    name: 'Al Haseen Residences',
    community: 'Dubai South — Industrial City',
    type: 'Apartments',
    priceFrom: 'AED 477,000',
    bedrooms: 'Studio–2 BR',
    handover: 'Q3 2027',
    paymentPlan: 'Flexible Payment Plan',
    roi: '10% Guaranteed',
    area: 'From 450 sqft',
    tag: 'Low Entry Price',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    highlights: [
      'Lowest entry point in the Dugasta portfolio',
      '10% guaranteed annual ROI for 5 years',
      'Zero service charges + 100% buyback option',
      'Dubai South — Expo City & Al Maktoum Airport corridor',
      'Strong rental demand from industrial & airport workers',
    ],
    description: 'Al Haseen Residences targets the rapidly growing Dubai South corridor — home to Expo City and the new Al Maktoum International Airport, one of Dubai\'s biggest infrastructure bets.',
  },
  {
    name: 'Moonsa Residences 2',
    community: 'International City (Warsan Fourth)',
    type: 'Apartments',
    priceFrom: 'AED 540,000',
    bedrooms: 'Studio–1 BR',
    handover: 'Q4 2026',
    paymentPlan: 'Post-Handover Plan',
    roi: '9–10%',
    area: 'From 500 sqft',
    tag: 'Near Handover',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
    highlights: [
      'Near handover — strong immediate resale opportunity',
      'International City — consistently highest rental demand in Dubai',
      'Average occupancy rate 95%+ in the community',
      'Ideal for buy-to-rent investors seeking immediate income',
      'RERA-regulated escrow, DLD-registered project',
    ],
    description: "Moonsa Residences 2 sits in International City — Dubai's highest-occupancy residential community. Near-handover status means investors can start earning rental income within months.",
  },
  {
    name: 'Weybridge Gardens 3',
    community: 'Dubailand',
    type: 'Apartments',
    priceFrom: 'AED 650,000',
    bedrooms: '1–2 BR',
    handover: 'Q2 2027',
    paymentPlan: '1% Monthly Post-Handover',
    roi: '8–10%',
    area: 'From 700 sqft',
    tag: 'Exclusive — RE/MAX ZAM',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    highlights: [
      'RE/MAX ZAM exclusive sales access — pre-launch pricing',
      '1% monthly payment plan — most accessible in Dubai',
      'Smart home features & modern finish throughout',
      'Proven community demand in Dubailand catchment',
      'Strong capital appreciation expected at handover',
    ],
    description: 'Weybridge Gardens 3 is available exclusively through RE/MAX ZAM before public launch. The 1% monthly payment plan makes it one of the most accessible entry points for first-time Dubai investors.',
  },
];

const FAQS = [
  {
    q: 'What is the Dugasta "10 on 10" plan exactly?',
    a: 'The "10 on 10" plan guarantees investors 10% net ROI per year for 10 consecutive years — contractually, not a projection. On top of that, Dugasta waives all service charges for 10 years, and offers a 100% buyback option after the 10-year period, giving investors a clear exit strategy.',
  },
  {
    q: 'How is 10% guaranteed when market yields average 7–8%?',
    a: "Dugasta achieves this through City Towers Real Estate, their parent company which has managed Dubai property since the 1990s. By managing the rentals in-house and absorbing the cost difference, Dugasta backs the guarantee contractually. The developer — not the investor — carries the risk of vacancy or shortfall. This is the core of the investor-first model.",
  },
  {
    q: 'What happens after 10 years?',
    a: 'After the 10-year period, investors have three options: (1) continue to hold and earn market-rate rents, (2) sell on the secondary market — by which point the capital appreciation is typically significant, or (3) exercise the 100% buyback option where Dugasta repurchases the unit at the original purchase price.',
  },
  {
    q: 'Are service charges really zero?',
    a: 'Yes. Dugasta absorbs all service charges — typically 1–1.5% of property value per year — for the full 10-year period. This adds effectively 1.5% to your net annual return on top of the guaranteed 10%, making the total value proposition closer to 11–11.5% annually.',
  },
  {
    q: 'Is this RERA-regulated and legally binding?',
    a: 'All Dugasta projects are registered with the Real Estate Regulatory Agency (RERA) and buyer funds are held in DLD-regulated escrow accounts. The ROI guarantee and zero service charge commitment are embedded in the Sales Purchase Agreement (SPA) — they are legally binding contracts under UAE law.',
  },
  {
    q: 'Who manages the rental after handover?',
    a: "Dugasta's parent entity, City Towers Real Estate, manages the rental on the investor's behalf through their in-house property management division. This means zero management hassle for the investor — you own the asset and receive your guaranteed income.",
  },
];

// ─── LEAD FORM ─────────────────────────────────────────────────────────────────

function DugastaLeadForm({ dark = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', investment_budget: '', notes: '' });

  const createLead = useMutation({
    mutationFn: (data) => base44.entities.Lead.create(data),
    onSuccess: () => setSubmitted(true),
  });

  const inputClass = dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12'
    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 h-12';

  const labelClass = dark ? 'text-white/50' : 'text-gray-500';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${dark ? 'bg-emerald-500/20' : 'bg-emerald-50'}`}>
          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
        </div>
        <h3 className={`font-heading font-bold text-xl mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>Request Received</h3>
        <p className={`font-body text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}>
          Our Dugasta specialist will contact you within 2 hours with full project details and ROI breakdown.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); createLead.mutate({ ...form, lead_type: 'Investor', source: 'Dugasta Page — 10 on 10' }); }} className="space-y-3">
      <Input placeholder="Full Name *" required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className={inputClass} />
      <Input placeholder="Email Address *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
      <Input placeholder="Phone / WhatsApp *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
      <Select value={form.investment_budget} onValueChange={(v) => setForm({ ...form, investment_budget: v })}>
        <SelectTrigger className={inputClass}>
          <SelectValue placeholder="Investment Budget" />
        </SelectTrigger>
        <SelectContent>
          {['Under 500K AED', '500K - 1M AED', '1M - 3M AED', '3M - 5M AED', '5M+ AED'].map(b => (
            <SelectItem key={b} value={b}>{b}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={createLead.isPending} className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm tracking-wide">
        {createLead.isPending ? 'Sending...' : 'Get Full Project Details & ROI Analysis'} <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <p className={`text-[10px] font-body text-center ${dark ? 'text-white/25' : 'text-gray-400'}`}>
        No spam. A Dugasta investment specialist contacts you directly within 2 hours.
      </p>
    </form>
  );
}

// ─── FAQ ITEM ──────────────────────────────────────────────────────────────────

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-heading font-semibold text-gray-900 text-sm leading-snug">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-gray-500 font-body leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function Dugasta() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-center bg-cover opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        {/* Amber glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.12),transparent_60%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

            {/* Copy — 3 cols */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-7">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-heading font-bold text-[10px] tracking-[0.25em] uppercase">RE/MAX ZAM Exclusive Partner</span>
              </div>

              <h1 className="font-display font-black text-white leading-[0.95] mb-6">
                <span className="block text-6xl sm:text-7xl lg:text-8xl">Dugasta</span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl text-amber-400">10 on 10</span>
                <span className="block text-2xl sm:text-3xl text-white/30 font-light italic mt-3 leading-tight">10% Guaranteed ROI · 10 Years · Zero Tax</span>
              </h1>

              <p className="text-white/55 font-body text-base leading-relaxed mb-8 max-w-xl">
                Dugasta Properties is the only Dubai developer offering a <strong className="text-white/80">contractually guaranteed 10% net ROI for 10 years</strong>, backed by City Towers Real Estate — Dubai's property management authority since 1991. Zero service charges. 100% buyback option. Zero investor stress.
              </p>

              {/* 3 pillars */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { value: '10%', label: 'Net ROI / Year', sub: 'Guaranteed by contract' },
                  { value: '10 Yrs', label: 'Duration', sub: 'Full decade of income' },
                  { value: '100%', label: 'Buyback Option', sub: 'Guaranteed exit strategy' },
                ].map(s => (
                  <div key={s.label} className="bg-white/[0.05] border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-amber-400 font-display font-black text-2xl">{s.value}</p>
                    <p className="text-white font-heading font-semibold text-xs mt-1">{s.label}</p>
                    <p className="text-white/30 font-body text-[9px] mt-0.5 leading-tight">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/971508794494?text=Hi, I'd like to know more about Dugasta Properties 10 on 10 plan" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                  <Phone className="w-4 h-4" /> WhatsApp a Specialist
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Lead Form — 2 cols */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                <h2 className="font-display font-black text-white text-2xl mb-1">Get the Full Brochure</h2>
                <p className="text-white/35 font-body text-xs mb-6">Project details, ROI contracts & floor plans — sent directly.</p>
                <DugastaLeadForm dark={true} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CITY TOWERS LEGACY ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">The Company Behind the Guarantee</p>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight mb-5">
                Dugasta is Built on<br />35 Years of City Towers
              </h2>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                Dugasta Properties is part of the <strong className="text-gray-800">City Towers Real Estate</strong> group — a Dubai property management and development company founded in 1991 by Tauseef Khan. For over three decades, City Towers has managed thousands of residential units across Dubai, giving Dugasta an unmatched understanding of rental markets, tenant demand, and asset management.
              </p>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-8">
                This is <em>why</em> the 10% ROI guarantee is possible: City Towers manages the rentals in-house. The developer absorbs any market shortfall — <strong className="text-gray-800">the investor receives their guaranteed income regardless of vacancy or market conditions</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: 'Founded', value: '1991' },
                  { icon: Users, label: 'Leadership', value: 'Khan Family' },
                  { icon: Award, label: 'Units Delivered', value: '5,000+' },
                  { icon: Banknote, label: 'Management', value: 'In-House' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-gray-900 text-sm">{value}</p>
                      <p className="text-gray-400 font-body text-[10px]">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-[#0a0a0a] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.1),transparent_60%)]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-12 bg-amber-500 rounded-full" />
                    <div>
                      <p className="text-white font-heading font-bold text-sm">Tauseef Khan</p>
                      <p className="text-white/40 font-body text-xs">Founder & Chairman, Dugasta Properties</p>
                    </div>
                  </div>
                  <blockquote className="text-white/70 font-body text-sm leading-relaxed italic mb-8">
                    "At Dugasta, trust is not just a slogan — it is the very DNA of our business. The '10 on 10' model I introduced stands as the best example of this philosophy, offering investors 10% net ROI for 10 years with zero service charges. By eliminating uncertainty, we provide our customers with absolute clarity and complete confidence."
                  </blockquote>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white/30 font-body text-xs mb-3">Leadership Team</p>
                    <div className="space-y-2">
                      {[
                        { name: 'Tauseef Khan', role: 'Founder & Chairman' },
                        { name: 'Azaan Khan', role: 'Chief Executive Officer' },
                        { name: 'Eifaad Khan', role: 'President' },
                      ].map(p => (
                        <div key={p.name} className="flex items-center justify-between">
                          <span className="text-white font-heading font-semibold text-xs">{p.name}</span>
                          <span className="text-white/40 font-body text-xs">{p.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW 10 on 10 WORKS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">The Investment Model</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight mb-4">
              How the "10 on 10" Plan Works
            </h2>
            <p className="text-gray-500 font-body text-sm max-w-2xl mx-auto leading-relaxed">
              This isn't a projection or a marketing estimate. It's a contractually binding guarantee embedded in the Sales Purchase Agreement under UAE law.
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 text-center">
                <div className="p-5 border-r border-gray-100">
                  <p className="text-gray-400 font-body text-xs uppercase tracking-wider mb-1">Metric (5 Years)</p>
                </div>
                <div className="p-5 bg-amber-50 border-r border-amber-100">
                  <p className="text-amber-700 font-heading font-bold text-sm uppercase tracking-wider">Dugasta 10 on 10</p>
                </div>
                <div className="p-5">
                  <p className="text-gray-400 font-heading font-semibold text-sm">Regular Dubai Apartment</p>
                </div>
              </div>
              {[
                ['Annual ROI', '10% Guaranteed', '6–8% (not guaranteed)'],
                ['Rental Income (5 yrs on AED 691K)', 'AED 345,500', 'AED 207,300–276,400'],
                ['Service Charges (5 yrs)', 'AED 0 — waived', '~AED 51,825'],
                ['Vacancy Risk', 'Zero — developer backed', 'Market risk applies'],
                ['Exit Strategy', '100% buyback guaranteed', 'Market-dependent resale'],
                ['Net 5-Year Profit', '~AED 345,500', '~AED 155,475–224,575'],
              ].map(([metric, dugasta, regular], i) => (
                <div key={metric} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                  <div className="p-4 font-body text-gray-500 border-r border-gray-100">{metric}</div>
                  <div className="p-4 font-heading font-semibold text-emerald-700 bg-amber-50/50 border-r border-amber-100 text-center">{dugasta}</div>
                  <div className="p-4 font-body text-gray-500 text-center">{regular}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 font-body text-xs mt-3">
              Based on Terra Tower 1BR at AED 691,000. Service charges est. at 1.5% p.a. Source: RERA / DLD market data.
            </p>
          </motion.div>

          {/* 4 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: '10% Net ROI / Year', desc: 'Contractually guaranteed in the SPA. Paid annually to the investor regardless of market conditions, vacancy, or rental rates.' },
              { num: '02', title: 'Zero Service Charges', desc: "Dugasta absorbs all service charges for 10 years. At ~1.5% p.a., this adds effectively an extra 1.5% to your real annual return — making it closer to 11.5% total.", },
              { num: '03', title: 'City Towers Manages It', desc: "Dugasta's parent company City Towers Real Estate (est. 1991) manages all rentals in-house. You own the asset, they handle everything — zero landlord stress.", },
              { num: '04', title: '100% Buyback Option', desc: 'After 10 years, Dugasta will repurchase your unit at the original purchase price — guaranteed. This creates a risk-free floor under your investment.' },
            ].map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <p className="text-amber-500 font-display font-black text-4xl mb-4">{p.num}</p>
                <h3 className="font-heading font-bold text-gray-900 text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 font-body text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Current Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              Available Dugasta Projects
            </h2>
          </motion.div>

          {/* Project tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {PROJECTS.map((p, i) => (
              <button key={p.name} onClick={() => setActiveProject(i)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all ${activeProject === i ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {p.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeProject} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={PROJECTS[activeProject].image} alt={PROJECTS[activeProject].name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-heading font-bold px-3 py-1.5 rounded-full">
                    {PROJECTS[activeProject].tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-display font-black text-2xl leading-tight">{PROJECTS[activeProject].name}</p>
                    <p className="text-white/60 text-xs font-body flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />{PROJECTS[activeProject].community}
                    </p>
                  </div>
                </div>
                {/* Details */}
                <div className="p-8">
                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">{PROJECTS[activeProject].description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-body">
                    {[
                      { label: 'Price From', value: PROJECTS[activeProject].priceFrom },
                      { label: 'Bedrooms', value: PROJECTS[activeProject].bedrooms },
                      { label: 'Handover', value: PROJECTS[activeProject].handover },
                      { label: 'Payment Plan', value: PROJECTS[activeProject].paymentPlan },
                      { label: 'Area', value: PROJECTS[activeProject].area },
                      { label: 'ROI', value: PROJECTS[activeProject].roi },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white rounded-xl p-3 border border-gray-100">
                        <p className="text-gray-400 mb-0.5 text-[10px] uppercase tracking-wider">{label}</p>
                        <p className={`font-heading font-bold text-sm ${label === 'ROI' ? 'text-emerald-600' : 'text-gray-900'}`}>{value}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-7">
                    {PROJECTS[activeProject].highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-600 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block w-full text-center bg-black hover:bg-gray-800 text-white font-heading font-bold text-sm py-3.5 rounded-xl transition-colors">
                    Request Full Brochure & ROI Contract
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── WHY RE/MAX ZAM ── */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-amber-500 rounded-full px-3 py-1 mb-4">
                <Star className="w-3 h-3 text-white fill-white" />
                <span className="text-white font-heading font-bold text-[10px] tracking-[0.2em] uppercase">Why Buy Through RE/MAX ZAM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 leading-tight mb-5">
                Exclusive Access.<br />No Extra Cost.
              </h2>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                RE/MAX ZAM is Dugasta's exclusive sales partner in Dubai. This means you get first access to new unit releases, pre-launch pricing, and a dedicated advisor who knows every project inside out — at no additional cost to you.
              </p>
              <ul className="space-y-3">
                {[
                  'Pre-launch inventory before public release',
                  'Full ROI contract review with no surprises',
                  'Zero agency commission on Dugasta direct purchases',
                  'End-to-end process: from unit selection to DLD registration',
                  'Post-handover property management support via City Towers',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-body">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
                <h3 className="font-display font-black text-gray-900 text-2xl mb-1">Book a Consultation</h3>
                <p className="text-gray-400 font-body text-xs mb-6">Get the full project brochure, ROI breakdown and payment plan options.</p>
                <DugastaLeadForm dark={false} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Investor Questions</p>
            <h2 className="text-4xl font-display font-black text-gray-900">Everything You Need to Know About the 10 on 10 Plan</h2>
          </motion.div>
          <div>
            {FAQS.map(faq => <FaqItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.1),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-amber-400 font-body text-xs tracking-[0.2em] uppercase mb-4">Start Earning 10% Guaranteed</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
              Talk to Our Dugasta<br />Investment Specialist Today
            </h2>
            <p className="text-gray-400 font-body text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              Our team has deep knowledge of every Dugasta project, payment structure, and ROI contract. Let us walk you through the full investment opportunity — at zero cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971508794494?text=Hi, I want to learn more about Dugasta 10 on 10 plan" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> WhatsApp Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-sm px-8 py-4 rounded-xl transition-colors">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}