import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border/50 flex items-center justify-center text-muted-foreground">
        No Image
      </div>
    );
  }

  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-border/50">
        <img
          src={images[current]}
          alt={`${title} - ${current + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=675&q=80';
          }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  current === idx ? 'border-primary' : 'border-border/50 hover:border-primary/50'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=100&q=80';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}