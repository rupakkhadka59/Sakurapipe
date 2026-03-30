"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, Target, Eye, Gem, Quote, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2014", title: "Founded", description: "Started operations in Butwal with a vision to serve Nepal's infrastructure needs." },
  { year: "2016", title: "Expansion", description: "Added HDPE pipe manufacturing line and expanded distribution network." },
  { year: "2019", title: "Quality Certification", description: "Achieved Nepal Bureau of Standards certification for all product lines." },
  { year: "2022", title: "Major Projects", description: "Supplied pipes for government water supply schemes across 10 districts." },
  { year: "2024", title: "Market Leader", description: "Became one of the top 3 pipe manufacturers in Western Nepal region." },
];

const values = [
  {
    title: "Quality First",
    description: "Every pipe undergoes rigorous testing before leaving our facility. We never compromise on quality.",
    icon: CheckCircle2,
  },
  {
    title: "Customer Focus",
    description: "We work closely with clients to understand their needs and deliver tailored solutions.",
    icon: Target,
  },
  {
    title: "Innovation",
    description: "Continuously improving our manufacturing processes to deliver better products.",
    icon: Eye,
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly manufacturing practices and durable, long-lasting products.",
    icon: Gem,
  },
];

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force a small delay to ensure Next.js hydration and layout are stable
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(".hero-content > *", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      // Section Reveals
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      });

      // Values Cards
      gsap.fromTo(".value-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );

      // Timeline Items
      gsap.fromTo(".timeline-item", 
        { x: -30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/abouthero.jpg"
              alt="About Sakura Pipe"
              className="w-full h-full object-cover transition-transform duration-1000"
            />
            {/* Subtle dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl hero-content">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-green-300 uppercase tracking-[0.2em] mb-6 border border-white/20"
              >
                Our Legacy & Vision
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                Building <span className="text-red-500">Nepal's</span> <br /> 
                Water Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
                A legacy of growth, innovation, and quality-driven manufacturing built to serve Nepal with reliable piping and water solution systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 flex items-center gap-2 group">
                  Our Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Story Section */}
        <section className="reveal-section py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="/images/heroforabout.png" alt="Factory" className="w-full h-full object-cover" />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-gray-900">10+</p>
                      <p className="text-sm text-gray-500">Years of Excellence</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm">Our Story</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Quality that flows through <br />
                    the heart of Nepal
                  </h3>
                </div>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 2014, Sakura Pipe has grown from a local manufacturer in Butwal to a 
                    regional leader in piping solutions. We believe that every drop of water counts, 
                    and every project deserves the highest standard of infrastructure.
                  </p>
                  <p>
                    Our facility uses advanced extrusion technology to produce HDPE, PVC, and Hose pipes 
                    that withstand the toughest terrains of Nepal.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <p className="text-4xl font-black text-green-600">2.5k+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">SKU Inventory</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-green-600">77</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">District Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Filling the Gap) */}
        <section className="reveal-section py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-10 md:p-14 bg-green-50 rounded-[3rem] border border-green-100 hover:bg-green-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-all duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-white transition-colors">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-green-50 transition-colors">
                  To deliver high-performance, sustainable piping solutions that empower Nepal's infrastructure, ensuring every drop of water reaches its destination through quality and reliability.
                </p>
              </div>

              <div className="group p-10 md:p-14 bg-red-50 rounded-[3rem] border border-red-100 hover:bg-red-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-all duration-500">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-white transition-colors">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-red-50 transition-colors">
                  To be the most trusted name in pipe manufacturing in Nepal, recognized for innovation, community empowerment, and our commitment to building a resilient nation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="reveal-section py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Our Values</h2>
              <h3 className="text-4xl font-black text-gray-900 mb-6">Built on Foundation of Trust</h3>
              <p className="text-gray-600 text-lg">We don't just make pipes; we build the channels of development that empower communities across Nepal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 values-grid">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="value-card group p-10 bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h4>
                    <p className="text-gray-500 leading-relaxed text-sm">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="reveal-section py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
              <div className="sticky top-32 h-fit">
                <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">The Journey</h2>
                <h3 className="text-4xl font-black text-gray-900 mb-6">A Decade of Evolution</h3>
                <p className="text-gray-600 text-lg mb-8">
                  From humble beginnings in Butwal to serving national-level projects, 
                  witness our growth over the years.
                </p>
                <div className="w-20 h-1.5 bg-red-600 rounded-full"></div>
              </div>

              <div className="timeline-container space-y-12 relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
                {milestones.map((m, i) => (
                  <div key={i} className="timeline-item relative pl-0 md:pl-20 group">
                    {/* Year Bubble */}
                    <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-green-600 flex items-center justify-center text-green-600 font-black text-sm z-10 hidden md:flex group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      {m.year}
                    </div>
                    
                    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-green-100 transition-all duration-500">
                      <span className="inline-block md:hidden bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">{m.year}</span>
                      <h4 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{m.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Contact />
      <Footer />
    </>
  );
}

function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
