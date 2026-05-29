import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function ImageUploadSection({ propertyId, onImageUploaded }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    setError(null);

    try {
      const newImages = [];
      for (const file of files) {
        try {
          const uploadRes = await base44.integrations.Core.UploadFile({ file });
          newImages.push({ url: uploadRes.file_url, name: file.name });
        } catch (err) {
          throw err;
        }
      }

      // Set primary image (first upload) if no image exists
      if (uploadedImages.length === 0 && newImages.length > 0) {
        await base44.entities.Property.update(propertyId, { image_url: newImages[0].url });
      }

      setUploadedImages(prev => [...prev, ...newImages]);
      setTimeout(() => {
        if (onImageUploaded) onImageUploaded();
      }, 1500);
    } catch (err) {
      setError(err?.response?.data?.error || err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white/50 rounded-lg border border-emerald-100">
      <p className="text-xs font-heading font-semibold text-foreground mb-3">Add Featured Image</p>
      
      <div className="flex gap-2 mb-3">
        <label className="flex-1">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            multiple
            className="hidden"
          />
          <Button
            asChild
            disabled={uploading}
            variant="outline"
            size="sm"
            className="w-full text-xs cursor-pointer"
          >
            <span>
              {uploading ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin mr-1" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-3 h-3 mr-1" /> Choose Images
                </>
              )}
            </span>
          </Button>
        </label>
      </div>

      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          {uploadedImages.map((img, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-emerald-800 truncate">{img.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="mt-2 flex items-start gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded p-2">
          <AlertCircle className="w-3 h-3 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}