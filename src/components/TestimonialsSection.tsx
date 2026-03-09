import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Priya & Rakesh",
    feedback:
      "Dr. Prathyusha changed our lives. After years of trying, we finally have our little miracle. Her patience and expertise gave us hope when we had almost given up.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Sunitha & Vamsi",
    feedback:
      "Dr. Prathyusha and her team made us feel comfortable and supported throughout our IVF journey. We are blessed with twins now!",
    rating: 5,
    timeAgo: "3 months ago",
  },
  {
    name: "Kavitha & Ravi",
    feedback:
      "Exceptional care and professionalism. Dr. Prathyusha explained every step clearly and her success rates speak for themselves. Highly recommended.",
    rating: 5,
    timeAgo: "1 month ago",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 section-soft-bg" ref={ref}>
      <div
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by hundreds of families for exceptional fertility care and
            successful outcomes.
          </p>

          {/* Google overall rating */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <GoogleLogo />
            <span className="text-foreground font-display font-bold text-xl">
              4.9
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              (120+ reviews)
            </span>
          </div>
        </div>

        {/* Cards grid — always 3 visible */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 shadow-md border border-border/50 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              {/* Google icon + stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <GoogleLogo />
                  <span className="text-xs text-muted-foreground">
                    {t.timeAgo}
                  </span>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="font-display font-semibold text-sm text-foreground">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
