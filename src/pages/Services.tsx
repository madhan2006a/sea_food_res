import { UtensilsCrossed, ShoppingBag, PartyPopper, Bike, Clock, CheckCircle } from "lucide-react";
import cateringEvent from "@/assets/catering-event.jpg";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine-In",
    tamilTitle: "உணவகத்தில் சாப்பிடுங்கள்",
    desc: "Experience our stunning ocean-view dining room with white-glove service. Perfect for family gatherings, dates, and celebrations.",
    features: [
      "Ocean-view seating available",
      "Live Tamil folk music on weekends",
      "Private dining rooms for events",
      "Dedicated kids menu",
    ],
    color: "from-[hsl(207,80%,22%)] to-[hsl(199,75%,35%)]",
    badge: "Most Popular",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway",
    tamilTitle: "எடுத்துச் செல்லுங்கள்",
    desc: "Enjoy our authentic Tamil coastal flavors in the comfort of your home. Order in advance and pick up hot, fresh meals.",
    features: [
      "Ready in 20–30 minutes",
      "Eco-friendly packaging",
      "Full menu available",
      "Family meal bundles",
    ],
    color: "from-[hsl(174,65%,38%)] to-[hsl(174,60%,50%)]",
    badge: "Quick & Easy",
  },
  {
    icon: PartyPopper,
    title: "Catering",
    tamilTitle: "உணவு விநியோகம்",
    desc: "Let us bring the அலைகடல் experience to your weddings, corporate events, and cultural celebrations across Chennai.",
    features: [
      "Events up to 500+ guests",
      "Customizable menus",
      "Full setup & cleanup",
      "Vegetarian options available",
    ],
    color: "from-[hsl(38,88%,50%)] to-[hsl(38,88%,65%)]",
    badge: "Premium",
  },
  {
    icon: Bike,
    title: "Home Delivery",
    tamilTitle: "வீட்டு விநியோகம்",
    desc: "Fresh, hot Tamil coastal cuisine delivered straight to your doorstep within 45 minutes across Chennai.",
    features: [
      "Delivery within 10 km",
      "Real-time order tracking",
      "45-minute guarantee",
      "Free delivery on ₹499+",
    ],
    color: "from-[hsl(12,85%,55%)] to-[hsl(12,85%,65%)]",
    badge: "Fast Delivery",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div className="relative py-24 gradient-wave overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-5 left-20 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-body text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            சேவைகள்
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">
            From intimate dine-in to grand catering — we serve every occasion
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-[hsl(var(--background))]">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden border border-[hsl(var(--border))] hover:shadow-[var(--shadow-lg)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className={`relative p-8 bg-gradient-to-br ${service.color}`}>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-body text-xs font-bold backdrop-blur-sm">
                      {service.badge}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm">{service.tamilTitle}</p>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="font-body text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[hsl(var(--secondary))] flex-shrink-0" />
                        <span className="font-body text-sm text-[hsl(var(--foreground))]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Highlight Section */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-6">
                Catering Highlight
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-6 leading-tight">
                Grand Events,{" "}
                <span className="text-[hsl(var(--secondary))]">Ocean-Fresh Flavors</span>
              </h2>
              <p className="font-body text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-6">
                Whether it's a beach wedding, corporate lunch, or a grand family function, our catering team brings authentic Tamil coastal cuisine to your venue with impeccable service.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Clock, label: "On-Time Guarantee" },
                  { icon: CheckCircle, label: "FSSAI Certified" },
                  { icon: PartyPopper, label: "500+ Events Done" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center border border-[hsl(var(--border))]">
                    <item.icon className="w-6 h-6 text-[hsl(var(--secondary))] mx-auto mb-2" />
                    <p className="font-body text-xs font-semibold text-[hsl(var(--foreground))]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/917695967955?text=Hello%20அலைகடல்%20உணவகம்,%20I'm%20interested%20in%20a%20catering%20quote%20for%20an%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-ocean text-white font-body font-bold text-base hover:opacity-90 hover:shadow-[var(--shadow-md)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Request Catering Quote
              </a>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]">
              <img
                src={cateringEvent}
                alt="Catering event by அலைகடல்"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.4)] to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
