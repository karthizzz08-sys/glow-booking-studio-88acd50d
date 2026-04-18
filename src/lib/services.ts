export type Service = {
  name: string;
  price: string;
  duration: string;
  description: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  blurb: string;
  services: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair Care",
    blurb: "Cuts, colour, and nourishing treatments for hair that turns heads.",
    services: [
      { name: "Signature Haircut & Styling", price: "₹899", duration: "60 min", description: "Consultation, precision cut, blow-dry finish." },
      { name: "Keratin Hair Spa", price: "₹2,499", duration: "90 min", description: "Deep-conditioning ritual for soft, glossy strands." },
      { name: "Global Hair Colour", price: "₹3,499", duration: "120 min", description: "Premium ammonia-free colour with gloss seal." },
      { name: "Smoothening / Botox", price: "₹6,999", duration: "180 min", description: "Frizz-free, salon-smooth hair for months." },
    ],
  },
  {
    id: "skin",
    name: "Skin Care",
    blurb: "Glow-giving facials and advanced skin therapies tailored to you.",
    services: [
      { name: "Glow Hydra Facial", price: "₹1,499", duration: "60 min", description: "Hydration boost with luminous finish." },
      { name: "Anti-Ageing Gold Facial", price: "₹2,999", duration: "75 min", description: "24K gold infusion to lift and firm." },
      { name: "Acne Clarifying Facial", price: "₹1,799", duration: "60 min", description: "Calms, clears, and balances oily skin." },
      { name: "Dermaplaning + Glow Mask", price: "₹2,199", duration: "60 min", description: "Smooth, peach-fuzz-free, instantly radiant." },
    ],
  },
  {
    id: "bridal",
    name: "Bridal Packages",
    blurb: "Curated rituals so every bride arrives at her aisle glowing.",
    services: [
      { name: "Classic Bridal Package", price: "₹14,999", duration: "4 hrs", description: "Makeup, hair, draping, touch-up kit." },
      { name: "Luxury Bridal Suite", price: "₹24,999", duration: "5 hrs", description: "HD makeup, hair, mehendi consult, on-site styling." },
      { name: "Pre-Bridal Glow Plan", price: "₹9,999", duration: "3 sessions", description: "Facials, body polish, hair spa over 4 weeks." },
      { name: "Engagement Look", price: "₹6,999", duration: "2.5 hrs", description: "Soft glam makeup with elegant hairstyling." },
    ],
  },
  {
    id: "makeup",
    name: "Makeup",
    blurb: "From soft glam to red-carpet — flawless looks for every occasion.",
    services: [
      { name: "Party / Event Makeup", price: "₹2,499", duration: "60 min", description: "Polished glam that lasts all night." },
      { name: "HD Airbrush Makeup", price: "₹4,999", duration: "75 min", description: "Camera-ready finish with airbrush technology." },
      { name: "Saree Draping", price: "₹799", duration: "30 min", description: "Elegant draping in your preferred style." },
      { name: "Lash Extensions", price: "₹1,999", duration: "60 min", description: "Wispy, natural-looking volume lashes." },
    ],
  },
];
