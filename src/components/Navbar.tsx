import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
  { name: "முகப்பு", nameEn: "Home", path: "/" },
  { name: "எங்களைப் பற்றி", nameEn: "About", path: "/about" },
  { name: "சேவைகள்", nameEn: "Services", path: "/services" },
  { name: "சிறப்பு உணவுகள்", nameEn: "Menu", path: "/menu" },
  { name: "தொடர்பு", nameEn: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[hsl(var(--primary))] shadow-lg"
        : "bg-[hsl(var(--primary)/0.95)] backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 flex items-center justify-center">
              {/* Logo Mark - Abstract Waves forming an 'A' shape */}
              <div className="absolute inset-0 bg-[hsl(var(--sand-gold)/0.1)] rounded-full blur-md group-hover:bg-[hsl(var(--sand-gold)/0.2)] transition-colors duration-500" />
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sun Glow */}
                <circle cx="20" cy="18" r="10" fill="url(#nav-sun-gradient)" className="animate-logo-pulse" />

                {/* Wave Strokes forming abstract A */}
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
                  <radialGradient id="nav-sun-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(20 18) rotate(90) scale(12)">
                    <stop stopColor="hsl(var(--sand-gold))" />
                    <stop offset="1" stopColor="hsl(var(--sand-gold))" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="leading-[1.1]">
              <p className="text-[hsl(var(--sand-gold))] font-display font-black text-2xl tracking-tight brand-text">
                அலைகடல்
              </p>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-3 bg-[hsl(var(--sand-gold)/0.3)]"></span>
                <p className="text-white/80 font-body text-[10px] tracking-[0.2em] uppercase font-bold brand-text">
                  உணவகம்
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 group ${isActive(link.path)
                  ? "text-[hsl(var(--sand-gold))] bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                <span>{link.nameEn}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[hsl(var(--sand-gold))] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/917695967955?text=I'm%20interested%20in%20booking%20a%20table%20at%20அலைகடல்%20உணவகம்"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[hsl(var(--sand-gold))] text-[hsl(var(--primary))] font-body font-semibold text-sm hover:bg-[hsl(var(--sand-gold)/0.85)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[hsl(var(--primary))] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center justify-between px-4 py-3 rounded-lg font-body text-sm font-medium transition-all duration-200 ${isActive(link.path)
                ? "bg-white/15 text-[hsl(var(--sand-gold))]"
                : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span>{link.nameEn}</span>
              <span className="text-white/40 text-xs">{link.name}</span>
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/917695967955?text=I'm%20interested%20in%20booking%20a%20table%20at%20அலைகடல்%20உணவகம்"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-2.5 rounded-lg bg-[hsl(var(--sand-gold))] text-[hsl(var(--primary))] font-body font-semibold text-sm"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
