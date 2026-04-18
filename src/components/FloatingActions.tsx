import { Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call us"
        className="fixed bottom-24 right-5 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-accent text-accent-foreground shadow-luxe flex items-center justify-center hover:scale-110 transition-transform"
        style={{ width: 52, height: 52 }}
      >
        <Phone size={20} />
      </a>
      <a
        href={waLink("Hi, I want to book an appointment")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full text-white shadow-luxe flex items-center justify-center hover:scale-110 transition-transform animate-pulse-ring"
        style={{ width: 60, height: 60, backgroundColor: "var(--whatsapp)" }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.633.633 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.717 2.722.717.817 0 2.15-.272 2.495-1.04.115-.244.244-.487.244-.766 0-.215.058-.487-.114-.616-.144-.144-2.366-1.418-2.61-1.418Zm-2.84 7.066h-.014a9.234 9.234 0 0 1-4.69-1.286l-.331-.2-3.486.916.93-3.4-.215-.345a9.169 9.169 0 0 1-1.404-4.888c.014-5.071 4.13-9.187 9.215-9.187a9.124 9.124 0 0 1 6.501 2.694 9.106 9.106 0 0 1 2.681 6.5c0 5.071-4.13 9.187-9.187 9.187Zm7.812-16.985A11.014 11.014 0 0 0 16.27 4c-6.085 0-11.027 4.942-11.04 11.013a10.92 10.92 0 0 0 1.473 5.508L5.13 26.59l6.214-1.633a11.057 11.057 0 0 0 5.265 1.34h.014c6.071 0 11.027-4.942 11.04-11.013a10.961 10.961 0 0 0-3.224-7.798Z" />
        </svg>
      </a>
    </>
  );
}
