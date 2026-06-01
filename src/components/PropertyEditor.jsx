import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { X, Loader2, AlertCircle } from 'lucide-react';
import PropertyImageUpload from './PropertyImageUpload';
import AgentSelector from './AgentSelector';

export default function PropertyEditor({ property, onClose, onSaved }) {
  const [formData, setFormData] = useState({
    title: property.title || '',
    location: property.location || '',
    community: property.community || '',
    property_type: property.property_type || 'Apartment',
    transaction_type: property.transaction_type || 'Residential Sale',
    listing_status: property.listing_status || '',
    bedrooms: property.bedrooms || '',
    bathrooms: property.bathrooms || '',
    area_sqft: property.area_sqft || '',
    price_aed: property.price_aed || '',
    description: property.description || '',
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value === '' ? null : (isNaN(value) ? value : Number(value)) }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      await base44.entities.Property.update(property.id, formData);
      if (onSaved) onSaved();
      onClose();
    } catch (err) {
      setError(err?.response?.data?.error || err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 bg-card border-b border-border/50">
          <h2 className="font-heading font-bold text-foreground">Edit Property</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-1 block">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Community</label>
              <input type="text" name="community" value={formData.community} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Property Type</label>
              <select name="property_type" value={formData.property_type} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                {['Apartment', 'Villa', 'Penthouse', 'Townhouse', 'Land', 'Office', 'Retail', 'Warehouse', 'Shop'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Transaction Type</label>
              <select name="transaction_type" value={formData.transaction_type} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                {['Residential Sale', 'Residential Rental', 'Commercial Sale', 'Commercial Lease'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Listing Status</label>
              <select name="listing_status" value={formData.listing_status || ''} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">—</option>
                {['Off-Plan', 'Ready', 'Resale'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Price (AED)</label>
              <input type="number" name="price_aed" value={formData.price_aed} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Bedrooms</label>
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Bathrooms</label>
              <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-1 block">Area (sqft)</label>
              <input type="number" name="area_sqft" value={formData.area_sqft} onChange={handleChange} className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-1 block">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-3 py-2 text-sm border border-input rounded-lg font-body bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>

          <PropertyImageUpload
            propertyId={property.id}
            currentImages={property.gallery_images || (property.image_url ? [property.image_url] : [])}
            currentHero={property.image_url || ''}
            onImagesUpdated={onSaved}
          />

          <AgentSelector
            propertyId={property.id}
            currentAgentName={property.agent_name}
            onAgentSelected={() => {}}
          />

          {error && (
            <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="font-body">{error}</span>
            </div>
          )}

          <div className="flex gap-2 pt-4 border-t border-border/50">
            <Button variant="outline" onClick={onClose} disabled={saving} className="flex-1">Cancel</Button>
            <Button onClick={handleSave} disabled={saving} className="flex-1">
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}