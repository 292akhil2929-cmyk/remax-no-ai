import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BarChart3, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Dubai skyline at twilight" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body text-primary tracking-wide">DUBAI REAL ESTATE INVESTMENT</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic text-foreground leading-[1.1] mb-6">
            Invest in Property That{' '}
            <span className="text-primary">Grows Your Wealth</span>
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10 max-w-lg">
            Strategic real estate investments in Dubai — built on ROI, data analysis, and long-term value. Not hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="font-heading font-semibold tracking-wide" asChild>
              <Link to="/contact">
                Start Investing <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-secondary" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Shield, label: 'RERA Licensed', sub: 'Regulated & Trusted' },
              { icon: BarChart3, label: 'Data-Driven', sub: 'Market Intelligence' },
              { icon: Globe, label: 'Global Reach', sub: '40+ Countries Served' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-heading font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground font-body">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}