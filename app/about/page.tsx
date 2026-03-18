"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Target, Eye, Gem, Building2, UserRound, BriefcaseBusiness, Quote } from "lucide-react";
import { useEffect, useState } from "react";

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
              src="/images/abouthero.jpg"
              alt="About Sakura Pipe"
              className="w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/60 to-transparent"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto opacity-0 animate-slide-in-down">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm uppercase tracking-widest mb-6">
                About Sakura Pipes
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                Nepal&apos;s leading pipes and fittings company
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                A legacy of growth, innovation, and quality-driven manufacturing built to serve Nepal with reliable piping and water solution systems.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section 
          id="who-we-are" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
            visibleSections['who-we-are'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Image Grid */}
              <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
                visibleSections['who-we-are'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100 group">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl">🏭</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
                    <img
                      src="/images/heroforabout.png"
                      alt="Sakura Pipe Factory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg relative h-40 group">
                    <img
                      src="/images/heroforabout.png"
                      alt="Sakura Pipe Factory"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className={`space-y-6 transition-all duration-1000 delay-500 ${
                visibleSections['who-we-are'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}>
                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
                  Who We Are
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] text-gray-900">
                  Our journey to Nepal&apos;s top pipes and fittings company
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded with a mission to empower local infrastructure, we combine modern 
                    manufacturing processes with strict quality controls. Our team ensures every 
                    pipe delivers strength, reliability, and long-term performance.
                  </p>
                  <p>
                    Located in Butwal-08, Rupandehi, our state-of-the-art facility is equipped 
                    with advanced extrusion technology and automated quality control systems. 
                    From residential water networks to industrial cable conduits, Sakura Pipe 
                    delivers solutions trusted by engineers and contractors across the region.
                  </p>
                  <p>
                    Our distribution network reaches every corner of Nepal, from the Terai plains 
                    to the Himalayan foothills, serving construction projects in Kathmandu, 
                    Pokhara, Biratnagar, and beyond.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                    <h4 className="text-3xl font-black text-green-600">2500+</h4>
                    <p className="text-sm text-gray-600 font-medium">SKUs in Inventory</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 text-center shadow-sm">
                    <h4 className="text-3xl font-black text-green-600">1000+</h4>
                    <p className="text-sm text-gray-600 font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section 
          id="our-values" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
            visibleSections['our-values'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
              visibleSections['our-values'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] text-gray-900 mb-4">
                Built on long-term commitment and respect
              </h2>
              <p className="text-gray-600 text-lg">
                Our core values define who we are and guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                      visibleSections['our-values'] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section 
          id="timeline" 
          data-animate
          className={`py-20 bg-gradient-to-br from-gray-50 to-white transition-all duration-1000 ${
            visibleSections['timeline'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
              visibleSections['timeline'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}>
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold rounded-full text-sm uppercase tracking-wide mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.03em] text-gray-900 mb-4">
                A decade of growth, innovation, and serving Nepal&apos;s infrastructure needs
              </h2>
              <p className="text-gray-600 text-lg">
                From our founding to becoming a market leader, every milestone marks our commitment to quality.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, idx) => (
                <div 
                  key={idx} 
                  className={`group flex gap-6 mb-8 last:mb-0 transition-all duration-1000 cursor-pointer ${
                    visibleSections['timeline'] 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-20'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-green-600/50 group-hover:shadow-xl">
                      {milestone.year}
                    </div>
                    {idx !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-green-200 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-2xl flex-1 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:border-green-200 group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">{milestone.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta" 
          data-animate
          className={`py-20 transition-all duration-1000 ${
            visibleSections['cta'] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className={`bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl transition-all duration-1000 delay-500 ${
              visibleSections['cta'] 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}>
              <div className="mx-auto max-w-4xl">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Quote className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Partner With Us
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                  Whether you&apos;re a contractor, engineer, or distributor, we&apos;re here to support 
                  your projects with quality pipes and reliable service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    View Products →
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Get in Touch
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
