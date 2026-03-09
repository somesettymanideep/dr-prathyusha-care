import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", message: "" });
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your appointment request has been submitted! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", treatment: "", message: "" });
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Book Your Consultation</h2>
            <p className="text-muted-foreground">Take the first step towards parenthood. Fill in your details below.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl h-12" />
              <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="rounded-xl h-12" />
            </div>
            <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl h-12" />
            <Select value={form.treatment} onValueChange={(v) => setForm({ ...form, treatment: v })}>
              <SelectTrigger className="rounded-xl h-12">
                <SelectValue placeholder="Select Treatment" />
              </SelectTrigger>
              <SelectContent>
                {treatmentOptions.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="rounded-xl" />
            <Button type="submit" variant="hero" className="w-full">Book Appointment</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
