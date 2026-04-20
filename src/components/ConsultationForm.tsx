import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Mail, Phone, Calendar, Stethoscope, ArrowRight } from "lucide-react";
import consultationBg from "@/assets/consultation-bg.jpg";
import { addSubmission } from "@/lib/submissions";

const treatmentOptions = [
  "Ovulation Induction",
  "IUI",
  "IVF / ICSI",
  "Minimally Invasive Surgery",
  "Fertility Preservation",
  "MACS / Micro Fluidics",
  "Donor Treatments",
  "PGD",
  "Other",
];

const ConsultationForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", date: "" });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmission("consultation", form);
    toast.success("Your consultation request has been submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", treatment: "", date: "" });
  };

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={consultationBg}
          alt="Happy mother with baby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 lg:bg-gradient-to-r lg:from-background/95 lg:via-background/70 lg:to-transparent" />
      </div>

      <div className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-10 space-y-3">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" />
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Book Consultation</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-display font-bold">
              <span className="text-secondary">Book Your</span> <span className="text-primary">Consultation</span>
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-full h-12 pr-10 border-muted-foreground/30"
                />
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              </div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-full h-12 pr-10 border-muted-foreground/30"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              </div>
              <div className="relative">
                <Input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="rounded-full h-12 pr-10 border-muted-foreground/30"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="datetime-local"
                  placeholder="Date Time"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="rounded-full h-12 pr-10 border-muted-foreground/30"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
              </div>
              <Select value={form.treatment} onValueChange={(v) => setForm({ ...form, treatment: v })}>
                <SelectTrigger className="rounded-full h-12 border-muted-foreground/30">
                  <SelectValue placeholder="Select Treatment" />
                </SelectTrigger>
                <SelectContent>
                  {treatmentOptions.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" variant="hero" className="rounded-full h-12 gap-2">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
