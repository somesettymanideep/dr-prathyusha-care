import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorAbout from "@/assets/doctor-about.jpg";
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
            <p className="text-sm font-medium">Clinical Director</p>
            <p className="text-lg font-bold">FertiCARE IVF Centre</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">About the Doctor</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Dr. Prathyusha Javvadi
          </h2>
          <p className="text-lg text-muted-foreground italic">
            Consultant Head Fertility Specialist
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With over a decade of experience in reproductive medicine, Dr. Prathyusha Javvadi is dedicated to helping families realize their dream of parenthood. Her compassionate approach combined with cutting-edge fertility treatments has resulted in hundreds of successful outcomes.
          </p>
          <div className="space-y-3">
            {qualifications.map((q) => (
              <div key={q} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{q}</span>
              </div>
            ))}
          </div>
          <Button variant="hero" asChild>
            <a href="#treatments">View Treatments</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
