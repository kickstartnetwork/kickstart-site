"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" />
      </svg>
    ),
    title: "Project Ideation",
    description:
      "Brainstorm and refine your project ideas with expert guidance. We help you identify impactful, feasible projects that align with your career goals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Technical Development",
    description:
      "Get hands-on support for your project development. From architecture design to implementation, our mentors guide you through every phase.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Execution Excellence",
    description:
      "Stay on track with structured milestones and regular check-ins. We ensure your project progresses smoothly from concept to completion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857" />
      </svg>
    ),
    title: "Peer Collaboration",
    description:
      "Connect with fellow students working on similar projects. Build your network and learn collaboratively in a supportive environment.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Industry Standards",
    description:
      "Learn best practices and industry-standard methodologies. Build projects that meet professional quality benchmarks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Portfolio Building",
    description:
      "Create impressive project portfolios that showcase your skills to potential employers and graduate programs.",
  },
];

export default function Features() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  /* Scroll IN + OUT */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.isIntersecting
            ? entry.target.classList.add("in-view")
            : entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.25 }
    );

    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="whyus" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Comprehensive support tailored to help you excel in your technical projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 hover:cursor-pointer lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              ref={el => { cardsRef.current[i] = el!; }}
              className="feature-card relative overflow-hidden p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
            >
              {/* Background Icon */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 w-32 h-32 text-[var(--accent)]/10 rotate-[-12deg]">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .feature-card {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .feature-card.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
