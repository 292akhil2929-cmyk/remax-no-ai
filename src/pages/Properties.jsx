import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import PropertySEOContent from '../components/PropertySEOContent';

export default function Properties() {
  const urlParams = new URLSearchParams(window.location.search);
  const [category, setCategory] = useState('all');
  const [type, setType] = useState(urlParams.get('type') || 'all');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState(urlParams.get('priceRange') || 'all');
  const [bedrooms, setBedrooms] = useState('all');
  const [community, setCommunity] = useState(urlParams.get('community') || 'all');

  const { data: properties = [], isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: () => base44.entities.Property.list('-created_date', 50),
  });

  const communities = [...new Set(properties.map(p => p.community).filter(Boolean))].sort();

  const priceRanges = {
    'under-1m': [0, 1_000_000],
    '1m-3m': [1_000_000, 3_000_000],
    '3m-5m': [3_000_000, 5_000_000],
    '5m-10m': [5_000_000, 10_000_000],
    'above-10m': [10_000_000, Infinity],
  };

  const filtered = properties.filter(p => {
    if (category !== 'all' && p.category !== category) return false;
    if (type !== 'all' && p.property_type !== type) return false;
    if (search && !p.title?.toLowerCase().includes(search.toLowerCase()) && !p.location?.toLowerCase().includes(search.toLowerCase())) return false;
    if (priceRange !== 'all') {
      const [min, max] = priceRanges[priceRange];
      if (!p.price_aed || p.price_aed < min || p.price_aed > max) return false;
    }
    if (bedrooms !== 'all') {
      if (bedrooms === '4+') { if (!p.bedrooms || p.bedrooms < 4) return false; }
      else if (String(p.bedrooms) !== bedrooms) return false;
    }
    if (community !== 'all' && p.community !== community) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-3 uppercase">Dubai Real Estate Investment</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-3">Properties for Sale in Dubai</h1>
          <p className="text-base text-muted-foreground font-body max-w-2xl mb-8 leading-relaxed">
            Browse exclusive off-plan launches, ready properties, and resale opportunities across Dubai&apos;s most sought-after communities. Handpicked by REMAX ZAM&apos;s expert advisors for maximum ROI and long-term capital growth.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search by name or location..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 bg-white border-border" />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-40 bg-white border-border"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Off-Plan">Off-Plan</SelectItem>
                  <SelectItem value="Ready">Ready</SelectItem>
                  <SelectItem value="Resale">Resale</SelectItem>
                </SelectContent>
              </Select>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-40 bg-white border-border"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Penthouse">Penthouse</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-48 bg-white border-border"><SelectValue placeholder="Price Range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="under-1m">Under AED 1M</SelectItem>
                  <SelectItem value="1m-3m">AED 1M – 3M</SelectItem>
                  <SelectItem value="3m-5m">AED 3M – 5M</SelectItem>
                  <SelectItem value="5m-10m">AED 5M – 10M</SelectItem>
                  <SelectItem value="above-10m">Above AED 10M</SelectItem>
                </SelectContent>
              </Select>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger className="w-full sm:w-44 bg-white border-border"><SelectValue placeholder="Bedrooms" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Bedrooms</SelectItem>
                  <SelectItem value="0">Studio</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4+">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
              <Select value={community} onValueChange={setCommunity}>
                <SelectTrigger className="w-full sm:flex-1 bg-white border-border"><SelectValue placeholder="Community" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Communities</SelectItem>
                  {communities.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => <div key={i} className="bg-card border border-border/50 rounded-lg h-80 animate-pulse" />)}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">No properties found. Contact us for exclusive off-market opportunities.</p>
            </div>
          )}
        </div>
      </section>
      <PropertySEOContent />
    </div>
  );
}