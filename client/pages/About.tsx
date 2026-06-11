import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Globe, BookOpen, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-40 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F08a68767b3d94e04b47bc1d79caea490?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Our Institution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            America Global Citizen College
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Educating Minds. Building Skills. Shaping Global Leaders.
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            A globally oriented, innovation-driven institution delivering American-standard education combined with practical, career-ready training.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Philosophy - Three Column */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="border-l-4 border-accent p-8 bg-gray-50">
              <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Deliver high-quality American-standard education globally",
                  "Provide accessible and affordable learning opportunities",
                  "Combine academic excellence with practical skill development",
                  "Foster critical thinking, creativity, and global citizenship"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="border-l-4 border-accent p-8 bg-gray-50">
              <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                To become a leading global college that produces academically excellent, skill-driven, and globally competitive graduates equipped for success in education, careers, and global leadership.
              </p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wide">
                Excellence Without Borders
              </p>
            </div>

            {/* Philosophy */}
            <div className="border-l-4 border-accent p-8 bg-gray-50">
              <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Our Philosophy</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Education must be borderless, affordable, flexible, practical, and transformational. We prepare students to lead in a global society where boundaries don't limit opportunity.
              </p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wide">
                Global Citizenship First
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-accent"></div>
                <span className="font-black text-sm uppercase tracking-widest text-primary">Leadership</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 leading-tight">
                Founded & Led by Award-Winning Educators
              </h2>

              <p className="text-lg text-gray-800 mb-6 leading-relaxed font-normal">
                AGCC is founded and led by <span className="font-black">Proprietor Terryann Talbert</span>, an American award-winning educator and licensed tutor with over a decade of experience in education and student development.
              </p>

              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                Terryann is widely recognized for her commitment to global citizenship, experiential learning, and student-centered education. Her vision transformed AGCC into a beacon of educational excellence, accessible and affordable to students worldwide.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Award size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-primary text-sm uppercase">Award-Winning Educator</p>
                    <p className="text-gray-700 text-sm">Recognized for innovation and excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-primary text-sm uppercase">Global Vision</p>
                    <p className="text-gray-700 text-sm">Committed to borderless education</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Leadership
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full min-h-[400px] overflow-hidden rounded-lg shadow-2xl bg-gray-100 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fd05a06db553a4d9392cb32b80b86464a?format=webp&width=800&height=1200"
                alt="AGCC Leadership Team"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Structure */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Academics</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 leading-tight max-w-3xl">
            Structured Academic Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Grades 6-12 Curriculum",
                desc: "Comprehensive American-standard curriculum covering English, Mathematics, Science, Social Studies, and specialized subjects. Delivered online with interactive lessons, live sessions, and personalized support."
              },
              {
                title: "After-School Programs",
                desc: "Enrichment classes, tutoring, test preparation, and skill-building workshops. Designed to supplement core curriculum and support students in achieving academic excellence."
              },
              {
                title: "Vocational Studies",
                desc: "Industry-aligned programs in digital skills, business, creative arts, and technical trades. Prepares students for immediate career entry or further higher education."
              },
              {
                title: "Scholarship Opportunities",
                desc: "80%+ of students benefit from our scholarship programs. Merit-based and need-based aid ensures no deserving student is left behind due to financial constraints."
              }
            ].map((program, idx) => (
              <div key={idx} className="border border-gray-200 p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
                <h3 className="text-xl font-black uppercase text-primary mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Career Readiness</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 leading-tight max-w-3xl">
            Preparing Students for the Future
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed font-normal">
                Beyond academics, AGCC emphasizes practical skill development and career preparation. Our programs integrate real-world projects, industry partnerships, and professional development workshops.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Project-based learning aligned with industry standards",
                  "Professional certifications and credentials",
                  "Career counseling and college preparation",
                  "Internship and apprenticeship opportunities",
                  "Global networking and professional connections"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1 h-6 bg-accent mt-1 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/course-list"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore Programs
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Our Promise</h3>
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Quality</p>
                  <p className="text-gray-700 text-sm">American-standard education delivered with excellence</p>
                </div>
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Accessibility</p>
                  <p className="text-gray-700 text-sm">Borderless education available to students everywhere</p>
                </div>
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Affordability</p>
                  <p className="text-gray-700 text-sm">Starting at $135/term with extensive scholarships</p>
                </div>
                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Impact</p>
                  <p className="text-gray-700 text-sm">Graduating global leaders prepared for success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDCC Accreditation */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5 border-t-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">International Recognition</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-4 leading-tight max-w-3xl">
            SDCC Accreditation
          </h2>

          <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
            Authorized Learning Partners of Skill Development Council Canada (SDCC) – delivering world-class education with international credibility and cross-border employment recognition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Accreditation Benefits */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-10">
              <h3 className="text-2xl font-black uppercase text-primary mb-8">Accreditation Standards</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Curriculum Design & Enhancement</p>
                  <p className="text-gray-700 text-sm">Programs reviewed to combine theoretical concepts with practical, applied learning that matches modern workforce demands.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Standardized Assessment Frameworks</p>
                  <p className="text-gray-700 text-sm">Accreditation covers testing systems utilizing research-backed, proctored skill analysis before awarding credentials.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Global Skill Comparability</p>
                  <p className="text-gray-700 text-sm">Course material standardized against international benchmarks so earned qualifications carry cross-border credibility for employment or visa processing.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Institutional Quality Control</p>
                  <p className="text-gray-700 text-sm">SDCC monitors the complete student lifecycle through periodic digital inspections and quality-check systems aligned with ISO standards.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Program Areas */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-10">
              <h3 className="text-2xl font-black uppercase text-primary mb-8">SDCC Program Areas</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Business & Management</p>
                  <p className="text-gray-700 text-sm">Diplomas and fellowships in Human Resources, Marketing, Supply Chain Logistics, Project Management, and Business Administration.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Technology & Data</p>
                  <p className="text-gray-700 text-sm">Cybersecurity Essentials, Data Science, AI Integration, and Data Analysis training paths.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Health & Safety</p>
                  <p className="text-gray-700 text-sm">Professional tracks including Healthcare Administration, Personal Support Work (PSW), Telemedicine, and Occupational Health & Safety.</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Skilled Trades & Essentials</p>
                  <p className="text-gray-700 text-sm">Pre-apprenticeship curriculum, corporate quality management (Six Sigma), and operational compliance training.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-accent p-8 md:p-10">
            <p className="text-gray-800 font-semibold mb-4">
              Our SDCC partnership ensures that AGCC students receive globally recognized credentials that stand up to international employment standards, enabling seamless global career mobility and educational advancement.
            </p>
            <p className="text-sm text-gray-600">
              Every program we offer through this partnership is designed to meet the highest standards of practical competency, theoretical knowledge, and professional readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Global Network</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 leading-tight">
            A Truly Global Institution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "6", label: "Continents" },
              { number: "500+", label: "Students" },
              { number: "9", label: "Programs" },
              { number: "80%+", label: "Scholarships" },
              { number: "24/7", label: "Support" },
              { number: "100%", label: "Online Access" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <p className="text-5xl font-black text-accent mb-2">{stat.number}</p>
                <p className="text-gray-700 font-black uppercase text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Join Our Global Community
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto">
            Experience the AGCC difference. Quality education, affordable costs, global opportunities. Your future starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
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
