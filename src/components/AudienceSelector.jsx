import { useAudience } from '@/lib/AudienceContext';
import { motion, AnimatePresence } from 'framer-motion';

const OPTIONS = [
  { id: 'investor', label: 'I want to Invest', sublabel: 'Buy or off-plan' },
  { id: 'seller', label: 'I want to Sell', sublabel: 'Get a valuation' },
  { id: 'agent', label: 'I want to Collaborate', sublabel: 'Join the network' },
];

export default function AudienceSelector() {
  const { audience, selectAudience } = useAudience();

  return (
    <div className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center h-12 gap-1">
          <span className="text-white/25 text-[10px] font-body tracking-[0.2em] uppercase mr-4 hidden sm:block">
            I'm here to
          </span>
          {OPTIONS.map(opt => {
            const isActive = audience === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => selectAudience(opt.id)}
                className={`relative h-full px-5 text-xs font-heading font-semibold transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {opt.label}
                {isActive && (
                  <motion.div
                    layoutId="audience-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}