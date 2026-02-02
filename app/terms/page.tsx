import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA  from "@/components/CTA";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 px-6 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8">
            Terms & Conditions
          </h1>

          <p className="text-[var(--muted)] mb-12">
            Last updated: {new Date().getFullYear()}
          </p>

          {/* Intro */}
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-10">
            Welcome to <strong className="text-[var(--foreground)]">Kickstart</strong>.
            By accessing our website, services, mentorship programs, or engaging
            with our team in any form, you agree to be bound by the following
            Terms and Conditions. Please read them carefully before using our
            services.
          </p>

          {/* Section */}
          <Section title="1. About Kickstart">
            Kickstart is an educational guidance and technical mentoring
            initiative designed to support ECE and CSE students with project
            ideation, conceptual clarity, technical learning, and structured
            mentorship. We do not claim to be an academic institution, degree
            provider, or placement agency.
          </Section>

          <Section title="2. Nature of Services">
            All services provided by Kickstart are strictly limited to:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Project guidance and mentoring</li>
              <li>Concept explanation and learning support</li>
              <li>Technical direction and best practices</li>
              <li>Documentation structure guidance</li>
              <li>Viva and review preparation assistance</li>
            </ul>

            <p className="mt-4">
              We <strong>do not</strong> complete projects on behalf of students,
              write submissions for direct academic use, or engage in unethical
              academic practices.
            </p>
          </Section>

          <Section title="3. Academic Integrity & Responsibility">
            Students are solely responsible for:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Understanding and complying with their institution’s rules</li>
              <li>Ensuring originality in submissions</li>
              <li>Using guidance ethically and responsibly</li>
            </ul>

            Kickstart shall not be held responsible for any academic penalties,
            disqualifications, or disciplinary actions arising from misuse of
            guidance or violation of institutional policies.
          </Section>

          <Section title="4. No Guarantees">
            While we strive to deliver high-quality guidance:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>No guarantees are made regarding grades, marks, results, or placements</li>
              <li>No assurance of project approval by institutions or evaluators</li>
              <li>Outcomes depend on student effort, understanding, and execution</li>
            </ul>
          </Section>

          <Section title="5. Payments & Refunds">
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments are for mentorship and guidance services</li>
              <li>Once a session or guidance cycle has begun, payments are non-refundable</li>
              <li>Refunds, if any, are at the sole discretion of Kickstart</li>
              <li>Pricing may change without prior notice</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            All materials shared by Kickstart, including:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Slides</li>
              <li>Explanations</li>
              <li>Templates</li>
              <li>Internal frameworks</li>
            </ul>

            remain the intellectual property of Kickstart and may not be
            redistributed, resold, or reused commercially without written
            permission.
          </Section>

          <Section title="7. User Conduct">
            Users agree not to:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Misrepresent Kickstart’s services to institutions</li>
              <li>Harass mentors, staff, or freelancers</li>
              <li>Use guidance for unethical or illegal purposes</li>
              <li>Record sessions without consent</li>
            </ul>
          </Section>

          <Section title="8. Limitation of Liability">
            Kickstart shall not be liable for:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Academic losses</li>
              <li>Career outcomes</li>
              <li>Institutional decisions</li>
              <li>Indirect or consequential damages</li>
            </ul>

            Our maximum liability, if any, shall be limited to the amount paid
            for the specific service.
          </Section>

          <Section title="9. Mentors, Interns & Freelancers">
            Mentors and freelancers associated with Kickstart operate as
            independent contributors. Kickstart is not responsible for personal
            agreements, external commitments, or off-platform interactions.
          </Section>

          <Section title="10. Termination of Access">
            Kickstart reserves the right to suspend or terminate access to
            services without notice in cases of misconduct, misuse, or violation
            of these terms.
          </Section>

          <Section title="11. Changes to Terms">
            These Terms & Conditions may be updated periodically. Continued use
            of our services implies acceptance of the revised terms.
          </Section>

          <Section title="12. Governing Law">
            These Terms & Conditions are governed by the laws of India. Any
            disputes shall fall under the jurisdiction of courts located in
            India.
          </Section>

          <Section title="13. Contact Information">
            For any questions regarding these Terms, please contact us at:
            <br />
            <span className="font-medium text-[var(--accent)]">
            <a href="mailto: kickstartnetworks@gmail.com"> kickstartnetworks@gmail.com </a>
            </span>
          </Section>
        </div>
      </section>
        <CTA />
      <Footer />
    </main>
  );
}

/* ---------------- Helper Component ---------------- */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
        {title}
      </h2>
      <div className="text-[var(--muted)] leading-relaxed">{children}</div>
    </div>
  );
}
