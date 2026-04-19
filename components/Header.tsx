"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 16);

      if (currentScrollY < 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto mt-3 w-[calc(100%-1rem)] max-w-7xl rounded-2xl border transition-all duration-300 sm:w-[calc(100%-2rem)] ${
          scrolled
            ? "border-green-600/80 bg-green-600/90 shadow-lg backdrop-blur-xl"
            : "border-green-600/30 bg-green-600/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-lg font-black text-white shadow-md">
              <Image
                src="/images/navlogo.jpg"
                alt="Sakura Pipe Udhyog Pvt. Ltd."
                width={120}
                height={120}
                className="h-full w-full object-cover scale-[1.5] bg-transparent"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-2xl font-black leading-none tracking-tighter text-secondary sm:text-3xl">
                SAKURA
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-accent sm:text-[11px]">
                Pipe Udhyog Pvt. Ltd.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-white hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <a
            href="tel:+977-071-531659"
            className="flex items-center gap-3 text-sm text-white hover:text-green-100 transition-all duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 shadow-inner">
              <Phone className="h-4.5 w-4.5 text-white" />
            </div>
            <div className="hidden lg:block leading-tight">
              <p className="text-[10px] uppercase tracking-wider text-white/70 font-bold">Call Us</p>
              <p className="font-bold text-base">+977-071-531659</p>
            </div>
          </a>

          <button
            type="button"
            className="inline-flex rounded-xl border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/20 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/20 px-4 py-4 md:hidden sm:px-6 absolute top-full left-0 right-0 bg-green-600/95 backdrop-blur-xl z-50">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-white text-green-600"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-green-100">Contact</p>
                  <p className="font-semibold text-white">+977-071-531659</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
