import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
  Play,
  Quote,
  Heart,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import headerBg from "@/assets/page-header-bg.jpg";
import testimonialsBg from "@/assets/testimonials-bg.jpg";
import customer1 from "@/assets/testimonials/customer-1.png";
import customer2 from "@/assets/testimonials/customer-2.png";
import customer3 from "@/assets/testimonials/customer-3.png";
import customer4 from "@/assets/testimonials/customer-4.png";
import customer5 from "@/assets/testimonials/customer-5.png";
import customer6 from "@/assets/testimonials/customer-6.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const textTestimonials = [
  {
    name: "Priya & Ravi Kumar",
    photo: customer1,
    rating: 5,
    text: "After 6 years of trying, Dr. Prathyusha made our dream come true. Her patience, expertise, and personal care made all the difference. We are now proud parents of twin boys!",
    treatment: "IVF",
  },
  {
    name: "Sneha Reddy",
    photo: customer2,
    rating: 5,
    text: "Dr. Prathyusha is not just a doctor, she's a blessing. She explained every step clearly and made us feel so comfortable throughout the IUI process. Highly recommended!",
    treatment: "IUI",
  },
  {
    name: "Lakshmi & Venkat",
    photo: customer3,
    rating: 5,
    text: "We visited multiple clinics before coming to Dr. Prathyusha. Her honest advice and advanced treatment approach gave us hope and finally our baby girl.",
    treatment: "IVF + ICSI",
  },
  {
    name: "Anitha Sharma",
    photo: customer4,
    rating: 5,
    text: "I had recurrent pregnancy losses and was devastated. Dr. Prathyusha's thorough evaluation and personalized treatment plan helped me carry my pregnancy to full term.",
    treatment: "Recurrent Loss Care",
  },
  {
    name: "Meena & Suresh",
    photo: customer5,
    rating: 5,
    text: "The entire team is wonderful. From the first consultation to the final ultrasound, we felt supported and cared for. Dr. Prathyusha truly puts patients first.",
    treatment: "IVF",
  },
  {
    name: "Kavitha Prasad",
    photo: customer6,
    rating: 5,
    text: "I chose egg freezing to preserve my fertility for the future. Dr. Prathyusha guided me through the entire process with such professionalism and warmth.",
    treatment: "Egg Freezing",
  },
];

const videoTestimonials = [
  {
    name: "Swathi & Arun",
    description: "Our IVF success story after 5 years of waiting",
    thumbnail: testimonialsBg,
  },
  {
    name: "Deepa & Mahesh",
    description: "How Dr. Prathyusha changed our lives with compassionate care",
    thumbnail: testimonialsBg,
  },
  {
    name: "Radha & Kiran",
    description: "From hopelessness to holding our baby — our journey",
    thumbnail: testimonialsBg,
  },
];

const trustStats = [
  { icon: Users, number: "150+", label: "Happy Families" },
  { icon: Award, number: "10+", label: "Years Experience" },
  { icon: TrendingUp, number: "65%", label: "IVF Success Rate" },
  { icon: Heart, number: "100%", label: "Patient Dedication" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
      />
    ))}
  </div>
);

const TestimonialsSlider = ({ textAnim }: { textAnim: { ref: React.RefObject<any>; isVisible: boolean } }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = textTestimonials.length;
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-24" ref={textAnim.ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${textAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16 space-y-3">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Patient Reviews</p>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground">
            Stories That Inspire Hope
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every review represents a family's journey to joy. Here's what our patients have to say.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / slidesPerView)}%)` }}
            >
              {textTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="group relative bg-card rounded-2xl p-7 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                    <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    <div className="flex items-center gap-4 mb-5">
                      <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                      <div>
                        <p className="font-display font-bold text-foreground">{t.name}</p>
                        <StarRating rating={t.rating} />
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {t.treatment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button onClick={prev} className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-10">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const heroAnim = useScrollAnimation();
  const textAnim = useScrollAnimation();
  const videoAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  const animClass = (isVisible: boolean) =>
    `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <img src={testimonialsBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative container mx-auto px-4 text-center" ref={heroAnim.ref}>
          <div className={animClass(heroAnim.isVisible)}>
            <p className="text-primary-foreground/70 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Testimonials
            </p>
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-primary-foreground mb-5">
              What Our Patients Say
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Real stories from families who trusted our care and achieved their dream of parenthood.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60 mt-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Testimonials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Text Testimonials Slider */}
      <TestimonialsSlider textAnim={textAnim} />

      {/* Video Testimonials */}
      <section className="py-24 section-soft-bg" ref={videoAnim.ref}>
        <div className={`container mx-auto px-4 ${animClass(videoAnim.isVisible)}`}>
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Watch & Listen</p>
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-foreground">
              Patient Video Stories
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hear directly from our patients about their experience and journey with us.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((v, i) => (
              <div
                key={v.name}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${videoAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: videoAnim.isVisible ? `${i * 150}ms` : "0ms" }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={v.thumbnail}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-card">
                  <p className="font-display font-bold text-foreground mb-1">{v.name}</p>
                  <p className="text-muted-foreground text-sm">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Statistics */}
      <section className="relative py-20 overflow-hidden" ref={statsAnim.ref}>
        <img src={testimonialsBg} alt="" className="absolute inset-0 w-full h-full object-cover bg-fixed" />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className={`relative container mx-auto px-4 ${animClass(statsAnim.isVisible)}`}>
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground">
              Trusted by Hundreds of Families
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto">
              Our numbers speak for themselves — years of dedication reflected in every success story.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-500 ${statsAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: statsAnim.isVisible ? `${i * 120}ms` : "0ms" }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/30 border border-primary/40 mb-4">
                  <stat.icon className="h-7 w-7 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <p className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary" ref={ctaAnim.ref}>
        <div className={`container mx-auto px-4 text-center space-y-6 ${animClass(ctaAnim.isVisible)}`}>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground">
            Start Your Journey With Us Today
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Every great story begins with a single step. Book your consultation and let us help you write yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              variant="heroOutline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+919934510101">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              variant="heroOutline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
