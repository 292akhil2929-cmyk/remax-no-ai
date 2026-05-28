import { Link } from 'react-router-dom';
import PropertySearchFilter from '@/components/PropertySearchFilter';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function InvestorHero() {
  return (
    <>
      <section className="relative min-h-screen lg:h-[600px] flex items-center overflow-hidden bg-white">
        {/* Dubai background image */}
        <div 
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518684029980-cf91eb28ed90?w=1200&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Minimal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/82 to-gray-100/85" />

        <div className="relative w-full z-10 px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-accent font-heading font-bold text-xs sm:text-sm mb-6 tracking-widest uppercase"
              >
                ✦ Premium Investments
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6"
              >
                Smart<br />
                Real<br />
                Estate<br />
                <span className="text-accent">Investments</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
              >
                Data-backed opportunities. Verified ROI. Golden Visa eligibility. Build wealth with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  size="lg"
                  className="bg-foreground text-primary-foreground hover:bg-foreground/90 font-heading font-bold text-base"
                  asChild
                >
                  <Link to="/properties" className="flex items-center justify-center gap-2">
                    View Listings <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-heading font-bold text-base"
                  asChild
                >
                  <Link to="/contact">Consult an Expert</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap gap-6 pt-8 border-t border-border"
              >
                {[
                  { label: 'Properties', value: '250+' },
                  { label: 'Avg ROI', value: '8.5%' },
                  { label: 'Active Investors', value: '1,200+' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{stat.label}</p>
                    <p className="text-3xl font-heading font-black text-accent mt-1">{stat.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <PropertySearchFilter />
        </div>
      </div>
    </>
  );
}