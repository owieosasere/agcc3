import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Calendar, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Academic Calendar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Flexible International Academic Calendar
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Designed for Students Across America, Africa & Europe
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            AGCC operates a flexible international academic system designed to support students from different countries, time zones, educational systems, and schedules.
          </p>
        </div>
      </section>

      {/* Flexible Learning Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
              Flexible Global Learning System
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AGCC offers multiple flexible options to support students in America, Africa, Europe, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Flexible Online Learning Options",
              "Weekend & Evening Classes",
              "Multiple Time-Zone Friendly Sessions",
              "Self-Paced Learning Opportunities",
              "Rolling Admissions Throughout the Year",
              "Personalized Academic Scheduling",
              "Hybrid Mentorship & Tutoring Support",
              "Year-Round Program Availability"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fall Session */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Fall International Session
          </h2>

          <div className="space-y-6">
            {[
              { period: "August – September", event: "Priority Registration", desc: "Register early for fall programs" },
              { period: "September", event: "Flexible Orientation Period", desc: "Get ready for your academic journey" },
              { period: "September", event: "Classes Commence", desc: "Begin your coursework" },
              { period: "September – October", event: "Flexible Late Enrollment Window", desc: "Join classes during this window" },
              { period: "October – November", event: "Mid-Semester Academic Support & Evaluations", desc: "Check your progress" },
              { period: "November – November", event: "Student Mentorship & Career Development Week", desc: "Develop your career path" },
              { period: "December", event: "Final Assessments & Projects", desc: "Complete your coursework" },
              { period: "December – January", event: "Winter Break / Flexible Catch-Up Period", desc: "Rest or continue learning" }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6 py-4 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-primary mb-2">{item.event}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                  <div className="text-sm font-black uppercase text-accent whitespace-nowrap">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Session */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Spring International Session
          </h2>

          <div className="space-y-6">
            {[
              { period: "January – January", event: "Registration & Student Advising", desc: "Plan your spring semester" },
              { period: "January", event: "Classes Begin", desc: "Start your spring programs" },
              { period: "January – February", event: "Flexible Enrollment Window", desc: "Late registration available" },
              { period: "March", event: "Mid-Semester Academic Evaluations", desc: "Review your performance" },
              { period: "April", event: "International Student Development Week", desc: "Professional development" },
              { period: "May", event: "Final Examinations & Coursework Submission", desc: "Complete spring courses" }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6 py-4 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-primary mb-2">{item.event}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                  <div className="text-sm font-black uppercase text-accent whitespace-nowrap">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Session */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Summer Flex Session
          </h2>

          <div className="space-y-6">
            {[
              { period: "May – June", event: "Summer Registration", desc: "Enroll in summer programs" },
              { period: "June", event: "Summer Classes Begin", desc: "Start intensive summer learning" },
              { period: "June – August", event: "Fast-Track Programs & Certifications", desc: "Accelerate your learning" },
              { period: "August", event: "Final Summer Evaluations", desc: "Complete summer courses" }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6 py-4 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-black uppercase text-primary mb-2">{item.event}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                  <div className="text-sm font-black uppercase text-accent whitespace-nowrap">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Programs */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Year-Round Flexible Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black uppercase text-accent mb-6">Academic Programs</h3>
              <ul className="space-y-3">
                {["High School Diploma Programs", "University Preparatory Diplomas", "Customized Tutoring Programs"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase text-accent mb-6">Language Programs</h3>
              <ul className="space-y-3">
                {["English", "French", "German", "Edo Language Programs", "International Communication Skills"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase text-accent mb-6">International Exam Preparation</h3>
              <ul className="space-y-3">
                {["IELTS", "CELPIP", "TOEFL", "PTE", "CAEL", "GRE", "GMAT", "GCE", "OAT", "HSE", "Field-Specific Professional Exams"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase text-accent mb-6">Mentorship & Career</h3>
              <ul className="space-y-3">
                {["Career Mentorship Programs", "Youth Leadership Development", "Academic Improvement Support", "International Student Coaching"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* International Student Support */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-accent mb-12 text-center">
            International Student Support
          </h2>

          <p className="text-lg text-white mb-8 leading-relaxed text-center">
            AGCC understands the educational challenges faced by students from different countries and backgrounds. Our flexible learning structure supports:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "American Students balancing school and work schedules",
              "African Students requiring flexible international access",
              "European Students needing adaptable time-zone learning",
              "International Students seeking affordable global education",
              "Adult Learners and Working Professionals"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white/10 p-6 rounded-lg border border-accent/30">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-white font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Global Events */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Scholarships */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Scholarships & Discount Programs
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                AGCC provides seasonal scholarship opportunities, flexible payment options, and discounted educational programs throughout the academic year to help students access affordable quality education globally.
              </p>
              <Link
                to="/tuition-aid"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all mt-8"
              >
                Learn More
              </Link>
            </div>

            {/* Global Events */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Global Events & Development Programs
              </h2>
              <div className="space-y-4">
                {[
                  { event: "AGCC International Leadership Forum", month: "October" },
                  { event: "Global Student Career & Innovation Week", month: "February" },
                  { event: "Youth Talent & Entrepreneurship Conference", month: "April" },
                  { event: "International Cultural Exchange Programs", month: "Year-Round" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <p className="font-bold text-gray-800">{item.event}</p>
                    <span className="text-sm font-black uppercase text-accent">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Ready to Begin Your Journey?
            </h2>
          </div>
          <p className="text-xl text-white mb-12 font-semibold">
            Contact AGCC today to learn about enrollment options and flexible scheduling that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@agccollege.org"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all"
            >
              Email: info@agccollege.org
            </a>
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all"
            >
              Apply Now
            </Link>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all"
            >
              Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
