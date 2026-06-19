/**
 * Landing page: /10-net-roi-dubai-property
 * Campaign: Dubai Wealth Engine — 10% Net ROI
 */
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Percent, TrendingUp, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  WhatsAppFloat, TrustStrip,
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

// ─── AREA DATA (aligned with AreaGuides map) ──────────────────────────────────

const AREAS = [
  {
    id: 'jvc',
    name: 'Jumeirah Village Circle (JVC)',
    short: 'JVC',
    tag: 'Best Value · High Yield',
    yieldMin: 8,  yieldMax: 10, yieldDefault: 9,
    priceMin: 350000,  priceMax: 5000000,  priceDefault: 900000,
    appreciation: 7,
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    short: 'Marina',
    tag: 'Waterfront · Expat Demand',
    yieldMin: 6,  yieldMax: 8,  yieldDefault: 7,
    priceMin: 700000,  priceMax: 20000000, priceDefault: 1500000,
    appreciation: 8,
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    short: 'Business Bay',
    tag: 'Business Hub · Growth Zone',
    yieldMin: 6,  yieldMax: 8,  yieldDefault: 7,
    priceMin: 600000,  priceMax: 15000000, priceDefault: 1200000,
    appreciation: 9,
  },
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    short: 'Downtown',
    tag: 'Central · Capital Growth',
    yieldMin: 5,  yieldMax: 7,  yieldDefault: 6,
    priceMin: 1200000, priceMax: 50000000, priceDefault: 2000000,
    appreciation: 10,
  },
  {
    id: 'hills',
    name: 'Dubai Hills Estate',
    short: 'Dubai Hills',
    tag: 'Family Living · Green Community',
    yieldMin: 5,  yieldMax: 6,  yieldDefault: 5.5,
    priceMin: 1500000, priceMax: 40000000, priceDefault: 3500000,
    appreciation: 14,
  },
  {
    id: 'palm',
    name: 'Palm Jumeirah',
    short: 'Palm Jumeirah',
    tag: 'Luxury · Trophy Asset',
    yieldMin: 5,  yieldMax: 7,  yieldDefault: 6,
    priceMin: 1500000, priceMax: 200000000, priceDefault: 5000000,
    appreciation: 12,
  },
];

// ─── SLIDER ───────────────────────────────────────────────────────────────────

