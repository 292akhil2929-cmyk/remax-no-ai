import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'James Holloway', country: 'United Kingdom', flag: '🇬🇧', role: 'Portfolio Investor — 4 Units in Dubai Marina', text: "REMAX ZAM found me two off-plan units in Dubai Marina before they hit the public market. Both have appreciated over 35% since purchase and are fully tenanted. The team's market knowledge is genuinely institutional-grade.", rating: 5, year: '2024' },
  { name: 'Sophie Chen', country: 'Singapore', flag: '🇸🇬', role: 'First-Time Investor — Downtown Dubai', text: "As a first-time investor based in Singapore, I was nervous about buying remotely in Dubai. The REMAX ZAM team held my hand through every step. I now hold a 2-bedroom in Downtown Dubai generating 6.8% net yield.", rating: 5, year: '2024' },
  { name: 'Arjun Mehta', country: 'India', flag: '🇮🇳', role: 'Golden Visa Recipient — Palm Jumeirah Villa', text: "I wanted a villa on the Palm and a Golden Visa for my family. The team found me a frond villa below market price and managed the entire Golden Visa application. My family now holds 10-year UAE residency.", rating: 5, year: '2023' },
  { name: 'Elena Voronova', country: 'Russia', flag: '🇷🇺', role: 'Real Estate Investor — Business Bay & JVC', text: "I relocated my investment portfolio to Dubai after getting advice from REMAX ZAM. They helped me acquire three apartments with a combined rental yield of over 9%. The process was seamless and effortless.", rating: 5, year: '2023' },
  { name: 'Michael Braun', country: 'Germany', flag: '🇩🇪', role: 'Investor & Relocating Family — Dubai Hills Estate', text: "We relocated our family from Munich to Dubai Hills Estate. REMAX ZAM understood that this was both an investment and a lifestyle decision. They made what could have been a stressful move feel completely manageable.", rating: 5, year: '2024' },
  { name: 'Fatima Al Qassim', country: 'UAE', flag: '🇦🇪', role: 'Local Investor — Off-Plan Portfolio', text: "As a local UAE investor, I've worked with many brokerages. REMAX ZAM stands apart because they give you honest analysis — they told me when a property didn't make sense. That kind of integrity is rare.", rating: 5, year: '2024' },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-[#B87333]/25 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -bottom-40 right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B87333]/20 border border-[#B87333]/50">
              <Sparkles className="w-4 h-4 text-[#B87333]" />
              <span className="text-xs font-heading font-bold text-[#B87333] tracking-widest uppercase">Client Reviews</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-black text-white mb-6">What Our Investors Say</h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto mb-8">
            Over 1,200 satisfied investors from 40+ countries have trusted REMAX ZAM with their Dubai real estate journey.
          </p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-center gap-3">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-[#B87333] fill-[#B87333]" />)}
            <span className="text-lg font-heading font-black text-white">4.9 / 5</span>
            <span className="text-gray-400 font-body">· 340+ reviews</span>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-[#B87333]/50 transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-[#B87333] mb-4" />
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{t.flag}</span>
                    <p className="font-heading font-bold text-white">{t.name}</p>
                  </div>
                  <p className="text-xs text-gray-500 font-body">{t.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-1 justify-end mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 text-[#B87333] fill-[#B87333]" />)}
                  </div>
                  <p className="text-xs text-gray-500">{t.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}