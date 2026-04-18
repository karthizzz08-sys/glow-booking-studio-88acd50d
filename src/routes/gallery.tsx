import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import bridal1 from "@/assets/gallery-bridal-1.jpg";
import bridal2 from "@/assets/gallery-bridal-2.jpg";
import nails from "@/assets/gallery-nails.jpg";
import hair from "@/assets/gallery-hair.jpg";
import brows from "@/assets/gallery-brows.jpg";
import glow from "@/assets/gallery-glow.jpg";
import facial from "@/assets/service-facial.jpg";
import makeup from "@/assets/service-makeup.jpg";
import skincare from "@/assets/service-skincare.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Glow Beauty Parlour" },
      { name: "description", content: "Bridal makeup transformations, hair styling and skincare results from our salon." },
      { property: "og:title", content: "Gallery — Glow Beauty Parlour" },
      { property: "og:description", content: "Bridal makeup transformations, hair styling and skincare results from our salon." },
    ],
  }),
  component: GalleryPage,
});

const sections = [
  {
    title: "Bridal Looks",
    blurb: "Real brides on their most radiant day.",
    images: [bridal1, bridal2],
    layout: "two",
  },
  {
    title: "Before & After",
    blurb: "From everyday to extraordinary.",
    images: [glow, facial],
    layout: "ba",
  },
  {
    title: "Studio Moments",
    blurb: "Hair, nails, brows and the little details we love.",
    images: [hair, nails, brows, makeup, skincare, glow],
    layout: "grid",
  },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-20 pb-12 px-5 lg:px-10 bg-gradient-blush text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Work</p>
        <h1 className="font-display text-4xl md:text-6xl text-foreground">Gallery</h1>
        <div className="gold-divider my-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          A curated edit of recent transformations and behind-the-scenes beauty.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 space-y-20">
        {sections.map((sec) => (
          <section key={sec.title}>
            <div className="mb-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{sec.title}</h2>
              <p className="text-muted-foreground text-sm mt-2">{sec.blurb}</p>
            </div>

            {sec.layout === "two" && (
              <div className="grid md:grid-cols-2 gap-5">
                {sec.images.map((img, i) => (
                  <GalleryImage key={i} src={img} delay={i * 0.1} aspect="aspect-[4/5]" />
                ))}
              </div>
            )}

            {sec.layout === "ba" && (
              <div className="grid md:grid-cols-2 gap-5">
                {sec.images.map((img, i) => (
                  <div key={i} className="relative">
                    <GalleryImage src={img} delay={i * 0.1} aspect="aspect-square" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs uppercase tracking-wider text-foreground">
                      {i === 0 ? "Before" : "After"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {sec.layout === "grid" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sec.images.map((img, i) => (
                  <GalleryImage key={i} src={img} delay={i * 0.05} aspect="aspect-square" />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

function GalleryImage({ src, delay, aspect }: { src: string; delay: number; aspect: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`overflow-hidden rounded-2xl ${aspect} group cursor-zoom-in shadow-soft`}
    >
      <img
        src={src}
        alt="Salon work"
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-[900ms]"
      />
    </motion.div>
  );
}
