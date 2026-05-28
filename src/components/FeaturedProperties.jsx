import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyCard from './PropertyCard';

export default function FeaturedProperties() {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: () => base44.entities.Property.filter({ featured: true }, '-created_date', 6),
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-card border border-border/50 rounded-lg h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">CURATED ASSETS</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold italic text-foreground">Featured Investments</h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
            <Link to="/properties">View All <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground font-body">
            <p>Premium properties coming soon. Contact us for early access.</p>
            <Button className="mt-4" asChild><Link to="/contact">Get Early Access</Link></Button>
          </div>
        )}
      </div>
    </section>
  );
}