import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart3, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Dubai skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-body text-white/80 tracking-widest uppercase">Dubai Real Estate Investment</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Invest in Property That{' '}
            <span className="text-red-500">Grows Your Wealth</span>
          </h1>

          <p className="text-base text-white/75 font-body leading-relaxed mb-8 max-w-md">
            Strategic real estate investments across the UAE and global markets — built on ROI, data analysis, and long-term value. Not hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-heading font-bold tracking-wide border-0" asChild>
              <Link to="/contact">
                Start Investing <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/15 font-heading" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'RERA Licensed' },
              { icon: BarChart3, label: 'Data-Driven' },
              { icon: Globe, label: '40+ Countries Served' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-red-400" />
                <span className="text-sm text-white/80 font-body">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}