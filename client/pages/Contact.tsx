import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormspreeForm from "@/components/FormspreeForm";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "Your name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email" as const,
      placeholder: "your@email.com",
      required: true,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text" as const,
      placeholder: "How can we help?",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea" as const,
      placeholder: "Tell us more...",
      required: true,
      rows: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Have questions about AGCC? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="p-8 bg-white border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center mx-auto mb-6">
                <Phone className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Phone</h3>
              <a
                href="tel:+16464440818"
                className="text-lg text-accent font-semibold hover:text-accent/80"
              >
                +1 (646) 444-0818
              </a>
              <p className="text-gray-700 mt-4 text-sm">
                Available Monday - Friday, 9am - 6pm EST
              </p>
            </div>

            {/* Email */}
            <div className="p-8 bg-white border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center mx-auto mb-6">
                <Mail className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Email</h3>
              <a
                href="mailto:info@agccollege.org"
                className="text-lg text-accent font-semibold hover:text-accent/80"
              >
                info@agccollege.org
              </a>
              <p className="text-gray-700 mt-4 text-sm">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Location */}
            <div className="p-8 bg-white border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Global</h3>
              <p className="text-lg text-gray-700 font-medium">
                America Global Citizen College
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Serving students across 6 continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FormspreeForm
            title="Send us a Message"
            description="Have a question? Fill out the form below and we'll get back to you within 24 hours."
            fields={contactFields}
            submitButtonText="Send Message"
            successMessage="Thank you for reaching out! We'll be in touch soon."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">FAQ</span>
          </div>

          <h2 className="text-4xl font-black uppercase text-primary mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 mb-12">
            {[
              {
                q: "What are the admission requirements?",
                a: "We welcome students from grades 6-12. Applicants should demonstrate academic commitment and a willingness to engage in a global learning community.",
              },
              {
                q: "Do you offer scholarships?",
                a: "Yes! Over 80% of our students receive scholarships based on merit, need, or special talent. Contact our admissions team for more details.",
              },
              {
                q: "Is the program fully online?",
                a: "Yes, all classes are conducted online, making education accessible to students worldwide. We offer flexible scheduling to accommodate different time zones.",
              },
              {
                q: "What makes AGCC different?",
                a: "Our unique combination of American curriculum, global perspective, smart education technology, and truly international student body sets us apart.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-8 bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300">
                <h3 className="text-lg font-black uppercase text-primary mb-4">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
            >
              Home
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
