import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Mail, Menu, X, Moon, Sun,
  Sparkles, Shield, Bus, Brain, Snowflake, Utensils, Camera,
  BookOpen, Palette, Music, Users, Award, Heart, Star, ChevronRight,
  GraduationCap, Calendar, CheckCircle2, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.asset.json";
import heroKids from "@/assets/hero-kids.jpg";
import classroom from "@/assets/classroom.jpg";
import arts from "@/assets/arts.jpg";
import playground from "@/assets/playground.jpg";
import library from "@/assets/library.jpg";
import meals from "@/assets/meals.jpg";
import event from "@/assets/event.jpg";
import activity from "@/assets/activity.jpg";
import campus from "@/assets/campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Star World School — Admissions Open 2026-27 | Best Preschool in Indore" },
      { name: "description", content: "Star World School Indore: 40+ years of excellence in early childhood education. Play Group, LKG, UKG. Smart classrooms, AI-oriented learning, safe campus. Apply now." },
      { property: "og:title", content: "Star World School — Where Every Child Shines Like A Star" },
      { property: "og:description", content: "Admissions Open 2026-27. Premium preschool in Indore." },
      { property: "og:image", content: logoAsset.url },
    ],
  }),
  component: HomePage,
});

const WA_LINK = "https://wa.me/919977200012?text=Hello%20Star%20World%20School,%20I%20want%20admission%20information.";
const TEL_LINK = "tel:+919977200012";
const LOGO = logoAsset.url;

