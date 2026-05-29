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
    bedrooms: '1 to 3 BR',
    handover: 'Q2 2027',
    paymentPlan: '5-Year Post-Handover Plan',
    roi: '10% Guaranteed',
    area: '719 to 1,400 sqft',
    tag: '10 on 10 Plan',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
    highlights: [
      '10% net ROI guaranteed for 10 years by contract',
      'Zero service charges for the full 10 year period',
      '100% buyback option after 10 years',
      '22 minutes to Burj Khalifa, 23 minutes to Dubai Airport',
      '12 floors with over 400 parking spaces on site',
    ],
    description: 'Terra Tower is the flagship Dugasta project in Dubailand Residence Complex. It comes with the full 10 on 10 package including 12 floors, resort-style amenities and a payment plan that runs 5 years post-handover.',
  },
  {
    name: 'Al Haseen Residences',
    community: 'Dubai South, Industrial City',
    type: 'Apartments',
    priceFrom: 'AED 477,000',
    bedrooms: 'Studio to 2 BR',
    handover: 'Q3 2027',
    paymentPlan: 'Flexible Payment Plan',
    roi: '10% Guaranteed',
    area: 'From 450 sqft',
    tag: 'Low Entry Price',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    highlights: [
      'Most affordable entry point in the Dugasta portfolio',
      '10% guaranteed annual return for the first 5 years',
      'No service charges and 100% buyback included',
      'Positioned in the heart of the Dubai South growth corridor near Expo City',
      'Strong ongoing demand from airport and industrial zone workers',
    ],
    description: 'Al Haseen Residences is located in Dubai South, right in the middle of one of the city\'s biggest growth stories. With the new Al Maktoum International Airport nearby, this corridor is only going to get busier.',
  },
  {
    name: 'Moonsa Residences 2',
    community: 'International City (Warsan Fourth)',
    type: 'Apartments',
    priceFrom: 'AED 540,000',
    bedrooms: 'Studio to 1 BR',
    handover: 'Q4 2026',
    paymentPlan: 'Post-Handover Plan',
    roi: '9 to 10%',
    area: 'From 500 sqft',
    tag: 'Near Handover',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
    highlights: [
      'Very close to handover, so you can start earning quickly',
      'International City consistently has the highest rental demand in Dubai',
      'Average occupancy sits above 95% in this community',
      'Perfect for investors who want rental income without a long wait',
      'Fully registered with RERA and DLD escrow protected',
    ],
    description: "Moonsa Residences 2 is in International City, which has one of the highest occupancy rates in all of Dubai. Because it's so close to handover, investors can realistically start earning rental income within a few months.",
  },
  {
    name: 'Weybridge Gardens 3',
    community: 'Dubailand',
    type: 'Apartments',
    priceFrom: 'AED 650,000',
    bedrooms: '1 to 2 BR',
    handover: 'Q2 2027',
    paymentPlan: '1% Monthly Post-Handover',
    roi: '8 to 10%',
    area: 'From 700 sqft',
    tag: 'Exclusive via RE/MAX ZAM',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    highlights: [
      'Available exclusively through RE/MAX ZAM before public launch',
      'Just 1% per month makes this one of the most accessible plans in Dubai',
      'Smart home features and high quality finish throughout',
      'Dubailand is seeing strong and consistent rental demand',
      'Good capital appreciation expected by the time of handover',
    ],
    description: 'Weybridge Gardens 3 is only available through RE/MAX ZAM right now. The 1% monthly payment plan is genuinely one of the most accessible structures in the market, making it a great starting point for first-time Dubai investors.',
  },
];

