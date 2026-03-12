export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-full mb-4 text-sm uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Contact Sakura Pipe
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question about our products or need a bulk order quote? Reach out to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left column (info + map) */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Our Location</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Butwal-08, Rupandehi, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <p className="text-gray-500 text-sm mt-1">071-531659</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      info@sakurapipe.com.np
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-48">
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

          {/* right column form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Enquiry Now
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact No*
                </label>
                <input
                  type="tel"
                  id="contact"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

