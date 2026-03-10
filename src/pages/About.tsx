import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  Phone,
  Award,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Star,
  Target,
} from "lucide-react";
import headerBg from "@/assets/page-header-bg.jpg";
import doctorAbout from "@/assets/doctor-about.jpg";
import doctorHero from "@/assets/doctor-hero.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const milestones = [
  { number: "10+", label: "Years of Experience" },
  { number: "150+", label: "Happy Families" },
  { number: "65%", label: "IVF Success Rate" },
  { number: "45%", label: "IUI Success Rate" },
];

const About = () => {
  const bioAnim = useScrollAnimation();
  const eduAnim = useScrollAnimation();
  const expertAnim = useScrollAnimation();
  const memberAnim = useScrollAnimation();
  const philoAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  const animClass = (isVisible: boolean) =>
    `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  const staggeredItem = (isVisible: boolean, index: number) =>
    `transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img src={headerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(114, 52, 129, 0.75)" }} />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">About Dr. Prathyusha</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/80">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>About</span>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-24" ref={bioAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(bioAnim.isVisible)}`}>
          {/* Top: Name + Title centered */}
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Meet Your Doctor</p>
            <h2 className="text-4xl lg:text-3xl font-display font-extrabold text-foreground">
              Dr. Prathyusha Javvadi
            </h2>
            <p className="text-lg text-muted-foreground">
              MBBS &middot; MS (OBG) &middot; FRM &middot; FMAS
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Layout: Image left, Bio right */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Image Column - 2 cols */}
            <div className="lg:col-span-2">
              <div className="relative sticky top-28">
                <div className="rounded-3xl overflow-hidden border-4 border-primary/15">
                  <img src={doctorAbout} alt="Dr. Prathyusha Javvadi" className="w-full aspect-[3/4] object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-6 py-2.5 shadow-xl text-sm font-bold tracking-wide whitespace-nowrap">
                  Consultant Fertility Specialist
                </div>
              </div>
            </div>

            {/* Bio Column - 3 cols */}
            <div className="lg:col-span-3 space-y-8">
              {/* Intro paragraph - larger */}
              <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
                A compassionate fertility specialist dedicated to turning your dream of parenthood into reality.
              </p>

              <div className="h-px bg-border" />

              {/* Bio paragraphs */}
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  With over a decade of experience in reproductive medicine, Dr. Prathyusha has been at the forefront of helping hundreds of families across Andhra Pradesh achieve successful pregnancies through advanced fertility treatments.
                </p>
                <p>
                  Her journey began with a deep passion for women's health, leading to specializations in obstetrics, gynecology, and assisted reproductive technologies from India's premier institutions including Southend Infertility (New Delhi) and Fortis Hospital.
                </p>
                <p>
                  As the Consultant Head at her fertility practice, she leads with a patient-first philosophy — listening carefully, creating personalized treatment plans, and providing transparent, compassionate care at every step of the journey.
                </p>
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {milestones.map((m) => (
                  <div key={m.label} className="text-center p-4 rounded-2xl bg-accent/50 border border-border/50">
                    <p className="text-2xl lg:text-3xl font-display font-extrabold text-primary">{m.number}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wide">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border" />

              {/* Quick highlights */}
              <div className="flex flex-wrap gap-3">
                {["IVF & ICSI", "IUI", "Egg Freezing", "Laparoscopy", "Recurrent Loss Care", "Male Infertility"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 transition-all duration-500 ${bioAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: bioAnim.isVisible ? `${600 + i * 100}ms` : "0ms" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education & Qualifications */}
      <section className="py-20 section-soft-bg" ref={eduAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(eduAnim.isVisible)}`}>
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Qualifications</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Education & Training</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A strong academic foundation combined with advanced clinical training from India's top institutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`group flex items-start gap-6 bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:bg-primary hover:border-primary transition-all duration-300 ${staggeredItem(eduAnim.isVisible, i)}`}
                style={{ transitionDelay: eduAnim.isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary-foreground transition-colors duration-300">{edu.degree}</h3>
                  <p className="text-primary text-sm font-semibold group-hover:text-primary-foreground/80 transition-colors duration-300">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1 group-hover:text-primary-foreground/70 transition-colors duration-300">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20" ref={expertAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(expertAnim.isVisible)}`}>
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Specializations</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <div
                key={item.title}
                className={`group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-primary hover:border-primary transition-all duration-300 text-center ${staggeredItem(expertAnim.isVisible, i)}`}
                style={{ transitionDelay: expertAnim.isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/70 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-20 section-soft-bg" ref={memberAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(memberAnim.isVisible)}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Professional Affiliations</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Memberships & Recognitions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dr. Prathyusha is an active member of several prestigious national medical organizations, contributing to the advancement of reproductive medicine through research, education, and leadership.
              </p>
              <div className="space-y-4">
                {memberships.map((m, i) => (
                  <div key={m} className={`group flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-lg hover:bg-primary hover:border-primary transition-all duration-300 cursor-default ${staggeredItem(memberAnim.isVisible, i)}`} style={{ transitionDelay: memberAnim.isVisible ? `${i * 120}ms` : "0ms" }}>
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300">
                      <Award className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-foreground/80 text-sm mt-1.5 group-hover:text-primary-foreground transition-colors duration-300">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={doctorHero} alt="Dr. Prathyusha at conference" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20" ref={philoAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(philoAnim.isVisible)}`}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">My Philosophy</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              A Patient-First Approach
            </h2>
            <blockquote className="text-xl lg:text-2xl font-display italic text-muted-foreground leading-relaxed">
              "Every patient who walks through our doors carries a dream — the dream of parenthood. My mission is to provide not just medical expertise, but genuine compassion, transparent communication, and unwavering support throughout their journey. Together, we turn hope into reality."
            </blockquote>
            <p className="text-primary font-semibold">— Dr. Prathyusha Javvadi</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" ref={ctaAnim.ref}>
        <div className={`container mx-auto px-4 text-center space-y-6 ${animClass(ctaAnim.isVisible)}`}>
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
