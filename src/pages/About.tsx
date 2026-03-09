import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Phone,
  Award,
  GraduationCap,
  Heart,
  Users,
  Star,
  Target,
  Quote,
  Stethoscope,
} from "lucide-react";
import headerBg from "@/assets/page-header-bg.jpg";
import doctorAbout from "@/assets/doctor-about.jpg";
import doctorHero from "@/assets/doctor-hero.jpg";

const education = [
  { degree: "MBBS", institution: "PSIMS, Vijayawada", detail: "Foundation in medical sciences with distinction" },
  { degree: "MS (OBG)", institution: "PSIMS, Vijayawada", detail: "Specialization in Obstetrics & Gynecology" },
  { degree: "Fellowship in Reproductive Medicine", institution: "Southend Infertility, New Delhi", detail: "Advanced training in ART & IVF techniques" },
  { degree: "Fellowship in Minimal Access Surgery", institution: "Chennai", detail: "Expertise in laparoscopic & hysteroscopic procedures" },
  { degree: "Training in Laparoscopy & Robotics", institution: "Fortis Hospital, New Delhi", detail: "Cutting-edge robotic-assisted surgical skills" },
];

const memberships = [
  "Indian Fertility Society (IFS)",
  "Indian Society for Assisted Reproduction (ISAR)",
  "Indian Medical Association (IMS) – Joint Secretary",
  "Vijayawada Obstetric & Gynaecological Society (VOGS) – Executive Committee Member",
  "Federation of Obstetric & Gynaecological Societies of India (FOGSI)",
];

const expertise = [
  { icon: Target, title: "In Vitro Fertilization (IVF)", desc: "Advanced IVF protocols with high success rates tailored to individual patient needs." },
  { icon: Heart, title: "Fertility Preservation", desc: "Egg, sperm, and embryo freezing for patients planning for the future." },
  { icon: Users, title: "Male Infertility", desc: "Comprehensive evaluation and treatment of male reproductive health issues." },
  { icon: Star, title: "Recurrent Pregnancy Loss", desc: "Specialized care for couples experiencing repeated miscarriages." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src={headerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/75" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">About Dr. Prathyusha</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>About</span>
          </div>
        </div>
      </section>

      {/* Main Bio Section - Redesigned */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="lg:col-span-2 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-primary-foreground">
                  <img src={doctorAbout} alt="Dr. Prathyusha Javvadi" className="w-full h-auto object-cover" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3">
                <Stethoscope className="h-6 w-6" />
                <div>
                  <p className="text-xs font-medium opacity-80">Consultant Head</p>
                  <p className="text-sm font-bold">Fertility Specialist</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3 space-y-8 pt-4">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Meet Your Doctor</p>
                <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  Dr. Prathyusha Javvadi
                </h2>
                <p className="text-lg text-primary/80 italic mt-3 font-medium">
                  MBBS, MS (OBG), Fellowship in Reproductive Medicine, FMAS
                </p>
              </div>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Dr. Prathyusha Javvadi is a distinguished Consultant Fertility Specialist based in Vijayawada, Andhra Pradesh. With over a decade of dedicated experience in reproductive medicine, she has been at the forefront of helping hundreds of families realize their dream of parenthood.
                </p>
                <p>
                  Her journey in medicine began with a deep passion for women's health, which led her to specialize in obstetrics and gynecology, and subsequently pursue advanced training in assisted reproductive technologies. Her compassionate approach, combined with expertise in cutting-edge fertility treatments, has earned her the trust of patients across the region.
                </p>
                <p>
                  As the Consultant Head at Ferticare IVF Centre, Dr. Prathyusha leads a team of skilled professionals dedicated to providing personalized, evidence-based fertility care.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919934510101">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise - Full-width cards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest">Specializations</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Qualifications</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Education & Training</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strong academic foundation combined with advanced clinical training from India's top institutions.
            </p>
          </div>
          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1.5" />

                {/* Content card */}
                <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "lg:pr-0 lg:text-right" : "lg:pl-0"
                }`}>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-display font-bold text-foreground">{edu.degree}</h3>
                    </div>
                    <p className="text-primary text-sm font-semibold">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.detail}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote - Immersive */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src={headerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Quote className="h-16 w-16 text-primary/40 mx-auto" />
            <blockquote className="text-xl lg:text-3xl font-display italic text-primary-foreground/90 leading-relaxed">
              Every patient who walks through our doors carries a dream — the dream of parenthood. My mission is to provide not just medical expertise, but genuine compassion, transparent communication, and unwavering support throughout their journey.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-primary/50" />
              <p className="text-primary font-semibold text-lg">Dr. Prathyusha Javvadi</p>
              <div className="w-12 h-px bg-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Professional Affiliations</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Memberships & Recognitions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dr. Prathyusha is an active member of several prestigious national medical organizations, contributing to the advancement of reproductive medicine.
              </p>
              <div className="space-y-4">
                {memberships.map((m) => (
                  <div key={m} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm pt-1">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent rounded-[2rem] rotate-2" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img src={doctorHero} alt="Dr. Prathyusha at conference" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Book your consultation today and take the first step towards parenthood with Dr. Prathyusha Javvadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+919934510101">
                <Phone className="h-4 w-4 mr-2" />
                Call Now: +91 99345 10101
              </a>
            </Button>
            <Button variant="heroOutline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
