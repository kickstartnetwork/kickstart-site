const projects = [
  {
    category: "Embedded Systems",
    title: "Smart Home Automation",
    description: "IoT-based home automation system with voice control and energy monitoring",
    tags: ["IoT", "Arduino", "Voice Control"],
  },
  {
    category: "Machine Learning",
    title: "Plant Disease Detection",
    description: "CNN-based system for identifying plant diseases from leaf images",
    tags: ["Python", "TensorFlow", "Computer Vision"],
  },
  {
    category: "Signal Processing",
    title: "ECG Analysis System",
    description: "Real-time heart anomaly detection using signal processing techniques",
    tags: ["DSP", "MATLAB", "Healthcare"],
  },
  {
    category: "Web Development",
    title: "Campus Connect Portal",
    description: "Student interaction platform with resource sharing and event management",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    category: "Robotics",
    title: "Autonomous Navigation Bot",
    description: "ROS-based robot with obstacle avoidance and path planning",
    tags: ["ROS", "Python", "LIDAR"],
  },
  {
    category: "Cybersecurity",
    title: "Network Security Monitor",
    description: "Real-time intrusion detection and threat analysis system",
    tags: ["Security", "Python", "Network Analysis"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Projects by Our Students
          </h2>
          <p className="mt-4 text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Explore the innovative projects our mentees have successfully built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--accent)]/5 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--accent)]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[var(--accent)] text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-[var(--muted)] text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all font-medium">
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
