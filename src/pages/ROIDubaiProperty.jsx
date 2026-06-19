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

// ─── AREA DATA ────────────────────────────────────────────────────────────────

const AREAS = [
  { id: 'jvc',         name: 'JVC',           yieldMin: 8,  yieldMax: 10, yieldDefault: 9,   priceMin: 350000,  priceMax: 3000000,  priceDefault: 900000,  appreciation: 7  },
  { id: 'marina',      name: 'Dubai Marina',  yieldMin: 6,  yieldMax: 8,  yieldDefault: 7,   priceMin: 700000,  priceMax: 8000000,  priceDefault: 1500000, appreciation: 8  },
  { id: 'business-bay',name: 'Business Bay',  yieldMin: 6,  yieldMax: 8,  yieldDefault: 7,   priceMin: 600000,  priceMax: 6000000,  priceDefault: 1200000, appreciation: 9  },
  { id: 'downtown',    name: 'Downtown',      yieldMin: 5,  yieldMax: 7,  yieldDefault: 6,   priceMin: 1200000, priceMax: 10000000, priceDefault: 2000000, appreciation: 10 },
  { id: 'hills',       name: 'Dubai Hills',   yieldMin: 5,  yieldMax: 6,  yieldDefault: 5.5, priceMin: 1500000, priceMax: 12000000, priceDefault: 3500000, appreciation: 14 },
  { id: 'palm',        name: 'Palm Jumeirah', yieldMin: 5,  yieldMax: 7,  yieldDefault: 6,   priceMin: 1500000, priceMax: 15000000, priceDefault: 5000000, appreciation: 12 },
];

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

  const fmtAED = (n) => 'AED ' + Math.round(n).toLocaleString();

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-black px-6 py-4">
        <p className="font-heading font-bold text-white text-base">Calculate My Returns</p>
        <p className="text-xs text-white/50 font-body mt-0.5">Select a Dubai area — yields auto-fill from real market data</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Area Selector */}
        <div>
          <p className="text-xs font-heading font-semibold text-gray-500 mb-2 uppercase tracking-wide">Choose Area</p>
          <div className="grid grid-cols-3 gap-1.5">
            {AREAS.map(a => (
              <button
                key={a.id}
                onClick={() => setAreaId(a.id)}
                className={`px-2 py-2 rounded-lg text-[11px] font-heading font-bold transition-colors text-center leading-tight ${
                  areaId === a.id
                    ? 'bg-[#C9A84C] text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 font-body mt-1.5">
            Yield range for {area.name}: <span className="text-[#C9A84C] font-semibold">{area.yieldMin}–{area.yieldMax}%</span> · Appreciation: <span className="text-[#C9A84C] font-semibold">{area.appreciation}% p.a.</span>
          </p>
        </div>

        {/* Price slider */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-xs font-body text-gray-500">Purchase Price</label>
            <span className="text-xs font-heading font-bold text-gray-900">{fmtAED(price)}</span>
          </div>
          <input
            type="range" min={area.priceMin} max={area.priceMax} step={50000}
            value={price} onChange={e => setPrice(Number(e.target.value))}
            className="w-full h-1.5 rounded-full cursor-pointer accent-[#C9A84C]"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-body mt-1">
            <span>{fmtAED(area.priceMin)}</span><span>{fmtAED(area.priceMax)}</span>
          </div>
        </div>

        {/* Yield slider */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-xs font-body text-gray-500">Rental Yield</label>
            <span className="text-xs font-heading font-bold text-[#C9A84C]">{yieldPct.toFixed(1)}%</span>
          </div>
          <input
            type="range" min={area.yieldMin} max={area.yieldMax} step={0.5}
            value={yieldPct} onChange={e => setYieldPct(Number(e.target.value))}
            className="w-full h-1.5 rounded-full cursor-pointer accent-[#C9A84C]"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-body mt-1">
            <span>{area.yieldMin}%</span><span>{area.yieldMax}%</span>
          </div>
        </div>

        {/* Hold years slider */}
        <div>
          <div className="flex justify-between mb-1.5">
            <label className="text-xs font-body text-gray-500">Holding Period</label>
            <span className="text-xs font-heading font-bold text-gray-900">{holdYears} years</span>
          </div>
          <input
            type="range" min={1} max={10} step={1}
            value={holdYears} onChange={e => setHoldYears(Number(e.target.value))}
            className="w-full h-1.5 rounded-full cursor-pointer accent-[#C9A84C]"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-body mt-1">
            <span>1 yr</span><span>10 yrs</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-black rounded-xl p-5 space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-white/50 font-body">Total ROI over {holdYears} yr{holdYears > 1 ? 's' : ''}</p>
              <p className="text-4xl font-display font-black text-[#C9A84C]">{results.totalROI.toFixed(1)}%</p>
              <p className="text-[10px] text-white/40 font-body">{results.annualisedROI.toFixed(1)}% annualised</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/50 font-body">Total Return</p>
              <p className="text-lg font-heading font-black text-white">{fmtAED(results.totalReturn)}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-3 grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-white/40 font-body">Annual Rent</p>
              <p className="font-heading font-bold text-white">{fmtAED(results.annualRent)}</p>
            </div>
            <div>
              <p className="text-white/40 font-body">Total Rental</p>
              <p className="font-heading font-bold text-white">{fmtAED(results.totalRent)}</p>
            </div>
            <div>
              <p className="text-white/40 font-body">Capital Gain</p>
              <p className="font-heading font-bold text-[#C9A84C]">{fmtAED(results.capitalGain)}</p>
            </div>
            <div>
              <p className="text-white/40 font-body">Exit Value</p>
              <p className="font-heading font-bold text-white">{fmtAED(results.futureValue)}</p>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 font-body">Projections illustrative only. Appreciation based on {area.name} historical averages. Past performance does not guarantee future results.</p>

        {showForm ? (
          <CampaignLeadForm source="ROI Calculator — /10-net-roi-dubai-property" ctaLabel="Get My Personalised Plan" />
        ) : (
          <>
            <p className="text-xs font-body text-gray-600">Want real units matching this profile with exact payment plans?</p>
            <button onClick={() => setShowForm(true)} className="w-full h-11 bg-black hover:bg-gray-900 text-white font-heading font-bold text-sm rounded-xl transition-colors">
              Get My Personalised Plan
            </button>
          </>
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
