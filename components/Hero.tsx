import Link from "next/link";
import { ArrowRight, Phone, MapPin, Award } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100dvh] w-full overflow-hidden bg-gray-950"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero.png"
      >
        <source src="/videos/about.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer cinematic overlay */}
      <div className="hero-overlay-radial" />
      <div className="hero-overlay-gradient" />
      <div className="hero-overlay-vignette" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end">
        <div className="hero-content-area">

          {/* Location badge */}
          <div className="hero-badge opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MapPin className="hero-badge-icon" />
            <span>Est. 2014 · Butwal-08, Rupandehi</span>
          </div>

          {/* Main Headline */}
          <div className="hero-headline-wrap">
            <h1 className="hero-h1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Leading HDPE Pipe
            </h1>
            <h1 className="hero-h1 hero-h1-accent opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
              Manufacturer in Nepal
            </h1>
          </div>

          {/* Divider */}
          <div className="hero-divider opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }} />

          {/* Sub-headline */}
          <p className="hero-subtext opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            High-quality HDPE pipes for Residential, Commercial &amp; Industrial
            Infrastructure across Nepal
          </p>

          {/* Trust Indicators */}
          <div className="hero-badges-row opacity-0 animate-fade-in" style={{ animationDelay: "0.95s" }}>
            <div className="hero-pill">
              <Award className="hero-pill-icon" />
              <span>10+ Years</span>
            </div>
            <div className="hero-pill">
              <div className="hero-dot" />
              <span>NS 40 Grade</span>
            </div>
            <div className="hero-pill">
              <div className="hero-dot" />
              <span>Serving All Nepal</span>
            </div>
          </div>

          {/* CTA Row */}
          <div className="hero-cta-row opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <Link
              href="https://wa.me/9779851181195"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-whatsapp"
            >
              <WhatsAppIcon className="hero-btn-icon" />
              <span>Connect on WhatsApp</span>
            </Link>

            <Link href="/products" className="hero-btn hero-btn-secondary">
              <span>View Products</span>
              <ArrowRight className="hero-btn-icon hero-btn-arrow" />
            </Link>
          </div>

        </div>
      </div>

      {/* Animation + Component Styles */}
      <style>{`
        /* Overlays */
        .hero-overlay-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 80% at 20% 100%, rgba(0,0,0,0.75) 0%, transparent 70%);
        }
        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.55) 35%,
            rgba(0,0,0,0.15) 65%,
            transparent 100%
          );
        }
        .hero-overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%);
        }

        /* Content area with safe right padding for floating buttons */
        .hero-content-area {
          padding: 0 4.5rem 3rem 1.25rem; /* right padding protects from floating buttons */
          max-width: 520px;
        }

        /* Location badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          background: rgba(22, 163, 74, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.3);
          border-radius: 999px;
          padding: 0.3rem 0.85rem;
          margin-bottom: 1.1rem;
          color: #86efac;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }
        .hero-badge-icon {
          width: 0.75rem;
          height: 0.75rem;
          flex-shrink: 0;
        }

        /* Headlines */
        .hero-headline-wrap {
          margin-bottom: 0.85rem;
        }
        .hero-h1 {
          display: block;
          font-size: clamp(1.55rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 20px rgba(0,0,0,0.6);
        }
        .hero-h1-accent {
          color: #4ade80;
          text-shadow: 0 0 40px rgba(74, 222, 128, 0.35), 0 2px 20px rgba(0,0,0,0.6);
        }

        /* Divider */
        .hero-divider {
          width: 2.5rem;
          height: 2px;
          background: linear-gradient(to right, #4ade80, transparent);
          border-radius: 999px;
          margin-bottom: 0.85rem;
        }

        /* Sub-text */
        .hero-subtext {
          font-size: clamp(0.72rem, 2vw, 0.875rem);
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
          margin-bottom: 1.2rem;
          max-width: 360px;
        }

        /* Trust badges row */
        .hero-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.4rem;
        }
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 0.28rem 0.7rem;
          font-size: 0.68rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          white-space: nowrap;
        }
        .hero-pill-icon {
          width: 0.7rem;
          height: 0.7rem;
          color: #4ade80;
          flex-shrink: 0;
        }
        .hero-dot {
          width: 0.45rem;
          height: 0.45rem;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 6px #4ade80;
          flex-shrink: 0;
        }

        /* CTA row */
        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          align-items: center;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: clamp(0.72rem, 2vw, 0.875rem);
          font-weight: 700;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          transition: all 0.25s ease;
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .hero-btn-whatsapp {
          background: #25D366;
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .hero-btn-whatsapp:hover {
          background: #128C7E;
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
          transform: translateY(-2px);
        }
        .hero-btn-secondary {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(10px);
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }
        .hero-btn-icon {
          width: 0.9rem;
          height: 0.9rem;
          flex-shrink: 0;
        }
        .hero-btn-arrow {
          transition: transform 0.25s ease;
        }
        .hero-btn-secondary:hover .hero-btn-arrow {
          transform: translateX(3px);
        }

        /* Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-fade-in {
          animation: fadeIn 0.75s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.75s ease-out forwards;
        }

        /* ---- Responsive Breakpoints ---- */

        /* Tablet (≥640px) */
        @media (min-width: 640px) {
          .hero-content-area {
            padding: 0 5rem 4rem 2rem;
            max-width: 560px;
          }
          .hero-badge {
            font-size: 0.7rem;
          }
          .hero-pill {
            font-size: 0.72rem;
            padding: 0.32rem 0.85rem;
          }
          .hero-btn {
            padding: 0.7rem 1.5rem;
          }
        }

        /* Desktop (≥1024px) */
        @media (min-width: 1024px) {
          .hero-content-area {
            padding: 0 3rem 5rem 3.5rem;
            max-width: 680px;
          }
          .hero-badge {
            font-size: 0.75rem;
            padding: 0.35rem 1rem;
          }
          .hero-subtext {
            max-width: 440px;
          }
          .hero-pill {
            font-size: 0.8rem;
            padding: 0.38rem 1rem;
          }
          .hero-btn {
            padding: 0.8rem 1.75rem;
          }
          .hero-btn-icon {
            width: 1rem;
            height: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
