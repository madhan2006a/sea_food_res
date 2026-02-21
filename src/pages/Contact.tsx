import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  location: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  location: "",
  phone: "",
  message: "",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    tamilTitle: "முகவரி",
    lines: ["12, Marina Beach Road,", "Chennai – 600 001,", "Tamil Nadu, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    tamilTitle: "தொலைபேசி",
    lines: ["+91 76959 67955"],
  },
  {
    icon: Mail,
    title: "Email",
    tamilTitle: "மின்னஞ்சல்",
    lines: ["madhanprivate2006@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    tamilTitle: "நேரம்",
    lines: ["Mon–Fri: 11AM – 11PM", "Sat: 10AM – 12AM", "Sun: 10AM – 10PM"],
  },
];

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.location.trim() || data.location.trim().length < 3) {
    errors.location = "Please enter your location.";
  }
  if (!data.phone.trim() || !/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Construct WhatsApp Message
    const text = `Hello அலைகடல் உணவகம்,
My name is ${form.name}.
I'm from ${form.location}.
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message || "I'm interested in booking/more information."}`;

    const whatsappUrl = `https://wa.me/917695967955?text=${encodeURIComponent(text)}`;

    setIsLoading(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    }, 800);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm bg-white text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] transition-all duration-200 outline-none ${errors[field]
      ? "border-[hsl(var(--destructive))] ring-2 ring-[hsl(var(--destructive)/0.2)]"
      : "border-[hsl(var(--border))] focus:border-[hsl(var(--secondary))] focus:ring-2 focus:ring-[hsl(var(--secondary)/0.2)]"
    }`;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div className="relative py-24 gradient-wave overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-72 h-72 rounded-full border border-white" />
          <div className="absolute bottom-0 left-10 w-52 h-52 rounded-full border border-white" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-body text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h1 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            தொடர்பு கொள்ளுங்கள்
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">
            We'd love to hear from you — book a table, ask about catering, or just say hello!
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-[hsl(var(--background))]">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--secondary))] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-[hsl(var(--primary))] mb-0.5">
                  {info.title}
                </h3>
                <p className="font-body text-xs text-[hsl(var(--secondary))] font-medium mb-3">
                  {info.tamilTitle}
                </p>
                {info.lines.map((line, j) => (
                  <p key={j} className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <div className="bg-white rounded-3xl p-8 border border-[hsl(var(--border))] shadow-[var(--shadow-sm)]">
              <div className="mb-8">
                <h2 className="font-display font-bold text-3xl text-[hsl(var(--primary))] mb-2">
                  Send Us a Message
                </h2>
                <p className="font-display text-lg text-[hsl(var(--secondary))] font-semibold">
                  விசாரணை படிவம்
                </p>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] mt-2">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full gradient-ocean flex items-center justify-center mb-6 animate-float">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[hsl(var(--primary))] mb-2">
                    நன்றி! Thank You!
                  </h3>
                  <p className="font-body text-[hsl(var(--muted-foreground))] text-base mb-6 max-w-xs">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--secondary))] font-body font-semibold text-sm hover:bg-[hsl(var(--secondary))] hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">
                      Full Name <span className="text-[hsl(var(--secondary))] text-xs font-normal">பெயர்</span>{" "}
                      <span className="text-[hsl(var(--destructive))]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass("name")}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 font-body text-xs text-[hsl(var(--destructive))]">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">
                      Email Address <span className="text-[hsl(var(--secondary))] text-xs font-normal">மின்னஞ்சல்</span>{" "}
                      <span className="text-[hsl(var(--destructive))]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="yourname@gmail.com"
                      className={inputClass("email")}
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 font-body text-xs text-[hsl(var(--destructive))]">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Location + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">
                        Location <span className="text-[hsl(var(--secondary))] text-xs font-normal">இடம்</span>{" "}
                        <span className="text-[hsl(var(--destructive))]">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Your city/area"
                        className={inputClass("location")}
                        maxLength={100}
                      />
                      {errors.location && (
                        <p className="mt-1.5 flex items-center gap-1 font-body text-xs text-[hsl(var(--destructive))]">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">
                        Phone Number <span className="text-[hsl(var(--secondary))] text-xs font-normal">கைபேசி</span>{" "}
                        <span className="text-[hsl(var(--destructive))]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className={inputClass("phone")}
                        maxLength={10}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1 font-body text-xs text-[hsl(var(--destructive))]">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm font-semibold text-[hsl(var(--foreground))] mb-1.5">
                      Message <span className="text-[hsl(var(--secondary))] text-xs font-normal">செய்தி</span>{" "}
                      <span className="text-[hsl(var(--muted-foreground))] font-normal text-xs">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry, reservation details, or event requirements..."
                      rows={4}
                      className={`${inputClass("message")} resize-none`}
                      maxLength={1000}
                    />
                    <p className="mt-1 font-body text-xs text-[hsl(var(--muted-foreground))] text-right">
                      {form.message.length}/1000
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl gradient-ocean text-white font-body font-bold text-base hover:opacity-90 hover:shadow-[var(--shadow-md)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder + Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden border border-[hsl(var(--border))] shadow-[var(--shadow-sm)] h-80">
                <iframe
                  title="அலைகடல் உணவகம் Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8748!2d80.2785!3d13.0475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzUxLjAiTiA4MMKwMTYnNDIuNiJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="bg-white rounded-3xl p-6 border border-[hsl(var(--border))] shadow-[var(--shadow-sm)]">
                <h3 className="font-display font-bold text-xl text-[hsl(var(--primary))] mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+917695967955"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--secondary))] border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide">Call Us Now</p>
                      <p className="font-display font-bold text-[hsl(var(--primary))]">+91 76959 67955</p>
                    </div>
                  </a>
                  <a
                    href="mailto:madhanprivate2006@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--accent))] hover:border-[hsl(var(--secondary))] border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide">Email Us</p>
                      <p className="font-display font-bold text-[hsl(var(--primary))]">madhanprivate2006@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
