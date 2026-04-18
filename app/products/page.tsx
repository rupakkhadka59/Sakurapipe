"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowUpRight, Zap, Droplets, Shovel, Database } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "WATER SUPPLY PIPES",
    category: "PVC",
    description: "High-quality PVC pipes for reliable water distribution systems. Resistant to corrosion and built for long-term durability.",
    specs: ["Diameter: 20mm - 315mm", "Pressure: PN6 to PN16", "Length: 6 meters standard"],
    applications: ["Residential water supply", "Commercial buildings", "Municipal water distribution"],
    image: "/images/pipes/waterpipe.jpg",
    icon: Droplets,
  },
  {
    id: 2,
    name: "PIPES AND FITTINGS",
    category: "Fittings",
    description: "Complete range of pipes with matching fittings for seamless installation and maintenance.",
    specs: ["Multiple diameter options", "Standard & custom fittings", "UV resistant"],
    applications: ["Plumbing systems", "Drainage networks", "Industrial piping"],
    image: "/images/pipes/fitting.jpg",
    icon: Zap,
  },
  {
    id: 3,
    name: "IRRIGATION PIPES",
    category: "Agriculture",
    description: "Specialized pipes designed for agricultural irrigation systems with high flow capacity.",
    specs: ["Lightweight design", "Flexible installation", "Chemical resistant"],
    applications: ["Farm irrigation", "Greenhouse systems", "Drip/sprinkler systems"],
    image: "/images/pipes/irrigation.jpg",
    icon: Shovel,
  },
  {
    id: 4,
    name: "HDPE PIPES",
    category: "HDPE",
    description: "High-density polyethylene pipes offering superior strength for demanding applications.",
    specs: ["Diameter: 20mm - 630mm", "High impact resistance", "Flexible & durable"],
    applications: ["Gas distribution", "Water transmission", "Cable protection"],
    image: "/images/pipes/hdpipe.png",
    icon: Droplets,
  },
  {
    id: 5,
    name: "HOSE PIPES",
    category: "Flexible",
    description: "Flexible and durable hose pipes designed for water delivery, gardening, and industrial applications with high pressure resistance.",
    specs: ["Flexible PVC material", "High pressure rating", "Kink resistant", "UV stabilized"],
    applications: ["Garden watering", "Agricultural spraying", "Industrial fluid transfer", "Construction sites"],
    image: "/images/pipes/hosepipe.png",
    icon: Droplets,
  },
  {
    id: 6,
    name: "SAKURA WATER TANKS",
    category: "Water Tanks",
    description: "Premium multi-layer UV stabilized water storage tanks ensuring safe, hygienic, and long-lasting water storage for residential and commercial use.",
    specs: ["Capacity: 500L - 5000L", "UV Stabilized", "Food-grade material", "Multi-layer protection"],
    applications: ["Residential water storage", "Commercial buildings", "Industrial storage", "Agricultural use"],
    image: "/images/pipes/watertank.png",
    icon: Database,
  },
];

const categories = ["All", "PVC", "HDPE", "Fittings", "Agriculture", "Flexible", "Water Tanks"];

export default function ProductsPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Force a small delay to ensure layout is stable
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(".hero-content > *", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Product cards reveal
      gsap.fromTo(".product-card", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, mainRef);

    // Additional Refresh on window load to handle image sizes
    window.addEventListener('load', () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      clearTimeout(timer);
      window.removeEventListener('load', () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <>
      <Header />
      <main ref={mainRef} className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/heroforabout.png"
              alt="Sakura Pipe Products"
              className="w-full h-full object-cover brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl hero-content">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-600/20 backdrop-blur-xl rounded-full text-xs font-bold text-green-300 uppercase tracking-widest mb-6 border border-green-500/30">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Product Catalog 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                Engineered for <br />
                <span className="text-red-500">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
                Discover our comprehensive range of high-performance piping solutions 
                trusted by engineers across Nepal for over a decade.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search - sticky top adjusted to 0 for smoother transition when header hides */}
        <section className="sticky top-0 z-30 py-6 bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
                <Filter className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat 
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/20" 
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-gray-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 products-grid">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      layout
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={product.id}
                      className="product-card group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] premium-shadow"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Category Tag */}
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-gray-900 uppercase">
                          {product.category}
                        </div>
                        
                        {/* Floating Action */}
                        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-xl">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {product.specs.slice(0, 2).map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-2xl group-hover:bg-green-50/50 transition-colors">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                              <span className="text-[11px] font-bold text-gray-700 line-clamp-1">{spec}</span>
                            </div>
                          ))}
                        </div>

                        {/* Sticky Bottom Actions */}
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                          <Link 
                            href={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                            className="flex-1 px-6 py-3 bg-gray-900 text-center text-white text-xs font-black rounded-2xl hover:bg-green-600 transition-all uppercase tracking-widest inline-block"
                          >
                            Technical Data
                          </Link>
                          <a 
                            href="https://wa.me/9779851181195" 
                            target="_blank"
                            className="w-12 h-12 bg-[#E7F9EE] flex items-center justify-center text-[#25D366] rounded-2xl hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                          >
                            <WhatsAppIcon className="w-5 h-5 fill-current" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-40">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Expert Advice CTA */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-red-500/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6">Need expert guidance for your project?</h2>
                  <p className="text-lg text-white/80 mb-8 max-w-xl">
                    Our technical team provides customized solutions for large-scale infrastructure and industrial requirements.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2">
                       Request a Quote <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 bg-red-800/40 border border-white/10 backdrop-blur-md font-bold rounded-full hover:bg-red-800/60 transition-all">
                      Call Support
                    </button>
                  </div>
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-6">
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/10">
                    <p className="text-3xl font-black mb-2">24/7</p>
                    <p className="text-sm text-white/60 font-medium">Technical Support</p>
                  </div>
                  <div className="p-8 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/10">
                    <p className="text-3xl font-black mb-2">Free</p>
                    <p className="text-sm text-white/60 font-medium">Site Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
