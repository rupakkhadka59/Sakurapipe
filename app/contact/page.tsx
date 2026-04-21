"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ChevronRight, MessageSquare, ShieldCheck, Globe } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      product: "",
      message: "",
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa]">
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950 pt-32 pb-24">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-3xl"
              >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-secondary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md border border-white/10">
                  <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping"></span>
                  Contact Our Experts
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tight">
                  Let's Connect <br />
                  <span className="text-secondary">Your Vision.</span>
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-xl text-white/60 leading-relaxed max-w-xl mb-12 font-medium">
                  Whether you're planning a large-scale infrastructure project or need specialized piping solutions, our engineering team is ready to assist.
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 text-secondary">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Certified Quality</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 text-accent">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold">Pan-Nepal Support</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hidden lg:block relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-[3rem] blur-3xl opacity-20 -rotate-6"></div>
                <div className="relative glass-dark p-8 rounded-[3rem] border border-white/10 backdrop-blur-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-8">
                       <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                          <MessageSquare className="text-secondary mb-4 w-8 h-8" />
                          <h4 className="text-white font-bold text-lg">Live Consultation</h4>
                          <p className="text-white/40 text-xs mt-2 leading-relaxed">Expert advice for your technical requirements.</p>
                       </div>
                       <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                          <Phone className="text-accent mb-4 w-8 h-8" />
                          <h4 className="text-white font-bold text-lg">Direct Line</h4>
                          <p className="text-white/40 text-xs mt-2 leading-relaxed">Skip the queue with our priority support.</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center">
                          <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
                            <Send className="w-8 h-8" />
                          </div>
                          <h4 className="text-white font-bold text-xl leading-tight">Fast Response <br />Guaranteed</h4>
                          <p className="text-white/40 text-xs mt-4">We aim to respond to all enquiries within 24 business hours.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interaction Section */}
        <section className="py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
                >
                  <div className="rounded-[2rem] overflow-hidden h-80 relative group">
                    <iframe
                      src="https://maps.google.com/maps?q=27.6914862,83.4684243&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="grayscale-[0.4] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2rem]"></div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: MapPin, title: "Our Headquarters", content: "Butwal-08, Rupandehi, Nepal", sub: "Sakura Industrial Complex", color: "text-secondary bg-secondary/5 border-secondary/10" },
                    { icon: Phone, title: "Phone Support", content: "+977-071-531659", sub: "Sun-Fri | 9AM-6PM", color: "text-accent bg-accent/5 border-accent/10" },
                    { icon: Mail, title: "Email Enquiry", content: "info@sakurapipe.com.np", sub: "24/7 Digital Support", color: "text-primary bg-primary/5 border-primary/10" },
                    { icon: Clock, title: "Working Hours", content: "Sun - Fri", content2: "9:00 - 6:00", color: "text-slate-600 bg-slate-50 border-slate-100" },
                  ].map((item, id) => (
                    <motion.div 
                      key={id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: id * 0.1 }}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-white transition-all duration-500 group"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">{item.sub}</p>
                      <p className="text-slate-900 font-bold">{item.content}</p>
                      {item.content2 && <p className="text-slate-900 font-bold">{item.content2}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-6 md:p-12 rounded-[3.5rem] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="mb-12 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px w-8 bg-secondary"></div>
                      <span className="text-secondary font-bold text-xs uppercase tracking-widest">Enquiry Form</span>
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-lg">
                      Fill out the details below and our team will get back to you with a personalized response.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="py-16 text-center"
                      >
                        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-50/50">
                          <Send className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h3>
                        <p className="text-slate-500 mb-10 text-lg font-medium">One of our representatives will contact you shortly.</p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-black/20"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSubmit} 
                        className="space-y-6 relative z-10"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <label htmlFor="name" className="text-sm font-bold text-slate-900 ml-1">
                              Full Name <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="space-y-3">
                            <label htmlFor="company" className="text-sm font-bold text-slate-900 ml-1">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                              placeholder="Company"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <label htmlFor="phone" className="text-sm font-bold text-slate-900 ml-1">
                              Phone Number <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="tel"
                              id="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                              placeholder="+977"
                            />
                          </div>
                          <div className="space-y-3">
                            <label htmlFor="email" className="text-sm font-bold text-slate-900 ml-1">
                              Email Address <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 font-medium"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="product" className="text-sm font-bold text-slate-900 ml-1">
                            Product Interest
                          </label>
                          <select
                            id="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 font-medium appearance-none cursor-pointer"
                          >
                            <option value="">Select a product</option>
                            <option value="water-supply">Water Supply Pipes</option>
                            <option value="fittings">Pipes and Fittings</option>
                            <option value="irrigation">Irrigation Pipes</option>
                            <option value="hdpe">HDPE Pipes</option>
                            <option value="column">Column Pipes</option>
                            <option value="sewerage">Sewerage Pipes</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-3">
                          <label htmlFor="message" className="text-sm font-bold text-slate-900 ml-1">
                            Message Details
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-4 focus:ring-secondary/5 focus:shadow-xl transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none font-medium"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-slate-950 text-secondary font-black py-4 rounded-2xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg mt-4 group"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              Send Message 
                              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
