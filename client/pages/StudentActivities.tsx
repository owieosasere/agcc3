import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Mic2, Code2, Wrench, Leaf, Heart, BookOpen, Languages, TrendingUp, Dumbbell, Handshake, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Club {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  focuses: string[];
  activities: string[];
}

const clubs: Club[] = [
  {
    title: "Global Citizens Club",
    tagline: "Connecting Cultures. Inspiring Global Understanding.",
    icon: <Globe size={32} />,
    description: "The Global Citizens Club promotes cross-cultural understanding, international collaboration, and global awareness through engaging diplomatic activities.",
    focuses: [
      "Cross-cultural understanding",
      "International collaboration",
      "Global awareness and diplomacy"
    ],
    activities: [
      "International discussions",
      "Cultural exchange activities",
      "Global issue debates",
      "Virtual international meetups",
      "Model diplomacy exercises"
    ]
  },
  {
    title: "Leadership & Public Speaking Club",
    tagline: "Developing the Leaders of Tomorrow.",
    icon: <Mic2 size={32} />,
    description: "This club helps students strengthen leadership confidence, communication skills, public speaking abilities, and critical thinking.",
    focuses: [
      "Leadership confidence",
      "Communication skills",
      "Public speaking and presentation abilities",
      "Debate and critical thinking skills"
    ],
    activities: [
      "Leadership workshops",
      "Speech competitions",
      "Debate forums",
      "Student-led conferences",
      "Advocacy campaigns"
    ]
  },
  {
    title: "Technology & Innovation Club",
    tagline: "Preparing Students for the Future of Technology.",
    icon: <Code2 size={32} />,
    description: "Students explore digital literacy, coding fundamentals, artificial intelligence, and web development in this forward-thinking club.",
    focuses: [
      "Digital literacy",
      "Coding fundamentals",
      "Artificial intelligence awareness",
      "Web and app development",
      "Tech entrepreneurship"
    ],
    activities: [
      "Tech projects",
      "Innovation challenges",
      "Digital skills workshops",
      "Robotics and automation exposure"
    ]
  },
  {
    title: "Skilled Trades & Engineering Club",
    tagline: "Hands-On Learning for Real-World Skills.",
    icon: <Wrench size={32} />,
    description: "Introducing students to practical and technical career pathways through hands-on learning experiences.",
    focuses: [
      "Plumbing systems",
      "Smart home technologies",
      "Construction fundamentals",
      "Automobile technology",
      "Engineering concepts"
    ],
    activities: [
      "Hands-on projects",
      "Technical demonstrations",
      "Career pathway exploration",
      "Industry partnerships"
    ]
  },
  {
    title: "Green Earth & Sustainability Club",
    tagline: "Creating Cleaner and Healthier Communities.",
    icon: <Leaf size={32} />,
    description: "Focused on environmental responsibility, students engage in meaningful sustainability initiatives and community environmental projects.",
    focuses: [
      "Sustainability awareness campaigns",
      "Recycling and clean-up projects",
      "Climate education",
      "Smart agriculture discussions",
      "Community environmental initiatives"
    ],
    activities: [
      "Environmental awareness campaigns",
      "Community clean-up projects",
      "Sustainability workshops",
      "Climate action initiatives"
    ]
  },
  {
    title: "Health & Wellness Club",
    tagline: "Promoting Healthy Living & Community Care.",
    icon: <Heart size={32} />,
    description: "Students learn about mental health awareness, community health outreach, nutrition, wellness, and volunteer healthcare activities.",
    focuses: [
      "Mental health awareness",
      "Community health outreach",
      "Nutrition and wellness",
      "Elder care support",
      "Healthy lifestyle practices"
    ],
    activities: [
      "Health workshops",
      "Community outreach programs",
      "Wellness initiatives",
      "Volunteer healthcare activities"
    ]
  },
  {
    title: "Literature, Arts & Creative Writing Club",
    tagline: "Inspiring Creativity and Expression.",
    icon: <BookOpen size={32} />,
    description: "Students explore creative writing, poetry, digital media creation, drama, and visual arts through collaborative creative projects.",
    focuses: [
      "Creative writing",
      "Poetry and storytelling",
      "Digital media creation",
      "Drama and performance arts",
      "Graphic design and visual arts"
    ],
    activities: [
      "Writing competitions",
      "Student publications",
      "Online exhibitions",
      "Creative showcases",
      "Performance events"
    ]
  },
  {
    title: "Language & Cultural Exchange Club",
    tagline: "Learning Languages. Connecting Worlds.",
    icon: <Languages size={32} />,
    description: "Students practice and explore multiple languages while appreciating diverse cultures through immersive exchange activities.",
    focuses: [
      "Spanish",
      "French",
      "German",
      "Italian",
      "Dutch",
      "Edo Language"
    ],
    activities: [
      "Language immersion activities",
      "Cultural appreciation programs",
      "International communication practice",
      "Virtual language exchanges"
    ]
  },
  {
    title: "Entrepreneurship & Business Club",
    tagline: "Turning Ideas into Opportunities.",
    icon: <TrendingUp size={32} />,
    description: "Students develop business thinking, financial literacy, and startup development skills through practical entrepreneurial experiences.",
    focuses: [
      "Business thinking",
      "Financial literacy",
      "Startup development skills",
      "Marketing and branding knowledge"
    ],
    activities: [
      "Business simulations",
      "Startup pitch competitions",
      "Financial workshops",
      "Entrepreneur mentorship sessions"
    ]
  },
  {
    title: "Virtual Sports & Fitness Activities",
    tagline: "Encouraging Health, Balance & Team Spirit.",
    icon: <Dumbbell size={32} />,
    description: "AGCC promotes healthy lifestyles through online fitness challenges, wellness programs, and team-building activities.",
    focuses: [
      "Online fitness challenges",
      "Wellness programs",
      "Team-building activities",
      "Sports education discussions"
    ],
    activities: [
      "Virtual fitness challenges",
      "Team sports activities",
      "Wellness seminars",
      "Fitness tracking programs"
    ]
  },
  {
    title: "Volunteerism & Community Service Program",
    tagline: "Serving Communities. Transforming Lives.",
    icon: <Handshake size={32} />,
    description: "Students develop compassion and leadership while making a real impact through meaningful community service initiatives.",
    focuses: [
      "Elder support initiatives",
      "Youth mentorship programs",
      "Environmental clean-up campaigns",
      "Educational outreach projects",
      "Humanitarian support activities"
    ],
    activities: [
      "Community service projects",
      "Mentorship programs",
      "Environmental initiatives",
      "Educational outreach"
    ]
  },
  {
    title: "Travel Learning & International Leadership",
    tagline: "Education Beyond Borders",
    icon: <Plane size={32} />,
    description: "AGCC's experiential learning programs allow students to engage globally and develop international leadership skills.",
    focuses: [
      "Cultural diplomacy tours",
      "Leadership development trips",
      "Visits to global institutions",
      "International mentorship experiences",
      "Cultural heritage exploration"
    ],
    activities: [
      "Educational travel programs",
      "Leadership development expeditions",
      "Global institution visits",
      "Cultural immersion experiences"
    ]
  }
];

