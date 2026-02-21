import { Leaf, Heart, Clock, Trophy, Users, Star } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    tamilt: "புதிய பொருட்கள்",
    desc: "We source the freshest seafood daily from local coastal fishermen, ensuring every dish bursts with authentic ocean flavor.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    tamilt: "அன்போடு சமைக்கப்படுகிறது",
    desc: "Each recipe is passed down through generations, prepared by chefs who pour their hearts into every meal.",
  },
  {
    icon: Clock,
    title: "15+ Years of Legacy",
    tamilt: "15+ ஆண்டுகள் மரபு",
    desc: "Since 2009, we have been serving authentic Tamil coastal cuisine with consistency, pride, and unwavering quality.",
  },
  {
    icon: Trophy,
    title: "Award Winning",
    tamilt: "விருது வென்றது",
    desc: "Recognized by Tamil Nadu Tourism and Food Critics as one of Chennai's top coastal dining experiences.",
  },
];

const team = [
  {
    name: "Chef Murugan Rajan",
    role: "Head Chef",
    tamilRole: "தலைமை சமையல்காரர்",
    exp: "20 years of coastal cuisine mastery",
  },
  {
    name: "Priya Annamalai",
    role: "Restaurant Manager",
    tamilRole: "உணவக மேலாளர்",
    exp: "12 years in hospitality excellence",
  },
  {
    name: "Chef Selvam Kannan",
    role: "Sous Chef",
    tamilRole: "துணை சமையல்காரர்",
    exp: "Expert in Chettinad & coastal flavors",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div className="relative py-24 gradient-wave overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-body text-sm font-semibold mb-4">
            Our Story
          </span>
          <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            எங்களைப் பற்றி
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">About Us</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-[hsl(var(--background))]">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-6">
                Since 2009
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-6 leading-tight">
                A Journey Born from the{" "}
                <span className="text-[hsl(var(--secondary))]">Ocean's Heart</span>
              </h2>
              <p className="font-body text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-5">
                அலைகடல் உணவகம் was born out of a passionate dream — to bring the soul of Tamil coastal cooking to the heart of Chennai. Founded by Madhan in 2009, our restaurant began as a small beachside eatery serving fishermen's families with homestyle recipes.
              </p>
              <p className="font-body text-[hsl(var(--muted-foreground))] text-base leading-relaxed mb-5">
                Today, we stand as one of Chennai's most celebrated coastal dining destinations, blending age-old recipes with modern culinary artistry. Our name "அலைகடல்" — meaning "Ocean Waves" — reflects our deep connection to the sea and its bounty.
              </p>
              <p className="font-body text-[hsl(var(--muted-foreground))] text-base leading-relaxed">
                Every dish at அலைகடல் tells a story of tradition, love, and the vibrant flavors of Tamil Nadu's coastline — from the spice markets of Madurai to the fishing harbors of Rameswaram.
              </p>

              <div className="flex items-center gap-6 mt-8">
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[hsl(var(--primary))]">15+</p>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">Years</p>
                </div>
                <div className="w-px h-12 bg-[hsl(var(--border))]" />
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[hsl(var(--primary))]">50+</p>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">Dishes</p>
                </div>
                <div className="w-px h-12 bg-[hsl(var(--border))]" />
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[hsl(var(--primary))]">10K+</p>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">Guests</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]">
                <img
                  src={restaurantInterior}
                  alt="அலைகடல் restaurant interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.3)] to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-[var(--shadow-md)] border border-[hsl(var(--border))]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" fill="white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[hsl(var(--primary))] text-lg">4.9/5</p>
                    <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">10,000+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-4">
              எங்கள் கொள்கைகள்
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] font-body text-lg max-w-xl mx-auto">
              The principles that guide every dish, every service, and every smile
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--secondary))] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <val.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-[hsl(var(--primary))] mb-1">
                  {val.title}
                </h3>
                <p className="font-body text-xs text-[hsl(var(--secondary))] mb-3 font-medium">
                  {val.tamilt}
                </p>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body text-sm font-semibold mb-4">
              Meet the Team
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-[hsl(var(--primary))] mb-4">
              எங்கள் குழு
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="group text-center bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-wave flex items-center justify-center text-3xl font-display font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  {member.name.charAt(6)}
                </div>
                <h3 className="font-display font-bold text-lg text-[hsl(var(--primary))] mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-sm font-semibold text-[hsl(var(--secondary))] mb-1">
                  {member.role}
                </p>
                <p className="font-body text-xs text-[hsl(var(--muted-foreground))] mb-3">
                  {member.tamilRole}
                </p>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] italic">
                  {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
