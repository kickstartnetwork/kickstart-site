"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- FAQ Data ---------------- */
const faqs = [
  {
    question: "Who is Kickstart for?",
    answer:
      "Kickstart is designed for ECE and CSE students working on final-year projects, mini projects, or personal technical projects who need structured guidance and mentorship.",
  },
  {
    question: "Do I need a project idea before joining?",
    answer:
      "Not at all. We help you brainstorm, validate, and refine project ideas based on your interests, academic requirements, and career goals.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes. Whether you're a beginner or already have experience, our guidance adapts to your current skill level and helps you progress step by step.",
  },
  {
    question: "How is the guidance provided?",
    answer:
      "Guidance is provided through structured mentoring sessions, clear milestones, technical explanations, reviews, and continuous support throughout your project lifecycle.",
  },
  {
    question: "Will this help with placements or interviews?",
    answer:
      "Absolutely. We focus on real-world problem solving, clear explanations, documentation, and portfolio-ready outcomes that you can confidently present in interviews.",
  },
  {
    question: "Can I join if I already started my project?",
    answer:
      "Yes. We can help you improve, restructure, debug, or enhance an existing project to make it more complete and impactful.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* ---------------- Scroll IN / OUT Animations ---------------- */
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      className="py-28 bg-[var(--background)] relative overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-48 h-48 bg-[var(--accent-light)]/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={sectionRef}
        className="faq-anim max-w-5xl mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--accent)] text-sm uppercase tracking-wide font-medium">
            FAQs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Clear answers to common questions so you can move forward with
            confidence.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 space-x-1 p-2 h-[600px] ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                ref={(el) => {
                    if (el) itemRefs.current[index] = el;
                  }}
                className="faq-item group border border-[var(--border)] rounded-2xl bg-[var(--card-bg)] transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center hover:cursor-pointer justify-between gap-6 p-6 text-left"
                >
                  <span className="text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <svg
                    className={`w-5 h-5 text-[var(--accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v14m7-7H5"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .faq-anim {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .faq-anim.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .faq-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
