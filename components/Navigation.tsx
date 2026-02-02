"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md shadow-lg shadow-[var(--accent)]/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* 🌊 Glowing Ray Blob (only when NOT scrolled) */}
      {!isScrolled && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
          <div className="relative w-[420px] h-[80px]">
            <div className="absolute inset-0 bg-[var(--accent)]/25 blur-[60px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent blur-[40px] animate-[flow_8s_linear_infinite]" />
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
            <img src={"/Kickstart.png"} alt="Kickstart" />
          </div>
          <span className="text-2xl font-bold text-[var(--foreground)] tracking-tight">
            Kickstart
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--foreground)]/70 hover:text-[var(--accent)] transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-300 text-sm font-medium">
          <a href="mailto: kickstartnetworks@gmail.com">  Get Started </a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-[var(--foreground)] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[var(--foreground)] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[var(--foreground)]"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-t border-[var(--border)] py-6 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-[var(--border)]" />
            <button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-colors font-medium w-full">
            <a href="mailto: kickstartnetworks@gmail.com">  Get Started </a>
            </button>
          </div>
        </div>
      )}

      {/* 🔑 Required keyframes (minimal & scoped) */}
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
    </nav>
  );
}
