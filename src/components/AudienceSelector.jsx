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

  // Show banner if selected
  if (audience) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <p className="text-sm text-gray-700 font-body font-semibold">
              {audience === 'investor' && '✓ Investor Mode'}
              {audience === 'seller' && '✓ Seller Mode'}
              {audience === 'agent' && '✓ Agent Mode'}
            </p>
          </div>
          <button
            onClick={clearAudience}
            className="text-gray-500 hover:text-gray-700 transition-colors text-xs font-body flex items-center gap-1"
          >
            <X className="w-3 h-3" /> Switch
          </button>
        </div>
      </motion.div>
    );
  }

  // Show selector banner if not selected
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 sm:px-6 lg:px-8 py-8 relative bg-white border-b border-gray-200"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-3">
            What Brings You Here?
          </h2>
          <p className="text-sm text-gray-600 font-body max-w-2xl mx-auto">
            Select your role to see personalized content.
          </p>
        </motion.div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => selectAudience(opt.id)}
                className="relative group text-left p-6 rounded-lg border-2 border-blue-500 bg-blue-50 hover:border-blue-600 hover:bg-blue-100 transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-200 group-hover:bg-blue-300 transition-colors mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-display font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {opt.label}
                  </h3>
                  <p className="text-xs text-gray-700 font-body leading-relaxed mb-2">
                    {opt.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="flex items-center gap-2 text-xs text-blue-600 font-heading font-bold">
                    Select <span>→</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}