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
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img src={doctorAbout} alt="Dr. Prathyusha Javvadi" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg hidden lg:block">
                <p className="text-sm font-medium">Consultant Head</p>
                <p className="text-lg font-bold">Fertility Specialist</p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Meet Your Doctor</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                Dr. Prathyusha Javvadi
              </h2>
              <p className="text-lg text-muted-foreground italic">
                MBBS, MS (OBG), Fellowship in Reproductive Medicine, FMAS
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Prathyusha Javvadi is a distinguished Consultant Fertility Specialist based in Vijayawada, Andhra Pradesh. With over a decade of dedicated experience in reproductive medicine, she has been at the forefront of helping hundreds of families realize their dream of parenthood.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her journey in medicine began with a deep passion for women's health, which led her to specialize in obstetrics and gynecology, and subsequently pursue advanced training in assisted reproductive technologies. Her compassionate approach, combined with expertise in cutting-edge fertility treatments, has earned her the trust of patients across the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the Consultant Head at Ferticare IVF Centre, Dr. Prathyusha leads a team of skilled professionals dedicated to providing personalized, evidence-based fertility care. She believes that every patient's journey is unique, and tailors treatment plans to maximize the chances of a successful outcome.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Education & Qualifications */}
      <section className="py-20 section-soft-bg">
        <div className="container mx-auto px-4">
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
                className="group flex items-start gap-6 bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:bg-primary hover:border-primary transition-all duration-300"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">Specializations</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Areas of Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-primary hover:border-primary transition-all duration-300 text-center"
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
      <section className="py-20 section-soft-bg">
        <div className="container mx-auto px-4">
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
                {memberships.map((m) => (
                  <div key={m} className="group flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-lg hover:bg-primary hover:border-primary transition-all duration-300 cursor-default">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
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
