import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import headerBg from "@/assets/page-header-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Banner */}
      <section className="relative h-[200px] md:h-[300px] flex items-center overflow-hidden">
        <img src={headerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(114, 52, 129, 0.75)" }} />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/80">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Three Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Schedule Hours */}
            <div className="rounded-2xl p-8 border border-border/50 shadow-sm" style={{ backgroundColor: "#f8f6f9" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-foreground">Schedule hours</h3>
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <hr className="border-border mb-5" />
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monday - Thursday</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Friday</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Saturday</span>
                  <span>09:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Our Locations */}
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg">Our locations</h3>
                <MapPin className="h-6 w-6" />
              </div>
              <hr className="border-primary-foreground/30 mb-5" />
              <p className="text-sm text-primary-foreground/80 mb-4">
                Providing expert IVF care with advanced technology
              </p>
              <p className="font-semibold text-sm leading-relaxed">
                Moghalrajpuram, Vijayawada,<br />
                Andhra Pradesh, India
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg">Contact us</h3>
                <Phone className="h-6 w-6" />
              </div>
              <hr className="border-secondary-foreground/30 mb-5" />
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Reach out for personalized IVF support.
              </p>
              <a href="tel:+919010440101" className="block font-semibold text-lg mb-1 hover:underline">+91 90104 40101</a>
              <a href="mailto:Admin@ferticareivfcentre.com" className="text-sm font-semibold hover:underline">Admin@ferticareivfcentre.com</a>
            </div>
          </div>

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.6!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnNTMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 450 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Prathyusha Javvadi - Clinic Location"
              />
            </div>

            {/* Form */}
            <div className="rounded-2xl p-8 border border-border/50 shadow-sm" style={{ backgroundColor: "#f8f6f9" }}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Send us a <span className="text-primary">message</span>
              </h2>
              <div className="mb-8" />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input placeholder="First name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required className="rounded-xl h-12" />
                  <Input placeholder="Last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required className="rounded-xl h-12" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl h-12" />
                  <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="rounded-xl h-12" />
                </div>
                <Textarea placeholder="Write Message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="rounded-xl" />
                <Button type="submit" variant="hero">Submit Message</Button>
              </form>
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
            <a href="tel:+919010440101">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91 90104 40101
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