const FAQS = [
  {
    q: 'What exactly is the 10 on 10 plan?',
    a: 'It means Dugasta contractually guarantees you 10% net return on your investment every year for 10 years. This is not a projection or an estimate. It is written into your Sales Purchase Agreement. They also waive all service charges for the same 10 year period, and at the end they give you the option to sell the unit back to them at your original purchase price.',
  },
  {
    q: 'How can they guarantee 10% when most Dubai apartments yield 7 to 8%?',
    a: "Good question. Dugasta's parent company is City Towers Real Estate, which has been managing residential properties in Dubai since 1991. Because they manage all the rentals themselves in-house, they absorb any shortfall between what the market generates and what they've promised you. The risk sits with the developer, not with you.",
  },
  {
    q: 'What happens at the end of the 10 years?',
    a: "You have three choices. You can keep the property and continue earning rental income at whatever the market rate is at that time. You can sell it on the open market, where prices are typically much higher after a decade of Dubai growth. Or you can take Dugasta up on the 100% buyback option and have them repurchase it at your original purchase price. That buyback option is your safety net.",
  },
  {
    q: 'Are the zero service charges really free?',
    a: "Yes. Dugasta covers all service charges for the full 10 years. Service charges in Dubai typically run at around 1.5% of property value per year, so this is a real saving that adds meaningful value on top of your guaranteed return. When you factor it in, your effective annual return is closer to 11 or 11.5%.",
  },
  {
    q: 'Is this legal and regulated?',
    a: "Every Dugasta project is registered with RERA and your purchase funds are held in a DLD-regulated escrow account, as required by UAE law. The ROI guarantee and the service charge waiver are both included in your Sales Purchase Agreement. It is a legally binding contract, not a verbal promise.",
  },
  {
    q: 'Who handles the tenants and the property after I buy?',
    a: "City Towers Real Estate manages everything for you. They find the tenants, handle the rent collection, deal with maintenance, and make sure you receive your guaranteed income. You own the asset and watch the returns come in. You do not need to be in Dubai or manage anything yourself.",
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
                <span className="text-amber-400 font-heading font-bold text-[10px] tracking-[0.25em] uppercase">Available Through RE/MAX ZAM Dubai</span>
              </div>

              <h1 className="font-display font-black text-white leading-[0.95] mb-6">
                <span className="block text-5xl sm:text-7xl lg:text-8xl">Dugasta</span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl text-amber-400">10 on 10</span>
                <span className="block text-xl sm:text-2xl text-white/35 font-body font-normal mt-4 leading-relaxed">10% Net ROI &nbsp;·&nbsp; 10 Years &nbsp;·&nbsp; Zero Tax &nbsp;·&nbsp; 100% Buyback</span>
              </h1>

              <p className="text-white/55 font-body text-base leading-relaxed mb-8 max-w-xl">
                Dugasta is the only developer in Dubai offering a <strong className="text-white/80">contractually guaranteed 10% return every year for 10 years.</strong> Behind this is City Towers Real Estate, a company that has been managing Dubai properties since 1991. No service charges. A 100% buyback at the end. You just collect the income.
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
                <p className="text-white/35 font-body text-xs mb-6">Drop your details and we'll send you the project brochure, ROI contract and floor plans.</p>
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
                Dugasta is part of the <strong className="text-gray-800">City Towers Real Estate</strong> group, which was founded in Dubai in 1991 by Tauseef Khan. For over 30 years, City Towers has managed thousands of residential units across the city. That experience is exactly what makes the 10 on 10 guarantee possible.
              </p>
              <p className="text-gray-500 font-body text-sm leading-relaxed mb-8">
                Because City Towers manages all the rentals in-house, they control the income. If the market delivers less than 10%, they cover the difference. <strong className="text-gray-800">As the investor, you receive your guaranteed return no matter what the market does.</strong>
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
              This is not a marketing projection. It is written into your Sales Purchase Agreement and is fully binding under UAE law.
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
              { num: '01', title: '10% Return Every Year', desc: 'This is written into your contract. You get 10% of your purchase price paid out annually, regardless of what the rental market does.' },
              { num: '02', title: 'No Service Charges', desc: "Dugasta covers all service charges for the full 10 years. That typically saves you another 1.5% a year on top, bringing your real effective return closer to 11.5%." },
              { num: '03', title: 'Fully Managed for You', desc: "City Towers Real Estate, which has been operating in Dubai since 1991, handles all tenants and maintenance. You own it, they run it." },
              { num: '04', title: 'Buy It Back at the End', desc: "After 10 years, Dugasta will buy the unit back from you at the price you paid. You have a guaranteed exit whenever you want it." },
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="flex-1 text-center bg-black hover:bg-gray-800 text-white font-heading font-bold text-sm py-3.5 rounded-xl transition-colors">
                      Request Brochure
                    </Link>
                    <a href="https://wa.me/971508794494?text=Hi, I'd like details on the Dugasta project" target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm py-3.5 rounded-xl transition-colors">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── WHY RE/MAX ZAM ── */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-black rounded-full px-3 py-1 mb-4">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-white font-heading font-bold text-[10px] tracking-[0.2em] uppercase">Why Buy Through RE/MAX ZAM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 leading-tight mb-5">
                Our Team.<br />No Extra Cost to You.
              </h2>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                RE/MAX ZAM is an authorised selling agent for Dugasta in Dubai. Our team knows these projects in detail — the floor plans, the payment structures, the contracts. We guide you through everything from first enquiry to DLD registration. The developer pays our fee, so there is nothing extra for you to pay.
              </p>
              <ul className="space-y-3">
                {[
                   'See available units before they go public',
                   'Full ROI contract walkthrough so you know exactly what you are signing',
                   'No agency commission on Dugasta purchases',
                   'We handle everything from unit selection through to DLD registration',
                   'Post-handover management handled by City Towers',
                 ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700 font-body">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h3 className="font-display font-black text-gray-900 text-2xl mb-1">Book a Consultation</h3>
                <p className="text-gray-400 font-body text-xs mb-6">Get the full project brochure, ROI breakdown and payment plan options sent to you directly.</p>
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
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.08),transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-amber-400 font-body text-xs tracking-[0.2em] uppercase mb-4">Ready to Invest?</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-5">
              Speak to a Specialist<br />About the 10 on 10 Plan
            </h2>
            <p className="text-gray-400 font-body text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              Our team can walk you through the full numbers, the ROI contract and the available payment options. No pressure, no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971508794494?text=Hi, I want to learn more about the Dugasta 10 on 10 plan" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> WhatsApp a Specialist
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors">
                Book a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}