import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, DollarSign, CreditCard, Star, Package, Users, Plane, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function TuitionAid() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">Financial Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Tuition & Financial Aid
          </h1>
          <p className="text-2xl font-black uppercase mb-6 tracking-wide text-accent">
            Flexible, Affordable, and Student-Centered Global Education
          </p>
          <p className="text-lg text-white font-semibold max-w-2xl leading-relaxed">
            At AGCC, we understand that every student has unique academic goals, schedules, learning needs, and financial circumstances. That's why AGCC operates a flexible tuition and learning system designed to make quality international education accessible and adaptable for students and families around the world.
          </p>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 text-center">
              Our Commitment to Affordability
            </h2>
            <p className="text-lg text-gray-800 mb-12 leading-relaxed text-center">
              Our mission is to provide affordable global education, flexible learning opportunities, personalized academic pathways, student-centered tuition support, and career-focused and globally competitive programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Affordable global education",
                "Flexible learning opportunities",
                "Personalized academic pathways",
                "Student-centered tuition support",
                "Career-focused programs",
                "Globally competitive education"
              ].map((mission, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-accent">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-bold uppercase tracking-wide text-sm">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Tuition System */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Flexible Tuition System
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Unlike traditional schools with rigid fee structures, AGCC uses a flexible tuition model that considers your individual needs and circumstances.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Student learning needs",
                  "Program selection",
                  "Academic level",
                  "Customized class structure",
                  "Learning schedules and time availability",
                  "Additional academic support requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <DollarSign size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 italic text-sm">
                This allows AGCC to create a learning experience that fits the individual student while maintaining affordability and quality.
              </p>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 p-12 rounded-lg">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">How We Customize Tuition</h3>
              <p className="text-gray-800 mb-8 leading-relaxed">
                Your tuition is tailored to match your specific educational needs, learning style, and financial situation—not a one-size-fits-all approach.
              </p>
              <div className="space-y-3">
                {[
                  "Individual assessment process",
                  "Personalized learning plans",
                  "Flexible payment structures",
                  "Available discounts & support"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Assessment Process */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Tuition Assessment Process
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            At AGCC, tuition is usually determined after an academic and enrollment assessment has been completed. This personalized approach ensures students receive the most suitable educational plan for their needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Evaluate */}
            <div>
              <h3 className="text-2xl font-black uppercase text-primary mb-8">Our Assessment Evaluates:</h3>
              <ul className="space-y-4">
                {[
                  "The student's educational goals",
                  "Preferred academic pathway",
                  "Program interest",
                  "Customized scheduling needs",
                  "Required academic support services",
                  "Flexible learning arrangements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <GraduationCap size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            {/* What You Receive */}
            <div>
              <h3 className="text-2xl font-black uppercase text-primary mb-8">You'll Receive:</h3>
              <ul className="space-y-4">
                {[
                  "Detailed tuition structure information",
                  "Flexible payment options",
                  "Program schedules",
                  "Learning support recommendations",
                  "Available discounts (where applicable)",
                  "Personalized enrollment guidance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <CreditCard size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Payment & Learning */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-12 rounded-lg border-l-4 border-accent">
                <h3 className="text-2xl font-black uppercase text-primary mb-8">Our Flexible Learning Model</h3>
                <p className="text-gray-800 mb-8 leading-relaxed">
                  AGCC recognizes that students and families have different schedules and responsibilities. Our programs are designed to fit your lifestyle:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Different time zones",
                    "Family schedules",
                    "Working students",
                    "Adult learners",
                    "Homeschooling support needs",
                    "International learners"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Flexible Payment & Learning Options
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Our flexible learning structure allows students to balance:
              </p>

              <ul className="space-y-4">
                {[
                  "Education",
                  "Family commitments",
                  "Career development",
                  "Extracurricular activities",
                  "Personal growth opportunities"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
                    <ArrowRight size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold uppercase tracking-wide text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts & Scholarships */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Discounts */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Discounts & Tuition Support
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                Tuition discounts and financial considerations may be available depending on:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Student needs",
                  "Program structure",
                  "Family circumstances",
                  "Enrollment category",
                  "Academic requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800 font-bold">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 italic text-sm border-t border-gray-300 pt-6">
                Because AGCC operates a flexible and customized education system, tuition and discounts vary based on individual student assessments and learning plans. Contact us for personalized guidance.
              </p>
            </div>

            {/* Scholarships */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Scholarship Opportunities
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                AGCC periodically offers scholarships for deserving students enrolled in selected programs.
              </p>

              <div className="bg-white p-8 rounded-lg mb-8 border-l-4 border-primary">
                <h4 className="font-black uppercase text-primary mb-4">Scholarships May Consider:</h4>
                <ul className="space-y-2">
                  {[
                    "Academic excellence",
                    "Leadership potential",
                    "Financial need",
                    "Special talent and achievement"
                  ].map((criterion, idx) => (
                    <li key={idx} className="text-gray-800 font-bold flex items-start gap-2">
                      <Star size={16} className="text-accent mt-1" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 text-sm italic">
                Scholarship opportunities are not always available year-round and may depend on enrollment season, program availability, funding opportunities, and student eligibility. Applicants will be informed about available opportunities during official application periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Covered & Education Model */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Programs Covered */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  Programs Covered Under Tuition
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                AGCC tuition plans may include access to:
              </p>

              <ul className="space-y-3">
                {[
                  "High School Programs (JSS1 – SS3)",
                  "After-School & Weekend Academies",
                  "GED & Examination Preparation",
                  "Language Learning Programs",
                  "IELTS, TOEFL, PTE & CELPIP Preparation",
                  "Vocational & Career Development Programs",
                  "Leadership & Student Development Activities",
                  "Smart Education Learning Platforms"
                ].map((program, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Package size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flexible Education */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-accent"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-primary">
                  A Flexible Education Built Around You
                </h2>
              </div>

              <p className="text-gray-800 mb-8 leading-relaxed">
                AGCC is designed for modern learners. Our flexible education model allows students to:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Learn from anywhere in the world",
                  "Customize schedules around daily lives",
                  "Participate in global classrooms",
                  "Access international opportunities remotely",
                  "Receive personalized academic support"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Users size={18} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/10 border-2 border-accent p-6 rounded-lg">
                <p className="font-black uppercase text-primary mb-3">Choose Your Learning Style:</p>
                <ul className="space-y-1 text-sm text-gray-800 font-bold">
                  {[
                    "Full-time learning",
                    "Part-time schedules",
                    "Weekend programs",
                    "After-school learning",
                    "Customized academic pathways"
                  ].map((style, idx) => (
                    <li key={idx}>• {style}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Learning Programs */}
      <section className="py-20 md:py-32 gradient-panel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-accent"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-primary">
              Travel Learning & Global Experiences
            </h2>
          </div>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed max-w-3xl">
            Some AGCC educational travel and exchange programs may require separate participation costs depending on destination, accommodation, transportation, and program activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Travel Learning Experiences Include:</h3>
              <ul className="space-y-3">
                {[
                  "Cultural Diplomacy Programs",
                  "Citizen Diplomacy Engagements",
                  "Leadership Summits",
                  "Educational Field Trips",
                  "University Campus Tours",
                  "International Exchange Programs"
                ].map((program, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <Plane size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-bold">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-black uppercase text-primary mb-6">Important Information</h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Travel dates and participation costs are typically announced at the beginning of each calendar year.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Destination", description: "International locations" },
                  { label: "Accommodation", description: "Arranged arrangements" },
                  { label: "Transportation", description: "Travel logistics included" },
                  { label: "Activities", description: "Program duration varies" }
                ].map((info, idx) => (
                  <div key={idx} className="border-l-4 border-accent pl-4">
                    <p className="font-black uppercase text-sm text-gray-600">{info.label}</p>
                    <p className="text-gray-800 font-bold text-sm">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary text-center mb-16">
            Support for Parents & Families
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-800 text-center leading-relaxed mb-12">
              AGCC is committed to working closely with families throughout the enrollment and learning journey. Contact us with your questions and goals—our admissions and student support teams are available to help identify the best educational pathway for your child.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Areas of academic interest",
                "Preferred schedules",
                "Learning goals",
                "Tuition and financial aid questions",
                "Scholarship inquiries"
              ].map((topic, idx) => (
                <div key={idx} className="flex items-center gap-3 p-6 bg-gray-50 rounded-lg">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <p className="text-gray-800 font-bold">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary text-white p-12 rounded-lg">
            <h3 className="text-2xl font-black uppercase mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

            <p className="text-center text-white font-semibold">
              For tuition, enrollment, assessment, and financial aid inquiries, please reach out to our admissions team.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal FREE Programs */}
      <section className="py-24 md:py-40 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-accent/90 to-accent/80 p-12 md:p-16 rounded-2xl mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-primary mb-2 leading-tight tracking-tighter">
              Seasonal
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 leading-tight tracking-tighter">
              FREE Programs
            </h2>

            <p className="text-base md:text-lg text-white font-semibold">
              At AGCC, we offer exciting seasonal FREE programs designed to help students grow academically, professionally, and personally.
            </p>
          </div>

          <p className="text-lg text-white mb-8 leading-relaxed">
            From language learning and tutoring support to career development and academic preparation, our programs are created to empower students for global success.
          </p>

          <div className="bg-white/10 border-2 border-accent p-8 rounded-lg mb-10">
            <p className="text-xl font-black text-accent mb-4">
              Ready to Explore Free Learning Opportunities?
            </p>
            <p className="text-base text-white">
              Email or call us today to learn more about our available free programs, discounts, and scholarship opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center mb-10">
            <a href="mailto:info@agccollege.org" className="flex items-center gap-3 text-accent font-black uppercase tracking-wide hover:text-yellow-300 transition">
              <Mail size={20} />
              info@agccollege.org
            </a>
            <a href="tel:+16464440818" className="flex items-center gap-3 text-accent font-black uppercase tracking-wide hover:text-yellow-300 transition">
              <Phone size={20} />
              +1 (646) 444-0818
            </a>
          </div>

          <div className="bg-accent text-primary p-8 rounded-lg">
            <p className="text-2xl font-black italic">
              AGCC: Learn Globally. Succeed Beyond Borders.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-primary mb-8 leading-tight">
            Our Commitment to You
          </h2>

          <p className="text-lg text-gray-800 mb-12 leading-relaxed">
            At AGCC, we remain committed to flexible global education, student-centered learning, affordable academic opportunities, leadership and career readiness, and building globally competitive students.
          </p>

          <div className="bg-accent/10 border-2 border-accent p-12 rounded-lg mb-12">
            <p className="text-2xl font-black italic text-primary mb-4">
              "Flexible Learning. Global Opportunities. Education Designed Around You."
            </p>
          </div>

          <p className="text-xl font-black uppercase mb-12 text-primary">
            We Believe Education Should Adapt to Students
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get More Information
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/apply"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
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
