/* DOUGH LAB — editable business config + menu data. Owner: update prices here. */
const SITE_CONFIG = {
  CAFE_NAME: "Dough Lab",
  ADDRESS: "[ADD ADDRESS]",
  CITY: "[ADD CITY]",
  PHONE: "[ADD PHONE]",
  PHONE_LINK: "tel:+910000000000",
  EMAIL: "[ADD EMAIL]",
  INSTAGRAM: "[ADD INSTAGRAM]",
  INSTAGRAM_URL: "#",
  WHATSAPP: "[ADD WHATSAPP]",
  WHATSAPP_LINK: "https://wa.me/910000000000?text=Hi%20Dough%20Lab!%20I%27d%20like%20to%20place%20an%20order.",
  HOURS: "[ADD HOURS — e.g. Tue–Sun · 11:30am – 10:30pm]",
  MAPS_URL: "https://maps.google.com/?q=Dough+Lab",
  ORDER_URL: "#visit",
  YEAR: new Date().getFullYear(),
};

/* Menu source of truth — transcribed from physical menu boards. Do not normalize prices. */
const MENU_DATA = {
  "signature-sourdough": {
    label: "Signature Sourdough",
    note: "Large · whole wheat + 00 flour blend · hand-stretched · aged Parmesan finish on select pizzas",
    items: [
      { name: "Margherita Classico", price: 320, desc: "Classic tomato sauce, mozzarella + cheddar.", tags: ["VEG", "SIGNATURE"] },
      { name: "Verdure Trio", price: 350, desc: "Onion, capsicum and jalapeños with cheese and pizza sauce.", tags: ["VEG", "SPICY"] },
      { name: "Veggie House", price: 399, desc: "Loaded veggie pizza with rich sauce and generous cheese.", tags: ["VEG", "POPULAR"] },
      { name: "Spicy Korean", price: 390, desc: "Tangy, spicy fusion flavours topped with gooey cheese.", tags: ["VEG", "SPICY", "POPULAR"] },
      { name: "Cottage Feast", price: 450, desc: "Cottage cheese, jalapeños and capsicum with cheese blend.", tags: ["VEG", "SPICY"] },
      { name: "Makhani Cottage", price: 450, desc: "Creamy makhani cottage with capsicum and melted cheese.", tags: ["VEG", "SIGNATURE"] },
      { name: "Jain Special", price: 350, desc: "Capsicum, olives, corn and jalapeños with cheese and Jain pizza sauce.", tags: ["VEG", "JAIN"] },
    ],
  },
  "classic-dough": {
    label: "Classic Dough",
    note: "Medium / Large · the everyday classic base",
    items: [
      { name: "Margherita", price: "150 / 290", desc: "Classic cheese and tomato.", tags: ["VEG"] },
      { name: "Capsicum n Onion", price: "180 / 299", desc: "Crunchy capsicum, sweet onion, pizza sauce.", tags: ["VEG"] },
      { name: "Spicy Veggie Trio", price: "190 / 310", desc: "Three-veg heat with cheese.", tags: ["VEG", "SPICY"] },
      { name: "Farmhouse Delight", price: "199 / 350", desc: "Garden vegetables, generous cheese.", tags: ["VEG", "POPULAR"] },
      { name: "Paneer Makhani", price: "230 / 390", desc: "Creamy makhani paneer.", tags: ["VEG"] },
      { name: "Spicy Paneer", price: "230 / 390", desc: "Fiery paneer, bold spice.", tags: ["VEG", "SPICY"] },
      { name: "Spicy Korean", price: "210 / 350", desc: "Classic-base take on the fusion favourite.", tags: ["VEG", "SPICY"] },
    ],
  },
  "new-york-style": {
    label: "New York Style Sourdough",
    note: "Foldable slices · sourdough character · lean and crisp",
    items: [
      { name: "Margherita Classico", price: 190, desc: "Tomato, mozzarella + cheddar.", tags: ["VEG"] },
      { name: "Verdure Trio", price: 230, desc: "Onion, capsicum, jalapeños.", tags: ["VEG"] },
      { name: "Veggie House", price: 250, desc: "Loaded veggie, rich sauce.", tags: ["VEG"] },
      { name: "Spicy Korean", price: 250, desc: "Tangy-spicy fusion, gooey cheese.", tags: ["VEG", "SPICY"] },
      { name: "Cottage Feast", price: 280, desc: "Cottage, jalapeños, capsicum.", tags: ["VEG"] },
      { name: "Makhani Cottage", price: 280, desc: "Creamy makhani cottage, capsicum.", tags: ["VEG"] },
      { name: "Jain Special", price: 250, desc: "Jain sauce, capsicum, olives, corn, jalapeños.", tags: ["VEG", "JAIN"] },
    ],
  },
  "deep-dish": {
    label: "Chicago Deep Dish",
    note: "One size · baked deep · unapologetically cheesy",
    items: [{ name: "Deep Dish Pizza", price: 320, desc: "Chicago style — deep, cheesy, slow-baked.", tags: ["VEG", "SIGNATURE"] }],
  },
  sandwiches: {
    label: "Sourdough Sandwiches",
    note: "Makhani / Tandoori options",
    items: [
      { name: "Veg Sandwich", price: 160, desc: "Makhani / Tandoori.", tags: ["VEG"] },
      { name: "Veg Garlic Sandwich", price: 199, desc: "Makhani / Tandoori, garlic kick.", tags: ["VEG"] },
      { name: "Paneer Sandwich", price: 240, desc: "Makhani / Tandoori paneer.", tags: ["VEG", "POPULAR"] },
    ],
  },
  "garlic-bread": {
    label: "Sourdough Garlic Bread",
    note: "Baked on sourdough",
    items: [
      { name: "Plain Garlic Bread", price: 99, desc: "Butter, garlic, herbs.", tags: ["VEG"] },
      { name: "Cheese Garlic Bread", price: 140, desc: "Molten cheese pull.", tags: ["VEG", "POPULAR"] },
      { name: "Corn n Jalapeños Bread", price: 160, desc: "Sweet corn heat.", tags: ["VEG", "SPICY"] },
    ],
  },
  burgers: {
    label: "Burgers",
    note: "Add ₹40 for any burger with fries",
    items: [
      { name: "Aloo Tikki Burger", price: 70, desc: "Crisp tikki, classic comfort.", tags: ["VEG"] },
      { name: "Classic Veg Burger", price: 110, desc: "The everyday stack.", tags: ["VEG"] },
      { name: "Makhani Veg Burger", price: 130, desc: "Creamy makhani twist.", tags: ["VEG"] },
      { name: "Tandoori Veg Burger", price: 130, desc: "Smoky tandoori flavour.", tags: ["VEG"] },
      { name: "Spicy Veg Burger", price: 150, desc: "For heat seekers.", tags: ["VEG", "SPICY"] },
    ],
  },
  fries: {
    label: "Fries",
    note: "Crisp, salted, shareable",
    items: [
      { name: "Classic Fries", price: 70, desc: "Salted and crisp.", tags: ["VEG"] },
      { name: "Peri Peri Fries", price: 99, desc: "Fiery peri peri dust.", tags: ["VEG", "SPICY"] },
      { name: "Cheese Loaded Fries", price: 120, desc: "Saucy cheese overload.", tags: ["VEG", "POPULAR"] },
    ],
  },
  beverages: {
    label: "Beverages",
    note: "Coffee, shakes and frappes",
    items: [
      { name: "Hot Coffee", price: 40, desc: "", tags: ["VEG"] },
      { name: "Hot Chocolate", price: 50, desc: "", tags: ["VEG"] },
      { name: "Cold Coffee", price: 80, desc: "", tags: ["VEG"] },
      { name: "Oreo Shake", price: 99, desc: "", tags: ["VEG"] },
      { name: "Strawberry Shake", price: 99, desc: "", tags: ["VEG"] },
      { name: "Mango Shake", price: 99, desc: "", tags: ["VEG"] },
      { name: "Chocolate Shake", price: 100, desc: "", tags: ["VEG"] },
      { name: "Vanilla Frappe", price: 120, desc: "", tags: ["VEG"] },
      { name: "Hazelnut Cold Coffee", price: 120, desc: "", tags: ["VEG"] },
      { name: "Irish Cold Coffee", price: 120, desc: "", tags: ["VEG"] },
      { name: "Caramel Cold Coffee", price: 120, desc: "", tags: ["VEG"] },
    ],
  },
  mocktails: {
    label: "Mocktails",
    note: "Cold, fizzy, fresh",
    items: [
      { name: "Mint Mojito", price: 99, desc: "", tags: ["VEG"] },
      { name: "Blue Lagoon", price: 99, desc: "", tags: ["VEG"] },
      { name: "Watermelon Punch", price: 99, desc: "", tags: ["VEG"] },
      { name: "Pepsi", price: 50, desc: "", tags: ["VEG"] },
    ],
  },
};

/* Signature pizzas are curated in index.html (#signatures) from the data above. */
