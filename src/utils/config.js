// ===================================================
// HOUSE OF BLUSH by Sargam — CONFIGURATION & ASSETS
// Website Concept Demo by CREVINOX
// ===================================================

export const BRAND = {
  name: 'HOUSE OF BLUSH',
  signature: 'by Sargam',
  tagline: 'Your Beauty, Beautifully Expressed.',
  instagramHandle: '@houseofblush_by_sargam',
  instagramUrl: 'https://www.instagram.com/houseofblush_by_sargam/',
  developerCredit: 'Website concept by CREVINOX',
  developerUrl: 'https://crevinox.com',
};

// ⚠️ CONFIGURABLE SALON DETAILS
// IMPORTANT: Do not invent real address, phone number, or prices.
// These fields are left configurable and clearly indicate demo status until confirmed by Sargam.
export const SALON_CONFIG = {
  // Configurable WhatsApp number: Country code + 10 digits without spaces or '+'
  // Example for India: '919876543210'
  // When empty, the booking flow gracefully displays an enquiry review with a note that contact info will be added.
  whatsappNumber: '', 

  // Configurable contact phone number
  phone: '', // Will display configurable fallback if blank

  // Configurable salon address
  address: '', // Example: 'Studio Location to be updated by Sargam'

  // Configurable operating hours
  hours: {
    weekdays: 'Mon – Sat: By Appointment',
    sunday: 'Sunday: Prior Booking Only',
    note: 'Consultation & bridal trials scheduled upon request',
  },

  // Service pricing policy
  pricingNote: 'Custom quote provided upon consultation based on personalized styling requirements',
};

// Editorial beauty imagery curated for House of Blush aesthetic
// Soft blush pinks, warm ivory, natural lighting, and refined makeup artistry
export const IMAGES = {
  // Hero: High-end beauty portrait with soft dewy glow and warm editorial tone
  hero: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1920&q=85&auto=format&fit=crop',

  // Brand Story: Natural makeup artist & client moment / refined beauty portrait
  about: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=85&auto=format&fit=crop',

  // Signature Experience: Striking editorial portrait celebrating personal radiance
  signature: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85&auto=format&fit=crop',

  // Services Showcase
  services: {
    makeup: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80&auto=format&fit=crop',
    bridal: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
    hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&auto=format&fit=crop',
    skincare: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
    nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop',
    treatments: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
  },

  // Portfolio & Beauty Gallery (Masonry Layout with varying aspect ratios)
  gallery: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85&auto=format&fit=crop',
      alt: 'Bridal glow and bespoke styling',
      category: 'Bridal Beauty',
      aspect: 'tall',
      caption: 'Soft glam bridal glow with traditional elegance',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&q=85&auto=format&fit=crop',
      alt: 'Editorial eye and lip artistry',
      category: 'Makeup Looks',
      aspect: 'wide',
      caption: 'Dewy skin texture with delicate rose tones',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85&auto=format&fit=crop',
      alt: 'Soft textured waves and hair styling',
      category: 'Hair Styling',
      aspect: 'medium',
      caption: 'Effortless textured bridal waves',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop',
      alt: 'Close-up beauty details and lash definition',
      category: 'Close-up Details',
      aspect: 'medium',
      caption: 'Fine precision makeup and skin finish',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=85&auto=format&fit=crop',
      alt: 'Salon atmosphere and intimate beauty space',
      category: 'Salon Atmosphere',
      aspect: 'tall',
      caption: 'A calm, serene environment curated for relaxation',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=85&auto=format&fit=crop',
      alt: 'Occasion glam styling and glowing complexion',
      category: 'Makeup Looks',
      aspect: 'tall',
      caption: 'Editorial evening glam with defined contours',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85&auto=format&fit=crop',
      alt: 'Minimalist chic manicure and nail art',
      category: 'Close-up Details',
      aspect: 'medium',
      caption: 'Refined nude blush manicure detailing',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=85&auto=format&fit=crop',
      alt: 'Behind the scenes makeup preparation',
      category: 'Behind-the-Scenes',
      aspect: 'wide',
      caption: 'Personalized trial sessions and creative process',
    },
  ],

  // Instagram Feed preview
  instagram: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80&auto=format&fit=crop',
      alt: 'Bridal transformation preview',
      likes: 'Bridal Glam',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=500&q=80&auto=format&fit=crop',
      alt: 'Monochromatic blush tones',
      likes: 'Signature Look',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80&auto=format&fit=crop',
      alt: 'Hair styling detail',
      likes: 'Hair Artistry',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80&auto=format&fit=crop',
      alt: 'Behind the chair session',
      likes: 'Studio Moments',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80&auto=format&fit=crop',
      alt: 'Occasion party makeup',
      likes: 'Evening Glow',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80&auto=format&fit=crop',
      alt: 'Nail styling aesthetic',
      likes: 'Editorial Nails',
    },
  ],
};

// Potential suggested service categories (editable and removable)
export const SUGGESTED_SERVICES = [
  {
    id: 'makeup',
    title: 'Occasion & Editorial Makeup',
    shortDesc: 'Artfully curated makeup tailored to complement your natural bone structure, skin tone, and personal aesthetic for special celebrations.',
    image: IMAGES.services.makeup,
    badge: 'Popular',
  },
  {
    id: 'bridal',
    title: 'Bridal Makeup & Styling',
    shortDesc: 'A comprehensive, serene bridal experience from in-depth styling consultation to long-lasting radiant wedding day artistry.',
    image: IMAGES.services.bridal,
    badge: 'Signature',
  },
  {
    id: 'hair',
    title: 'Hair Styling & Draping',
    shortDesc: 'Contemporary editorial waves, romantic updos, and intricate traditional saree or dupatta draping designed to harmonize your entire look.',
    image: IMAGES.services.hair,
  },
  {
    id: 'skincare',
    title: 'Skincare Prep & Facials',
    shortDesc: 'Gentle hydration therapies and skin prep treatments that create the smooth, illuminated canvas essential for flawless makeup application.',
    image: IMAGES.services.skincare,
  },
  {
    id: 'nails',
    title: 'Nail Services & Artistry',
    shortDesc: 'Clean, elegant manicures, soft blush overlays, and bespoke nail aesthetics that add subtle polish to your personal style.',
    image: IMAGES.services.nails,
  },
  {
    id: 'treatments',
    title: 'Bespoke Beauty Treatments',
    shortDesc: 'Customized beauty sessions designed around your upcoming events, celebrating your individual style in an unhurried atmosphere.',
    image: IMAGES.services.treatments,
  },
];
