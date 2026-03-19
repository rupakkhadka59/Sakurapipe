"use client";
import React from "react";
import { ArrowRight, Award, Factory, Globe2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="about-section scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Side: 3-Image Collage */}
          <div className="about-visual sticky top-24">
            <div className="collage-grid">
              
              {/* Main Background Image (Small) */}
              <div className="collage-bg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/About/image.png" 
                  alt="Production facility" 
                  className="collage-img"
                />
              </div>

              {/* Foreground Image (Medium) */}
              <div className="collage-mid shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/About/image copy.png" 
                  alt="Quality control" 
                  className="collage-img"
                />
              </div>

              {/* Featured Image (Large) */}
              <div className="collage-front shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/About/image copy 2.png" 
                  alt="Sakura HDPE Pipe" 
                  className="collage-img"
                />
              </div>

              {/* Experience Badge */}
              <div className="collage-experience opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="exp-inner">
                  <span className="exp-number">10+</span>
                  <span className="exp-text">Years of Manufacturing <br/> Excellence</span>
                </div>
              </div>
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

        /* Collage System */
        .about-visual {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .collage-grid {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 520px;
        }

        .collage-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 50%;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #f1f5f9;
        }

        .collage-mid {
          position: absolute;
          bottom: 10%;
          right: 0;
          width: 65%;
          height: 60%;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #f1f5f9;
          z-index: 2;
          border: 1px solid white;
        }

        .collage-front {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 70%;
          height: 65%;
          border-radius: 1.5rem;
          overflow: hidden;
          background: #f1f5f9;
          z-index: 3;
          border: 4px solid white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
        }

        .collage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .collage-front:hover .collage-img {
          transform: scale(1.05);
        }

        .collage-experience {
          position: absolute;
          bottom: -5%;
          left: 0;
          z-index: 10;
          background: #16a34a;
          color: white;
          padding: 1.5rem;
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px -5px rgba(22, 163, 74, 0.5);
          transform: rotate(-3deg);
          border: 4px solid white;
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
