import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Globe, GraduationCap, DollarSign, Code2, Languages, Globe as GlobeIcon, Users, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQCategory {
  icon: React.ReactNode;
  title: string;
  emoji: string;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    icon: <Globe size={32} />,
    title: "About AGCC",
    emoji: "🌍",
    faqs: [
      {
        question: "What is America Global Citizen College (AGCC)?",
        answer: "America Global Citizen College (AGCC) is an international online educational institution that provides American-standard education, career readiness programs, vocational training, and global learning opportunities for students around the world. AGCC combines Smart Education technology, global classroom collaboration, and practical learning experiences to prepare students for academic and professional success."
      },
      {
        question: "What grades does AGCC serve?",
        answer: [
          "AGCC offers educational programs for students from:",
          "Grade 6 through Grade 12",
          "JSS1 – SS3",
          "High school graduates",
          "Adult learners and career development students"
        ]
      },
      {
        question: "Is AGCC an online school?",
        answer: "Yes. AGCC is a flexible online learning institution that allows students to learn from anywhere in the world through virtual classrooms, live lessons, interactive learning systems, and global collaboration platforms."
      },
      {
        question: "Which countries do AGCC students come from?",
        answer: [
          "AGCC students come from countries including:",
          "Nigeria, Kenya, India, UAE, United States",
          "Europe and other regions worldwide"
        ]
      }
    ]
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Admissions & Enrollment",
    emoji: "🎓",
    faqs: [
      {
        question: "Who can apply to AGCC?",
        answer: [
          "AGCC welcomes:",
          "Middle school students",
          "High school students",
          "Fresh high school graduates",
          "Adult learners",
          "International students seeking flexible global education opportunities"
        ]
      },
      {
        question: "How do I apply?",
        answer: [
          "Students and parents can apply by:",
          "Completing an application form",
          "Requesting admissions information",
          "Contacting AGCC directly through email or phone",
          "Admissions support is available to guide applicants through the process."
        ]
      },
      {
        question: "Are programs currently open for enrollment?",
        answer: [
          "Yes. Some AGCC programs are currently open for enrollment.",
          "Parents and applicants are encouraged to contact AGCC with their area of interest, preferred academic program, and career goals.",
          "Our admissions team will provide detailed enrollment information and next steps."
        ]
      },
      {
        question: "Does AGCC offer flexible learning schedules?",
        answer: [
          "Yes. AGCC operates a highly flexible learning system designed to fit students' time zones, daily schedules, family commitments, career goals, and educational needs.",
          "Programs may include: Full-time learning, Part-time schedules, Weekend classes, After-school support programs, Customized learning pathways"
        ]
      }
    ]
  },
  {
    icon: <DollarSign size={32} />,
    title: "Tuition & Scholarships",
    emoji: "💳",
    faqs: [
      {
        question: "How much is tuition at AGCC?",
        answer: [
          "Tuition varies depending on:",
          "Student learning needs",
          "Program selection",
          "Customized schedules",
          "Academic support requirements",
          "AGCC uses a flexible tuition system where tuition details are communicated after an assessment process."
        ]
      },
      {
        question: "Does AGCC offer payment plans?",
        answer: "Yes. Flexible payment plans are available to help families manage tuition conveniently."
      },
      {
        question: "Are scholarships available?",
        answer: [
          "AGCC periodically offers scholarships for deserving students based on:",
          "Academic merit",
          "Financial need",
          "Leadership potential",
          "Special talents",
          "However, scholarships are not always available year-round and are usually announced during application seasons."
        ]
      },
      {
        question: "Can tuition discounts be available?",
        answer: [
          "Yes. Tuition discounts and support options may be considered depending on:",
          "Student needs",
          "Family circumstances",
          "Program structure",
          "Enrollment category",
          "Each student's tuition plan is assessed individually."
        ]
      }
    ]
  },
  {
    icon: <Code2 size={32} />,
    title: "Academics & Learning",
    emoji: "💻",
    faqs: [
      {
        question: "What curriculum does AGCC offer?",
        answer: [
          "AGCC provides an American-style curriculum that includes:",
          "Mathematics, English Language Arts, Science, Social Studies",
          "Business Studies, Coding & Technology, Entrepreneurship",
          "Digital Arts & Media Communication"
        ]
      },
      {
        question: "What is Smart Education?",
        answer: [
          "AGCC's Smart Education system combines:",
          "AI-enhanced learning, Adaptive learning systems",
          "Interactive assessments, Virtual labs and simulations",
          "Real-time mentorship and feedback"
        ]
      },
      {
        question: "Does AGCC offer vocational training?",
        answer: [
          "Yes. AGCC provides vocational and career readiness programs including:",
          "Plumbing, Technology & Innovation, Agriculture & Smart Farming",
          "Healthcare Support, Entrepreneurship",
          "Remote work and freelancing skills"
        ]
      },
      {
        question: "Who teaches vocational programs?",
        answer: "AGCC vocational programs are taught by experienced professionals and instructors. For example, AGCC's plumbing instructor, Wilfred Talbert, brings over 15 years of industry experience and professional certifications in vocational education."
      }
    ]
  },
  {
    icon: <Languages size={32} />,
    title: "Languages & Test Preparation",
    emoji: "🗣️",
    faqs: [
      {
        question: "Does AGCC offer IELTS and TOEFL preparation?",
        answer: [
          "Yes. AGCC offers preparation programs for:",
          "IELTS, TOEFL, PTE, CELPIP",
          "Other international English proficiency exams"
        ]
      },
      {
        question: "What languages can students learn at AGCC?",
        answer: [
          "Students can study:",
          "Spanish, French, German, Italian, Dutch, Edo Language",
          "English language development programs"
        ]
      }
    ]
  },
  {
    icon: <GlobeIcon size={32} />,
    title: "Global Opportunities",
    emoji: "🌎",
    faqs: [
      {
        question: "Does AGCC offer study abroad opportunities?",
        answer: [
          "Yes. AGCC offers:",
          "Student exchange programs",
          "Educational travel programs",
          "Leadership summits",
          "University campus tours",
          "Cultural exchange experiences"
        ]
      },
      {
        question: "What countries are included in AGCC exchange programs?",
        answer: [
          "Programs may include opportunities in:",
          "United States, Canada, Europe, Africa"
        ]
      },
      {
        question: "What are AGCC Travel Learning Programs?",
        answer: [
          "AGCC Travel Learning Programs include:",
          "Cultural Diplomacy, Citizen Diplomacy, Public Diplomacy",
          "Leadership engagement experiences",
          "Cultural heritage and exchange learning",
          "Students gain global exposure, leadership development, and real-world learning experiences."
        ]
      },
      {
        question: "When are travel program dates announced?",
        answer: [
          "Travel program dates are usually announced at the beginning of each calendar year, along with:",
          "Destinations, Program details, Participation requirements, Estimated travel costs"
        ]
      }
    ]
  },
  {
    icon: <Users size={32} />,
    title: "Faculty & Support",
    emoji: "👩‍🏫",
    faqs: [
      {
        question: "Who leads AGCC?",
        answer: [
          "AGCC is led by experienced educators and global education advocates:",
          "Terry Ann Talbert — Proprietress",
          "Jace Owie — Chairman, School Council"
        ]
      },
      {
        question: "Are AGCC teachers qualified?",
        answer: "Yes. AGCC educators are experienced instructors committed to global education, personalized learning, and student success. Faculty members include professionals with international educational and vocational experience."
      },
      {
        question: "Can parents be involved in the learning process?",
        answer: [
          "Yes. AGCC encourages strong parent-school collaboration through:",
          "Academic updates, Parent engagement sessions",
          "Learning support communication, Student progress monitoring"
        ]
      },
      {
        question: "Does AGCC provide academic support?",
        answer: [
          "Yes. AGCC offers:",
          "Academic mentoring, Personalized guidance",
          "Real-time feedback, Career support",
          "Student advising and counseling"
        ]
      }
    ]
  }
];

