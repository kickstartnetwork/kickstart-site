"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const animatedRefs = useRef<HTMLDivElement[]>([]);

  /* ---------------- Scroll In / Out Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-[var(--background)] via-[var(--card-bg)] to-[var(--background)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--accent)] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--accent-light)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={(el) => (animatedRefs.current[0] = el!)}
          className="scroll-anim text-center mb-16"
        >
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[var(--foreground)] via-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">
            Empowering Students to Build{" "}
            <span className="text-[var(--accent)]">Real Projects</span>
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] leading-relaxed max-w-3xl mx-auto">
            Kickstart is a project guidance and technical mentoring initiative
            designed specifically for ECE and CSE students undertaking final-year
            projects or personal technical endeavors.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <div
            ref={(el) => (animatedRefs.current[1] = el!)}
            className="scroll-anim"
          >
            <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
              We understand the challenges students face when embarking on
              technical projects. From finding the right idea to executing it
              successfully, our structured approach ensures you have the support
              and guidance needed to transform your ideas into impactful,
              portfolio-ready projects.
            </p>

            {/* Tags */}
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  label: "ECE Students",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  ),
                },
                {
                  label: "CSE Students",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                  ),
                },
                {
                  label: "Final Year Projects",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  label: "Personal Projects",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                      <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
                        d="M14.7 6.3a1 1 0 011.4 0l1.6 1.6a1 1 0 010 1.4l-8.6 8.6-3.4.9.9-3.4 8.6-8.6z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  ref={(el) => (animatedRefs.current[2 + i] = el!)}
                  className="scroll-anim flex items-center gap-3 p-4 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 cursor-pointer group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-[var(--accent)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-medium text-[var(--foreground)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Panel */}
          <div
            ref={(el) => (animatedRefs.current[6] = el!)}
            className="scroll-anim relative"
          >
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--accent)]/20 rounded-full -z-10 blur-3xl" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[var(--accent-light)]/15 rounded-full -z-10 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .scroll-anim.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
