import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Registration() {
  const programs = [
    {
      title: "AGCC After School Academy",
      link: "/apply"
    },
    {
      title: "AGCC Weekend Academy",
      link: "/apply"
    },
    {
      title: "AGCC After High School University Prep Diploma",
      link: "/apply"
    },
    {
      title: "Study Abroad Advisement",
      link: "/apply"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-slate-200 h-64 md:h-80 overflow-hidden">
        <img
          src="https://agccollege.org/wp-content/uploads/2025/09/Purple-Yellow-Modern-College-Presentation-1-1024x576.jpg"
          alt="Registration Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Course Registration
          </h1>
        </div>
      </section>

      {/* Program Selection Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-4">
            Choose a Program
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
          <p className="text-xl text-slate-700 text-center mb-16 max-w-2xl mx-auto">
            Select the program that best fits your educational goals and apply today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {programs.map((program, idx) => (
              <Link
                key={idx}
                to={program.link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition">
                  {program.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Apply Now
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-4">
            Learn More About AGCC
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>

          <div className="relative bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg overflow-hidden h-96 md:h-[500px] flex items-center justify-center group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/h0ECHihUOSs?controls=1&rel=0&playsinline=0"
              title="Welcome to America Global Citizen College"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-12">
            Registration Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Choose Your Program
              </h3>
              <p className="text-slate-700">
                Select from our available programs above that match your educational goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Complete Application
              </h3>
              <p className="text-slate-700">
                Fill out the online registration form with your personal and educational information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Begin Your Journey
              </h3>
              <p className="text-slate-700">
                Once approved, start your classes and unlock your potential with AGCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Register?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl mb-12 opacity-90">
            Don't wait. Choose a program above and start your registration today.
          </p>
          <a
            href="/apply"
            className="bg-yellow-400 text-secondary font-bold px-8 py-4 rounded hover:bg-yellow-300 transition inline-flex items-center justify-center gap-2 text-lg"
          >
            Start Registration
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
