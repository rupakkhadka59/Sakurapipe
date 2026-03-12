"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-[#111111]"
    >
      {/* Background Image - Replace the src URL with your hosted image */}
      <Image
        alt="Sakura Pipe Team - Manufacturing Facility in Butwal"
        src="/images/hero.png"
        fill={true}
        className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        priority={true}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] via-[#111111]/40 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-end pb-24">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <h2 className="text-[#E8E4DD] font-mono text-sm tracking-[0.5em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Established in Butwal, Rupandehi
          </h2>

          {/* Main Heading */}
          <h1 className="text-[#E8E4DD] leading-none mb-8">
            <span className="block text-5xl md:text-7xl font-bold uppercase tracking-tighter opacity-0 translate-y-10 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              Constructing the
            </span>
            <span className="block text-7xl md:text-9xl font-serif italic text-[#E63B2E] opacity-0 translate-y-10 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              Infrastructure.
            </span>
          </h1>

          {/* CTA and Status */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link
              href="#contact"
              className="group bg-[#E63B2E] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform"
            >
              ESTABLISH CONNECTION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Status Badge */}
            <div className="border border-[#E8E4DD]/30 rounded-full px-6 py-4 text-[#E8E4DD] font-mono text-xs flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                CORE ACTIVE
              </span>
              <span className="text-[#E8E4DD]/30">|</span>
              <span>27.68° N, 83.45° E</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
