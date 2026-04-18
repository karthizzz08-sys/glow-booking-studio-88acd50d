import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { SectionTitle } from "@/components/SectionTitle";
import { BookingDialog } from "@/components/BookingDialog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Glow Beauty Parlour" },
      { name: "description", content: "Hair care, skincare, bridal packages and makeup services with transparent pricing. Book instantly via WhatsApp." },
      { property: "og:title", content: "Services & Pricing — Glow Beauty Parlour" },
      { property: "og:description", content: "Hair care, skincare, bridal packages and makeup services with transparent pricing." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-5 lg:px-10 bg-gradient-blush">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Menu</p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground">Services & Pricing</h1>
          <div className="gold-divider my-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing. No hidden fees. Tap "Book Now" on any service to message us on WhatsApp.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-16 space-y-20">
        {SERVICE_CATEGORIES.map((cat, idx) => (
          <section key={cat.id} id={cat.id}>
            <SectionTitle eyebrow={`0${idx + 1}`} title={cat.name} subtitle={cat.blurb} />
            <div className="grid md:grid-cols-2 gap-5 mt-12">
              {cat.services.map((s, i) => (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-2xl p-7 hover:shadow-soft hover:border-accent/40 transition group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-display text-xl text-foreground">{s.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.description}</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-3">
                        <Clock size={13} />{s.duration}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-2xl text-primary">{s.price}</div>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Available daily</span>
                    <BookingDialog serviceName={s.name} />
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
