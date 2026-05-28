import { motion } from 'framer-motion';
import { Landmark, Plane, Sun, PiggyBank, FileCheck, Building2 } from 'lucide-react';

const reasons = [
  { icon: PiggyBank, title: '0% Income Tax', desc: 'Tax-free rental income and capital gains make Dubai one of the most investor-friendly markets globally.' },
  { icon: Landmark, title: 'Golden Visa', desc: 'Invest AED 2M+ in property and secure a 10-year residency visa for you and your family.' },
  { icon: Building2, title: 'World-Class Infrastructure', desc: 'From Expo City to Etihad Rail, Dubai is investing billions in future-proof infrastructure.' },
  { icon: Sun, title: '8.5% Avg Yield', desc: 'Dubai consistently delivers some of the highest rental yields among global cities.' },
  { icon: Plane, title: 'Global Connectivity', desc: '4-hour flight radius covers 1/3 of the world\'s population. A true global hub.' },
  { icon: FileCheck, title: 'Regulated Market', desc: 'RERA oversight ensures transparency, escrow protection, and investor security.' },
];

export default function WhyInvestSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#B87333]/30 rounded-full blur-3xl opacity-40 animate-blob" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#B87333]/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-[#B87333]/20 border border-[#B87333]/50 text-[#B87333] text-xs font-heading font-bold tracking-widest uppercase">
            Why Dubai Rules
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
            The World's Smartest<br />
            <span className="bg-gradient-to-r from-[#B87333] via-orange-400 to-[#B87333] bg-clip-text text-transparent">Investment Destination</span>
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Six reasons why savvy investors choose Dubai over every other global market
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B87333]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl group-hover:border-[#B87333]/50 transition-all duration-300">
                {/* Icon container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#B87333]/30 to-[#B87333]/10 group-hover:from-[#B87333]/50 group-hover:to-[#B87333]/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#B87333]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-black text-white mb-3">{title}</h3>
                <p className="text-gray-300 font-body leading-relaxed text-sm">{desc}</p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#B87333] to-orange-400 group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}