import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Award, Heart, Baby } from "lucide-react";
import doctorImg from "@/assets/doctor-hero.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background split */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-muted" />
    
    {/* Decorative blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
    
    <div className="relative container mx-auto px-4 py-16 lg:py-8">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        
        {/* Left Content — 7 cols */}
        <div className="lg:col-span-7 space-y-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Now Accepting Appointments</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-[1.15] text-foreground">
            Your Journey to{" "}
            <span className="text-gradient">Parenthood</span>{" "}
            Starts&nbsp;Here
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-body">
            Dr.&nbsp;Prathyusha Javvadi — MBBS, MS&nbsp;(OBG), Fellowship in Reproductive Medicine — brings compassion and cutting-edge fertility care to every family she serves.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+919934510101">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mini stats row */}
          <div className="flex flex-wrap gap-8 pt-4 border-t border-border/60">
            {[
              { icon: Award, value: "10+", label: "Years Experience" },
              { icon: Baby, value: "1000+", label: "Happy Families" },
              { icon: Heart, value: "95%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image — 5 cols */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Decorative ring */}
          <div className="absolute inset-0 m-auto w-[22rem] h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full border-2 border-dashed border-primary/15 animate-[spin_40s_linear_infinite]" />
          
          {/* Main image */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)] border-4 border-background ring-1 ring-primary/10">
            <img
              src={doctorImg}
              alt="Dr. Prathyusha Javvadi — Fertility Specialist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge — bottom-left */}
          <div className="absolute bottom-6 -left-2 sm:left-4 lg:left-0 bg-secondary text-secondary-foreground rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-2xl font-display font-bold">10+</p>
            <p className="text-[11px] opacity-90 tracking-wide">Years Experience</p>
          </div>

          {/* Floating badge — top-right */}
          <div className="absolute top-8 -right-2 sm:right-2 lg:right-0 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-2xl font-display font-bold">1000+</p>
            <p className="text-[11px] opacity-90 tracking-wide">Happy Families</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
