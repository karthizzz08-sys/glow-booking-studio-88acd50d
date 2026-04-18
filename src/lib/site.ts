export const SITE = {
  name: "Glow Beauty Parlour",
  tagline: "Enhancing Your Natural Beauty",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210", // digits only for wa.me
  email: "hello@glowbeauty.com",
  address: "12 Rose Avenue, Bandra West, Mumbai 400050",
  hours: [
    { day: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123!2d72.8347!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1700000000000",
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
