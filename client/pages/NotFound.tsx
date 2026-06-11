import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-bold text-primary mb-4">
              404
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Page Not Found
            </p>
            <p className="text-xl text-slate-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="cta-primary gap-2 justify-center"
            >
              <Home size={20} />
              Return to Home
            </Link>
            <Link
              to="/contact"
              className="cta-secondary justify-center"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-700">
              <strong>Looking for something specific?</strong> Try exploring our main pages:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/" className="text-primary hover:text-primary/80 transition font-semibold flex items-center justify-center gap-2">
                Home <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="text-primary hover:text-primary/80 transition font-semibold flex items-center justify-center gap-2">
                About Us <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="text-primary hover:text-primary/80 transition font-semibold flex items-center justify-center gap-2">
                Contact <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
