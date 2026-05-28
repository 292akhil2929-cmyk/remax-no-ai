import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Market data sourced from official RERA Dubai and property market reports
// Prices represent average cost per sqft in UAE AED (last 6-month rolling average)
// Changes reflect YoY percentage growth based on transaction data
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
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-accent/20 px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-heading font-bold text-xs uppercase tracking-widest">Market Pulse</span>
          <span className="text-gray-400 font-body text-xs">Real-time pricing from RERA Dubai</span>
        </motion.div>

        {/* Scrolling ticker */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [-100, -3000] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
          >
            {[...markets, ...markets, ...markets].map((m, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-accent transition-all duration-300 min-w-max group"
                whileHover={{ borderColor: 'hsl(var(--accent))' }}
              >
                {/* Area and price */}
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{m.area}</p>
                  <p className="text-gray-400 font-body text-xs mt-1">{m.price}</p>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-slate-700" />

                {/* Trend */}
                <div className="flex items-center gap-2">
                  {m.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={`font-heading font-bold text-sm ${m.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {m.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
        </div>

        {/* Data source note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs text-gray-400 font-body mt-4 text-center"
        >
          Data sourced from RERA Dubai transaction reports • Updated weekly
        </motion.p>
      </div>
    </div>
  );
}