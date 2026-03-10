import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import footerBg from "@/assets/footer-bg.jpg";

import customer1 from "@/assets/testimonials/customer-1.png";
import customer2 from "@/assets/testimonials/customer-2.png";
import customer3 from "@/assets/testimonials/customer-3.png";
import customer4 from "@/assets/testimonials/customer-4.png";
import customer5 from "@/assets/testimonials/customer-5.png";
import customer6 from "@/assets/testimonials/customer-6.png";

const testimonials = [
  {
    name: "Priya & Rakesh",
    image: customer1,
    location: "Guntur",
    date: "2 months ago",
    feedback:
      "Dr. Prathyusha changed our lives. After years of trying, we finally have our little miracle. Her patience and expertise gave us hope when we had almost given up.",
    rating: 5,
  },
  {
    name: "Sunitha & Vamsi",
    image: customer2,
    location: "Vijayawada",
    date: "3 months ago",
    feedback:
      "Dr. Prathyusha and her team made us feel comfortable and supported throughout our IVF journey. We are blessed with twins now!",
    rating: 5,
  },
  {
    name: "Kavitha & Ravi",
    image: customer3,
    location: "Hyderabad",
    date: "1 month ago",
    feedback:
      "Exceptional care and professionalism. Dr. Prathyusha explained every step clearly and her success rates speak for themselves.",
    rating: 5,
  },
  {
    name: "Deepa & Suresh",
    image: customer4,
    location: "Hyderabad",
    date: "4 months ago",
    feedback:
      "We traveled from Hyderabad specifically for Dr. Prathyusha's expertise. Best decision we ever made. Our daughter is our world now.",
    rating: 5,
  },
  {
    name: "Meena & Anil",
    image: customer5,
    location: "Tenali",
    date: "2 weeks ago",
    feedback:
      "From our first consultation, Dr. Prathyusha made us feel at ease. Her knowledge and compassion are unmatched. Forever grateful.",
    rating: 5,
  },
  {
    name: "Lakshmi & Prasad",
    image: customer6,
    location: "Guntur",
    date: "1 week ago",
    feedback:
      "Amazing experience from start to finish. The entire team was so supportive and caring. We now have a beautiful baby boy!",
    rating: 5,
  },
];

const GoogleLogo = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIdx = Math.max(0, testimonials.length - cardsPerView);

  const prev = useCallback(() => setActiveIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActiveIdx((i) => Math.min(maxIdx, i + 1)), [maxIdx]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i >= maxIdx ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIdx]);

  // Clamp activeIdx when cardsPerView changes
  useEffect(() => {
    setActiveIdx((i) => Math.min(i, maxIdx));
  }, [maxIdx]);

  const visible = testimonials.slice(activeIdx, activeIdx + cardsPerView);

  return (
    <section id="testimonials" className="relative py-20 lg:py-28" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0 bg-secondary/85" />
      <div
        className={`relative z-10 container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          {/* Google overall badge */}
          <div className="inline-flex items-center gap-2.5 bg-card border border-border/50 rounded-full px-6 py-3 shadow-sm mx-auto">
            <GoogleLogo className="h-6 w-6" />
            <span className="font-display font-bold text-2xl text-foreground">4.9</span>
            <StarRating rating={5} />
            <span className="text-muted-foreground text-sm">Based on 120+ reviews</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground">
            What Our Clients Say on Google
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Real reviews from our satisfied customers
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrow left */}
          <button
            onClick={prev}
            disabled={activeIdx === 0}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Cards grid */}
          <div className={`grid gap-6 ${cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
            {visible.map((t, idx) => (
              <div
                key={activeIdx + idx}
                className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Google icon top-right */}
                <div className="flex justify-between items-start mb-4">
                  <StarRating rating={t.rating} />
                  <GoogleLogo className="h-5 w-5 opacity-70" />
                </div>

                {/* Feedback */}
                <p className="text-foreground/85 leading-relaxed font-body text-[15px] mb-5 flex-1">
                  "{t.feedback}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-sm text-foreground truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location} · {t.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            disabled={activeIdx >= maxIdx}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <GoogleLogo className="h-4 w-4" />
              View All Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
