import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer style={{ backgroundColor: "#0B1B33" }}>
      {/* Gold rule */}
      <div className="h-0.5 bg-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center border-2 border-gold">
                <span className="font-serif font-bold text-gold text-base">
                  PL
                </span>
              </div>
              <div>
                <div className="font-serif font-bold text-white tracking-widest text-sm uppercase">
                  Peisley Lawyers
                </div>
                <div className="text-gold text-xs tracking-wider uppercase font-sans">
                  Australian Criminal Defence
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-sans leading-relaxed mb-5">
              Peisley Lawyers is committed to providing accessible legal
              services to all Australians. Legal Aid available for eligible
              clients.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-5 border-b border-gold/40 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Free Legal Aid", to: "/free-legal-aid" },
                { label: "Veterans Assistance", to: "/veterans-assistance" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-gold text-xs font-sans tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-5 border-b border-gold/40 pb-2">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {[
                "Criminal Defence",
                "Serious & Violent Offences",
                "Drug Offences",
                "Traffic & Driving Offences",
                "AVOs",
                "Appeals & Reviews",
                "White Collar Crime",
              ].map((area) => (
                <li key={area}>
                  <Link
                    to="/practice-areas"
                    className="text-gray-400 hover:text-gold text-xs font-sans tracking-wide transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white uppercase tracking-widest text-sm mb-5 border-b border-gold/40 pb-2">
              Our Office
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs font-sans leading-relaxed">
                  123 Justice Street
                  <br />
                  Sydney NSW 2000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a
                  href="tel:0299990000"
                  className="text-gray-400 hover:text-gold text-xs font-sans transition-colors"
                >
                  (02) 9999 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:enquiries@peisleylawyers.com.au"
                  className="text-gray-400 hover:text-gold text-xs font-sans transition-colors"
                >
                  enquiries@peisleylawyers.com.au
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h5 className="text-white text-xs font-sans uppercase tracking-widest mb-2">
                Office Hours
              </h5>
              <p className="text-gray-400 text-xs font-sans leading-relaxed">
                Mon–Fri: 8:30am – 5:30pm
                <br />
                Sat: 9:00am – 1:00pm
                <br />
                24/7 Emergency: (02) 9999 0001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-sans">
            © {year} Peisley Lawyers. All rights reserved. ABN 00 000 000 000
          </p>
          <p className="text-gray-500 text-xs font-sans">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
