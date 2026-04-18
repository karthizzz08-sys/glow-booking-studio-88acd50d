import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-salon.jpg";
import facialImg from "@/assets/service-facial.jpg";
import { Award, Sparkles, Users, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Glow Beauty Parlour" },
      { name: "description", content: "A decade of beauty artistry. Meet the team behind Glow Beauty Parlour." },
      { property: "og:title", content: "About Us — Glow Beauty Parlour" },
      { property: "og:description", content: "A decade of beauty artistry. Meet the team behind Glow Beauty Parlour." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Care First", text: "Every guest is treated with warmth, attention and patience." },
  { icon: Sparkles, title: "Premium Products", text: "We only use cruelty-free, dermatologically tested brands." },
  { icon: Award, title: "Expert Artists", text: "A team trained in international bridal & editorial techniques." },
  { icon: Users, title: "Personalised", text: "No two faces are alike — every service is tailored to you." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-5 lg:px-10 bg-gradient-blush text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
        <h1 className="font-display text-4xl md:text-6xl text-foreground">About Glow</h1>
        <div className="gold-divider my-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          A decade of artistry, one mission: to help every woman feel her most confident self.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe"
        >
          <img src={heroImg} alt="Inside Glow Beauty Parlour" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Founded 2014</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
            A sanctuary for skin, hair and self-celebration.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Glow began as a one-chair studio with a simple promise: real results delivered with real warmth.
              Today, we're a team of artists trusted by over 5,000 brides, professionals and weekend treat-seekers.
            </p>
            <p>
              Whether you're here for a quick brow shape or a full bridal trousseau, expect the same attention to detail,
              the same gentle hands, and the same uncompromising standard of clean luxury.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <Stat n="10+" label="Years" />
            <Stat n="5K+" label="Brides" />
            <Stat n="4.9★" label="Rating" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground">What we believe in</h2>
          <div className="gold-divider my-6" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-7 border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-blush flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-lg text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-24 text-center">
        <img src={facialImg} alt="Spa rituals" loading="lazy" className="w-24 h-24 rounded-full object-cover mx-auto shadow-soft" />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mt-8">Come glow with us.</h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Walk in as you are. Walk out feeling unstoppable.
        </p>
        <Link to="/contact" className="inline-block mt-7 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-luxe hover:scale-[1.03] transition-transform">
          Visit the Studio
        </Link>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
