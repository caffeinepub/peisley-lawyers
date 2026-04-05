import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "PRACTICE AREAS", to: "/practice-areas" },
  { label: "FREE LEGAL AID", to: "/free-legal-aid" },
  { label: "VETERANS", to: "/veterans-assistance" },
  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const prevPath = useRef(currentPath);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (prevPath.current !== currentPath) {
    prevPath.current = currentPath;
    setMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-navy" : ""
      }`}
      style={{ backgroundColor: "#0B1B33" }}
    >
      {/* Gold accent line */}
      <div className="h-0.5 bg-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-12 h-12 flex items-center justify-center border-2 border-gold flex-shrink-0">
              <span className="font-serif font-bold text-gold text-lg tracking-wider">
                PL
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-white tracking-widest text-base uppercase">
                Peisley Lawyers
              </div>
              <div className="text-gold text-xs tracking-widest uppercase font-sans">
                Australian Criminal Defence
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-xs font-sans tracking-widest uppercase transition-colors duration-200 ${
                  currentPath === link.to
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold font-sans text-xs uppercase tracking-widest transition-all duration-200 hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="nav.primary_button"
            >
              Free Consultation
            </Link>
            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#0A1A30" }}
          >
            <nav
              className="px-4 py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-3 text-sm font-sans tracking-widest uppercase border-b transition-colors ${
                    currentPath === link.to
                      ? "text-gold border-gold/30"
                      : "text-white hover:text-gold border-white/10"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-gold font-sans text-xs uppercase tracking-widest"
                style={{ color: "#0B1B33" }}
                data-ocid="nav.primary_button"
              >
                Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
