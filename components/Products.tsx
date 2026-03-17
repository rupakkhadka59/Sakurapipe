"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "WATER SUPPLY PIPES",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    bg: "bg-white",
    ring: "ring-gray-200",
  },
  {
    id: 2,
    name: "PIPES AND FITTINGS",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
    bg: "bg-gray-400",
    ring: "ring-gray-400",
  },
  {
    id: 3,
    name: "IRRIGATION PIPES",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    bg: "bg-gray-300",
    ring: "ring-gray-300",
  },
  {
    id: 4,
    name: "HDPE PIPES",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop",
    bg: "bg-white",
    ring: "ring-gray-200",
  },
  {
    id: 5,
    name: "COLUMN PIPES",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop",
    bg: "bg-gray-300",
    ring: "ring-gray-300",
  },
];

export default function Products() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(products.length - visible, i + 1));

  const visibleProducts = products.slice(startIndex, startIndex + visible);

  return (
    <>
      <section
        id="products"
        className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: "#f0f2f8" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest mb-4 text-gray-800"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}
            >
              PRODUCT RANGE
            </h2>
            <p className="text-gray-500 max-w-sm sm:max-w-md lg:max-w-xl mx-auto text-sm sm:text-base">
              With over 2500+ SKUs in its inventory, Sakura Pipe has one of the
              largest product portfolio spread in different categories.
            </p>
          </div>

          {/* Carousel Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            {/* Prev Button */}
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            {/* Product Cards */}
            <div className="flex gap-3 sm:gap-6 md:gap-10 items-end justify-center flex-1 overflow-hidden">
              {visibleProducts.map((product, idx) => {
                const isCenter = idx === Math.floor(visible / 2);
                return (
                  <div key={product.id} className="flex flex-col items-center group flex-shrink-0">
                    {/* Circle Image */}
                    <div
                      className={`
                        relative overflow-hidden rounded-full ring-4 ${product.ring} ${product.bg}
                        flex items-center justify-center
                        transition-all duration-300 group-hover:-translate-y-2
                        ${isCenter ? "w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64" : "w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52"}
                      `}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Label */}
                    <p
                      className={`mt-3 sm:mt-5 font-semibold tracking-widest text-gray-700 text-center ${
                        isCenter ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
                      }`}
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {product.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              disabled={startIndex >= products.length - visible}
              className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>

          {/* Explore Products Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Our Products
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Right Side Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/9779800000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Enquiries */}
        <a
          href="#contact"
          className="flex items-center gap-1 px-2 py-3 bg-red-500 hover:bg-red-600 transition-colors shadow-lg writing-mode-vertical"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Enquiries"
        >
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0 rotate-90">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
            </svg>
            <span className="text-white font-bold text-xs tracking-widest">ENQUIRIES</span>
          </span>
        </a>
      </div>
    </>
  );
}
