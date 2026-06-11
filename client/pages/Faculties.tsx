import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Palette, Code2, Leaf, Heart, Languages, Users, Wrench, Globe, TrendingUp, Users2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Faculty {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  programs: string[];
  focus: string;
}

const faculties: Faculty[] = [
  {
    title: "Faculty of High School Education",
    tagline: "Building Strong Academic Foundations",
    icon: <BookOpen size={32} />,
    description: "Provides a comprehensive academic pathway for secondary students with American-standard education, customized learning, and examination preparation.",
    programs: [
      "JSS1 – JSS3 Education",
      "SS1 – SS3 Education",
      "American-standard curriculum",
      "Mathematics & Sciences",
      "English Language & Literature",
      "Social Studies & Civic Education",
      "ICT & Digital Literacy",
      "GCE & GED Support"
    ],
    focus: "Academic excellence, leadership development, and study abroad readiness"
  },
  {
    title: "Faculty of Arts & Creative Expression",
    tagline: "Creativity Without Borders",
    icon: <Palette size={32} />,
    description: "Empowers students to explore creativity, culture, innovation, and self-expression through modern and traditional artistic disciplines.",
    programs: [
      "Visual Arts & Design",
      "Digital Media & Content Creation",
      "Creative Writing & Storytelling",
      "Music & Performance Arts",
      "Theatre & Drama",
      "Fashion & Creative Branding",
      "Photography & Video Production"
    ],
    focus: "Global art showcases, talent exhibitions, and creative entrepreneurship"
  },
  {
    title: "Faculty of Technology & Innovation",
    tagline: "Preparing Students for the Digital Future",
    icon: <Code2 size={32} />,
    description: "Equips students with practical and future-focused digital skills essential in today's global economy.",
    programs: [
      "Computer Fundamentals",
      "Coding & Programming",
      "Artificial Intelligence (AI) Awareness",
      "Web Development",
      "Digital Entrepreneurship",
      "Smart Technology Systems",
      "Cyber Awareness & Digital Safety"
    ],
    focus: "Technology innovation projects and real-world digital applications"
  },
  {
    title: "Faculty of Agriculture & Smart Farming",
    tagline: "Feeding the Future Through Innovation",
    icon: <Leaf size={32} />,
    description: "Focuses on sustainable agriculture, agribusiness, and modern farming technologies for future agricultural leaders.",
    programs: [
      "SmartAgro Systems",
      "TechAgro & Digital Farming",
      "Green Agriculture",
      "Sustainable Farming Practices",
      "Agribusiness & Agro-Marketing",
      "Climate-Smart Agriculture"
    ],
    focus: "Food production systems and agricultural entrepreneurship"
  },
  {
    title: "Faculty of Health & Community Care",
    tagline: "Training Compassionate and Skilled Professionals",
    icon: <Heart size={32} />,
    description: "Provides foundational and professional health-related education aligned with global workforce demands.",
    programs: [
      "Healthcare Support Services",
      "Pharmacy Assistance",
      "Personal Support & Caregiving",
      "Community Health Assistance",
      "Health & Wellness Education",
      "Public Health Awareness"
    ],
    focus: "Workplace readiness and professional healthcare careers"
  },
  {
    title: "Faculty of Languages & International Communication",
    tagline: "Connecting Cultures Through Language",
    icon: <Languages size={32} />,
    description: "Promotes multilingual education, communication skills, and cross-cultural understanding for global competence.",
    programs: [
      "English Language Development",
      "IELTS, TOEFL, PTE, CELPIP Preparation",
      "French, Spanish, German, Dutch, Italian",
      "Edo Language",
      "Cross-cultural communication",
      "Study abroad preparation"
    ],
    focus: "International communication and study abroad readiness"
  },
  {
    title: "Faculty of Adult Learning & Professional Development",
    tagline: "Learning Has No Age Limit",
    icon: <Users size={32} />,
    description: "Provides flexible educational opportunities for adult learners, professionals, and career changers seeking skill advancement.",
    programs: [
      "Professional certification programs",
      "Workplace readiness training",
      "Digital literacy",
      "Entrepreneurship education",
      "Career advancement courses",
      "Professional development"
    ],
    focus: "Career advancement and skills upgrading for working adults"
  },
  {
    title: "Faculty of Skilled Trades & Vocational Studies",
    tagline: "Hands-On Skills for Real-World Success",
    icon: <Wrench size={32} />,
    description: "Focuses on practical, income-generating technical skills through hands-on training and industry mentorship.",
    programs: [
      "Plumbing Systems",
      "Advanced Automobile Repair",
      "Home Building & Construction",
      "Smart Home Technologies",
      "Electrical & Technical Systems",
      "Maintenance & Installation Training"
    ],
    focus: "Practical demonstrations and career preparation"
  },
  {
    title: "Faculty of Global Leadership & Diplomacy",
    tagline: "Developing Tomorrow's Global Leaders",
    icon: <Globe size={32} />,
    description: "Prepares students for leadership, diplomacy, and international engagement with real-world experiences.",
    programs: [
      "Cultural Diplomacy",
      "Citizen Diplomacy",
      "Public Diplomacy",
      "Leadership Development",
      "International Relations Awareness",
      "Public Speaking & Advocacy"
    ],
    focus: "Leadership workshops and international travel learning"
  },
  {
    title: "Faculty of Business, Entrepreneurship & Financial Literacy",
    tagline: "Building Future Entrepreneurs & Innovators",
    icon: <TrendingUp size={32} />,
    description: "Teaches practical business and financial skills that support entrepreneurship and career success.",
    programs: [
      "Entrepreneurship Development",
      "Financial Literacy",
      "Business Communication",
      "Marketing & Branding",
      "Digital Business Skills",
      "Startup Development"
    ],
    focus: "Business mentorship and startup planning"
  },
  {
    title: "Faculty of Global Citizenship & Social Development",
    tagline: "Creating Impact Beyond the Classroom",
    icon: <Users2 size={32} />,
    description: "Focuses on community engagement, volunteerism, social responsibility, and youth empowerment initiatives.",
    programs: [
      "Community engagement",
      "Volunteerism & service",
      "Social responsibility",
      "Youth empowerment",
      "Environmental sustainability",
      "Social impact programs"
    ],
    focus: "Humanitarian projects and community leadership"
  }
];

