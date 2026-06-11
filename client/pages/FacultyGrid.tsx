import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FacultyGrid() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Featured Image */}
      <section className="relative bg-primary text-white py-20 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[280px] sm:h-96 md:h-full md:min-h-[500px] overflow-hidden rounded-lg shadow-2xl bg-gray-100 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F4e27392c4fef4d8a9476a2d55c3bf3a5?format=webp&width=800&height=1200"
                alt="AGCC Faculty Members"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 leading-tight drop-shadow-lg">
                Faculty Members
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-accent mb-8">
                Meet Our Distinguished Faculty
              </h2>
              <p className="text-lg text-white font-semibold mb-6 leading-relaxed">
                At AGCC, our faculty members are more than educators, they are mentors, innovators, researchers, industry professionals, and global academic leaders dedicated to helping students succeed academically, professionally, and personally.
              </p>
              <p className="text-lg text-white font-semibold leading-relaxed">
                Our instructors bring together years of teaching excellence, real-world industry experience, international exposure, and student-centered mentorship to create a dynamic and supportive learning environment for learners from diverse backgrounds around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Overview Section */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            AGCC proudly works with award-winning American educators alongside exceptional international teachers and academic professionals committed to delivering high-quality education, practical knowledge, and global learning experiences.
          </p>
        </div>
      </section>

      {/* Faculty Commitment Section */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Our Faculty Commitment
          </h2>

          <p className="text-lg text-gray-800 mb-10 text-center font-semibold">
            Our faculty members are committed to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Academic Excellence",
              "Student Success & Mentorship",
              "Innovation in Learning",
              "Career & Skills Development",
              "Global Education & Cultural Diversity",
              "Ethical Leadership & Professional Growth",
              "Personalized Student Support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-accent flex items-center justify-center flex-shrink-0 rounded-full mt-1">
                  <span className="text-white font-black text-sm">✔</span>
                </div>
                <p className="text-gray-800 font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-800 leading-relaxed">
            Through modern teaching methods, interactive online learning, customized tutoring, and mentorship-driven education, AGCC faculty help students build confidence, improve performance, and prepare for future academic and career opportunities.
          </p>
        </div>
      </section>

      {/* Areas of Teaching Section */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Areas of Teaching & Expertise
          </h2>

          <p className="text-lg text-gray-800 mb-12 text-center">
            Our faculty team supports students across a wide range of educational and professional programs, including:
          </p>

          <div className="space-y-10">
            {/* High School Diploma */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">
                High School Diploma Programs
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Providing foundational academic preparation and college readiness support for students pursuing future educational success.
              </p>
            </div>

            {/* University Preparatory */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">
                University Preparatory Diploma Programs
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Helping students prepare academically and professionally for university admission and higher education opportunities.
              </p>
            </div>

            {/* Language Programs */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">
                Language Programs
              </h3>
              <p className="text-gray-800 text-lg mb-4 leading-relaxed">
                Expert instruction in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  "English Language Studies",
                  "French Language Studies",
                  "German Language Studies",
                  "Edo Language Programs",
                  "International Communication Skills"
                ].map((lang, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-black mt-1">•</span>
                    <p className="text-gray-800">{lang}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Preparation */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">
                International Test Preparation Programs
              </h3>
              <p className="text-gray-800 text-lg mb-4 leading-relaxed">
                Advanced tutoring and preparation support for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "IELTS",
                  "CELPIP",
                  "PTE",
                  "TOEFL",
                  "CAEL",
                  "GRE",
                  "GMAT",
                  "GCE",
                  "OAT",
                  "HSE",
                  "Field-Specific Professional Exams"
                ].map((test, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-black mt-1">•</span>
                    <p className="text-gray-800">{test}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customized Tutoring */}
            <div className="border-l-4 border-accent pl-8">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">
                Customized Tutoring & Academic Support
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                Personalized educational support designed to meet the unique learning needs and academic goals of students worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Learning Environment */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 text-center">
            A Global Learning Environment
          </h2>

          <p className="text-lg text-gray-800 mb-6 leading-relaxed text-center">
            AGCC believes education should inspire confidence, creativity, leadership, and global citizenship.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed text-center">
            Our faculty members work closely with students to create an engaging learning environment that encourages critical thinking, innovation, collaboration, and lifelong learning. By combining academic rigor with mentorship and practical experience, AGCC prepares students to compete successfully in an increasingly global and technology-driven world.
          </p>
        </div>
      </section>

      {/* Student-Centered Education */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
            Student-Centered Education
          </h2>

          <p className="text-xl text-gray-800 mb-10 text-center font-black">
            At AGCC, every student matters.
          </p>

          <p className="text-lg text-gray-800 mb-10 text-center">
            Our faculty are passionate about helping learners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Improve academic performance",
              "Discover their strengths and talents",
              "Build leadership and communication skills",
              "Prepare for international opportunities",
              "Achieve career and educational goals",
              "Gain confidence for future success"
            ].map((goal, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-semibold text-lg">{goal}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-800 leading-relaxed text-center font-semibold">
            We are proud to provide flexible, accessible, and globally focused education designed for the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
            Join a Community of Excellence
          </h2>

          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
            AGCC continues to build an international academic community dedicated to educational empowerment, professional growth, innovation, and student achievement.
          </p>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed">
            Our faculty members remain committed to helping students learn globally, lead confidently, and succeed beyond borders.
          </p>

          <div className="bg-primary text-white p-8 md:p-12 rounded-lg mb-12">
            <p className="text-lg font-semibold mb-4">
              For faculty inquiries, academic partnerships, or student admissions, please contact:
            </p>
            <a href="mailto:info@agccollege.org" className="text-xl font-black text-accent">
              info@agccollege.org
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+16464440818"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Phone size={20} />
              Call Us
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
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
