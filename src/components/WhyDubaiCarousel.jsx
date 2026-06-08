import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiggyBank, Landmark, TrendingUp, Shield, Sun, FileCheck } from 'lucide-react';

const CARDS = [
  { icon: PiggyBank, stat: '0%', label: 'Tax on rental income & capital gains' },
  { icon: Landmark, stat: 'AED 2M+', label: 'Golden Visa eligibility via ownership' },
  { icon: TrendingUp, stat: '7–9%', label: 'Average net rental yield in prime areas' },
  { icon: Shield, stat: 'RERA', label: 'Fully regulated, investor-protected market' },
  { icon: Sun, stat: '300+', label: 'Days of sunshine per year — lifestyle asset' },
  { icon: FileCheck, stat: '4hrs', label: "Flight time to ⅓ of the world's population" },
];

/* ── REUSABLE COUNTER TO MATCH HERO EXPERIENCE ── */
function GridCounter({ value, duration = 1.5, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/(\d+)/g);
    // If it's something like "RERA", don't try to animate it
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const start = 0;
    const end = parseInt(match[match.length - 1], 10); 
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      if (value.includes('–')) {
        const lowerBound = Math.min(currentCount, parseInt(match[0], 10));
        setDisplayValue(`${lowerBound}–${currentCount}%`);
      } else {
        setDisplayValue(value.replace(match[match.length - 1], currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [value, isInView, duration, delay]);

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      <span className="invisible block" aria-hidden="true">{value}</span>
      <span className="absolute left-0 top-0 tabular-nums w-full text-left">{displayValue || value}</span>
    </span>
  );
}

export default function WhyDubaiCarousel() {
  return (
    /* ── OUTER FRAME INSPIRED SPACING ── */
    <div className="bg-white py-24 sm:py-32 box-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Editorial Minimalist Title Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-black/5 pb-12 mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 leading-[1.1] tracking-tight">
              Six Strategic Pillars of <br />The Dubai Asset Class
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-gray-500 font-body text-sm sm:text-base leading-relaxed font-medium">
              A sovereign business model engineered for capital flight, generational wealth security, and market transparency.
            </p>
          </div>
        </div>

        {/* ── HIGH END AWWWARDS-STYLE STRUCTURED GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                className="group flex flex-col justify-between items-start"
              >
                <div className="w-full">
                  {/* Icon + Structural Top border element for each grid cell */}
                  <div className="flex items-center justify-between w-full border-t border-black/5 pt-6 mb-6">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300 stroke-[1.5]" />
                    <span className="text-[10px] font-heading text-gray-300 font-bold tracking-widest">0{idx + 1}</span>
                  </div>

                  {/* Dynamic Massive Counter Header */}
                  <h3 className="text-4xl sm:text-5xl font-display font-black text-gray-900 tracking-tight mb-3">
                    <GridCounter value={card.stat} delay={idx * 0.1} />
                  </h3>
                </div>

                {/* Clean Descriptive Label */}
                <p className="text-gray-500 font-body text-sm sm:text-[14px] leading-relaxed font-medium max-w-[240px]">
                  {card.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}