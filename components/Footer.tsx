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
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
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
                <div className="mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Sakura Pipe Udhyog Pvt. Ltd."
                    width={120}
                    height={120}
                    className="h-28 w-auto mx-auto"
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
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone size={14} className="text-accent" />
                <span>071-531659</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail size={14} className="text-accent" />
                <span>info@sakurapipe.com.np</span>
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <MapPin size={14} className="text-accent mt-0.5" />
                <span>Near Siddhababa Temple</span>
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
