import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Zap, Users, Globe, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { icon: Zap, title: 'AI-Powered Leads', desc: 'Get qualified investor leads delivered to your phone in under 60 seconds via our smart engine.' },
  { icon: DollarSign, title: 'Premium Commission', desc: 'Industry-leading commission structure with transparent split and no hidden fees.' },
  { icon: Globe, title: 'Global Network', desc: 'Access RE/MAX\'s worldwide referral network spanning 110+ countries.' },
  { icon: Users, title: 'Training & Support', desc: 'Continuous training, marketing support, and CRM tools to accelerate your growth.' },
];

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', notes: '' });

  const createLead = useMutation({
    mutationFn: (data) => base44.entities.Lead.create(data),
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createLead.mutate({ ...form, lead_type: 'Agent', source: 'Join Us Page' });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-card/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">CAREERS</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold italic text-foreground mb-4">
            Join the Future of <span className="text-primary">Real Estate</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Partner with Dubai's most tech-forward brokerage. Our AI-powered platform gives you the edge to close more deals, faster.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg border border-border/50 bg-card"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-foreground text-xl mb-6 text-center">Apply to Join REMAX ZAM</h3>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <p className="font-heading font-semibold text-foreground">Application Received!</p>
                  <p className="text-sm text-muted-foreground mt-2">Our team will contact you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Full Name *" required value={form.full_name} onChange={e => setForm({...form, full_name: e.target.value})} className="bg-secondary border-border/50" />
                  <Input placeholder="Email *" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="bg-secondary border-border/50" />
                  <Input placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="bg-secondary border-border/50" />
                  <Textarea placeholder="Tell us about your experience..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="bg-secondary border-border/50" rows={4} />
                  <Button type="submit" className="w-full font-heading" disabled={createLead.isPending}>
                    {createLead.isPending ? 'Submitting...' : 'Submit Application'} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}