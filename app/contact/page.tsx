"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from "lucide-react";

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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50/50 pt-20">
        {/* Hero Section - Professional Mesh Gradient Style */}
        <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
            <div className="h-96 w-96 rounded-full bg-white"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-10">
            <div className="h-64 w-64 rounded-full bg-accent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/10">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                Let's Build the <span className="text-green-400">Future</span> Together
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                Have a project in mind or need expert advice on our piping solutions? 
                Our dedicated team is here to provide you with the best industry support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-24 -mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Contact Details (Lg: 5 columns) */}
              <div className="lg:col-span-5 space-y-8">
                <div className="bg-white p-2 rounded-3xl shadow-xl shadow-slate-200/50">
                   {/* Maps Integration */}
                  <div className="rounded-2xl overflow-hidden h-72 relative group">
                    <iframe
                      src="https://maps.google.com/maps?q=27.6914862,83.4684243&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="grayscale-[0.2] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Cards */}
                  {[
                    { icon: MapPin, title: "Our Location", content: "Butwal-08, Rupandehi, Nepal", sub: "Near Bhatbhateni", color: "bg-blue-50 text-blue-600" },
                    { icon: Phone, title: "Call Us", content: "+977 071-531659", sub: "Available Sun - Fri", color: "bg-green-50 text-green-600" },
                    { icon: Mail, title: "Email Us", content: "sakurapipe@gmail.com", sub: "Response within 24h", color: "bg-purple-50 text-purple-600" },
                    { icon: Clock, title: "Work Hours", content: "9:00 AM - 6:00 PM", sub: "Closed on Saturdays", color: "bg-orange-50 text-orange-600" },
                  ].map((item, id) => (
                    <div key={id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-700 text-sm font-medium">{item.content}</p>
                      <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Premium Form (Lg: 7 columns) */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
                  {/* Form Header */}
                  <div className="mb-10 relative z-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-3">
                      Send an Enquiry
                    </h2>
                    <p className="text-slate-500">
                      Fill out the form below and our sales representative will get back to you shortly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500 mb-8">Thank you for reaching out. We will contact you soon.</p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-secondary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                      >
                        Send another message <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 placeholder:text-slate-400"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 placeholder:text-slate-400"
                            placeholder="Sakura Pipe Udhyog"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 placeholder:text-slate-400"
                            placeholder="+977 98XXXXXXXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 placeholder:text-slate-400"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="product" className="text-sm font-bold text-slate-700 ml-1">
                          Product Interest
                        </label>
                        <select
                          id="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
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

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                          placeholder="Tell us about your requirements..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary text-white font-black py-5 rounded-2xl hover:bg-secondary/90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-secondary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Enquiry 
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
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
