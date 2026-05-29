/**
 * AGENT / COLLABORATOR JOURNEY
 * Purpose: Join the RE/MAX ZAM network, understand benefits, apply to partner
 * Sections: Why RE/MAX → What You Get → Commission & Support → Apply Form
 */
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Globe, BadgeCheck, Users, Zap, BookOpen, Headphones, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const benefits = [
  {
    icon: Globe,
    title: 'Global Referral Network',
    desc: '145,000+ RE/MAX agents across 110+ countries. International clients refer to you, you refer globally — built-in deal flow.',
  },
  {
    icon: BadgeCheck,
    title: 'RE/MAX Brand Power',
    desc: 'The most recognized real estate brand on earth. Instant credibility with clients who already trust the name.',
  },
  {
    icon: Zap,
    title: 'Marketing & Leads',
    desc: 'Professional listing promotions, portal presence, social campaigns and qualified leads — handled by our in-house team.',
  },
  {
    icon: BookOpen,
    title: 'Training & Tools',
    desc: 'Access to RE/MAX University, market data tools, CRM system, and deal management platform from day one.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Commission',
    desc: 'Industry-leading commission splits. The more you grow, the more you keep. Transparent and structured.',
  },
  {
    icon: Headphones,
    title: 'Full Back-Office Support',
    desc: 'Legal, contracts, NOC, DLD registration, mortgage coordination — our admin team handles it so you focus on selling.',
  },
];

const tiers = [
  {
    title: 'Associate Agent',
    who: 'New to Dubai or real estate',
    split: '50 / 50',
    includes: ['Full training program', 'Brand & marketing support', 'CRM & leads access', 'Mentorship from senior agents'],
  },
  {
    title: 'Senior Agent',
    who: '1+ year experience',
    split: '70 / 30',
    includes: ['Priority lead allocation', 'Dedicated marketing budget', 'Direct developer relationships', 'Referral network access'],
    highlight: true,
  },
  {
    title: 'Team Leader',
    who: 'Building your own team',
    split: 'Custom',
    includes: ['Own office branding', 'Team training & onboarding', 'Override commissions', 'Strategic partnership terms'],
  },
];

function AgentApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', experience: '' });

  const createLead = useMutation({
    mutationFn: (data) => base44.entities.Lead.create(data),
    onSuccess: () => setSubmitted(true),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createLead.mutate({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      lead_type: 'Agent',
      source: 'Home - Agent',
      notes: form.experience ? `Experience: ${form.experience}` : '',
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="font-heading font-semibold text-white text-lg mb-2">Application Received!</h3>
        <p className="text-sm text-gray-400 font-body">Our partnership team will contact you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input placeholder="Full Name *" required value={form.full_name} onChange={(e) => setForm({...form, full_name: e.target.value})} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
        <Input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
        <Input placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
        <Select value={form.experience} onValueChange={(v) => setForm({...form, experience: v})}>
          <SelectTrigger className="bg-white/10 border-white/20 text-white">
            <SelectValue placeholder="Years of Experience" />
          </SelectTrigger>
          <SelectContent>
            {['New to Real Estate', 'Less than 1 year', '1–3 years', '3–5 years', '5+ years'].map(o => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100 font-heading font-bold" disabled={createLead.isPending}>
        {createLead.isPending ? 'Submitting...' : 'Apply to Join'}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}

export default function AgentHome() {
  return (
    <>
      {/* Why RE/MAX ZAM */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs text-gray-400 font-body tracking-widest uppercase mb-2">Join the Network</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 max-w-2xl">
              Everything You Need to Thrive in Dubai Real Estate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-6 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-display font-black text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 font-body leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900">Partnership Tiers</h2>
            <p className="text-sm text-gray-500 font-body mt-1">Clear progression — the more you grow, the more you earn.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-xl p-6 border-2 ${tier.highlight ? 'bg-black border-black text-white' : 'bg-white border-gray-100'}`}
              >
                {tier.highlight && (
                  <span className="inline-block text-xs font-heading font-bold bg-white text-black px-3 py-1 rounded-full mb-4">Most Popular</span>
                )}
                <h3 className={`text-lg font-display font-black mb-1 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{tier.title}</h3>
                <p className={`text-xs font-body mb-4 ${tier.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{tier.who}</p>
                <div className={`text-3xl font-display font-black mb-1 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{tier.split}</div>
                <p className={`text-xs font-body mb-5 ${tier.highlight ? 'text-gray-400' : 'text-gray-400'}`}>Commission Split</p>
                <ul className="space-y-2">
                  {tier.includes.map(item => (
                    <li key={item} className={`flex items-start gap-2 text-xs font-body ${tier.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className={`mt-0.5 ${tier.highlight ? 'text-white' : 'text-black'}`}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Stats Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Globe, value: '110+', label: 'Countries in RE/MAX network' },
              { icon: Users, value: '145K+', label: 'Agents globally' },
              { icon: Award, value: '#1', label: 'Most trusted RE brand worldwide' },
              { icon: TrendingUp, value: '50+', label: 'Years of proven performance' },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }}>
                  <Icon className="w-5 h-5 text-gray-300 mx-auto mb-2" />
                  <p className="text-3xl font-display font-black text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 font-body mt-1">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agent Application CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs text-white/40 font-body tracking-widest uppercase mb-3">Join RE/MAX ZAM</p>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4 leading-tight">
                Ready to Build Your<br />Real Estate Career in Dubai?
              </h2>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                Whether you're an experienced agent looking to scale, or new to real estate and eager to start — we have a path for you.
              </p>
              <ul className="space-y-3">
                {[
                  'RERA-licensed brokerage with full compliance support',
                  'No desk fees for qualifying associates',
                  'Direct access to off-plan developer inventory',
                  'Weekly team training & deal-sharing sessions',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                    <span className="text-white mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-display font-black text-white mb-1">Apply to Join Our Team</h3>
              <p className="text-xs text-gray-400 font-body mb-5">We'll reach out within 48 hours to schedule a call.</p>
              <AgentApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}