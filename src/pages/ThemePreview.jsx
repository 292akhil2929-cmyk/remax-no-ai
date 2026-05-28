import { ArrowRight } from 'lucide-react';

const themes = [
  {
    id: 1,
    name: 'RE/MAX Brand Bold',
    subtitle: 'Your Brand - Navy & Deep Gold CTAs',
    primary: '#001a4d',
    accent: '#B8954F',
    background: '#FFFFFF',
    foreground: '#000000',
    secondary: '#F5F5F5',
    description: 'Bold navy blue with deeper, richer gold for large buttons. Deep red used in badges/text. Premium luxury feel perfect for big panels.',
  },
  {
    id: 2,
    name: 'RE/MAX Premium Dark',
    subtitle: 'Your Brand - Navy & Deep Gold on Gray',
    primary: '#001a4d',
    accent: '#B8954F',
    background: '#F8F8F8',
    foreground: '#000000',
    secondary: '#EFEFEF',
    description: 'Navy with deeper, richer gold CTAs on light gray background. Deep red accents in smaller elements. High luxury positioning.',
  },
  {
    id: 3,
    name: 'RE/MAX Clean White',
    subtitle: 'Your Brand - Minimalist Deep Gold',
    primary: '#0d3b70',
    accent: '#C9A961',
    background: '#FFFFFF',
    foreground: '#1A1A1A',
    secondary: '#F9F9F9',
    description: 'Softer navy with deeper gold for visibility. Clean modern look. Deep red in badges/featured tags.',
  },
  {
    id: 4,
    name: 'RE/MAX Sophisticated',
    subtitle: 'Your Brand - Navy & Rich Gold',
    primary: '#001a4d',
    accent: '#A88542',
    background: '#FAFAFA',
    foreground: '#0A0A0A',
    secondary: '#F2F2F2',
    description: 'Deep navy primary with rich, deeper gold CTAs. Sophisticated and premium. Deep red used for text highlights.',
  },
  {
    id: 5,
    name: 'RE/MAX Dynamic',
    subtitle: 'Your Brand - Navy & Deep Gold',
    primary: '#002d5e',
    accent: '#B8954F',
    background: '#FFFFFF',
    foreground: '#000000',
    secondary: '#F0F0F0',
    description: 'Slightly lighter navy with deeper gold buttons. High energy and modern. Strong visibility on large CTAs.',
  },
  {
    id: 6,
    name: 'RE/MAX Luxury',
    subtitle: 'Your Brand - Deep Navy & Deep Gold',
    primary: '#0a1e3f',
    accent: '#A88542',
    background: '#FCFCFC',
    foreground: '#0D0D0D',
    secondary: '#F7F7F7',
    description: 'Very dark navy with rich, deeper gold buttons. Most premium feel. Deep red in featured/badge elements.',
  },
];

