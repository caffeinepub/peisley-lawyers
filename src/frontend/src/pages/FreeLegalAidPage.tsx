import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight, HelpCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import PageHero from "../components/PageHero";

const eligibilityCriteria = [
  "Your matter involves a criminal charge heard in a NSW or Federal court",
  "Your financial circumstances fall within Legal Aid NSW income and asset guidelines",
  "It is in the interests of justice for you to receive legal representation",
  "You are an Australian citizen, permanent resident, or have a relevant visa status",
  "The gravity of the charge creates a real risk of imprisonment or loss of livelihood",
  "You have been charged but cannot afford to engage a private solicitor",
];

const processSteps = [
  {
    step: "01",
    title: "Initial Contact",
    desc: "Contact our office by phone, email, or in person. We will arrange an initial consultation at no charge to discuss your circumstances and the nature of your legal matter.",
  },
  {
    step: "02",
    title: "Eligibility Assessment",
    desc: "Our solicitors will conduct a thorough assessment of your financial situation and the merits of your case against the current Legal Aid NSW guidelines. This process is entirely confidential.",
  },
  {
    step: "03",
    title: "Application Preparation",
    desc: "If you appear to be eligible, our team will assist you in preparing and lodging your Legal Aid application. We guide you through every form and requirement to maximise your chances of approval.",
  },
  {
    step: "04",
    title: "Determination",
    desc: "Legal Aid NSW will assess your application and make a determination. Should your application be approved, Peisley Lawyers will be assigned to represent you for the duration of your matter.",
  },
  {
    step: "05",
    title: "Representation",
    desc: "Our team will provide you with the same quality of representation as any privately-funded client. You will have direct access to your solicitor throughout your proceedings.",
  },
  {
    step: "06",
    title: "Review & Appeals",
    desc: "Should your initial application be refused, we can assist you in seeking a review of that decision. We are experienced advocates within the legal aid review process.",
  },
];

const faqs = [
  {
    id: "what-is-legal-aid",
    q: "What is Legal Aid?",
    a: "Legal Aid is government-funded legal assistance provided to people who cannot afford private legal representation. In NSW, Legal Aid is administered by Legal Aid NSW and is available for eligible criminal, family, and civil matters.",
  },
  {
    id: "do-i-qualify",
    q: "How do I know if I qualify for Legal Aid?",
    a: "Eligibility is assessed based on your financial circumstances (a means test), the nature and merits of your legal matter (a merits test), and whether it is in the interests of justice for you to receive funded representation. Our solicitors will provide you with an honest assessment of your prospects.",
  },
  {
    id: "what-matters-covered",
    q: "Does Legal Aid cover all types of criminal matters?",
    a: "Legal Aid is most commonly available for serious criminal matters where there is a risk of imprisonment or significant penalty. Minor summary offences may not always attract a grant of aid. Our team will advise you on the prospects for your specific matter.",
  },
  {
    id: "same-quality",
    q: "Will I receive the same quality of legal representation on Legal Aid?",
    a: "Absolutely. Peisley Lawyers maintains the same high standards of representation regardless of how a matter is funded. Every client, whether privately-funded or on Legal Aid, receives the full attention and expertise of our team.",
  },
  {
    id: "refused",
    q: "What if my Legal Aid application is refused?",
    a: "If your application is refused, you have the right to seek a review of that decision. Our team has extensive experience in pursuing Legal Aid reviews and will advise you on the best course of action.",
  },
  {
    id: "other-options",
    q: "Are there other options if I cannot get Legal Aid?",
    a: "Yes. In addition to Legal Aid, Peisley Lawyers participates in various community legal centres, pro bono programmes, and duty solicitor schemes. We will explore every available avenue to ensure you receive appropriate legal assistance.",
  },
];

export default function FreeLegalAidPage() {
  return (
    <div>
      <PageHero
        title="Free Legal Aid"
        subtitle="Access to justice is a fundamental right. Peisley Lawyers is committed to ensuring all Australians can access quality legal representation."
        breadcrumb="Legal Assistance"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gold text-xs font-sans uppercase tracking-widest mb-3">
                Understanding Legal Aid
              </p>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide mb-6">
                What Is Free Legal Aid?
              </h2>
              <div className="space-y-4 text-gray-600 text-sm font-sans leading-relaxed">
                <p>
                  Legal Aid provides government-funded legal assistance to
                  Australians who cannot afford private legal representation. In
                  New South Wales, Legal Aid NSW administers this scheme and
                  funds private practitioners — such as Peisley Lawyers — to
                  represent eligible clients.
                </p>
                <p>
                  The scheme exists to ensure that no person is denied access to
                  justice simply because they cannot afford a lawyer. This is
                  particularly critical in criminal matters, where your liberty,
                  livelihood, and reputation may be at stake.
                </p>
                <p>
                  Peisley Lawyers is a proud Legal Aid NSW preferred provider.
                  We actively advocate for our clients within the legal aid
                  system and work tirelessly to ensure eligible individuals
                  receive the representation they are entitled to.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8"
              style={{ backgroundColor: "#0B1B33" }}
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h3 className="font-serif text-xl text-white font-bold uppercase tracking-wide mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-gold mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-300 text-xs font-sans leading-relaxed">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gold/20">
                <p className="text-gray-400 text-xs font-sans italic">
                  Eligibility is determined on a case-by-case basis. Contact us
                  for a free assessment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-sans uppercase tracking-widest mb-2">
              How It Works
            </p>
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              The Application Process
            </h2>
            <p className="text-gray-500 text-sm font-sans mt-4 max-w-xl mx-auto">
              We guide you through every step of the legal aid application
              process, removing the burden from your shoulders during what is
              already a stressful time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="bg-white p-7 relative"
              >
                <div
                  className="font-serif text-6xl font-bold absolute top-5 right-6 leading-none"
                  style={{ color: "rgba(200,162,74,0.12)" }}
                >
                  {step.step}
                </div>
                <div className="font-serif text-gold text-xl font-bold mb-3">
                  {step.step}
                </div>
                <h3 className="font-serif text-lg text-navy font-bold uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs font-sans leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <HelpCircle size={32} className="text-gold mx-auto mb-4" />
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-bold uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-gray-200 px-5"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="font-sans text-sm text-navy py-4 hover:no-underline hover:text-gold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs font-sans leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0B1B33" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl text-white font-bold uppercase tracking-wide mb-4">
            Find Out If You Qualify
          </h2>
          <p className="text-gray-300 text-sm font-sans leading-relaxed mb-8">
            Contact Peisley Lawyers today for a confidential, no-obligation
            assessment of your eligibility for Legal Aid. Our team is here to
            help you access the representation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold font-sans text-sm uppercase tracking-widest transition-all hover:bg-gold-light"
              style={{ color: "#0B1B33" }}
              data-ocid="legalaid.primary_button"
            >
              Free Assessment <ChevronRight size={14} />
            </Link>
            <a
              href="tel:0299990000"
              className="inline-flex items-center gap-2 text-white font-sans text-sm uppercase tracking-widest hover:text-gold transition-colors"
              data-ocid="legalaid.secondary_button"
            >
              <Phone size={16} /> (02) 9999 0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
