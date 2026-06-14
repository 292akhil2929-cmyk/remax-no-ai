/**
 * Landing page: /10-net-roi-dubai-property
 * Campaign: Dubai Wealth Engine — 10% Net ROI
 */
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Percent, TrendingUp, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  CampaignHeader, CampaignFooter, WhatsAppFloat, TrustStrip,
  FounderStrip, RedCTABand, CampaignLeadForm, FaqAccordion
} from '@/components/campaign/CampaignShared';
import usePageSEO from '@/lib/usePageSEO';

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://remaxzam.com/10-net-roi-dubai-property',
      url: 'https://remaxzam.com/10-net-roi-dubai-property',
      name: '10% Net ROI Dubai Property | Tax-Free Rental Returns | RE/MAX ZAM',
      description: 'Earn up to 10% net rental ROI from Dubai property — tax-free, with 0% service charges and flexible payment plans. Calculate your returns and get a personalised plan.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remaxzam.com' },
          { '@type': 'ListItem', position: 2, name: 'Invest', item: 'https://remaxzam.com/dubai-property-investment' },
          { '@type': 'ListItem', position: 3, name: '10% Net ROI Dubai Property', item: 'https://remaxzam.com/10-net-roi-dubai-property' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is the 10% ROI guaranteed?', acceptedAnswer: { '@type': 'Answer', text: "It's a contractual, projected net return on select projects for a defined period. We show you the exact terms per project — nothing is left vague." } },
        { '@type': 'Question', name: 'Is rental income really tax-free in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dubai has no personal income tax, no capital gains tax and no tax on rental income.' } },
        { '@type': 'Question', name: "What's the minimum to start?", acceptedAnswer: { '@type': 'Answer', text: 'Select units start from AED 350,000, with flexible payment plans.' } },
        { '@type': 'Question', name: 'Can I get a Golden Visa too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — from AED 2M in property you qualify for a renewable 10-year Golden Visa. Ask us how to structure it.' } },
      ],
    },
  ],
};

// ─── ROI CALCULATOR ───────────────────────────────────────────────────────────

