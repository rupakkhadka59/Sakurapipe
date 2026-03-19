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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

          {/* Left Column - Quick Links */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h4 className="font-semibold text-white text-base uppercase tracking-wider">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-base hover:text-green-400 transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></div>
                    <span className="leading-relaxed">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column - Logo & Social */}
          <div className="text-center">
            {/* Large Logo */}
            <div className="mb-8">
              <div className="flex flex-col items-center">
                {/* Logo Image */}
                <div className="mb-4 relative flex justify-center">
                  <div className="absolute inset-0 bg-green-600/20 rounded-full blur-xl scale-110"></div>
                  <Image
                    src="/images/Bgremoved.png"
                    alt="Sakura Pipe Udhyog Pvt. Ltd."
                    width={400}
                    height={1200}
                    className="relative h-64 w-auto object-contain bg-transparent transform scale-110"
                  />
                </div>
                {/* Logo Text */}
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Sakura
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full my-2"></div>
                <p className="text-lg font-medium text-gray-300 tracking-widest uppercase">
                  Pipes
                </p>
              </div>
            </div>

            {/* Social Icons - Circular */}
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-600/25 hover:shadow-xl transform hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Corporate Office */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h4 className="font-semibold text-white text-base uppercase tracking-wider">
                Corporate Office
              </h4>
            </div>
            <div className="space-y-6 text-gray-400 text-base">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <p className="leading-relaxed text-white font-medium mb-6 text-base">
                  Butwal-08, Rupandehi<br />
                  Lumbini Province, Nepal
                </p>
                <div className="space-y-5">
                  <div className="flex items-start justify-center lg:justify-end gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 flex-shrink-0">
                      <MapPin size={18} className="text-green-400" />
                    </div>
                    <div className="text-left">
                      <a href="https://www.google.com/maps/place/Sakura+Pipe+Udhyog+Pvt.+Ltd./@27.6914909,83.4635534,776m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39968688c3d1fcc1:0x2715c918c024e9!2sSakura+Pipe+Udhyog+Pvt.+Ltd.!8m2!3d27.6914862!4d83.4684243!16s%2Fg%2F11g6_wbmfz!3m5!1s0x39968688c3d1fcc1:0x2715c918c024e9!8m2!3d27.6914862!4d83.4684243!16s%2Fg%2F11g6_wbmfz?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300 font-medium leading-relaxed">Sukhanagar</a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 flex-shrink-0">
                      <Phone size={18} className="text-green-400" />
                    </div>
                    <a href="tel:071-531659" className="hover:text-green-400 transition-colors duration-300 font-medium leading-relaxed">071-531659</a>
                  </div>
                  <div className="flex items-center justify-center lg:justify-end gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600/20 flex-shrink-0">
                      <Mail size={18} className="text-green-400" />
                    </div>
                    <a href="mailto:info@sakurapipe.com.np" className="hover:text-green-400 transition-colors duration-300 font-medium leading-relaxed">info@sakurapipe.com.np</a>
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
