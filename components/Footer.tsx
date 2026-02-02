export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Why Us?", href: "/#whyus" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
    Company: [
      { label: "About Us", href: "/#about" },
      { label: "Projects", href: "/#projects" },
      { label: "Careers", href: "/careers" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
    Socials: [
      { label: "LinkedIn", href: "/" },
      { label: "WhatsApp", href: "/" },
      { label: "Youtube", href: "/" },
      { label: "Instagram", href:"/" },
    ],
  };

  const socialLinks = [
    { icon: "X", href: "#", label: "Twitter" },
    { icon: "in", href: "#", label: "LinkedIn" },
    { icon: "ig", href: "#", label: "Instagram" },
    { icon: "GH", href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-[var(--background)] pt-20 pb-10 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
                <a href="/" className="flex items-center gap-3">
                {/* Placeholder for Brand Image */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
                    <img src={"/Kickstart.png"}></img>
                </div>
                <span className="text-2xl font-bold text-[var(--foreground)] tracking-tight">
                    Kickstart
                </span>
                </a>
            <p className="mt-4 text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Empowering ECE and CSE students with structured project guidance and 
              technical mentoring for successful project outcomes.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--muted)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[var(--foreground)] font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-sm">
            © {currentYear} Kickstart. All rights reserved.
          </p>
          <p className="text-[var(--muted)] text-sm">
            An initiative by <span className="text-[var(--muted)]/60">DSK Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
