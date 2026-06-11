import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Lightbulb, Users, Globe, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Vision() {
  const visionPillars = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Delivering quality instruction and practical training that prepares students for real-world success.",
    },
    {
      icon: Target,
      title: "Leadership Development",
      description: "Cultivating leaders who inspire purpose, drive innovation, and create positive change.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Growth",
      description: "Embracing modern approaches to education that foster creativity and lifelong learning.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students to succeed in a dynamic, interconnected world with borderless opportunities.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Empowering graduates to become influential professionals and leaders within their communities.",
    },
    {
      icon: Sparkles,
      title: "Student Empowerment",
      description: "Creating an inclusive, student-centered environment where every individual can thrive.",
    },
  ];

  const visionElements = [
    {
      title: "Knowledge & Skills",
      description: "Equipping students with the practical knowledge, technical skills, and critical thinking abilities essential for professional success.",
      icon: "📚",
    },
    {
      title: "Integrity & Confidence",
      description: "Building character through ethical education that develops the confidence and integrity needed to lead with purpose.",
      icon: "🤝",
    },
    {
      title: "Professional Growth",
      description: "Fostering career readiness and professional development that opens doors to meaningful employment and entrepreneurship.",
      icon: "📈",
    },
    {
      title: "Lifelong Learning",
      description: "Inspiring a commitment to continuous learning and personal growth that extends throughout careers and lives.",
      icon: "🌱",
    },
    {
      title: "Societal Impact",
      description: "Creating leaders who drive positive change and contribute meaningfully to their communities and the world.",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2Fa40ed16515454aeb89c9ec15389e1e2e?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Our Future</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Our Vision
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            A global institution dedicated to academic excellence, leadership development, innovation, and community transformation.
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-12 md:p-16 border-2 border-accent shadow-lg">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-primary text-center mb-12">
              Vision Statement for AGC College
            </h2>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
              <p className="text-xl leading-relaxed text-center font-semibold text-primary">
                To become a globally recognized institution of higher learning dedicated to academic excellence, leadership development, innovation, and community transformation by empowering students with the knowledge, skills, integrity, and confidence to succeed in a dynamic world.
              </p>

              <hr className="border-accent" />

              <p className="text-lg leading-relaxed">
                AGC College envisions creating an inclusive and student-centered learning environment where education inspires purpose, professional growth, lifelong learning, and positive societal impact. Through quality instruction, practical training, and strong leadership values, we aim to prepare graduates who will become influential professionals, entrepreneurs, and leaders within their communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-primary mb-4">
              Six Pillars of Our Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core pillars guide our institutional direction and inform every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-primary mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Elements */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-primary mb-4">
              What We Envision for Our Graduates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our vision encompasses five essential elements that define student success at AGC College.
            </p>
          </div>

          <div className="space-y-8">
            {visionElements.map((element, idx) => (
              <div
                key={idx}
                className="flex gap-8 items-start p-8 bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="text-5xl flex-shrink-0 mt-2">{element.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black uppercase text-primary mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision in Action */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-primary shadow-xl">
            <h2 className="text-4xl font-black uppercase text-primary text-center mb-12">
              How We Bring Our Vision to Life
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Student-Centered Learning",
                  description: "Every program and policy is designed with students at the center, ensuring their needs, goals, and success are our top priority.",
                },
                {
                  step: 2,
                  title: "Quality Instruction & Training",
                  description: "Our faculty combines academic expertise with practical industry knowledge to deliver relevant, engaging, and transformative education.",
                },
                {
                  step: 3,
                  title: "Leadership Development",
                  description: "We integrate leadership values, critical thinking, and professional ethics throughout our curriculum to prepare confident leaders.",
                },
                {
                  step: 4,
                  title: "Innovation & Technology",
                  description: "We embrace modern educational approaches and smart learning technologies that enhance engagement and prepare students for digital futures.",
                },
                {
                  step: 5,
                  title: "Global Opportunities",
                  description: "Through partnerships, study abroad programs, and international collaboration, we provide genuine global learning experiences.",
                },
                {
                  step: 6,
                  title: "Community Connection",
                  description: "We foster strong ties with communities through service learning, internships, and initiatives that create real-world impact.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white font-black text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black uppercase text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Connection */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-primary mb-8">
            Aligned with Our Mission & Values
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Our vision is deeply aligned with our institutional mission and core values of integrity, excellence, innovation, and student success. Every program, initiative, and decision at AGC College is guided by our commitment to realizing this vision and creating graduates who will shape the future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
            >
              Explore Our Mission
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              Meet Our Leadership
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Be Part of Our Vision
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto leading-relaxed">
            Join AGC College and become part of a global community dedicated to academic excellence, leadership development, and positive change. Your journey begins here.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 shadow-lg"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+16464440818"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
