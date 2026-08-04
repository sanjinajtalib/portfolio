import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-14">
        <p className="readout text-[12px] text-muted mb-5">
          COMPUTER SCIENCE — IBA SUKKUR
        </p>
        <h1 className="font-heading text-[2.75rem] sm:text-5xl leading-[1.1] max-w-2xl">
          I build AI systems end-to-end — from soil sensors to deployed
          models.
        </h1>
        <p className="mt-5 text-muted max-w-xl leading-relaxed">
          AI/ML, IoT, and full-stack development. Built CropAI, a smart
          agriculture platform combining sensor hardware, machine learning,
          and a farmer-facing app.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/projects/cropai"
            className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium"
          >
            View CropAI case study
          </Link>
          <Link
            href="/projects"
            className="border border-border px-5 py-2.5 rounded-md text-sm font-medium hover:border-foreground transition-colors"
          >
            All projects
          </Link>
        </div>
      </section>

      {/* Signature: system status readout */}
      <section className="border-y border-border bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap gap-y-2 gap-x-8 readout text-[12px] text-muted">
          <span>
            STACK <span className="text-foreground">PYTHON / TENSORFLOW / NODE.JS / REACT</span>
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>
            SENSORS <span className="text-foreground">ESP32 · MODBUS · FIREBASE</span>
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-1.5">
            STATUS
            <span className="w-1.5 h-1.5 rounded-full bg-signal inline-block" />
            <span className="text-foreground">OPEN TO WORK</span>
          </span>
        </div>
      </section>

      {/* Featured project — leads with strongest work */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="readout text-[12px] text-muted mb-6">FEATURED PROJECT</p>
        <div className="border border-border rounded-xl overflow-hidden grid sm:grid-cols-2">
          <div className="p-8 flex flex-col">
            <h2 className="font-heading text-2xl mb-3">
              CropAI — Smart Agriculture System
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              A complete AI-powered agriculture platform: real-time soil
              sensing via ESP32, a crop and fertilizer recommendation engine,
              image-based pest detection, and an AI farmer assistant —
              connected end to end through a Node.js backend.
            </p>
            <div className="mt-auto">
              <Link href="/projects/cropai" className="text-primary text-sm font-medium hover:underline">
                View case study →
              </Link>
            </div>
          </div>
          <div className="bg-[#FAFAFA] border-t sm:border-t-0 sm:border-l border-border flex items-center justify-center min-h-[220px] text-muted text-sm readout">
            SCREENSHOT PENDING
          </div>
        </div>
      </section>
    </div>
  );
}
