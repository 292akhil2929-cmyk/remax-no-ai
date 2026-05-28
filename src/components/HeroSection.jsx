import { Link } from 'react-router-dom';
import PropertySearchFilter from './PropertySearchFilter';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PROPERTY_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/176ded5ae_generated_image.png';

export default function HeroSection({ heroImage }) {
  return (
    <section 
      className="relative h-[600px] sm:h-[700px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13, 27, 62, 0.85) 0%, rgba(13, 27, 62, 0.7) 100%), url('${heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Tagline */}
            <p className="text-[#d4a574] font-heading font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase">
              ✦ Premium Dubai Real Estate Investment
            </p>
            
            {/* Main headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Invest in Property That{' '}
              <span className="bg-gradient-to-r from-[#d4a574] to-[#c9a84c] bg-clip-text text-transparent">
                Grows Your Wealth
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-white/80 font-body text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Strategic real estate investments across the UAE and global markets — built on ROI, data analysis, and long-term value. Not hype.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-[#d4a574] hover:bg-[#c9a84c] text-[#0d1b3e] font-heading font-bold rounded-lg border-0 transition-all duration-300 shadow-lg hover:shadow-xl" 
                asChild
              >
                <Link to="/contact">Start Investing <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/20 font-heading font-bold rounded-lg transition-all duration-300 backdrop-blur-sm" 
                asChild
              >
                <Link to="/properties">Browse 250+ Properties</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3">
              {['✓ RERA Licensed', '✓ Data-Driven Analysis', '✓ 40+ Countries Served'].map(label => (
                <span key={label} className="px-4 py-2 rounded-full border border-white/40 text-white/90 text-sm font-body backdrop-blur-sm bg-white/5">
                  {label}
                </span>
              ))}
            </div>

            {/* Floating stats - positioned absolutely at bottom */}
            <div className="absolute bottom-8 left-4 sm:left-8 lg:left-auto lg:right-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-6 flex gap-12 w-fit">
              <div>
                <p className="text-xs text-gray-600 font-body uppercase tracking-wide">Avg. ROI</p>
                <p className="text-3xl font-heading font-black text-[#0d1b3e] mt-1">8.5%</p>
              </div>
              <div className="w-px bg-gray-300" />
              <div>
                <p className="text-xs text-gray-600 font-body uppercase tracking-wide">Properties</p>
                <p className="text-3xl font-heading font-black text-[#0d1b3e] mt-1">250+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search filter - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <PropertySearchFilter />
        </div>
      </div>
    </section>
  );
}