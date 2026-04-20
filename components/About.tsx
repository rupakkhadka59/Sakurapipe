"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Award, Factory, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const images = [
    {
      src: "/images/Sakura 2.png",
      alt: "Sakura Pipe Premium Quality",
    },
    {
      src: "/images/About/facility-exterior.png",
      alt: "Production facility exterior in Butwal",
    },
    {
      src: "/images/About/facility-machinery-1.png",
      alt: "Quality control testing equipment",
    },
    {
      src: "/images/About/facility-machinery-2.png",
      alt: "Sakura HDPE Pipe manufacturing line",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="about" className="about-section scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side: Modern Carousel */}
          <div className="about-visual w-full lg:flex-1">
            <div className="carousel-container relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] mx-auto group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="carousel-slide-wrapper relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <Image 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt} 
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-8 bg-green-500" : "w-2.5 bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>

              {/* Experience Badge - Positioned relative to carousel */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="collage-experience z-30"
              >
                <div className="exp-inner text-center">
                  <span className="exp-number">10+</span>
                  <span className="exp-text">Years of <br/> Excellence</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <div className="content-pill opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="pill-dot"></span>
              <span className="pill-text uppercase tracking-[0.2em] font-bold text-xs">Our Heritage</span>
            </div>

            <h2 className="about-h2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Leading HDPE Pipe Manufacturer in 
              <span className="text-green-600 block mt-2">Butwal-08, Rupandehi</span>
            </h2>

            <p className="about-p opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Established in 2014, Sakura Pipe Udhyog Pvt. Ltd. has emerged as 
              a pioneer in Nepal's infrastructure landscape, providing high-durability 
              HDPE solutions for residential and industrial sectors nationwide.
            </p>

            {/* Features List */}
            <div className="feature-grid opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="feature-item group">
                <div className="feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="feature-info">
                  <h4 className="feature-title">NS 40 Grade Certified</h4>
                  <p className="feature-desc">All products rigorously tested to maintain national standards of excellence.</p>
                </div>
              </div>

              <div className="feature-item group">
                <div className="feature-icon">
                  <Factory size={20} />
                </div>
                <div className="feature-info">
                  <h4 className="feature-title">Advanced Manufacturing</h4>
                  <p className="feature-desc">State-of-the-art extrusion technology ensures consistent wall thickness and durability.</p>
                </div>
              </div>

              <div className="feature-item group">
                <div className="feature-icon">
                  <Globe2 size={20} />
                </div>
                <div className="feature-info">
                  <h4 className="feature-title">Nationwide Reach</h4>
                  <p className="feature-desc">Dedicated logistics network serving diverse terrains from Terai to the Himalayas.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }}>
              <Link href="/about" className="about-btn group">
                <span>Discover Our Journey</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          background: #ffffff;
          overflow: hidden;
        }

        /* Carousel System */
        .carousel-container {
          position: relative;
          z-index: 10;
        }

        .collage-experience {
          position: absolute;
          bottom: -20px;
          right: -20px;
          z-index: 30;
          background: #16a34a;
          color: white;
          padding: 1.25rem;
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px -5px rgba(22, 163, 74, 0.5);
          transform: rotate(3deg);
          border: 4px solid white;
        }

        @media (max-width: 640px) {
          .collage-experience {
            bottom: -10px;
            right: -5px;
            padding: 0.85rem;
            transform: rotate(0deg);
          }
        }


        .exp-number {
          display: block;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.25rem;
          color: #fefcbf;
        }

        .exp-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          line-height: 1.4;
        }

        /* Content Styles */
        .about-content {
          flex: 1;
        }

        .content-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #f0fdf4;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          border: 1px solid #dcfce7;
        }

        .pill-dot {
          width: 0.5rem;
          height: 0.5rem;
          background: #16a34a;
          border-radius: 50%;
        }

        .pill-text {
          color: #15803d;
        }

        .about-h2 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          margin-bottom: 2rem;
          letter-spacing: -0.025em;
        }

        .about-p {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        /* Feature List */
        .feature-grid {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .feature-item {
          display: flex;
          gap: 1.25rem;
        }

        .feature-icon {
          width: 3rem;
          height: 3rem;
          background: #f8fafc;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16a34a;
          flex-shrink: 0;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-item:hover .feature-icon {
          background: #16a34a;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.2);
        }

        .feature-title {
          font-size: 1rem;
          font-weight: 700;
          color: #16a34a;
          margin-bottom: 0.25rem;
        }

        .feature-desc {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #0f172a;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .about-btn:hover {
          background: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(22, 163, 74, 0.3);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @media (max-width: 1024px) {
          .collage-grid {
            margin-bottom: 4rem;
          }
           .about-section {
            padding: 5rem 0;
          }
        }

        @media (max-width: 640px) {
          .collage-grid {
            height: 480px;
          }
          .collage-experience {
            padding: 1rem;
          }
          .exp-number {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
