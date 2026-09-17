import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-vignette pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <h2 className="text-outline text-[14vw] sm:text-[8rem] leading-none font-bold tracking-tight select-none text-center sm:text-left hover:text-gradient transition-all duration-500">
          CONNECT
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-mono-tag text-xs tracking-widest">
          <div>
            <p className="text-muted uppercase mb-3">{"// System Architecture"}</p>
            <p>Full-Stack Web Engineering</p>
            <p className="mt-1">Mobile &amp; Agentic AI Solutions</p>
          </div>
          <div>
            <p className="text-muted uppercase mb-3">{"// Status"}</p>
            <p className="text-accent">{profile.status}</p>
            <a href="#projects" className="mt-1 inline-block underline underline-offset-4 hover:text-accent">
              View Work
            </a>
          </div>
          <div>
            <p className="text-muted uppercase mb-3">{"// Direct"}</p>
            <a href={`mailto:${profile.email}`} className="block hover:text-accent transition-colors normal-case">
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block mt-1 hover:text-accent transition-colors normal-case"
            >
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="text-muted uppercase mb-3">{"// Region"}</p>
            <p>{profile.region}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 normal-case">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-border pt-6 font-mono-tag text-[10px] tracking-widest text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
