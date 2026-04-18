import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Star, Clock, Heart } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import facialImg from "@/assets/service-facial.jpg";
import hairImg from "@/assets/service-hair.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import skincareImg from "@/assets/service-skincare.jpg";
import bridalImg from "@/assets/gallery-bridal-1.jpg";
import bridal2Img from "@/assets/gallery-bridal-2.jpg";
import nailsImg from "@/assets/gallery-nails.jpg";
import hairLongImg from "@/assets/gallery-hair.jpg";
import glowImg from "@/assets/gallery-glow.jpg";
import browsImg from "@/assets/gallery-brows.jpg";
import { waLink } from "@/lib/site";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glow Beauty Parlour — Premium Beauty & Bridal Studio" },
      { name: "description", content: "Bridal makeup, hair spa, facials & skincare in a luxurious salon setting. Book instantly via WhatsApp." },
      { property: "og:title", content: "Glow Beauty Parlour — Premium Beauty & Bridal Studio" },
      { property: "og:description", content: "Bridal makeup, hair spa, facials & skincare in a luxurious salon setting. Book instantly via WhatsApp." },
    ],
  }),
  component: HomePage,
});

const featured = [
  { name: "Signature Facial", img: facialImg, blurb: "Glow-giving rituals." },
  { name: "Bridal Makeup", img: makeupImg, blurb: "Your most radiant day." },
  { name: "Hair Spa", img: hairImg, blurb: "Soft, glossy strands." },
  { name: "Skincare", img: skincareImg, blurb: "Tailored to your skin." },
];

const testimonials = [
  { name: "Aanya Mehta", role: "Bride", quote: "My bridal look was beyond a dream. The team made me feel like the most beautiful version of myself." },
  { name: "Priya Sharma", role: "Regular Guest", quote: "The hydra facial here is unmatched. I leave glowing every single time." },
  { name: "Rhea Kapoor", role: "Influencer", quote: "Soft hands, soft music, soft lighting — pure luxury. My favourite escape in the city." },
];

const galleryPreview = [bridalImg, hairLongImg, nailsImg, glowImg, bridal2Img, browsImg];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[620px] overflow-hidden">
        <img src={heroImg} alt="Glow Beauty Parlour interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/85" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-5">Est. since 2014 · Mumbai</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05]">
                Enhancing your<br />
                <em className="text-primary">natural beauty</em>
              </h1>
              <p className="mt-6 text-lg text-foreground/75 max-w-lg leading-relaxed">
                A sanctuary for skin, hair and bridal artistry — crafted by experts who treat every guest like royalty.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={waLink("Hi, I want to book an appointment")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-luxe hover:scale-[1.03] transition-transform"
                >
                  Book Appointment
                </a>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-full border border-foreground/25 text-foreground bg-background/40 backdrop-blur-sm hover:bg-background/70 transition"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Signature Treatments"
          title="Loved by our guests"
          subtitle="A curated selection of our most-requested rituals — every one designed to make you feel radiant inside and out."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {featured.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
                <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="font-display text-xl mt-5 text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.blurb}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-primary font-medium hover:text-accent transition">View all services →</Link>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="px-5 lg:px-10 mb-24">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-blush p-10 md:p-16 text-center shadow-soft relative overflow-hidden">
          <Sparkles className="absolute top-8 left-8 text-accent/40" size={36} />
          <Sparkles className="absolute bottom-8 right-8 text-accent/40" size={36} />
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Limited Time</p>
          <h3 className="font-display text-3xl md:text-5xl text-foreground">Bridal Glow Package · 20% Off</h3>
          <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
            Book your pre-bridal plan this month and receive a complimentary trial makeup session.
          </p>
          <a
            href={waLink("Hi, I'd like to claim the Bridal Glow 20% offer")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-7 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-luxe hover:scale-[1.03] transition-transform"
          >
            Claim Offer on WhatsApp
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-5 lg:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: "Award-Winning Artists", text: "10+ years of bridal & editorial expertise." },
            { icon: Heart, title: "Skin-First Approach", text: "Cruelty-free, dermatologist-approved products." },
            { icon: Clock, title: "Flexible Bookings", text: "Same-day appointments available via WhatsApp." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-blush flex items-center justify-center mb-5">
                <Icon className="text-primary" size={22} />
              </div>
              <h4 className="font-display text-xl text-foreground">{title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-5 lg:px-10 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Kind Words" title="From our beautiful guests" />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-soft relative"
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="font-display text-lg text-foreground leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 px-5 lg:px-10 max-w-7xl mx-auto">
        <SectionTitle eyebrow="Gallery" title="A glimpse inside the studio" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-14">
          {galleryPreview.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl group">
              <img src={img} alt="Gallery preview" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="text-primary font-medium hover:text-accent transition">View full gallery →</Link>
        </div>
      </section>
    </>
  );
}
