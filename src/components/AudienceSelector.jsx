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
      className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            What Brings You Here?
          </h2>
          <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
            We'll show you exactly what you need to succeed.
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => selectAudience(opt.id)}
                className="relative group text-left p-8 rounded-lg border border-border bg-white hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-black text-foreground mb-2 group-hover:text-accent transition-colors">
                    {opt.label}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {opt.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="flex items-center gap-2 text-sm text-accent font-heading font-bold">
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
          className="text-center text-xs text-muted-foreground font-body"
        >
          You can change this anytime. We're here to support all three paths.
        </motion.p>
      </div>
    </motion.div>
  );
}