import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  FileText,
  Heart,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import PageHero from "../components/PageHero";

const services = [
  {
    id: "dva-claims",
    icon: FileText,
    title: "DVA Claims & Appeals",
    desc: "Assisting veterans in making and appealing Department of Veterans' Affairs claims, including liability claims for service-related injuries, conditions, and disabilities.",
  },
  {
    id: "service-offences",
    icon: Shield,
    title: "Service-Related Offences",
    desc: "Providing specialist defence for criminal matters where the offence arises from or is connected to your military service, deployments, or the challenges of reintegration.",
  },
  {
    id: "ptsd-mental-health",
    icon: Heart,
    title: "PTSD & Mental Health Matters",
    desc: "Advocating for veterans whose legal circumstances are affected by PTSD, moral injury, or other service-related mental health conditions. We present this evidence strategically to the court.",
  },
  {
    id: "civilian-transition",
    icon: Users,
    title: "Transition to Civilian Life",
    desc: "Legal guidance for the challenges that can arise during the transition from military to civilian life, including employment disputes, accommodation matters, and family law intersections.",
  },
];

const whySpecialist = [
  "Military service creates unique psychological and social pressures not experienced by civilians",
  "PTSD and other service-related conditions are directly relevant to sentencing and orders",
  "Veterans may be eligible for specialist court pathways and diversion programmes",
  "DVA entitlements and support services require expert navigation",
  "Courts increasingly recognise the impact of service when imposing penalties",
  "A non-specialist lawyer may not understand the complexities of military culture and service history",
];

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "After two tours in Afghanistan, I came home struggling. When I found myself in trouble with the law, Peisley Lawyers understood what I'd been through. They presented my service history and PTSD diagnosis to the court and fought for the right outcome. I cannot thank them enough.",
    author: "Corporal D.H. (Retired)",
    role: "Australian Army, 2nd Commando Regiment",
  },
  {
    id: "testimonial-2",
    quote:
      "The DVA claims process was overwhelming until Peisley Lawyers stepped in. They knew the system inside out, prepared a thorough submission, and achieved a successful liability claim for my hearing loss and knee injury. Professional and compassionate throughout.",
    author: "Leading Seaman M.T. (Retired)",
    role: "Royal Australian Navy",
  },
  {
    id: "testimonial-3",
    quote:
      "Finding a lawyer who genuinely understood the unique challenges veterans face was impossible until I contacted Peisley Lawyers. They treated me with dignity and respect, and the outcome was far better than I expected.",
    author: "Flight Lieutenant J.P. (Retired)",
    role: "Royal Australian Air Force",
  },
];

export default function VeteransAssistancePage() {
  return (
    <div>
      <PageHero
        title="Veterans Assistance"
        subtitle="Dedicated legal services for Australian veterans. We understand the unique challenges of service and stand beside those who have served our nation."
        breadcrumb="Serving Those Who Served"
      />

      {/* Hero Image */}
      <section className="relative">
        <div
          className="w-full h-72 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/veterans-assistance-hero.dim_1200x600.jpg')",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(11,27,51,0.5)" }}
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gold text-xs font-sans uppercase tracking-widest mb-3">
                Our Commitment
              </p>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide mb-6">
                Why Veterans Need Specialist Legal Help
              </h2>
              <div className="space-y-4 text-gray-600 text-sm font-sans leading-relaxed">
                <p>
                  Australian veterans have given an extraordinary commitment to
                  our nation. When they face legal challenges — whether criminal
                  charges, DVA disputes, or the complexities of transitioning to
                  civilian life — they deserve legal representation that truly
                  understands their unique circumstances.
                </p>
                <p>
                  Military service can profoundly affect mental health,
                  relationships, and behaviour. Conditions such as PTSD, moral
                  injury, and traumatic brain injury are increasingly recognised
                  by the courts as significant mitigating factors. A specialist
                  legal team knows how to present this evidence effectively.
                </p>
                <p>
                  Peisley Lawyers has built a dedicated veterans' legal practice
                  because we believe those who served deserve more than a
                  generic legal service. We understand the culture, the
                  language, and the challenges of military service.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg text-navy font-bold uppercase tracking-wide mb-4">
                  Why Choose a Specialist
                </h3>
                <ul className="space-y-3">
                  {whySpecialist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        className="text-gold mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 text-xs font-sans leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="p-6 border-t-2 border-gold bg-gray-50 hover:shadow-navy transition-shadow"
                  data-ocid={`veterans.item.${i + 1}`}
                >
                  <div className="text-gold mb-4">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base text-navy font-bold uppercase tracking-wide mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#0A1A30" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              From Those Who Served
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold uppercase tracking-wide">
              Veterans Speak
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

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-navy font-bold uppercase tracking-wide mb-4">
            Speak to a Veterans' Legal Specialist
          </h2>
          <p className="text-gray-500 text-sm font-sans leading-relaxed mb-8">
            If you are a veteran facing legal challenges, contact Peisley
            Lawyers today. We offer a free, confidential consultation to all
            current and former members of the Australian Defence Force.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="veterans.primary_button"
            >
              Free Consultation <ChevronRight size={14} />
            </Link>
            <a
              href="tel:0299990000"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-sans text-sm uppercase tracking-widest transition-all hover:bg-navy hover:text-white"
              data-ocid="veterans.secondary_button"
            >
              <Phone size={16} /> (02) 9999 0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
