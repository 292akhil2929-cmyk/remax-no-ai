import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAudience } from '@/lib/AudienceContext';

const dropdownGroups = [
  {
    label: 'Buy & Rent',
    items: [
      { label: 'All Properties', path: '/properties' },
      { label: 'Off-Plan', path: '/off-plan' },
      { label: 'Area Guides', path: '/area-guides' },
    ],
  },
  {
    label: 'Sell',
    items: [
      { label: 'For Landlords', path: '/landlords' },
      { label: 'Our Services', path: '/services' },
    ],
  },
  {
    label: 'Invest',
    items: [
      { label: 'Golden Visa', path: '/golden-visa' },
      { label: 'Insights', path: '/insights' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/team' },
      { label: 'Blog', path: '/blog' },
      { label: 'Join Us', path: '/join' },
    ],
  },
];

const standaloneLinks = [
  { label: 'Dashboard', path: '/dashboard' },
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
        className={`flex items-center gap-1 text-sm font-body transition-colors duration-200 py-1 ${
          isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
        }`}
      >
        {group.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50">
          {group.items.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm font-body transition-colors ${
                location.pathname === item.path
                  ? 'text-black font-medium'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
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
  const { clearAudience } = useAudience();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link to="/" onClick={clearAudience} className="flex items-center shrink-0">
            <img
              src="https://media.base44.com/images/public/6a16b586e769393fe031b9fd/202b99f88_RemaxZamLogo.webp"
              alt="REMAX ZAM"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {dropdownGroups.map(group => (
              <DropdownMenu key={group.label} group={group} location={location} />
            ))}
            {standaloneLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className="bg-black hover:bg-gray-800 text-white font-heading font-semibold rounded-xl border-0 px-5 text-sm"
              size="sm"
              asChild
            >
              <Link to="/contact">Get Advice</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-black p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {dropdownGroups.map(group => (
              <div key={group.label}>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pt-4 pb-1">{group.label}</p>
                {group.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-2 text-sm font-body rounded-lg transition-colors ${
                      location.pathname === item.path ? 'text-black font-medium bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-2 space-y-1">
              {standaloneLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 px-2 text-sm font-body rounded-lg transition-colors ${
                    location.pathname === link.path ? 'text-black font-medium' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button className="w-full mt-3 bg-black hover:bg-gray-800 text-white font-semibold border-0 rounded-xl" size="sm" asChild>
              <Link to="/contact" onClick={() => setOpen(false)}>Get Investment Advice</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}