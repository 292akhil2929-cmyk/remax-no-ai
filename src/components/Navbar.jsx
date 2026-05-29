import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAudience } from '@/lib/AudienceContext';

const NAV_GROUPS = [
  {
    label: 'Properties',
    items: [
      { label: 'Browse Listings', path: '/properties', desc: 'Apartments, villas and commercial across Dubai' },
      { label: 'Off-Plan', path: '/off-plan', desc: 'Buy before completion at launch pricing' },
      { label: 'Sell With Us', path: '/landlords', desc: 'Free valuation and a clear plan to sell' },
      { label: 'Area Guides', path: '/area-guides', desc: 'Which communities actually perform best' },
    ],
  },
  {
    label: 'Invest',
    items: [
      { label: 'High Yield Properties', path: '/high-roi', desc: 'The communities and projects generating 7 to 11% returns' },
      { label: '10% Net ROI — Guaranteed', path: '/dugasta', desc: 'A contractually guaranteed 10% return for 10 years. No service charges. Full buyback.' },
      { label: 'Golden Visa', path: '/golden-visa', desc: 'Invest AED 2M in property and get UAE residency for the family' },
      { label: 'Off-Plan Projects', path: '/off-plan', desc: 'Get in early and lock in launch pricing before handover' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Market Insights', path: '/insights', desc: 'What the data is saying about the Dubai market right now' },
      { label: 'Developer Profiles', path: '/developers', desc: 'Who to trust, who to avoid, and what each one actually delivers' },
      { label: 'Community Guides', path: '/area-guides', desc: 'Yield, growth and lifestyle by neighbourhood' },
      { label: 'Blog', path: '/blog', desc: 'Plain-English guides for Dubai property investors' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'What We Do', path: '/services', desc: 'Everything we handle so you do not have to' },
      { label: 'Join as an Agent', path: '/join', desc: 'Work with one of the most active teams in Dubai' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', path: '/about', desc: 'Who we are and why we do things differently' },
      { label: 'The Team', path: '/team', desc: 'The advisors you will actually be working with' },
      { label: 'Contact', path: '/contact', desc: 'Call, message or come in. We are easy to reach.' },
    ],
  },
];

function NavDropdown({ group, location }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = group.items.some(i => location.pathname === i.path);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 text-sm font-body py-1 transition-colors duration-200 ${
          isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
        }`}
      >
        {group.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 rounded-2xl py-2 z-50 overflow-hidden">
          {group.items.map(item => (
            <Link
              key={item.path + item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex flex-col px-5 py-3 transition-colors hover:bg-gray-50 ${
                location.pathname === item.path ? 'bg-gray-50' : ''
              }`}
            >
              <span className={`text-sm font-body font-medium ${location.pathname === item.path ? 'text-black' : 'text-gray-700'}`}>
                {item.label}
              </span>
              <span className="text-xs text-gray-400 font-body mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { clearAudience } = useAudience();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <Link to="/" onClick={clearAudience} className="flex items-center shrink-0">
            <img
              src="https://media.base44.com/images/public/6a16b586e769393fe031b9fd/202b99f88_RemaxZamLogo.webp"
              alt="REMAX ZAM"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_GROUPS.map(group => (
              <NavDropdown key={group.label} group={group} location={location} />
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/dashboard" className="text-sm text-gray-500 hover:text-black font-body transition-colors">
              Dashboard
            </Link>
            <Link
              to="/contact"
              className="bg-black hover:bg-gray-800 text-white font-heading font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl transition-colors"
            >
              Get Advice
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-black p-1.5 -mr-1.5" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-5 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV_GROUPS.map(group => (
              <div key={group.label}>
                <p className="text-xs font-heading font-bold text-gray-300 uppercase tracking-wider px-2 pt-5 pb-2">{group.label}</p>
                {group.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-2 text-sm font-body rounded-lg transition-colors ${
                      location.pathname === item.path ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-5 mt-2 border-t border-gray-100 space-y-2">
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block py-2.5 px-2 text-sm font-body text-gray-500 hover:text-black">Dashboard</Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full mt-4 bg-black text-white font-heading font-bold text-xs tracking-wider uppercase text-center py-3.5 rounded-xl"
            >
              Get Investment Advice
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}