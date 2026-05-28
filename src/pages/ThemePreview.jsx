import { ArrowRight } from 'lucide-react';

const themes = [
  {
    id: 1,
    name: 'Modern Minimalist',
    subtitle: 'Recommended - Clean & Professional',
    primary: '#3B5B8F',
    accent: '#E5B857',
    background: '#FFFFFF',
    foreground: '#1A2333',
    secondary: '#F0F3F8',
    description: 'Deep teal-blue primary with vibrant gold. White navbar with transparent logo. Perfect for premium positioning.',
  },
  {
    id: 2,
    name: 'Premium Dark',
    subtitle: 'Modern SaaS Style',
    primary: '#1A1F2E',
    accent: '#D4944F',
    background: '#F2F2F2',
    foreground: '#0F1219',
    secondary: '#EBEBEB',
    description: 'Nearly black navbar with warm copper accents. Elegant and sophisticated.',
  },
  {
    id: 3,
    name: 'Emerald & Gold',
    subtitle: 'Luxury Real Estate',
    primary: '#2D6B57',
    accent: '#E5C94D',
    background: '#FCFCFC',
    foreground: '#1F3B34',
    secondary: '#E8F4F0',
    description: 'Rich emerald green symbolizing trust and wealth. Bright gold accents. Premium luxury feel.',
  },
  {
    id: 4,
    name: 'Ocean & Sunset',
    subtitle: 'Dubai Inspired',
    primary: '#2B7DD4',
    accent: '#FF7A3D',
    background: '#FFFFFF',
    foreground: '#0E2849',
    secondary: '#E8F1F8',
    description: 'Ocean blue with sunset orange. Unique Dubai identity reflecting sea + desert.',
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
              </div>
            </div>
          ))}
        </div>

        {/* Selection Instructions */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">How to Choose</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>✓ <strong>Modern Minimalist</strong> - Best for professional, clean aesthetic with white navbar</li>
            <li>✓ <strong>Premium Dark</strong> - Modern SaaS feel, sophisticated appearance</li>
            <li>✓ <strong>Emerald & Gold</strong> - Luxury real estate positioning with trust signals</li>
            <li>✓ <strong>Ocean & Sunset</strong> - Unique Dubai identity, warm + cool balance</li>
          </ul>
          <p className="text-sm text-blue-800 mt-4">Let me know which theme you prefer, and I'll apply it to your website!</p>
        </div>
      </div>
    </div>
  );
}