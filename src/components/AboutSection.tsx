import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorAbout from "@/assets/dr-prathyusha-about.jpg";
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

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={doctorAbout} alt="Dr. Prathyusha Javvadi at clinic" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg hidden lg:block">
              <p className="text-sm font-medium">Consultant Head</p>
              <p className="text-lg font-bold">Fertility Specialist</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Meet Your Doctor</p>
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-display font-bold">
              <span className="text-secondary">Dr. Prathyusha</span> <span className="text-primary">Javvadi</span>
            </h2>
            <p className="text-lg text-muted-foreground italic">
              MBBS, MS (OBG), FRM — Consultant Fertility Specialist
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm Dr. Prathyusha Javvadi, and I understand how deeply personal and emotional the journey to parenthood can be. With over 10 years of dedicated experience in reproductive medicine, I have helped more than 1000+ couples welcome their little ones into the world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach is simple — I listen first, then treat. Every patient's body and story is unique, and I believe in creating personalized treatment plans that give you the best chance of success, with care and compassion at every step.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Qualifications & Affiliations:</p>
              {qualifications.map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80">{q}</span>
                </div>
              ))}
            </div>
            <Button variant="hero" asChild>
              <a href="#consultation">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
