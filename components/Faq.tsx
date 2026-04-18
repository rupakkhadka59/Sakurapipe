"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you manufacture custom pipe specifications?",
    answer: "Yes, we offer customized piping solutions tailored to specific project requirements, including custom pressure ratings and lengths. Please contact our technical team with your engineering blueprints for a consultation."
  },
  {
    question: "What is your delivery geographic range within Nepal?",
    answer: "We proudly supply to all 77 districts of Nepal. With our robust logistics network established over a decade, we ensure timely and safe delivery directly to your construction sites or municipal warehouses."
  },
  {
    question: "Are your products NS Certified?",
    answer: "Absolutely. All our primary manufacturing runs strictly adhere to Nepal Standard (NS) guidelines, specifically NS 40 for water supply systems, ensuring uncompromised safety and durability."
  },
  {
    question: "What is the lifespan of Sakura HDPE pipes?",
    answer: "Our HDPE pipes are manufactured using premium virgin polymers and high-grade UV stabilizers, giving them an expected operational lifespan of over 50 years under standard environmental conditions."
  },
  {
    question: "Do you supply to individual homeowners or only B2B?",
    answer: "While we specialize in large-scale B2B municipal and industrial supplies, homeowners or smaller contractors can purchase our products through our extensive network of authorized regional distributors and hardware stores."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-green-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm border border-slate-100">
            <HelpCircle className="w-4 h-4 text-green-500" /> Support center
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 text-lg">Everything you need to know about our products, manufacturing, and logistics.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-[1.5rem] transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-green-500 bg-white shadow-xl shadow-green-500/10" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 ${isOpen ? "text-green-700" : "text-green-600"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-green-100 text-green-600" : "bg-slate-50 text-slate-400 shadow-sm border border-slate-100"
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed relative">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
