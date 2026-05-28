import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const DUBAI_VIDEO = 'https://cdn.pixabay.com/vimeo/358317471/Dubai%20-%2033926.mp4';

export default function AgentHero() {
  return (
    <section className="relative min-h-screen lg:h-[700px] flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={DUBAI_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative w-full z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#B87333] font-heading font-semibold text-xs sm:text-sm mb-4 tracking-widest uppercase"
            >
              ✦ Join RE/MAX
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 lg:mb-6"
            >
              Grow Your Real<br className="hidden sm:block" /> Estate Business<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#B87333] to-[#A86228] bg-clip-text text-transparent">
                Exponentially
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-gray-200 font-body text-base sm:text-lg leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Competitive splits. World-class support. Global referral network. Access Dubai's premium market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B87333] to-[#A86228] hover:from-[#A86228] hover:to-[#96521f] text-white font-heading font-bold rounded-lg border-0 transition-all duration-300 shadow-xl hover:shadow-2xl"
                asChild
              >
                <Link to="/contact?type=agent" className="flex items-center justify-center gap-2">
                  Join Our Team <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-heading font-bold rounded-lg transition-all duration-300"
                asChild
              >
                <Link to="/contact">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8 text-xs text-gray-300 font-body"
            >
              {['✓ Competitive Commission', '✓ 24/7 Support', '✓ Premium Tools'].map(label => (
                <span key={label} className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:flex flex-col gap-4 w-full lg:w-auto"
          >
            {[
              { icon: Users, label: 'Network', value: '145K+ Agents' },
              { icon: Zap, label: 'Support', value: '24/7 Available' },
              { icon: DollarSign, label: 'Commission', value: 'Competitive' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl px-6 py-5 w-56 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#B87333]" />
                    <p className="text-xs text-gray-600 font-body uppercase tracking-wide">{stat.label}</p>
                  </div>
                  <p className="text-lg font-heading font-black text-black">{stat.value}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}