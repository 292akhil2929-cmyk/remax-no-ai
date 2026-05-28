import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, Shield, Globe, Award, DollarSign, Clock, BarChart3, Building2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SellerLeadForm from '../components/SellerLeadForm';

const reasons = [
  {
    icon: Globe,
    title: 'Global Investor Network',
    description: 'Access to over 10,000+ qualified international investors actively looking to buy or rent in Dubai. Your property gets seen by serious buyers from 40+ countries.',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Market Exposure',
    description: 'Your listing is promoted across premium portals, social media channels, email campaigns, and our high-traffic website — driving more enquiries faster.',
  },
  {
    icon: Users,
    title: 'Dedicated Agent Support',
    description: 'A personal property consultant handles everything — viewings, negotiations, paperwork — so you never have to worry about the process.',
  },
  {
    icon: Shield,
    title: 'Vetted Tenants & Buyers',
    description: 'We pre-qualify all prospective tenants and buyers, verifying finances and intent before any viewing, protecting your time and investment.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Commission Rates',
    description: 'Transparent, market-competitive fees with no hidden charges. Our success-based model means we only get paid when you do.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Pricing Strategy',
    description: 'We provide a free market valuation backed by real transaction data, ensuring your property is priced to attract the best offers quickly.',
  },
  {
    icon: Clock,
    title: 'Fast Transaction Times',
    description: 'Our streamlined process and in-house legal support means faster sales and rentals — typically completing transactions 30% faster than the market average.',
  },
  {
    icon: Award,
    title: 'RERA-Licensed Brokerage',
    description: 'Fully licensed and regulated by RERA and DLD. Your property is managed with full legal compliance, giving you complete peace of mind.',
  },
];

const stats = [
  { value: '2,500+', label: 'Properties Listed' },
  { value: '94%', label: 'Listing-to-Sale Rate' },
  { value: '45 Days', label: 'Avg. Time to Sell' },
  { value: 'AED 4.2B+', label: 'Transaction Volume' },
];

const testimonials = [
  {
    name: 'Ahmed Al Rashidi',
    property: 'Villa, Palm Jumeirah',
    quote: 'REMAX ZAM sold my villa in just 3 weeks at above asking price. The exposure they generated was incredible — I had 12 serious enquiries in the first 5 days.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    property: 'Apartment, Downtown Dubai',
    quote: 'As an overseas investor, I needed a trustworthy team. They managed the entire sale remotely, kept me updated at every step, and achieved a great result.',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    property: 'Penthouse, Business Bay',
    quote: 'Professional, fast, and honest. They gave me a realistic valuation and delivered on their promises. My portfolio management is now entirely with them.',
    rating: 5,
  },
];

const steps = [
  { step: '01', title: 'Free Valuation', description: 'We assess your property with current market data and provide a competitive price recommendation.' },
  { step: '02', title: 'Professional Listing', description: 'Our team handles photography, floor plans, and crafts a compelling listing across all platforms.' },
  { step: '03', title: 'Active Marketing', description: 'Your property is promoted to our investor network, portals, and social media channels immediately.' },
  { step: '04', title: 'Viewings & Offers', description: 'We manage all enquiries, schedule viewings, and present qualified offers to you.' },
  { step: '05', title: 'Close the Deal', description: 'Our in-house team handles contracts, DLD registration, and NOC — seamlessly to completion.' },
];

export default function Landlords() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/90 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            For Landlords &amp; Sellers
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sell or Rent Your Dubai<br />Property with Confidence
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of landlords who trust REMAX ZAM to market their properties to a global audience and achieve the best possible results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8" asChild>
              <a href="#list-with-us">List Your Property</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" asChild>
              <Link to="/contact">Get Free Valuation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why List With Us */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Landlords Choose REMAX ZAM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don&apos;t just list your property — we work tirelessly to get you the best outcome, faster.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">From listing to completion — a seamless, stress-free experience.</p>
          </div>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start bg-background rounded-xl p-6 border border-border shadow-sm">
                <div className="w-14 h-14 flex-shrink-0 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-lg">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Landlords Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground italic mb-4">&quot;{t.quote}&quot;</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> {t.property}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="list-with-us" className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to List Your Property?
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Get a free, no-obligation market valuation and find out how much your property could achieve today.
            </p>
            <ul className="space-y-3">
              {['Free market valuation within 24 hours', 'No upfront fees — success-based commission', 'Full marketing campaign included', 'Dedicated agent from listing to completion'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background rounded-2xl p-6 shadow-2xl">
            <h3 className="font-heading font-bold text-foreground text-xl mb-1">Get Your Free Valuation</h3>
            <p className="text-muted-foreground text-sm mb-4">Fill in your details and we&apos;ll be in touch within 24 hours.</p>
            <SellerLeadForm source="Landlords Page" />
          </div>
        </div>
      </section>
    </div>
  );
}