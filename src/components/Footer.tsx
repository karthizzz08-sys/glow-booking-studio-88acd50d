import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center font-display text-lg text-primary-foreground">G</span>
            <span className="font-display text-xl">Glow</span>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            {SITE.tagline}. A sanctuary of beauty, care and confidence.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition">
              <Instagram size={16} />
            </a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Explore</h4>
          <ul className="space-y-2 text-sm text-background/75">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Visit Us</h4>
          <ul className="space-y-3 text-sm text-background/75">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" />{SITE.address}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-accent" /><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-accent" />{SITE.email}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-accent">Hours</h4>
          <ul className="space-y-2 text-sm text-background/75">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-2">
                <span>{h.day}</span><span className="text-background/90">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 text-xs text-background/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with love · Bookings via WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
