import { Baby, Microscope, Scissors, Snowflake, HeartPulse, Dna, Syringe, FlaskConical, ScanSearch } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const treatments = [
  { icon: HeartPulse, title: "Ovulation Induction", desc: "Timed intercourse with careful monitoring and medication to optimize natural conception." },
  { icon: Syringe, title: "IUI", desc: "Intra Uterine Insemination — a minimally invasive procedure to enhance fertility." },
  { icon: Microscope, title: "IVF / ICSI", desc: "Advanced in vitro fertilization techniques for complex fertility challenges." },
  { icon: Scissors, title: "Minimally Invasive Surgery", desc: "Laparoscopic and hysteroscopic procedures with faster recovery." },
  { icon: Snowflake, title: "Fertility Preservation", desc: "Egg, sperm, and embryo freezing for future family planning." },
  { icon: FlaskConical, title: "MACS / Micro Fluidics", desc: "Magnetic Activated Cell Sorting for superior sperm selection." },
  { icon: Baby, title: "Donor Treatments", desc: "Comprehensive donor egg, sperm, and embryo programs." },
  { icon: Dna, title: "PGD", desc: "Pre-Implantation Genetic Diagnosis for healthy embryo selection." },
  { icon: ScanSearch, title: "Freezing / Vitrification", desc: "State-of-the-art cryopreservation techniques for eggs, sperm, and embryos." },
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-20 section-soft-bg">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</p>
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Fertility Treatments</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive fertility solutions tailored to your unique journey.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t) => (
          <div key={t.title} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <t.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