function HomePage() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    const p = setTimeout(() => setShowPopup(true), 10000);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); clearTimeout(p); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {loading && <LoadingScreen />}

      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <img src={LOGO} alt="Star World School" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white shadow-soft" />
            <div className="leading-tight">
              <div className={`font-display font-bold text-sm sm:text-base ${scrolled ? "text-foreground" : "text-white"}`}>STAR WORLD</div>
              <div className={`text-[10px] sm:text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>SCHOOL</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map(n => (
              <a key={n.href} href={n.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:bg-brand-blue hover:text-white" : "text-white hover:bg-white/20"}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setDark(d => !d)} aria-label="Toggle dark mode"
              className={`p-2 rounded-full transition ${scrolled ? "hover:bg-secondary" : "text-white hover:bg-white/20"}`}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#admissions" className="hidden md:inline-flex">
              <Button className="rounded-full bg-brand-orange text-white hover:opacity-90 shadow-pop">Apply Now</Button>
            </a>
            <button onClick={() => setMenuOpen(o => !o)} className={`lg:hidden p-2 rounded-full ${scrolled ? "" : "text-white"}`}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden glass border-t border-border animate-fade-up">
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-secondary font-medium">{n.label}</a>
              ))}
              <a href="#admissions" onClick={() => setMenuOpen(false)}>
                <Button className="w-full rounded-full bg-brand-orange text-white">Apply Now</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Fees />
      <Facilities />
      <WhyUs />
      <Learning />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />

      {/* Floating Buttons */}
      <a href={WA_LINK} target="_blank" rel="noopener" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-30 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-pop hover:scale-110 transition-transform animate-float">
        <MessageCircle size={26} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
      <a href={TEL_LINK} aria-label="Call now"
        className="fixed bottom-5 left-5 z-30 h-14 w-14 rounded-full gradient-hero text-white grid place-items-center shadow-pop hover:scale-110 transition-transform">
        <Phone size={24} />
      </a>

      {showPopup && <AdmissionPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center gradient-hero animate-fade-up">
      <div className="text-center">
        <img src={LOGO} alt="" className="h-24 w-24 mx-auto rounded-full ring-4 ring-white/50 animate-float" />
        <p className="mt-4 text-white font-display text-lg tracking-wider">STAR WORLD SCHOOL</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand-yellow/40 blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-brand-orange/40 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-brand-sky/40 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-xs sm:text-sm font-semibold">
            <Sparkles size={14} className="text-brand-yellow" /> 40+ Years of Excellence
          </span>
          <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05]">
            ADMISSIONS<br />
            <span className="bg-gradient-to-r from-brand-yellow to-brand-orange bg-clip-text text-transparent">OPEN 2026-27</span>
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-display font-medium text-white/95">
            Where Every Child Shines Like A Star
          </p>
          <p className="mt-4 text-white/85 text-sm sm:text-base max-w-xl">
            Star World School provides a safe, nurturing and innovative learning environment where children develop creativity, confidence and strong educational foundations.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#admissions"><Button size="lg" className="rounded-full bg-brand-orange hover:opacity-90 text-white shadow-pop font-semibold">Apply Now <ChevronRight size={18} /></Button></a>
            <a href="#contact"><Button size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur">Book School Visit</Button></a>
            <a href={WA_LINK} target="_blank" rel="noopener"><Button size="lg" className="rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white"><MessageCircle size={18} /> WhatsApp</Button></a>
            <a href={TEL_LINK}><Button size="lg" variant="outline" className="rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20"><Phone size={18} /> Call Now</Button></a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2"><Shield size={18} className="text-brand-yellow" /> 100% Safe</div>
            <div className="flex items-center gap-2"><Award size={18} className="text-brand-yellow" /> Trusted</div>
            <div className="flex items-center gap-2"><Heart size={18} className="text-brand-yellow" /> Caring</div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[3rem] gradient-sun blur-2xl opacity-60 animate-float" />
            <img src={heroKids} alt="Happy preschool children" width={1536} height={1024}
              className="relative rounded-[3rem] shadow-pop object-cover h-full w-full ring-4 ring-white/40" />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-soft animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <img src={LOGO} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-display font-bold text-foreground text-sm">5000+ Happy</div>
                  <div className="text-xs text-muted-foreground">Students & Families</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-yellow text-foreground rounded-2xl p-3 shadow-pop animate-float" style={{ animationDelay: "2s" }}>
              <Star className="fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Admissions Open 2026-27", "Limited Seats", "Smart Classrooms", "AI Oriented Learning", "100% Safe Campus", "40+ Years Excellence"];
  return (
    <div className="bg-brand-yellow text-foreground py-3 overflow-hidden border-y border-brand-orange/30">
      <div className="flex gap-12 whitespace-nowrap animate-[shine_30s_linear_infinite]" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display font-semibold text-sm sm:text-base flex items-center gap-3">
            <Star size={14} className="fill-brand-orange text-brand-orange" /> {it}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1500; const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step); obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl sm:text-5xl text-gradient">{n}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/20 text-brand-orange text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={campus} alt="Star World School campus" width={1024} height={768} loading="lazy"
              className="rounded-3xl shadow-pop hover-lift" />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-soft hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full gradient-hero grid place-items-center text-white"><Award /></div>
                <div>
                  <div className="font-display font-bold text-lg">40+ Years</div>
                  <div className="text-xs text-muted-foreground">Of Excellence</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/20 text-brand-orange text-xs font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl">Inspiring Minds.<br />Building <span className="text-gradient">Futures.</span></h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg">
              Star World School is committed to providing quality early childhood education through innovative teaching methods, caring educators and a child-friendly environment that nurtures every child's potential.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Counter to={40} suffix="+" label="Years Experience" />
              <Counter to={5000} suffix="+" label="Happy Students" />
              <Counter to={100} suffix="+" label="Qualified Teachers" />
              <Counter to={100} suffix="%" label="Safe Campus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const progs = [
    { name: "Play Group", code: "PKG", age: "2.5 to 3.5 Years", color: "from-brand-orange to-brand-yellow", icon: Heart },
    { name: "Lower Kindergarten", code: "LKG", age: "3.5 to 4.5 Years", color: "from-brand-sky to-brand-blue", icon: BookOpen },
    { name: "Upper Kindergarten", code: "UKG", age: "4.5 to 5.5 Years", color: "from-brand-blue to-brand-orange", icon: GraduationCap },
  ];
  return (
    <section id="programs" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Programs" title="Programs Designed For Little Stars" desc="Age-appropriate curriculum that grows with your child." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {progs.map((p, i) => (
            <div key={p.code} className="group relative rounded-3xl bg-card p-7 shadow-soft hover-lift overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 group-hover:scale-150 transition-transform duration-700`} />
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center text-white shadow-pop`}>
                <p.icon size={26} />
              </div>
              <div className="mt-5 text-xs font-semibold text-brand-orange tracking-widest">{p.code}</div>
              <h3 className="mt-1 font-display font-bold text-2xl">{p.name}</h3>
              <p className="mt-2 text-muted-foreground">Age: <span className="font-semibold text-foreground">{p.age}</span></p>
              <div className="mt-5 flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all">
                Learn more <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fees() {
  const fees = [
    { name: "Play Group", code: "PKG", annual: "38,000", inst: "9,500" },
    { name: "Lower Kindergarten", code: "LKG", annual: "40,000", inst: "10,000", featured: true },
    { name: "Upper Kindergarten", code: "UKG", annual: "42,000", inst: "10,500" },
  ];
  return (
    <section id="fees" className="py-20 sm:py-28 gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Fees Structure" title="Transparent & Affordable" desc="Pay in 4 easy installments. Premium study material included." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fees.map((f, i) => (
            <div key={f.code} className={`relative rounded-3xl p-7 shadow-soft hover-lift animate-fade-up ${f.featured ? "gradient-hero text-white scale-100 lg:scale-105 shadow-pop" : "bg-card"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              {f.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-yellow text-foreground text-xs font-bold">POPULAR</div>}
              <div className={`text-xs font-semibold tracking-widest ${f.featured ? "text-brand-yellow" : "text-brand-orange"}`}>{f.code}</div>
              <h3 className="mt-1 font-display font-bold text-2xl">{f.name}</h3>
              <div className="mt-6">
                <div className={`text-xs ${f.featured ? "text-white/70" : "text-muted-foreground"}`}>Annual Fees</div>
                <div className="font-display font-bold text-4xl">₹{f.annual}</div>
              </div>
              <div className={`mt-5 pt-5 border-t ${f.featured ? "border-white/20" : "border-border"} space-y-2 text-sm`}>
                <div className="flex justify-between"><span className={f.featured ? "text-white/80" : "text-muted-foreground"}>Installments</span><span className="font-semibold">4</span></div>
                <div className="flex justify-between"><span className={f.featured ? "text-white/80" : "text-muted-foreground"}>Per Installment</span><span className="font-semibold">₹{f.inst}</span></div>
              </div>
              <a href="#admissions" className="block mt-6">
                <Button className={`w-full rounded-full ${f.featured ? "bg-white text-brand-blue hover:bg-white/90" : "bg-brand-orange text-white hover:opacity-90"}`}>Enroll Now</Button>
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Fees once paid are non-refundable. Premium study material will be provided.
        </p>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    { icon: Brain, title: "Smart Classrooms", desc: "Interactive digital learning displays" },
    { icon: Sparkles, title: "AI Oriented Learning", desc: "Future-ready, personalized education" },
    { icon: Snowflake, title: "Air Conditioned", desc: "Comfortable temperature year round" },
    { icon: Utensils, title: "Nutrition Filled Meals", desc: "Healthy, balanced diet plans" },
    { icon: Shield, title: "Safe & Secure Campus", desc: "Child-first safety protocols" },
    { icon: Camera, title: "CCTV Surveillance", desc: "24/7 monitored campus" },
    { icon: Heart, title: "Trained Teachers", desc: "Caring, experienced educators" },
    { icon: Music, title: "Play & Activity Zones", desc: "Vibrant indoor & outdoor areas" },
    { icon: BookOpen, title: "Well Equipped Library", desc: "A world of stories & wonder" },
  ];
  return (
    <section id="facilities" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Facilities" title="World-Class Facilities" desc="Everything your child needs to thrive, learn and grow safely." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f, i) => (
            <div key={f.title} className="group glass rounded-2xl p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="h-12 w-12 rounded-xl gradient-sun grid place-items-center text-white shadow-soft group-hover:rotate-6 transition-transform">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "40+ Years Educational Excellence", "AI Oriented Learning", "Modern Infrastructure",
    "Smart Classrooms", "Activity Based Learning", "Experienced Teachers",
    "Safe Campus", "Personality Development", "Holistic Child Growth"
  ];
  return (
    <section className="py-20 sm:py-28 gradient-hero text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-brand-yellow/20 rounded-full blur-3xl animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl">9 Reasons Parents <br />Trust <span className="text-brand-yellow">Star World</span></h2>
            <p className="mt-4 text-white/85">A nurturing space designed around your child's curiosity, safety and growth.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {points.map((p, i) => (
              <div key={p} className="flex items-start gap-3 glass rounded-2xl p-4 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <CheckCircle2 className="text-brand-yellow shrink-0" size={20} />
                <span className="text-sm font-medium text-white">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Learning() {
  const items = [
    { icon: Sparkles, title: "Activity Based Learning", img: activity },
    { icon: BookOpen, title: "Storytelling Sessions", img: library },
    { icon: Palette, title: "Arts & Crafts", img: arts },
    { icon: Users, title: "Play Based Education", img: playground },
    { icon: Music, title: "Interactive Activities", img: event },
    { icon: Brain, title: "Creative Learning", img: classroom },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Learning Approach" title="How Little Stars Learn" desc="Joyful, hands-on experiences that build curiosity and confidence." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group relative rounded-3xl overflow-hidden shadow-soft hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <img src={it.img} alt={it.title} width={1024} height={768} loading="lazy"
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="h-10 w-10 rounded-xl glass grid place-items-center mb-2"><it.icon size={18} /></div>
                <h3 className="font-display font-bold text-xl">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: classroom, label: "Smart Classrooms" },
    { src: arts, label: "Arts & Crafts" },
    { src: playground, label: "Outdoor Play" },
    { src: library, label: "Library" },
    { src: meals, label: "Healthy Meals" },
    { src: event, label: "Events" },
    { src: activity, label: "Activities" },
    { src: campus, label: "Campus" },
  ];
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 sm:py-28 gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Photo Gallery" title="Moments From Our Campus" desc="A glimpse of the joyful learning happening every day." />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imgs.map((img, i) => (
            <button key={i} onClick={() => setActive(img.src)}
              className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-soft hover-lift group relative">
              <img src={img.src} alt={img.label} loading="lazy"
                className={`w-full ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"} object-cover group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid items-end">
                <span className="p-4 text-white font-semibold text-sm">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
        {active && (
          <div className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4 animate-fade-up" onClick={() => setActive(null)}>
            <button className="absolute top-5 right-5 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"><X /></button>
            <img src={active} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-pop" />
          </div>
        )}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Parent of LKG Student", text: "Star World School has been a blessing for our daughter. The teachers are caring and the environment is amazing. She loves going to school every day!" },
    { name: "Rahul Verma", role: "Parent of PKG Student", text: "The smart classrooms and activity-based learning approach have made such a difference. My son has become more confident and curious." },
    { name: "Anita Patel", role: "Parent of UKG Student", text: "We are so impressed with the facilities and the dedication of the teachers. 40 years of experience truly shows in everything they do." },
    { name: "Vikram Singh", role: "Parent of LKG Student", text: "The safest and most loving preschool in Indore. CCTV, AC classrooms and amazing teachers — everything a parent could ask for." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % reviews.length), 5000); return () => clearInterval(t); }, [reviews.length]);
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="Loved By Parents" desc="Real stories from our Star World family." />
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
              {reviews.map((r) => (
                <div key={r.name} className="w-full shrink-0 px-2">
                  <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-soft text-center">
                    <Quote className="mx-auto text-brand-orange" size={36} />
                    <p className="mt-5 text-lg sm:text-xl text-foreground leading-relaxed">"{r.text}"</p>
                    <div className="mt-6 flex items-center justify-center gap-1 text-brand-yellow">
                      {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={18} className="fill-current" />)}
                    </div>
                    <div className="mt-4 font-display font-bold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${i === k ? "w-8 bg-brand-blue" : "w-2 bg-border"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="admissions" className="py-20 sm:py-28 relative overflow-hidden gradient-hero text-white">
      <div className="absolute -top-20 -right-20 h-96 w-96 bg-brand-yellow/30 rounded-full blur-3xl animate-blob" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase">Admissions 2026-27</span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl">Begin Your Child's<br />Journey With Us</h2>
            <p className="mt-4 text-white/85">Apply today for limited seats in our Play Group, LKG and UKG programs. Our team will reach out within 24 hours.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 glass rounded-2xl p-4"><Calendar className="text-brand-yellow" /><div><div className="font-semibold">Admissions Open</div><div className="text-sm text-white/80">Session 2026-27</div></div></div>
              <div className="flex items-center gap-3 glass rounded-2xl p-4"><Phone className="text-brand-yellow" /><div><div className="font-semibold">+91 9977200012</div><div className="text-sm text-white/80">Call us anytime</div></div></div>
              <div className="flex items-center gap-3 glass rounded-2xl p-4"><MessageCircle className="text-brand-yellow" /><div><div className="font-semibold">WhatsApp</div><div className="text-sm text-white/80">Quick replies on chat</div></div></div>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-card text-foreground rounded-3xl p-6 sm:p-8 shadow-pop">
            <h3 className="font-display font-bold text-2xl">Admission Form</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill in your details and we'll contact you soon.</p>
            {submitted ? (
              <div className="mt-8 text-center py-10">
                <CheckCircle2 size={56} className="mx-auto text-green-500" />
                <h4 className="mt-4 font-display font-bold text-xl">Thank you!</h4>
                <p className="text-muted-foreground mt-2">We'll reach out to you within 24 hours.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <Field label="Student Name" name="student" required />
                <Field label="Parent Name" name="parent" required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Mobile Number" name="mobile" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Select Class</label>
                  <select required className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-brand-blue outline-none">
                    <option value="">Choose program</option><option>Play Group (PKG)</option><option>LKG</option><option>UKG</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows={3} className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-brand-blue outline-none resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-brand-orange hover:opacity-90 text-white shadow-pop font-semibold">Apply For Admission</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-brand-orange"> *</span>}</label>
      <input name={name} type={type} required={required}
        className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-brand-blue outline-none" />
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Get In Touch" title="Visit Our Campus" desc="We'd love to show you around. Drop by, call or message us anytime." />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ContactCard icon={MapPin} title="Address" text="111, Bank Colony, Annapurna Road, Indore, Madhya Pradesh, India" />
            <ContactCard icon={Phone} title="Phone" text="+91 9977200012" href={TEL_LINK} />
            <ContactCard icon={MessageCircle} title="WhatsApp" text="Chat with us now" href={WA_LINK} />
            <ContactCard icon={Mail} title="Website" text="www.starworldschool.com" href="https://www.starworldschool.com" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-pop h-[400px] lg:h-auto">
            <iframe
              title="Star World School location"
              src="https://www.google.com/maps?q=Annapurna+Road+Indore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
  const C: any = href ? "a" : "div";
  return (
    <C href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener"
      className="flex items-start gap-4 glass rounded-2xl p-5 hover-lift block">
      <div className="h-12 w-12 rounded-xl gradient-hero grid place-items-center text-white shrink-0"><Icon size={20} /></div>
      <div><div className="font-display font-bold">{title}</div><div className="text-sm text-muted-foreground mt-1">{text}</div></div>
    </C>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8" style={{ background: "var(--brand-blue)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO} alt="Star World School" className="h-14 w-14 rounded-full ring-2 ring-white/40" />
              <div>
                <div className="font-display font-bold text-lg">STAR WORLD</div>
                <div className="text-xs text-white/70">SCHOOL</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">Inspiring Minds. Building Futures. Changing The World.</p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["About", "Programs", "Facilities", "Gallery", "Admissions", "Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-brand-yellow transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>111, Bank Colony, Annapurna Road</li>
              <li>Indore, Madhya Pradesh</li>
              <li><a href={TEL_LINK} className="hover:text-brand-yellow">+91 9977200012</a></li>
              <li><a href="https://www.starworldschool.com" className="hover:text-brand-yellow">www.starworldschool.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube", "twitter"].map(s => (
                <a key={s} href="#" className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-foreground grid place-items-center transition-all" aria-label={s}>
                  <span className="capitalize text-xs font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:scale-105 transition-transform">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/15 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Star World School. All rights reserved. Crafted with <Heart size={12} className="inline fill-brand-orange text-brand-orange" /> for little stars.
        </div>
      </div>
    </footer>
  );
}

function AdmissionPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        className="relative w-full max-w-md bg-card rounded-3xl p-8 shadow-pop overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary"><X size={20} /></button>
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full gradient-sun blur-2xl opacity-60" />
        <div className="relative text-center">
          <img src={LOGO} alt="" className="h-20 w-20 mx-auto rounded-full ring-4 ring-brand-yellow/40 animate-float" />
          <h3 className="mt-4 font-display font-bold text-2xl">Admissions Open 2026-27</h3>
          <p className="mt-2 text-muted-foreground">Limited Seats Available. Don't miss out!</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#admissions" onClick={onClose}>
              <Button size="lg" className="w-full rounded-full bg-brand-orange text-white hover:opacity-90 shadow-pop">Apply Now</Button>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener">
              <Button size="lg" variant="outline" className="w-full rounded-full"><MessageCircle size={16} /> WhatsApp Us</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
