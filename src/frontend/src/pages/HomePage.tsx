// Remove unused import from HomePage
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Award,
  Car,
  ChevronRight,
  DollarSign,
  FileText,
  Phone,
  Scale,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const practiceAreas = [
  {
    id: "criminal-defence",
    icon: Scale,
    title: "Criminal Defence",
    desc: "Comprehensive defence for all criminal charges from the Local Court to the Court of Criminal Appeal.",
  },
  {
    id: "serious-violent",
    icon: Shield,
    title: "Serious & Violent Offences",
    desc: "Expert representation for assault, manslaughter, and other serious criminal matters.",
  },
  {
    id: "drug-offences",
    icon: DollarSign,
    title: "Drug Offences",
    desc: "Skilled advocacy for possession, supply, and trafficking charges across all Australian jurisdictions.",
  },
  {
    id: "traffic-offences",
    icon: Car,
    title: "Traffic & Driving Offences",
    desc: "Protecting your licence and livelihood against drink driving, speeding, and disqualification.",
  },
  {
    id: "avos",
    icon: AlertTriangle,
    title: "AVOs",
    desc: "Experienced representation for Apprehended Violence Orders, both defending and obtaining protection.",
  },
  {
    id: "appeals",
    icon: FileText,
    title: "Appeals & Reviews",
    desc: "Challenging convictions and sentences through the appellate courts with meticulous preparation.",
  },
];

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "Peisley Lawyers stood by me when I needed representation most. Their expertise and dedication resulted in the best possible outcome for my case.",
    author: "James M.",
    role: "Sydney, NSW",
  },
  {
    id: "testimonial-2",
    quote:
      "As a veteran dealing with complex legal matters, I found a firm that truly understood my circumstances. The support was exceptional throughout the process.",
    author: "David R.",
    role: "Australian Army Veteran",
  },
  {
    id: "testimonial-3",
    quote:
      "The team at Peisley Lawyers provided clear, honest advice and fought tirelessly in court. I cannot recommend them highly enough.",
    author: "Sarah K.",
    role: "Newcastle, NSW",
  },
];

const stats = [
  { id: "experience", value: "20+", label: "Years of Experience" },
  { id: "cases", value: "3,000+", label: "Cases Handled" },
  { id: "outcomes", value: "95%", label: "Favourable Outcomes" },
  { id: "support", value: "24/7", label: "Emergency Support" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-courthouse.dim_1920x1080.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11,27,51,0.82)" }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-sans uppercase tracking-widest">
              Australian Criminal Defence
            </span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold uppercase tracking-wide leading-tight mb-6"
          >
            Defending Your Rights.
            <br />
            <span className="text-white">Upholding Justice.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Peisley Lawyers provides expert criminal defence across Australia.
            We are committed to ensuring every client receives the highest
            standard of legal representation, regardless of their circumstances.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="hero.primary_button"
            >
              <Phone size={16} />
              Free Consultation
            </Link>
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-sans text-sm uppercase tracking-widest transition-all hover:border-gold hover:text-gold"
              data-ocid="hero.secondary_button"
            >
              Our Practice Areas
              <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            backgroundColor: "rgba(11,27,51,0.92)",
            borderTop: "2px solid #C8A24A",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.id} className="text-center">
                <div className="font-serif text-gold text-2xl font-bold">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs font-sans uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              Our Commitment to You
            </h2>
            <p className="text-gray-500 text-sm font-sans mt-4 max-w-xl mx-auto leading-relaxed">
              At Peisley Lawyers, we believe that every person deserves the best
              possible legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "expertise",
                icon: Award,
                title: "Unrivalled Expertise",
                desc: "Over two decades of criminal law specialisation ensures you receive representation from some of Australia's most experienced criminal defence lawyers.",
              },
              {
                id: "legal-aid",
                icon: Users,
                title: "Free Legal Aid",
                desc: "We are committed to ensuring access to justice for all Australians. Legal aid is available for eligible clients, and we guide you through the entire process.",
              },
              {
                id: "veterans",
                icon: Shield,
                title: "Veterans Support",
                desc: "Dedicated legal services for Australian veterans, recognising the unique challenges faced by those who have served our nation.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative p-8 border-t-2 border-gold bg-white shadow-sm hover:shadow-navy transition-all duration-300"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{ color: "#C8A24A" }}
                >
                  <f.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-navy font-bold uppercase tracking-wide mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip — Legal Aid & Veterans */}
      <section className="py-16" style={{ backgroundColor: "#0B1B33" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 border border-gold/30 hover:border-gold transition-colors"
            >
              <div className="text-gold text-xs font-sans uppercase tracking-widest mb-3">
                Pro Bono & Aid
              </div>
              <h3 className="font-serif text-2xl text-white font-bold uppercase tracking-wide mb-4">
                Free Legal Aid
              </h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6">
                You may be eligible for free legal assistance. We assess your
                circumstances and guide you through the legal aid application
                process at no cost.
              </p>
              <Link
                to="/free-legal-aid"
                className="inline-flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-widest hover:gap-3 transition-all"
                data-ocid="home.secondary_button"
              >
                Learn More <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 border border-gold/30 hover:border-gold transition-colors"
            >
              <div className="text-gold text-xs font-sans uppercase tracking-widest mb-3">
                Serving Those Who Served
              </div>
              <h3 className="font-serif text-2xl text-white font-bold uppercase tracking-wide mb-4">
                Veterans Assistance
              </h3>
              <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6">
                Australian veterans face unique legal challenges. Peisley
                Lawyers provides specialist support for DVA claims,
                service-related matters, and more.
              </p>
              <Link
                to="/veterans-assistance"
                className="inline-flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-widest hover:gap-3 transition-all"
                data-ocid="home.secondary_button"
              >
                Learn More <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              What We Do
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              Practice Areas
            </h2>
            <p className="text-gray-500 text-sm font-sans mt-4 max-w-xl mx-auto">
              Our team of specialist criminal lawyers covers the full spectrum
              of criminal law in Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-7 group"
                style={{ backgroundColor: "#0B1B33" }}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-4 text-gold">
                  <area.icon size={26} strokeWidth={1.5} />
                </div>
                <div className="h-0.5 w-8 bg-gold mb-4" />
                <h3 className="font-serif text-base text-white font-bold uppercase tracking-wide mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-xs font-sans leading-relaxed mb-5">
                  {area.desc}
                </p>
                <Link
                  to="/practice-areas"
                  className="text-gold text-xs font-sans uppercase tracking-widest hover:gap-2 inline-flex items-center gap-1 transition-all"
                  data-ocid="home.secondary_button"
                >
                  Read More <ChevronRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="home.primary_button"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#0A1A30" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              What Our Clients Say
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold uppercase tracking-wide">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-8 border border-gold/20"
              >
                <div className="text-gold text-5xl font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      className="text-gold fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm font-sans leading-relaxed italic mb-6">
                  {t.quote}
                </p>
                <div>
                  <div className="text-gold font-sans text-sm tracking-wide">
                    {t.author}
                  </div>
                  <div className="text-gray-500 text-xs font-sans tracking-wide mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide mb-5">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-500 text-sm font-sans leading-relaxed mb-8 max-w-xl mx-auto">
            Contact Peisley Lawyers today for a confidential consultation. Our
            experienced team is available 24 hours a day, 7 days a week for
            urgent matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="home.primary_button"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:0299990000"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-sans text-sm uppercase tracking-widest transition-all hover:bg-navy hover:text-white"
              data-ocid="home.secondary_button"
            >
              <Phone size={16} />
              (02) 9999 0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
