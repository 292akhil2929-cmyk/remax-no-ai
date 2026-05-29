import { useAudience } from '@/lib/AudienceContext';
import { Building2, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const options = [
  { id: 'investor', label: 'Invest', icon: TrendingUp },
  { id: 'seller', label: 'Sell', icon: Building2 },
  { id: 'agent', label: 'Collaborate', icon: Users },
];

export default function AudienceSelector() {
  const { audience, selectAudience } = useAudience();

  return (
    <div className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 h-11">
          <span className="text-white/40 text-xs font-body mr-3 hidden sm:block tracking-wider uppercase">I want to</span>
          {options.map(opt => {
            const Icon = opt.icon;
            const isActive = audience === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => selectAudience(opt.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3 h-3" />
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}