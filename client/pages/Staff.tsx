import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle, Award, Users, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Staff() {
  const leadershipTeam = [
    {
      name: "Terryann Talbert",
      title: "Proprietress",
      bio: "Award-winning American educator and visionary leader. Bachelor's degree from Florida Atlantic University, Master's degree from Liberty University, Virginia. Passionate about education, student empowerment, and transforming lives through quality education.",
      email: "terryann@agccollege.org",
      expertise: ["Educational Leadership", "Global Citizenship", "Student Empowerment"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fc7031a23d9a14bf684356da59777153b?format=webp&width=800&height=1200",
      isPhoto: true
    },
    {
      name: "Jace Owie",
      title: "President",
      bio: "A rising young global leader recognized for his passion for creating positive change across society. Through his work in youth empowerment, leadership development, and community impact, he continues to inspire young people to believe in their potential and pursue success with confidence.",
      email: "jace@agccollege.org",
      expertise: ["Youth Empowerment", "Leadership Development", "Community Impact"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F4bdb27b1351348feb29d341535ff5829?format=webp&width=800&height=1200",
      isPhoto: true
    },
  ];

  const facultyFocusAreas = [
    {
      icon: CheckCircle,
      title: "Cultural Awareness & Inclusivity",
      description: "Educators committed to celebrating diversity and fostering inclusive learning environments."
    },
    {
      icon: Award,
      title: "Leadership & Ethical Responsibility",
      description: "Teaching students to lead with integrity and make responsible decisions."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Critical Thinking",
      description: "Encouraging students to think deeply, question, and innovate."
    },
    {
      icon: Globe,
      title: "Academic Excellence & Lifelong Learning",
      description: "Rigorous academics combined with a commitment to continuous growth."
    },
    {
      icon: Users,
      title: "Community Engagement & Social Impact",
      description: "Preparing students to contribute meaningfully to their communities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-14 md:py-40 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F3b5c05daba134d258eed00752d04755c?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Our Faculty</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Excellence in Education at AGCC
          </h1>
          <p className="text-xl text-white font-semibold max-w-2xl leading-relaxed">
            Experienced educators, internationally recognized tutors, and passionate academic professionals dedicated to shaping future leaders through quality education and global citizenship.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
            <p className="text-xl leading-relaxed font-semibold text-primary">
              At America Global Citizen College (AGCC), excellence is not simply a goal, it is the foundation upon which our institution is built.
            </p>
            <p className="text-lg leading-relaxed">
              AGCC proudly stands as a global learning community led by experienced educators, internationally recognized tutors, and passionate academic professionals dedicated to shaping future leaders through quality education and global citizenship.
            </p>
            <p className="text-lg leading-relaxed">
              Our faculty members are highly experienced teachers and award-winning tutors from around the world who bring diverse academic expertise, cultural perspectives, and real-world knowledge into the classroom. Their commitment to student success ensures that every learner receives personalized guidance, mentorship, and a world-class educational experience designed to prepare them for success in an increasingly interconnected global society.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visionary leaders dedicated to academic excellence, innovation, and student empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white border-2 border-accent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b-2 border-accent/20 overflow-hidden">
                  {leader.isPhoto ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-contain object-center" />
                  ) : (
                    <div className="text-6xl sm:text-7xl">{leader.image}</div>
                  )}
                </div>
                <div className="p-6 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-black uppercase text-sm tracking-widest mb-6 pb-6 border-b-2 border-accent/20">
                    {leader.title}
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="mb-8">
                    <p className="text-xs font-black uppercase text-primary mb-4">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-3">
                      {leader.expertise.map((skill, i) => (
                        <span key={i} className="text-xs bg-accent/10 text-accent px-4 py-2 rounded-full font-bold border border-accent/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-gray-200">
                    <a href={`mailto:${leader.email}`} className="flex items-center gap-3 text-gray-700 hover:text-accent transition duration-300">
                      <Mail size={18} className="text-accent" />
                      <span className="text-sm font-semibold">{leader.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proprietress Special Section */}
          <div className="bg-white border-2 border-accent p-12 md:p-16 shadow-lg">
            <div className="flex gap-8 items-start md:items-center">
              <div className="text-6xl flex-shrink-0">👑</div>
              <div>
                <h3 className="text-3xl font-black uppercase text-primary mb-4">
                  Visionary Leadership
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-black text-accent">AGCC is proud to be led by Proprietress Terryann Talbert</span>, an accomplished and award-winning American educator whose passion for education and student empowerment continues to inspire the institution's vision and mission.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Under her visionary leadership, AGCC has become a dynamic institution focused on academic excellence, innovation, leadership development, and international collaboration. Her dedication to empowering students through accessible, student-centered education reflects AGCC's commitment to preparing learners not only for careers, but also for meaningful lives of service, leadership, and global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Excellence Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
              Our Approach to Education
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At AGCC, our educators go beyond traditional teaching. We cultivate an environment where students are encouraged to think critically, communicate confidently, embrace diversity, and become responsible global citizens. Through innovative learning approaches, mentorship, and culturally inclusive education, our teachers help students develop the skills and values necessary to thrive in today's rapidly changing world.
            </p>
          </div>

          <div className="space-y-8">
            {facultyFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="flex gap-6 items-start pb-8 border-b border-accent/20 last:border-b-0">
                  <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-black uppercase text-primary mb-3 leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Commitment Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-primary shadow-xl">
            <h2 className="text-4xl font-black uppercase text-primary text-center mb-12">
              Our Commitment to Excellence
            </h2>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-800">
              <p className="text-lg leading-relaxed">
                AGCC believes that education has the power to transform lives, strengthen communities, and shape a better future for generations to come. Through our exceptional faculty, visionary leadership, and dedication to quality education, we continue to inspire students to become confident professionals, compassionate leaders, and active contributors to the global community.
              </p>

              <div className="border-t-4 border-accent pt-8 mt-8">
                <p className="text-2xl font-black text-primary text-center italic">
                  "AGCC — Inspiring Excellence. Empowering Global Citizens. Building Future Leaders."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Our Instructors & Educators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals shaping excellence in education at AGCC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Kelly Peterson - First Teacher */}
            <div className="bg-white border-2 border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-56 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Ff0059806fb5d40d4845c0313c225d167?format=webp&width=800&height=1200"
                  alt="Kelly Peterson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-black uppercase text-primary mb-2">
                  Kelly Peterson
                </h3>
                <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 pb-4 border-b-2 border-accent/20">
                  Humanities & Law Teacher
                </p>
                <p className="text-xs font-bold text-gray-600 uppercase mb-4">
                  Virtual Educator Certified
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Kelly Peterson serves as our Humanities and Introduction to Law teacher, bringing a passion for critical thinking, global awareness, and student empowerment into every lesson.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-semibold text-accent">
                  An inspiring educator dedicated to academic excellence and mentorship.
                </p>
              </div>
            </div>

            {/* Kadeja Jacquet */}
            <div className="bg-white border-2 border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-56 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fe0a9e1d1df314eb4a7fa0e86d590f119?format=webp&width=800&height=1200"
                  alt="Kadeja Jacquet"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-black uppercase text-primary mb-2">
                  Kadeja Jacquet
                </h3>
                <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 pb-4 border-b-2 border-accent/20">
                  Reading & Language Teacher
                </p>
                <p className="text-xs font-bold text-gray-600 uppercase mb-4">
                  AS, Biology | Virtual Educator Certified
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Kadeja Jacquet is a dedicated reading teacher with over 10 years of teaching experience. Her approach focuses on personalized learning and fostering essential literacy skills.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-semibold text-accent">
                  Empowering students to become confident, lifelong learners.
                </p>
              </div>
            </div>

            {/* Chioma Frappier */}
            <div className="bg-white border-2 border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-56 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F10dfd613c070463cbbbf52bcb589a335?format=webp&width=800&height=1200"
                  alt="Chioma Frappier"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-black uppercase text-primary mb-2">
                  Chioma Frappier
                </h3>
                <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 pb-4 border-b-2 border-accent/20">
                  Information Technology Teacher
                </p>
                <p className="text-xs font-bold text-gray-600 uppercase mb-4">
                  MA, Cybersecurity | Virtual Educator Certified
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Chioma brings expertise in cybersecurity and IT education with extensive college-level teaching experience. Her teaching combines practical applications with theoretical knowledge.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-semibold text-accent">
                  Fostering dynamic learning in cybersecurity and IT trends.
                </p>
              </div>
            </div>

            {/* Wilfred Talbert */}
            <div className="bg-white border-2 border-accent/20 shadow-lg hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-56 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fbbede9571f404aa4afc31d495aded63a?format=webp&width=800&height=1200"
                  alt="Wilfred Talbert"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-black uppercase text-primary mb-2">
                  Wilfred Talbert
                </h3>
                <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 pb-4 border-b-2 border-accent/20">
                  Vocational Studies Instructor
                </p>
                <p className="text-xs font-bold text-gray-600 uppercase mb-4">
                  Florida Plumbing License | Virtual Educator Certified
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Mr. Wilfred Talbert is our plumbing instructor with over 15 years of experience in the plumbing industry. He focuses on building strong practical skills and fostering a supportive learning environment.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-semibold text-accent">
                  Inspiring students for successful vocational futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Faculty Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-primary mb-6">
            Connect With Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Have questions about our faculty, curriculum, or educational approach? Our team is ready to help.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+16464440818"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href="mailto:info@agccollege.org"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
              Email Our Team
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
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
