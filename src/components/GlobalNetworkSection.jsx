import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: '145K+', label: 'Agents' },
  { icon: Globe, value: '110+', label: 'Countries' },
  { icon: Award, value: '50+', label: 'Years' },
  { icon: TrendingUp, value: '#1', label: 'Trusted' },
];

export default function GlobalNetworkSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-3">
            Global Real Estate <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#B87333] to-orange-400 bg-clip-text text-transparent">Network</span>
          </h2>
          <p className="text-sm text-gray-300 font-body max-w-2xl mx-auto">
            RE/MAX's 145K agents worldwide refer international investors directly to us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stats.map(({ icon: Icon, value, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-lg p-4 text-center hover:border-[#B87333]/50 transition-all"
            >
              <Icon className="w-6 h-6 text-[#B87333] mx-auto mb-2" />
              <p className="text-2xl font-display font-black text-white">{value}</p>
              <p className="text-xs text-gray-400 font-body">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#B87333]/20 to-[#A86228]/20 border border-[#B87333]/30 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-white text-sm mb-1">Ready to leverage global expertise?</p>
            <p className="text-xs text-gray-400 font-body">Get a free investment strategy tailored to your goals.</p>
          </div>
          <Button className="bg-[#B87333] hover:bg-[#A86228] text-white font-heading font-bold text-sm shrink-0 border-0" asChild>
            <Link to="/contact">Get Advice <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}