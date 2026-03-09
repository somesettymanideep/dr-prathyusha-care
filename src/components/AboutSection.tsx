import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-hero-new.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualifications = [
  "MBBS & MS (OBG) – PSIMS, Vijayawada",
  "Fellowship in Reproductive Medicine – Southend Infertility, New Delhi",
  "Fellowship in Minimal Access Surgery – Chennai",
  "Trained in Laparoscopy & Robotics – Fortis, New Delhi",
  "Member – IFS & ISAR",
  "Joint Secretary – IMS",
  "Executive Committee Member – VOGS",
];

const skills = [
  "Family Planning",
  "Fertility Medication",
  "Gynecology",
  "IVF & IUI Treatments",
  "Prenatal Ultrasound",
  "Egg & Embryo Freezing",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* Left Content — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Best Fertility Specialist
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground">
              Dr. Prathyusha Javvadi
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              <span className="font-semibold text-foreground">Dr. Prathyusha Javvadi</span>{" "}
              With over a decade of experience in reproductive medicine, she is dedicated to helping families realize their dream of parenthood. Her compassionate approach combined with cutting-edge fertility treatments has resulted in hundreds of successful outcomes.
            </p>

            {/* Skills heading + dashed line */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">About Skills</h3>
              <div className="border-t-2 border-dashed border-primary/30 mb-4" />
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualification cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <p className="font-bold text-foreground text-sm">MS (OBG)</p>
                <p className="text-xs text-muted-foreground mt-1">PSIMS, Vijayawada</p>
                <p className="text-xs text-primary mt-1 font-medium">Obstetrics & Gynecology</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <p className="font-bold text-foreground text-sm">Fellowship</p>
                <p className="text-xs text-muted-foreground mt-1">Reproductive Medicine</p>
                <p className="text-xs text-primary mt-1 font-medium">Southend Infertility, New Delhi</p>
              </div>
            </div>

            <Button variant="hero" asChild>
              <a href="#treatments">View Treatments</a>
            </Button>
          </div>

          {/* Right Image — 5 cols, hero-style */}
          <div className="lg:col-span-5 relative flex justify-center items-end min-h-[400px] lg:min-h-[500px]">
            {/* Arch background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[90%] rounded-t-[50%] bg-primary/10 border border-primary/15" />

            {/* Doctor image */}
            <div className="relative z-10 w-[75%] max-w-[380px]">
              <img
                src={doctorImg}
                alt="Dr. Prathyusha Javvadi — Fertility Specialist"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Floating badge — bottom-left */}
            <div className="absolute bottom-8 left-0 z-20 bg-secondary text-secondary-foreground rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-display font-bold">10+</p>
              <p className="text-[11px] opacity-90 tracking-wide">Years Experience</p>
            </div>

            {/* Floating badge — top-right */}
            <div className="absolute top-12 right-0 z-20 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-display font-bold">1000+</p>
              <p className="text-[11px] opacity-90 tracking-wide">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
