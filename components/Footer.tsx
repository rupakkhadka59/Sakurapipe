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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Left Column - Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
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
                <div className="mb-2">
                  <Image
                    src="/images/Bgremoved.png"
                    alt="Sakura Pipe Udhyog Pvt. Ltd."
                    width={200}
                    height={1200}
                    className="h-48 w-auto mx-auto object-contain bg-transparent"
                  />
                </div>
                {/* Logo Text */}
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Sakura
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full my-2"></div>
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
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 ${social.color} hover:text-white transition-all duration-300 shadow-lg`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Corporate Office */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Corporate Office
            </h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="leading-relaxed">
                Butwal-08, Rupandehi<br />
                Lumbini Province, Nepal
              </p>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <MapPin size={14} className="text-accent mt-0.5" />
                <a href="https://www.google.com/maps/place/Sakura+Pipe+Udhyog+Pvt.+Ltd./@27.6914909,83.4635534,776m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39968688c3d1fcc1:0x2715c918c024e9!2sSakura+Pipe+Udhyog+Pvt.+Ltd.!8m2!3d27.6914862!4d83.4684243!16s%2Fg%2F11g6_wbmfz!3m5!1s0x39968688c3d1fcc1:0x2715c918c024e9!8m2!3d27.6914862!4d83.4684243!16s%2Fg%2F11g6_wbmfz?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Near Bhatbhateni</a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone size={14} className="text-accent" />
                <a href="tel:071-531659" className="hover:text-white transition-colors duration-300">071-531659</a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail size={14} className="text-accent" />
                <a href="mailto:info@sakurapipe.com.np" className="hover:text-white transition-colors duration-300">info@sakurapipe.com.np</a>
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
