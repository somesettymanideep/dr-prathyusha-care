import { useState } from "react";
import { Link } from "react-router-dom";
import { Baby, Microscope, Snowflake, HeartPulse, Dna, Syringe, FlaskConical, ScanSearch, Box, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import ivfImg from "@/assets/treatments/ivf.jpg";
import eggFreezingImg from "@/assets/treatments/egg-freezing.jpg";
import embryoFreezingImg from "@/assets/treatments/embryo-freezing.jpg";
import fertilityPreservationImg from "@/assets/treatments/fertility-preservation.jpg";
import surrogacyImg from "@/assets/treatments/surrogacy.jpg";
import maleFertilityImg from "@/assets/treatments/male-fertility.jpg";
import ovulationImg from "@/assets/treatments/ovulation.jpg";
import pgtImg from "@/assets/treatments/pgt.jpg";

const treatments = [
  { icon: Microscope, title: "In Vitro Fertilization (IVF)", desc: "Lab fertilization of eggs for a higher success rate.", img: ivfImg },
  { icon: Snowflake, title: "Egg Freezing", desc: "Preserve your eggs for a future pregnancy.", img: eggFreezingImg },
  { icon: FlaskConical, title: "Embryo Freezing", desc: "High-quality embryos from IVF are frozen for future use.", img: embryoFreezingImg },
  { icon: HeartPulse, title: "Fertility Preservation", desc: "Egg, sperm, or embryo freezing options for patients.", img: fertilityPreservationImg },
  { icon: Box, title: "Surrogacy Support", desc: "Helping individuals & couples find a trusted surrogate.", img: surrogacyImg },
  { icon: Syringe, title: "Male Fertility Care", desc: "Comprehensive diagnostic and treatment options.", img: maleFertilityImg, featured: true },
  { icon: ScanSearch, title: "Ovulation Induction", desc: "Expert diagnosis and care for couples facing miscarriages.", img: ovulationImg },
  { icon: Dna, title: "PGT (Genetic Testing)", desc: "Screen embryos for your genetic conditions.", img: pgtImg },
];

const TreatmentsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="treatments" className="py-20 section-soft-bg" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14 space-y-3">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Fertility Treatments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive fertility solutions tailored to your unique journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={t.title}
                className={`relative rounded-2xl overflow-hidden min-h-[260px] border flex flex-col transition-all duration-500 cursor-pointer ${
                  isActive ? "shadow-xl -translate-y-2 border-primary/30" : "border-border/50 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {/* Background image */}
                <img
                  src={t.img}
                  alt={t.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-secondary/80 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />
                {/* Default white background */}
                <div className={`absolute inset-0 bg-card transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`} />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <t.icon
                    className={`h-10 w-10 transition-colors duration-500 ${
                      isActive ? "text-primary-foreground" : "text-primary"
                    } mb-auto`}
                    strokeWidth={1.5}
                  />
                  <div className="mt-6">
                    <h3 className={`font-display font-bold text-lg mb-1 transition-colors duration-500 ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {t.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {t.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow button */}
                <div className={`absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-500 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}>
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
