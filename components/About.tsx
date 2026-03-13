"use client";

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 bg-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Images */}
          <div className="flex-1 grid grid-cols-2 gap-4">

            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/about1.png"
                  alt="Sakura pipe"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/about2.png"
                  alt="Sakura pipe"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="bg-secondary p-6 rounded-lg shadow-md text-white flex flex-col justify-center items-center h-32">
                <h3 className="text-3xl font-bold text-accent">10+</h3>
                <p className="text-sm font-medium text-center mt-1">
                  Years of Manufacturing Excellence
                </p>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="flex-1">

            <span className="px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-full text-sm uppercase">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-6 mb-6">
              Leading Pipe Manufacturing in
              <span className="text-primary"> Butwal-08, Rupandehi</span>
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              Sakura Pipe Udhyog Pvt. Ltd. produces high quality pipes for
              residential, commercial and industrial infrastructure across Nepal.
            </p>

            {/* Expanded Content */}
            {expanded && (
              <div className="transition-all duration-300 ease-in-out">
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-secondary mb-2">🏭 State-of-the-Art Facility</h4>
                    <p className="text-gray-600 text-sm">
                      Our modern manufacturing plant in Butwal is equipped with advanced extrusion technology and automated quality control systems, ensuring consistent product excellence.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-secondary mb-2">🌏 Serving All of Nepal</h4>
                    <p className="text-gray-600 text-sm">
                      From the Terai plains to the Himalayan foothills, our distribution network reaches every corner of Nepal, serving construction projects in Kathmandu, Pokhara, Biratnagar, and beyond.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-secondary mb-2">✅ Quality Certified</h4>
                    <p className="text-gray-600 text-sm">
                      All our products undergo rigorous testing and meet Nepal Bureau of Standards (NBS) specifications. We use premium-grade raw materials for durability and long-term performance.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-secondary mb-2">👷 Complete Product Range</h4>
                    <p className="text-gray-600 text-sm">
                      We manufacture PVC pipes, HDPE pipes, uPVC pipes, and custom fittings in various diameters. Whether it's for water supply, drainage, irrigation, or electrical conduits – we've got you covered.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-secondary mb-2">🤝 Trusted Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      We've supplied pipes for government infrastructure projects, major real estate developments, and countless rural water supply schemes – building trust one project at a time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Read More Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={20} />
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
