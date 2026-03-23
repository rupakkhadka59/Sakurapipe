import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/sakurapipe", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="bg-[#1a1f2e] text-white">
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">

          {/* Column 1 - Logo & Social */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="mb-4 relative flex justify-center lg:justify-start">
                  <div className="absolute inset-0 bg-green-600/20 rounded-full blur-xl scale-110"></div>
                  <Image
                    src="/images/Bgremoved.png"
                    alt="Sakura Pipe Udhyog Pvt. Ltd."
                    width={350}
                    height={1000}
                    className="relative h-48 w-auto object-contain bg-transparent transform scale-110"
                  />
                </div>
                <h2 className="text-4xl font-black text-white tracking-tight">
                  Sakura
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-green-600 rounded-full my-3"></div>
                <p className="text-xl font-bold text-gray-300 tracking-[0.2em] uppercase">
                  Pipes
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-500 shadow-lg hover:shadow-green-600/25 hover:shadow-xl transform hover:-translate-y-2`}
                >
                  <social.icon size={26} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links (Middle) */}
          <div className="text-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 backdrop-blur-md rounded-full mb-10 border border-white/10">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="font-black text-white text-lg uppercase tracking-[0.15em]">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xl font-medium hover:text-green-400 transition-all duration-300 flex items-center justify-center gap-4 group"
                  >
                    <div className="w-2 h-2 bg-gray-700 rounded-full group-hover:bg-green-400 group-hover:scale-125 transition-all"></div>
                    <span className="leading-relaxed">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Corporate Office */}
          <div className="text-center lg:text-right order-3">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-green-600/20 rounded-full mb-10">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              <h4 className="font-black text-white text-lg uppercase tracking-[0.15em]">
                Corporate Office
              </h4>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-10 border border-white/5 shadow-2xl">
                <p className="leading-relaxed text-white font-bold mb-8 text-xl">
                  Butwal-08, Rupandehi<br />
                  <span className="text-gray-400 font-medium text-lg">Lumbini Province, Nepal</span>
                </p>
                <div className="space-y-6">
                  <div className="flex items-center justify-center lg:justify-end gap-5 group">
                    <div className="text-right">
                      <a href="https://maps.google.com" target="_blank" className="text-gray-300 hover:text-green-400 transition-colors text-lg font-bold">Sukhanagar</a>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/10 border border-green-600/20 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <MapPin size={24} className="group-hover:text-white text-green-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end gap-5 group">
                    <a href="tel:071-531659" className="text-gray-300 hover:text-green-400 transition-colors text-lg font-bold">071-531659</a>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/10 border border-green-600/20 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <Phone size={24} className="group-hover:text-white text-green-400" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end gap-5 group">
                    <a href="mailto:info@sakurapipe.com.np" className="text-gray-300 hover:text-green-400 transition-colors text-lg font-bold">info@sakurapipe.com.np</a>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/10 border border-green-600/20 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                      <Mail size={24} className="group-hover:text-white text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          {/* Bottom Bar */}
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-sm text-center">
              &copy; {currentYear} Sakura Pipe Udhyog Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
