import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { sendLeadToBitrix } from '@/lib/bitrix';

export default function LeadCaptureForm({ leadType = "Investor", source = "Website", compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', investment_budget: '', investment_goal: '', property_interest: '' });

  const createLead = useMutation({
    mutationFn: async (data) => {
      console.log('[LeadCaptureForm] Submitting lead to Base44...', { ...data });
      const response = await base44.functions.invoke('createLead', data);
      console.log('[LeadCaptureForm] Base44 response:', response);
      return response;
    },
    onSuccess: (_response, variables) => {
      console.log('[LeadCaptureForm] Lead saved to Base44 successfully');
      setSubmitted(true);
      console.log('[LeadCaptureForm] Sending lead to Bitrix24...', { ...variables });
      sendLeadToBitrix(variables)
        .then((res) => console.log('[LeadCaptureForm] Bitrix24 result:', res))
        .catch((err) => console.warn('[LeadCaptureForm] Bitrix24 failed (non-blocking):', err));
    },
    onError: (error) => {
      console.error('[LeadCaptureForm] Base44 submission failed:', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Double-submit guard: block if a request is already in flight
    if (createLead.isPending) {
      console.warn('[LeadCaptureForm] Submission blocked — request already in progress');
      return;
    }
    const payload = { ...form, lead_type: leadType, source };
    console.log('[LeadCaptureForm] Form submitted with payload:', payload);
    createLead.mutate(payload);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Thank You!</h3>
        <p className="text-sm text-muted-foreground font-body">Our investment advisor will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <Input placeholder="Full Name *" required value={form.full_name} onChange={(e) => setForm({...form, full_name: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Select value={form.investment_budget} onValueChange={(v) => setForm({...form, investment_budget: v})}>
          <SelectTrigger className="bg-secondary border-border/50 text-foreground"><SelectValue placeholder="Investment Budget" /></SelectTrigger>
          <SelectContent>
            {["Under 500K AED", "500K - 1M AED", "1M - 3M AED", "3M - 5M AED", "5M+ AED"].map(b => (
              <SelectItem key={b} value={b}>{b}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Select value={form.investment_goal} onValueChange={(v) => setForm({...form, investment_goal: v})}>
        <SelectTrigger className="bg-secondary border-border/50 text-foreground"><SelectValue placeholder="Investment Goal" /></SelectTrigger>
        <SelectContent>
          {["Capital Appreciation", "Rental Income", "Golden Visa", "Relocation", "Portfolio Diversification"].map(g => (
            <SelectItem key={g} value={g}>{g}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input placeholder="What are you looking for? (e.g. 2BR in Marina, off-plan, villa...)" value={form.property_interest} onChange={(e) => setForm({...form, property_interest: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
      <Button type="submit" className="w-full font-heading font-semibold" disabled={createLead.isPending}>
        {createLead.isPending ? 'Submitting...' : 'Get Free Investment Advice'}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}