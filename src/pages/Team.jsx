import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Star, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TEAM = [
  {
    name: 'Faisal Contractor',
    role: 'CEO & Founder',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/10/Rectangle-284.jpg',
    bio: 'Faisal Contractor is an accomplished serial entrepreneur and growth architect. As the founder and CEO of Embark Growth Marketing and the visionary behind REMAX ZAM, Faisal has earned a reputation for transforming how investors engage with the UAE\'s real estate market. Focused on enabling smart, confident decisions, he is committed to innovation, strategic growth, and fostering meaningful industry relationships.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Founder & CEO',
    badgeColor: 'bg-[#B87333]',
  },
  {
    name: 'Justice',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Justice-chukwudi.png',
    bio: 'I use the market insights I learned at REMAX ZAM to provide unmatched support to my clients. The management\'s guidance gives me confidence to close deals and progress my career in ways I never imagined.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
  {
    name: 'Imran',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Mohoammad-Imran.png',
    bio: 'The training and teamwork at REMAX ZAM helped me understand the industry faster and helps me keep track of latest updates within the industry.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
  {
    name: 'Abu Bakkar',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Abu-bakkar-al-shams.png',
    bio: 'I am honored to be a part of REMAX and REMAX ZAM. REMAX is a global brand and REMAX ZAM has shown me why, it\'s an absolute pleasure for me to be part of this brand.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
  {
    name: 'Khaldoun',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-104.png',
    bio: 'I recently closed my biggest deal, and I couldn\'t have done it without the hands on training I received at REMAX ZAM. The support from the team and the market insights gave me the confidence to succeed.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
  {
    name: 'Nour',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-105.png',
    bio: 'I\'ve been able to build my personal brand and attract clients with the training and marketing resources at REMAX ZAM. The support from the team has helped me gain leads and grow consistently.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
  {
    name: 'Manish',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Manish-Kapur.png',
    bio: 'I closed multiple high ticket deals back to back thanks to the mentorship and guidance provided by REMAX ZAM. Having access to a strong network made navigating the market so much easier.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
    badge: 'Consultant',
    badgeColor: 'bg-slate-700',
  },
];

const perks = [
  { icon: TrendingUp, title: 'Uncapped Commission', desc: 'You pick your commission — 50, 65, or 80 percent — your business, your way. No desk fees for your first months.' },
  { icon: Users, title: 'Ready-Made Lead Pipeline', desc: 'Access to REMAX ZAM\'s international marketing funnel, CRM database of qualified leads, and developer co-marketing budgets.' },
  { icon: Award, title: 'RERA & Training Support', desc: 'We cover your training, provide hands-on mentorship, and guide you through your first transactions — regardless of your background.' },
  { icon: Star, title: 'RE/MAX Global Network', desc: 'Join the world\'s most recognised real estate brand with access to 146,000+ agents across 110+ countries and 8,700+ offices globally.' },
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
            Meet the REMAX ZAM Team
          </h1>
          <p className="text-base text-white/80 font-body max-w-xl leading-relaxed mb-8">
            A team of specialist advisors built on a consultant-first growth model. We combine global REMAX expertise with deep Dubai market knowledge to deliver results for investors and buyers alike.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
            <Link to="/join">Join Our Team <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CEO Feature Card */}
          <div className="mb-12">
            <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all flex flex-col md:flex-row">
              <div className="relative md:w-80 shrink-0">
                <img
                  src={TEAM[0].photo}
                  alt={TEAM[0].name}
                  className="w-full h-72 md:h-full object-cover object-top"
                  onError={(e) => { e.target.src = 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/12/man.jpg'; }}
                />
                <span className={`absolute top-3 left-3 text-[10px] font-heading font-bold px-2.5 py-1 rounded text-white ${TEAM[0].badgeColor}`}>
                  {TEAM[0].badge}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-foreground text-2xl mb-1">{TEAM[0].name}</h3>
                <p className="text-sm font-heading font-semibold text-accent mb-4">{TEAM[0].role}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-xl">{TEAM[0].bio}</p>
                <div className="flex gap-3">
                  <a href={`tel:${TEAM[0].phone}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors text-sm font-body text-muted-foreground hover:text-primary">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href={`https://wa.me/${TEAM[0].whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-emerald-50 transition-colors text-sm font-body text-muted-foreground hover:text-emerald-600">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href={`mailto:${TEAM[0].email}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors text-sm font-body text-muted-foreground hover:text-primary">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Consultants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {TEAM.slice(1).map(agent => (
              <div key={agent.name} className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all">
                <div className="relative">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-64 object-cover object-top"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'; }}
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-heading font-bold px-2.5 py-1 rounded text-white ${agent.badgeColor}`}>
                    {agent.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-0.5">{agent.name}</h3>
                  <p className="text-xs font-heading font-semibold text-accent mb-3">{agent.role}</p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mb-5">{agent.bio}</p>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
                    <a href={`tel:${agent.phone}`} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-[9px] font-body text-muted-foreground">Call</span>
                    </a>
                    <a href={`https://wa.me/${agent.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-emerald-50 transition-colors group">
                      <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
                      <span className="text-[9px] font-body text-muted-foreground">WhatsApp</span>
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group">
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
              We are actively recruiting experienced and ambitious real estate professionals. Build your business with the world's #1 real estate brand.
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