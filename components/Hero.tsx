"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-gray-900"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero.png"
      >
        <source src="/videos/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Content - Left Aligned */}
      <div className="relative h-full flex items-center pb-12 sm:pb-16 lg:pb-24 pl-3 sm:pl-4 lg:pl-12">
        <div className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-lg">

          {/* Trust Badge */}
          <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className={`text-yellow-300 text-[8px] sm:text-xs tracking-[0.05em] sm:tracking-[0.2em] uppercase ${inter.className}`}>
              Est. 2014 — Butwal-08, Rupandehi
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`${inter.className} text-white mb-3 sm:mb-6 leading-tight font-bold`}>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Leading HDPE Pipe
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold italic text-yellow-300 opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              Manufacturer in Nepal
            </span>
          </h1>

          {/* Sub-headline */}
          <p className={`${inter.className} text-white/90 text-[10px] sm:text-xs leading-relaxed max-w-[240px] sm:max-w-xs md:max-w-sm mb-4 sm:mb-8 opacity-0 animate-fade-in`} style={{ animationDelay: "0.9s" }}>
            High-quality HDPE pipes for Residential, Commercial & Industrial Infrastructure across Nepal
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }}>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span className="text-white text-[10px] sm:text-xs font-medium">10+ Years</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span className="text-white text-[10px] sm:text-xs font-medium">NS 40 Grade</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span className="text-white text-[10px] sm:text-xs font-medium">Serving All Nepal</span>
            </div>
          </div>

          {/* Professional CTAs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link
              href="https://wa.me/9779851181195"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 text-[10px] sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              Get Quote on WhatsApp
            </Link>

            <Link
              href="/products"
              className="group bg-white text-green-600 px-3 py-1.5 sm:px-4 sm:py-2.5 text-[10px] sm:text-sm font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-1 sm:gap-2 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              View Products
              <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
