import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, BookOpen, Globe, Briefcase, Code2, Brain, CheckCircle, Mail, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface APCategory {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  courses: string[];
  description: string;
}

const apCategories: APCategory[] = [
  {
    icon: <Calculator size={32} />,
    emoji: "🧮",
    title: "AP Mathematics & Sciences",
    courses: [
      "AP Calculus Foundations",
      "Advanced Algebra & Pre-Calculus",
      "AP Biology Foundations",
      "AP Chemistry Foundations",
      "AP Physics Introduction"
    ],
    description: "Students develop strong analytical, problem-solving, and scientific reasoning skills through rigorous coursework aligned with university standards."
  },
  {
    icon: <BookOpen size={32} />,
    emoji: "📖",
    title: "AP English & Communication",
    courses: [
      "AP English Language & Composition",
      "AP Literature & Critical Writing",
      "Academic Writing & Research Skills",
      "Public Speaking & Debate"
    ],
    description: "These courses build strong communication, writing, and critical thinking abilities essential for academic and professional success."
  },
  {
    icon: <Globe size={32} />,
    emoji: "🌍",
    title: "AP Social Sciences & Global Studies",
    courses: [
      "AP World History",
      "AP U.S. History",
      "Global Citizenship Studies",
      "Political Science & International Relations"
    ],
    description: "Students gain a deeper understanding of global systems, governance, and society through comprehensive historical and contemporary analysis."
  },
  {
    icon: <Briefcase size={32} />,
    emoji: "💼",
    title: "AP Business & Entrepreneurship",
    courses: [
      "Business Studies Fundamentals",
      "Entrepreneurship & Innovation",
      "Financial Literacy & Economics Basics",
      "Digital Marketing Introduction"
    ],
    description: "These courses prepare students for modern business and career success with practical, real-world applications."
  },
  {
    icon: <Code2 size={32} />,
    emoji: "💻",
    title: "AP Technology & Digital Skills",
    courses: [
      "Introduction to Coding & Programming",
      "Digital Literacy & Computer Science",
      "Artificial Intelligence Awareness",
      "Media & Digital Communication"
    ],
    description: "Students build essential skills for the digital economy and develop competency in emerging technologies."
  }
];

export default function APCourses() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Advanced Studies</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            AP Courses at AGCC
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            University-Level Academic Excellence
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            AGCC provides a wide selection of AP-style and advanced academic subjects aligned with international standards, designed to give students a global academic advantage through rigorous coursework and flexible learning.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {apCategories.map((category, idx) => (
              <div key={idx}>
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

                <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-3xl">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.courses.map((course, courseIdx) => (
                    <div key={courseIdx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg border-l-4 border-accent hover:shadow-md transition-all duration-300">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                      <p className="text-gray-800 font-bold">{course}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AP at AGCC */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Why Choose AP Courses at AGCC?
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            AGCC AP courses are designed to give students a global academic advantage by combining rigorous coursework with flexible learning tailored to individual needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "University-level academic preparation",
              "Stronger university and scholarship applications",
              "Improved critical thinking and research skills",
              "Global classroom exposure",
              "Flexible online learning system",
              "Personalized academic support"
            ].map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Award size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Learning Approach */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Smart Learning Approach
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                AGCC integrates its Smart Education model into AP courses, using AI-supported tools and interactive platforms to ensure each student learns at their own pace while meeting international academic standards.
              </p>

              <ul className="space-y-4">
                {[
                  "AI-supported learning tools",
                  "Interactive virtual classrooms",
                  "Real-time academic feedback",
                  "Personalized learning pathways",
                  "Global collaboration with peers"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Brain size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 p-12 rounded-lg">
              <h3 className="text-2xl font-black uppercase text-primary mb-8">Personalized Excellence</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Each AP course is tailored to the student's academic level, learning style, and goals. Our assessment process ensures optimal course recommendations and study pathways.
              </p>
              <div className="space-y-3">
                {[
                  "Adaptive learning systems",
                  "Real-time mentorship support",
                  "Progress monitoring",
                  "Flexible pacing options"
                ].map((item, idx) => (
                  <p key={idx} className="text-gray-800 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Learning for Global Students */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Flexible Learning for Global Students
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            AGCC understands that students have different schedules and time zones. AP courses are designed to be fully online, self-paced, and instructor-supported, making them ideal for international students balancing academics, family, and personal commitments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fully Online", desc: "Access courses from anywhere in the world" },
              { title: "Self-Paced", desc: "Learn at your own speed with instructor support" },
              { title: "Globally Accessible", desc: "Study across different time zones flexibly" },
              { title: "Program Compatible", desc: "Combine with other AGCC academic programs" },
              { title: "After-School Friendly", desc: "Perfect for weekend and evening study" },
              { title: "Flexible Schedules", desc: "Adapt to your personal commitments" }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-accent">
                <h3 className="text-lg font-black uppercase text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AP Courses & University Pathways */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              AP Courses & University Pathways
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            Students who complete AP courses at AGCC benefit from strengthened university profiles and improved readiness for degree-level study.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "University Admission",
                items: ["Stronger admission profiles", "Competitive advantage", "Global education systems recognition"]
              },
              {
                title: "Academic Readiness",
                items: ["College credit potential", "Degree-level preparation", "Advanced skill development"]
              }
            ].map((section, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-black uppercase text-primary mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-accent font-black text-xl">✓</span>
                      <p className="text-gray-800 font-bold">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Enrollment */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Assessment Process */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Assessment & Enrollment
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Students interested in AP courses will undergo an academic assessment to determine their current level, recommended course load, and personalized learning pathway.
              </p>

              <div className="bg-white p-8 rounded-lg mb-8">
                <h4 className="font-black uppercase text-primary mb-4">We Evaluate</h4>
                <ul className="space-y-3">
                  {[
                    "Current academic level",
                    "Recommended AP course load",
                    "Personalized learning pathway",
                    "Study schedule suitability"
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-800 font-bold flex items-start gap-2">
                      <span className="text-accent">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Flexible Tuition */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Flexible Tuition Structure
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                AGCC operates a flexible tuition system ensuring fairness, accessibility, and personalized education for every learner.
              </p>

              <div className="bg-white p-8 rounded-lg">
                <h4 className="font-black uppercase text-primary mb-4">What This Means</h4>
                <ul className="space-y-3">
                  {[
                    "Tuition depends on selected AP courses",
                    "Personalized learning plans created",
                    "Assessment-based recommendations",
                    "Potential discounts or adjustments"
                  ].map((item, idx) => (
                    <li key={idx} className="text-gray-800 font-bold flex items-start gap-2">
                      <span className="text-accent">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part of a Global Academic System */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Part of a Global Academic System
          </h2>

          <p className="text-lg text-gray-800 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
            AGCC AP courses are part of a larger international education ecosystem that includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High School Diploma Programs",
              "University Preparatory Tracks",
              "Vocational & Career Training",
              "Language & Test Preparation (IELTS, TOEFL, PTE, CELPIP)",
              "Global Travel Learning Programs",
              "Leadership & Mentorship Development"
            ].map((program, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border-l-4 border-primary text-center">
                <p className="text-gray-800 font-bold">{program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Ready to Advance Your Education?
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white font-black leading-relaxed">
            Students and parents interested in AP programs can contact AGCC for course selection guidance, academic assessment, enrollment details, and study pathway planning.
          </p>

          <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
            <p className="text-3xl font-black italic text-accent">
              "Rigorous Learning. Global Standards. University Ready."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@agccollege.org?subject=AP%20Courses%20Inquiry"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Email: info@agccollege.org
              <Mail size={20} />
            </a>
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
