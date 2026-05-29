/**
 * INVESTOR JOURNEY
 * Purpose: Find properties, understand ROI, make a data-backed purchase decision
 * Sections: Search + Filter → Featured Listings → Why Dubai → Community Guides → Market Data → CTA (free consultation)
 */
import MarketTicker from '@/components/MarketTicker';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyInvestSection from '@/components/WhyInvestSection';
import CommunityGuidesSection from '@/components/CommunityGuidesSection';
import YouTubeSection from '@/components/YouTubeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { motion } from 'framer-motion';

const INTERIOR_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/ae16b8f38_generated_326a751a.png';

export default function InvestorHome() {
  return (
    <>
      <MarketTicker />
      <FeaturedProperties />
      <WhyInvestSection />
      <CommunityGuidesSection />
      <YouTubeSection />
      <TestimonialsSection />

      {/* Investor CTA — free consultation */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs text-white/40 font-body tracking-widest uppercase mb-3">Free Consultation</p>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4 leading-tight">
                Build Your Dubai<br />Property Portfolio
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                Our senior investment advisors will analyze your goals, risk appetite, and timeline — then match you with properties that deliver real returns.
              </p>
              <ul className="space-y-3">
                {[
                  'Personalized ROI analysis for your budget',
                  'Off-plan vs ready property comparison',
                  'Tax-free income & Golden Visa pathway',
                  'No obligation — free 30-min session',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                    <span className="text-white mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-display font-black text-white mb-1">Get Investment Advice</h3>
              <p className="text-xs text-gray-400 font-body mb-5">We respond within 24 hours.</p>
              <LeadCaptureForm leadType="Investor" source="Home - Investor" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}