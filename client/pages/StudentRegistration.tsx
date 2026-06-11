import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormspreeForm from "@/components/FormspreeForm";

export default function StudentRegistration() {
  const registrationFields = [
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
      name: "userName",
      label: "User Name",
      type: "text" as const,
      placeholder: "User Name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email" as const,
      placeholder: "E-Mail",
      required: true,
    },
    {
      name: "grade",
      label: "Current Grade Level",
      type: "select" as const,
      required: true,
      options: [
        { label: "Grade 6", value: "6" },
        { label: "Grade 7", value: "7" },
        { label: "Grade 8", value: "8" },
        { label: "Grade 9", value: "9" },
        { label: "Grade 10", value: "10" },
        { label: "Grade 11", value: "11" },
        { label: "Grade 12", value: "12" },
      ],
    },
    {
      name: "parentEmail",
      label: "Parent/Guardian Email",
      type: "email" as const,
      placeholder: "Parent or guardian email",
      required: true,
    },
    {
      name: "message",
      label: "Tell us about yourself",
      type: "textarea" as const,
      placeholder: "What interests you about AGCC?",
      required: false,
      rows: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Student Registration
          </h1>
          <p className="text-lg text-slate-700">
            Create your account to begin your AGCC learning journey.
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
            <FormspreeForm
              title="Create Your Account"
              description="Join AGCC and begin your global learning journey."
              fields={registrationFields}
              submitButtonText="Register"
              successMessage="Thank you for registering! Check your email for next steps."
            />
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              What happens next?
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>A confirmation email will be sent to your registered email address</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Verify your email to activate your account</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Log in to your dashboard to browse courses and enroll</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Complete payment and begin your learning journey!</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
