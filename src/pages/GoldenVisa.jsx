import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Star, Clock, FileText, Home, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const steps = [
  { step: '01', title: 'Choose a Qualifying Property', desc: 'Purchase a residential property worth AED 2 million or more from an approved developer or on the secondary market. Off-plan properties from DLD-registered developers also qualify.' },
  { step: '02', title: 'Register with Dubai Land Department', desc: 'Complete the property transfer and receive your official Title Deed from the Dubai Land Department (DLD). Your agent handles all paperwork and DLD fees (4% of property value).' },
  { step: '03', title: 'Apply for UAE Residence Visa', desc: 'Submit your Golden Visa application through the UAE Federal Authority for Identity and Citizenship (ICA) or the General Directorate of Residency and Foreigners Affairs (GDRFA). Our team handles the entire application on your behalf.' },
  { step: '04', title: 'Medical & Emirates ID', desc: 'Complete a medical fitness test at an approved UAE health centre and provide biometric data for your Emirates ID — the official UAE national identity card.' },
  { step: '05', title: 'Receive Your 10-Year Visa', desc: 'Your UAE 10-year Golden Visa is issued. You can now sponsor your spouse, children under 25, and household staff. The visa is renewable as long as you maintain the qualifying investment.' },
];

const faqs = [
  { q: 'Who is eligible for the UAE Golden Visa through real estate?', a: 'Any foreign national who purchases a completed or off-plan residential property in Dubai (or the wider UAE) with a minimum value of AED 2 million is eligible to apply. The property can be purchased with a mortgage, provided the investor has already paid at least AED 2 million towards the purchase price.' },
  { q: 'Can I sponsor my family on the Golden Visa?', a: 'Yes. The UAE Golden Visa allows you to sponsor your spouse, children (up to 25 years old, or any age if disabled), and domestic helpers regardless of nationality. There is no minimum salary requirement for Golden Visa holders to sponsor family members.' },
  { q: 'Do I need to live in Dubai to maintain the Golden Visa?', a: 'No. Unlike standard UAE residence visas which lapse after 180 days outside the UAE, the Golden Visa has no such restriction. You can live outside the UAE indefinitely while maintaining your visa status, provided you renew on schedule.' },
  { q: 'Can I buy multiple properties to reach the AED 2M threshold?', a: 'Yes. Multiple properties can be combined to reach the AED 2 million minimum, provided they are all completed and title deeds are issued. Off-plan units under construction require a letter from the developer confirming the purchase value.' },
  { q: 'What are the total costs of getting a Golden Visa through real estate?', a: 'Beyond the property price, expect to pay: 4% DLD transfer fee, AED 580 title deed issuance fee, and approximately AED 5,000 to 10,000 in visa processing fees. REMAX ZAM advisory service includes full visa facilitation support at no additional cost when you purchase through us.' },
  { q: 'Does the Golden Visa allow me to work in the UAE?', a: 'Yes. The UAE 10-year Golden Visa grants full residency rights including the right to work in the UAE without requiring a separate work permit or local employer sponsorship. You can also open a UAE bank account, register a business, and access UAE government services.' },
];

export default function GoldenVisa() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400"
          alt="UAE Golden Visa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/75 to-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-5">
            <Star className="w-3 h-3 text-accent" />
            <span className="text-xs font-heading font-semibold text-white tracking-widest uppercase">UAE Residency by Investment</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-5 max-w-2xl">
            UAE 10-Year Golden Visa Through Real Estate Investment
          </h1>
          <p className="text-base text-white/80 font-body max-w-xl leading-relaxed mb-8">
            Invest AED 2 million or more in Dubai property and secure long-term UAE residency for you and your family — with zero income tax, full property ownership, and no sponsor required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
              <Link to="/contact">Start My Application <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-heading" asChild>
              <Link to="/properties">View Qualifying Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">Golden Visa Benefits</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">What the UAE Golden Visa Gives You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: '10-Year Renewable Residency', desc: 'Long-term security for you and your family without depending on an employer or local sponsor. Renew every 10 years as long as you maintain the qualifying investment.' },
              { icon: Globe, title: 'Live, Work & Study Freely', desc: 'Full UAE residency rights. Work for any company, register your own business, access UAE education and healthcare, and open UAE bank accounts without restrictions.' },
              { icon: Home, title: 'Sponsor Your Entire Family', desc: 'Bring your spouse, children (up to age 25), and domestic helpers to the UAE on your Golden Visa. No minimum salary threshold applies to Golden Visa holders.' },
              { icon: Shield, title: 'No Mandatory UAE Stay', desc: 'Unlike standard UAE visas that expire after 180 days outside the country, the Golden Visa has no stay requirements. Live globally while maintaining UAE residency.' },
              { icon: CheckCircle2, title: '0% Income Tax', desc: "Continue to benefit from the UAE's zero income tax environment on your rental income, salary, and business profits while living in or outside the UAE." },
              { icon: FileText, title: 'Emirates ID & Healthcare', desc: 'Receive a UAE Emirates ID — the national identity document — and access world-class UAE healthcare facilities and government services.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 border border-border/50 rounded-lg hover:border-primary/30 transition-colors">
                <Icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">The Process</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">How to Get Your UAE Golden Visa — Step by Step</h2>
            <p className="text-sm text-muted-foreground font-body">REMAX ZAM manages every step of the process on your behalf. Average processing time: 4–8 weeks from property purchase.</p>
          </div>
          <div className="space-y-6">
            {steps.map(s => (
              <div key={s.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center">{s.step}</div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-3">Properties That Qualify for the Golden Visa</h2>
          <p className="text-white/75 font-body text-sm max-w-2xl mx-auto mb-6">
            Any completed or off-plan Dubai property worth AED 2M+ from a DLD-registered developer qualifies. Browse our curated selection of Golden Visa-eligible properties.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
            <Link to="/properties">Browse Qualifying Properties <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">FAQs</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Your Golden Visa Questions Answered</h2>
          </div>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border/50 pb-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">Ready to Secure Your UAE Golden Visa?</h2>
          <p className="text-white/75 font-body mb-7 text-sm">Our Golden Visa specialists will guide you from property selection to visa issuance — at no additional cost.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
            <Link to="/contact">Speak to a Golden Visa Specialist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}