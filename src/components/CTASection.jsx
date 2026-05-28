import LeadCaptureForm from './LeadCaptureForm';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CTASection({ image }) {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute -top-40 left-1/3 w-80 h-80 bg-[#B87333]/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#B87333]" />
              <span className="text-xs font-heading font-bold text-[#B87333] tracking-widest uppercase">Free Consultation</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-8">
              Get Your Personalized Investment Strategy
            </h2>
            <p className="text-lg text-gray-300 font-body leading-relaxed mb-10">
              Our senior advisors will analyze your goals, risk appetite, and budget to create a tailored Dubai property investment plan — completely free.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/20">
              <img src={image} alt="Dubai luxury interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] border border-white/20 rounded-2xl p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-display font-black text-white mb-3">Request Investment Advice</h3>
            <p className="text-gray-400 font-body text-sm mb-10">Complete the form below and our team will be in touch within 24 hours.</p>
            <LeadCaptureForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}