import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-display text-lg text-primary-foreground shadow-soft">G</span>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground">Glow</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Beauty Parlour</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink("Hi, I want to book an appointment")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft"
        >
          Book Appointment
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md animate-float-up">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/85 py-1"
                activeProps={{ className: "text-primary font-medium" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={waLink("Hi, I want to book an appointment")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            >
              Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`} className="text-center text-sm text-muted-foreground">
              or call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
