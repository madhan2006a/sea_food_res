import { useState } from "react";
import { Star, Flame, Leaf } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import cateringEvent from "@/assets/catering-event.jpg";

const categories = ["All", "Seafood", "Curries", "Grills", "Vegetarian", "Desserts"];

const menuItems = [
  {
    id: 1,
    image: food1,
    name: "Fish Feast on Banana Leaf",
    tamilName: "மீன் குழம்பு விருந்து",
    category: "Seafood",
    price: "₹649",
    rating: 4.9,
    spice: 3,
    isVeg: false,
    isBestseller: true,
    desc: "Traditional Tamil seafood feast with coconut rice, sambar, prawn masala & fresh fish curry served on a banana leaf.",
  },
  {
    id: 2,
    image: food2,
    name: "King Prawn Grill",
    tamilName: "இறால் வறுவல்",
    category: "Grills",
    price: "₹849",
    rating: 4.8,
    spice: 2,
    isVeg: false,
    isBestseller: true,
    desc: "Fresh king prawns marinated in coastal Chettinad spices and charcoal-grilled with herb butter.",
  },
  {
    id: 3,
    image: food3,
    name: "Chettinad Fish Curry",
    tamilName: "செட்டிநாடு மீன் குழம்பு",
    category: "Curries",
    price: "₹449",
    rating: 4.9,
    spice: 4,
    isVeg: false,
    isBestseller: false,
    desc: "Slow-cooked in a clay pot with handpicked Chettinad spices and fresh coastal fish.",
  },
  {
    id: 4,
    image: cateringEvent,
    name: "Beach Feast Platter",
    tamilName: "கடற்கரை விருந்து",
    category: "Seafood",
    price: "₹1299",
    rating: 4.7,
    spice: 3,
    isVeg: false,
    isBestseller: false,
    desc: "A grand seafood platter for two — lobster, prawns, squid rings, and fish tikka served with coastal chutneys.",
  },
  {
    id: 5,
    image: food1,
    name: "Coconut Milk Prawn Curry",
    tamilName: "தேங்காய்ப்பால் இறால் குழம்பு",
    category: "Curries",
    price: "₹549",
    rating: 4.8,
    spice: 2,
    isVeg: false,
    isBestseller: true,
    desc: "Creamy coconut milk-based prawn curry with raw mango and fresh curry leaves — a coastal classic.",
  },
  {
    id: 6,
    image: food3,
    name: "Vazhaipoo Vadai",
    tamilName: "வாழைப்பூ வடை",
    category: "Vegetarian",
    price: "₹149",
    rating: 4.6,
    spice: 1,
    isVeg: true,
    isBestseller: false,
    desc: "Crispy banana flower fritters with ginger-coconut chutney — a beloved Tamil street food classic.",
  },
];

const events = [
  {
    title: "Weekend Seafood Festival",
    tamilTitle: "வாராந்திர கடல் உணவு விழா",
    date: "Every Saturday & Sunday",
    desc: "Special seafood buffet with live fish BBQ station, folk music performances, and coastal craft displays.",
    badge: "Regular Event",
  },
  {
    title: "Pongal Grand Feast",
    tamilTitle: "பொங்கல் பெரு விருந்து",
    date: "January 14–16, 2025",
    desc: "Celebrate Tamil harvest festival with traditional Pongal, Sakkarai Pongal, and 25+ authentic Tamil dishes.",
    badge: "Upcoming",
  },
  {
    title: "Fishermen's Night",
    tamilTitle: "மீனவர்களின் இரவு",
    date: "First Friday of Every Month",
    desc: "A special tribute menu featuring recipes passed down by generations of coastal Tamil fishermen.",
    badge: "Monthly Special",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div className="relative py-24 gradient-wave overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-body text-sm font-semibold mb-4">
            Our Culinary Universe
          </span>
          <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            சிறப்பு உணவுகள்
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">
            Special dishes, events & our celebrated food gallery
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-[hsl(var(--background))]">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-[hsl(var(--primary))] mb-4">
              Our Menu
            </h2>
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "gradient-ocean text-white shadow-[var(--shadow-md)]"
                      : "bg-white border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[hsl(var(--border))] hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isBestseller && (
                      <span className="px-2.5 py-1 rounded-full bg-[hsl(var(--sand-gold))] text-[hsl(var(--primary))] font-body text-xs font-bold">
                        ⭐ Bestseller
                      </span>
                    )}
                    {item.isVeg && (
                      <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs font-bold">
                        🌿 Veg
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-base text-[hsl(var(--primary))] leading-tight">
                        {item.name}
                      </h3>
                      <p className="font-body text-xs text-[hsl(var(--secondary))] font-medium mt-0.5">
                        {item.tamilName}
                      </p>
                    </div>
                    <span className="font-display font-bold text-xl text-[hsl(var(--secondary))] ml-2 flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[hsl(var(--sand-gold))]" fill="currentColor" />
                        <span className="font-body text-xs font-semibold text-[hsl(var(--foreground))]">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: item.spice }).map((_, j) => (
                          <Flame key={j} className="w-3 h-3 text-[hsl(var(--coral))]" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-4">
              Special Occasions
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-4">
              நிகழ்வுகள்
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] font-body text-lg max-w-xl mx-auto">
              Events, festivals & special dining experiences at அலைகடல்
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[hsl(var(--border))] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-xs font-bold mb-4">
                  {event.badge}
                </span>
                <h3 className="font-display font-bold text-xl text-[hsl(var(--primary))] mb-1">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-[hsl(var(--secondary))] font-medium mb-2">
                  {event.tamilTitle}
                </p>
                <p className="font-body text-xs text-[hsl(var(--muted-foreground))] font-semibold mb-3 flex items-center gap-1">
                  📅 {event.date}
                </p>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-4">
              Visual Feast
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-4">
              உணவு காட்சி
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] font-body text-lg max-w-xl mx-auto">
              A glimpse into our world of flavors, ambiance & coastal cuisine artistry
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[food1, food2, food3, cateringEvent, food1, food2, food3, cateringEvent].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    i === 0 || i === 5 ? "h-64 md:h-80" : "h-40 md:h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
