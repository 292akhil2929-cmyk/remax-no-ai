import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const dropdownGroups = [
  {
    label: 'Properties',
    items: [
      { label: 'All Properties', path: '/properties' },
      { label: 'Off-Plan', path: '/off-plan' },
      { label: 'Area Guides', path: '/area-guides' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Golden Visa', path: '/golden-visa' },
      { label: 'For Landlords', path: '/landlords' },
      { label: 'Our Services', path: '/services' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', path: '/blog' },
      { label: 'Insights', path: '/insights' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/team' },
      { label: 'Join Us', path: '/join' },
    ],
  },
];

const standaloneLinks = [
  { label: 'Home', path: '/' },
  { label: 'My Dashboard', path: '/dashboard' },
  { label: 'Content Hub', path: '/admin/content' },
  { label: 'Contact', path: '/contact' },
];

function DropdownMenu({ group, location }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = group.items.some(i => location.pathname === i.path);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 text-sm font-body font-medium transition-colors duration-200 ${
          isActive ? 'text-[#C9A84C]' : 'text-white/80 hover:text-white'
        }`}
      >
        {group.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-border/20 py-1 z-50">
          {group.items.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm font-body transition-colors ${
                location.pathname === item.path
                  ? 'text-primary font-medium bg-primary/5'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141E30] border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-white rounded-lg px-3 py-1.5">
              <img
                src="https://media.base44.com/images/public/6a16b586e769393fe031b9fd/855779b12_RemaxZamLogo.webp"
                alt="REMAX ZAM"
                className="h-7 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {dropdownGroups.map(group => (
              <DropdownMenu key={group.label} group={group} location={location} />
            ))}
            <div className="w-px h-4 bg-white/20" />
            {standaloneLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body font-medium transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-[#C9A84C]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button
              className="bg-[#C9A84C] hover:bg-[#b8953e] text-[#141E30] font-semibold rounded-lg border-0"
              size="sm"
              asChild
            >
              <Link to="/contact">Get Investment Advice</Link>
            </Button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-[#1a2540] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {dropdownGroups.map(group => (
              <div key={group.label}>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider px-2 pt-3 pb-1">{group.label}</p>
                {group.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2 px-2 text-sm font-body rounded ${
                      location.pathname === item.path ? 'text-[#C9A84C]' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-white/10 pt-3 mt-2 space-y-1">
              {standaloneLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 px-2 text-sm font-body ${
                    location.pathname === link.path ? 'text-[#C9A84C]' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button className="w-full mt-3 bg-[#C9A84C] hover:bg-[#b8953e] text-[#141E30] font-semibold border-0" size="sm" asChild>
              <Link to="/contact" onClick={() => setOpen(false)}>Get Investment Advice</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}