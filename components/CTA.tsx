export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[var(--accent)]/10 rounded-3xl blur-3xl -z-10" />
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Ready to <span className="text-[var(--accent)]">Kickstart</span> Your Project?
            </h2>
            <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their project ideas into reality. 
              Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2">
                Apply Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium text-lg">
                Contact Us
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-[var(--border)] grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-lg font-semibold text-[var(--accent)]">hello@kickstart.edu</div>
                <div className="text-[var(--muted)] text-sm mt-1">Email Us</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-[var(--accent)]">Mon - Fri</div>
                <div className="text-[var(--muted)] text-sm mt-1">9 AM - 6 PM</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-[var(--accent)]">Your Campus</div>
                <div className="text-[var(--muted)] text-sm mt-1">Visit Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
