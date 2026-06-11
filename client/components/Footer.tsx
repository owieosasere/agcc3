import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Main Content */}
        <div className="py-12 md:py-20 border-b border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-90 transition">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F6c5c2fc4327e450697256532ce47319a?format=webp&width=800&height=1200"
                  alt="AGCC"
                  className="w-12 h-12 object-contain"
                />
                <span className="font-black uppercase text-lg">AGCC</span>
              </Link>
              <p className="text-white/75 text-sm leading-relaxed mb-8 font-normal">
                America Global Citizen College Global Online School. Educating minds. Building skills. Shaping global leaders.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/17Z5m9aJP9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-accent hover:scale-110 transition duration-300 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/americanglobalcitizen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-accent hover:scale-110 transition duration-300 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/american-global-citizen-college-8a6450412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-accent hover:scale-110 transition duration-300 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Location Block 1 */}
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b-2 border-accent">
                Brooklyn Campus
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/80 text-sm font-medium">1096 Eldert Lane</p>
                    <p className="text-white/60 text-xs">Brooklyn, NY 11208</p>
                  </div>
                </div>
                <a href="tel:+16464440818" className="flex items-center gap-3 text-white/80 hover:text-white transition duration-300 group">
                  <Phone size={16} className="text-accent flex-shrink-0 group-hover:scale-110 transition duration-300" />
                  <span className="text-sm font-medium">+1 (646) 444-0818</span>
                </a>
              </div>
            </div>

            {/* Main Navigation Links */}
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b-2 border-accent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faculties" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Academics
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/apply" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Apply Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b-2 border-accent">
                Programs
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/course-list" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Grades 6-12
                  </Link>
                </li>
                <li>
                  <Link to="/ap-courses" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> AP Courses
                  </Link>
                </li>
                <li>
                  <Link to="/virtual-open-house" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Open House
                  </Link>
                </li>
                <li>
                  <Link to="/counselling" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Counseling
                  </Link>
                </li>
                <li>
                  <Link to="/student-activities" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/80 hover:text-accent transition duration-300 text-sm font-medium flex items-center gap-2">
                    <span>→</span> Student Life
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-6 pb-3 border-b-2 border-accent">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@agccollege.org"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition duration-300 group"
                >
                  <Mail size={16} className="text-accent flex-shrink-0 group-hover:scale-110 transition duration-300" />
                  <span className="text-sm font-medium">info@agccollege.org</span>
                </a>
                <div className="text-sm font-medium text-white/80">
                  <p className="font-black text-xs uppercase text-accent tracking-widest mb-2">Hours</p>
                  <p className="text-white/70">Monday – Friday</p>
                  <p className="text-white/70">9:00 AM – 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditation Section */}
          <div className="border-t border-white/20 pt-12">
            <h4 className="font-black uppercase text-xs tracking-widest mb-6 text-white/80">
              Accreditations & Affiliations
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {["International Baccalaureate", "AP Courses", "ACSI", "NAIS", "Global Schools", "ISO"].map((org, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mx-auto mb-3 hover:bg-accent transition duration-300">
                    <span className="text-xs font-black text-white/60">✓</span>
                  </div>
                  <p className="text-xs font-bold text-white/70">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 gap-4">
          <p>© 2026 America Global Citizen College. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition duration-300">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-white transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
