import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LeadCaptureForm from '../components/LeadCaptureForm';

const contactInfo = [
  { icon: MapPin, label: 'Office', value: 'Bay View Tower, Office No. 1102, Dubai, UAE' },
  { icon: Phone, label: 'Phone', value: '+97145828158' },
  { icon: Mail, label: 'Email', value: 'info@remaxzam.ae' },
  { icon: Clock, label: 'Hours', value: 'Sun - Thu: 9AM - 6PM' },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">GET IN TOUCH</p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold italic text-foreground mb-4">
            Let's Build Your <span className="text-primary">Investment Strategy</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl">
            Whether you're a first-time investor or expanding your portfolio, our advisors are ready to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-foreground">{label}</p>
                    <p className="text-sm text-muted-foreground font-body">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3 bg-card border border-border/50 rounded-lg p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Request a Consultation</h3>
              <LeadCaptureForm source="Contact Page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}