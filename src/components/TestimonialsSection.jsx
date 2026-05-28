import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James Holloway',
    country: 'United Kingdom',
    flag: '🇬🇧',
    role: 'Portfolio Investor — 4 Units in Dubai Marina',
    text: "REMAX ZAM found me two off-plan units in Dubai Marina before they hit the public market. Both have appreciated over 35% since purchase and are fully tenanted. The team's market knowledge is genuinely institutional-grade — I've never worked with a brokerage that gives this level of post-sale support.",
    rating: 5,
    year: '2024',
  },
  {
    name: 'Sophie Chen',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'First-Time Investor — Downtown Dubai',
    text: "As a first-time investor based in Singapore, I was nervous about buying remotely in Dubai. The REMAX ZAM team held my hand through every step — from shortlisting properties to completing the Golden Visa process. I now hold a beautiful 2-bedroom in Downtown Dubai generating 6.8% net yield.",
    rating: 5,
    year: '2024',
  },
  {
    name: 'Arjun Mehta',
    country: 'India',
    flag: '🇮🇳',
    role: 'Golden Visa Recipient — Palm Jumeirah Villa',
    text: "I wanted a villa on the Palm and a Golden Visa for my family. The team at REMAX ZAM found me a frond villa below market price through an off-market connection and managed the entire Golden Visa application. My family now holds 10-year UAE residency. Worth every dirham.",
    rating: 5,
    year: '2023',
  },
  {
    name: 'Elena Voronova',
    country: 'Russia',
    flag: '🇷🇺',
    role: 'Real Estate Investor — Business Bay & JVC',
    text: "I relocated my investment portfolio to Dubai after getting advice from REMAX ZAM. They helped me acquire three apartments in Business Bay and JVC with a combined rental yield of over 9%. The process was seamless and their Russian-speaking advisor made communication effortless.",
    rating: 5,
    year: '2023',
  },
  {
    name: 'Michael Braun',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Investor & Relocating Family — Dubai Hills Estate',
    text: "We relocated our family from Munich to Dubai Hills Estate. REMAX ZAM understood that this was both an investment and a lifestyle decision. They found us the perfect villa near the golf course, helped navigate the school applications, and made what could have been a stressful move feel completely manageable.",
    rating: 5,
    year: '2024',
  },
  {
    name: 'Fatima Al Qassim',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Local Investor — Off-Plan Portfolio',
    text: "As a local UAE investor, I've worked with many brokerages. REMAX ZAM stands apart because they give you honest analysis — they told me when a property didn't make sense even when they could have easily made the commission. That kind of integrity is rare. They manage four of my off-plan investments now.",
    rating: 5,
    year: '2024',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">Client Reviews</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">What Our Investors Say</h2>
          <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto">
            Over 1,200 satisfied investors from 40+ countries have trusted REMAX ZAM with their Dubai real estate journey.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
            <span className="text-sm font-heading font-semibold text-foreground ml-1">4.9 / 5</span>
            <span className="text-sm text-muted-foreground font-body">· 340+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-background border border-border/50 rounded-lg p-6 flex flex-col hover:border-primary/30 transition-colors">
              <Quote className="w-6 h-6 text-accent mb-4 flex-shrink-0" />
              <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-5">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-lg">{t.flag}</span>
                    <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-xs text-muted-foreground font-body">{t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}