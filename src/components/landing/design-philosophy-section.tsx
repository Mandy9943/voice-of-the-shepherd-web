export function DesignPhilosophySection() {
  return (
    <section className="relative overflow-hidden w-full py-section-gap bg-gradient-to-tr from-vos-muted/80 via-vos-bg-light to-vos-muted/80 bg-200% animate-gradient-shift">
      <div
        className="absolute inset-0 -z-10 opacity-70" // Increased opacity from 30 to 70
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.15) 10px, rgba(0, 0, 0, 0.15) 13px)", // Darker, thicker lines
        }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-screen-lg animate-fade-in-up">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-vos-bg-light rounded-3xl shadow-lifted border-2 border-vos-border/60 hover:shadow-xl transition-all duration-500 ease-out relative overflow-hidden">
          <div className="absolute -inset-px rounded-3xl border-2 border-transparent hover:border-vos-accent/30 transition-all duration-500 pointer-events-none" />
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-vos-primary tracking-tight leading-tight">
            Crafted with Reverence, Designed for Peace
          </h2>
          <div className="prose prose-lg md:prose-xl prose-p:text-vos-secondary prose-strong:text-vos-primary prose-strong:font-semibold mx-auto text-vos-secondary leading-relaxed space-y-5">
            <p>
              We believe technology can be a sacred tool for spiritual growth. Our design philosophy is rooted in{" "}
              <strong className="text-vos-primary">intention, reverence, and tranquility</strong>. We strive to create a
              calm, focused, and respectful digital sanctuary.
            </p>
            <p>
              Every detail, from the soothing color palette to the elegant typography, is chosen to{" "}
              <strong className="text-vos-primary">minimize distraction and deepen your connection</strong> with the
              profound words of <strong className="text-vos-accent font-bold">Jesus Christ</strong>. Our aim is an
              experience that allows you to truly{" "}
              <strong className="text-vos-primary">listen, reflect, and be still</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
