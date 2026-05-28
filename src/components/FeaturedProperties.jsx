import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PropertyCard from './PropertyCard';
import { motion } from 'framer-motion';

export default function FeaturedProperties() {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ['featured-properties'],
    queryFn: () => base44.entities.Property.filter({ featured: true }, '-created_date', 6),
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-gray-200 rounded-xl h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#B87333]" />
              <span className="text-xs font-heading font-bold text-[#B87333] tracking-widest uppercase">Curated Assets</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-display font-black text-black">Featured Investments</h2>
          </div>
          <motion.div whileHover={{ x: 4 }}>
            <Button variant="ghost" className="text-black hover:text-[#B87333] font-heading font-bold text-lg" asChild>
              <Link to="/properties">
                View All <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Properties Grid */}
        {properties.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {properties.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PropertyCard property={p} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 font-body text-lg mb-4">Premium properties coming soon. Contact us for early access.</p>
            <Button className="bg-[#B87333] hover:bg-[#A86228] text-white font-heading font-bold" asChild>
              <Link to="/contact">Get Early Access</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}