import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "Priya & Rakesh", feedback: "Dr. Prathyusha changed our lives. After years of trying, we finally have our little miracle. Her patience and expertise gave us hope when we had almost given up.", rating: 5 },
  { name: "Sunitha & Vamsi", feedback: "The entire team at FertiCARE made us feel comfortable and supported throughout our IVF journey. We are blessed with twins now!", rating: 5 },
  { name: "Kavitha & Ravi", feedback: "Exceptional care and professionalism. Dr. Prathyusha explained every step clearly and her success rates speak for themselves. Highly recommended.", rating: 5 },
  { name: "Deepa & Suresh", feedback: "We traveled from Hyderabad specifically for Dr. Prathyusha's expertise. Best decision we ever made. Our daughter is our world now.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 section-soft-bg" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-14 space-y-3">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">What Our Patients Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Trusted by hundreds of families for exceptional fertility care and successful outcomes.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50 text-center relative">
            <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
            <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">"{t.feedback}"</p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-display font-semibold text-foreground">{t.name}</p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
