import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const stats = [
  { value: '145,000+', label: 'Agents Worldwide' },
  { value: '110+', label: 'Countries & Territories' },
  { value: '50+', label: 'Years of Trust' },
  { value: '#1', label: 'Most Trusted Brand*' },
];

const sourceCountries = [
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇮🇳', country: 'India' },
  { flag: '🇷🇺', country: 'Russia' },
  { flag: '🇩🇪', country: 'Germany' },
  { flag: '🇨🇳', country: 'China' },
  { flag: '🇫🇷', country: 'France' },
  { flag: '🇵🇰', country: 'Pakistan' },
  { flag: '🇺🇸', country: 'USA' },
];

export default function GlobalNetworkSection() {
  return (
    <section className="bg-[#0d1b3e] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            The RE/MAX Global Advantage
          </p>
          <h2 className="text-3xl lg:text-5xl font-display font-black text-white leading-tight mb-5">
            Dubai's Gateway to the<br />
            <span className="text-[#c9a84c]">World's Most Trusted</span> Real Estate Network
          </h2>
          <p className="text-white/65 font-body text-base max-w-2xl mx-auto leading-relaxed">
            In a city with thousands of brokerages, REMAX ZAM stands apart — backed by the world's largest real estate brand. 
            Investors from London to Mumbai already know and trust RE/MAX before they ever call us.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl lg:text-4xl font-display font-black text-[#c9a84c] mb-2">{value}</p>
              <p className="text-white/60 font-body text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Two column: Value props + Investor origin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

          {/* Left: Why global matters */}
          <div className="space-y-5">
            <h3 className="text-xl font-heading font-bold text-white mb-4">Why the Global Brand Wins in Dubai</h3>
            {[
              {
                title: 'Instant Credibility with International Investors',
                desc: 'Buyers from Europe, Asia, and the Americas already recognise RE/MAX from their home country. That recognition shortens the trust-building process dramatically.',
              },
              {
                title: 'Cross-Border Referral Pipeline',
                desc: '145,000 RE/MAX agents worldwide can refer clients directly to us. When a UK investor decides to buy in Dubai, their local RE/MAX agent sends them to REMAX ZAM.',
              },
              {
                title: 'Global Standards, Local Expertise',
                desc: 'We operate to RE/MAX\'s global compliance and service standards — the same your clients experienced in New York, London, or Sydney — now available in Dubai.',
              },
              {
                title: 'Brand That Outlasts Market Cycles',
                desc: '50+ years of navigating global markets means our investors trust us through downturns and booms. That longevity is priceless in a high-stakes investment market.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c] mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-white/55 font-body text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Investor origins */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-bold text-white mb-2">Our Investors Come From</h3>
            <p className="text-white/50 font-body text-sm mb-6">Many already know RE/MAX from home — making Dubai's first call easy.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {sourceCountries.map(({ flag, country }) => (
                <div key={country} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5">
                  <span className="text-2xl">{flag}</span>
                  <span className="text-white/80 font-body text-sm">{country}</span>
                </div>
              ))}
            </div>
            <p className="text-white/35 font-body text-xs">
              * RE/MAX voted Most Trusted Real Estate Brand — independent survey. Network stats as of 2025.
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-white text-lg mb-1">Ready to invest with a global name?</p>
            <p className="text-white/60 font-body text-sm">Get personalised investment advice from REMAX ZAM's certified advisors.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button className="bg-[#c9a84c] hover:bg-[#b8943f] text-[#0d1b3e] font-heading font-bold border-0" asChild>
              <Link to="/contact">Get Advice <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-heading" asChild>
              <Link to="/properties">View Properties</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}