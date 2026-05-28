import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    name: 'Khaled Al Mansoori',
    role: 'Managing Director & Senior Advisor',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
    languages: ['English', 'Arabic'],
    specializations: ['Ultra-Luxury Villas', 'Off-Plan Investments', 'Portfolio Strategy'],
    communities: ['Palm Jumeirah', 'Emirates Hills', 'DIFC'],
    deals: '400+',
    experience: '15 years',
    phone: '+971 50 XXX 0001',
    whatsapp: '+971 50 XXX 0001',
    email: 'khaled@remaxzam.ae',
    rera: 'RERA #12345',
    bio: 'Dubai\'s go-to advisor for ultra-high-net-worth investors. Khaled has closed over AED 800M in transactions and specialises in bespoke portfolio strategies for family offices and private investors.',
    badge: 'Director',
    badgeColor: 'bg-amber-500',
  },
  {
    name: 'Sarah Thompson',
    role: 'Head of International Sales',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500',
    languages: ['English', 'French', 'Arabic'],
    specializations: ['International Buyers', 'Off-Plan Projects', 'Golden Visa Packages'],
    communities: ['Downtown Dubai', 'Business Bay', 'Dubai Marina'],
    deals: '280+',
    experience: '12 years',
    phone: '+971 50 XXX 0002',
    whatsapp: '+971 50 XXX 0002',
    email: 'sarah@remaxzam.ae',
    rera: 'RERA #23456',
    bio: 'Sarah is the first point of contact for buyers from the UK, Europe, and the Americas. She has placed over 120 international clients into Dubai\'s top-performing communities with an average ROI of 8.2%.',
    badge: 'Top Producer',
    badgeColor: 'bg-primary',
  },
  {
    name: 'Ravi Sharma',
    role: 'Investment Strategy Director',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500',
    languages: ['English', 'Hindi', 'Gujarati'],
    specializations: ['Investment Analysis', 'ROI Modelling', 'Off-Plan Launches'],
    communities: ['Dubai Hills Estate', 'MBR City', 'Sobha Hartland'],
    deals: '220+',
    experience: '10 years',
    phone: '+971 50 XXX 0003',
    whatsapp: '+971 50 XXX 0003',
    email: 'ravi@remaxzam.ae',
    rera: 'RERA #34567',
    bio: 'With a background in investment banking, Ravi builds data-driven property portfolios for Indian and South Asian investors. He is the team\'s specialist for Sobha, EMAAR, and MBR City launches.',
    badge: 'Analyst',
    badgeColor: 'bg-emerald-600',
  },
  {
    name: 'Elena Kozlova',
    role: 'Senior Property Consultant',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500',
    languages: ['English', 'Russian', 'Ukrainian'],
    specializations: ['CIS Investors', 'Off-Plan Acquisitions', 'Golden Visa'],
    communities: ['Dubai Marina', 'JBR', 'Palm Jumeirah'],
    deals: '190+',
    experience: '8 years',
    phone: '+971 50 XXX 0004',
    whatsapp: '+971 50 XXX 0004',
    email: 'elena@remaxzam.ae',
    rera: 'RERA #45678',
    bio: 'Elena is the preferred advisor for Russian and CIS investors relocating to Dubai. She manages the full process from property acquisition through to Golden Visa issuance and school placement.',
    badge: 'CIS Specialist',
    badgeColor: 'bg-violet-600',
  },
  {
    name: 'Mohammed Al Rashid',
    role: 'Property Consultant — GCC Markets',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    languages: ['Arabic', 'English'],
    specializations: ['Luxury Villas', 'GCC Investors', 'Developer Relations'],
    communities: ['Palm Jumeirah', 'Dubai Hills Estate', 'Al Barari'],
    deals: '160+',
    experience: '7 years',
    phone: '+971 50 XXX 0005',
    whatsapp: '+971 50 XXX 0005',
    email: 'mohammed@remaxzam.ae',
    rera: 'RERA #56789',
    bio: 'Mohammed manages REMAX ZAM\'s relationships with GCC-based investors and HNWIs seeking luxury villa communities. He has exclusive access to off-market villa listings across Palm and Emirates Hills.',
    badge: 'GCC Expert',
    badgeColor: 'bg-primary',
  },
  {
    name: 'Priya Nair',
    role: 'Client Relations & Golden Visa Specialist',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500',
    languages: ['English', 'Hindi', 'Malayalam'],
    specializations: ['Golden Visa Advisory', 'Relocation Support', 'Ready Properties'],
    communities: ['JVC', 'Arjan', 'Dubai South'],
    deals: '140+',
    experience: '7 years',
    phone: '+971 50 XXX 0006',
    whatsapp: '+971 50 XXX 0006',
    email: 'priya@remaxzam.ae',
    rera: 'RERA #67890',
    bio: 'Priya guides families through the complete Dubai relocation journey — from value-focused property acquisition in JVC and Dubai South to Emirates ID issuance and school registration support.',
    badge: 'Visa Specialist',
    badgeColor: 'bg-rose-600',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Property Consultant — European Markets',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
    languages: ['English', 'Portuguese', 'Spanish'],
    specializations: ['European Buyers', 'Branded Residences', 'Luxury Apartments'],
    communities: ['Downtown Dubai', 'DIFC', 'Dubai Harbour'],
    deals: '110+',
    experience: '5 years',
    phone: '+971 50 XXX 0007',
    whatsapp: '+971 50 XXX 0007',
    email: 'lucas@remaxzam.ae',
    rera: 'RERA #78901',
    bio: 'Lucas serves Portuguese, Brazilian, and Spanish-speaking investors seeking Dubai as a tax-efficient investment destination. He specialises in branded residences and high-end apartment acquisitions.',
    badge: 'Rising Star',
    badgeColor: 'bg-emerald-600',
  },
  {
    name: 'Aisha Hassan',
    role: 'Property Consultant — Affordable Investments',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500',
    languages: ['English', 'Arabic', 'Swahili'],
    specializations: ['First-Time Investors', 'JVC & Arjan', 'Studio & 1BHK'],
    communities: ['JVC', 'Arjan', 'Dubai Sports City'],
    deals: '95+',
    experience: '4 years',
    phone: '+971 50 XXX 0008',
    whatsapp: '+971 50 XXX 0008',
    email: 'aisha@remaxzam.ae',
    rera: 'RERA #89012',
    bio: 'Aisha specialises in entry-level investments in Dubai\'s highest-yield communities. She helps first-time buyers from Africa and the Middle East build their first Dubai property portfolio.',
    badge: 'Rising Star',
    badgeColor: 'bg-emerald-600',
  },
];

