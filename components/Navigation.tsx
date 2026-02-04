"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#pricing", label: "Pricing / Plans" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md shadow-lg shadow-[var(--accent)]/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* 🌊 Desktop Glow */}
        {!isScrolled && (
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden lg:flex justify-center">
            <div className="relative w-[420px] h-[80px]">
              <div className="absolute inset-0 bg-[var(--accent)]/25 blur-[60px] rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent blur-[40px] animate-[flow_8s_linear_infinite]" />
            </div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="md:w-10 md:h-12 w-8 h-10 shadow-lg shadow-[var(--accent)]/30 overflow-hidden">
              <img src="/Kickstart.png" alt="Kickstart" />
            </div>
            <span className="text-2xl font-bold text-[var(--foreground)]">
              Kickstart
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)]/70 hover:text-[var(--accent)] transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <a
              href="mailto:kickstartnetworks@gmail.com"
              className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all text-sm font-medium"
            >
              Get Started
            </a>
          </div>

          {/* ✅ Mobile Toggle (FIXED – NO CLIPPING) */}
          <button
            aria-label="Toggle Menu"
            className="lg:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <span
              className={`absolute w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* 🌑 Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 📱 Mobile Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[var(--background)] rounded-t-3xl border-t border-[var(--border)] px-6 pt-8 pb-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                style={{ transitionDelay: `${i * 70}ms` }}
                className={`text-xl font-medium text-[var(--foreground)] transition-all ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <a
                href="mailto:kickstartnetworks@gmail.com"
                className="block w-full text-center bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white py-4 rounded-full font-medium hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateX(-30%);
          }
          50% {
            transform: translateX(30%);
          }
          100% {
            transform: translateX(-30%);
          }
        }
      `}</style>
    </>
  );
}
