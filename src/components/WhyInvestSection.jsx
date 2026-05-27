import { motion } from 'framer-motion';
import { Landmark, Plane, Sun, PiggyBank, FileCheck, Building2 } from 'lucide-react';

const reasons = [
  { icon: PiggyBank, title: '0% Income Tax', desc: 'Tax-free rental income and capital gains make Dubai one of the most investor-friendly markets globally.' },
  { icon: Landmark, title: 'Golden Visa', desc: 'Invest AED 2M+ in property and secure a 10-year residency visa for you and your family.' },
  { icon: Building2, title: 'World-Class Infrastructure', desc: 'From Expo City to Etihad Rail, Dubai is investing billions in future-proof infrastructure.' },
  { icon: Sun, title: '8.5% Avg Yield', desc: 'Dubai consistently delivers some of the highest rental yields among global cities.' },
  { icon: Plane, title: 'Global Connectivity', desc: '4-hour flight radius covers 1/3 of the world\'s population. A true global hub.' },
  { icon: FileCheck, title: 'Regulated Market', desc: 'RERA oversight ensures transparency, escrow protection, and investor security.' },
];

export default function WhyInvestSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">WHY DUBAI</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold italic text-foreground">The World's Smartest Investment Destination</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-6 rounded-lg border border-border/50 bg-background hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}