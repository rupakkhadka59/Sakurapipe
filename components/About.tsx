"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          {/* Images */}
          <div className="flex-1 w-full grid grid-cols-2 gap-2 sm:gap-4">

            <div className="space-y-2 sm:space-y-4 pt-8 sm:pt-12">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/about1.png"
                  alt="Sakura pipe"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/about2.png"
                  alt="Sakura pipe"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="bg-secondary p-3 sm:p-6 rounded-lg shadow-md text-white flex flex-col justify-center items-center h-24 sm:h-32">
                <h3 className="text-2xl sm:text-3xl font-bold text-accent">10+</h3>
                <p className="text-xs sm:text-sm font-medium text-center mt-1">
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

            {/* About Us Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              About Us <ArrowRight size={20} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
