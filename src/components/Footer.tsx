export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px] text-muted readout">
        <span>© {new Date().getFullYear()} SANJINA TALIB</span>
        <div className="flex gap-6">
          <a href="mailto:sanjinajtalib@gmail.com" className="hover:text-foreground">
            EMAIL
          </a>
          <a
            href="https://www.linkedin.com/in/sanjinatalib-052175285"
            className="hover:text-foreground"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
