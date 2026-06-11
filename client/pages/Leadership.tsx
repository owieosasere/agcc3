import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Lightbulb, Target, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Leadership() {
  const executiveTeam = [
    {
      title: "Academic Affairs",
      description: "Our academic leadership ensures that all programs maintain high educational standards, industry relevance, and student-focused learning outcomes.",
      icon: "📚",
    },
    {
      title: "Student Affairs",
      description: "The Student Affairs division supports student wellness, leadership development, mentoring, and career preparation.",
      icon: "🎓",
    },
    {
      title: "Administration & Operations",
      description: "Our administration team oversees institutional planning, governance, finance, compliance, and operational excellence.",
      icon: "⚙️",
    },
    {
      title: "International Partnerships",
      description: "AGC College promotes global collaboration through academic partnerships, professional networks, and international opportunities for students and faculty.",
      icon: "🌍",
    },
  ];

  const leadershipPrinciples = [
    {
      title: "Integrity",
      description: "We uphold honesty, transparency, accountability, and ethical decision-making in all institutional activities.",
      icon: Heart,
    },
    {
      title: "Excellence",
      description: "We strive for continuous improvement in teaching, research, student services, and organizational performance.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "We encourage creativity, technology integration, and forward-thinking solutions that enhance learning and institutional growth.",
      icon: Lightbulb,
    },
    {
      title: "Student Success",
      description: "Students remain at the center of every decision we make. We are committed to supporting academic achievement, leadership development, and career success.",
      icon: Users,
    },
    {
      title: "Community Impact",
      description: "We believe education should positively influence communities locally and globally through service, research, and leadership.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F7df986ad37bd4078aa1a5978e48ed5af?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Leadership</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Leadership at AGC College
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGC College, leadership is more than a position—it is a commitment to excellence, integrity, innovation, and service.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our leadership team is dedicated to creating an academic environment that empowers students, faculty, and staff to achieve their highest potential while contributing meaningfully to society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that education transforms lives, strengthens communities, and builds future leaders. Through visionary governance, academic excellence, and student-centered policies, AGC College continues to prepare graduates who are equipped to succeed in a rapidly evolving global environment.
            </p>
          </div>
        </div>
      </section>

      {/* President Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-primary shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black uppercase text-primary mb-2">
                Jace Owie
              </h2>
              <p className="text-2xl font-black text-accent uppercase tracking-wider mb-4">
                President & Chief Executive Officer
              </p>
              <p className="text-lg font-semibold text-gray-600 italic">
                AAPM - America Academy of Project Management
              </p>
            </div>

            <div className="space-y-6 text-gray-800">
              <p className="text-lg leading-relaxed">
                Dr. Jace Owie is an accomplished educational leader with extensive experience in higher education development, institutional management, and academic innovation. As President of AGC College, he provides strategic leadership focused on academic excellence, student success, international collaboration, and institutional growth.
              </p>

              <div className="bg-accent/5 p-8 border-l-4 border-accent my-8">
                <p className="text-xl font-black text-primary uppercase mb-4">Leadership Priorities:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span>Quality education and professional training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span>Student empowerment and career readiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span>Ethical leadership and institutional integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span>Innovation in teaching and learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
                    <span>Community engagement and global partnerships</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed italic border-l-4 border-primary pl-6 py-4">
                "Education should inspire innovation, develop leadership, and create opportunities for lifelong success."
              </p>

              <p className="text-lg leading-relaxed">
                Dr. Owie believes that education should be accessible, practical, and transformative. Through this vision, AGC College continues to develop graduates who are prepared to become responsible professionals, entrepreneurs, and leaders in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietress Welcome Address */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-12 md:p-16 border-2 border-accent shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black uppercase text-primary mb-4">
                Welcome Address
              </h2>
              <p className="text-2xl font-black text-accent uppercase tracking-wider">
                Terryann Talbert
              </p>
              <p className="text-lg font-semibold text-gray-600 italic mt-2">
                Proprietress, AGC College
              </p>
            </div>

            <div className="space-y-6 text-gray-800 prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Welcome to AGC College, a place where education, leadership, innovation, and opportunity come together to shape the future.
              </p>

              <p className="text-lg leading-relaxed">
                As Proprietress of AGC College, I am honored to lead an institution that is committed to empowering students through quality education, professional development, and character building. We believe that every student possesses unique potential, and our mission is to help transform that potential into achievement, leadership, and lifelong success.
              </p>

              <p className="text-lg leading-relaxed">
                At AGC College, we are building more than academic programs; we are building confident leaders, skilled professionals, responsible citizens, and visionary thinkers who will positively impact their communities and the world.
              </p>

              <div className="bg-white p-8 border-l-4 border-accent my-8">
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Our institution is founded on core values of integrity, excellence, discipline, respect, innovation, and service. These principles guide every aspect of our academic environment and inspire us to maintain the highest standards in education and student support.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                We understand that the world is changing rapidly, and today's students must be prepared not only with knowledge but also with adaptability, creativity, leadership skills, and global awareness. That is why AGC College remains dedicated to providing modern, career-focused, and student-centered learning experiences that prepare graduates for real-world success.
              </p>

              <p className="text-lg leading-relaxed">
                I encourage every student who joins our institution to dream boldly, work diligently, and embrace every opportunity for growth and discovery. Your journey at AGC College will be one of transformation, learning, and achievement.
              </p>

              <p className="text-lg leading-relaxed">
                To our students, parents, faculty, staff, and partners, thank you for being part of the AGC College family. Together, we will continue building an institution recognized for academic excellence, leadership development, and community impact.
              </p>

              <div className="border-t-2 border-accent pt-8 mt-8">
                <p className="text-lg leading-relaxed italic">
                  I warmly welcome you to AGC College, where your future begins.
                </p>
                <p className="text-lg font-semibold text-primary mt-6">
                  With sincere regards,
                </p>
                <p className="text-2xl font-black text-accent uppercase mt-4">
                  Terryann Talbert
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Proprietress, AGC College
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Team</span>
          </div>

          <h2 className="text-4xl font-black uppercase text-primary mb-16">
            Executive Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveTeam.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black uppercase text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-primary mb-4">
              Our Leadership Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every decision we make and shape our institutional culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {leadershipPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-primary mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white">
              <h3 className="text-2xl font-black uppercase mb-6 text-accent">
                Mission Statement
              </h3>
              <p className="text-lg leading-relaxed">
                AGC College is committed to providing accessible, high-quality, and career-focused education that empowers students with the knowledge, skills, and leadership abilities needed to succeed in today's global society.
              </p>
            </div>

            {/* Vision */}
            <div className="p-12 bg-gradient-to-br from-accent to-accent/80 text-white">
              <h3 className="text-2xl font-black uppercase mb-6 text-white">
                Vision Statement
              </h3>
              <p className="text-lg leading-relaxed">
                To become a globally respected institution recognized for academic excellence, leadership development, innovation, and community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black uppercase text-primary mb-6">
            Our Commitment to Excellence
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            AGC College is dedicated to academic excellence, leadership development, and student success. Through innovative education, experienced faculty, and a commitment to integrity, we prepare students to become skilled professionals and future leaders in a global economy.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Join the Next Generation of Leaders
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto leading-relaxed">
            At AGC College, we believe every student has the potential to lead, innovate, and make a difference. Begin your journey toward academic and professional success today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 shadow-lg"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/course-list"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore Programs
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+16464440818"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
            >
              Contact Admissions
              <ArrowRight size={20} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
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