function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 px-6 hover:bg-gray-50 transition duration-300 flex items-center justify-between group"
      >
        <h3 className="font-bold text-primary uppercase tracking-wide text-sm group-hover:text-accent transition duration-300">
          {faq.question}
        </h3>
        <ChevronDown
          size={20}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 bg-gray-50 text-gray-800 leading-relaxed">
          {Array.isArray(faq.answer) ? (
            <ul className="space-y-3">
              {faq.answer.map((line, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>{faq.answer}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Student Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Answers to Common Questions About AGCC
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Welcome to the AGCC Frequently Asked Questions page. Below are answers to common questions from students, parents, and prospective applicants about our programs, admissions, tuition, global opportunities, and flexible learning system.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {faqCategories.map((category, idx) => (
              <div key={idx}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-primary">{category.icon}</div>
                  </div>
                  <div>
                    <p className="text-4xl mb-2">{category.emoji}</p>
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* FAQs */}
                <div className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden">
                  {category.faqs.map((faq, faqIdx) => (
                    <FAQAccordion key={faqIdx} faq={faq} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
            Still Have Questions?
          </h2>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed">
            If you don't find the answer you're looking for, our admissions and support team is here to help. Contact us anytime with your questions about programs, admissions, tuition, or any aspect of AGCC.
          </p>

          <div className="bg-white border-2 border-accent p-12 rounded-lg mb-12">
            <h3 className="text-2xl font-black uppercase text-primary mb-6">Get in Touch</h3>
            <a
              href="mailto:info@agccollege.org"
              className="text-lg text-accent font-bold hover:text-accent/80 transition duration-300 block mb-4"
            >
              info@agccollege.org
            </a>
            <a
              href="tel:+16464440818"
              className="text-lg text-accent font-bold hover:text-accent/80 transition duration-300"
            >
              +1 (646) 444-0818
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Home
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
