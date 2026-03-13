import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm uppercase tracking-widest mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Sakura Pipe
              </h1>
              <p className="text-lg text-white/80">
                Have a question about our products or need a bulk order quote? 
                Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Info + Map */}
              <div className="space-y-10">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 text-sm">
                      Butwal-08, Rupandehi, Nepal<br />
                      Near Siddhababa Temple
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 text-sm">
                      Phone: 071-531659<br />
                      Mobile: +977-9800000000
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 text-sm">
                      info@sakurapipe.com.np<br />
                      sales@sakurapipe.com.np
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Sun - Fri: 9:00 AM - 6:00 PM<br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=27.6914862,83.4684243&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="+977-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                    >
                      <option value="">Select a product</option>
                      <option value="water-supply">Water Supply Pipes</option>
                      <option value="fittings">Pipes and Fittings</option>
                      <option value="irrigation">Irrigation Pipes</option>
                      <option value="hdpe">HDPE Pipes</option>
                      <option value="column">Column Pipes</option>
                      <option value="sewerage">Sewerage Pipes</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
