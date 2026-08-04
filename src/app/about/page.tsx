export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-3xl mb-8">About</h1>

      <section className="mb-12">
        <p className="text-muted leading-relaxed">
          Computer Science graduate from the Institute of Business
          Administration (IBA), Sukkur, with expertise in Artificial
          Intelligence, Machine Learning, Data Science, Web Development, and
          IoT systems. Skilled in developing practical solutions using
          Python, modern web technologies, databases, and intelligent
          systems. Experienced in building AI-powered applications, smart
          agriculture solutions, and responsive web projects. Passionate
          about technology, continuous learning, and creating innovative
          solutions that solve real-world problems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="readout text-[12px] text-primary mb-5">TECHNICAL SKILLS</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "AI & Machine Learning",
              items: "Python, TensorFlow, Keras, PyTorch, Scikit-learn, NumPy, Pandas, Deep Learning (MLP, CNN, RNN), Computer Vision, EDA, Feature Engineering",
            },
            {
              title: "Full-Stack & Web",
              items: "HTML, CSS, JavaScript, Node.js, REST APIs, Responsive Web Development, Frontend & Backend Integration",
            },
            {
              title: "Backend & Databases",
              items: "Node.js, RESTful API Development, MySQL, Database Design & Management, Time-Series Data Storage",
            },
            {
              title: "IoT & Embedded Systems",
              items: "ESP32, Modbus Sensors, Sensor-to-Cloud Architecture, IoT Data Acquisition, Real-Time Monitoring, Smart Agriculture Solutions",
            },
            {
              title: "Programming Languages",
              items: "Python, JavaScript, Data Structures, Assembly Language, C++, Java",
            },
          ].map((group) => (
            <div key={group.title} className="border border-border rounded-xl p-5">
              <h3 className="font-medium text-sm mb-2">{group.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="readout text-[12px] text-primary mb-5">CERTIFICATIONS</h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
          {[
            "Google AI Essentials",
            "Google Prompting Essentials",
            "Anthropic AI Fluency",
            "Claude Cowork",
            "Claude Code in Action",
            "Claude Code 101",
            "Claude 101",
            "MongoDB",
            "Web Development",
          ].map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted inline-block" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <a href="/contact" className="text-primary text-sm font-medium hover:underline">
        Contact me →
      </a>
    </div>
  );
}
