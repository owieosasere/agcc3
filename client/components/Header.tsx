import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

  const handleHomeClick = () => {
    // Navigate to home and scroll to top
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleSubmenu = (key: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mainNavItems = [
    {
      label: "About Us",
      href: "/about",
      submenu: [
        { label: "Welcome", href: "/about" },
        { label: "Our Vision", href: "/vision" },
        { label: "Our Mission", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Global Network", href: "/global-network" },
      ],
    },
    {
      label: "Academics",
      href: "/faculties",
      submenu: [
        { label: "Our Faculties", href: "/faculties" },
        { label: "Grades 6-12", href: "/course-list" },
        { label: "AP Courses", href: "/ap-courses" },
        { label: "College Counseling", href: "/counselling" },
      ],
    },
    {
      label: "Admissions",
      href: "/virtual-open-house",
      submenu: [
        { label: "Virtual Open House", href: "/virtual-open-house" },
        { label: "Enroll Now", href: "/enrollment" },
        { label: "Apply Now", href: "/apply" },
        { label: "Tuition & Aid", href: "/tuition-aid" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      label: "Our Community",
      href: "/our-staff",
      submenu: [
        { label: "Our Staff", href: "/our-staff" },
        { label: "Faculty", href: "/faculty-members" },
        { label: "Global Network", href: "/global-network" },
      ],
    },
    {
      label: "Student Life",
      href: "/student-activities",
      submenu: [
        { label: "Clubs & Activities", href: "/student-activities" },
        { label: "Events", href: "/events" },
        { label: "Arts Program", href: "/arts-program" },
      ],
    },
  ];

  const utilityLinks = [
    { label: "Inquire", href: "/contact" },
    { label: "Calendar", href: "/calendar" },
    { label: "News", href: "/about" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-end gap-8 text-xs font-bold uppercase tracking-widest text-primary">
          {utilityLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-accent transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F17af27ae9fd84dc687930a0b01f78aed%2F3db25499aaba4804b5a6b06f65bb577b?format=webp&width=800&height=1200"
                alt="AGCC"
                className="w-10 h-10 object-contain"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-black text-sm leading-tight text-primary uppercase">AGCC</span>
                <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">Global Online</span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-16">
              {mainNavItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-primary font-black uppercase text-xs tracking-widest hover:text-accent transition duration-300 py-2 flex items-center gap-1.5"
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>

                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-0 min-w-max bg-white border border-gray-200 shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        target={subitem.href.startsWith("http") ? "_blank" : undefined}
                        rel={subitem.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block px-6 py-3 text-primary text-xs font-black uppercase tracking-widest hover:bg-gray-50 hover:text-accent transition duration-300"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                to="/apply"
                className="hidden sm:block border-2 border-accent text-accent px-6 py-2.5 font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
              >
                Apply Now
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-primary hover:text-accent transition p-3"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden border-t border-gray-200 py-4 space-y-2 pb-6">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex justify-between items-center px-5 py-4 text-primary font-black uppercase text-sm tracking-wide hover:bg-gray-100 hover:text-accent transition border-l-4 border-transparent hover:border-accent rounded-lg"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        expandedMenus[item.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedMenus[item.label] && (
                    <div className="bg-gray-50 border-l-4 border-accent space-y-2 py-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          to={subitem.href}
                          target={subitem.href.startsWith("http") ? "_blank" : undefined}
                          rel={subitem.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-6 py-3 text-gray-700 text-sm font-bold uppercase tracking-wide hover:bg-gray-100 hover:text-primary transition"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 mt-4 px-4">
                <Link
                  to="/apply"
                  className="block w-full bg-accent text-white px-6 py-4 font-black uppercase text-sm text-center tracking-wide hover:bg-accent/90 transition-all rounded-lg"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
