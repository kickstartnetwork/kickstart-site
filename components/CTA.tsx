"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  /* -------- Scroll-based IN / OUT animation -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      },
      { threshold: 0.25 }
    );

    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] relative overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-3xl blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          ref={ctaRef}
          className="cta-anim relative bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl px-8 md:px-16 py-16 text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">
              Kickstart
            </span>{" "}
            Your Project?
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Join students who turned uncertainty into clarity and ideas into
            execution-ready projects — with structured mentorship at every step.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group cursor-pointer bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/30 flex items-center gap-2 justify-center">
             <a href="mailto:kickstartnetworks@gmail.com"> Apply Now </a>
               <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <button className="cursor-pointer px-8 py-4 flex items-center gap-2   rounded-full border border-[var(--border)] text-[var(--foreground)] font-medium text-lg transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]">
              <a href="#projects" className="text-white" > View Projects  </a>

              <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="mt-14 pt-10 border-t border-[var(--border)]">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-base font-semibold text-[var(--foreground)]">
                  kickstartsnetworks@gmail.com
                </div>
                <div className="text-sm text-[var(--muted)] mt-1">
                  Email Us
                </div>
              </div>

              <div>
                <div className="text-base font-semibold text-[var(--foreground)]">
                  Mon – Fri
                </div>
                <div className="text-sm text-[var(--muted)] mt-1">
                  9 AM – 6 PM
                </div>
              </div>

              <div>
                <div className="text-base font-semibold text-[var(--foreground)]">
                  @kickstart.networks
                </div>
                <div className="text-sm text-[var(--muted)] mt-1">
                  Visit Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .cta-anim {
          opacity: 0;
          transform: translateY(32px) scale(0.98);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .cta-anim.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
