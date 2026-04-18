import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Sakura Pipe Udhyog Pvt. Ltd.",
    "image": "https://sakurapipe.vercel.app/images/logo.png",
    "@id": "https://sakurapipe.vercel.app",
    "url": "https://sakurapipe.vercel.app",
    "telephone": "+977-071-531659",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Butwal-08, Near Bhatbhateni",
      "addressLocality": "Butwal",
      "addressRegion": "Rupandehi",
      "postalCode": "32907",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.6914862,
      "longitude": 83.4684243
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="w-full">
        <Hero />
        <About />
        <Products />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
