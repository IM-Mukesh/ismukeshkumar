export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background" aria-hidden="true">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px] animate-float-a" />
      <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-2/20 blur-[120px] animate-float-b" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[110px] animate-float-a" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 bg-noise-fine opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}
