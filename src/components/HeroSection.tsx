import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-hero.jpg";

const HeroSection = () => (
  <section className="gradient-hero">
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">FertiCARE IVF Centre, Vijayawada</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-foreground">
            Dr. Prathyusha <span className="text-gradient">Javvadi</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            Compassionate Fertility Care for Your Journey to Parenthood
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            MBBS, MS (OBG), Fellowship in Reproductive Medicine, FMAS — Clinical Director at FertiCARE IVF Centre. Trusted by hundreds of families for exceptional fertility care and successful outcomes.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
            <img src={doctorImg} alt="Dr. Prathyusha Javvadi" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-2xl px-6 py-3 shadow-lg">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-xs opacity-90">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
