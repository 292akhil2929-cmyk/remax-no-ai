import { Link } from 'react-router-dom';
import PropertySearchFilter from './PropertySearchFilter';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const DUBAI_VIDEO = 'https://cdn.pixabay.com/vimeo/358317471/Dubai%20-%2033926.mp4';

export default function HeroSection({ heroImage }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-[700px] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={DUBAI_VIDEO} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative w-full z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[#B87333] font-heading font-semibold text-xs sm:text-sm mb-4 tracking-widest uppercase"
              >
                ✦ Premium Real Estate Investment
              </motion.p>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 lg:mb-6"
              >
                Invest in Property<br className="hidden sm:block" /> That Grows Your<br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#B87333] to-[#A86228] bg-clip-text text-transparent">
                  Wealth
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-gray-200 font-body text-base sm:text-lg leading-relaxed mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Strategic real estate investments across Dubai — built on ROI, data analysis, and long-term value.
              </motion.p>

              {/* CTA Buttons */}
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
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Start Investing <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-heading font-bold rounded-lg transition-all duration-300"
                  asChild
                >
                  <Link to="/properties">Explore Properties</Link>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8 text-xs text-gray-300 font-body"
              >
                {['✓ RERA Licensed', '✓ Data-Driven', '✓ 1,200+ Investors'].map(label => (
                  <span key={label} className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex flex-col gap-4 w-full lg:w-auto"
            >
              {[
                { label: 'Avg ROI', value: '8.5%' },
                { label: 'Properties', value: '250+' },
                { label: 'Countries', value: '40+' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl px-6 py-5 w-56 hover:shadow-2xl transition-all duration-300"
                >
                  <p className="text-xs text-gray-600 font-body uppercase tracking-wide">{stat.label}</p>
                  <p className="text-3xl font-heading font-black text-black mt-1">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Filter - Compact */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 lg:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <PropertySearchFilter />
        </div>
      </div>
    </>
  );
}