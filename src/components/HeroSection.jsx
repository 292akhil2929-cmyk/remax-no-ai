import { Link } from 'react-router-dom';
import PropertySearchFilter from './PropertySearchFilter';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PROPERTY_IMAGE = 'https://media.base44.com/images/public/6a16b586e769393fe031b9fd/176ded5ae_generated_image.png';

export default function HeroSection({ heroImage }) {
  return (
    <section className="bg-[#0d1b3e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main split card */}
        <div className="rounded-2xl bg-[#0d1b3e] border border-white/10 px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
          {/* Left: Content */}
          <div>
            <p className="text-[#c9a84c] font-heading font-semibold text-base mb-3">Dubai Real Estate Investment</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Invest in Property That{' '}
              <span className="text-[#c9a84c]">Grows Your Wealth</span>
            </h1>
            <p className="text-white/70 font-body text-base leading-relaxed mb-8 max-w-md">
              Strategic real estate investments across the UAE and global markets — built on ROI, data analysis, and long-term value. Not hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="bg-[#c9a84c] hover:bg-[#b8943f] text-[#0d1b3e] font-heading font-bold rounded-lg border-0" asChild>
                <Link to="/contact">Start Investing <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-heading font-bold rounded-lg" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
            </div>
            <div>
              <p className="text-white/50 text-xs font-body mb-2">Trust indicators:</p>
              <div className="flex flex-wrap gap-2">
                {['RERA Licensed', 'Data-Driven', '40+ Countries Served'].map(label => (
                  <span key={label} className="px-3 py-1.5 rounded-full border border-white/30 text-white/80 text-xs font-body">{label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Property image with floating stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img src={PROPERTY_IMAGE} alt="Luxury Dubai Property" className="w-full h-72 lg:h-80 object-cover" />
            </div>
            {/* Floating stats card */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-xl px-5 py-3 flex gap-6">
              <div>
                <p className="text-xs text-gray-500 font-body">Avg. ROI:</p>
                <p className="text-2xl font-heading font-black text-[#0d1b3e]">8.5%</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-xs text-gray-500 font-body">Properties:</p>
                <p className="text-2xl font-heading font-black text-[#0d1b3e]">250+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search filter below */}
        <PropertySearchFilter />
      </div>
    </section>
  );
}