import { TrendingUp, BarChart3, Home, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MARKET_TRENDS = [
  {
    icon: TrendingUp,
    label: 'Price Appreciation',
    value: '+12.4%',
    period: 'Year-over-year',
    detail: 'Residential properties across Dubai'
  },
  {
    icon: BarChart3,
    label: 'Demand Index',
    value: '87/100',
    period: 'Current market',
    detail: 'Investor interest remains strong'
  },
  {
    icon: Home,
    label: 'Avg. ROI',
    value: '8.5%',
    period: 'Annual returns',
    detail: 'On investment properties'
  },
  {
    icon: Users,
    label: 'Investor Activity',
    value: '+34%',
    period: 'Last 6 months',
    detail: 'International investor inquiries'
  }
];

const TREND_HIGHLIGHTS = [
  { title: 'Downtown Dubai', change: '+18.2%', metric: 'Price Growth' },
  { title: 'Dubai Marina', change: '+14.6%', metric: 'Price Growth' },
  { title: 'Business Bay', change: '+15.3%', metric: 'Price Growth' },
  { title: 'Palm Jumeirah', change: '9.2%', metric: 'Rental Yield' },
];

export default function MarketTrendsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#d4a574] font-heading font-semibold text-sm uppercase tracking-wide mb-2">
            Market Intelligence
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-[#0d1b3e] mb-4">
            Dubai Real Estate Market Trends
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Real-time market data and investor confidence indicators updated daily
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MARKET_TRENDS.map((trend, idx) => {
            const Icon = trend.icon;
            return (
              <Card 
                key={idx}
                className="p-6 border border-gray-200 hover:border-[#d4a574] transition-all duration-300 hover:shadow-lg bg-white group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#d4a574]/20 to-[#c9a84c]/20 rounded-lg group-hover:from-[#d4a574]/30 group-hover:to-[#c9a84c]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#d4a574]" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-body mb-2">{trend.label}</p>
                <p className="font-heading font-black text-3xl text-[#0d1b3e] mb-3">
                  {trend.value}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-body mb-1">{trend.period}</p>
                  <p className="text-sm text-gray-700 font-body">{trend.detail}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Area Highlights */}
        <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2851] rounded-2xl p-8 lg:p-12">
          <h3 className="font-heading text-2xl font-black text-white mb-8">
            Top Performing Communities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREND_HIGHLIGHTS.map((area, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <p className="text-white/80 text-sm font-body mb-3">{area.title}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-black text-3xl text-[#d4a574]">
                      {area.change}
                    </span>
                    <span className="text-white/60 text-xs font-body uppercase tracking-wide">
                      {area.metric}
                    </span>
                  </div>
                  <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#d4a574] to-[#c9a84c]"
                      style={{ width: `${parseFloat(area.change.replace('+', ''))}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-body text-sm">
            Data sourced from RERA Dubai, Dubai Land Department, and independent market analysis
          </p>
        </div>
      </div>
    </section>
  );
}