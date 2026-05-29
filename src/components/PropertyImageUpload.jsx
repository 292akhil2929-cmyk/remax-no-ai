import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function ImageUploadSection({ propertyId, onImageUploaded }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setUploadedImage(null);

    try {
      const uploadRes = await base44.integrations.Core.UploadFile(file);
      const imageUrl = uploadRes.file_url;

      await base44.entities.Property.update(propertyId, { image_url: imageUrl });
      setUploadedImage({ url: imageUrl, name: file.name });

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
      
      {!uploadedImage ? (
        <div className="flex gap-2">
          <label className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
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
                    <Upload className="w-3 h-3 mr-1" /> Choose Image
                  </>
                )}
              </span>
            </Button>
          </label>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-emerald-800 truncate">{uploadedImage.name}</p>
          </div>
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