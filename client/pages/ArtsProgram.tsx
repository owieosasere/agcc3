import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, Drama, Music, Video, PenTool, Globe, Sparkles, Award, Users, Mic2, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CreativeArea {
  title: string;
  icon: React.ReactNode;
  description: string;
  activities: string[];
  skillsDeveloped?: string[];
}

const creativeAreas: CreativeArea[] = [
  {
    title: "Visual Arts & Design",
    icon: <Palette size={32} />,
    description: "Students explore various visual art forms and develop modern design skills.",
    activities: [
      "Drawing and sketching",
      "Painting and mixed media",
      "Graphic design fundamentals",
      "Creative illustration",
      "Cultural and heritage-inspired art",
      "Digital art and creative technology"
    ],
    skillsDeveloped: [
      "Creativity and imagination",
      "Visual storytelling",
      "Design thinking",
      "Artistic confidence"
    ]
  },
  {
    title: "Drama, Theatre & Performance Arts",
    icon: <Drama size={32} />,
    description: "Develop confidence, expression, and storytelling through performance.",
    activities: [
      "Acting and performance skills",
      "Public confidence and expression",
      "Storytelling and stage communication",
      "Creative collaboration and teamwork",
      "Virtual stage productions",
      "Spoken word performances"
    ]
  },
  {
    title: "Music & Creative Sound",
    icon: <Music size={32} />,
    description: "Celebrate music as a universal language connecting cultures globally.",
    activities: [
      "Vocal performance",
      "Music appreciation and theory",
      "Songwriting and lyrical creativity",
      "Cultural music exploration",
      "Digital music production introduction"
    ]
  },
  {
    title: "Digital Media & Creative Technology",
    icon: <Video size={32} />,
    description: "Gain exposure to modern creative industries and career-relevant skills.",
    activities: [
      "Video creation and editing",
      "Photography and visual storytelling",
      "Social media content creation",
      "Podcasting and digital broadcasting",
      "Creative branding and media production"
    ],
    skillsDeveloped: [
      "Digital literacy development",
      "Career-relevant media skills",
      "Creative entrepreneurship exposure"
    ]
  },
  {
    title: "Creative Writing & Storytelling",
    icon: <PenTool size={32} />,
    description: "Develop imagination, communication, and powerful self-expression.",
    activities: [
      "Poetry and spoken word",
      "Fiction and nonfiction writing",
      "Scriptwriting and storytelling",
      "Blogging and digital publishing",
      "Cultural storytelling traditions"
    ]
  },
  {
    title: "Cultural Arts & Heritage Studies",
    icon: <Globe size={32} />,
    description: "Promote global cultural understanding through arts appreciation.",
    activities: [
      "African, American, European, and global art appreciation",
      "Traditional and modern cultural arts",
      "Heritage storytelling and preservation",
      "International creative exchange projects",
      "Deeper appreciation for global diversity"
    ]
  },
  {
    title: "Fashion, Style & Creative Branding",
    icon: <Sparkles size={32} />,
    description: "Explore fashion, design, and personal branding concepts.",
    activities: [
      "Fashion illustration",
      "Creative styling concepts",
      "Personal branding",
      "Cultural fashion influences",
      "Fashion entrepreneurship basics"
    ]
  },
  {
    title: "Public Expression & Creative Leadership",
    icon: <Mic2 size={32} />,
    description: "Use creativity for advocacy and develop confident communication.",
    activities: [
      "Use creativity for advocacy and leadership",
      "Communicate confidently through artistic platforms",
      "Organize and lead creative projects",
      "Develop presentation and performance confidence"
    ]
  }
];

const careerPathways = [
  "Graphic design",
  "Media and content creation",
  "Music and entertainment",
  "Creative entrepreneurship",
  "Fashion and branding",
  "Writing and publishing",
  "Performing arts",
  "Digital production and storytelling"
];

