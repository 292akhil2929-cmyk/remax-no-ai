import { useAudience } from '@/lib/AudienceContext';
import { Building2, TrendingUp, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [
  {
    id: 'investor',
    label: 'I Want to Invest',
    icon: TrendingUp,
    description: 'Find properties, analyze ROI, plan your portfolio',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'seller',
    label: 'I Want to Sell',
    icon: Building2,
    description: 'List your property, reach global buyers, maximize value',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 'agent',
    label: 'I Want to Collaborate',
    icon: Users,
    description: 'Join our RE/MAX network, grow your business',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function AudienceSelector() {
  const { audience, selectAudience, clearAudience } = useAudience();

  // Don't show if already selected
  if (audience) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black to-slate-900 border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#B87333]" />
            <p className="text-xs sm:text-sm text-gray-300 font-body">
              {audience === 'investor' && '✓ Investor Dashboard'}
              {audience === 'seller' && '✓ Seller Portal'}
              {audience === 'agent' && '✓ Agent Program'}
            </p>
          </div>
          <button
            onClick={clearAudience}
            className="text-gray-400 hover:text-white transition-colors text-xs font-body flex items-center gap-1"
          >
            <X className="w-3 h-3" /> Change
          </button>
        </div>
      </motion.div>
    );
  }

  // Show selector if not selected
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-black via-slate-950 to-slate-900 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-[#B87333]/20 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-3">
            What Brings You Here?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-body max-w-2xl mx-auto">
            We'll show you exactly what you need to succeed. Select your path.
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => selectAudience(opt.id)}
                className="relative group text-left p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-[#B87333]/50 transition-all duration-300 backdrop-blur-xl overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${opt.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#B87333]/30 to-[#B87333]/10 group-hover:from-[#B87333]/50 mb-4">
                    <Icon className="w-6 h-6 text-[#B87333]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-black text-white mb-2 group-hover:text-[#B87333] transition-colors">
                    {opt.label}
                  </h3>
                  <p className="text-sm text-gray-400 font-body leading-relaxed">
                    {opt.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#B87333] font-heading font-bold">
                    Get Started <span>→</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-500 font-body mt-8"
        >
          You can change this anytime. We're here to support all three paths.
        </motion.p>
      </div>
    </motion.div>
  );
}