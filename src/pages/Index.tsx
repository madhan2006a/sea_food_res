import { Link } from "react-router-dom";
import { ArrowRight, Star, ChefHat, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const stats = [
  { icon: ChefHat, value: "25+", label: "Expert Chefs" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const featuredDishes = [
  {
    image: food1,
    name: "மீன் குழம்பு விருந்து",
    nameEn: "Fish Feast on Banana Leaf",
    desc: "Traditional Tamil seafood feast served with coconut rice, sambar & fresh prawns",
    price: "₹649",
    tag: "Chef's Special",
  },
  {
    image: food2,
    name: "இறால் வறுவல்",
    nameEn: "King Prawn Grill",
    desc: "Fresh king prawns marinated in coastal spices, grilled to perfection",
    price: "₹849",
    tag: "Best Seller",
  },
  {
    image: food3,
    name: "செட்டிநாடு மீன் குழம்பு",
    nameEn: "Chettinad Fish Curry",
    desc: "Slow-cooked in authentic clay pot with handpicked Chettinad spices",
    price: "₹449",
    tag: "Traditional",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Overlay with complex gradient for left-aligned text readability */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="அலைகடல் உணவகம் restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,80%,10%,0.95)] via-[hsl(207,80%,10%,0.75)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(207,80%,10%,0.5)]" />
        </div>

        {/* Decorative Wave Elements - Unique Format */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[hsl(var(--sand-gold)/0.1)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-[hsl(var(--secondary)/0.15)] rounded-full blur-3xl animate-float" />

        {/* Hero Content - Centered on Mobile, Left on Desktop */}
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-fade-slide-up">
              <Star className="w-4 h-4 text-[hsl(var(--sand-gold))]" fill="currentColor" />
              <span className="text-[hsl(var(--sand-gold))] font-body text-[10px] sm:text-xs font-semibold tracking-wide uppercase whitespace-nowrap">
                Chennai's Finest Coastal Dining
              </span>
            </div>

            {/* Restaurant Name - Unique Layout */}
            <div className="mb-8 space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <h1 className="font-display font-black text-white leading-tight tracking-normal sm:tracking-tight brand-text animate-fade-slide-up"
                  style={{
                    fontSize: 'clamp(2.5rem, 12vw, 9rem)',
                    animationDelay: '0.1s'
                  }}>
                  அலைகடல்
                </h1>
                <p className="font-body text-[hsl(var(--sand-gold))] text-xs sm:text-sm font-bold tracking-[0.4em] uppercase opacity-80 animate-fade-slide-up" style={{ animationDelay: '0.15s' }}>
                  Ocean Breeze Dining
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-[2px] w-12 sm:w-20 bg-white/20" />
                <h2 className="font-display font-bold text-lg sm:text-3xl text-white/90 tracking-[0.2em] sm:tracking-[0.3em] uppercase brand-text">
                  உணவகம்
                </h2>
                <div className="h-[2px] w-12 sm:w-20 bg-white/20 lg:hidden" />
              </div>
            </div>

            <p className="text-white/80 font-body text-balance text-lg lg:text-2xl max-w-2xl leading-relaxed mb-12 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
              Where the ocean meets tradition — experience <span className="text-white font-semibold">authentic Tamil coastal cuisine</span> crafted with passion and served with warmth.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-slide-up w-full sm:w-auto" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/917695967955?text=I'm%20interested%20in%20booking%20a%20table%20at%20அலைகடல்%20உணவகம்"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[hsl(var(--sand-gold))] text-[hsl(var(--primary))] font-body font-black text-lg transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--sand-gold)/0.4)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span>Book a Table</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/menu"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-body font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Bottom - Enhanced SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-24 fill-[hsl(var(--background))]">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>

      {/* Stats Section - Unique Asymmetrical Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--muted)/0.3)] skew-x-12 translate-x-1/4" />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-bold mb-6 tracking-wide">
                Our Legacy
              </span>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-8 leading-tight">
                Crafting Coastal<br />Memories Since 1998
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] font-body text-lg max-w-xl leading-relaxed">
                From a small beachside shack to Chennai's premier dining destination, our journey has been fueled by a passion for authentic flavors and the freshest ocean catch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl bg-white border border-[hsl(var(--border))] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[var(--shadow-md)] transition-all duration-500 group ${i % 2 === 1 ? 'lg:translate-y-8' : ''
                    }`}
                >
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-[hsl(var(--primary)/0.03)] border border-[hsl(var(--primary)/0.08)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-7 h-7 text-[hsl(var(--secondary))]" />
                  </div>
                  <p className="font-display font-black text-4xl text-[hsl(var(--primary))] mb-2 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes - Unique Card Grid */}
      <section className="py-24 bg-[hsl(var(--background))] relative">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--secondary)/0.1)] text-[hsl(var(--secondary))] font-body text-sm font-bold mb-4">
                Signature Selection
              </span>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-[hsl(var(--primary))] mb-6 italic">
                சிறப்பு உணவுகள்
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] font-body text-xl">
                Handpicked masterpieces crafted by our master chefs using centuries-old coastal recipes and premium ingredients.
              </p>
            </div>
            <Link
              to="/menu"
              className="group flex items-center gap-2 text-[hsl(var(--secondary))] font-body font-bold text-lg hover:gap-4 transition-all"
            >
              Explore Full Menu
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredDishes.map((dish, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-[hsl(var(--border))] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-3"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.nameEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-[hsl(var(--primary))] font-body text-xs font-black uppercase tracking-wider">
                    {dish.tag}
                  </span>
                </div>
                <div className="p-8 relative">
                  <div className="mb-6">
                    <h3 className="font-display font-black text-2xl text-[hsl(var(--primary))] mb-2 group-hover:text-[hsl(var(--secondary))] transition-colors">
                      {dish.nameEn}
                    </h3>
                    <p className="font-body text-sm text-[hsl(var(--secondary))] font-bold uppercase tracking-widest mb-4">
                      {dish.name}
                    </p>
                    <p className="font-body text-[HSL(var(--muted-foreground))] leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-[hsl(var(--border))]">
                    <span className="font-display font-black text-3xl text-[hsl(var(--primary))]">
                      {dish.price}
                    </span>
                    <Link
                      to="/menu"
                      className="w-12 h-12 rounded-2xl bg-[hsl(var(--primary))] text-white flex items-center justify-center hover:bg-[hsl(var(--secondary))] transition-all duration-300 transform group-hover:rotate-[360deg]"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-wave opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">
            Experience the Ocean on Your Plate
          </h2>
          <p className="text-white/80 font-body text-lg max-w-xl mx-auto mb-8">
            Reserve your table today and let us take you on a culinary journey through Tamil coastal tradition.
          </p>
          <a
            href="https://wa.me/917695967955?text=I'm%20interested%20in%20booking%20a%20table%20at%20அலைகடல்%20உணவகம்"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[hsl(var(--sand-gold))] text-[hsl(var(--primary))] font-body font-bold text-base hover:shadow-[var(--shadow-gold)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Make a Reservation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
