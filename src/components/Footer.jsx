import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://media.base44.com/images/public/6a16b586e769393fe031b9fd/196267c79_RemaxZamLogo.jpg"
                alt="REMAX ZAM"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Data-driven real estate investment consultancy in Dubai. We build wealth through strategic property acquisition.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[['Properties', '/properties'], ['Insights', '/insights'], ['Join Our Team', '/join'], ['Contact', '/contact']].map(([label, path]) => (
                <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Investment Focus</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p>Off-Plan Properties</p>
              <p>Ready Properties</p>
              <p>Golden Visa Packages</p>
              <p>Portfolio Management</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Dubai, UAE</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +971 4 XXX XXXX</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@remaxzam.ae</div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} REMAX ZAM. All rights reserved. RERA Licensed.
        </div>
      </div>
    </footer>
  );
}