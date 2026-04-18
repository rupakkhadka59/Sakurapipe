"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ChevronRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", company: "", phone: "", email: "", location: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/10">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            Connect With Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Ready to Start Your <span className="text-secondary italic">Project?</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you have a specific inquiry or just want to learn more about our
            industry-leading piping solutions, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* info + map */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {[
                { icon: MapPin, title: "Our Location", content: "Butwal-08, Rupandehi, Nepal", sub: "Near Bhatbhateni", color: "bg-blue-50 text-blue-600 shadow-blue-100" },
                { icon: Phone, title: "Call Us", content: "071-531659", sub: "Sun - Fri: 9AM - 6PM", color: "bg-green-50 text-green-600 shadow-green-100" },
                { icon: Mail, title: "Email Us", content: "info@sakurapipe.com.np", sub: "Typical response: 2h", color: "bg-purple-50 text-purple-600 shadow-purple-100" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-700 font-medium">{item.content}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden h-64 shadow-2xl shadow-slate-200 border-4 border-white relative group">
              <iframe
                src="https://maps.google.com/maps?q=27.6914862,83.4684243&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale-[0.4] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 mb-8">Your enquiry has been received. Our team will get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-secondary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                  >
                    Resubmit a Query <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-slate-900 mb-8">Send an Enquiry</h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name*</label>
                      <input
                        required
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
                        placeholder="Sakura Pipe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Contact No*</label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
                        placeholder="+977"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email*</label>
                      <input
                        required
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label htmlFor="location" className="text-sm font-bold text-slate-700 ml-1">Location</label>
                      <input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900"
                        placeholder="Butwal, Nepal"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-slate-900 resize-none"
                        placeholder="Describe your requirements..."
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary text-white font-black py-5 rounded-2xl hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Query
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
