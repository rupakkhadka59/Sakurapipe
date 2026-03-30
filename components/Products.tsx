"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, MessageCircle, HelpCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Water Supply Pipes",
    description: "High-pressure resistant HDPE solutions for reliable municipal and domestic water systems.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
    tag: "NS 40 Grade",
  },
  {
    id: 2,
    name: "Pipes and Fittings",
    description: "Precision-molded connectors and auxiliary components for complete infrastructure integrity.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop",
    tag: "Industrial Strength",
  },
  {
    id: 3,
    name: "Irrigation Systems",
    description: "Flexible and durable piping designed for optimized agricultural water management.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=1000&fit=crop",
    tag: "UV Resistant",
  },
  {
    id: 4,
    name: "HDPE Solutions",
    description: "Versatile High-Density Polyethylene pipes for sewage and industrial waste discharge.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=1000&fit=crop",
    tag: "Corrosion Free",
  },
  {
    id: 5,
    name: "Column Pipes",
    description: "Specialized deep-well submersible pump pipes with high tensile strength load capacity.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=1000&fit=crop",
    tag: "Borewell Expert",
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.max(0, products.length - visibleCount + 1);
  
  const prev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const next = () => setCurrentIndex((prev) => Math.min(products.length - visibleCount, prev + 1));

  return (
    <section id="products" className="products-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="products-header">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-0 animate-fade-in">
            <span className="w-8 h-[2px] bg-green-600 rounded-full"></span>
            <span className="text-green-600 font-bold text-xs tracking-[0.3em] uppercase">Premium Range</span>
            <span className="w-8 h-[2px] bg-green-600 rounded-full"></span>
          </div>
          <h2 className="products-h2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our Specialized Solutions
          </h2>
          <p className="products-lead opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            With over 2500+ SKUs, Sakura Pipe delivers the most comprehensive 
            infrastructure portfolio in the region.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-4 sm:px-0">
          
          {/* Navigation Buttons */}
          <div className="carousel-nav hidden sm:flex">
            <button 
              onClick={prev} 
              disabled={currentIndex === 0}
              className="carousel-btn prev"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              disabled={currentIndex >= products.length - visibleCount}
              className="carousel-btn next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Cards Wrapper */}
          <div className="overflow-hidden py-8">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className={`flex-shrink-0 px-3 transition-opacity duration-500`}
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="product-card">
                    {/* Image Area */}
                    <div className="card-image-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="card-img"
                      />
                      <div className="card-overlay" />
                      <div className="card-tag">
                        {product.tag}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                      <p className="card-text">{product.description}</p>
                      <div className="card-footer">
                        <Link href="/products" className="card-link group/link">
                          <span>Explore Details</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:hidden">
            {Array.from({ length: products.length }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-green-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link href="/products" className="btn-main">
            View Full Catalogue
            <ChevronRight className="w-5 h-5" />
          </Link>
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs font-semibold text-gray-500">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs font-semibold text-gray-500">NS 40 Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons Area (Styled Professionally) */}
      <div className="fab-container">
        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/9779851181195"
          target="_blank"
          rel="noopener noreferrer"
          className="fab fab-whatsapp"
          title="WhatsApp Us"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span className="fab-tooltip">Fast Response</span>
        </a>

        {/* Enquiries FAB */}
        <a
          href="#contact"
          className="fab fab-enquiry"
          title="Send Enquiry"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="enquiry-text uppercase tracking-tighter">Enquiries</span>
        </a>
      </div>

      {/* Component Styles */}
      <style>{`
        .products-section {
          background-color: #f8fafc;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .products-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-h2 {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }

        .products-lead {
          font-size: clamp(0.875rem, 1.5vw, 1.125rem);
          color: #64748b;
          line-height: 1.6;
        }

        /* Card Styles */
        .product-card {
          background: #ffffff;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
          border-color: rgba(22, 163, 74, 0.2);
        }

        .card-image-box {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-cover;
          transition: transform 0.6s ease;
        }

        .product-card:hover .card-img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 40%);
        }

        .card-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          color: #16a34a;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          backdrop-filter: blur(4px);
        }

        .card-body {
          padding: 1.75rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .card-text {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 1.25rem;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #16a34a;
          transition: gap 0.2s ease;
        }

        /* Carousel Navigation */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-center: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .carousel-btn:hover:not(:disabled) {
          background: #16a34a;
          color: #ffffff;
          border-color: #16a34a;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .carousel-btn.prev { left: -2rem; }
        .carousel-btn.next { right: -2rem; }

        /* Floating Action Buttons (FAB) */
        .fab-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-end;
        }

        .fab {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .fab:hover {
          transform: scale(1.1) translateY(-5px);
          border-radius: 1.25rem;
        }

        .fab-whatsapp {
          background: #25D366;
        }

        .fab-enquiry {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          height: auto;
          width: 3.5rem;
          padding: 1rem 0;
          flex-direction: column;
          gap: 0.5rem;
        }

        .enquiry-text {
          writing-mode: vertical-rl;
          font-weight: 800;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
        }

        .fab-tooltip {
          position: absolute;
          right: 4.5rem;
          background: #0f172a;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }

        .fab:hover .fab-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Buttons */
        .btn-main {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #16a34a;
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 1rem;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.3);
        }

        .btn-main:hover {
          background: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(22, 163, 74, 0.4);
        }

        /* Animations */
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

        @media (max-width: 640px) {
          .carousel-btn {
            display: none;
          }
          .fab-container {
            bottom: 1.5rem;
            right: 1.5rem;
          }
           .products-section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
}
