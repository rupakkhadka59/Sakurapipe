"use client";

import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajeev Shrestha",
    role: "Chief Engineer",
    company: "Butwal Municipality",
    quote: "Sakura Pipe has been our primary supplier for the city's water infrastructure projects. Their HDPE pipes are incredibly durable and meet all Nepal Standard (NS) requirements perfectly. Highly recommended.",
    rating: 5,
  },
  {
    name: "Bikash Thapa",
    role: "Lead Contractor",
    company: "Lumbini Construction",
    quote: "We've used Sakura's PVC pipes for over 5 years. Their delivery is always on time, and the guaranteed quality of their virgin polymer pipes reduces our long-term structural maintenance costs significantly.",
    rating: 5,
  },
  {
    name: "Anil Gurung",
    role: "Project Manager",
    company: "Pokhara Hydropower Ltd.",
    quote: "When it comes to high-pressure resistance and industrial-grade strength, Sakura's products never disappoint. Their technical support team in Rupandehi is also exceptionally responsive and helpful.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm border border-slate-200">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Trusted by Engineers</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">See what leading contractors and municipality buyers across Nepal have to say about our premium piping solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card bg-slate-50 p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 group-hover:text-green-100 transition-colors duration-500 rotate-180" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium italic">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 relative z-10 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#127B40] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-green-600/30">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}, <br/><span className="text-[#3A3B8C] font-bold">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
