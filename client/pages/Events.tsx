import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Award, Plane, Code2, Leaf, Languages, Heart, Wrench, Mic2, Palette, Users, BookOpen, Mail, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  title: string;
  subtitle: string;
  status: string;
  icon: React.ReactNode;
  description: string;
  highlights: string[];
  focus?: string;
}

const events: Event[] = [
  {
    title: "Global Orientation & Welcome Week",
    subtitle: "Building Community From Day One",
    status: "Starting Soon",
    icon: <Globe size={32} />,
    description: "A special orientation program for newly admitted students and parents designed to introduce families to the AGCC learning community.",
    highlights: [
      "Introduction to AGCC learning systems",
      "Meet-and-greet with faculty and staff",
      "Parent guidance sessions",
      "Academic onboarding and orientation",
      "Student networking opportunities"
    ]
  },
  {
    title: "International University & Career Readiness Summit",
    subtitle: "Prepare for Your Future",
    status: "Starting Soon",
    icon: <Award size={32} />,
    description: "This program helps students prepare for university admissions, international study opportunities, and career pathway planning with professional mentors.",
    highlights: [
      "University admissions preparation",
      "International study opportunities",
      "Career pathway planning",
      "Scholarship guidance",
      "Resume and interview preparation"
    ],
    focus: "Engage with academic mentors and professionals from different industries"
  },
  {
    title: "Global Travel Learning & Cultural Diplomacy Programs",
    subtitle: "Educational Leadership & Cultural Exchange Experiences",
    status: "Ongoing",
    icon: <Plane size={32} />,
    description: "AGCC's transformative Travel Learning Programs focused on cultural diplomacy, citizen diplomacy, and real-life leadership engagements across the globe.",
    highlights: [
      "Meet iconic leaders, mentors, and diplomats",
      "Visit international institutions and cultural heritage sites",
      "Leadership development activities",
      "Global discussions and cultural immersion",
      "Real-world exposure to international systems and cultures"
    ],
    focus: "Dates and details announced at the beginning of each calendar year"
  },
  {
    title: "Technology, Innovation & AI Conference",
    subtitle: "Exploring the Future of Technology",
    status: "New Dates Coming",
    icon: <Code2 size={32} />,
    description: "Students explore cutting-edge technology, artificial intelligence, coding innovations, and future careers in the tech industry.",
    highlights: [
      "Artificial Intelligence (AI) exploration",
      "Coding and digital innovation",
      "Smart technologies",
      "Future careers in technology",
      "Entrepreneurship and innovation pathways"
    ]
  },
  {
    title: "Green Agriculture & Smart Farming Workshop",
    subtitle: "Sustainable Innovation for the Future",
    status: "Flexible Dates",
    icon: <Leaf size={32} />,
    description: "A hands-on workshop focused on sustainable farming practices, agricultural technology, and agribusiness opportunities for youth.",
    highlights: [
      "SmartAgro systems and innovation",
      "TechAgro innovations",
      "Sustainable farming practices",
      "Agribusiness opportunities for youth",
      "Environmental sustainability practices"
    ]
  },
  {
    title: "Language & International Test Preparation",
    subtitle: "Master Global Communication",
    status: "Now Open",
    icon: <Languages size={32} />,
    description: "Comprehensive preparation programs for international English proficiency tests and multilingual language training.",
    highlights: [
      "IELTS preparation",
      "TOEFL preparation",
      "PTE and CELPIP training",
      "Multilingual programs: Spanish, French, German, Italian, Dutch, Edo",
      "International English proficiency certification"
    ]
  },
  {
    title: "Healthcare & Professional Certification Program",
    subtitle: "Career Pathways in Healthcare & Services",
    status: "Open",
    icon: <Heart size={32} />,
    description: "Introduction to AGCC's international professional credit certification programs with global recognition and credibility.",
    highlights: [
      "Healthcare support training",
      "Pharmacy assistance certification",
      "Personal support services",
      "Workplace readiness programs",
      "Customer service and administration training"
    ],
    focus: "Represented by Skill Council of Canada"
  },
  {
    title: "Vocational Skills & Internship Expo",
    subtitle: "Hands-On Training Opportunities",
    status: "Starting Soon",
    icon: <Wrench size={32} />,
    description: "Explore practical vocational training and internship opportunities in high-demand technical fields.",
    highlights: [
      "Plumbing systems and technology",
      "Advanced automobile technology",
      "Construction and home building",
      "Smart home technologies",
      "Tech systems and innovation"
    ]
  },
  {
    title: "Global Leadership & Public Speaking Workshop",
    subtitle: "Developing Tomorrow's Leaders",
    status: "Starting Soon",
    icon: <Mic2 size={32} />,
    description: "Interactive workshops designed to build confidence, leadership skills, and powerful communication abilities.",
    highlights: [
      "Leadership development training",
      "Public speaking workshops",
      "Debate and communication sessions",
      "Youth advocacy training",
      "Confidence-building activities"
    ]
  },
  {
    title: "International Culture & Talent Showcase",
    subtitle: "Celebrating Global Diversity",
    status: "Open - Flexible Dates",
    icon: <Palette size={32} />,
    description: "A celebration of global diversity where students showcase their talents, creativity, and cultural traditions from around the world.",
    highlights: [
      "Showcase talents and creativity",
      "Cultural performances and presentations",
      "Music, art, and storytelling",
      "Share traditions from around the world",
      "Celebrate global diversity"
    ]
  },
  {
    title: "Parent Engagement & Family Partnership Sessions",
    subtitle: "Strengthening School-Family Collaboration",
    status: "Flexible Dates",
    icon: <Users size={32} />,
    description: "AGCC values strong parent-school collaboration through engaging partnership sessions.",
    highlights: [
      "Academic progress monitoring",
      "Student support strategies",
      "University and career planning",
      "Parent involvement in learning success",
      "Family partnership in education"
    ]
  },
  {
    title: "Global Citizenship & Youth Empowerment Conference",
    subtitle: "Building Leaders for a Better World",
    status: "Dates Announced Annually",
    icon: <BookOpen size={32} />,
    description: "A comprehensive conference focused on developing global leaders with social responsibility and cultural awareness.",
    highlights: [
      "Global leadership development",
      "Social responsibility and ethics",
      "Cultural awareness training",
      "Youth empowerment and innovation",
      "Community impact initiatives"
    ]
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Events & Programs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Upcoming Events & Enrollment Opportunities
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Connecting Students, Families, and Global Opportunities
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Throughout the year, AGCC organizes educational, cultural, leadership, career, and experiential learning programs designed to equip students with the knowledge, skills, and global exposure needed to thrive in today's interconnected world.
          </p>
        </div>
      </section>

      {/* Why Events Matter */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
              Why AGCC Events Matter
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Our upcoming events and programs provide students and families with opportunities to grow, explore, and connect with the global community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Develop leadership and communication skills",
                "Explore international education and career pathways",
                "Participate in global cultural exchange experiences",
                "Build confidence and global awareness",
                "Connect with mentors, institutions, and professionals worldwide",
                "Gain real-world learning experiences beyond the classroom"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-accent">
                  <ArrowRight size={20} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold uppercase tracking-wide">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Featured Programs & Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the diverse events and programs available to AGCC students and families throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-accent/20 overflow-hidden flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-accent/10 text-accent font-black text-xs px-4 py-2 rounded uppercase tracking-widest">
                      {event.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {event.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black uppercase text-primary mb-2">
                    {event.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-accent font-black italic mb-4 text-sm">
                    "{event.subtitle}"
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Focus (if applicable) */}
                  {event.focus && (
                    <p className="text-xs text-gray-600 italic mb-6 pb-6 border-b border-gray-200">
                      {event.focus}
                    </p>
                  )}

                  {/* Highlights */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-accent font-bold mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {event.highlights.length > 3 && (
                        <li className="text-xs text-primary font-bold">
                          +{event.highlights.length - 3} more highlights
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

      {/* Travel Learning Benefits */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Benefits of Travel Learning Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Leadership Skills",
                description: "Develop real-world leadership abilities through international experiences and mentorship."
              },
              {
                title: "Cross-Cultural Understanding",
                description: "Gain deep appreciation and respect for diverse cultures, traditions, and perspectives."
              },
              {
                title: "Confidence & Independence",
                description: "Build personal confidence through new experiences and challenging situations."
              },
              {
                title: "International Networking",
                description: "Connect with peers, mentors, and professionals from around the world."
              },
              {
                title: "Real-World Learning",
                description: "Experience education beyond the classroom with practical, hands-on experiences."
              },
              {
                title: "Cultural Intelligence",
                description: "Develop the awareness and skills to succeed in a global, interconnected world."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-lg font-black uppercase text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Information */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Enrollment Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
                Enrollment Information
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Some AGCC programs are currently open for enrollment. Parents and prospective students are encouraged to contact the College with their area of interest, preferred program, and academic or career goals.
              </p>

              <h3 className="text-2xl font-black uppercase text-primary mb-6">
                Our Team Will Provide
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  "Program structure and requirements",
                  "Complete enrollment process details",
                  "Tuition and payment options",
                  "Schedules and participation details",
                  "Student support and resources"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded">
                    <Calendar size={20} className="text-accent flex-shrink-0 mt-1" />
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

            {/* Right: Important Notice */}
            <div>
              <div className="bg-accent/10 border-4 border-accent p-12 rounded-lg">
                <h3 className="text-2xl font-black uppercase text-primary mb-6">
                  Important Notice to Parents & Students
                </h3>

                <p className="text-gray-800 mb-6 leading-relaxed">
                  All official event schedules, participation guidelines, enrollment details, and travel program information will be communicated directly to parents and students through AGCC's official communication channels.
                </p>

                <h4 className="text-lg font-black uppercase text-primary mb-4">
                  Monitor These Channels
                </h4>

                <ul className="space-y-3 mb-8">
                  {[
                    "Email updates",
                    "Student portals",
                    "Official AGCC announcements",
                    "School communication groups"
                  ].map((channel, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {channel}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-700 italic border-t border-accent/20 pt-6">
                  Regular monitoring of official channels ensures you stay updated on the latest opportunities and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Stay Connected with AGCC
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white font-black leading-relaxed">
            Every program and event is designed to inspire academic excellence, leadership development, global exposure, creativity and innovation, and career readiness.
          </p>

          <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
            <p className="text-3xl font-black italic text-accent mb-4">
              "Learn Globally. Lead Confidently. Impact the World."
            </p>
          </div>

          <p className="text-2xl font-black uppercase mb-12 text-accent">
            Join Our Global Learning Community
          </p>

          <p className="text-lg text-white font-semibold mb-12 leading-relaxed">
            We look forward to welcoming students and families into our growing global learning community filled with opportunities for growth and transformation.
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
