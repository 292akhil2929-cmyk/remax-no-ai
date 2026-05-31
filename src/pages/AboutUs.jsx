import { Link } from 'react-router-dom';
import { Award, Globe, Users, TrendingUp, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TEAM = [
  {
    name: 'Faisal Contractor',
    role: 'CEO & Founder',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/10/Rectangle-284.jpg',
    bio: "Faisal Contractor is an accomplished serial entrepreneur and growth architect. As the founder and CEO of Embark Growth Marketing and the visionary behind REMAX ZAM, Faisal has earned a reputation for transforming how investors engage with the UAE's real estate market.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Sarah Zeidan',
    role: 'General Manager',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: "Sarah Zeidan leads operations at REMAX ZAM as General Manager, overseeing the team's consultative approach and ensuring every client and agent receives the highest standard of service.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Justice',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Justice-chukwudi.png',
    bio: "I use the market insights I learned at REMAX ZAM to provide unmatched support to my clients. The management's guidance gives me confidence to close deals and progress my career.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Imran',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Mohoammad-Imran.png',
    bio: 'The training and teamwork at REMAX ZAM helped me understand the industry faster and helps me keep track of latest updates within the industry.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Abu Bakkar',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Abu-bakkar-al-shams.png',
    bio: "I am honored to be a part of REMAX and REMAX ZAM. REMAX is a global brand and REMAX ZAM has shown me why, it's an absolute pleasure for me to be part of this brand.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Khaldoun',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-104.png',
    bio: "I recently closed my biggest deal, and I couldn't have done it without the hands on training I received at REMAX ZAM. The support from the team gave me the confidence to succeed.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Nour',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-105.png',
    bio: "I've been able to build my personal brand and attract clients with the training and marketing resources at REMAX ZAM. The support has helped me gain leads and grow consistently.",
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Manish',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Manish-Kapur.png',
    bio: 'I closed multiple high ticket deals back to back thanks to the mentorship and guidance provided by REMAX ZAM. Having access to a strong network made navigating the market so much easier.',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
];



export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400"
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-white/70 tracking-widest mb-3 uppercase">About REMAX ZAM</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-5 max-w-2xl">
            Dubai Real Estate Advisory, Built on Data & Trust
          </h1>
          <p className="text-base text-white/80 font-body max-w-xl leading-relaxed mb-8">
            REMAX ZAM takes a consultative, data-backed approach to real estate — acting as true advisors to investors and sellers, while building a clear growth pathway for our agents.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
            <Link to="/contact">Talk to Our Team <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>



      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">Our Mission</p>
              <h2 className="text-3xl font-display font-bold text-foreground mb-5">Built on Integrity, Driven by Data, Focused on Your Returns</h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                REMAX ZAM was founded with one goal: to bring institutional-grade investment thinking to individual property buyers. Too many international investors enter the Dubai market without access to real data, independent analysis, or advisors who prioritise their interests over commission.
              </p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                We changed that. Our team of licensed RERA advisors, investment analysts, and Golden Visa specialists works exclusively on the client side — meaning we help you identify the best opportunities across all developers and communities, not just the ones with the highest referral fees.
              </p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Whether you are a first-time buyer investing AED 500K or a seasoned portfolio investor deploying AED 50M+, our process is the same: understand your goals, analyse the market, and deliver a clear investment strategy backed by real numbers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: 'RERA Licensed', desc: 'Fully licensed by the Dubai Land Department and Real Estate Regulatory Agency' },
                { icon: Globe, title: 'Global Reach', desc: 'Serving investors from 40+ countries across 6 continents' },
                { icon: Users, title: 'Expert Team', desc: 'Multilingual team of 20+ advisors speaking 12 languages' },
                { icon: TrendingUp, title: 'Track Record', desc: 'Over AED 2 billion in successfully closed transactions since 2010' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card border border-border/50 rounded-lg p-5">
                  <Icon className="w-6 h-6 text-accent mb-3" />
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">The Team</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Meet Your Investment Advisors</h2>
            <p className="text-sm text-muted-foreground font-body max-w-lg mx-auto">A specialist team built on deep Dubai market knowledge, multilingual capability, and a client-first approach.</p>
          </div>
          {/* CEO Feature */}
          <div className="mb-8">
            <div className="bg-background border border-border/50 rounded-xl overflow-hidden flex flex-col md:flex-row">
              <img src={TEAM[0].photo} alt={TEAM[0].name} className="w-full md:w-72 h-64 md:h-auto object-cover object-top shrink-0" onError={(e) => { e.target.src = 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/12/man.jpg'; }} />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-foreground text-2xl mb-1">{TEAM[0].name}</h3>
                <p className="text-sm font-heading font-semibold text-accent mb-4">{TEAM[0].role}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-xl">{TEAM[0].bio}</p>
                <div className="flex gap-3 flex-wrap">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.slice(1).map(m => (
              <div key={m.name} className="bg-background border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
                <img src={m.photo} alt={m.name} className="w-full h-52 object-cover object-top" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'; }} />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-0.5">{m.name}</h3>
                  <p className="text-xs font-heading font-semibold text-accent mb-2">{m.role}</p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{m.bio}</p>
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
                    <a href={`tel:${m.phone}`} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group">
                      <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-[9px] font-body text-muted-foreground">Call</span>
                    </a>
                    <a href={`https://wa.me/${m.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-emerald-50 transition-colors group">
                      <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-emerald-600" />
                      <span className="text-[9px] font-body text-muted-foreground">WhatsApp</span>
                    </a>
                    <a href={`mailto:${m.email}`} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-[9px] font-body text-muted-foreground">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/team" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary hover:text-accent transition-colors">
              View Full Team Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3">Ready to Work With Our Team?</h2>
          <p className="text-white/75 font-body mb-7 text-sm">Book a free 30-minute investment consultation with one of our senior advisors.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-heading font-bold border-0" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 font-heading" asChild>
              <Link to="/join">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}