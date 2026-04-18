"use client";

import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/9779851181195"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:-translate-y-2 hover:scale-110 hover:shadow-[#25D366]/40 animate-bounce group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:animate-ping"></div>
      <WhatsAppIcon className="h-8 w-8 fill-current relative z-10" />
    </a>
  );
}
