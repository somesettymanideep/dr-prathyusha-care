import { Baby, Microscope, Snowflake, HeartPulse, Dna, Syringe, FlaskConical, ScanSearch, Box, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import ivfImg from "@/assets/treatments/ivf.jpg";
import eggFreezingImg from "@/assets/treatments/egg-freezing.jpg";
import embryoFreezingImg from "@/assets/treatments/embryo-freezing.jpg";
import fertilityPreservationImg from "@/assets/treatments/fertility-preservation.jpg";
import surrogacyImg from "@/assets/treatments/surrogacy.jpg";
import doctorImg from "@/assets/doctor-about.jpg";
import ovulationImg from "@/assets/treatments/ovulation.jpg";
import pgtImg from "@/assets/treatments/pgt.jpg";

const treatments = [
  { icon: Microscope, title: "In Vitro Fertilization (IVF)", desc: "Lab fertilization of eggs for a higher success rate.", img: ivfImg },
  { icon: Snowflake, title: "Egg Freezing", desc: "Preserve your eggs for a future pregnancy.", img: eggFreezingImg },
  { icon: FlaskConical, title: "Embryo Freezing", desc: "High-quality embryos from IVF are frozen for future use.", img: embryoFreezingImg },
  { icon: HeartPulse, title: "Fertility Preservation", desc: "Egg, sperm, or embryo freezing options for patients.", img: fertilityPreservationImg },
  { icon: Box, title: "Surrogacy Support", desc: "Helping individuals & couples find a trusted surrogate.", img: surrogacyImg },
  { icon: Syringe, title: "Male Fertility Care", desc: "Comprehensive diagnostic and treatment options.", img: doctorImg, featured: true },
  { icon: ScanSearch, title: "Ovulation Induction", desc: "Expert diagnosis and care for couples facing miscarriages.", img: ovulationImg },
  { icon: Dna, title: "PGT (Genetic Testing)", desc: "Screen embryos for your genetic conditions.", img: pgtImg },
];

const TreatmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="treatments" className="py-20 section-soft-bg" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14 space-y-3">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Fertility Treatments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive fertility solutions tailored to your unique journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => (
            t.featured ? (
              <div
                key={t.title}
                className={`relative rounded-2xl overflow-hidden flex flex-col justify-end p-6 min-h-[260px] group cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
              >
                <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary/80" />
                <div className="relative z-10">
                  <t.icon className="h-10 w-10 text-primary-foreground mb-4 opacity-80" />
                  <h3 className="font-display font-bold text-lg text-primary-foreground mb-1">{t.title}</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">{t.desc}</p>
                </div>
                <div className="absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            ) : (
              <div
                key={t.title}
                className={`relative rounded-2xl overflow-hidden min-h-[260px] border border-border/50 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 group cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
              >
                {/* Background image - hidden by default, shown on hover */}
                <img
                  src={t.img}
                  alt={t.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Default white background */}
                <div className="absolute inset-0 bg-card group-hover:opacity-0 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <t.icon
                    className="h-10 w-10 text-primary group-hover:text-primary-foreground mb-auto transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                  <div className="mt-6">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary-foreground mb-2 transition-colors duration-500">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">
                      {t.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow button on hover */}
                <div className="absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
