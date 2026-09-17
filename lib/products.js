export const PRODUCTS = [
  { slug: "standard-fan-card", name: "Standard Fan Card", type: "fan_card", priceCents: 40000 },
  { slug: "vip-fan-card", name: "VIP Fan Card", type: "fan_card", priceCents: 100000 },
  { slug: "regular-ticket", name: "Regular Ticket", type: "ticket", priceCents: 3000 },
  { slug: "vip-ticket", name: "VIP Ticket", type: "ticket", priceCents: 10000 }
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
