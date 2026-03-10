import { CalendarCheck, Stethoscope, ScanSearch, ClipboardList, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    description: "Schedule your consultation with our fertility specialists online or by phone.",
  },
  {
    icon: Stethoscope,
    title: "Initial Consultation",
    description: "Meet our doctor to discuss your medical history and fertility concerns.",
  },
  {
    icon: ScanSearch,
    title: "Fertility Evaluation",
    description: "Diagnostic tests and scans to understand your reproductive health.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Plan",
    description: "Our specialists recommend the most suitable fertility treatment.",
  },
  {
    icon: HeartPulse,
    title: "Begin Treatment",
    description: "Start your fertility journey with expert care and support.",
  },
];

const ConsultationProcess = () => {
  return (
    <section className="py-20 section-soft-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Our <span className="text-primary">Consultation</span> <span className="text-secondary">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A simple and guided path to start your fertility journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line – desktop only */}
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => {
              const isPrimary = i % 2 === 0;
              const colorClass = isPrimary ? "text-primary" : "text-secondary";
              const bgClass = isPrimary ? "bg-primary" : "bg-secondary";
              const borderHover = isPrimary ? "group-hover:border-primary" : "group-hover:border-secondary";

              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 rounded-full bg-card border border-border shadow-md flex items-center justify-center transition-colors ${borderHover} group-hover:shadow-lg`}>
                      <step.icon className={`w-10 h-10 ${colorClass}`} strokeWidth={1.6} />
                    </div>
                    <span className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${bgClass} text-primary-foreground text-sm font-bold flex items-center justify-center shadow`}>
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Link to="/contact">
            <Button variant="hero">Book Your Consultation</Button>
          </Link>
          <Link to="/contact">
            <Button variant="heroOutline">Contact Our Experts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
