import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

export default function Properties() {
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');
  const [search, setSearch] = useState('');

  const { data: properties = [], isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: () => base44.entities.Property.list('-created_date', 50),
  });

  const filtered = properties.filter(p => {
    if (category !== 'all' && p.category !== category) return false;
    if (type !== 'all' && p.property_type !== type) return false;
    if (search && !p.title?.toLowerCase().includes(search.toLowerCase()) && !p.location?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">INVESTMENT OPPORTUNITIES</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold italic text-foreground mb-8">Dubai Properties</h1>
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
    </div>
  );
}