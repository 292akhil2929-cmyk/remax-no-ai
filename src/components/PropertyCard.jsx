import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function PropertyCard({ property }) {
  return (
    <Link to={`/properties/${property.id}`} className="group block">
      <div className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          {property.image_url ? (
            <img src={property.image_url} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">{property.category}</Badge>
            {property.featured && <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>}
          </div>
          {property.expected_roi && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
              <TrendingUp className="w-3 h-3 text-accent" />
              <span className="text-xs font-heading font-semibold text-accent">{property.expected_roi}% ROI</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-primary font-heading font-medium tracking-wide mb-1">{property.community || property.location}</p>
          <h3 className="font-heading font-semibold text-foreground text-sm mb-2 line-clamp-1">{property.title}</h3>
          <p className="text-lg font-heading font-bold text-foreground mb-3">
            AED {(property.price_aed || 0).toLocaleString()}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
            {property.bedrooms != null && (
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {property.bedrooms}</span>
            )}
            {property.bathrooms != null && (
              <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {property.bathrooms}</span>
            )}
            {property.area_sqft != null && (
              <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {property.area_sqft} sqft</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}