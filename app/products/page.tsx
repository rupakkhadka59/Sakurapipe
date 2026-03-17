"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "WATER SUPPLY PIPES",
    description: "High-quality PVC pipes for reliable water distribution systems. Resistant to corrosion and built for long-term durability.",
    specs: ["Diameter: 20mm - 315mm", "Pressure: PN6 to PN16", "Length: 6 meters standard"],
    applications: ["Residential water supply", "Commercial buildings", "Municipal water distribution"],
    image: "/images/pipes/waterpipe.jpg",
  },
  {
    id: 2,
    name: "PIPES AND FITTINGS",
    description: "Complete range of pipes with matching fittings for seamless installation and maintenance.",
    specs: ["Multiple diameter options", "Standard & custom fittings", "UV resistant"],
    applications: ["Plumbing systems", "Drainage networks", "Industrial piping"],
    image: "/images/pipes/fitting.jpg",
  },
  {
    id: 3,
    name: "IRRIGATION PIPES",
    description: "Specialized pipes designed for agricultural irrigation systems with high flow capacity.",
    specs: ["Lightweight design", "Flexible installation", "Chemical resistant"],
    applications: ["Farm irrigation", "Greenhouse systems", "Drip/sprinkler systems"],
    image: "/images/pipes/irrigation.jpg",
  },
  {
    id: 4,
    name: "HDPE PIPES",
    description: "High-density polyethylene pipes offering superior strength for demanding applications.",
    specs: ["Diameter: 20mm - 630mm", "High impact resistance", "Flexible & durable"],
    applications: ["Gas distribution", "Water transmission", "Cable protection"],
    image: "/images/pipes/hdpipe.png",
  },
  {
    id: 5,
    name: "Hoses PIPES",
    description: "Flexible and durable hose pipes designed for water delivery, gardening, and industrial applications with high pressure resistance.",
    specs: ["Flexible PVC material", "High pressure rating", "Kink resistant", "UV stabilized"],
    applications: ["Garden watering", "Agricultural spraying", "Industrial fluid transfer", "Construction sites"],
    image: "/images/pipes/hosepipe.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/heroforabout.png"
              alt="Sakura Pipe Products"
              className="w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm uppercase tracking-widest mb-6">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Pipe Solutions
              </h1>
              <p className="text-lg text-white/80">
                Discover our comprehensive range of high-quality pipes and fittings designed for every application. 
                With over 2500+ SKUs, we deliver solutions that meet Nepal&apos;s infrastructure needs.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20" style={{ backgroundColor: "#f0f2f8" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center shadow-lg"><span class="text-4xl">🔧</span></div>';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">PVC / HDPE</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications - Compact Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {product.specs.slice(0, 4).map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                          <span className="w-1 h-1 bg-primary rounded-full shrink-0"></span>
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Need Custom Specifications?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                We offer custom pipe manufacturing tailored to your specific project requirements. 
                Contact our team for specialized solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Our Team →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
