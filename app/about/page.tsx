"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Target, Eye, Gem, ShieldCheck, Factory } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2014", title: "Inception in Butwal", description: "Established our first manufacturing unit with a vision to revolutionize Nepal's fluid transport infrastructure." },
  { year: "2016", title: "Network Expansion", description: "Scaled production capacity and expanded our distribution network across Western Nepal." },
  { year: "2019", title: "NS Certification", description: "Awarded the Nepal Standard (NS) certification, cementing our commitment to uncompromised quality." },
  { year: "2022", title: "National Projects", description: "Successfully tendered and supplied HDPE pipes for massive national water supply schemes." },
  { year: "2024", title: "Market Leadership", description: "Recognized as a leading manufacturing powerhouse with over 2,500 SKUs and a presence in 77 districts." },
];

const values = [
  { title: "Quality First", desc: "Rigorous testing protocols ensure zero-defect delivery.", icon: ShieldCheck, color: "text-green-500" },
  { title: "Client Focus", desc: "Customized solutions engineered for specific project needs.", icon: Target, color: "text-blue-500" },
  { title: "Innovation", desc: "Continuous investment in advanced extrusion technology.", icon: Factory, color: "text-red-500" },
  { title: "Sustainability", desc: "Eco-conscious manufacturing serving long-term infrastructure.", icon: Gem, color: "text-emerald-500" },
];

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.fromTo(el, 
          { y: 60, opacity: 0 },
          {
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out"
          }
        );
      });
      
      gsap.utils.toArray<HTMLElement>(".reveal-timeline").forEach((el, i) => {
        gsap.fromTo(el, 
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
            x: 0, opacity: 1, duration: 0.8, ease: "power2.out"
          }
        );
      });
    }, mainRef);

    window.addEventListener('load', () => ScrollTrigger.refresh());
    return () => { ctx.revert(); clearTimeout(timer); window.removeEventListener('load', () => ScrollTrigger.refresh()); };
  }, []);

  return (
    <>
      <Header />
      <main ref={mainRef} className="min-h-screen bg-[#fafafa] selection:bg-green-500 selection:text-white pb-20">
        
        {/* Modern Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <Image
              src="/images/abouthero.jpg"
              alt="Sakura Pipe Industry"
              fill
              className="object-cover opacity-40 mix-blend-overlay grayscale-[0.2]"
              priority
            />
          </motion.div>
          
          {/* Huge Typo Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none overflow-hidden">
            <h1 className="text-[17vw] xl:text-[15vw] font-black text-white/[0.03] whitespace-nowrap tracking-tighter">
              SAKURA PIPES
            </h1>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Our Heritage</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] mb-8">
                Shaping Nepal's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Infrastructure</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                A legacy of engineering excellence. We manufacture high-performance piping systems that form the veins of a developing nation.
              </p>
            </motion.div>
          </div>
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-10"></div>
        </section>

        {/* The Bento Grid: Mission, Vision & Stats */}
        <section className="py-24 relative z-20 -mt-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
              {/* Mission Bento */}
              <div className="reveal-up md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-green-200 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Our Mission</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      To engineer and deliver the most resilient, high-performance piping solutions that empower Nepal's water supply and industrial infrastructure. We ensure that every drop is protected and every structure stands the test of time through uncompromising manufacturing standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Bento */}
              <div className="reveal-up md:col-span-1 lg:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden group border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-3">Our Vision</h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    To be the unquestioned leader in Nepal’s polymer manufacturing sector, driving community empowerment and sustainable development through technological innovation.
                  </p>
                </div>
              </div>

              {/* Stat 1 */}
              <div className="reveal-up col-span-1 border border-slate-200 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform duration-500">
                <h4 className="text-5xl font-black text-slate-900 mb-2">10<span className="text-green-500">+</span></h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Active</p>
              </div>

              {/* Stat 2 */}
              <div className="reveal-up col-span-1 border border-slate-200 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform duration-500">
                <h4 className="text-5xl font-black text-slate-900 mb-2">77</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">District Reach</p>
              </div>

            </div>
          </div>
        </section>

        {/* Modern Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-4">Core Principles</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">The Sakura Standard</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="reveal-up border border-slate-200 bg-white p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${v.color}`}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternating Timeline Section */}
        <section className="py-32 bg-slate-950 text-white overflow-hidden relative rounded-t-[3rem]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-24 reveal-up">
              <h2 className="text-sm font-bold text-emerald-400 tracking-[0.2em] uppercase mb-4">The Journey</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight">A Decade of Evolution</h3>
            </div>

            <div className="relative">
              {/* Glowing Center Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent transform md:-translate-x-1/2"></div>
              
              <div className="space-y-16">
                {milestones.map((m, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className={`reveal-timeline relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-green-500 transform -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                      
                      {/* Content Box */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full`}>
                        <div className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                          <span className="inline-block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500 mb-4 tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">{m.year}</span>
                          <h4 className="text-2xl font-bold text-white mb-2">{m.title}</h4>
                          <p className="text-slate-400 leading-relaxed text-sm md:text-base">{m.description}</p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