export default function ThemePreview() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Color Theme Options</h1>
          <p className="text-lg text-gray-600">Choose your preferred theme for REMAX ZAM</p>
        </div>

        <div className="space-y-8">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{theme.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{theme.subtitle}</p>
                  <p className="text-gray-700 mt-3">{theme.description}</p>
                </div>
                <div className="flex gap-3 flex-wrap md:flex-col">
                  <div className="w-16 h-16 rounded-lg shadow-md" style={{ backgroundColor: theme.primary }} title="Primary Color" />
                  <div className="w-16 h-16 rounded-lg shadow-md border-2 border-gray-300" style={{ backgroundColor: theme.accent }} title="Accent Color" />
                  <div className="w-16 h-16 rounded-lg shadow-md border-2 border-gray-300" style={{ backgroundColor: theme.background }} title="Background" />
                </div>
              </div>

              {/* Preview */}
              <div className="border-t border-gray-200 p-8 space-y-6 bg-gray-50">
                {/* Navbar Preview */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Navbar & Logo</p>
                  <div className="rounded-lg overflow-hidden shadow-md" style={{ backgroundColor: theme.background, borderBottom: `3px solid ${theme.primary}` }}>
                    <div className="h-16 flex items-center px-6 gap-8">
                      {/* Logo Box */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md" style={{ backgroundColor: theme.primary }}></div>
                        <span className="font-bold text-sm" style={{ color: theme.foreground }}>REMAX ZAM</span>
                      </div>
                      {/* Nav Links */}
                      <div className="flex gap-6 flex-1">
                        <span className="text-xs font-medium" style={{ color: theme.foreground }}>Properties</span>
                        <span className="text-xs font-medium" style={{ color: theme.accent }}>Services</span>
                        <span className="text-xs font-medium" style={{ color: theme.foreground }}>Insights</span>
                      </div>
                      {/* CTA Button */}
                      <button className="text-xs font-semibold px-4 py-2 rounded-md text-white" style={{ backgroundColor: theme.accent, color: theme.primary }}>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hero Section Preview */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Hero Section</p>
                  <div className="rounded-lg h-40 relative overflow-hidden shadow-md" style={{ backgroundColor: theme.primary }}>
                    <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Invest in Dubai Real Estate</h3>
                      <p className="text-sm text-white/80 mb-4">Premium properties for savvy investors</p>
                      <button className="w-fit px-6 py-2 rounded-md text-sm font-semibold" style={{ backgroundColor: theme.accent, color: theme.primary }}>
                        Browse Properties →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cards Preview */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Property Cards & Components</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg overflow-hidden shadow-md" style={{ backgroundColor: theme.background, border: `1px solid ${theme.secondary}` }}>
                        <div className="h-28" style={{ backgroundColor: theme.secondary }}></div>
                        <div className="p-4">
                          <p className="text-xs font-semibold text-white px-2 py-1 rounded w-fit" style={{ backgroundColor: theme.accent }}>Featured</p>
                          <h4 className="font-bold text-sm mt-2" style={{ color: theme.foreground }}>Apartment, Dubai Marina</h4>
                          <p className="text-xs mt-1" style={{ color: theme.accent }}>AED 850,000</p>
                          <button className="text-xs mt-3 font-semibold" style={{ color: theme.primary }}>View Details →</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Button Styles</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>Primary</button>
                    <button className="px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: theme.accent }}>Accent / CTA</button>
                    <button className="px-4 py-2 rounded-md text-sm font-semibold border-2" style={{ color: theme.primary, borderColor: theme.primary }}>Outline</button>
                    <button className="px-4 py-2 rounded-md text-sm font-semibold" style={{ backgroundColor: theme.secondary, color: theme.foreground }}>Secondary</button>
                  </div>
                </div>

                {/* Stats Section */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Stats Bar</p>
                  <div className="rounded-lg p-6 shadow-md flex justify-around" style={{ backgroundColor: theme.primary }}>
                    {['2,450+', '15 Years', '98%', '500+'].map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xl font-bold text-white">{stat}</p>
                        <p className="text-xs text-white/70 mt-1">Properties</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Badge & Tags */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Badges & Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme.accent }}>Featured</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: theme.primary }}>Premium</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded border" style={{ color: theme.primary, borderColor: theme.primary }}>Off-Plan</span>
                    <span className="text-xs font-semibold px-3 py-1 rounded" style={{ backgroundColor: theme.secondary, color: theme.foreground }}>New</span>
                  </div>
                </div>

                {/* Footer Preview */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Footer</p>
                  <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: theme.foreground }}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-bold text-white mb-2">Properties</p>
                        <p className="text-xs text-white/70">All Properties</p>
                        <p className="text-xs text-white/70 mt-1">Off-Plan</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-2">Services</p>
                        <p className="text-xs text-white/70">Golden Visa</p>
                        <p className="text-xs text-white/70 mt-1">For Landlords</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-2">Resources</p>
                        <p className="text-xs text-white/70">Blog</p>
                        <p className="text-xs text-white/70 mt-1">Insights</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: theme.accent }}>Contact Us</p>
                        <p className="text-xs text-white/70 mt-2">+971 4 XXX XXXX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Instructions */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">RE/MAX Brand Themes</h3>
          <p className="text-sm text-blue-800 mb-3">All themes below are based on your RE/MAX ZAM brand colors (Navy Blue & Red):</p>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ <strong>RE/MAX Brand Bold</strong> - Direct brand match. Bold and commanding. Recommended.</li>
            <li>✓ <strong>RE/MAX Premium Dark</strong> - Gray background option for softer luxury feel</li>
            <li>✓ <strong>RE/MAX Clean White</strong> - Minimalist approach, maximum clarity</li>
            <li>✓ <strong>RE/MAX Sophisticated</strong> - Deep navy with burgundy. Premium positioning.</li>
            <li>✓ <strong>RE/MAX Dynamic</strong> - Bright red, energetic and modern</li>
            <li>✓ <strong>RE/MAX Luxury</strong> - Darkest navy, most premium feel</li>
          </ul>
          <p className="text-sm text-blue-800 mt-4">All options maintain your brand identity while offering different visual approaches. Let me know which resonates most!</p>
        </div>
      </div>
    </div>
  );
}