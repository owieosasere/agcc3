import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Globe, Users, Star, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const facts = [
    { number: "500+", label: "Students Enrolled" },
    { number: "6", label: "Continents Represented" },
    { number: "9", label: "Programs Offered" },
    { number: "80%+", label: "Students on Scholarships" },
  ];

  const upcomingEvents = [
    { date: "May 15", month: "May", title: "Virtual Open House", type: "Event" },
    { date: "Jun 1", month: "Jun", title: "Application Deadline", type: "Deadline" },
    { date: "Jun 15", month: "Jun", title: "Term Begins", type: "Academic" },
    { date: "Jul 4", month: "Jul", title: "Independence Day", type: "Holiday" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:h-96 md:h-screen bg-primary overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain sm:object-cover opacity-85 group-hover:opacity-90 transition-opacity duration-500"
          poster="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fc179a1c20bc446a0abc0edad7d88fcf7?format=webp&width=800&height=1200"
        >
          <source
            src="https://cdn.builder.io/o/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F422343ba52b94754badb17769b11179d?alt=media&token=21dcfc0b-5f4a-4a63-bdf1-a1f1e0f97970&apiKey=17af27ae9fd84dc687930a0b01f78aed"
            type="video/mp4"
          />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary/80"></div>

        <div
          className="absolute inset-0 flex flex-col justify-center"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 mt-12 sm:mt-40 md:mt-80">
                <Link
                  to="/apply"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 border-2 border-accent text-accent px-6 sm:px-8 py-3.5 sm:py-4 font-black uppercase text-sm sm:text-xs tracking-wide sm:tracking-widest hover:bg-accent hover:text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 font-black uppercase text-sm sm:text-xs tracking-wide sm:tracking-widest hover:bg-white hover:text-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Panel with Red Lead-in */}
      <section className="py-10 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="serif-accent text-xl md:text-3xl mb-8 text-accent">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 leading-tight">
              Welcome to a Global<br />Online School
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
              AGCC Global Online School combines American academic excellence with a global perspective. 
              Whether you're building your spark of genius, charting your own course, or connecting with 
              a worldwide community, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="/global-network"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-center cursor-pointer hover:opacity-80 transition duration-300 p-6 rounded-lg hover:bg-accent/5"
              >
                <div className="text-4xl font-black text-accent mb-2">6</div>
                <p className="text-gray-600 font-medium">Continents</p>
              </Link>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-center cursor-pointer hover:opacity-80 transition duration-300 p-6 rounded-lg hover:bg-accent/5"
              >
                <div className="text-4xl font-black text-accent mb-2">500+</div>
                <p className="text-gray-600 font-medium">Students</p>
              </Link>
              <Link
                to="/faculties"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-center cursor-pointer hover:opacity-80 transition duration-300 p-6 rounded-lg hover:bg-accent/5"
              >
                <div className="text-4xl font-black text-accent mb-2">9</div>
                <p className="text-gray-600 font-medium">Programs</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AGCC Commitment & Programs Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Main Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-accent"></div>
                <span className="font-black text-sm uppercase tracking-widest text-primary">Our Commitment</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 leading-tight">
                Empowering Students for Global Success
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                At AGCC, we are committed to empowering students through world-class education and academic excellence.
              </p>

              <h3 className="text-2xl font-black uppercase text-primary mb-6">We Offer:</h3>

              <div className="space-y-4 mb-10">
                {[
                  "High School Diplomas",
                  "University Preparatory Diplomas",
                  "Customized Tutoring Programs",
                  "Language Programs — English, French, German, Edo & more",
                  "Advanced Test Preparation for IELTS, CELPIP, PTE, TOEFL, CAEL, GRE, GMAT, GCE, OAT, HSE & Field-Specific Exams"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-accent flex items-center justify-center flex-shrink-0 rounded-full mt-1">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Educator & Scholarship Info */}
            <div className="space-y-8">
              <div className="bg-white border-l-4 border-accent p-8 shadow-lg">
                <h3 className="text-2xl font-black uppercase text-primary mb-4">Award-Winning Educators</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our programs are taught by award-winning American educators alongside exceptional experienced teachers from around the world, delivering high-quality learning designed for global success.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20 p-8">
                <h3 className="text-2xl font-black uppercase text-primary mb-4">Affordable & Accessible</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide discounted programs, seasonal offers, and scholarship opportunities to help students achieve their academic and career goals affordably.
                </p>
              </div>

              <div className="bg-primary text-white p-8 border-2 border-primary">
                <p className="text-xl font-black uppercase leading-relaxed text-center">
                  Learn globally.<br />Excel confidently.<br />Succeed beyond borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Primary CTA Buttons */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white border border-gray-200 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <div className="h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F9307792422ed4f1280a9406efc50431b?format=webp&width=800&height=1200"
                  alt="College Open House"
                  className="w-full h-full object-contain transition duration-300"
                />
              </div>
              <div className="p-12 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-primary mb-4 group-hover:text-accent transition">
                    Attend Our Next Open House
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Experience AGCC Global Online first-hand in an interactive virtual session
                  </p>
                </div>
                <span className="text-accent font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 justify-center transition-all">
                  Register <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white border border-gray-200 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F6e9acb7336474468b4d2ac79f133909c?format=webp&width=800&height=1200"
                  alt="School Admission"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-12 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-primary mb-4 group-hover:text-accent transition">
                    Speak with Admissions
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Connect with our admissions counselors to answer all your questions
                  </p>
                </div>
                <span className="text-accent font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 justify-center transition-all">
                  Schedule <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-white border border-gray-200 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <div className="h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F31f14d90aaaf408da18748a3e9d754f6?format=webp&width=800&height=1200"
                  alt="Scholarship College"
                  className="w-full h-full object-contain transition duration-300"
                />
              </div>
              <div className="p-12 text-center flex-grow flex flex-col justify-between bg-gradient-to-br from-accent to-accent/90">
                <div>
                  <h3 className="text-2xl font-black uppercase text-white mb-4">
                    Apply Now!
                  </h3>
                  <p className="text-white/90 mb-6">
                    Start your journey at AGCC Global Online School today
                  </p>
                </div>
                <span className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:gap-4 justify-center transition-all">
                  Begin Application <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Four Feature Image Tiles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Chart Your Own Course
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Chart Your Own Course of Study",
                image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F202c18aa9ce64a23802a1f34370d48a5?format=webp&width=800&height=1200"
              },
              {
                title: "Take Classes Wherever Your Travels Take You",
                image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F3b5d9bb96cb8456fa3727a188a301aae?format=webp&width=800&height=1200"
              },
              {
                title: "Connect with a Global Community",
                image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F33f973650a5148f38a14ab19b1fb08d0?format=webp&width=800&height=1200"
              },
              {
                title: "Find Your Spark of Genius",
                image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fc599ccea138e489ab360b4b58a1bd401?format=webp&width=800&height=1200"
              },
            ].map((tile, idx) => (
              <Link
                key={idx}
                to="/course-list"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative h-64 overflow-hidden bg-gray-300 hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundImage: `url(${tile.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-300"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <h3 className="text-2xl font-black uppercase text-white group-hover:text-accent transition duration-300">
                    {tile.title}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facts & Figures Panel */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 leading-tight">
                AGCC Facts & Figures
              </h2>
              <p className="serif-accent text-xl md:text-3xl mb-8 text-white">
                "Where excellence meets accessibility, and potential meets opportunity."
              </p>
              <p className="text-white text-base font-semibold leading-relaxed mb-8">
                Our commitment to academic excellence, affordability, and global perspective
                has created a thriving community of learners from every corner of the world.
              </p>
              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Our Impact
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/30 p-8 text-center hover:bg-accent hover:border-accent transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl font-black text-accent mb-3">{fact.number}</div>
                  <p className="text-white/80 font-bold uppercase text-sm tracking-widest">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDCC Accreditation Feature */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-primary/5 border-t-4 border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-12 bg-accent"></div>
                <span className="font-black text-sm uppercase tracking-widest text-primary">Global Recognition</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6 leading-tight">
                SDCC Accredited Education
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                AGCC is an authorized learning partner of <span className="font-black">Skill Development Council Canada (SDCC)</span>, ensuring our programs meet international standards for quality, practicality, and workforce readiness.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-white flex items-center justify-center flex-shrink-0 rounded-full mt-1 font-black text-sm">✓</div>
                  <div>
                    <p className="font-black text-primary text-sm uppercase">Cross-Border Credibility</p>
                    <p className="text-gray-700 text-sm">Qualifications recognized internationally for employment and visa processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-white flex items-center justify-center flex-shrink-0 rounded-full mt-1 font-black text-sm">✓</div>
                  <div>
                    <p className="font-black text-primary text-sm uppercase">Practical Workforce Training</p>
                    <p className="text-gray-700 text-sm">Curriculum designed to meet modern workforce demands with hands-on learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-white flex items-center justify-center flex-shrink-0 rounded-full mt-1 font-black text-sm">✓</div>
                  <div>
                    <p className="font-black text-primary text-sm uppercase">ISO-Aligned Quality Control</p>
                    <p className="text-gray-700 text-sm">Rigorous assessment frameworks and institutional monitoring ensure excellence</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn About SDCC Partnership
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Column */}
            <div className="bg-white border-2 border-accent/20 p-10 rounded-sm">
              <h3 className="text-2xl font-black uppercase text-primary mb-8">Program Areas</h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Business & Management</p>
                  <p className="text-gray-700 text-sm">HR, Marketing, Supply Chain, Project Management, Business Admin</p>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Technology & Data</p>
                  <p className="text-gray-700 text-sm">Cybersecurity, Data Science, AI Integration, Data Analysis</p>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm font-black uppercase text-accent mb-2">Health & Safety</p>
                  <p className="text-gray-700 text-sm">Healthcare Admin, Personal Support Work, Telemedicine, OHS</p>
                </div>

                <div>
                  <p className="text-sm font-black uppercase text-accent mb-2">Skilled Trades</p>
                  <p className="text-gray-700 text-sm">Pre-apprenticeship, Quality Management, Operational Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Grid */}
            <div className="grid grid-cols-2 gap-4">
              {upcomingEvents.map((event, idx) => (
                <a
                  key={idx}
                  href="/contact"
                  className="bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-accent transition-all duration-300 group"
                >
                  <p className="serif-accent text-xl mb-2 text-accent font-black">{event.month}</p>
                  <p className="text-3xl font-black text-primary mb-3">{event.date}</p>
                  <h3 className="text-sm font-black uppercase text-primary mb-3 group-hover:text-accent transition">
                    {event.title}
                  </h3>
                  <span className="text-xs font-bold uppercase text-gray-600">{event.type}</span>
                </a>
              ))}
            </div>

            {/* Featured Event */}
            <div
              className="relative h-96 bg-gradient-to-br from-primary to-primary/80 text-white p-8 flex flex-col justify-end overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F976bdff80a6d4fc9af474d8d3696612f?alt=media&token=822fe209-18a4-4dff-89b7-370fe796c087&apiKey=17af27ae9fd84dc687930a0b01f78aed)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="inline-block bg-accent text-primary px-4 py-2 font-black text-xs uppercase tracking-widest mb-4 rounded-sm">
                  Featured Event
                </span>
                <h3 className="text-3xl font-black uppercase text-white mb-4">Virtual Open House</h3>
                <p className="text-white text-base font-semibold mb-6">
                  Experience AGCC Global Online firsthand with our admissions team. Q&A session included.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border-2 border-white text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Register Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Education & Advanced Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Academic Excellence Redefined
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="border-l-4 border-accent p-8 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Smart Education Model</h3>
              <p className="text-gray-700 mb-4">
                Our proprietary Smart Education system integrates technology-driven learning, personalized academic pathways,
                global classroom engagement, and practical skill-based training.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>AI-personalized learning paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>Real-time progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>Adaptive curriculum</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-accent p-8 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">American Credit Certificate</h3>
              <p className="text-gray-700 mb-4">
                Graduates earn the prestigious American Credit Certificate, recognized globally as evidence of
                American-standard academic achievement.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>Universally recognized credential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>College preparation aligned</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>Career readiness included</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-accent p-8 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">AP & Honor Tracks</h3>
              <p className="text-gray-700 mb-4">
                Challenge yourself with Advanced Placement and Honor courses designed for students seeking
                college-level rigor and preparation.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>20+ AP courses available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>College credit eligible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>Expert instruction</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-accent p-8 bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-black uppercase text-primary mb-4">University Prep Diploma</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive university preparatory program ensures students are fully ready for higher education
                success with college advising and exam preparation.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>College planning support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>SAT/ACT preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-black">✓</span>
                  <span>University counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Exchange & Global Experience */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Global Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-80 overflow-hidden bg-gray-300 hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F917fc2cc37064b548ef15eb8910a4bf9?format=webp&width=800&height=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-accent transition duration-300">
                  Student Exchange Network
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <p className="text-white text-base font-semibold">
                  Connect with our global network of partner institutions across continents.
                </p>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden bg-gray-300 hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Ff8bb98a418e74e9eb7c2ee0c87eccbe1?format=webp&width=800&height=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-accent transition duration-300">
                  Summer Programs
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <p className="text-white text-base font-semibold">
                  Immersive experiences including language prep and travel learning.
                </p>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden bg-gray-300 hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fe1b13a022216465b966e6561156fa3d2?format=webp&width=800&height=1200)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-accent transition duration-300">
                  Career Readiness
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <p className="text-white text-base font-semibold">
                  Real-world experience to prepare for your professional future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability & Scholarships */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-8">
              Education for Everyone
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-5xl font-black text-accent mb-3">$135</p>
                <p className="text-lg text-gray-700 font-bold">Starting Monthly Tuition</p>
                <p className="text-sm text-gray-600 mt-2">Affordable education accessible to students worldwide</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent mb-3">80%+</p>
                <p className="text-lg text-gray-700 font-bold">Students on Scholarships</p>
                <p className="text-sm text-gray-600 mt-2">Merit-based and need-based aid available</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent mb-3">∞</p>
                <p className="text-lg text-gray-700 font-bold">Payment Plans Available</p>
                <p className="text-sm text-gray-600 mt-2">Flexible options to fit your budget</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Join our lessons with exciting students from all over the world and make global friends while studying.
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto">
            Make global connections while finding your spark of genius. Your next chapter starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Attend Open House
              <ArrowRight size={20} />
            </a>
            <a
              href="https://pci.jotform.com/form/252254521181146"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Dream Section */}
      <section className="py-24 md:py-40 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-20 rounded-2xl">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-primary mb-6 leading-tight tracking-tighter">
              Your Dreams
            </h2>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white mb-8 leading-tight tracking-tighter">
              Have No Limits
            </h2>
            <p className="text-base md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-bold">
              At AGCC, we believe in empowering students to achieve their greatest dreams through quality education and global opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal FREE Programs */}
      <section className="py-24 md:py-40 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary mb-2 leading-tight tracking-tighter">
              Seasonal
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 leading-tight tracking-tighter">
              FREE Programs
            </h2>

            <p className="text-base md:text-lg text-white font-semibold">
              At AGCC, we offer exciting seasonal FREE programs designed to help students grow academically, professionally, and personally.
            </p>
          </div>

          <p className="text-lg text-white mb-8 leading-relaxed">
            From language learning and tutoring support to career development and academic preparation, our programs are created to empower students for global success.
          </p>

          <div className="bg-white/10 border-2 border-accent p-8 rounded-lg mb-10">
            <p className="text-xl font-black text-accent mb-4">
              Ready to Explore Free Learning Opportunities?
            </p>
            <p className="text-base text-white">
              Email or call us today to learn more about our available free programs, discounts, and scholarship opportunities.
            </p>
          </div>

          <div className="bg-accent text-primary p-8 rounded-lg">
            <p className="text-2xl font-black italic">
              AGCC: Learn Globally. Succeed Beyond Borders.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-2xl text-primary font-semibold leading-relaxed max-w-3xl mx-auto">
            Education without borders. Global perspective, American excellence. Join our community of learners from across the world.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
