import { motion } from 'framer-motion';
import { PiggyBank, Landmark, Building2, Sun, Plane, FileCheck, Sparkles } from 'lucide-react';

const reasons = [
  { icon: PiggyBank, title: '0% Tax', desc: 'Tax-free capital gains and rental income.' },
  { icon: Landmark, title: 'Golden Visa', desc: 'Residency via AED 2M+ property investment.' },
  { icon: Building2, title: 'Infrastructure', desc: 'World-class development and connectivity.' },
  { icon: Sun, title: '8.5% Yield', desc: 'Consistent rental income potential.' },
  { icon: Plane, title: 'Global Hub', desc: '4-hour flight to 1/3 of world population.' },
  { icon: FileCheck, title: 'RERA Regulated', desc: 'Full transparency and investor protection.' },
];

export default function WhyInvestSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#B87333]/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#B87333]/20 rounded-full blur-3xl opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-3">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#B87333]/20 border border-[#B87333]/50 text-[#B87333] text-xs font-heading font-bold tracking-widest uppercase">
              Why Dubai
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-4">
            Six Reasons to Invest Here
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-body max-w-2xl mx-auto">
            Dubai combines premium returns with unmatched lifestyle and security.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reasons.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-[#B87333]/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#B87333]/30 to-[#B87333]/10 group-hover:from-[#B87333]/50 mb-3">
                <Icon className="w-6 h-6 text-[#B87333]" />
              </div>
              <h3 className="text-lg font-display font-black text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-300 font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}