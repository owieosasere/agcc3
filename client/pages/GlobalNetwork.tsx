import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Award, Plane, Brain, Users, Leaf, Briefcase, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalNetwork() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Global Partnership</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Our Global Network
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Connecting Students to Global Opportunities
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGCC, we believe education should prepare students for meaningful participation in an interconnected global society. Through international partnerships, exchange programs, and global engagement initiatives, AGCC provides access to a truly international educational experience.
          </p>
        </div>
      </section>

      {/* Our Global Network Overview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 text-center">
              What Our Global Network Offers
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Our Global Network connects students, educators, institutions, mentors, and professionals across continents, creating opportunities for international learning, cultural exchange, study abroad pathways, leadership development, career readiness, and global collaboration.
            </p>
            <p className="text-lg text-gray-800 mb-12 leading-relaxed">
              AGCC is committed to building bridges between nations through education, innovation, and global citizenship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "International learning opportunities",
                "Cultural exchange experiences",
                "Study abroad pathways",
                "Leadership development programs",
                "Career readiness training",
                "Global collaboration projects"
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

      {/* A Truly Global Learning Community */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              A Truly Global Learning Community
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            AGCC proudly serves students from Africa, North America, Europe, the Middle East, and Asia. Students from countries including Nigeria, Kenya, India, the UAE, the United States, and beyond participate in AGCC's virtual classrooms and international learning activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {["Africa", "North America", "Europe", "Middle East", "Asia"].map((region, idx) => (
              <div key={idx} className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20 text-center">
                <Globe size={32} className="text-primary mx-auto mb-3" />
                <p className="font-black uppercase text-primary text-sm">{region}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black uppercase text-primary mb-6">
            This Global Environment Allows Students to:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Learn from different cultures and perspectives",
              "Build international friendships and networks",
              "Collaborate on global projects",
              "Develop cultural intelligence and communication skills"
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
                <span className="text-accent font-black text-xl">✓</span>
                <p className="text-gray-800 font-bold">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Academic Partnerships */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              International Academic Partnerships
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            AGCC collaborates with educational institutions and organizations that support academic advancement, international learning pathways, student exchange opportunities, and career development.
          </p>

          <h3 className="text-2xl font-black uppercase text-primary mb-6">Current Partnerships Include:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "Highstone Global University",
              "Appleton Private University",
              "IFPUFPU"
            ].map((partner, idx) => (
              <div key={idx} className="p-8 bg-white rounded-lg shadow-md text-center border-t-4 border-primary">
                <Award size={32} className="text-primary mx-auto mb-4" />
                <p className="font-black uppercase text-primary">{partner}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black uppercase text-primary mb-6">These Collaborations Help AGCC Students Access:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "International academic opportunities",
              "Transferable educational experiences",
              "Global career exposure",
              "Cross-border learning connections"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 bg-white rounded-lg">
                <span className="text-accent font-black text-xl">→</span>
                <p className="text-gray-800 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad & Exchange Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Study Abroad & Student Exchange Programs
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            AGCC's Global Network includes international educational experiences designed to expose students to real-world global environments and cultural immersion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                flag: "🇺🇸",
                country: "United States",
                description: "Cultural exchange and academic immersion, university campus experiences, and leadership exposure programs"
              },
              {
                flag: "🇨🇦",
                country: "Canada",
                description: "STEM and innovation-focused programs, career and workforce exposure, and international academic opportunities"
              },
              {
                flag: "🇪🇺",
                country: "Europe",
                description: "Language immersion programs, arts and cultural studies, and global citizenship learning experiences"
              },
              {
                flag: "🌍",
                country: "Africa",
                description: "Heritage education and social impact learning, cultural preservation experiences, and community engagement"
              }
            ].map((program, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border-l-4 border-accent">
                <p className="text-4xl mb-3">{program.flag}</p>
                <h3 className="text-xl font-black uppercase text-primary mb-3">{program.country}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black uppercase text-primary mb-6">These Exchange Opportunities Help Students:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Experience different cultures firsthand",
              "Build global confidence and adaptability",
              "Expand academic and career perspectives",
              "Develop leadership and diplomacy skills"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 bg-white border-l-4 border-primary rounded-lg">
                <Plane size={20} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-bold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Classroom Collaboration */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Global Classroom Collaboration
                </h2>
              </div>

              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                AGCC students participate in live international online classes, global seminars and workshops, cross-border academic projects, and collaborative problem-solving activities. Students engage with peers and educators across time zones, creating a dynamic international learning environment.
              </p>

              <ul className="space-y-4">
                {[
                  "Live international online classes",
                  "Global seminars and workshops",
                  "Cross-border academic projects",
                  "Collaborative problem-solving"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-black text-xl">◆</span>
                    <span className="text-gray-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-primary/5 rounded-lg border-l-4 border-accent h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Smart Education & Global Technology</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC uses modern "Smart Education" systems to support global learning through AI-enhanced platforms, adaptive learning systems, virtual labs, interactive assessments, and real-time mentorship.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-enhanced learning platforms",
                  "Adaptive learning systems",
                  "Virtual labs and simulations",
                  "Interactive assessments",
                  "Real-time mentorship",
                  "Global collaborative projects"
                ].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <Brain size={16} className="text-accent" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Leadership & Other Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Leadership */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Global Leadership & Diplomacy
                </h2>
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC prepares students to become internationally minded leaders through cultural diplomacy programs, citizen diplomacy programs, public diplomacy learning experiences, global leadership summits, and international mentorship engagements.
              </p>

              <p className="text-gray-800 leading-relaxed">
                Students are encouraged to think globally, communicate effectively across cultures, and contribute positively to society.
              </p>
            </div>

            {/* Travel & Tours */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Travel Abroad & Educational Tours
                </h2>
              </div>

              <p className="text-gray-800 mb-6 leading-relaxed">
                Through AGCC's Global Network, students participate in university campus tours (USA, Canada, UK), global leadership conferences, Model United Nations programs, educational field trips, and international cultural exchange programs.
              </p>

              <ul className="space-y-2">
                {[
                  "Real-world global exposure",
                  "Leadership development",
                  "Cross-cultural understanding",
                  "Academic and career inspiration"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <Plane size={16} className="text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship, Community & Career */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Mentorship */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Global Mentorship & Career Exposure</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC's network connects students with educators, professionals, entrepreneurs, industry experts, and global mentors.
              </p>
              <ul className="space-y-3">
                {[
                  "Career guidance",
                  "International networking",
                  "Mentorship opportunities",
                  "Global industry exposure"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800 font-bold text-sm">
                    <span className="text-accent">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Community & Global Citizenship</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC promotes social responsibility, environmental awareness, cultural understanding, and community service.
              </p>
              <ul className="space-y-3">
                {[
                  "Social responsibility",
                  "Environmental awareness",
                  "Cultural understanding",
                  "Community service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800 font-bold text-sm">
                    <span className="text-accent">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Readiness */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Career Readiness Through Global Exposure</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC's programs emphasize remote work readiness, freelancing skills, entrepreneurship, and international communication.
              </p>
              <ul className="space-y-3">
                {[
                  "Remote work readiness",
                  "Freelancing skills",
                  "Entrepreneurship",
                  "Global communication"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800 font-bold text-sm">
                    <span className="text-accent">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Global Network Matters */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Why Our Global Network Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Early Global Exposure",
                description: "Gain international exposure early in academic career"
              },
              {
                title: "Multicultural Confidence",
                description: "Build confidence in diverse cultural environments"
              },
              {
                title: "Broader Opportunities",
                description: "Access wider academic and career opportunities"
              },
              {
                title: "Leadership Skills",
                description: "Develop leadership and diplomacy abilities"
              },
              {
                title: "Global Competitiveness",
                description: "Become globally competitive individuals"
              },
              {
                title: "Meaningful Relationships",
                description: "Build meaningful global connections and friendships"
              }
            ].map((reason, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border-l-4 border-accent">
                <h3 className="text-lg font-black uppercase text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Our Commitment to Global Citizenship
            </h2>

            <p className="text-lg text-white font-semibold leading-relaxed mb-8">
              At AGCC, global citizenship is more than a concept—it is part of our educational foundation. We are committed to helping students understand the world beyond borders, respect diverse cultures and perspectives, lead with empathy and responsibility, and build meaningful global relationships.
            </p>

            <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
              <p className="text-3xl font-black italic text-accent">
                "Building Bridges Between Nations Through Education and Innovation."
              </p>
            </div>

            <h3 className="text-3xl font-black uppercase mb-8 text-accent">
              Join the AGCC Global Network
            </h3>

            <p className="text-lg text-white font-semibold mb-12 leading-relaxed">
              Students and families interested in international education, study abroad opportunities, exchange programs, leadership development, and global career pathways are encouraged to contact AGCC for more information.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="mailto:info@agccollege.org" className="flex items-center justify-center gap-4 p-8 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Mail size={32} className="text-accent" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest font-black">Email</p>
                <p className="text-xl font-black">info@agccollege.org</p>
              </div>
            </a>

            <a href="tel:+16464440818" className="flex items-center justify-center gap-4 p-8 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              <Phone size={32} className="text-accent" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest font-black">Phone</p>
                <p className="text-xl font-black">+1 (646) 444-0818</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Get in Touch
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