const perks = [
  { icon: TrendingUp, title: 'Uncapped Commission', desc: 'Industry-leading commission splits starting at 60% and scaling to 80% for top performers. No desk fees for your first 6 months.' },
  { icon: Users, title: 'Ready-Made Lead Pipeline', desc: 'Access to REMAX ZAM\'s international marketing funnel, CRM database of 10,000+ qualified leads, and developer co-marketing budgets.' },
  { icon: Award, title: 'RERA Licensing Support', desc: 'We cover your RERA exam fees, provide full training, and mentor you through your first 10 transactions — regardless of your background.' },
  { icon: Star, title: 'RE/MAX Global Network', desc: 'Join the world\'s most recognised real estate brand with access to 140,000 agents across 110 countries and a globally trusted reputation.' },
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
          alt="REMAX ZAM Sales Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-white/70 tracking-widest mb-3 uppercase">Our People</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4 max-w-2xl">
            Meet the REMAX ZAM Sales Team
          </h1>
          <p className="text-base text-white/80 font-body max-w-xl leading-relaxed mb-8">
            A multilingual team of 8 specialist advisors across 12 languages and 40+ countries. Each agent brings deep community expertise, developer relationships, and a client-first approach to every transaction.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
            <Link to="/join">Join Our Team <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {agents.map(agent => (
              <div key={agent.name} className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all">
                {/* Photo + Badge */}
                <div className="relative">
                  <img src={agent.photo} alt={agent.name} className="w-full h-64 object-cover object-top" />
                  <span className={`absolute top-3 left-3 text-[10px] font-heading font-bold px-2.5 py-1 rounded text-white ${agent.badgeColor}`}>
                    {agent.badge}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2.5 py-1.5 text-center">
                    <p className="text-white font-heading font-bold text-sm">{agent.deals}</p>
                    <p className="text-white/70 font-body text-[10px]">deals closed</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-0.5">{agent.name}</h3>
                  <p className="text-xs font-heading font-semibold text-accent mb-1">{agent.role}</p>
                  <p className="text-[11px] text-muted-foreground font-body mb-3">{agent.rera} · {agent.experience} experience</p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{agent.bio}</p>

                  {/* Languages */}
                  <div className="mb-3">
                    <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Languages</p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.languages.map(l => (
                        <span key={l} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/20 font-heading font-medium">{l}</span>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-3">
                    <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Specializations</p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.specializations.map(s => (
                        <Badge key={s} variant="secondary" className="text-[10px] font-body">{s}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Communities */}
                  <div className="mb-4">
                    <p className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Key Communities</p>
                    <p className="text-xs text-muted-foreground font-body">{agent.communities.join(' · ')}</p>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-[9px] font-body text-muted-foreground">Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${agent.whatsapp.replace(/\s+/g, '').replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-emerald-50 transition-colors group"
                    >
                      <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
                      <span className="text-[9px] font-body text-muted-foreground">WhatsApp</span>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-[9px] font-body text-muted-foreground">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">Join the Team</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Why Top Agents Choose REMAX ZAM</h2>
            <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto">
              We are actively recruiting experienced and ambitious real estate professionals. Here is what makes REMAX ZAM different from every other brokerage in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background border border-border/50 rounded-lg p-6 text-center hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-display font-bold mb-3">Ready to Build Your Career in Dubai Real Estate?</h3>
            <p className="text-white/75 font-body text-sm max-w-lg mx-auto mb-6">
              Whether you are an experienced agent looking to move to a stronger platform or a high-achiever from another industry, we want to hear from you. Applications open year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
                <Link to="/join">Apply to Join the Team</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-heading" asChild>
                <Link to="/contact">Ask Us a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}