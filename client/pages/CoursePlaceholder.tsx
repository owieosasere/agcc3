import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";

export default function CoursePlaceholder() {
  const location = useLocation();
  
  // Extract a readable title from the route
  const getTitle = () => {
    const path = location.pathname;
    return path
      .split('/')
      .pop()
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()) || 'Course Details';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            {getTitle()}
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Lightbulb className="text-primary" size={40} />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-secondary mb-6">
            Coming Soon
          </h2>

          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            This course page is being developed with detailed curriculum information, learning outcomes, schedule, and enrollment details.
          </p>

          <p className="text-slate-600 mb-12">
            Would you like us to add specific course details? Let us know what information you'd like to see here, and we'll update the page with:
          </p>

          <ul className="text-left max-w-md mx-auto mb-12 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Course curriculum and syllabus
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Schedule and enrollment dates
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Instructor information
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Learning outcomes and requirements
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/course-list"
              className="cta-primary gap-2 justify-center"
            >
              Back to Classes
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="cta-secondary justify-center"
            >
              Contact About This Course
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
