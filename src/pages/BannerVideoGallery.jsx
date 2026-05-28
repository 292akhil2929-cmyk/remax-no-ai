import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const videoOptions = [
  {
    id: 1,
    title: 'Dubai Luxury Lifestyle',
    description: 'Premium cinematic view of Dubai skyline with smooth camera movement. Perfect for luxury real estate.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
    source: 'High-Quality HD',
  },
  {
    id: 2,
    title: 'Modern Architecture & Skyline',
    description: 'Stunning aerial view of modern cityscape. High contrast, luxury aesthetic.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
    source: 'Premium Cinematic',
  },
  {
    id: 3,
    title: 'Urban Luxury & Waterfront',
    description: 'Beautiful flowing water with sophisticated lighting. Modern, upscale vibe.',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
    source: 'Professional Grade',
  },
];

export default function BannerVideoGallery() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    console.log(`Selected video ${id}: ${videoOptions.find(v => v.id === id).title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-display font-black text-white mb-2">Homepage Banner Video Options</h1>
        <p className="text-gray-400 mb-12">Click play on each video below to preview. Select the one you prefer.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videoOptions.map((video) => (
            <div key={video.id} className="bg-slate-800 rounded-lg overflow-hidden border-2 transition-all" style={{ borderColor: selected === video.id ? '#B87333' : '#334155' }}>
              {/* Video Player */}
              <div className="relative bg-black h-64">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{video.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{video.description}</p>
                <p className="text-xs text-gray-500 mb-6">Source: {video.source}</p>

                {/* Select Button */}
                <Button
                  onClick={() => handleSelect(video.id)}
                  variant={selected === video.id ? 'default' : 'outline'}
                  className="w-full"
                >
                  {selected === video.id ? (
                    <>
                      <Check className="w-4 h-4 mr-2" /> Selected
                    </>
                  ) : (
                    'Select This Video'
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Summary */}
        {selected && (
          <div className="mt-12 bg-slate-700/50 border border-accent/30 rounded-lg p-6 text-center">
            <p className="text-white mb-4">
              You selected: <span className="font-bold text-accent">{videoOptions.find(v => v.id === selected).title}</span>
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Once you confirm this is the video you want, I'll implement it on the homepage banner.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Confirm Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}