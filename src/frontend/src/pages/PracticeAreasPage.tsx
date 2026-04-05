import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Car,
  ChevronRight,
  DollarSign,
  FileText,
  Gavel,
  Phone,
  Scale,
  Search,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import PageHero from "../components/PageHero";

const areas = [
  {
    icon: Scale,
    title: "Criminal Defence",
    desc: "Our criminal defence practice covers the full spectrum of criminal charges across all courts. Whether you are facing a minor summary offence or a serious indictable charge, our team provides meticulous preparation and skilled advocacy at every stage of proceedings.",
    matters: [
      "Assault",
      "Robbery",
      "Fraud",
      "Bail Applications",
      "Sentence Appeals",
    ],
  },
  {
    icon: Shield,
    title: "Serious & Violent Offences",
    desc: "When facing charges involving serious violence, the stakes could not be higher. Our senior lawyers have extensive experience defending clients charged with murder, manslaughter, grievous bodily harm, and other serious offences in the NSW Supreme Court.",
    matters: [
      "Murder & Manslaughter",
      "Grievous Bodily Harm",
      "Robbery with Violence",
      "Home Invasion",
      "Sexual Assault",
    ],
  },
  {
    icon: DollarSign,
    title: "Drug Offences",
    desc: "Drug charges can carry severe penalties including lengthy terms of imprisonment. We represent clients across all levels of drug matters, from simple possession to large-scale supply and trafficking allegations, with a proven track record of successful outcomes.",
    matters: [
      "Possession",
      "Supply & Trafficking",
      "Cultivation",
      "Importation",
      "Drug Driving",
    ],
  },
  {
    icon: Car,
    title: "Traffic & Driving Offences",
    desc: "A traffic conviction can have serious consequences for your licence, livelihood, and freedom. Our traffic law specialists provide vigorous representation for all driving offences, striving to protect your right to drive and minimise the impact on your life.",
    matters: [
      "Drink Driving (DUI/PCA)",
      "Drug Driving",
      "Licence Disqualification",
      "Speeding",
      "Dangerous Driving",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Apprehended Violence Orders",
    desc: "Whether you are seeking protection through an AVO or have been named as a defendant in AVO proceedings, Peisley Lawyers provides experienced, sensitive representation. We understand the profound impact AVOs can have on families and work to achieve the most appropriate outcome.",
    matters: [
      "ADVO (Domestic)",
      "APVO (Personal)",
      "AVO Breaches",
      "AVO Variations",
      "Final vs Interim AVOs",
    ],
  },
  {
    icon: FileText,
    title: "Appeals & Reviews",
    desc: "If you believe your conviction was wrongful or your sentence was excessive, our appeals team has the expertise to navigate the complex appellate process. We conduct rigorous reviews of trial transcripts and legal arguments to identify and pursue all available grounds of appeal.",
    matters: [
      "Appeal Against Conviction",
      "Appeal Against Sentence",
      "Supreme Court Appeals",
      "Court of Criminal Appeal",
      "Review of Magistrate Decisions",
    ],
  },
  {
    icon: Search,
    title: "Summary Offences",
    desc: "Summary offences heard in the Local Court can still have significant consequences for your criminal record and daily life. Our solicitors bring the same level of dedication and expertise to summary matters as they do to more serious proceedings.",
    matters: [
      "Offensive Behaviour",
      "Trespass",
      "Shoplifting",
      "Minor Assault",
      "Public Order Offences",
    ],
  },
  {
    icon: Gavel,
    title: "White Collar Crime",
    desc: "White collar and financial crime investigations can be lengthy and complex. Our team has extensive experience in fraud, money laundering, tax evasion, and corporate crime matters. We provide strategic advice from the earliest stage of any investigation.",
    matters: [
      "Fraud & Deception",
      "Money Laundering",
      "Tax Offences",
      "Corruption",
      "Corporate Crime",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <div>
      <PageHero
        title="Practice Areas"
        subtitle="Specialist criminal defence across the full spectrum of criminal law in New South Wales and beyond."
        breadcrumb="What We Do"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className="p-8 border-l-4 border-gold bg-gray-50 hover:shadow-navy transition-shadow duration-300"
                data-ocid={`practice.item.${i + 1}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ color: "#C8A24A" }}
                  >
                    <area.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-navy font-bold uppercase tracking-wide mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">
                      {area.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.matters.map((m) => (
                        <span
                          key={m}
                          className="px-2.5 py-1 text-xs font-sans uppercase tracking-wide"
                          style={{
                            backgroundColor: "#0B1B33",
                            color: "#C8A24A",
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-gold text-xs font-sans uppercase tracking-widest hover:gap-2 transition-all"
                      data-ocid="practice.secondary_button"
                    >
                      Enquire Now <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16" style={{ backgroundColor: "#0B1B33" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold uppercase tracking-wide mb-4">
            Facing a Criminal Charge?
          </h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed mb-8">
            Do not delay. Early legal advice can make a significant difference
            to the outcome of your matter. Contact Peisley Lawyers now for an
            urgent, confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans font-700 text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="practice.primary_button"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:0299990000"
              className="inline-flex items-center gap-2 text-white font-sans text-sm uppercase tracking-widest hover:text-gold transition-colors"
              data-ocid="practice.secondary_button"
            >
              <Phone size={16} /> (02) 9999 0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
