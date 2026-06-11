import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, BookOpen, Code2, GraduationCap, Plane, Wrench, Languages, Palette, TrendingUp, DollarSign, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VirtualOpenHouse() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Admissions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Virtual Open House
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Discover a World-Class Education Without Borders
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Welcome to the AGCC Virtual Open House, an exciting opportunity for students, parents, educators, and partners from around the world to explore the future of global education at America Global Citizen College.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 text-center">
              What to Explore at AGCC
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Our Virtual Open House is designed to give families and prospective students a firsthand look into AGCC's comprehensive educational offerings and global opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "American-standard academic programs",
                "Global classroom experience",
                "Smart Education model",
                "Career and vocational pathways",
                "International opportunities",
                "Student support systems",
                "Leadership and travel learning programs"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-accent">
                  <ArrowRight size={20} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold uppercase tracking-wide text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Why Attend the AGCC Virtual Open House?
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-800 text-center mb-12 leading-relaxed">
              The AGCC Virtual Open House allows students and parents to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Learn about AGCC academic and career programs",
                "Meet faculty members and academic advisors",
                "Explore our global online classroom environment",
                "Understand admissions and enrollment procedures",
                "Discover scholarship and tuition support opportunities",
                "Learn about study abroad and exchange programs",
                "Ask questions directly to AGCC representatives"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
                  <span className="text-accent font-black text-xl">✓</span>
                  <p className="text-gray-800 font-bold">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border-2 border-accent p-8 rounded-lg">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Who Should Attend</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Students (Grades 6–12 / JSS1–SS3)",
                  "Parents and guardians",
                  "High school graduates",
                  "Adult learners",
                  "International students"
                ].map((audience, idx) => (
                  <p key={idx} className="text-gray-800 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {audience}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  AGCC Academic Programs
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Discover AGCC's comprehensive academic offerings designed for students at all levels.
              </p>

              <ul className="space-y-4">
                {[
                  "American-style high school curriculum",
                  "University Preparatory Diploma programs",
                  "After-School and Weekend Academies",
                  "GED and examination preparation classes",
                  "Advanced and vocational learning pathways"
                ].map((program, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <BookOpen size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Smart Education & Global Learning
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Learn how AGCC uses advanced technology to support learning:
              </p>

              <ul className="space-y-4">
                {[
                  "AI-enhanced learning platforms",
                  "Adaptive learning systems",
                  "Interactive online classrooms",
                  "Real-time mentorship and feedback",
                  "Global collaborative learning experiences"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Code2 size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 mt-8 italic text-sm">
                Students from countries including Nigeria, Kenya, India, UAE, the United States, and beyond learn together in AGCC's international classroom environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Classroom & Travel */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Global Classroom */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Global Classroom Experience
                </h2>
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed">
                During the Open House, families will explore how AGCC promotes:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Cross-cultural collaboration",
                  "Global citizenship education",
                  "International networking and friendships",
                  "Leadership and communication development"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800 font-bold">
                    <span className="text-accent">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 italic">
                AGCC's learning model is designed to prepare students for success in a global economy.
              </p>
            </div>

            {/* Travel & Exchange */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Travel Abroad & Student Exchange
                </h2>
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed">
                Parents and students will receive information about AGCC's international opportunities:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "University campus tours in USA, UK, and Canada",
                  "Global Leadership Summits",
                  "Global Citizen Model United Nations Conferences",
                  "Educational field trips",
                  "Student exchange programs (USA, Canada, Europe, Africa)"
                ].map((program, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Plane size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold text-sm">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Travel Program Details */}
          <div className="bg-gray-50 p-12 rounded-lg border-l-4 border-accent">
            <h3 className="text-2xl font-black uppercase text-primary mb-6">Travel Learning Programs Include:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-black uppercase text-primary mb-4">Experiences</h4>
                <ul className="space-y-2">
                  {[
                    "Cultural Diplomacy experiences",
                    "Citizen Diplomacy engagements",
                    "Public Diplomacy exposure",
                    "Leadership and mentorship interactions",
                    "Cultural exchange and heritage learning"
                  ].map((exp, idx) => (
                    <li key={idx} className="text-gray-800 font-bold flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black uppercase text-primary mb-4">Student Gains</h4>
                <ul className="space-y-2">
                  {[
                    "Real-world international exposure",
                    "Leadership development",
                    "Cross-cultural understanding",
                    "Global confidence and communication skills"
                  ].map((gain, idx) => (
                    <li key={idx} className="text-gray-800 font-bold flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {gain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-700 italic text-sm">
              Travel program dates are usually announced at the beginning of the calendar year, with full details about destinations, program structure, participation requirements, and travel/accommodation costs communicated directly to parents and students.
            </p>
          </div>
        </div>
      </section>

      {/* Career & Language Programs */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Vocational */}
            <div className="p-8 bg-white rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={28} className="text-primary" />
                <h3 className="text-2xl font-black uppercase text-primary">Vocational & Career Pathways</h3>
              </div>

              <p className="text-gray-800 mb-6 text-sm leading-relaxed">
                Families will explore practical career-focused learning opportunities:
              </p>

              <ul className="space-y-2">
                {[
                  "Plumbing and skilled trades",
                  "Technology and innovation",
                  "Healthcare support pathways",
                  "Digital entrepreneurship",
                  "Remote work and freelancing readiness"
                ].map((path, idx) => (
                  <li key={idx} className="text-gray-700 text-sm font-bold flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    {path}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-8 bg-white rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <Languages size={28} className="text-primary" />
                <h3 className="text-2xl font-black uppercase text-primary">Language & Test Prep</h3>
              </div>

              <p className="text-gray-800 mb-6 text-sm leading-relaxed">
                Showcase of preparation programs for international tests:
              </p>

              <div className="mb-6">
                <p className="text-xs font-black uppercase text-gray-600 mb-3">Test Preparation:</p>
                <ul className="space-y-1">
                  {["IELTS", "TOEFL", "PTE", "CELPIP"].map((test, idx) => (
                    <li key={idx} className="text-gray-700 text-sm font-bold">• {test}</li>
                  ))}
                </ul>
              </div>

              <p className="text-xs font-black uppercase text-gray-600 mb-3">Languages Offered:</p>
              <ul className="space-y-1">
                {["French", "Spanish", "German", "Italian", "Dutch", "Edo Language"].map((lang, idx) => (
                  <li key={idx} className="text-gray-700 text-sm font-bold">• {lang}</li>
                ))}
              </ul>
            </div>

            {/* Arts & Leadership */}
            <div className="p-8 bg-white rounded-lg border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <Palette size={28} className="text-primary" />
                <h3 className="text-2xl font-black uppercase text-primary">Clubs & Leadership</h3>
              </div>

              <p className="text-gray-800 mb-6 text-sm leading-relaxed">
                Learn about AGCC's student involvement opportunities:
              </p>

              <ul className="space-y-2">
                {[
                  "Arts and creative expression programs",
                  "Leadership and public speaking clubs",
                  "Technology and innovation clubs",
                  "Entrepreneurship and business activities",
                  "Community service and volunteer programs"
                ].map((activity, idx) => (
                  <li key={idx} className="text-gray-700 text-sm font-bold flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships & Faculty */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Scholarships */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Scholarships & Flexible Tuition
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Families attending the Open House will receive information regarding:
              </p>

              <ul className="space-y-4">
                {[
                  { icon: "💰", text: "Scholarship opportunities" },
                  { icon: "📊", text: "Flexible payment plans" },
                  { icon: "💳", text: "Tuition support options" },
                  { icon: "📝", text: "Enrollment guidance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-800 font-bold uppercase tracking-wide">{item.text}</p>
                  </div>
                ))}
              </ul>

              <p className="text-gray-800 italic mt-8">
                AGCC is committed to making quality education affordable and accessible to students globally.
              </p>
            </div>

            {/* Faculty & Leadership */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Meet Our Faculty & Leadership
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Participants will have opportunities to meet AGCC's dedicated team:
              </p>

              <div className="space-y-4 mb-12">
                {[
                  "Experienced educators",
                  "Academic advisors",
                  "Career mentors",
                  "School leadership team"
                ].map((role, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-6 bg-gray-50 rounded-lg">
                    <Users size={24} className="text-primary" />
                    <p className="text-gray-800 font-bold uppercase">{role}</p>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border-2 border-accent p-6 rounded-lg">
                <p className="text-sm font-black uppercase text-gray-600 mb-4">Key Leadership</p>
                <div className="space-y-3">
                  {[
                    "Terry Ann Talbert",
                    "Jace Owie"
                  ].map((leader, idx) => (
                    <p key={idx} className="text-gray-800 font-black text-lg">{leader}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Registration */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Ready to Explore AGCC?
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-white font-black mb-8 leading-relaxed">
            Whether you are exploring high school education, career-focused certification programs, language learning, or global leadership opportunities, AGCC's Virtual Open House provides the information and guidance needed to begin your educational journey.
          </p>

          <div className="bg-accent/10 border-2 border-accent/50 p-12 rounded-lg mb-12">
            <p className="text-2xl font-black italic text-accent">
              "Your Global Education Journey Starts Here."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Register Now
              <Calendar size={20} />
            </Link>
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
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
