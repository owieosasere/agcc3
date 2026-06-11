import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    currentGrade: "",
    interestArea: "",
    programType: "",
    specificProgram: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    schoolName: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Clean up timeout on unmount
  useEffect(() => {
    if (submitted) {
      const timeoutId = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [submitted]);

  const programOptions = {
    "Grades 6-12": [
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
    ],
    "AP Courses": [
      "AP Mathematics & Sciences",
      "AP English & Communication",
      "AP Social Sciences & Global Studies",
      "AP Business & Entrepreneurship",
      "AP Technology & Digital Skills",
    ],
    "Vocational Studies": [
      "Digital Marketing & Social Media",
      "Web Development & Coding",
      "Graphic Design & Adobe Suite",
      "Business Administration",
      "Advanced Excel & Data Analysis",
      "Cybersecurity Fundamentals",
      "Project Management",
      "Plumbing Systems",
      "Automobile Repair",
      "Home Building & Construction",
    ],
    Faculties: [
      "Faculty of High School Education",
      "Faculty of Arts & Creative Expression",
      "Faculty of Technology & Innovation",
      "Faculty of Agriculture & Smart Farming",
      "Faculty of Health & Community Care",
      "Faculty of Languages & International Communication",
      "Faculty of Adult Learning & Professional Development",
      "Faculty of Skilled Trades & Vocational Studies",
      "Faculty of Global Leadership & Diplomacy",
    ],
    "After School Programs": [
      "Math Tutoring & Remediation",
      "Writing Center",
      "Science Lab Extensions",
      "Debate & Speaking Club",
      "Coding & Robotics",
      "Leadership Development",
      "Test Preparation",
    ],
    "Arts Programs": [
      "Visual Arts & Design",
      "Digital Media & Content Creation",
      "Creative Writing & Storytelling",
      "Music & Performance Arts",
      "Theatre & Drama",
    ],
  };

  const interestAreas = [
    "Mathematics & Sciences",
    "English & Humanities",
    "Technology & Computer Science",
    "Arts & Creative Expression",
    "Business & Entrepreneurship",
    "Vocational & Technical Skills",
    "Languages & International Studies",
    "Agriculture & Sustainability",
    "Health & Community Care",
    "Leadership & Global Citizenship",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset specific program when program type changes
    if (name === "programType") {
      setFormData((prev) => ({
        ...prev,
        specificProgram: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formElement = e.currentTarget;
      const data = new FormData(formElement);

      const response = await fetch("https://formspree.io/f/mkoenbdj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          currentGrade: "",
          interestArea: "",
          programType: "",
          specificProgram: "",
          parentName: "",
          parentEmail: "",
          parentPhone: "",
          schoolName: "",
          message: "",
        });

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-accent"></div>
            <span className="font-black text-sm uppercase tracking-widest">
              Admissions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight">
            Academic Enrollment Form
          </h1>
          <p className="text-xl text-white font-semibold max-w-2xl leading-relaxed">
            Take the first step toward your educational journey at AGCC. Complete
            this form to enroll in our comprehensive academic programs.
          </p>
        </div>
      </section>

      {/* Success Message */}
      {submitted && (
        <section className="bg-green-50 border-b-4 border-green-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <CheckCircle size={32} className="text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black text-green-800 mb-2">
                  Enrollment Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for your interest in AGCC. Our admissions team will
                  review your application and contact you shortly with next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Information */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-12">
              <h2 className="text-3xl font-black uppercase text-primary mb-8">
                Student Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Current School/Institution
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter school name"
                  />
                </div>
              </div>
            </div>

            {/* Academic Interests */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-12">
              <h2 className="text-3xl font-black uppercase text-primary mb-8">
                Academic Interests
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Primary Interest Area *
                  </label>
                  <select
                    name="interestArea"
                    value={formData.interestArea}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                  >
                    <option value="">Select an area of interest</option>
                    {interestAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Program Type *
                  </label>
                  <select
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                  >
                    <option value="">Select a program type</option>
                    {Object.keys(programOptions).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.programType && (
                  <div>
                    <label className="block text-sm font-black uppercase text-primary mb-2">
                      Specific Program *
                    </label>
                    <select
                      name="specificProgram"
                      value={formData.specificProgram}
                      onChange={handleChange}
                      required={!!formData.programType}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    >
                      <option value="">
                        Select {formData.programType}
                      </option>
                      {programOptions[
                        formData.programType as keyof typeof programOptions
                      ]?.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Current Grade Level (if applicable)
                  </label>
                  <select
                    name="currentGrade"
                    value={formData.currentGrade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                  >
                    <option value="">Select current grade</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                    <option value="Adult Learner">Adult Learner</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-12">
              <h2 className="text-3xl font-black uppercase text-primary mb-8">
                Parent/Guardian Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Parent/Guardian Email *
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter parent/guardian email"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-black uppercase text-primary mb-2">
                    Parent/Guardian Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                    placeholder="Enter parent/guardian phone number"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white border-2 border-accent/20 p-8 md:p-12">
              <h2 className="text-3xl font-black uppercase text-primary mb-8">
                Additional Information
              </h2>

              <div>
                <label className="block text-sm font-black uppercase text-primary mb-2">
                  Message or Additional Comments
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-accent focus:outline-none transition"
                  placeholder="Tell us why you're interested in AGCC and what you hope to achieve..."
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-300 p-6 text-red-800">
                <p className="font-semibold">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-primary text-white px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                {submitting ? "Submitting..." : "Submit Enrollment Form"}
                {!submitting && <ArrowRight size={20} />}
              </button>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-1 border-2 border-accent text-accent px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                Contact Support
                <Mail size={20} />
              </Link>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-1 border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                Home
                <ArrowRight size={20} />
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-primary text-center mb-16">
            Questions About Our Programs?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={24} className="text-accent" />
                <h3 className="text-xl font-black uppercase text-primary">
                  Call Us
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Speak with our admissions team about your educational goals.
              </p>
              <a
                href="tel:+16464440818"
                className="text-accent font-black hover:underline"
              >
                +1 (646) 444-0818
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={24} className="text-accent" />
                <h3 className="text-xl font-black uppercase text-primary">
                  Email Us
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Get detailed information about specific programs and requirements.
              </p>
              <a
                href="mailto:info@agccollege.org"
                className="text-accent font-black hover:underline"
              >
                info@agccollege.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
