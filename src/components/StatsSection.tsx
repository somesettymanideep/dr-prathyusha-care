import { useEffect, useRef, useState } from "react";
import { Baby, HeartPulse, HeartHandshake, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  { icon: HeartPulse, label: "IUI Success Rate", value: "45", suffix: "%" },
  { icon: Baby, label: "IVF Success Rate", value: "65", suffix: "%" },
  { icon: HeartHandshake, label: "Happy Couples", value: "150", suffix: "+" },
  { icon: Trophy, label: "Years of Experience", value: "10", suffix: "+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return <div ref={ref} className="text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground">{count}{suffix}</div>;
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
  <section className="relative py-16 overflow-hidden" ref={ref}>
    <img src={statsBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-secondary/80" />
    <div className={`relative container mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary border-2 border-secondary/80 mb-2">
              <stat.icon className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <AnimatedCounter target={parseInt(stat.value)} suffix={stat.suffix} />
            <p className="text-primary-foreground font-semibold text-sm tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default StatsSection;
