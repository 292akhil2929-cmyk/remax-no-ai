import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Bed, Bath, Maximize, TrendingUp, MapPin, Calendar, Building2, ArrowLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PropertyViewingForm from '../components/PropertyViewingForm';
import CurrencyConverter from '../components/CurrencyConverter';
import MortgageCalculator from '../components/MortgageCalculator';
import ROICalculator from '../components/ROICalculator';
import PropertyInsightsPanel from '../components/PropertyInsightsPanel';
import PropertyImageGallery from '../components/PropertyImageGallery';

export default function PropertyDetail() {
  const { propertyId } = useParams();
  const { data: property, isLoading } = useQuery({
    queryKey: ['property', propertyId],
    queryFn: () => base44.entities.Property.get(propertyId),
  });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>;
  }

  if (!property) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Property not found</div>;
  }

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Property Details + Calculators */}
          <div className="lg:col-span-2 space-y-6">
            <PropertyImageGallery
              images={property.gallery_images || (property.image_url ? [property.image_url] : [])}
              title={property.title}
            />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{property.category}</Badge>
                <Badge variant="outline">{property.property_type}</Badge>
                {property.status && <Badge className={property.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : ''}>{property.status}</Badge>}
              </div>
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">{property.title}</h1>
              <p className="flex items-center gap-1 text-muted-foreground font-body text-sm"><MapPin className="w-4 h-4" /> {property.location}</p>
            </div>

            <div className="text-3xl font-heading font-bold text-primary">AED {(property.price_aed || 0).toLocaleString()}</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                property.bedrooms != null && { icon: Bed, label: 'Bedrooms', value: property.bedrooms },
                property.bathrooms != null && { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
                property.area_sqft != null && { icon: Maximize, label: 'Area', value: `${property.area_sqft} sqft` },
                property.expected_roi != null && { icon: TrendingUp, label: 'Expected ROI', value: `${property.expected_roi}%` },
              ].filter(Boolean).map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground font-body">{label}</p>
                  <p className="font-heading font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>

            {property.description && (
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">About This Property</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{property.description}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {property.developer && (
                <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /><span className="text-sm font-body"><span className="text-muted-foreground">Developer:</span> <span className="text-foreground">{property.developer}</span></span></div>
              )}
              {property.completion_date && (
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /><span className="text-sm font-body"><span className="text-muted-foreground">Completion:</span> <span className="text-foreground">{property.completion_date}</span></span></div>
              )}
            </div>

            {/* Investment Intelligence */}
            <PropertyInsightsPanel
              location={property.location}
              developer={property.developer}
              community={property.community}
            />

            {/* Calculators */}
            <div className="space-y-6 pt-2">
              <ROICalculator
                propertyPrice={property.price_aed}
                rentalYield={property.rental_yield}
                expectedRoi={property.expected_roi}
              />
              <MortgageCalculator propertyPrice={property.price_aed} />
            </div>
          </div>

          {/* Right: Viewing form + Currency Converter */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Book a Viewing
                </h3>
                <PropertyViewingForm property={property} />
              </div>
              <CurrencyConverter priceAED={property.price_aed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}