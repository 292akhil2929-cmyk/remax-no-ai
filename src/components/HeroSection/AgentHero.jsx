import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function AgentHero() {
  return (
    <section className="relative min-h-screen lg:h-[600px] flex items-center overflow-hidden bg-white">
      {/* Luxury Dubai lifestyle video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.55 }}
      >
        <source src="https://cdn.pixabay.com/video/2023/09/13/180483-862649993_tiny.mp4" type="video/mp4" />
      </video>
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/30 to-black/35" />

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
              ✦ Growth Opportunity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6"
            >
              Grow with<br className="hidden sm:block" />
              <span className="text-accent">RE/MAX</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Competitive commissions. World-class support. Global network. Access premium Dubai deals.
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
                <Link to="/contact?type=agent" className="flex items-center justify-center gap-2">
                  Join Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-heading font-bold text-base"
                asChild
              >
                <Link to="/contact">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-6 pt-8 border-t border-border"
            >
              {[
                { label: 'Global Network', value: '145K+' },
                { label: 'Support', value: '24/7' },
                { label: 'Commission', value: 'Competitive' },
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
  );
}