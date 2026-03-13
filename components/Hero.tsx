"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <div className="relative h-full flex items-end pb-24 pl-6 lg:pl-12">
        <div className="max-w-lg">
          
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className={`text-amber-400 text-xs tracking-[0.2em] uppercase ${inter.className}`}>
              Est. 2014 — Butwal, Nepal
            </span>
          </div>

          {/* Headline - Compact */}
          <h1 className={`${playfair.className} text-white mb-4 leading-tight`}>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-medium opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Premium Pipes.
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-medium italic text-amber-400 opacity-0 translate-y-6 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              Proven Quality.
            </span>
          </h1>

          {/* Short Description */}
          <p className={`${inter.className} text-white/80 text-sm leading-relaxed max-w-sm mb-6 opacity-0 animate-fade-in`} style={{ animationDelay: "0.9s" }}>
            Nepal's trusted PVC & HDPE pipe manufacturer since 2014.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link
              href="/products"
              className="group bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-amber-400 transition-colors flex items-center gap-2"
            >
              Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/about"
              className="text-white/80 text-sm hover:text-amber-400 transition-colors"
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
