import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-primary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">Terms of Service</h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase text-primary mb-6">Terms of Service</h2>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing and using the AGCC website and services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on AGCC's website for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">3. Disclaimer</h3>
              <p>
                The materials on AGCC's website are provided "as is". AGCC makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties 
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">4. Limitations</h3>
              <p>
                In no event shall AGCC or its suppliers be liable for any damages (including, without limitation, damages 
                for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                the materials on AGCC's website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">5. Accuracy of Materials</h3>
              <p>
                The materials appearing on AGCC's website could include technical, typographical, or photographic errors. 
                AGCC does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">6. Modifications</h3>
              <p>
                AGCC may revise these terms of service for its website at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black uppercase text-primary mb-4">7. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
