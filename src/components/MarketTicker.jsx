import { TrendingUp, TrendingDown } from 'lucide-react';

const tickerData = [
  { area: 'Palm Jumeirah', change: '+8.2%', up: true, price: '2,450 AED/sqft' },
  { area: 'Downtown Dubai', change: '+5.7%', up: true, price: '2,180 AED/sqft' },
  { area: 'Dubai Marina', change: '+6.1%', up: true, price: '1,890 AED/sqft' },
  { area: 'JVC', change: '+12.3%', up: true, price: '980 AED/sqft' },
  { area: 'Business Bay', change: '+4.8%', up: true, price: '1,750 AED/sqft' },
  { area: 'Dubai Hills', change: '+9.4%', up: true, price: '1,650 AED/sqft' },
  { area: 'MBR City', change: '+7.6%', up: true, price: '1,420 AED/sqft' },
  { area: 'Emaar South', change: '-1.2%', up: false, price: '850 AED/sqft' },
];

export default function MarketTicker() {
  const items = [...tickerData, ...tickerData];

  return (
    <div className="bg-card/80 border-b border-border/50 overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-2 bg-primary/10 border-r border-border/50">
          <span className="text-xs font-heading font-semibold text-primary tracking-wider">LIVE MARKET</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {items.map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-body">
                <span className="text-muted-foreground">{item.area}</span>
                <span className="text-foreground font-medium">{item.price}</span>
                <span className={`flex items-center gap-0.5 ${item.up ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {item.change}
                </span>
                <span className="text-border mx-2">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}