import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Heart, BookOpen, Briefcase, Users, Shield, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Counselling() {
  const services = [
    {
      title: "Academic Counselling",
      icon: BookOpen,
      items: [
        "Academic planning and goal setting",
        "Study skills and time management",
        "Course selection guidance",
        "Support for online and smart learning",
        "University preparation assistance",
        "Personalized student success planning",
      ],
      description: "Our counsellors work closely with students to help them stay focused, motivated, and academically successful. AGCC's Smart Education model provides individualized learning pathways supported by real-time mentorship and adaptive learning systems.",
    },
    {
      title: "College & Career Guidance",
      icon: Briefcase,
      items: [
        "University admission preparation",
        "American Credit Certificate guidance",
        "Career readiness coaching",
        "Resume and portfolio development",
        "Remote work and freelancing preparation",
        "Leadership and entrepreneurship mentoring",
      ],
      description: "AGCC prepares students for global opportunities beyond graduation. Students are encouraged to build university-ready portfolios and gain internationally recognized skills that support future success in the USA, Canada, UK, Europe, and beyond.",
    },
    {
      title: "Personal & Emotional Support",
      icon: Heart,
      items: [
        "Stress and anxiety management",
        "Self-confidence and motivation",
        "Personal growth and development",
        "Social and peer relationships",
        "Cultural adjustment and global learning transitions",
        "Emotional wellness and resilience",
      ],
      description: "Our counselling services provide a safe and confidential environment for students. At AGCC, we understand the importance of balancing academic achievement with emotional well-being.",
    },
  ];

  const wellnessAreas = [
    { title: "Mental Health Awareness", icon: "🧠" },
    { title: "Leadership Skills", icon: "👥" },
    { title: "Global Citizenship Education", icon: "🌍" },
    { title: "Communication & Teamwork", icon: "💬" },
    { title: "Community Engagement", icon: "🤝" },
    { title: "Career Exploration", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden"
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
            <span className="font-black text-sm uppercase tracking-widest">Student Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            College Counselling
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Supporting Student Success, Wellness & Global Leadership
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
            <p className="text-xl leading-relaxed">
              At America Global Citizen College (AGCC), we believe that every student deserves guidance, encouragement, and support throughout their academic journey.
            </p>
            <p className="text-lg leading-relaxed">
              Our College Counselling Services are designed to help students achieve personal growth, academic excellence, emotional wellness, and career readiness within a supportive and inclusive learning environment. AGCC emphasizes global citizenship, student success, and individualized support through dedicated teachers, counselors, and academic advisors available across time zones.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-primary shadow-xl">
            <h2 className="text-4xl font-black uppercase text-primary text-center mb-8">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 text-center">
              The mission of the AGCC Counselling Department is to empower students with the confidence, skills, emotional resilience, and academic guidance needed to thrive in a globalized world. We are committed to fostering critical thinking, leadership, personal development, and responsible decision-making for every student.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Services</span>
          </div>

          <h2 className="text-4xl font-black uppercase text-primary mb-16">
            What We Offer
          </h2>

          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-accent" />
                      </div>
                      <h3 className="text-3xl font-black uppercase text-primary">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="text-accent font-bold text-xl flex-shrink-0 mt-1">✓</span>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg border border-accent/20 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="text-6xl mb-6">
                      {idx === 0 ? "📚" : idx === 1 ? "🎯" : "💙"}
                    </div>
                    <h4 className="text-2xl font-black uppercase text-primary mb-6">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.items.slice(0, 3).map((item, i) => (
                        <p key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="text-accent font-bold">•</span> {item}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 italic mt-4">+ More...</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Student Support */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-accent shadow-lg">
            <h2 className="text-4xl font-black uppercase text-primary mb-8">
              Global Student Support
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-8">
              As a global learning institution, AGCC proudly supports students from Nigeria, Kenya, India, UAE, the USA, and many other countries. Our counselling team helps students successfully navigate multicultural learning experiences and develop strong global citizenship values.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["Nigeria", "Kenya", "India", "UAE", "USA", "Canada", "UK", "Europe", "Worldwide"].map((country, idx) => (
                <div key={idx} className="p-4 bg-primary/5 border border-primary/20 rounded text-center">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness & Leadership */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-primary mb-4">
              Student Wellness & Leadership Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AGCC promotes holistic student development through workshops, mentoring, and leadership programs focused on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border border-gray-200 hover:shadow-lg hover:border-accent transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-black uppercase text-primary">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary text-white rounded-lg text-center">
            <p className="text-lg leading-relaxed">
              Our goal is to develop confident, socially conscious leaders who can positively impact their communities and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-black uppercase text-primary mb-6">
                Confidentiality & Student Care
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                All counselling sessions are handled with professionalism, respect, and confidentiality. AGCC is committed to maintaining a caring and supportive environment where students feel safe, valued, and empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-12 md:p-16 rounded-lg shadow-lg">
            <h2 className="text-4xl font-black uppercase mb-8">
              Meet Our Support Team
            </h2>
            <p className="text-lg leading-relaxed">
              AGCC's experienced educators, counselors, and advisors are committed to providing individualized support and mentorship to help students achieve academic and personal success. The institution's faculty includes culturally competent and multilingual professionals dedicated to student growth and development.
            </p>
          </div>
        </div>
      </section>

      {/* Proprietress Message */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border-2 border-accent shadow-xl">
            <h2 className="text-3xl font-black uppercase text-primary text-center mb-8">
              Message from the Proprietress
            </h2>
            <blockquote className="text-center border-l-4 border-accent pl-8 py-8">
              <p className="text-lg leading-relaxed text-gray-800 italic mb-6">
                "At AGCC, we are committed to nurturing not only academic excellence but also emotional wellness, leadership, and personal growth. Our counselling services are designed to ensure that every student feels supported, encouraged, and empowered to succeed in a rapidly changing global world."
              </p>
              <p className="text-lg font-semibold text-primary">
                — Terry Ann Talbert, Proprietress
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Schedule Session CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase text-primary mb-8">
            Schedule a Counselling Session
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Students and parents may contact the Counselling Department for academic guidance, wellness support, and career advising.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+16464440818"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Phone size={20} />
              Call Us
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:info@agccollege.org"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
            >
              <MessageSquare size={20} />
              Email Us
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Homepage Version Info */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black uppercase text-primary mb-4">
            Counselling & Student Support
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            AGCC provides academic, career, and personal counselling services designed to support student wellness, leadership development, and global success. Our experienced counselors and advisors are committed to helping every student thrive academically, emotionally, and professionally.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              Your Success is Our Priority
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto leading-relaxed">
            Let us support your academic journey, career goals, and personal growth. Reach out to our counselling team today.
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
              Contact Counselling
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
