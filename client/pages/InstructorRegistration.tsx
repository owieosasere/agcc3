import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormspreeForm from "@/components/FormspreeForm";

export default function InstructorRegistration() {
  const instructorFields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text" as const,
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text" as const,
      placeholder: "Last Name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email" as const,
      placeholder: "Your email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel" as const,
      placeholder: "+1 (555) 000-0000",
      required: false,
    },
    {
      name: "subject",
      label: "Subject Area(s) of Expertise",
      type: "text" as const,
      placeholder: "e.g., English, Mathematics, Science",
      required: true,
    },
    {
      name: "experience",
      label: "Years of Teaching Experience",
      type: "select" as const,
      required: true,
      options: [
        { label: "2-5 years", value: "2-5" },
        { label: "5-10 years", value: "5-10" },
        { label: "10-15 years", value: "10-15" },
        { label: "15+ years", value: "15+" },
      ],
    },
    {
      name: "qualifications",
      label: "Educational Qualifications",
      type: "text" as const,
      placeholder: "e.g., Bachelor's in Education, Master's in Subject Area",
      required: true,
    },
    {
      name: "message",
      label: "Why do you want to teach at AGCC?",
      type: "textarea" as const,
      placeholder: "Tell us about your passion for global education...",
      required: true,
      rows: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Instructor Registration
          </h1>
          <p className="text-lg text-slate-700">
            Join our team of world-class educators and make a global impact.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Make a Difference
              </h3>
              <p className="text-slate-700">
                Teach students from around the world and inspire the next generation of global leaders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Flexible Teaching
              </h3>
              <p className="text-slate-700">
                Work with our innovative online platform on a schedule that works for you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-secondary mb-3">
                Competitive Compensation
              </h3>
              <p className="text-slate-700">
                Receive fair compensation for sharing your expertise and passion for education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
            <FormspreeForm
              title="Create Your Instructor Account"
              description="Join our team of world-class educators. Fill out the form below to apply. Our team will review your application and contact you shortly."
              fields={instructorFields}
              submitButtonText="Apply as Instructor"
              successMessage="Thank you for applying! We'll review your credentials and contact you soon."
            />
          </div>

          {/* Requirements */}
          <div className="mt-12 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Instructor Requirements
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Bachelor's degree or higher in your subject area</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Minimum 2 years of teaching or subject matter expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Excellent communication and interpersonal skills</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Commitment to student success and global citizenship</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Proficiency with online learning platforms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
