import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Heart } from 'lucide-react';
import { Bed, Bath, Maximize, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function PropertyCard({ property }) {
  const queryClient = useQueryClient();

  const { data: saved = [] } = useQuery({
    queryKey: ['savedProperties'],
    queryFn: () => base44.entities.SavedProperty.list(),
  });

  const isSaved = saved.some(s => s.property_id === property.id);
  const savedRecord = saved.find(s => s.property_id === property.id);

  const saveMutation = useMutation({
    mutationFn: () => base44.entities.SavedProperty.create({
      property_id: property.id,
      property_title: property.title,
      property_image: property.image_url,
      property_price: property.price_aed,
      property_location: property.community || property.location,
      property_type: property.property_type,
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['savedProperties'] }),
  });

  const unsaveMutation = useMutation({
    mutationFn: () => base44.entities.SavedProperty.delete(savedRecord.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['savedProperties'] }),
  });

  const toggleSave = (e) => {
    e.preventDefault();
    if (isSaved) unsaveMutation.mutate();
    else saveMutation.mutate();
  };
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
          <button
            onClick={toggleSave}
            className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all ${
              isSaved ? 'bg-red-500 text-white' : 'bg-white/90 text-muted-foreground hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap max-w-[70%]">
            {property.listing_status === 'Off-Plan' && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-[#B87333] text-white shadow">Off-Plan</span>
            )}
            {property.listing_status === 'Ready' && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-emerald-600 text-white shadow">Ready</span>
            )}
            {property.listing_status === 'Resale' && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-amber-600 text-white shadow">Resale</span>
            )}
            {(property.transaction_type === 'Residential Rental' || property.transaction_type === 'Commercial Lease') && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-purple-600 text-white shadow">For Rent</span>
            )}
            {(property.transaction_type === 'Commercial Sale' || property.transaction_type === 'Commercial Lease') && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-slate-700 text-white shadow">Commercial</span>
            )}
            {property.featured && (
              <span className="text-xs font-heading font-semibold px-2.5 py-1 rounded bg-primary text-white shadow">Featured</span>
            )}
          </div>
          {property.expected_roi && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-amber-500 rounded-md px-2 py-1 shadow">
              <TrendingUp className="w-3 h-3 text-white" />
              <span className="text-xs font-heading font-bold text-white">{property.expected_roi}% ROI</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-primary font-heading font-medium tracking-wide mb-1">{property.community || property.location}</p>
          <h3 className="font-heading font-semibold text-foreground text-sm mb-2 line-clamp-1">{property.title}</h3>
          <p className="text-lg font-heading font-bold text-foreground mb-3">
            {property.price_label
              ? property.price_label
              : property.transaction_type === 'Residential Rental' || property.transaction_type === 'Commercial Lease'
                ? `AED ${(property.price_aed || 0).toLocaleString()}/yr`
                : `AED ${(property.price_aed || 0).toLocaleString()}`
            }
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