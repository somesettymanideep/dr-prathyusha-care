import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treatments } from "@/data/treatmentData";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/#treatments", hasDropdown: true },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    setOpen(false);
    setTreatmentsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className="text-2xl font-display font-extrabold tracking-tight text-gradient">Dr. Prathyusha</span>
          <span className="text-2xl font-display font-light tracking-wide text-secondary ml-1.5">Javvadi</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
                </button>
                {treatmentsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background border border-border rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      to="/"
                      onClick={() => handleNavClick("/#treatments")}
                      className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-accent/50 transition-colors border-b border-border/50"
                    >
                      All Treatments
                    </Link>
                    {treatments.map((t) => (
                      <Link
                        key={t.slug}
                        to={`/treatments/${t.slug}`}
                        onClick={() => { setTreatmentsOpen(false); }}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path.startsWith("/#") ? "/" : link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919010440101" className="flex items-center gap-2 text-sm text-primary font-semibold">
            <Phone className="h-4 w-4" />
            +91 90104 40101
          </a>
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileTreatmentsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileTreatmentsOpen && (
                  <div className="pl-4 border-b border-border/50">
                    <Link
                      to="/"
                      onClick={() => handleNavClick("/#treatments")}
                      className="block py-2.5 text-sm font-semibold text-primary"
                    >
                      All Treatments
                    </Link>
                    {treatments.map((t) => (
                      <Link
                        key={t.slug}
                        to={`/treatments/${t.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path.startsWith("/#") ? "/" : link.path}
                onClick={() => handleNavClick(link.path)}
                className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
              >
                {link.label}
              </Link>
            )
          )}
          <Button variant="hero" className="w-full mt-4" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
