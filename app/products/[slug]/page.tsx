import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import Contact from "@/components/Contact";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const title = decodedSlug.replace(/-/g, " ").toUpperCase();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <Link href="/products" className="inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors mb-12">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Catalog
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32 relative aspect-square rounded-[3rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-12 flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors duration-500"></div>
               
               <p className="text-2xl font-bold text-slate-300 relative z-10">[Product View Placeholder]</p>
            </div>
            
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Premium Infrastructure
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
                  {title}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  High-performance {title.toLowerCase()} engineered by Sakura Pipe for residential, commercial, and industrial applications. Designed to meet strict standards for durability and safety under extreme conditions.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm mb-12 hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">Key Specifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Material Composition: Premium Virgin Polymers</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Standard Lengths: 6m / Custom per specification</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Durability Rating: Highly UV Resistant & Anti-Corrosive</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20 transition-all inline-flex items-center gap-2">
                  Request Bulk Quote <Send className="w-5 h-5" />
                </a>
                <a href="https://wa.me/9779851181195" target="_blank" className="px-8 py-4 bg-[#25D366]/10 text-[#25D366] font-bold rounded-2xl hover:bg-[#25D366] hover:text-white hover:-translate-y-1 transition-all">
                  Contact Sales via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
