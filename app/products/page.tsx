import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "WATER SUPPLY PIPES",
    description: "High-quality PVC pipes for reliable water distribution systems. Resistant to corrosion and built for long-term durability.",
    specs: ["Diameter: 20mm - 315mm", "Pressure: PN6 to PN16", "Length: 6 meters standard"],
    applications: ["Residential water supply", "Commercial buildings", "Municipal water distribution"],
    image: "/images/pipes/water-supply.png",
  },
  {
    id: 2,
    name: "PIPES AND FITTINGS",
    description: "Complete range of pipes with matching fittings for seamless installation and maintenance.",
    specs: ["Multiple diameter options", "Standard & custom fittings", "UV resistant"],
    applications: ["Plumbing systems", "Drainage networks", "Industrial piping"],
    image: "/images/pipes/fittings.png",
  },
  {
    id: 3,
    name: "IRRIGATION PIPES",
    description: "Specialized pipes designed for agricultural irrigation systems with high flow capacity.",
    specs: ["Lightweight design", "Flexible installation", "Chemical resistant"],
    applications: ["Farm irrigation", "Greenhouse systems", "Drip/sprinkler systems"],
    image: "/images/pipes/irrigation.png",
  },
  {
    id: 4,
    name: "HDPE PIPES",
    description: "High-density polyethylene pipes offering superior strength for demanding applications.",
    specs: ["Diameter: 20mm - 630mm", "High impact resistance", "Flexible & durable"],
    applications: ["Gas distribution", "Water transmission", "Cable protection"],
    image: "/images/pipes/hdpe.png",
  },
  {
    id: 5,
    name: "COLUMN PIPES",
    description: "Vertical pumping pipes designed for borewell and submersible pump installations.",
    specs: ["Threaded joints", "High tensile strength", "Leak-proof design"],
    applications: ["Borewell systems", "Submersible pumps", "Deep well extraction"],
    image: "/images/pipes/column.png",
  },
  {
    id: 6,
    name: "SEWERAGE PIPES",
    description: "Heavy-duty pipes for sewage and wastewater management systems.",
    specs: ["Corrosion resistant", "Large diameter options", "Smooth inner surface"],
    applications: ["Municipal sewer lines", "Industrial drainage", "Septic systems"],
    image: "/images/pipes/sewer.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="h-56 bg-gray-100 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-inner">
                      <span className="text-5xl">🔧</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Specifications:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Applications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
                      Get Quote
                    </button>
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
