import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: '145,000+', label: 'Agents Worldwide', color: 'text-[#B87333]' },
  { icon: Globe, value: '110+', label: 'Countries & Territories', color: 'text-[#B87333]' },
  { icon: Award, value: '50+', label: 'Years of Excellence', color: 'text-[#B87333]' },
  { icon: TrendingUp, value: '#1', label: 'Most Trusted Brand', color: 'text-[#B87333]' },
];

const sourceCountries = [
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇮🇳', country: 'India' },
  { flag: '🇷🇺', country: 'Russia' },
  { flag: '🇩🇪', country: 'Germany' },
  { flag: '🇨🇳', country: 'China' },
  { flag: '🇫🇷', country: 'France' },
  { flag: '🇵🇰', country: 'Pakistan' },
  { flag: '🇺🇸', country: 'USA' },
];

export default function GlobalNetworkSection() {
  return (
    <section className="bg-gradient-to-b from-black via-slate-950 to-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-[#B87333]/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B87333]/20 border border-[#B87333]/50">
              <Sparkles className="w-4 h-4 text-[#B87333]" />
              <p className="text-[#B87333] font-heading font-bold text-xs tracking-widest uppercase">
                Global Advantage
              </p>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-6">
            Dubai's Gateway to the<br />
            <span className="bg-gradient-to-r from-[#B87333] to-orange-400 bg-clip-text text-transparent">World's Most Trusted</span> Real Estate Network
          </h2>
          <p className="text-gray-300 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Backed by RE/MAX — the world's largest real estate brand. Investors from London to Mumbai already know and trust us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {stats.map(({ icon: Icon, value, label, color }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center hover:border-[#B87333]/50 transition-all duration-300"
            >
              <Icon className={`w-8 h-8 mx-auto mb-4 ${color}`} />
              <p className="text-3xl lg:text-4xl font-display font-black text-white mb-2">{value}</p>
              <p className="text-gray-400 font-body text-xs uppercase tracking-widest font-bold">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Left: Why Global Matters */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-black text-white mb-6">Why Global Excellence Matters</h3>
            {[
              {
                title: 'Instant Credibility',
                desc: 'International investors already recognise RE/MAX from their home country—shortening the trust-building process dramatically.',
              },
              {
                title: 'Global Referral Network',
                desc: '145,000 RE/MAX agents worldwide refer qualified clients directly to us. European buyers, Asian investors, American portfolios.',
              },
              {
                title: 'Proven Standards',
                desc: 'We operate to RE/MAX\'s global compliance and service standards—the same clients experienced in New York, London, or Sydney.',
              },
              {
                title: 'Stability Through Cycles',
                desc: '50+ years navigating global markets means our investors trust us through booms and downturns. That longevity is irreplaceable.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="w-2 h-2 rounded-full bg-[#B87333] mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Investor Origins */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-display font-black text-white mb-2">Our Global Investor Base</h3>
            <p className="text-gray-400 font-body text-sm mb-6">Investors from these countries already know RE/MAX—making Dubai your natural choice.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {sourceCountries.map(({ flag, country }) => (
                <div key={country} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-all">
                  <span className="text-2xl">{flag}</span>
                  <span className="text-gray-300 font-body text-sm">{country}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 font-body text-xs border-t border-white/10 pt-4">
              * RE/MAX voted #1 Most Trusted Real Estate Brand — independent survey 2025. Network stats include 145,000+ affiliated agents.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#B87333]/20 to-[#A86228]/20 border border-[#B87333]/30 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white text-lg mb-1">Ready to invest with a global brand?</p>
            <p className="text-gray-400 font-body text-sm">Connect with REMAX ZAM's certified investment advisors for a tailored strategy.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button className="bg-[#B87333] hover:bg-[#A86228] text-white font-heading font-bold border-0" asChild>
              <Link to="/contact">Get Advice <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-heading" asChild>
              <Link to="/properties">View Properties</Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}