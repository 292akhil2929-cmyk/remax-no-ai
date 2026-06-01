import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, User } from 'lucide-react';

const AGENTS = [
  {
    name: 'Faisal Contractor',
    role: 'CEO & Founder',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/10/Rectangle-284.jpg',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Sarah Zeidan',
    role: 'General Manager',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Justice',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Justice-chukwudi.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Imran',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Mohoammad-Imran.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Abu Bakkar',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Abu-bakkar-al-shams.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Khaldoun',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-104.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Nour',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Ellipse-105.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
  {
    name: 'Manish',
    role: 'Property Consultant',
    photo: 'https://remax-zam.b-cdn.net/wp-content/uploads/2026/02/Manish-Kapur.png',
    phone: '+97145828158',
    whatsapp: '97145828158',
    email: 'info@remaxzam.ae',
  },
];

export default function AgentSelector({ propertyId, onAgentSelected }) {
  const [selected, setSelected] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSelect = async (agent) => {
    setSelected(agent.name);
    setSaving(true);
    setSaved(false);
    await base44.entities.Property.update(propertyId, {
      agent_name: agent.name,
      agent_role: agent.role,
      agent_photo: agent.photo,
      agent_phone: agent.phone,
      agent_whatsapp: agent.whatsapp,
      agent_email: agent.email,
    });
    setSaving(false);
    setSaved(true);
    if (onAgentSelected) onAgentSelected(agent);
  };

  return (
    <div className="mt-4 p-4 bg-white/50 rounded-lg border border-emerald-100">
      <p className="text-xs font-heading font-semibold text-foreground mb-3 flex items-center gap-1.5">
        <User className="w-3.5 h-3.5" /> Assign Agent
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {AGENTS.map(agent => {
          const isSelected = selected === agent.name;
          return (
            <button
              key={agent.name}
              onClick={() => handleSelect(agent)}
              disabled={saving}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all text-center ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-border/50 bg-white hover:border-primary/40 hover:bg-slate-50'
              }`}
            >
              <div className="relative">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-10 h-10 rounded-full object-cover object-top"
                  onError={e => { e.target.src = 'https://remax-zam.b-cdn.net/wp-content/uploads/2025/12/man.jpg'; }}
                />
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute -bottom-1 -right-1 bg-white rounded-full" />
                )}
              </div>
              <p className="text-[10px] font-heading font-semibold text-foreground leading-tight">{agent.name}</p>
              <p className="text-[9px] font-body text-muted-foreground leading-tight">{agent.role}</p>
            </button>
          );
        })}
      </div>

      {saved && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700 font-body">
          <CheckCircle2 className="w-3.5 h-3.5" /> Agent assigned successfully!
        </div>
      )}
    </div>
  );
}