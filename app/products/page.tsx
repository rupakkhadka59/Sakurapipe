"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "WATER SUPPLY PIPES",
    description: "High-quality PVC pipes for reliable water distribution systems. Resistant to corrosion and built for long-term durability.",
    specs: ["Diameter: 20mm - 315mm", "Pressure: PN6 to PN16", "Length: 6 meters standard"],
    applications: ["Residential water supply", "Commercial buildings", "Municipal water distribution"],
    image: "/images/pipes/waterpipe.jpg",
  },
  {
    id: 2,
    name: "PIPES AND FITTINGS",
    description: "Complete range of pipes with matching fittings for seamless installation and maintenance.",
    specs: ["Multiple diameter options", "Standard & custom fittings", "UV resistant"],
    applications: ["Plumbing systems", "Drainage networks", "Industrial piping"],
    image: "/images/pipes/fitting.jpg",
  },
  {
    id: 3,
    name: "IRRIGATION PIPES",
    description: "Specialized pipes designed for agricultural irrigation systems with high flow capacity.",
    specs: ["Lightweight design", "Flexible installation", "Chemical resistant"],
    applications: ["Farm irrigation", "Greenhouse systems", "Drip/sprinkler systems"],
    image: "/images/pipes/irrigation.jpg",
  },
  {
    id: 4,
    name: "HDPE PIPES",
    description: "High-density polyethylene pipes offering superior strength for demanding applications.",
    specs: ["Diameter: 20mm - 630mm", "High impact resistance", "Flexible & durable"],
    applications: ["Gas distribution", "Water transmission", "Cable protection"],
    image: "/images/pipes/hdpipe.png",
  },
  {
    id: 5,
    name: "Hoses PIPES",
    description: "Flexible and durable hose pipes designed for water delivery, gardening, and industrial applications with high pressure resistance.",
    specs: ["Flexible PVC material", "High pressure rating", "Kink resistant", "UV stabilized"],
    applications: ["Garden watering", "Agricultural spraying", "Industrial fluid transfer", "Construction sites"],
    image: "/images/pipes/hosepipe.png",
  },
];

export default function ProductsPage() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-animate]');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        const sectionId = section.id;
        
        if (isVisible && !visibleSections[sectionId]) {
          setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/heroforabout.png"
              alt="Sakura Pipe Products"
              className="w-full h-full object-cover"
            />
            {/* Professional Green Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/60 to-transparent"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto opacity-0 animate-slide-in-down">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm uppercase tracking-widest mb-6">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                Our Products
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                Premium Pipe Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Discover our comprehensive range of high-quality pipes and fittings designed for every application. 
                With over 2500+ SKUs, we deliver solutions that meet Nepal&apos;s infrastructure needs.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section 
          id="products-grid" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
            visibleSections['products-grid'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
              visibleSections['products-grid'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Product Catalog
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] text-gray-900 mb-4">
                Complete Pipe Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                From residential to industrial applications, we provide comprehensive piping solutions for every need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    visibleSections['products-grid'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><span class="text-4xl">🔧</span></div>';
                      }}
                    />
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-xs font-medium text-green-600 uppercase tracking-wider">PVC / HDPE</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications - Compact Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.specs.slice(0, 4).map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg group-hover:bg-green-50 group-hover:text-green-700 transition-colors duration-300">
                          <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0 group-hover:bg-green-500 transition-colors duration-300"></span>
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Applications */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs text-gray-500 font-medium mb-2">Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 2).map((app, idx) => (
                          <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{product.applications.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta-section" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
            visibleSections['cta-section'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className={`bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl transition-all duration-1000 delay-500 ${
              visibleSections['cta-section'] 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}>
              <div className="mx-auto max-w-4xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Need Custom Specifications?
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  We offer custom pipe manufacturing tailored to your specific project requirements. 
                  Contact our team for specialized solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Contact Our Team →
                  </a>
                  <a
                    href="https://wa.me/9779851181195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    WhatsApp Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Animation Styles */}
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-down {
          animation: slideInDown 1s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </>
  );
}
