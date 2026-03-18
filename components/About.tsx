"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Trust Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-center">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm sm:text-base font-semibold text-gray-800">10+ Years</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm sm:text-base font-semibold text-gray-800">NS 40 Grade</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm sm:text-base font-semibold text-gray-800">Serving All Nepal</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          {/* Images */}
          <div className="flex-1 w-full grid grid-cols-2 gap-2 sm:gap-4">

            <div className="space-y-2 sm:space-y-4 pt-8 sm:pt-12">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/images/about1.png"
                  alt="HDPE pipe manufacturing facility"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg group">
                <img
                  src="/images/about2.png"
                  alt="Quality HDPE pipes production"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 sm:p-6 rounded-lg shadow-lg text-white flex flex-col justify-center items-center h-24 sm:h-32">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">10+</h3>
                <p className="text-xs sm:text-sm font-medium text-center mt-1">
                  Years of Manufacturing Excellence
                </p>
              </div>
            </div>

          </div>

          {/* Content */}
          <div className="flex-1">

            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
              Leading HDPE Pipe Manufacturer in
              <span className="text-green-600 block"> Butwal-08, Rupandehi</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Sakura Pipe Udhyog Pvt. Ltd. produces high-quality HDPE pipes for
              residential, commercial and industrial infrastructure across Nepal.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">NS 40 Grade Certified</h4>
                  <p className="text-gray-600 text-sm">All pipes meet Nepal Bureau of Standards specifications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced Manufacturing</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art extrusion technology for consistent quality</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Nationwide Distribution</h4>
                  <p className="text-gray-600 text-sm">Serving from Terai to Himalayan regions</p>
                </div>
              </div>
            </div>

            {/* About Us Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Learn More About Us <ArrowRight size={20} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
