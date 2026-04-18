import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Glow Beauty Parlour" },
      { name: "description", content: "Visit, call or WhatsApp us. We're open 7 days a week in Bandra West, Mumbai." },
      { property: "og:title", content: "Contact — Glow Beauty Parlour" },
      { property: "og:description", content: "Visit, call or WhatsApp us. We're open 7 days a week in Bandra West, Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-5 lg:px-10 bg-gradient-blush text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Say Hello</p>
        <h1 className="font-display text-4xl md:text-6xl text-foreground">Get in Touch</h1>
        <div className="gold-divider my-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          We'd love to host you. Reach out anytime — we respond within minutes on WhatsApp.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-5">
          <ContactCard icon={MapPin} title="Visit the Studio" sub={SITE.address} action={{ href: "https://maps.google.com", label: "Get directions" }} />
          <ContactCard icon={Phone} title="Call Us" sub={SITE.phoneDisplay} action={{ href: `tel:${SITE.phone}`, label: "Tap to call" }} />
          <ContactCard icon={Mail} title="Email" sub={SITE.email} action={{ href: `mailto:${SITE.email}`, label: "Send a note" }} />

          <a
            href={waLink("Hi, I want to book an appointment")}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 rounded-2xl text-white font-medium shadow-luxe hover:scale-[1.01] transition"
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            💬 Chat with us on WhatsApp
          </a>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Clock size={18} />
              <h3 className="font-display text-lg">Working Hours</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-foreground/80">
                  <span>{h.day}</span><span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition">
              <Instagram size={18} />
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-luxe min-h-[480px]">
          <iframe
            title="Glow Beauty Parlour location"
            src={SITE.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 480 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon, title, sub, action,
}: { icon: typeof Phone; title: string; sub: string; action: { href: string; label: string } }) {
  return (
    <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6 hover:shadow-soft transition">
      <div className="w-12 h-12 rounded-full bg-gradient-blush flex items-center justify-center shrink-0">
        <Icon className="text-primary" size={20} />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>
        <a href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
          className="text-sm text-primary hover:text-accent font-medium inline-block mt-2">
          {action.label} →
        </a>
      </div>
    </div>
  );
}
