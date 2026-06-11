import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Classes() {
  const [activeTab, setActiveTab] = useState(0);

  const grades = [
    {
      title: "Grade 6",
      subtitle: "Grade 6 Courses",
      description: "Foundational skills in core subjects based on American academic standards.",
      fullDescription: "Grade 6 students at AGCC engage with a comprehensive curriculum designed to build strong foundational skills in all core subjects. Our American-based academic standard ensures students are well-prepared for advanced coursework and develop critical thinking abilities. Students explore English Literature, Mathematics, Science, Social Studies, Spanish, and Academic Writing through interactive lessons and collaborative activities.",
      courses: ["English Language Arts", "Informational Texts & Research", "Poetry & Drama", "Mathematics", "Science", "Social Studies", "Spanish", "Academic Writing"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 5 or equivalent"
    },
    {
      title: "Grade 7",
      subtitle: "Grade 7 Courses",
      description: "Specialized content with increased rigor and exploration of personal interests.",
      fullDescription: "Grade 7 students deepen their academic expertise with more specialized content and increased rigor. Students strengthen skills in English Literature, Mathematics, Science, and Social Studies while developing critical thinking abilities. Spanish language proficiency and global awareness are enhanced through cultural studies.",
      courses: ["English Language Arts", "Informational Texts & Research", "Poetry & Drama", "Mathematics", "Science", "Social Studies", "Spanish", "Academic Writing"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 6 or equivalent"
    },
    {
      title: "Grade 8",
      subtitle: "Grade 8 Courses",
      description: "Transition to high school level with increased independence and responsibility.",
      fullDescription: "Grade 8 marks the transition to high school-level academics. Students explore complex texts, master Algebra and Geometry, engage in scientific inquiry, and study global issues. Students select one elective per term from technology, business, music, robotics, graphic design, video editing, and more.",
      courses: ["English Language Arts", "Algebra I & Geometry", "Science (Chemistry, Physics, Biology)", "Social Studies", "Spanish", "Academic Writing", "One Elective per Term"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 7 or equivalent"
    },
    {
      title: "Grade 9",
      subtitle: "Grade 9 Courses",
      description: "Freshman year establishing foundation for high school success with core academics.",
      fullDescription: "Grade 9 (Freshman) year establishes the foundation for high school success. Students analyze complex literature, master Algebra II and Geometry, engage in advanced scientific research, and explore global history. Multiple mathematics and science pathways available with emphasis on critical thinking and real-world applications.",
      courses: ["English Literature & Analysis", "Algebra II, Geometry, or Statistics", "Advanced Science (Biology, Chemistry, Physics)", "Social Studies", "Spanish", "Academic Writing", "One Elective per Term"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 8 or equivalent"
    },
    {
      title: "Grade 10",
      subtitle: "Grade 10 Courses",
      description: "Sophomore year with advanced courses and expanded elective options.",
      fullDescription: "Grade 10 (Sophomore) year offers greater flexibility with multiple course options in each core subject area. Students choose from Algebra II, Geometry, Statistics, Pre-Calculus, and various science tracks. English options include World Literature, American Literature, and Creative Writing. Students select from 8 different electives per term.",
      courses: ["English (5 options)", "Mathematics (4 options)", "Science (3 options)", "Social Studies (4 options)", "Spanish or French", "One Elective per Term (8 choices)"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 9 or equivalent"
    },
    {
      title: "Grade 11",
      subtitle: "Grade 11 Courses",
      description: "Junior year with advanced courses emphasizing college preparation.",
      fullDescription: "Grade 11 (Junior) year emphasizes college preparation with multiple advanced course options. Students deepen expertise in core subjects with choices in English (5 options), Mathematics (4 options), Science (3 options), and Social Studies (4 options). Spanish and French language courses available. Eight elective options support specialized interests in technology, business, music, engineering, and more.",
      courses: ["English (5 options)", "Mathematics (4 options)", "Science (3 options)", "Social Studies (4 options)", "Spanish or French", "One Elective per Term (8 choices)"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 10 or equivalent"
    },
    {
      title: "Grade 12",
      subtitle: "Grade 12 Courses",
      description: "Senior year designed to prepare students for post-secondary success.",
      fullDescription: "Grade 12 (Senior) year prepares students for post-secondary success with comprehensive course options and practical applications. Students complete their American Credit Certificate while choosing from multiple courses in each core subject. Expanded electives support career readiness, higher education preparation, and specialized expertise development.",
      courses: ["English (5 options)", "Mathematics (4 options)", "Science (3 options)", "Social Studies (4 options)", "Spanish or French", "One Elective per Term (8 choices)"],
      schedule: "12 months / 3 semesters, 9 a.m - 1 p.m daily (weekdays)",
      requirements: "Completion of Grade 11 or equivalent"
    },
    {
      title: "After School",
      subtitle: "After School Classes",
      description: "Additional support, enrichment activities, and specialized skill development.",
      fullDescription: "Our after-school programs provide additional academic support, enrichment activities, and specialized skill development. These programs complement regular coursework and support student success.",
      courses: ["Math Tutoring & Remediation", "Writing Center", "Science Lab Extensions", "Debate & Speaking Club", "Coding & Robotics", "Leadership Development", "Test Preparation"],
      schedule: "Monday - Friday: 3:30 PM - 5:30 PM",
      requirements: "Enrollment in AGCC or prior approval"
    },
    {
      title: "Vocational",
      subtitle: "Vocational Studies",
      description: "Industry-relevant skills preparing students for career entry or further education.",
      fullDescription: "Our vocational studies program focuses on practical, industry-relevant skills that prepare students for immediate career entry or further technical education. Programs are designed with input from industry professionals.",
      courses: ["Digital Marketing & Social Media", "Web Development & Coding", "Graphic Design & Adobe Suite", "Business Administration", "Advanced Excel & Data Analysis", "Cybersecurity Fundamentals", "Project Management"],
      schedule: "Flexible: Full-time or part-time",
      requirements: "High school diploma or equivalent recommended"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Academic Programs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Our Classes & Programs
          </h1>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            Comprehensive pathways from Grade 6 through advanced vocational studies. All designed to American standards and delivered globally.
          </p>
        </div>
      </section>

      {/* Tab Navigation & Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-2 pb-4 min-w-max md:flex-wrap md:pb-0">
              {grades.map((grade, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 font-black uppercase text-sm tracking-wide whitespace-nowrap transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-primary text-white shadow-lg relative"
                      : "bg-gray-100 text-primary hover:bg-gray-200 relative"
                  }`}
                >
                  {grade.title}
                  {activeTab === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div
              className="relative h-96 overflow-hidden bg-gray-200"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F1664ad50ee6a48658eaee47617641276)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10"></div>
              <BookOpen size={120} className="absolute inset-0 m-auto text-gray-300 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/80 to-primary/60">
                <div className="text-center text-white">
                  <BookOpen size={64} className="mx-auto mb-4" />
                  <p className="font-black uppercase text-2xl">{grades[activeTab].title}</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-primary mb-4 leading-tight">
                {grades[activeTab].subtitle}
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed font-normal">
                {grades[activeTab].fullDescription}
              </p>

              {/* Course List */}
              <div className="mb-8">
                <h3 className="font-black uppercase text-primary text-sm tracking-widest mb-4">
                  Key Courses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {grades[activeTab].courses.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1 h-6 bg-accent flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule & Requirements */}
              <div className="border-l-4 border-accent pl-6 mb-8">
                <div className="mb-4">
                  <p className="font-black uppercase text-primary text-xs tracking-widest mb-1">Schedule</p>
                  <p className="text-gray-700">{grades[activeTab].schedule}</p>
                </div>
                <div>
                  <p className="font-black uppercase text-primary text-xs tracking-widest mb-1">Requirements</p>
                  <p className="text-gray-700">{grades[activeTab].requirements}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/apply"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:info@agccollege.org"
                  className="inline-flex items-center gap-3 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Email to Enroll
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Cards */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest text-primary">Academic Structure</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-12 leading-tight max-w-3xl">
            Complete Academic Pathway
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Middle School",
                subtitle: "Grades 6-8",
                desc: "Foundation building with comprehensive core curriculum and introduction to specialized subjects"
              },
              {
                title: "High School",
                subtitle: "Grades 9-12",
                desc: "Advanced academics with AP and honors options, college preparation, and career exploration"
              },
              {
                title: "Career Development",
                subtitle: "Vocational & After School",
                desc: "Specialized skills training, enrichment programs, and industry-focused certification courses"
              }
            ].map((section, idx) => (
              <div key={idx} className="border border-gray-200 p-8 bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-black uppercase text-accent tracking-widest mb-2">
                  {section.subtitle}
                </h3>
                <h4 className="text-2xl font-black uppercase text-primary mb-4">
                  {section.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview & Core Subjects */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-accent"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
                Curriculum Overview
              </h2>
            </div>

            <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-3xl">
              AGCC offers a complete academic pathway from Grade 6 through Grade 12, plus after-school support and vocational studies. All programs are based on the American academic syllabus and designed to prepare students for college, careers, and global citizenship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What You Will Learn */}
              <div className="bg-white p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-black uppercase text-primary mb-6">What You Will Learn</h3>
                <ul className="space-y-3">
                  {[
                    "American-standard academic curriculum aligned with global best practices",
                    "Critical thinking and problem-solving skills",
                    "Digital literacy and technology integration",
                    "Leadership and communication abilities",
                    "Career readiness and practical skill development",
                    "Global citizenship and cultural awareness",
                    "Personalized learning pathways based on individual goals"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Subjects */}
              <div className="bg-white p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-black uppercase text-primary mb-6">Core Subjects</h3>
                <ul className="space-y-3">
                  {[
                    "Mathematics (Algebra, Geometry, Pre-Calculus, Calculus)",
                    "English Language Arts & Literature",
                    "Sciences (Biology, Chemistry, Physics, Environmental)",
                    "Social Studies & History",
                    "Foreign Languages (Spanish, French, German, Italian, Dutch)",
                    "Technology & Computer Science",
                    "Arts, Music, and Physical Education"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-accent"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
                All Course Offerings
              </h2>
            </div>

            <p className="text-lg text-gray-800 mb-12 leading-relaxed">
              AGCC offers <strong>9 comprehensive course categories</strong> serving students from diverse backgrounds and educational goals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: 1, title: "Grade 6 Courses", desc: "Required foundational courses based on the American academic syllabus" },
                { num: 2, title: "Grade 7 Courses", desc: "Required courses with increased depth based on the American academic syllabus" },
                { num: 3, title: "Grade 8 Courses", desc: "Required courses preparing for high school transition" },
                { num: 4, title: "Grade 9 Courses", desc: "Freshman year courses establishing college prep foundation" },
                { num: 5, title: "Grade 10 Courses", desc: "Sophomore year with advanced and elective options" },
                { num: 6, title: "Grade 11 Courses", desc: "Junior year with AP and honors course options" },
                { num: 7, title: "Grade 12 Courses", desc: "Senior year with capstone projects and college readiness" },
                { num: 8, title: "After School Classes", desc: "Additional courses available to support student success" },
                { num: 9, title: "Vocational Studies", desc: "Programs to equip individuals with high-demand vocational skills" }
              ].map((course, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border-t-4 border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-black">
                      {course.num}
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-primary mb-2">{course.title}</h4>
                      <p className="text-gray-700 text-sm">{course.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Get Started Right Away
            </h2>
          </div>

          <div className="max-w-3xl mb-12">
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Ready to begin your educational journey at AGCC? Here are two ways to enroll in your chosen program or course:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Online Form */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <ArrowRight size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Option 1: Enroll Online</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Complete our online enrollment form to apply for any AGCC program or course. Fill out your information, select your program of interest, and submit.
              </p>
              <Link
                to="/apply"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 font-black uppercase text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Complete Enrollment Form
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Option 2: Email */}
            <div className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 rounded-lg">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Option 2: Text Enrollment</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Email us with the name of the program or course you're interested in. Our admissions team will respond within 24 hours with enrollment details and next steps.
              </p>
              <a
                href="mailto:info@agccollege.org?subject=Enrollment%20Inquiry"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 font-black uppercase text-sm tracking-wide hover:bg-accent/90 transition-all duration-300"
              >
                Email info@agccollege.org
                <Mail size={18} />
              </a>
              <p className="text-xs text-gray-600 mt-4 italic">
                Include: Your name, preferred program/course name, and contact information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary mb-4 leading-tight tracking-tighter">
              Find Your Perfect Program
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white font-black mb-12 max-w-2xl mx-auto">
            From foundational middle school courses to advanced vocational training, we have a program tailored to your goals and aspirations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Enroll Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-300"
            >
              Ask Questions
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-accent text-accent px-10 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
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
