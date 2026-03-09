import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const contactDetails = [
  { icon: MapPin, label: "Clinic Address", value: "Moghalrajpuram, Vijayawada, Andhra Pradesh, India" },
  { icon: Phone, label: "Phone Number", value: "+91 99345 10101", href: "tel:+919934510101" },
  { icon: Mail, label: "Email Address", value: "Admin@ferticareivfcentre.com", href: "mailto:Admin@ferticareivfcentre.com" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Banner */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-secondary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactDetails.map((d) => (
              <div key={d.label} className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{d.label}</h3>
                {d.href ? (
                  <a href={d.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{d.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{d.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl h-12" />
                  <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="rounded-xl h-12" />
                </div>
                <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl h-12" />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="rounded-xl h-12" />
                <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="rounded-xl" />
                <Button type="submit" variant="hero" className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnNTMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FertiCARE IVF Centre Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Book your consultation today and take the first step towards parenthood with Dr. Prathyusha Javvadi.</p>
          <Button variant="heroOutline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <a href="tel:+919934510101">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91 99345 10101
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
