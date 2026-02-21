import { Link } from "react-router-dom";
import { Waves, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[hsl(var(--primary))] text-white overflow-hidden">
      {/* Wave top border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[hsl(var(--background))]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <div className="absolute inset-0 bg-[hsl(var(--sand-gold)/0.1)] rounded-full blur-md group-hover:bg-[hsl(var(--sand-gold)/0.2)] transition-colors duration-500" />
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="18" r="10" fill="url(#footer-sun-gradient)" className="animate-logo-pulse" />
                  <path
                    d="M10 28C10 28 14 24 20 24C26 24 30 28 30 28"
                    stroke="hsl(var(--sand-gold))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-wave-slow"
                  />
                  <path
                    d="M14 22C14 22 17 19 20 19C23 19 26 22 26 22"
                    stroke="hsl(var(--sand-gold))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-wave-medium"
                  />
                  <path
                    d="M18 16C18 16 19 15 20 15C21 15 22 16 22 16"
                    stroke="hsl(var(--sand-gold))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-wave-fast"
                  />
                  <defs>
                    <radialGradient id="footer-sun-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(20 18) rotate(90) scale(12)">
                      <stop stopColor="hsl(var(--sand-gold))" />
                      <stop offset="1" stopColor="hsl(var(--sand-gold))" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="leading-[1.1]">
                <p className="text-[hsl(var(--sand-gold))] font-display font-black text-2xl tracking-tight">
                  அலைகடல்
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-[1px] w-3 bg-[hsl(var(--sand-gold)/0.3)]"></span>
                  <p className="text-white/50 font-body text-[10px] tracking-[0.3em] uppercase font-bold">
                    உணவகம்
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
              Experience the finest coastal Tamil cuisine crafted with passion, tradition, and the freshest ocean flavors.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(var(--sand-gold))] flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-[hsl(var(--sand-gold))]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Special Menu", path: "/menu" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[hsl(var(--sand-gold))] font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--ocean-teal))] group-hover:bg-[hsl(var(--sand-gold))] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-[hsl(var(--sand-gold))]">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--ocean-teal-light))] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 font-body text-sm leading-relaxed">
                  12, Marina Beach Road,<br />Chennai – 600 001, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(var(--ocean-teal-light))] flex-shrink-0" />
                <a href="tel:+917695967955" className="text-white/60 hover:text-[hsl(var(--sand-gold))] font-body text-sm transition-colors">+91 76959 67955</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(var(--ocean-teal-light))] flex-shrink-0" />
                <a href="mailto:madhanprivate2006@gmail.com" className="text-white/60 hover:text-[hsl(var(--sand-gold))] font-body text-sm transition-colors">madhanprivate2006@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 text-[hsl(var(--sand-gold))]">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              {[
                { day: "Monday – Friday", hours: "11:00 AM – 11:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 12:00 AM" },
                { day: "Sunday", hours: "10:00 AM – 10:00 PM" },
              ].map((item) => (
                <li key={item.day} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[hsl(var(--ocean-teal-light))] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 font-body text-sm font-medium">{item.day}</p>
                    <p className="text-white/50 font-body text-xs">{item.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-body text-xs text-center sm:text-left">
            © 2024 அலைகடல் உணவகம். All rights reserved.
          </p>
          <p className="text-white/30 font-body text-xs">
            Crafted with ❤️ for authentic Tamil coastal cuisine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
