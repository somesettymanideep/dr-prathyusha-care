import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Priya & Rakesh",
    location: "Guntur",
    feedback:
      "Dr. Prathyusha changed our lives. After years of trying, we finally have our little miracle. Her patience and expertise gave us hope when we had almost given up.",
    rating: 5,
    timeAgo: "2 months ago",
    treatment: "IVF",
  },
  {
    name: "Sunitha & Vamsi",
    location: "Vijayawada",
    feedback:
      "Dr. Prathyusha and her team made us feel comfortable and supported throughout our IVF journey. We are blessed with twins now!",
    rating: 5,
    timeAgo: "3 months ago",
    treatment: "IVF",
  },
  {
    name: "Kavitha & Ravi",
    location: "Hyderabad",
    feedback:
      "Exceptional care and professionalism. Dr. Prathyusha explained every step clearly and her success rates speak for themselves. Highly recommended.",
    rating: 5,
    timeAgo: "1 month ago",
    treatment: "IUI",
  },
  {
    name: "Deepa & Suresh",
    location: "Hyderabad",
    feedback:
      "We traveled from Hyderabad specifically for Dr. Prathyusha's expertise. Best decision we ever made. Our daughter is our world now.",
    rating: 5,
    timeAgo: "4 months ago",
    treatment: "IVF",
  },
  {
    name: "Meena & Anil",
    location: "Tenali",
    feedback:
      "From our first consultation, Dr. Prathyusha made us feel at ease. Her knowledge and compassion are unmatched. Forever grateful for our little boy.",
    rating: 5,
    timeAgo: "2 weeks ago",
    treatment: "Egg Freezing",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIdx, setActiveIdx] = useState(0);
  const visibleCount = 3;
  const maxIdx = testimonials.length - visibleCount;

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
  const next = () => setActiveIdx((i) => Math.min(maxIdx, i + 1));

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i >= maxIdx ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIdx]);

  const visible = testimonials.slice(activeIdx, activeIdx + visibleCount);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-accent/30" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="space-y-3">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
              Client Testimonials
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Real Stories,<br />Real Families
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Google badge */}
            <div className="flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-2.5 shadow-sm">
              <GoogleLogo />
              <span className="font-display font-bold text-lg text-foreground">4.9</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-muted-foreground text-xs hidden sm:inline">(120+)</span>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={activeIdx === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-border"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                disabled={activeIdx >= maxIdx}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:hover:border-border"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, idx) => (
            <div
              key={activeIdx + idx}
              className="group relative bg-card rounded-3xl p-7 border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote accent */}
              <Quote className="absolute top-5 right-5 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div>
                {/* Stars + Google */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <GoogleLogo />
                </div>

                {/* Feedback */}
                <p className="text-foreground/80 leading-relaxed mb-2 italic font-body">
                  "{t.feedback}"
                </p>
                <span className="inline-block text-[11px] text-muted-foreground mb-5">
                  {t.timeAgo}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.location} · {t.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
