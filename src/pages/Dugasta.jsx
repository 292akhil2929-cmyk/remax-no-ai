import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, ArrowRight, MapPin, Calendar, Star, Shield, Building2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

const PROJECTS = [
  {
    name: 'Dugasta Weybridge Gardens 3',
    community: 'Dubailand',
    type: 'Apartments',
    priceFrom: 'AED 650K',
    handover: 'Q2 2027',
    paymentPlan: '1% Monthly Post-Handover',
    roi: '8–10%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    tag: 'Exclusive',
    highlights: ['1% monthly payment plan', 'High-yield community location', 'Modern finish & smart home features'],
  },
  {
    name: 'Dugasta Weybridge Gardens 2',
    community: 'Dubailand',
    type: 'Apartments',
    priceFrom: 'AED 550K',
    handover: 'Q4 2026',
    paymentPlan: '1% Monthly',
    roi: '8–9%',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tag: 'Near Handover',
    highlights: ['Near handover — strong resale value', 'Proven rental demand in Dubailand', 'RERA-regulated developer'],
  },
  {
    name: 'Dugasta Petalz',
    community: 'Al Warsan',
    type: 'Apartments',
    priceFrom: 'AED 450K',
    handover: 'Q1 2027',
    paymentPlan: '60/40',
    roi: '9–11%',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tag: 'High Yield',
    highlights: ['Highest yield in the portfolio', 'Low entry price for Golden Visa planning', 'Strong rental demand from professionals'],
  },
];

const STATS = [
  { value: '15+', label: 'Completed Projects' },
  { value: '5,000+', label: 'Units Delivered' },
  { value: '9–11%', label: 'Average Rental Yield' },
  { value: 'RERA', label: 'Fully Regulated' },
];

function DugastaLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', investment_budget: '' });

  const createLead = useMutation({
    mutationFn: (data) => base44.entities.Lead.create(data),
    onSuccess: () => setSubmitted(true),
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">Request Received</h3>
        <p className="text-white/60 font-body text-sm">Our Dugasta specialist will contact you within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); createLead.mutate({ ...form, lead_type: 'Investor', source: 'Dugasta Landing Page' }); }} className="space-y-3">
      <Input placeholder="Full Name *" required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
      <Input placeholder="Email Address *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
      <Input placeholder="Phone / WhatsApp *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12" />
      <Select value={form.investment_budget} onValueChange={(v) => setForm({ ...form, investment_budget: v })}>
        <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
          <SelectValue placeholder="Investment Budget" />
        </SelectTrigger>
        <SelectContent>
          {['Under 500K AED', '500K - 1M AED', '1M - 3M AED', '3M - 5M AED', '5M+ AED'].map(b => (
            <SelectItem key={b} value={b}>{b}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" disabled={createLead.isPending} className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-sm tracking-wider">
        {createLead.isPending ? 'Sending...' : 'Get Dugasta Project Brochure'} <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <p className="text-white/30 text-[10px] font-body text-center">No spam. Our advisor contacts you directly within 2 hours.</p>
    </form>
  );
}

export default function Dugasta() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-heading font-bold text-[10px] tracking-[0.2em] uppercase">Exclusive Developer Partner</span>
              </div>
              <h1 className="font-display font-black text-white leading-[1.0] mb-6">
                <span className="block text-5xl sm:text-6xl lg:text-7xl">Dugasta</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl">Properties</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-amber-400 font-light italic mt-2">Dubai Off-Plan Specialist</span>
              </h1>
              <p className="text-white/60 font-body text-base leading-relaxed mb-8 max-w-lg">
                RE/MAX ZAM is the exclusive sales partner for Dugasta Properties in Dubai. Access inventory before it hits the market, with industry-leading 1% monthly payment plans and yields of 9–11%.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['1% Monthly Payment Plans', 'No Commission Fees', '9–11% Rental Yields', 'RERA Regulated'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 bg-white/10 text-white/70 text-xs font-body px-3 py-1.5 rounded-full border border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                {STATS.map(s => (
                  <div key={s.label}>
                    <p className="text-white font-display font-black text-2xl">{s.value}</p>
                    <p className="text-white/40 font-body text-[10px] mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Lead Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="font-display font-black text-white text-2xl mb-1">Request Project Brochure</h2>
              <p className="text-white/40 font-body text-sm mb-6">Get full project details, floor plans & ROI analysis.</p>
              <DugastaLeadForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY DUGASTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Why Dugasta</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight max-w-2xl">
              Why Investors Choose<br />Dugasta in Dubai
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: '9–11% Rental Yields', desc: "Dugasta projects consistently outperform Dubai's average rental yield of 7–8%, thanks to strategic locations and strong rental demand from professionals." },
              { icon: Building2, title: '1% Monthly Payment Plans', desc: 'Dugasta offers Dubai\'s most investor-friendly payment structures — pay just 1% per month, making it accessible for investors of all budget levels.' },
              { icon: Shield, title: 'RERA-Regulated & Escrow Protected', desc: "Every Dugasta project is registered with RERA and buyer funds are held in DLD-regulated escrow accounts. Your investment is fully protected by UAE law." },
              { icon: Star, title: 'Exclusive RE/MAX ZAM Partnership', desc: 'As the exclusive sales partner for Dugasta, RE/MAX ZAM clients get first access to new inventory, pre-launch pricing, and dedicated deal support.' },
              { icon: MapPin, title: 'High-Demand Growth Locations', desc: 'Dubailand, Al Warsan, and surrounding communities are experiencing rapid infrastructure growth, driving strong capital appreciation and tenant demand.' },
              { icon: CheckCircle2, title: 'Proven Delivery Track Record', desc: 'Dugasta has delivered 15+ completed projects with 5,000+ units across Dubai. On-time handover track record verified through DLD records.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-sm">{title}</h3>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">Current Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-tight">
              Available Dugasta<br />Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, idx) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-heading font-bold px-2.5 py-1 rounded-full">{p.tag}</span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-display font-black text-lg leading-tight">{p.name}</p>
                    <p className="text-white/60 text-xs font-body flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" />{p.community}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-body">
                    <div>
                      <p className="text-gray-400 mb-0.5">From</p>
                      <p className="font-heading font-bold text-gray-900 text-sm">{p.priceFrom}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-0.5">Handover</p>
                      <p className="font-heading font-semibold text-gray-800 flex items-center gap-1"><Calendar className="w-3 h-3" />{p.handover}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-0.5">Payment Plan</p>
                      <p className="font-heading font-semibold text-gray-800">{p.paymentPlan}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-0.5">Expected ROI</p>
                      <p className="font-heading font-semibold text-emerald-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" />{p.roi}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-5">
                    {p.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-500 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block w-full text-center bg-black hover:bg-gray-800 text-white font-heading font-bold text-xs tracking-wider uppercase py-3 rounded-xl transition-colors">
                    Request Brochure
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-amber-400 font-body text-xs tracking-[0.2em] uppercase mb-4">Exclusive Access</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-6">
              Talk to Our Dugasta<br />Investment Specialist
            </h2>
            <p className="text-gray-400 font-body text-sm mb-10 max-w-xl mx-auto leading-relaxed">
              As RE/MAX ZAM's exclusive Dugasta partner, we can give you access to pre-launch inventory, investor pricing, and a full ROI analysis for your specific budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971508794494?text=Hi, I'm interested in Dugasta Properties" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-heading font-bold text-sm px-8 py-4 rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> WhatsApp Us Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-semibold text-sm px-8 py-4 rounded-xl transition-colors">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}