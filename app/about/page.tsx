import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    icon: "✓",
  },
  {
    title: "Customer Focus",
    description: "We work closely with clients to understand their needs and deliver tailored solutions.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description: "Continuously improving our manufacturing processes to deliver better products.",
    icon: "💡",
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly manufacturing practices and durable, long-lasting products.",
    icon: "🌱",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm uppercase tracking-widest mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                A Legacy of Trust
              </h1>
              <p className="text-lg text-white/80">
                Sakura Pipe Udhyog Pvt. Ltd. has been a benchmark of durability and performance 
                in PVC and HDPE pipe manufacturing, serving Nepal&apos;s infrastructure with unwavering quality.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-6xl">🏭</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-6xl">🔧</span>
                    </div>
                  </div>
                  <div className="bg-primary p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center items-center h-32">
                    <h3 className="text-4xl font-bold">10+</h3>
                    <p className="text-sm font-medium text-center mt-1">
                      Years of Manufacturing Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Leading Pipe Manufacturing in Nepal
                </h2>
                <p className="text-gray-600 text-lg">
                  Founded with a mission to empower local infrastructure, we combine modern 
                  manufacturing processes with strict quality controls. Our team ensures every 
                  pipe delivers strength, reliability, and long-term performance.
                </p>
                <p className="text-gray-600">
                  Located in Butwal-08, Rupandehi, our state-of-the-art facility is equipped 
                  with advanced extrusion technology and automated quality control systems. 
                  From residential water networks to industrial cable conduits, Sakura Pipe 
                  delivers solutions trusted by engineers and contractors across the region.
                </p>
                <p className="text-gray-600">
                  Our distribution network reaches every corner of Nepal, from the Terai plains 
                  to the Himalayan foothills, serving construction projects in Kathmandu, 
                  Pokhara, Biratnagar, and beyond.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <h4 className="text-2xl font-bold text-primary">2500+</h4>
                    <p className="text-sm text-gray-600">SKUs in Inventory</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <h4 className="text-2xl font-bold text-primary">1000+</h4>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20" style={{ backgroundColor: "#f0f2f8" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-gray-600">
                Our core values define who we are and guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-2xl mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Milestones
              </h2>
              <p className="text-gray-600">
                A decade of growth, innovation, and serving Nepal&apos;s infrastructure needs.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {milestone.year}
                    </div>
                    {idx !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Partner With Us
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Whether you&apos;re a contractor, engineer, or distributor, we&apos;re here to support 
                your projects with quality pipes and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  View Products →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