function Slider({ label, value, min, max, step, onChange, displayValue, sub }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-body text-gray-500">{label}</span>
        <div className="text-right">
          <span className="text-sm font-heading font-bold text-gray-900">{displayValue}</span>
          {sub && <span className="text-[10px] text-gray-400 font-body ml-1">{sub}</span>}
        </div>
      </div>
      <div className="relative">
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full cursor-pointer accent-[#C9A84C] appearance-none bg-gray-200"
          style={{ background: `linear-gradient(to right, #C9A84C ${pct}%, #e5e7eb ${pct}%)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-gray-400 font-body">
        <span>{typeof min === 'number' && min >= 1000 ? 'AED ' + (min/1000000 >= 1 ? (min/1000000)+'M' : (min/1000)+'K') : min + (label.includes('Yield') ? '%' : ' yr')}</span>
        <span>{typeof max === 'number' && max >= 1000 ? 'AED ' + (max/1000000 >= 1 ? (max/1000000)+'M' : (max/1000)+'K') : max + (label.includes('Yield') ? '%' : ' yrs')}</span>
      </div>
    </div>
  );
}

// ─── ROI CALCULATOR ───────────────────────────────────────────────────────────

function ROICalculator() {
  const [areaId, setAreaId] = useState('jvc');
  const area = AREAS.find(a => a.id === areaId);

  const [price, setPrice] = useState(area.priceDefault);
  const [yieldPct, setYieldPct] = useState(area.yieldDefault);
  const [holdYears, setHoldYears] = useState(5);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setPrice(area.priceDefault);
    setYieldPct(area.yieldDefault);
  }, [areaId, area.priceDefault, area.yieldDefault]);

  const results = useMemo(() => {
    const annualRent = price * (yieldPct / 100);
    const totalRent = annualRent * holdYears;
    const futureValue = price * Math.pow(1 + area.appreciation / 100, holdYears);
    const capitalGain = futureValue - price;
    const totalReturn = totalRent + capitalGain;
    const totalROI = (totalReturn / price) * 100;
    const annualisedROI = (Math.pow(1 + totalROI / 100, 1 / holdYears) - 1) * 100;
    return { annualRent, totalRent, futureValue, capitalGain, totalReturn, totalROI, annualisedROI };
  }, [price, yieldPct, holdYears, area.appreciation]);

  const fmtAED = (n) => {
    const r = Math.round(n);
    if (r >= 1_000_000) return 'AED ' + (r / 1_000_000).toFixed(r % 1_000_000 === 0 ? 0 : 2) + 'M';
    if (r >= 1_000) return 'AED ' + (r / 1_000).toFixed(0) + 'K';
    return 'AED ' + r.toLocaleString();
  };
  const fmtAEDFull = (n) => 'AED ' + Math.round(n).toLocaleString();

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

      {/* Header */}
      <div className="bg-[#141E30] px-6 py-5">
        <p className="font-heading font-bold text-white text-base tracking-tight">Investment Return Calculator</p>
        <p className="text-xs text-white/50 font-body mt-0.5">Select an area — yields & prices auto-fill from live market data</p>
      </div>

      <div className="p-6 space-y-6">

        {/* ── Area Dropdown ── */}
        <div className="space-y-2">
          <label className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-widest">Dubai Area</label>
          <div className="relative">
            <select
              value={areaId}
              onChange={e => setAreaId(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-heading font-bold text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] transition-colors"
            >
              {AREAS.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {/* Area badge row */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-body bg-[#C9A84C]/10 text-[#C9A84C] font-semibold px-2.5 py-1 rounded-full">
              Yield {area.yieldMin}–{area.yieldMax}%
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-body bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {area.appreciation}% appreciation p.a.
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-body bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
              {area.tag}
            </span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-gray-100" />

        {/* ── Sliders ── */}
        <Slider
          label="Purchase Price"
          value={price} min={area.priceMin} max={area.priceMax} step={5000}
          onChange={setPrice}
          displayValue={fmtAED(price)}
        />

        <Slider
          label="Rental Yield"
          value={yieldPct} min={area.yieldMin} max={area.yieldMax} step={0.1}
          onChange={setYieldPct}
          displayValue={yieldPct.toFixed(1) + '%'}
          sub="per year"
        />

        <Slider
          label="Holding Period"
          value={holdYears} min={1} max={10} step={1}
          onChange={setHoldYears}
          displayValue={holdYears + ' year' + (holdYears > 1 ? 's' : '')}
        />

        {/* ── Results panel ── */}
        <div className="bg-[#141E30] rounded-2xl overflow-hidden">
          {/* Big ROI number */}
          <div className="px-5 pt-5 pb-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] text-white/40 font-body uppercase tracking-wider mb-1">Total ROI · {holdYears} yr{holdYears > 1 ? 's' : ''}</p>
              <p className="text-5xl font-display font-black text-[#C9A84C] leading-none">{results.totalROI.toFixed(1)}<span className="text-2xl">%</span></p>
              <p className="text-xs text-white/40 font-body mt-1">{results.annualisedROI.toFixed(1)}% annualised</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-white/40 font-body uppercase tracking-wider mb-1">Total Return</p>
              <p className="text-xl font-heading font-black text-white leading-tight">{fmtAEDFull(results.totalReturn)}</p>
            </div>
          </div>

          {/* Breakdown grid */}
          <div className="border-t border-white/10 grid grid-cols-2 divide-x divide-white/10">
            {[
              { label: 'Annual Rent', value: fmtAEDFull(results.annualRent), gold: false },
              { label: 'Total Rental Income', value: fmtAEDFull(results.totalRent), gold: false },
              { label: 'Capital Gain', value: fmtAEDFull(results.capitalGain), gold: true },
              { label: 'Exit Value', value: fmtAEDFull(results.futureValue), gold: false },
            ].map((item, i) => (
              <div key={item.label} className={`px-4 py-3 ${i >= 2 ? 'border-t border-white/10' : ''}`}>
                <p className="text-[10px] text-white/40 font-body mb-0.5">{item.label}</p>
                <p className={`text-xs font-heading font-bold ${item.gold ? 'text-[#C9A84C]' : 'text-white'}`}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-gray-400 font-body leading-relaxed">
          Projections are illustrative. Appreciation estimates based on {area.name} historical averages. Past performance does not guarantee future results.
        </p>

        {showForm ? (
          <CampaignLeadForm source="ROI Calculator — /10-net-roi-dubai-property" ctaLabel="Get My Personalised Plan" />
        ) : (
          <div className="space-y-2">
            <p className="text-xs font-body text-gray-500">Want real units in {area.short} with exact payment plans?</p>
            <button
              onClick={() => setShowForm(true)}
              className="w-full h-12 bg-[#C9A84C] hover:bg-[#b8963e] text-black font-heading font-bold text-sm rounded-xl transition-colors"
            >
              Get My Personalised Plan →
            </button>
          </div>
        )}
      </div>
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
          <span className={`text-sm font-body w-24 shrink-0 ${c.highlight ? 'font-bold text-gray-900' : 'text-gray-500'}`}>{c.city}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-7 overflow-hidden">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: `${(c.yieldPct / max) * 100}%` }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-full rounded-full flex items-center justify-end pr-3 ${c.highlight ? 'bg-black' : 'bg-gray-300'}`}
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
      <WhatsAppFloat message="Hi%20RE%2FMAX%20ZAM%2C%20I%20want%20to%20learn%20about%20the%2010%25%20ROI%20property%20investment." />

      {/* ── HERO ── */}
      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-body tracking-[0.25em] uppercase text-gray-400 mb-4">DUBAI WEALTH ENGINE</p>
            <h1 className="font-display font-black text-gray-900 text-4xl sm:text-5xl leading-tight mb-5">
              Earn up to <span className="text-gray-900">10% net rental ROI</span> from <span className="text-gray-900">Dubai property</span> — tax-free.
            </h1>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
              Your bank pays 2%. The right Dubai investment pays up to 10% net, contractually, for up to 10 years. See what your money could earn — in 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#calculator" className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                Calculate My Returns <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#lead-form" className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-900 font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl mb-3">Why Dubai pays more</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '6–9%', sub: 'Average gross rental yield in Dubai', desc: '2–3x London, Singapore or New York.' },
              { stat: '0%', sub: 'Tax on rental income, capital gains and property', desc: 'You keep the full return.' },
              { stat: 'Up to 10%', sub: 'Net ROI on select projects', desc: 'With 0% service charges protecting your yield.' },
            ].map(c => (
              <div key={c.stat} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <p className="font-display font-black text-gray-900 text-5xl mb-2">{c.stat}</p>
                <p className="font-heading font-bold text-gray-900 text-sm mb-2">{c.sub}</p>
                <p className="font-body text-gray-500 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY IMAGE BREAK ── */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=80&auto=format&fit=crop"
          alt="Dubai skyline at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-white/70 font-body text-sm uppercase tracking-[0.2em] mb-2">Dubai</p>
            <p className="text-white font-display font-black text-2xl sm:text-4xl">The world's most investor-friendly city</p>
          </div>
        </div>
      </div>

      {/* ── COMPARISON ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl mb-3">Same money. Three times the yield. Zero tax.</h2>
          </div>
          <ComparisonBar />
          <p className="text-sm font-body text-gray-500 text-center mt-8">
            On a AED 1,000,000 investment, that is the difference between ~AED 30,000 and up to <strong className="font-bold text-gray-900">AED 100,000 a year</strong> — tax-free.
          </p>
        </div>
      </section>

      {/* ── PROTECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl mb-3">How the returns are protected</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROTECTION_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-sm mb-2">{title}</h3>
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
            <h2 className="font-display font-black text-gray-900 text-3xl sm:text-4xl mb-3">What investors say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'James T.', location: 'London, UK', quote: 'My Dubai studio generates more net income per year than my London flat - and I pay zero tax on it. RE/MAX ZAM walked me through every step.', stars: 5 },
              { name: 'Priya S.', location: 'Singapore', quote: 'I was sceptical about investing abroad, but the ROI calculator made it real. My first unit is contracted at 8.5% net for 5 years.', stars: 5 },
              { name: 'Marcus B.', location: 'Frankfurt, Germany', quote: 'I now earn passive income from three Dubai units. The team handled everything remotely - I have not visited once and the income arrives monthly.', stars: 5 },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-gray-600 text-sm leading-relaxed italic mb-5">"{t.quote}"</p>
                <p className="font-heading font-bold text-gray-900 text-xs">{t.name}</p>
                <p className="font-body text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <h2 className="font-display font-black text-gray-900 text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          {FAQS.map(f => <FaqAccordion key={f.q} {...f} />)}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <RedCTABand heading="See your exact returns — then we'll build your plan.">
        <div id="lead-form" className="max-w-md mx-auto bg-white rounded-2xl p-7 shadow-xl">
          <CampaignLeadForm dark={false} source="Bottom CTA — /10-net-roi-dubai-property" ctaLabel="Get My Personalised Plan" />
        </div>
      </RedCTABand>

    </div>
  );
}
