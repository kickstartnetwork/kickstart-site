"use client";

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Careers() {
  const animatedRefs = useRef<HTMLDivElement[]>([]);

  /* ---------------- Scroll In / Out Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting
            ? entry.target.classList.add("in-view")
            : entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.2 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const applyMail = (role: string) =>
    `mailto:hello@kickstart.edu?subject=Applying for ${encodeURIComponent(
      role
    )}`;

  return (
    <main className="min-h-screen ease-in-out">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        {/* Header */}
        <div
          ref={(el) => {
  animatedRefs.current[0] = el;
}}
          className="scroll-anim max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-[var(--muted)]">
            Help us empower engineering students to build real, industry-ready
            projects. We’re actively looking for passionate individuals who want
            to grow while creating meaningful impact.
          </p>
        </div>

        {/* Job Openings */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Intern */}
          <div
            ref={(el) => (animatedRefs.current[1] = el!)}
            className="scroll-anim relative bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Intern (ECE / CSE)
            </h3>

            <p className="text-[var(--muted)] mb-6">
              Learn by doing. Work closely with mentors on real student projects,
              technical research, and content creation.
            </p>

            <ul className="text-sm text-[var(--muted)] mb-8 space-y-2">
              <li>• ECE / CSE student (any year)</li>
              <li>• Basic technical or programming knowledge</li>
              <li>• Willingness to learn and take ownership</li>
              <li>• 3–6 month commitment</li>
            </ul>

            <a
              href={applyMail("Intern (ECE / CSE)")}
              className="mt-auto w-full bg-[var(--accent)] text-white py-3 rounded-lg hover:bg-[var(--accent)]/90 transition-colors text-center"
            >
              Apply as Intern
            </a>
          </div>

          {/* Freelancer */}
          <div
            ref={(el) => (animatedRefs.current[2] = el!)}
            className="scroll-anim relative bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Technical Freelancer (ECE / CSE)
            </h3>

            <p className="text-[var(--muted)] mb-6">
              Support students with project guidance, simulations, development,
              documentation, and reviews.
            </p>

            <ul className="text-sm text-[var(--muted)] mb-8 space-y-2">
              <li>• Strong fundamentals in ECE or CSE</li>
              <li>• Experience with projects or mentoring</li>
              <li>• Ability to explain concepts clearly</li>
              <li>• Flexible, project-based work</li>
            </ul>

            <a
              href={applyMail("Technical Freelancer (ECE / CSE)")}
              className="mt-auto w-full bg-[var(--accent)] text-white py-3 rounded-lg hover:bg-[var(--accent)]/90 transition-colors text-center"
            >
              Apply as Freelancer
            </a>
          </div>

          {/* Social Media & Visual Designer */}
          <div
            ref={(el) => (animatedRefs.current[3] = el!)}
            className="scroll-anim relative bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all flex flex-col"
          >
            {/* Urgent Badge Overlay */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--accent)] text-white shadow-lg">
                Urgent Requirement
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4 mt-4">
              Social Media Content Editor & Visual Designer
            </h3>

            <p className="text-[var(--muted)] mb-6">
              Own our social presence. Create visuals, short-form videos, and
              educational content that resonates with students.
            </p>

            <ul className="text-sm text-[var(--muted)] mb-8 space-y-2">
              <li>• Strong visual & content sense</li>
              <li>• Figma / Canva / Adobe tools</li>
              <li>• Short-form video & reel editing</li>
              <li>• Instagram & LinkedIn understanding</li>
            </ul>

            <a
              href={applyMail(
                "Social Media Content Editor & Visual Designer"
              )}
              className="mt-auto w-full bg-[var(--accent)] text-white py-3 rounded-lg hover:bg-[var(--accent)]/90 transition-colors text-center"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Why Join */}
        <div
          ref={(el) => (animatedRefs.current[4] = el!)}
          className="scroll-anim max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-12">
            Why Join Kickstart?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Impact",
                desc: "Your work directly shapes student confidence, skills, and career outcomes.",
              },
              {
                title: "Supportive Culture",
                desc: "Collaborate in a mentor-first environment that values clarity, growth, and ownership.",
              },
              {
                title: "Meaningful Growth",
                desc: "Gain real exposure, build strong fundamentals, and grow beyond just titles.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-1"
              >
                {/* Accent Glow */}
                <div className="absolute inset-0 rounded-2xl bg-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      {/* Scroll Animation Styles */}
      <style jsx>{`
        .scroll-anim {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 600ms ease, transform 600ms ease;
        }

        .scroll-anim.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
