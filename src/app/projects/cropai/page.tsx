import Link from "next/link";

const components = [
  "ESP32 with 7-in-1 Modbus soil sensor",
  "Firebase and MySQL databases",
  "Node.js backend APIs",
  "Machine learning-based crop recommendation system",
  "Fertilizer recommendation engine",
  "AI farmer assistance chatbot",
  "Image-based pest detection system",
  "Mobile application integration",
];

export default function CropAIPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="readout text-[12px] text-muted mb-3">FINAL YEAR PROJECT</p>
      <h1 className="font-heading text-3xl mb-2">CropAI</h1>
      <p className="text-muted mb-10">Smart Agriculture System</p>

      <section className="mb-10">
        <h2 className="readout text-[12px] text-primary mb-3">PROBLEM</h2>
        <p className="text-sm text-muted leading-relaxed">
          Placeholder — the specific farming problem CropAI addresses (e.g.
          lack of real-time soil data, guesswork in crop or fertilizer
          choice) goes here.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="readout text-[12px] text-primary mb-3">SYSTEM COMPONENTS</h2>
        <div className="border border-border rounded-xl divide-y divide-border">
          {components.map((c, i) => (
            <div key={c} className="flex items-baseline gap-3 px-4 py-3 text-sm">
              <span className="readout text-[11px] text-muted w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="readout text-[12px] text-primary mb-3">SCREENSHOTS</h2>
        <div className="border border-dashed border-border rounded-xl h-48 flex items-center justify-center text-sm text-muted readout">
          SCREENSHOT PENDING — DASHBOARD / CHATBOT / PEST DETECTION
        </div>
      </section>

      <section className="mb-12">
        <h2 className="readout text-[12px] text-primary mb-3">RESULTS</h2>
        <p className="text-sm text-muted leading-relaxed">
          Placeholder — model accuracy, sensor read frequency, or any
          before/after farming outcome goes here.
        </p>
      </section>

      <Link href="/projects" className="text-primary text-sm font-medium hover:underline">
        ← See more projects
      </Link>
    </div>
  );
}