export default function ArtsProgram() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Creative Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Arts & Creative Expression Program
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Creativity Without Borders
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGCC, the arts are a powerful tool for education, communication, innovation, and global connection. Our program helps students discover creative talents while building confidence, cultural awareness, and professional opportunities.
          </p>
        </div>
      </section>

      {/* Director's Welcome */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F35486a1f3d0a4e4f9aa2ca990b4d2f50?format=webp&width=800&height=1200"
                  alt="Jerry Owie, Director of Arts Departments"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Welcome Message */}
            <div className="order-1 lg:order-2">
              <div className="bg-white border-l-4 border-accent p-8 md:p-12 rounded-lg shadow-md h-full">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-1 h-12 bg-accent"></div>
                  <div>
                    <h3 className="text-2xl font-black uppercase text-primary mb-2">Welcome to AGCC Arts</h3>
                    <p className="text-accent font-black text-sm">A Message from Jerry Owie, Director of Arts Departments</p>
                  </div>
                </div>

                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  At America Global Citizen College, we believe the arts are a powerful tool for education, communication, innovation, and global connection. Our Arts & Creative Expression Program is designed to help students discover and develop their creative talents while building confidence, cultural awareness, leadership skills, and professional opportunities in the creative industries.
                </p>

                <p className="text-lg text-gray-800 leading-relaxed">
                  The program provides students with a dynamic platform to explore creativity through visual arts, digital media, performance, storytelling, music, design, cultural arts, and global creative collaboration. AGCC's arts education combines creative freedom, global exposure, cultural appreciation, and modern digital skills, preparing students to thrive in today's rapidly evolving creative economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Vision & Mission */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <div className="p-8 border-l-4 border-accent bg-primary/5">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Program Vision</h3>
              <p className="text-gray-800 leading-relaxed">
                To nurture a new generation of creative thinkers, artists, storytellers, performers, and innovators who use creativity to inspire communities, promote cultural understanding, and impact the world positively.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 border-l-4 border-accent bg-accent/5">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Program Mission</h3>
              <ul className="space-y-3">
                {[
                  "Encourage artistic expression and creativity",
                  "Develop practical and digital creative skills",
                  "Promote cultural appreciation through the arts",
                  "Build confidence, communication, and leadership",
                  "Expose students to global creative opportunities"
                ].map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="text-accent font-black mt-1 text-lg">✓</span>
                    <span className="font-bold">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What the Program Offers */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 text-center">
              What the Arts Program Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Discover and develop creative talents",
                "Participate in international creative collaborations",
                "Learn modern digital creative tools",
                "Explore cultural and global artistic traditions",
                "Build portfolios for academic and career opportunities",
                "Showcase talents in global virtual events and exhibitions"
              ].map((offer, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded border-l-4 border-accent">
                  <ArrowRight size={20} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold uppercase tracking-wide text-sm">{offer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Areas */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Creative Areas of Study
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse creative disciplines designed to develop talents and build professional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeAreas.map((area, idx) => (
              <div key={idx} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-accent/20 overflow-hidden flex flex-col h-full">
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {area.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black uppercase text-primary mb-4">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Activities */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Activities:</h4>
                    <ul className="space-y-2">
                      {area.activities.slice(0, 2).map((activity, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                      {area.activities.length > 2 && (
                        <li className="text-xs text-primary font-bold pt-1">
                          +{area.activities.length - 2} more
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

      {/* Global Collaboration & Travel */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Global Collaboration */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Global Creative Collaboration
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                As an international online college, AGCC offers students unique opportunities to collaborate with peers from different countries and build global creative networks.
              </p>
              <ul className="space-y-4">
                {[
                  "Collaborate with peers from different countries",
                  "Participate in global virtual showcases",
                  "Exchange artistic ideas across cultures",
                  "Build international creative networks and friendships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-black text-xl">✓</span>
                    <span className="text-gray-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Arts & Travel Learning */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Arts, Culture & Travel Learning
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                AGCC integrates the arts into international travel learning experiences, providing real-world exposure to global creative industries and traditions.
              </p>
              <ul className="space-y-4">
                {[
                  "Cultural arts tours",
                  "Heritage and museum visits",
                  "International art and cultural festivals",
                  "Creative leadership workshops"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-black text-xl">✓</span>
                    <span className="text-gray-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcases & Competitions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-16 text-center">
            Student Showcases & Competitions
          </h2>

          <p className="text-lg text-gray-800 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
            Students may participate in virtual exhibitions, talent showcases, and international creative competitions to build confidence and showcase their talents globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Palette size={28} />, title: "Virtual Art Exhibitions" },
              { icon: <Award size={28} />, title: "Talent Showcases" },
              { icon: <Globe size={28} />, title: "International Competitions" },
              { icon: <PenTool size={28} />, title: "Spoken Word & Poetry Events" },
              { icon: <Music size={28} />, title: "Music & Performance Presentations" },
              { icon: <Video size={28} />, title: "Creative Media Showcases" }
            ].map((showcase, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border-2 border-gray-100 text-center hover:border-accent transition-all duration-300">
                <div className="flex justify-center mb-4 text-primary group-hover:text-accent">
                  {showcase.icon}
                </div>
                <h3 className="font-black uppercase text-primary text-lg">{showcase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Career Pathways */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Program Benefits
              </h2>
              <div className="space-y-4">
                {[
                  "Creativity and innovation skills",
                  "Improved communication and confidence",
                  "Cultural awareness and appreciation",
                  "Leadership and teamwork abilities",
                  "Portfolio-building opportunities",
                  "Exposure to creative career pathways"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded border-l-4 border-accent">
                    <ArrowRight size={18} className="text-accent flex-shrink-0 mt-1" />
                    <p className="text-gray-800 font-bold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Pathways */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Career Pathways in the Arts
              </h2>
              <p className="text-gray-800 mb-8 leading-relaxed">
                The program introduces students to exciting opportunities in creative industries worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {careerPathways.map((career, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded border-l-4 border-primary">
                    <Sparkles size={18} className="text-accent flex-shrink-0" />
                    <p className="text-gray-800 font-bold text-sm">{career}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Involvement & Enrollment */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Parent Involvement */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Parent Involvement
              </h2>
              <p className="text-gray-800 mb-8 leading-relaxed">
                Parents are encouraged to support and participate in their children's creative development through various engagement opportunities.
              </p>
              <ul className="space-y-4">
                {[
                  "Virtual showcases",
                  "Creative projects",
                  "Student exhibitions and events",
                  "Family engagement activities"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                    <Users size={18} className="text-accent flex-shrink-0" />
                    <p className="text-gray-800 font-bold">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enrollment Information */}
            <div className="bg-accent/10 border-4 border-accent p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8">
                Enrollment Information
              </h2>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Some arts program activities and classes are currently open for enrollment. Parents and students are encouraged to contact AGCC with their:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Creative interests",
                  "Preferred learning areas",
                  "Academic and artistic goals"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 italic">
                Our team will provide detailed information regarding program options, class schedules, participation guidelines, and enrollment procedures.
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
              A Creative Community Without Borders
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white font-black leading-relaxed">
            At AGCC, the arts are more than extracurricular activities—they are a pathway to confidence, innovation, global connection, self-expression, and leadership. We are committed to helping students discover their voice, express their creativity, and impact the world through the power of the arts.
          </p>

          <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
            <p className="text-3xl font-black italic text-accent mb-4">
              "Creativity Inspires. Expression Connects. Art Transforms."
            </p>
          </div>

          <p className="text-2xl font-black uppercase mb-12 text-accent">
            Discover Your Creative Voice
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Get Involved
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
