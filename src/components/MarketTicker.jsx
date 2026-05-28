import { TrendingUp, TrendingDown } from 'lucide-react';

const markets = [
  { area: 'Dubai Marina', price: 'AED 1,650/sqft', change: '+4.2%', trend: 'up' },
  { area: 'Downtown Dubai', price: 'AED 2,200/sqft', change: '+3.8%', trend: 'up' },
  { area: 'Business Bay', price: 'AED 1,480/sqft', change: '+5.1%', trend: 'up' },
  { area: 'Palm Jumeirah', price: 'AED 2,800/sqft', change: '+2.9%', trend: 'up' },
  { area: 'JVC', price: 'AED 950/sqft', change: '+6.3%', trend: 'up' },
  { area: 'Dubai Hills', price: 'AED 1,750/sqft', change: '+4.5%', trend: 'up' },
];

export default function MarketTicker() {
  return (
    <div className="bg-gradient-to-r from-black via-slate-900 to-black border-b border-[#B87333]/30 px-4 sm:px-6 lg:px-8 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
          <span className="text-[#B87333] font-heading font-bold text-xs uppercase whitespace-nowrap shrink-0">Market Pulse</span>
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...markets, ...markets].map((m, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{m.area}</p>
                  <p className="text-gray-400 font-body text-xs">{m.price}</p>
                </div>
                <div className="flex items-center gap-1 ml-2 pl-2 border-l border-white/20">
                  {m.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`font-heading font-bold text-sm ${m.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {m.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}