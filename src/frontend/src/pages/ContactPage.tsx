import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import PageHero from "../components/PageHero";
import { createActorWithConfig } from "../config";

const subjects = [
  "Criminal Defence",
  "Serious & Violent Offences",
  "Drug Offences",
  "Traffic & Driving Offences",
  "Apprehended Violence Orders",
  "Appeals & Reviews",
  "Summary Offences",
  "White Collar Crime",
  "Free Legal Aid Enquiry",
  "Veterans Assistance",
  "General Enquiry",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.subject) errs.subject = "Please select a matter type.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    try {
      const actor = await createActorWithConfig();
      await actor.submitEnquiry(
        form.name,
        form.email,
        form.phone,
        form.subject,
        form.message,
      );
      setSubmitted(true);
      setForm(initialForm);
      toast.success(
        "Your enquiry has been submitted. We will be in touch shortly.",
      );
    } catch (err) {
      console.error(err);
      toast.error(
        "There was an error submitting your enquiry. Please try again or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Speak with an experienced criminal defence lawyer today. Initial consultations are free and strictly confidential."
        breadcrumb="Get In Touch"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h2 className="font-serif text-2xl text-navy font-bold uppercase tracking-wide mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0B1B33" }}
                  >
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-sans text-navy text-xs uppercase tracking-widest mb-1">
                      Office Address
                    </div>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">
                      123 Justice Street
                      <br />
                      Sydney NSW 2000
                      <br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0B1B33" }}
                  >
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-sans text-navy text-xs uppercase tracking-widest mb-1">
                      Telephone
                    </div>
                    <a
                      href="tel:0299990000"
                      className="text-gray-600 text-sm font-sans hover:text-gold transition-colors block"
                    >
                      (02) 9999 0000
                    </a>
                    <a
                      href="tel:0299990001"
                      className="text-gray-400 text-xs font-sans hover:text-gold transition-colors block mt-0.5"
                    >
                      24/7 Emergency: (02) 9999 0001
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0B1B33" }}
                  >
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-sans text-navy text-xs uppercase tracking-widest mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:enquiries@peisleylawyers.com.au"
                      className="text-gray-600 text-sm font-sans hover:text-gold transition-colors"
                    >
                      enquiries@peisleylawyers.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0B1B33" }}
                  >
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-sans text-navy text-xs uppercase tracking-widest mb-1">
                      Office Hours
                    </div>
                    <div className="text-gray-600 text-sm font-sans leading-relaxed">
                      <div>Monday – Friday: 8:30am – 5:30pm</div>
                      <div>Saturday: 9:00am – 1:00pm</div>
                      <div className="text-gold mt-1">
                        24/7 Emergency Line Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="mt-8 h-48 flex items-center justify-center"
                style={{ backgroundColor: "#0B1B33" }}
              >
                <div className="text-center">
                  <MapPin size={32} className="text-gold mx-auto mb-2" />
                  <p className="text-white text-xs font-sans uppercase tracking-widest">
                    123 Justice Street
                  </p>
                  <p className="text-gray-400 text-xs font-sans mt-1">
                    Sydney NSW 2000
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="w-8 h-0.5 bg-gold mb-5" />
              <h2 className="font-serif text-2xl text-navy font-bold uppercase tracking-wide mb-8">
                Send An Enquiry
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-10 text-center border-2 border-gold"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-5" />
                  <h3 className="font-serif text-2xl text-navy font-bold uppercase tracking-wide mb-3">
                    Enquiry Received
                  </h3>
                  <p className="text-gray-600 text-sm font-sans leading-relaxed mb-6">
                    Thank you for contacting Peisley Lawyers. A member of our
                    team will be in touch with you within one business day. For
                    urgent matters, please call us directly on (02) 9999 0000.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-gold text-xs font-sans uppercase tracking-widest hover:underline"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  data-ocid="contact.modal"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-sans uppercase tracking-widest text-navy"
                      >
                        Full Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Smith"
                        className={`font-sans text-sm border-gray-300 focus:ring-gold focus:border-gold ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        data-ocid="contact.input"
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p
                          className="text-red-500 text-xs font-sans"
                          data-ocid="contact.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-sans uppercase tracking-widest text-navy"
                      >
                        Email Address <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        className={`font-sans text-sm border-gray-300 focus:ring-gold focus:border-gold ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        data-ocid="contact.input"
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p
                          className="text-red-500 text-xs font-sans"
                          data-ocid="contact.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-sans uppercase tracking-widest text-navy"
                      >
                        Phone Number <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(02) 9999 0000"
                        className={`font-sans text-sm border-gray-300 focus:ring-gold focus:border-gold ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        data-ocid="contact.input"
                        autoComplete="tel"
                      />
                      {errors.phone && (
                        <p
                          className="text-red-500 text-xs font-sans"
                          data-ocid="contact.error_state"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-xs font-sans uppercase tracking-widest text-navy"
                      >
                        Matter Type <span className="text-gold">*</span>
                      </Label>
                      <Select
                        value={form.subject}
                        onValueChange={(v) => handleChange("subject", v)}
                      >
                        <SelectTrigger
                          id="subject"
                          className={`font-sans text-sm border-gray-300 ${
                            errors.subject ? "border-red-500" : ""
                          }`}
                          data-ocid="contact.select"
                        >
                          <SelectValue placeholder="Select a matter type" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((s) => (
                            <SelectItem
                              key={s}
                              value={s}
                              className="font-sans text-sm"
                            >
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p
                          className="text-red-500 text-xs font-sans"
                          data-ocid="contact.error_state"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-sans uppercase tracking-widest text-navy"
                    >
                      Your Message <span className="text-gold">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please briefly describe your legal matter. All information is strictly confidential."
                      rows={6}
                      className={`font-sans text-sm border-gray-300 focus:ring-gold focus:border-gold resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-red-500 text-xs font-sans"
                        data-ocid="contact.error_state"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-gold">
                    <p className="text-gray-500 text-xs font-sans leading-relaxed">
                      All communications with Peisley Lawyers are protected by
                      legal professional privilege and are strictly
                      confidential. Submitting this form does not create a
                      solicitor-client relationship.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-3 font-sans text-xs uppercase tracking-widest"
                    style={{ backgroundColor: "#C8A24A", color: "#0B1B33" }}
                    data-ocid="contact.submit_button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
