import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { sendLeadToBitrix } from '@/lib/bitrix';

export default function SellerLeadForm({ source = "Website", compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    property_type: '',
    property_location: '',
    asking_price: '',
    property_description: '',
    reason_to_sell: '',
  });

  const createLead = useMutation({
    mutationFn: (data) => base44.functions.invoke('createLead', data),
    onSuccess: (_response, variables) => {
      setSubmitted(true);
      sendLeadToBitrix(variables).catch(() => {});
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createLead.isPending) return;
    const notes = [
      form.asking_price ? `Asking Price: AED ${Number(form.asking_price).toLocaleString()}` : '',
      form.reason_to_sell ? `Reason: ${form.reason_to_sell}` : '',
      form.property_description ? `Description: ${form.property_description}` : '',
    ].filter(Boolean).join('\n');
    const payload = {
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      lead_type: 'Seller',
      source,
      property_interest: form.property_type && form.property_location ? `${form.property_type} in ${form.property_location}` : '',
      notes,
      // Bitrix fields
      title: form.property_type ? `Website Seller Inquiry: ${form.property_type}` : 'Website Seller Inquiry',
      is_seller: true,
      opportunity: form.asking_price ? Number(form.asking_price) : 0,
    };
    createLead.mutate(payload);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Thank You!</h3>
        <p className="text-sm text-muted-foreground font-body">Our property consultant will reach out within 24 hours to discuss your free valuation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <Input placeholder="Full Name *" required value={form.full_name} onChange={(e) => setForm({...form, full_name: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Input placeholder="Phone Number *" type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Input placeholder="Email Address *" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
        <Select value={form.property_type} onValueChange={(v) => setForm({...form, property_type: v})}>
          <SelectTrigger className="bg-secondary border-border/50 text-foreground"><SelectValue placeholder="Property Type *" /></SelectTrigger>
          <SelectContent>
            {["Apartment", "Villa", "Penthouse", "Townhouse", "Land", "Office", "Retail", "Shop"].map(t => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input placeholder="Community / Area *" required value={form.property_location} onChange={(e) => setForm({...form, property_location: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
      <Input placeholder="Asking Price (AED) *" type="number" required value={form.asking_price} onChange={(e) => setForm({...form, asking_price: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" />
      <Textarea placeholder="Property Description" value={form.property_description} onChange={(e) => setForm({...form, property_description: e.target.value})} className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground" rows={3} />
      <Select value={form.reason_to_sell} onValueChange={(v) => setForm({...form, reason_to_sell: v})}>
        <SelectTrigger className="bg-secondary border-border/50 text-foreground"><SelectValue placeholder="Why are you selling?" /></SelectTrigger>
        <SelectContent>
          {["Relocating", "Portfolio Adjustment", "Need Capital", "Property Upgrade", "End of Investment Cycle", "Other"].map(r => (
            <SelectItem key={r} value={r}>{r}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full font-heading font-semibold" disabled={createLead.isPending}>
        {createLead.isPending ? 'Submitting...' : 'Get Free Valuation'}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}