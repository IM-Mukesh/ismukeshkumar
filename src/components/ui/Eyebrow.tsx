export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono-tag text-xs tracking-[0.2em] uppercase text-accent mb-4">
      <span className="h-px w-6 bg-gradient-to-r from-accent to-transparent" />
      {children}
      <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
    </p>
  );
}
