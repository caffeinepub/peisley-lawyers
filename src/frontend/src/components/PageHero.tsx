import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20"
      style={{ backgroundColor: "#0B1B33" }}
    >
      {/* Decorative diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{
          background: "linear-gradient(to bottom right, #0B1B33 49%, #fff 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gold text-xs font-sans uppercase tracking-widest mb-3"
          >
            {breadcrumb}
          </motion.p>
        )}
        <div className="w-12 h-0.5 bg-gold mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-white font-bold uppercase tracking-wide"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-300 text-base font-sans max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
