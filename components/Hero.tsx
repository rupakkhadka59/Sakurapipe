"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]"
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

      {/* Content - Full Left Aligned */}
      <div className="relative h-full flex items-end pb-12 sm:pb-16 lg:pb-24 pl-3 sm:pl-4 lg:pl-12">
        <div className="max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-lg">

          {/* Badge */}
          <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className={`text-amber-400 text-[8px] sm:text-xs tracking-[0.05em] sm:tracking-[0.2em] uppercase ${inter.className}`}>
              Est. 2014 — Butwal, Nepal
            </span>
          </div>

          {/* Headline - Compact */}
          <h1 className={`${inter.className} text-white mb-3 sm:mb-6 leading-tight font-bold`}>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Premium Pipes.
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold italic text-amber-400 opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              Proven Quality.
            </span>
          </h1>

          {/* Short Description */}
          <p className={`${inter.className} text-white/80 text-[10px] sm:text-xs leading-relaxed max-w-[240px] sm:max-w-xs md:max-w-sm mb-4 sm:mb-8 opacity-0 animate-fade-in`} style={{ animationDelay: "0.9s" }}>
            Nepal's trusted PVC & HDPE pipe manufacturer since 2014.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link
              href="/products"
              className="group bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold hover:bg-amber-400 transition-colors flex items-center gap-1"
            >
              Products
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="text-white/80 text-[10px] sm:text-xs hover:text-amber-400 transition-colors"
            >
              About Us →
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