function ROICalculator() {
  const [amount, setAmount] = useState(750000);
  const [yieldPct, setYieldPct] = useState('10');
  const [showForm, setShowForm] = useState(false);

  const annual = useMemo(() => Math.round(amount * (parseFloat(yieldPct) / 100)), [amount, yieldPct]);
  const tenYear = annual * 10;
  const growth5 = useMemo(() => Math.round(amount * (Math.pow(1.05, 10) - 1)), [amount]);
  const growth8 = useMemo(() => Math.round(amount * (Math.pow(1.08, 10) - 1)), [amount]);

  const fmt = (n) => 'AED ' + n.toLocaleString();

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7">
      <p className="font-heading font-bold text-[#0E1B3A] text-lg mb-5">Calculate My Returns</p>

      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-body text-gray-500">Investment Amount (AED)</label>
          <span className="font-heading font-bold text-[#0E1B3A] text-sm">{fmt(amount)}</span>
        </div>
        <input
          type="range" min={350000} max={5000000} step={50000}
          value={amount} onChange={e => setAmount(Number(e.target.value))}
          className="w-full accent-[#DC1C2E] h-2 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-body mt-1">
          <span>AED 350K</span><span>AED 5M</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-xs font-body text-gray-500 block mb-2">Target Net Yield</label>
        <Select value={yieldPct} onValueChange={setYieldPct}>
          <SelectTrigger className="h-11 bg-[#F4F6FA] border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="8">8% net yield</SelectItem>
            <SelectItem value="9">9% net yield</SelectItem>
            <SelectItem value="10">10% net yield</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-[#F4F6FA] rounded-xl p-5 space-y-3 mb-5">
        <div className="flex justify-between items-center">
          <span className="text-xs font-body text-gray-500">Estimated annual net income</span>
          <span className="font-heading font-bold text-[#0E1B3A]">{fmt(annual)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-body text-gray-500">10-year income</span>
          <span className="font-heading font-bold text-[#DC1C2E] text-lg">{fmt(tenYear)}</span>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs font-body text-gray-500 mb-1">Plus projected capital growth over 10 years <span className="text-gray-400">(projected)</span></p>
          <p className="font-heading font-semibold text-[#C49A3A] text-sm">{fmt(growth5)} – {fmt(growth8)}</p>
          <p className="text-[10px] text-gray-400 font-body mt-0.5">Based on 5%–8% annual appreciation, compounded.</p>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 font-body mb-4">Projected figures for illustration; not guaranteed.</p>

      {showForm ? (
        <CampaignLeadForm source="ROI Calculator — /10-net-roi-dubai-property" ctaLabel="Get My Personalised Plan" />
      ) : (
        <>
          <p className="text-xs font-body text-gray-600 mb-3">Want a personalised plan with real units and payment options?</p>
          <Button onClick={() => setShowForm(true)} className="w-full h-11 bg-[#DC1C2E] hover:bg-[#b81626] text-white font-heading font-bold text-sm rounded-xl">
            Get My Personalised Plan
          </Button>
        </>
      )}
    </div>
  );
}

// ─── COMPARISON BAR ───────────────────────────────────────────────────────────

const CITIES = [
  { city: 'Hong Kong', yieldPct: 2.3 },
  { city: 'Singapore', yieldPct: 2.8 },
  { city: 'London', yieldPct: 3.0 },
  { city: 'New York', yieldPct: 3.2 },
  { city: 'Dubai', yieldPct: 10, highlight: true },
];

function ComparisonBar() {
  const max = 10;
  return (
    <div className="space-y-3">
      {CITIES.map(c => (
        <div key={c.city} className="flex items-center gap-4">
          <span className={`text-sm font-body w-24 shrink-0 ${c.highlight ? 'font-bold text-[#DC1C2E]' : 'text-gray-500'}`}>{c.city}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-7 overflow-hidden">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: `${(c.yieldPct / max) * 100}%` }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-full rounded-full flex items-center justify-end pr-3 ${c.highlight ? 'bg-[#DC1C2E]' : 'bg-gray-300'}`}
            >
              <span className={`text-xs font-heading font-bold ${c.highlight ? 'text-white' : 'text-gray-600'}`}>{c.yieldPct}%</span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: 'Is the 10% ROI guaranteed?', a: "It's a contractual, projected net return on select projects for a defined period. We show you the exact terms per project — nothing is left vague." },
  { q: 'Is rental income really tax-free in Dubai?', a: 'Yes. Dubai has no personal income tax, no capital gains tax and no tax on rental income.' },
  { q: "What's the minimum to start?", a: 'Select units start from AED 350,000, with flexible payment plans.' },
  { q: 'Can I get a Golden Visa too?', a: 'Yes — from AED 2M in property you qualify for a renewable 10-year Golden Visa. Ask us how to structure it.' },
];

const PROTECTION_CARDS = [
  { icon: Percent, title: 'Up to 10% net ROI', desc: 'Contractual returns on select projects, for up to 10 years.' },
  { icon: Shield, title: '0% service charges', desc: 'Your net yield is not eroded by annual fees.' },
  { icon: RefreshCw, title: 'Buy-back option', desc: 'Defined exit on selected projects de-risks your investment.' },
  { icon: TrendingUp, title: 'Flexible payment plans', desc: 'Build your position over time (e.g. 10/50/40) without locking up your cash.' },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ROIDubaiProperty() {
  usePageSEO({
    title: '10% Net ROI Dubai Property | Tax-Free Rental Returns | RE/MAX ZAM',
    description: 'Earn up to 10% net rental ROI from Dubai property — tax-free, with 0% service charges and flexible payment plans. Calculate your returns and get a personalised plan.',
    canonical: 'https://remaxzam.ae/10-net-roi-dubai-property',
    keywords: 'dubai property 10% roi, high rental yield dubai, dubai investment property returns, tax-free property dubai, dubai rental yield 2026, 10 percent roi dubai',
    schema: PAGE_SCHEMA,
  });

  return (
    <div className="min-h-screen bg-white font-body">
      <CampaignHeader ctaLabel="Book a Consultation" ctaHref="#lead-form" />
      <WhatsAppFloat />

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body tracking-[0.25em] uppercase text-[#DC1C2E] mb-4">DUBAI WEALTH ENGINE</p>
            <h1 className="font-display font-black text-[#0E1B3A] text-4xl sm:text-5xl leading-tight mb-5">
              Earn up to <span className="text-[#DC1C2E]">10% net rental ROI</span> from <span className="text-[#DC1C2E]">Dubai property</span> — tax-free.
            </h1>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
              Your bank pays 2%. The right Dubai investment pays up to 10% net, contractually, for up to 10 years. See what your money could earn — in 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#calculator" className="inline-flex items-center justify-center gap-2 bg-[#DC1C2E] hover:bg-[#b81626] text-white font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Calculate My Returns <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#lead-form" className="inline-flex items-center justify-center gap-2 border border-[#0E1B3A]/20 hover:border-[#0E1B3A]/40 text-[#0E1B3A] font-heading font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Book a Free Consultation
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <ROICalculator />
          </motion.div>
        </div>
      </section>

      <TrustStrip />

      {/* ── WHY DUBAI PAYS MORE ── */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-[#0E1B3A] text-3xl sm:text-4xl mb-3">Why Dubai pays more</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '6–9%', sub: 'Average gross rental yield in Dubai', desc: '2–3x London, Singapore or New York.' },
              { stat: '0%', sub: 'Tax on rental income, capital gains and property', desc: 'You keep the full return.' },
              { stat: 'Up to 10%', sub: 'Net ROI on select projects', desc: 'With 0% service charges protecting your yield.' },
            ].map(c => (
              <div key={c.stat} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <p className="font-display font-black text-[#DC1C2E] text-5xl mb-2">{c.stat}</p>
                <p className="font-heading font-bold text-[#0E1B3A] text-sm mb-2">{c.sub}</p>
                <p className="font-body text-gray-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-[#0E1B3A] text-3xl sm:text-4xl mb-3">Same money. Three times the yield. Zero tax.</h2>
          </div>
          <ComparisonBar />
          <p className="text-sm font-body text-gray-500 text-center mt-8">
            On a AED 1,000,000 investment, that is the difference between ~AED 30,000 and up to <strong className="text-[#DC1C2E]">AED 100,000 a year</strong> — tax-free.
          </p>
        </div>
      </section>

      {/* ── PROTECTION ── */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-[#0E1B3A] text-3xl sm:text-4xl mb-3">How the returns are protected</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROTECTION_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#DC1C2E]" />
                </div>
                <h3 className="font-heading font-bold text-[#0E1B3A] text-sm mb-2">{title}</h3>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <FounderStrip />

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-[#0E1B3A] text-3xl sm:text-4xl mb-3">What investors say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'James T.', location: 'London, UK', quote: 'My Dubai studio generates more net income per year than my London flat - and I pay zero tax on it. RE/MAX ZAM walked me through every step.', stars: 5 },
              { name: 'Priya S.', location: 'Singapore', quote: 'I was sceptical about investing abroad, but the ROI calculator made it real. My first unit is contracted at 8.5% net for 5 years.', stars: 5 },
              { name: 'Marcus B.', location: 'Frankfurt, Germany', quote: 'I now earn passive income from three Dubai units. The team handled everything remotely - I have not visited once and the income arrives monthly.', stars: 5 },
            ].map(t => (
              <div key={t.name} className="bg-[#F4F6FA] rounded-2xl p-7 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed italic mb-5">"{t.quote}"</p>
                <p className="font-heading font-bold text-[#0E1B3A] text-xs">{t.name}</p>
                <p className="font-body text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#F4F6FA]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <h2 className="font-display font-black text-[#0E1B3A] text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          {FAQS.map(f => <FaqAccordion key={f.q} {...f} />)}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <RedCTABand heading="See your exact returns — then we'll build your plan.">
        <div id="lead-form" className="max-w-md mx-auto bg-white/10 rounded-2xl p-7">
          <CampaignLeadForm dark={true} source="Bottom CTA — /10-net-roi-dubai-property" ctaLabel="Get My Personalised Plan" />
        </div>
      </RedCTABand>

      <CampaignFooter />
    </div>
  );
}