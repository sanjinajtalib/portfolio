import Link from "next/link";

const projects = [
  {
    slug: "cropai",
    name: "CropAI",
    tag: "AI · IoT · Final year project",
    desc: "Smart agriculture platform: ESP32 soil sensors, ML crop recommendation, fertilizer engine, pest detection, and a farmer chatbot.",
    link: "/projects/cropai",
  },
  {
    slug: "coffee-point",
    name: "Coffee-Point",
    tag: "Web development",
    desc: "Web-based coffee shop management and presentation platform with menu management and a responsive UI.",
    link: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-heading text-2xl mb-1">Projects</h1>
      <p className="text-muted text-sm mb-10">
        Strongest work first — CropAI is the flagship build.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div key={p.slug} className="border border-border rounded-xl p-6">
            <p className="readout text-[11px] text-muted mb-2">{p.tag.toUpperCase()}</p>
            <h2 className="font-heading text-lg mb-2">{p.name}</h2>
            <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            {p.link && (
              <Link href={p.link} className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
                View case study →
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-border">
        <a href="/about" className="text-primary text-sm font-medium hover:underline">
          Download resume →
        </a>
      </div>
    </div>
  );
}
