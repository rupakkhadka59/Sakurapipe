import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "PVC Pipes",
      description: "High-quality Unplasticized Polyvinyl Chloride pipes for plumbing and drainage systems. Lightweight, durable, and corrosion-resistant.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      name: "HDPE Pipes",
      description: "High-Density Polyethylene pipes built for high-pressure water mains and industrial applications. Exceptional flexibility and strength.",
      icon: (
        <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Irrigation Pipes",
      description: "Specialized piping solutions tailored for agricultural needs. Ensures efficient water distribution and minimal waste.",
      icon: (
        <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Construction Pipes",
      description: "Heavy-duty pipes designed to withstand the tough environments of construction sites. Built for maximum load-bearing.",
      icon: (
        <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full mb-4 text-sm uppercase tracking-wider">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Industrial-Grade Piping Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We manufacture a diverse range of durable pipes meeting national and international standards. Find the perfect fit for your residential, agricultural, or industrial project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{product.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors">
                Request Quote <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
