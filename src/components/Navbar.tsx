import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/#treatments" },
  { label: "Testimonials", path: "/#testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setOpen(false);
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
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient">Dr. Prathyusha</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">Javvadi</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path.startsWith("/#") ? "/" : link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919934510101" className="flex items-center gap-2 text-sm text-primary font-semibold">
            <Phone className="h-4 w-4" />
            +91 99345 10101
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path.startsWith("/#") ? "/" : link.path}
              onClick={() => handleNavClick(link.path)}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="hero" className="w-full mt-4" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
