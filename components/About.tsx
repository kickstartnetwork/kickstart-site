export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--background)] ">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <div>
            
            <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
              Empowering Students to Build <span className="text-[var(--accent)]">Real Projects</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
              Kickstart is a project guidance and technical mentoring initiative designed specifically for ECE and CSE students undertaking final-year projects or personal technical endeavors.
            </p>
            <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
              We understand the challenges students face when embarking on technical projects. From finding the right idea to executing it successfully, our structured approach ensures you have the support and guidance needed to transform your ideas into impactful, portfolio-ready projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["ECE Students", "CSE Students", "Final Year Projects", "Personal Projects"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div style={{
                 backgroundImage: 'url(/community.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',}}
                 className="aspect-square rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border border-[var(--border)]">
         
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--accent)]/20 rounded-3xl -z-10 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--accent)]/10 rounded-2xl -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
