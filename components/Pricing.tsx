"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- Pricing Data ---------------- */
type Plan = {
  title: string;
  subtitle: string;
  bestFor: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const pricingData: Record<string, Record<string, Plan>> = {
  ece: {
    starter: {
      title: "Starter",
      subtitle: "Mini Project",
      bestFor: "Concept clarity & internal assessments",
      price: "₹4,000",
      features: [
        "Project idea selection (as per syllabus)",
        "Guided simulation (MATLAB / Proteus / Tinkercad)",
        "Working principle explanation",
        "Basic viva preparation support",
      ],
      highlight: false,
    },
    core: {
      title: "Core",
      subtitle: "Major Project",
      bestFor: "Final-year academic requirements",
      price: "₹8,000",
      features: [
        "Complete project guidance (end-to-end)",
        "Simulation support (MATLAB / Proteus)",
        "IEEE + standard report preparation",
        "Implementation & debugging support",
        "Viva & review preparation",
      ],
    },
    advanced: {
      title: "Advanced",
      subtitle: "Industry-Oriented",
      bestFor: "Placements, internships, resumes",
      price: "₹12,000",
      features: [
        "Industry-level project selection",
        "Advanced system explanation",
        "Real-world use-case mapping",
        "IEEE documentation",
        "Resume & interview project guidance",
      ],
      highlight: true,
    },
  },
  cse: {
    starter: {
      title: "Starter",
      subtitle: "Mini Project",
      bestFor: "Beginners & lab submissions",
      price: "₹4,000",
      features: [
        "Mini project idea selection",
        "Basic implementation guidance",
        "Code walkthrough & logic explanation",
        "Viva preparation support",
      ],
      highlight: false,
    },
    core: {
      title: "Core",
      subtitle: "Major Project",
      bestFor: "Final-year academic requirements",
      price: "₹8,000",
      features: [
        "Full project flow explanation",
        "Backend & frontend guidance",
        "IEEE + standard report preparation",
        "Debugging & testing support",
        "Viva & review preparation",
      ],
      highlight: true,
    },
    advanced: {
      title: "Advanced",
      subtitle: "Industry & Placement Focused",
      bestFor: "Product companies & startups",
      price: "₹12,000",
      features: [
        "Advanced project (AI / Full-stack / Cloud)",
        "System architecture explanation",
        "Real-world use-case mapping",
        "GitHub-ready guidance",
        "Interview & demo preparation",
      ],
      highlight: false,
    },
  },
};

/* ---------------- Add-ons ---------------- */
const addons = [
  {
    name: "Simulation Support",
    price: "₹800 – ₹1,500",
    description: "MATLAB / Proteus / Tinkercad focused assistance",
  },
  {
    name: "Documentation",
    price: "₹700 – ₹1,200",
    description: "Report + IEEE formatting",
  },
  {
    name: "Viva / Review Session",
    price: "₹300 – ₹600",
    description: "Mock viva & review preparation",
  },
  {
    name: "Project Enhancement",
    price: "Based on scope",
    description: "Improvements or feature additions",
  },
];

/* ---------------- Icon ---------------- */
const PlanIcon = () => (
  <svg
    className="w-6 h-6 text-[var(--accent)]/40"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m6-6H6" />
  </svg>
);

export default function Pricing() {
  const [projectType, setProjectType] = useState<"ece" | "cse">("ece");
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});
  const plans = Object.values(pricingData[projectType]);

  const animatedRefs = useRef<HTMLDivElement[]>([]);

  /* ---------------- Scroll IN / OUT Animations ---------------- */
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
      { threshold: 0.25 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projectType]);

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="pricing" className="py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] max-w-2xl mx-auto">
            One-time pricing. No hidden costs. Clear deliverables.
          </p>

          <div className="mt-10 inline-flex p-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]">
            {(["ece", "cse"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setProjectType(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  projectType === type
                    ? "bg-[var(--accent)] text-white shadow"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {type.toUpperCase()} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              ref={(el) => { animatedRefs.current[i] = el! }}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`animated-card relative flex flex-col rounded-2xl border p-8 bg-[var(--card-bg)] ${
                plan.highlight
                  ? "border-[var(--accent)] shadow-xl shadow-[var(--accent)]/10"
                  : "border-[var(--border)]"
              }`}
            >
              <div className="absolute top-6 right-6">
                <PlanIcon />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {plan.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-[var(--foreground)]">
                  {plan.price}
                </div>
                <p className="text-sm text-[var(--muted)] mt-2">
                  {plan.bestFor}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-[var(--foreground)]">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3 rounded-xl font-medium transition-all ${
                  plan.highlight
                    ? "bg-[var(--accent)] text-white hover:opacity-90"
                    : "border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                Select <span className="font-bold">{plan.title}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-32 text-center">
          <h3 className="text-3xl font-bold text-[var(--foreground)] mb-6">
            Optional Add-ons
          </h3>
          <p className="text-lg text-[var(--muted)] mb-12">
            Select additional services only if you need them.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, i) => (
              <div
                key={addon.name}
                ref={(el) => { animatedRefs.current[plans.length + i] = el! }}
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => toggleAddon(addon.name)}
                className={`animated-card cursor-pointer rounded-xl border p-6 text-left transition-all ${
                  selectedAddons[addon.name]
                    ? "border-[var(--accent)] bg-[var(--accent)]/5"
                    : "border-[var(--border)] hover:border-[var(--accent)]/40"
                }`}
              >
                <h4 className="font-semibold text-[var(--foreground)] mb-1">
                  {addon.name}
                </h4>
                <p className="text-sm text-[var(--muted)] mb-4">
                  {addon.description}
                </p>
                <span className="text-[var(--accent)] font-medium">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animated-card {
          opacity: 0;
          transform: translateY(40px) scale(0.96);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .animated-card.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
