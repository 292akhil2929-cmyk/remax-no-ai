import { TrendingUp } from 'lucide-react';

const markets = [
  { area: 'Dubai Marina', price: 'AED 1,650/sqft', change: '+4.2%' },
  { area: 'Downtown Dubai', price: 'AED 2,200/sqft', change: '+3.8%' },
  { area: 'Business Bay', price: 'AED 1,480/sqft', change: '+5.1%' },
  { area: 'Palm Jumeirah', price: 'AED 2,800/sqft', change: '+2.9%' },
  { area: 'JVC', price: 'AED 950/sqft', change: '+6.3%' },
  { area: 'Dubai Hills', price: 'AED 1,750/sqft', change: '+4.5%' },
  { area: 'DIFC', price: 'AED 2,400/sqft', change: '+3.1%' },
  { area: 'Creek Harbour', price: 'AED 1,900/sqft', change: '+7.2%' },
];

export default function MarketTicker() {
  const items = [...markets, ...markets, ...markets];

  return (
    <div className="bg-[#0a0a0a] border-b border-white/5 py-3 overflow-hidden">
      <div className="relative flex items-center overflow-hidden">
        {/* Live indicator */}
        <div className="absolute left-0 z-10 flex items-center gap-2 bg-[#0a0a0a] pl-4 pr-6 h-full border-r border-white/10 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/40 font-body text-[10px] tracking-[0.15em] uppercase whitespace-nowrap">Live Market</span>
        </div>

        {/* Scrolling content */}
        <div
          className="flex gap-8 pl-36 animate-none"
          style={{ animation: 'scroll 40s linear infinite', whiteSpace: 'nowrap' }}
        >
          {items.map((m, i) => (
            <div key={i} className="inline-flex items-center gap-3 shrink-0">
              <span className="text-white/60 font-body text-xs">{m.area}</span>
              <span className="text-white/30 font-body text-xs">·</span>
              <span className="text-white/40 font-body text-xs">{m.price}</span>
              <span className="text-emerald-400 font-heading font-bold text-xs flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />{m.change}
              </span>
              <span className="text-white/10 font-body text-xs mx-2">|</span>
            </div>
          ))}
        </div>

        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}