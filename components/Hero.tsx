"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  /* ---------------- Stats Count State ---------------- */
  const stats = [
    { value: 15, suffix: "+", label: "Projects Guided" },
    { value: 20, suffix: "+", label: "Students Mentored" },
    { value: 5, suffix: "+", label: "Industry Partners" },
    { value: 99, suffix: "%", label: "Success Rate" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);

  /* ---------------- Scroll Driven Progress ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;

      const scrolled = Math.min(
        Math.max(-rect.top / heroHeight, 0),
        1
      );

      setProgress(1 - scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Video Play Control ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (progress > 0.05) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [progress]);

  /* ---------------- Stats Rolling Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || statsAnimated.current) return;

        statsAnimated.current = true;

        stats.forEach((stat, index) => {
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * stat.value);

            setCounts((prev) => {
              const updated = [...prev];
              updated[index] = value;
              return updated;
            });

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------------- Typewriter Effect ---------------- */
  const fullText = "Impactful Projects";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-background flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[var(--accent)]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--accent)]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 rounded-full mb-8">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
          <span className="text-[var(--accent)] text-sm font-medium">
            For Emerging Tech Enthusiasts
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-8 tracking-tight">
          Turn Your Ideas Into
          <span className="block mt-2">
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] animate-pulse">
                {typedText}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-5 text-[var(--accent)]/20"
                viewBox="0 0 200 20"
                fill="currentColor"
              >
                <path
                  d="M2 12C50 8 150 8 198 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--muted)] max-w-3xl mx-auto mb-12 leading-relaxed">
          Structured guidance for final-year projects and personal technical
          endeavors. From ideation to execution, we help you succeed.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="cursor-pointer group bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-300 font-medium text-lg flex items-center gap-2">
          <a href="mailto:kickstartnetworks@gmail.com"> Start your Journey! </a>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button className="cursor-pointer group px-8 py-4 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 font-medium text-lg flex items-center gap-2">
          <a href="#projects"> View Projects </a>
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

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-1">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className="text-[var(--muted)] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll-Activated Hero Video */}
        <div className="mt-20 relative max-w-4xl mx-auto">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              transform: `scale(${0.85 + progress * 0.25})`,
              opacity: progress,
              transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
            }}
          >
            <video
              ref={videoRef}
              src="/demo.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
