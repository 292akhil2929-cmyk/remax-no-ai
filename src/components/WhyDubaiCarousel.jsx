import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PiggyBank, Landmark, TrendingUp, Shield, Sun, FileCheck } from 'lucide-react';

const CARDS = [
  { icon: PiggyBank, stat: '0%', label: 'Tax on rental income & capital gains' },
  { icon: Landmark, stat: 'AED 2M+', label: 'Golden Visa through property ownership' },
  { icon: TrendingUp, stat: '7–9%', label: 'Average net rental yield in prime areas' },
  { icon: Shield, stat: 'RERA', label: 'Fully regulated, investor-protected market' },
  { icon: Sun, stat: '300+', label: 'Days of sunshine per year — lifestyle asset' },
  { icon: FileCheck, stat: '4hrs', label: 'Flight to ⅓ of the world\'s population' },
];

export default function WhyDubaiCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => setCurrentIdx(prev => (prev === 0 ? CARDS.length - 1 : prev - 1));
  const handleNext = () => setCurrentIdx(prev => (prev === CARDS.length - 1 ? 0 : prev + 1));

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <p className="text-gray-400 font-body text-xs tracking-[0.2em] uppercase mb-3">The Investment Case</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-900 max-w-xl leading-tight">
            Six Reasons Dubai<br />Outperforms
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="px-16"
              >
                {(() => {
                  const { icon: Icon, stat, label } = CARDS[currentIdx];
                  return (
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-12 text-center">
                      <Icon className="w-10 h-10 text-gray-900 mx-auto mb-6" />
                      <p className="text-5xl font-display font-black text-gray-900 mb-4">{stat}</p>
                      <p className="text-base text-gray-600 font-body leading-relaxed">{label}</p>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIdx ? 'bg-gray-900 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}