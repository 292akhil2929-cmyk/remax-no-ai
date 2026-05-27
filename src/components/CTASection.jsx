import LeadCaptureForm from './LeadCaptureForm';

export default function CTASection({ image }) {
  return (
    <section className="py-20" id="investment-advise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-heading font-semibold text-primary tracking-widest mb-2">FREE CONSULTATION</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold italic text-foreground mb-4">
              Get Your Personalized Investment Strategy
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our senior advisors will analyze your goals, risk appetite, and budget to create a tailored Dubai property investment plan — completely free.
            </p>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <img src={image} alt="Dubai luxury interior" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-6 lg:p-8">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-6">Request Investment Advice</h3>
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}