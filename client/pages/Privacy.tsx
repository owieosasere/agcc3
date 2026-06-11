import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="text-3xl font-black uppercase text-primary mb-6">Privacy Policy</h2>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">1. Introduction</h3>
              <p>
                America Global Citizen College ("AGCC") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">2. Information We Collect</h3>
              <p>
                We collect information you voluntarily provide through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Registration forms (student, instructor, parent)</li>
                <li>Contact forms and inquiries</li>
                <li>Application forms</li>
                <li>Survey responses</li>
                <li>Website analytics and browsing data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">3. How We Use Your Information</h3>
              <p>
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Process applications and registrations</li>
                <li>Provide educational services</li>
                <li>Communicate with you about programs and updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">4. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information. However, 
                no method of transmission over the Internet is completely secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">5. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: <a href="mailto:info@agccollege.org" className="text-accent font-bold">info@agccollege.org</a>
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>Last updated: May 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
