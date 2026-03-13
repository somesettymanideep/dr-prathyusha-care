import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Calendar, Award, Users, Clock, Shield, Star, TrendingUp, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getTreatmentBySlug } from "@/data/treatmentData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import treatmentHeroBanner from "@/assets/treatment-hero-banner.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefitIcons = [Award, Star, TrendingUp, Shield];

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || "");

  const overviewAnim = useScrollAnimation();
  const whoNeedsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const benefitsAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const faqAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  if (!treatment) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Treatment Not Found</h1>
          <p className="text-muted-foreground mb-8">The treatment you're looking for doesn't exist.</p>
          <Button variant="hero" asChild>
            <Link to="/#treatments">View All Treatments</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const TreatmentIcon = treatment.icon;

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* 1. Hero Banner */}
      <section className="relative min-h-[200px] md:min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={treatmentHeroBanner} alt="Medical clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <TreatmentIcon className="h-7 w-7 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wider">Fertility Treatment</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
              {treatment.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              {treatment.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="tel:+919934510101" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Treatment Overview */}
      <section className="py-16 md:py-20" ref={overviewAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${overviewAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Treatment Overview</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                Understanding {treatment.title.split("(")[0].trim()}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {treatment.overview}
              </p>
              <div className="bg-accent/50 rounded-2xl p-6 border border-border/50">
                <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  How It Works
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.howItWorks}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-accent/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Needs This Treatment */}
      <section className="py-16 md:py-20 section-soft-bg" ref={whoNeedsAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${whoNeedsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Who Can Benefit</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Who Needs This Treatment?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {treatment.whoNeeds.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Process Timeline */}
      <section className="py-16 md:py-20" ref={processAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${processAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Step by Step</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Treatment Process
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 hidden sm:block" />
              
              <div className="space-y-6">
                {treatment.process.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-4 md:gap-6 items-start"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-display font-bold text-lg md:text-xl">{i + 1}</span>
                    </div>
                    {/* Step content */}
                    <div className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 shadow-sm flex-1 hover:shadow-md transition-shadow">
                      <h3 className="font-display font-bold text-foreground text-lg mb-1.5">{step.step}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-16 md:py-20 section-soft-bg" ref={benefitsAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${benefitsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Key Benefits
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {treatment.benefits.map((benefit, i) => {
              const BenefitIcon = benefitIcons[i % benefitIcons.length];
              return (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BenefitIcon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20" ref={faqAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${faqAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Common Questions</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {treatment.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-2xl px-6 data-[state=open]:bg-primary data-[state=open]:border-primary shadow-sm data-[state=open]:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display font-bold text-secondary hover:no-underline py-5 text-base data-[state=open]:text-primary-foreground [&[data-state=open]>svg]:text-primary-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary-foreground/85 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-16 md:py-20 section-soft-bg" ref={ctaAnim.ref}>
        <div className={`container mx-auto px-4 transition-all duration-700 ${ctaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-10 md:p-14 border border-border/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-accent/30 translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Start Your Journey to Parenthood Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Take the first step towards building your family. Our expert team is here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreatmentDetail;
