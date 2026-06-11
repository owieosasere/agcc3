import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormspreeForm from "@/components/FormspreeForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Apply() {
  const applyFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text" as const,
      placeholder: "Your full name",
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
      name: "phone",
      label: "Phone Number",
      type: "tel" as const,
      placeholder: "+1 (555) 000-0000",
      required: false,
    },
    {
      name: "studentType",
      label: "I am applying as",
      type: "select" as const,
      required: true,
      options: [
        { label: "Current Student", value: "current-student" },
        { label: "Prospective Student (Grade 6-8)", value: "middle-school" },
        { label: "Prospective Student (Grade 9-12)", value: "high-school" },
        { label: "Adult Learner", value: "adult" },
        { label: "Instructor", value: "instructor" },
      ],
    },
    {
      name: "grade",
      label: "Current Grade Level (if applicable)",
      type: "select" as const,
      required: false,
      options: [
        { label: "Grade 6", value: "6" },
        { label: "Grade 7", value: "7" },
        { label: "Grade 8", value: "8" },
        { label: "Grade 9", value: "9" },
        { label: "Grade 10", value: "10" },
        { label: "Grade 11", value: "11" },
        { label: "Grade 12", value: "12" },
      ],
    },
    {
      name: "programInterest",
      label: "Program of Interest",
      type: "select" as const,
      required: true,
      options: [
        { label: "High School Education", value: "high-school" },
        { label: "AP Courses", value: "ap-courses" },
        { label: "After School Academy", value: "after-school" },
        { label: "Weekend Academy", value: "weekend-academy" },
        { label: "Study Abroad", value: "study-abroad" },
        { label: "Arts Program", value: "arts-program" },
        { label: "Multiple Programs", value: "multiple" },
        { label: "I'm not sure yet", value: "not-sure" },
      ],
    },
    {
      name: "parentEmail",
      label: "Parent/Guardian Email (for minors)",
      type: "email" as const,
      placeholder: "parent@email.com",
      required: false,
    },
    {
      name: "additionalInfo",
      label: "Tell us about yourself",
      type: "textarea" as const,
      placeholder: "Why are you interested in AGCC? What are your academic goals?",
      required: false,
      rows: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fc179a1c20bc446a0abc0edad7d88fcf7?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">
              Admissions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Apply to AGCC
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Take the first step towards a transformative global education
            experience. Our admissions team is here to support you through the
            application process.
          </p>
        </div>
      </section>

      {/* Why AGCC Benefits */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-primary text-center mb-16">
            Why Choose AGCC?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Perspective",
                description:
                  "Learn alongside students from 6 continents in a truly international classroom.",
              },
              {
                title: "American Curriculum",
                description:
                  "Rigorous American academic standards with a global perspective and real-world applications.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Study on your schedule with 100% online classes and access to diverse learning opportunities.",
              },
              {
                title: "Smart Education Technology",
                description:
                  "Leverage cutting-edge learning platforms and AI-enhanced educational tools.",
              },
              {
                title: "Expert Faculty",
                description:
                  "Learn from world-class educators with diverse expertise and international experience.",
              },
              {
                title: "Affordable Excellence",
                description:
                  "Over 80% of students receive scholarships and financial aid packages.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-black uppercase text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FormspreeForm
            title="Application Form"
            description="Complete the form below to apply to AGCC. Our admissions team will review your application and contact you within 48 hours."
            fields={applyFields}
            submitButtonText="Submit Application"
            successMessage="Thank you for applying! We'll review your application and contact you soon."
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-primary text-center mb-16">
            Application Process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Complete the application form above with your contact information and program preferences.",
              },
              {
                step: "2",
                title: "Review & Assessment",
                description:
                  "Our admissions team reviews your application and contacts you to schedule an assessment.",
              },
              {
                step: "3",
                title: "Interview & Consultation",
                description:
                  "Have a personal conversation with our admissions counselor to discuss your goals and options.",
              },
              {
                step: "4",
                title: "Enrollment & Start",
                description:
                  "Receive your offer, complete enrollment, and begin your AGCC learning journey!",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white font-black text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-black uppercase text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-primary text-center mb-16">
            Application FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What are the minimum requirements for admission?",
                a: "We welcome students from Grades 6-12 who demonstrate academic commitment and a willingness to engage in a global community. Each application is reviewed individually.",
              },
              {
                q: "Is there an application fee?",
                a: "No, there is no application fee to apply to AGCC. Our commitment is to make education accessible.",
              },
              {
                q: "How long is the application process?",
                a: "The entire process typically takes 2-3 weeks from initial application to enrollment decision.",
              },
              {
                q: "Can I apply for multiple programs?",
                a: "Yes! Many of our students are enrolled in multiple programs. Indicate your interest in the application.",
              },
              {
                q: "Do you offer scholarships?",
                a: "Yes! Over 80% of AGCC students receive some form of financial aid. Discuss options with our admissions team.",
              },
              {
                q: "What if I'm from outside the US?",
                a: "AGCC welcomes international students! We work with students worldwide across different time zones.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <h3 className="text-lg font-black uppercase text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Need Help with Your Application?
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-8 leading-relaxed">
            Our admissions team is ready to answer your questions and guide you
            through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16464440818"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call Us
            </a>
            <a
              href="mailto:info@agccollege.org"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all duration-300"
            >
              Email Us
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
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
