import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Bed, Bath, Maximize, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const LOCATION_IMAGES = {
  'dubai marina': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  'downtown dubai': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
  'palm jumeirah': 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80',
  'business bay': 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=600&q=80',
  'jumeirah village circle': 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80',
  'jvc': 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80',
  'dubai hills': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  'al furjan': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  'motor city': 'https://images.unsplash.com/photo-1582407947304-fd86f28f5b38?w=600&q=80',
  'dubai sports city': 'https://images.unsplash.com/photo-1534240177524-30dc7a82f773?w=600&q=80',
  'dubai land': 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
  'dubailand': 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
  'mirdif': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  'arabian ranches': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  'jumeirah': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'deira': 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&q=80',
  'bur dubai': 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&q=80',
};

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80';

function getFallbackImage(property) {
  const loc = (property.location || property.community || '').toLowerCase();
  for (const [key, url] of Object.entries(LOCATION_IMAGES)) {
    if (loc.includes(key)) return url;
  }
  return DEFAULT_FALLBACK;
}

export default function PropertyCard({ property }) {
  const queryClient = useQueryClient();
  const images = (property.gallery_images?.length ? property.gallery_images : null) ||
    (property.image_url ? [property.image_url] : [getFallbackImage(property)]);
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = (e) => {
    e.preventDefault();
    setImgIndex(i => (i - 1 + images.length) % images.length);
  };
  const nextImg = (e) => {
    e.preventDefault();
    setImgIndex(i => (i + 1) % images.length);
  };

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
          <img
            src={images[imgIndex] || getFallbackImage(property)}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.src = DEFAULT_FALLBACK; }}
          />

          {/* Prev / Next arrows — only shown when multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Dot indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, i) => (
                  <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white' : 'bg-white/50'}`} />
                ))}
              </div>
            </>
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