export default function StudentActivities() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Student Life</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Clubs & Student Activities
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Building Leaders Beyond the Classroom
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGCC, education goes beyond academics. Through diverse clubs, organizations, and global engagement programs, students become confident leaders, creative thinkers, effective communicators, and globally minded citizens.
          </p>
        </div>
      </section>

      {/* Why Student Activities Matter */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
              Why Student Activities Matter
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Student engagement plays a critical role in personal development. Our clubs and activities help students develop essential skills, build confidence, discover their passions, and connect with peers from around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Develop leadership and teamwork skills",
                "Improve communication and public speaking abilities",
                "Build confidence and self-expression",
                "Discover talents and passions",
                "Connect with students from different cultures",
                "Gain real-world and career-relevant experiences"
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

      {/* Our Clubs & Organizations */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-6">
              Our Clubs & Organizations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of student-led clubs and organizations designed to foster growth, creativity, and global citizenship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <div key={idx} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-accent/20 overflow-hidden">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {club.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black uppercase text-primary mb-2">
                    {club.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-accent font-black italic mb-4 text-sm">
                    "{club.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {club.description}
                  </p>

                  {/* Focuses */}
                  <div className="mb-6">
                    <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Key Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {club.focuses.slice(0, 3).map((focus, i) => (
                        <span key={i} className="inline-block bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded">
                          {focus}
                        </span>
                      ))}
                      {club.focuses.length > 3 && (
                        <span className="inline-block bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded">
                          +{club.focuses.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-black uppercase text-gray-600 mb-3 tracking-widest">Activities:</h4>
                    <ul className="space-y-2">
                      {club.activities.slice(0, 2).map((activity, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-accent font-bold mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                      {club.activities.length > 2 && (
                        <li className="text-xs text-primary font-bold">
                          +{club.activities.length - 2} more activities
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

      {/* Benefits Section */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Benefits of Student Activities at AGCC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership & Teamwork",
                description: "Develop practical skills in team coordination and organizational leadership."
              },
              {
                title: "University Applications",
                description: "Strengthen university applications with demonstrated extracurricular excellence."
              },
              {
                title: "Communication Skills",
                description: "Improve public speaking, writing, and interpersonal communication abilities."
              },
              {
                title: "Confidence & Creativity",
                description: "Build self-confidence and discover creative talents and capabilities."
              },
              {
                title: "Global Networking",
                description: "Connect with peers from different cultures and countries around the world."
              },
              {
                title: "Career Readiness",
                description: "Gain practical exposure to career paths and real-world professional skills."
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

      {/* Student Leadership Opportunities */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 text-center">
              Student Leadership Opportunities
            </h2>

            <p className="text-lg text-gray-800 mb-12 leading-relaxed">
              AGCC students can serve in leadership roles that build responsibility, professionalism, and confidence. These positions help students develop skills that will serve them throughout their academic and professional careers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Club Presidents",
                "Student Ambassadors",
                "Peer Mentors",
                "Youth Advocates",
                "Event Coordinators",
                "Committee Leaders"
              ].map((role, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <p className="text-primary font-black uppercase tracking-wide">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Virtual & Global Engagement */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8">
              Virtual & Global Engagement
            </h2>

            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Because AGCC is a global online institution, many activities are designed to allow students from different countries to collaborate virtually and meaningfully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Interactive online sessions",
                "International projects",
                "Digital competitions",
                "Cross-cultural networking events"
              ].map((activity, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg border-2 border-accent/20">
                  <p className="text-primary font-black uppercase tracking-wide text-sm">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary leading-tight tracking-tighter">
              A Community Beyond Academics
            </h2>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white font-black leading-relaxed">
            At AGCC, students are not just learners—they are innovators, leaders, creators, and changemakers. Our clubs and activities are carefully designed to create a vibrant student life experience that supports academic growth, personal development, career preparation, and global citizenship.
          </p>

          <div className="bg-accent/15 border-2 border-accent p-12 rounded-lg mb-12 shadow-md">
            <p className="text-3xl font-black italic text-accent mb-4">
              "Learn Globally. Lead Confidently. Impact the World."
            </p>
          </div>

          <p className="text-2xl font-black uppercase mb-12 text-accent">
            Join the AGCC Student Community
          </p>

          <p className="text-lg text-white font-semibold mb-12 leading-relaxed">
            Discover your passions, connect with students worldwide, and develop the skills needed to succeed in today's global world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
            >
              Get Involved Today
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
