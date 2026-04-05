import { Link } from "@tanstack/react-router";
import { ChevronRight, Heart, Scale, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import PageHero from "../components/PageHero";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    desc: "We conduct ourselves with the highest level of professional integrity. Our clients can trust that we will always act in their best interests and provide honest, frank advice.",
  },
  {
    icon: Shield,
    title: "Expertise",
    desc: "Our team brings decades of combined experience in criminal law. We stay at the forefront of legal developments to ensure our clients receive the most current and effective representation.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    desc: "Justice should not be a privilege. We are committed to making quality legal representation accessible to all Australians, including through our comprehensive legal aid services.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We are deeply embedded in the communities we serve. From supporting veterans to assisting disadvantaged Australians, we believe in giving back through dedicated pro bono work.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Peisley Lawyers"
        subtitle="A firm built on integrity, expertise, and an unwavering commitment to justice for all Australians."
        breadcrumb="Our Firm"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold text-xs font-sans uppercase tracking-widest mb-3">
                Our History
              </p>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide mb-6">
                A Tradition of Excellence
              </h2>
              <div className="space-y-4 text-gray-600 text-sm font-sans leading-relaxed">
                <p>
                  Founded in Sydney, Peisley Lawyers has grown to become one of
                  New South Wales's most respected criminal defence firms. Our
                  practice was built upon a simple but profound principle: every
                  person, regardless of their background or means, deserves the
                  best possible legal representation.
                </p>
                <p>
                  Over the years, we have represented thousands of clients
                  across the full spectrum of criminal matters — from summary
                  offences in the Local Court to complex trials in the Supreme
                  Court and Court of Criminal Appeal. Our track record speaks
                  for itself.
                </p>
                <p>
                  Today, Peisley Lawyers continues to lead the way in criminal
                  defence, combining deep legal knowledge with genuine
                  compassion for our clients and their families.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gold font-sans font-700 text-xs uppercase tracking-widest transition-all hover:bg-gold-light"
                style={{ color: "#0B1B33" }}
                data-ocid="about.primary_button"
              >
                Contact Us Today <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <img
                src="/assets/generated/about-courthouse-interior.dim_1200x600.jpg"
                alt="Courthouse interior"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-4 -left-4 p-6 w-56"
                style={{ backgroundColor: "#0B1B33" }}
              >
                <div className="font-serif text-3xl text-gold font-bold">
                  20+
                </div>
                <div className="text-white text-xs font-sans uppercase tracking-wider mt-1">
                  Years of Criminal Defence Excellence
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              What Guides Us
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-7 border-t-2 border-gold shadow-sm"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-4 text-gold">
                  <v.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-navy font-bold uppercase tracking-wide mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-xs font-sans leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              Our People
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              Meet The Legal Team
            </h2>
            <p className="text-gray-500 text-sm font-sans mt-4 max-w-xl mx-auto">
              Our team of experienced criminal defence lawyers brings together
              decades of combined expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Peisley",
                role: "Principal Solicitor",
                img: "/assets/generated/team-principal.dim_400x500.jpg",
                bio: "Over 25 years of criminal defence experience. Former Crown Prosecutor.",
              },
              {
                name: "Sarah Chen",
                role: "Senior Associate",
                img: "/assets/generated/team-senior-associate.dim_400x500.jpg",
                bio: "Specialist in serious criminal matters and the Court of Criminal Appeal.",
              },
              {
                name: "Thomas Walsh",
                role: "Associate Solicitor",
                img: "/assets/generated/team-associate.dim_400x500.jpg",
                bio: "Expert in drug offences, AVOs, and traffic law matters.",
              },
              {
                name: "Rebecca Nguyen",
                role: "Solicitor",
                img: "/assets/generated/team-solicitor.dim_400x500.jpg",
                bio: "Dedicated to veterans' legal matters and community legal aid work.",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                </div>
                <h3 className="font-serif text-lg text-navy font-bold tracking-wide">
                  {member.name}
                </h3>
                <div className="text-gold text-xs font-sans uppercase tracking-widest mt-1 mb-2">
                  {member.role}
                </div>
                <p className="text-gray-500 text-xs font-sans leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-16" style={{ backgroundColor: "#0B1B33" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold uppercase tracking-wide mb-5">
            Our Community Commitment
          </h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed mb-8 max-w-2xl mx-auto">
            Peisley Lawyers actively supports access to justice for all
            Australians. We partner with Legal Aid NSW, assist Australian
            veterans through specialist support programmes, and participate in
            pro bono legal clinics across Greater Sydney.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/free-legal-aid"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold font-sans font-700 text-xs uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="about.primary_button"
            >
              Free Legal Aid
            </Link>
            <Link
              to="/veterans-assistance"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-sans text-xs uppercase tracking-widest transition-all hover:border-gold hover:text-gold"
              data-ocid="about.secondary_button"
            >
              Veterans Assistance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
