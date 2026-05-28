import { Link } from 'react-router-dom';
import PropertySearchFilter from './PropertySearchFilter';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PROPERTY_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/176ded5ae_generated_image.png';
const DUBAI_VIDEO = 'https://cdn.pixabay.com/vimeo/358317471/Dubai%20-%2033926.mp4';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-[600px] sm:h-[700px] overflow-visible pb-48">
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

      {/* Fallback image for video support */}
      <div 
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Premium overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Tagline */}
            <p className="text-[#B87333] font-heading font-semibold text-sm sm:text-base mb-4 tracking-wide uppercase">
              ✦ Premium Dubai Real Estate Investment
            </p>
            
            {/* Main headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Invest in Property That{' '}
              <span className="bg-gradient-to-r from-[#B87333] to-[#A86228] bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-[#B87333] to-[#A86228] hover:from-[#A86228] hover:to-[#96521f] text-white font-heading font-bold rounded-xl border-0 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" 
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Investment <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/25 font-heading font-bold rounded-xl transition-all duration-300 backdrop-blur-md bg-white/10 hover:border-[#d4a574]" 
                asChild
              >
                <Link to="/properties">Explore Luxury Properties</Link>
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
                <p className="text-3xl font-heading font-black text-black mt-1">8.5%</p>
              </div>
              <div className="w-px bg-gray-300" />
              <div>
                <p className="text-xs text-gray-600 font-body uppercase tracking-wide">Properties</p>
                <p className="text-3xl font-heading font-black text-black mt-1">250+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search filter - positioned at bottom with proper spacing */}
       <div className="absolute -bottom-40 left-0 right-0 px-4 sm:px-6 lg:px-8 z-20">
         <div className="max-w-7xl mx-auto">
           <PropertySearchFilter />
         </div>
       </div>
    </section>
  );
}