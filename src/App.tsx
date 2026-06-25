import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  ShieldCheck,
  FileText,
  CalendarCheck,
  Download,
} from "lucide-react";

const projects = [
  {
    title: "BookEase",
    type: "Appointment Booking Web App",
    description:
      "A responsive appointment booking platform for service-based businesses, featuring a landing page, booking flow, and admin dashboard.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    icon: CalendarCheck,
    github:
      "https://github.com/LanceCracker04/bookease-appointment-booking-web-app",
    live: "https://bookease-appointment-booking-web-ap.vercel.app/",
  },
  {
    title: "Invoice App",
    type: "Invoice Management Dashboard",
    description:
      "A modern invoice management system for creating, tracking, and exporting invoices with a clean dashboard interface.",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "jsPDF"],
    icon: FileText,
    github: "https://github.com/LanceCracker04/InvoiceListScreen",
    live: "https://invoice-list-screen.vercel.app/",
  },
  {
    title: "VanGuard Link",
    type: "Full-Stack URL Risk Scanner",
    description:
      "A full-stack security-focused tool that analyzes suspicious links using heuristic checks and returns instant safety feedback through a Flask API.",
    stack: ["JavaScript", "Python", "Flask", "Vite", "REST API"],
    icon: ShieldCheck,
    github: "https://github.com/LanceCracker04/vanguard-link-fullstack",
    live: "https://vanguard-link-fullstack.vercel.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Firebase",
  "Python",
  "Flask",
  "Git",
  "GitHub",
  "SQL"
];

function App() {
  return (
    <main className="page-enter min-h-screen bg-slate-950 text-slate-50">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-tight">
            Erwin<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Code2 size={16} />
            Frontend Developer & Software Engineering Learner
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            I build clean web apps, dashboards, and practical full-stack tools.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m Erwin Rodrigo, an entry-level web developer focused on React,
            TypeScript, Tailwind CSS, Firebase, Flask, and project-based
            software engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="mailto:erwinrodrigo0303@gmail.com"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-blue-950/30">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Current focus</p>
            <h2 className="mt-2 text-2xl font-bold">Web Development</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Projects Built</p>
                <p className="mt-1 text-3xl font-bold">3+</p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Main Stack</p>
                <p className="mt-1 font-semibold">
                  React · TypeScript · Tailwind
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Based in</p>
                <p className="mt-1 flex items-center gap-2 font-semibold">
                  <MapPin size={16} /> Philippines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </p>
            <h2 className="mt-4 text-4xl font-black text-white">
              Projects that show what I can build
            </h2>
            <p className="mt-4 text-slate-300">
              A focused set of web applications covering booking systems,
              invoice dashboards, and full-stack security-focused tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
                    <Icon size={28} />
                  </div>

                  <p className="text-sm font-medium text-blue-400">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-[120px] text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      <Code2 size={16} />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                    >
                      Live
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Technologies I use
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-slate-950 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Let’s build something practical.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              I’m open to entry-level web development opportunities,
              freelance projects, and practical software engineering work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:erwinrodrigo0303@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://github.com/LanceCracker04"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                <Code2 size={18} />
                GitHub
              </a>

              <a
                href="/Erwin_Rodrigo_Frontend_Developer_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Erwin Rodrigo. Built with React, Vite, and Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;