export default function Faculties() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Academic Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Our Faculties
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Excellence in Education Across Disciplines
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGCC, our academic structure provides students with comprehensive, globally relevant, and career-focused education through diverse faculties led by experienced educators and industry professionals.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
              A Comprehensive Academic Structure
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Through our diverse faculties and schools of learning, students receive academic instruction, practical training, leadership development, and real-world exposure that prepare them for success in education, careers, entrepreneurship, and global engagement.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our faculties are led by award-winning educators, international instructors, industry professionals, and experienced mentors dedicated to delivering high-quality American-standard education in a flexible and globally connected environment.
            </p>
          </div>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Our Academic Faculties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse faculties designed to provide globally relevant education and career-ready skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty, idx) => (
              <div key={idx} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-accent/20 overflow-hidden flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {faculty.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black uppercase text-primary mb-2">
                    {faculty.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-accent font-black italic mb-4 text-sm">
                    "{faculty.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {faculty.description}
                  </p>

                  {/* Focus */}
                  <p className="text-xs text-gray-600 italic mb-6 pb-6 border-b border-gray-200">
                    Focus: {faculty.focus}
                  </p>

                  {/* Programs */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Key Programs:</h4>
                    <ul className="space-y-2">
                      {faculty.programs.slice(0, 3).map((program, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{program}</span>
                        </li>
                      ))}
                      {faculty.programs.length > 3 && (
                        <li className="text-xs text-primary font-bold pt-1">
                          +{faculty.programs.length - 3} more programs
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Faculty Team */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Our Faculty Team
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              AGCC's faculty consists of award-winning educators, international instructors, industry professionals, experienced mentors, and career and leadership coaches. Under the leadership of Proprietor Terryann Talbert, AGCC maintains a strong commitment to academic excellence, innovation, student-centered learning, and global competitiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Award-winning educators",
              "International instructors",
              "Industry professionals",
              "Experienced mentors",
              "Career coaches",
              "Leadership development experts"
            ].map((role, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border-l-4 border-primary flex items-center gap-4">
                <CheckCircle size={24} className="text-accent flex-shrink-0" />
                <p className="text-gray-800 font-bold">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Learning Community */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            A Global Learning Community
          </h2>

          <p className="text-lg text-gray-800 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
            At AGCC, our faculties work together to ensure students receive a comprehensive education that prepares them for success in all areas of life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Academic Excellence", description: "High-quality instruction aligned with global standards" },
              { title: "Career-Ready Skills", description: "Practical training for immediate workforce readiness" },
              { title: "Leadership Development", description: "Programs designed to cultivate future leaders" },
              { title: "Cross-Cultural Exposure", description: "International learning and global perspectives" },
              { title: "Real-World Experience", description: "Practical projects and industry partnerships" },
              { title: "Student-Centered Learning", description: "Customized pathways for individual success" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border-l-4 border-accent">
                <h3 className="text-lg font-black uppercase text-primary mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment & Information */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Information */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
                Enrollment & Faculty Information
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Some faculty programs are currently open for enrollment. Parents and prospective students are encouraged to contact AGCC with their academic interests, career goals, and preferred learning pathways.
              </p>

              <h3 className="text-2xl font-black uppercase text-primary mb-6">
                Our Admissions Team Provides
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  "Complete program information and details",
                  "Custom enrollment procedures",
                  "Flexible tuition and payment options",
                  "Personalized learning pathway guidance",
                  "Student support and mentorship resources"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded border-l-4 border-accent">
                    <ArrowRight size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Admissions
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right: Academic Pathways */}
            <div className="bg-white border-4 border-primary p-12 rounded-lg">
              <h3 className="text-2xl font-black uppercase text-primary mb-8">
                Areas of Academic Interest
              </h3>

              <p className="text-gray-800 mb-8 leading-relaxed">
                We welcome students with diverse interests and career aspirations. Contact us with your:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Area of academic interest",
                  "Career goals and aspirations",
                  "Preferred learning pathway",
                  "Professional development needs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <span className="w-3 h-3 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-700 italic border-t border-primary/20 pt-6">
                Our experienced academic advisors will guide you toward the faculty and programs that align with your goals and support your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Excellence Across Every Discipline
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white font-black leading-relaxed">
            From arts and sciences to technology and entrepreneurship, AGCC's faculties offer comprehensive pathways to academic achievement, career readiness, and global leadership.
          </p>

          <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
            <p className="text-3xl font-black italic text-accent">
              "Empowering Global Minds Across Every Discipline."
            </p>
          </div>

          <p className="text-2xl font-black uppercase mb-12 text-accent">
            Find Your Academic Path at AGCC
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Learn More
              <ArrowRight size={20} />
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
