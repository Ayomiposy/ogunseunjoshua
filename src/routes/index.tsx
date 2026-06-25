import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  Sparkles,
  Target,
  Workflow,
  Zap,
  LineChart,
  MessageSquare,
  Globe,
  ShoppingBag,
  Search,
  LayoutTemplate,
  TrendingUp,
  Star,
} from "lucide-react";
import { site } from "@/content/site";
import dashboard from "@/assets/dashboard-hero.jpg";
import joshua from "@/assets/portfolio picture.jpg.jpeg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joshua Ogunseun — Media Buyer & Automation Specialist" },
      {
        name: "description",
        content:
          "Joshua Ogunseun helps businesses generate qualified leads with Meta Ads, GoHighLevel automation, and high-converting funnels.",
      },
      { property: "og:title", content: "Joshua Ogunseun — Media Buyer & Automation Specialist" },
      {
        property: "og:description",
        content:
          "Scalable lead generation systems powered by Meta Ads, automation, and conversion-focused funnels.",
      },
    ],
    links: [{ rel: "icon", type: "image/png", href: logo }],
  }),
  component: Index,
});

const coreIcons = [Target, Workflow, LayoutTemplate, Zap, Sparkles, MessageSquare];
const addonIcons = [Globe, ShoppingBag, Search, LayoutTemplate, TrendingUp];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-[40%] -right-40 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[140px]" />
      </div>

      <Header />
      <Hero />
      <BrandStrip />
      <Metrics />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <WhyMe />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

/* -------------------- HEADER -------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <img src={logo} alt="Brand logo" />
          </span>
          <span>{site.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={site.upworkUrl} className="btn-ghost text-sm py-2 px-4">
            Upwork Profile
          </a>
          <a href={site.bookingUrl} className="btn-primary text-sm py-2 px-4">
            Book a Call
          </a>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="container-x py-4 flex flex-col gap-3 text-sm">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1">
                {n.label}
              </a>
            ))}
            <a href={site.bookingUrl} className="btn-primary mt-2 text-sm">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section className="container-x pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> {site.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            {site.hero.title.split("Meta Ads & Automation")[0]}
            <span className="grad-text">Meta Ads & Automation</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">{site.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.hero.primaryCta.href} className="btn-primary">
              {site.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={site.hero.secondaryCta.href} className="btn-ghost">
              {site.hero.secondaryCta.label}
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {site.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-display font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="card-surface p-3 rotate-1 hover:rotate-0 transition-transform">
            <img
              src={dashboard}
              alt="Marketing analytics dashboard"
              width={1280}
              height={960}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 card-surface px-4 py-3 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Avg. ROAS</div>
              <div className="font-display font-bold">4.2×</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 card-surface px-4 py-3 hidden sm:flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <LineChart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Leads / mo</div>
              <div className="font-display font-bold">12k+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- BRAND STRIP -------------------- */
function BrandStrip() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-x py-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by ambitious brands
        </p>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-muted-foreground/70 font-display font-bold tracking-widest">
          {site.brands.map((b) => (
            <span key={b} className="text-sm sm:text-base">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- METRICS -------------------- */
function Metrics() {
  return (
    <section className="container-x py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {site.metrics.map((m) => (
          <div key={m.label} className="card-surface p-6 text-center">
            <div className="font-display text-3xl md:text-4xl font-bold grad-text">{m.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        <div className="relative">
          <div className="card-surface p-3 max-w-sm mx-auto">
            <img
              src={joshua}
              alt={site.name}
              width={768}
              height={896}
              loading="lazy"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div className="absolute bottom-4 -right-2 sm:right-8 card-surface px-4 py-3 max-w-[220px]">
            <div className="font-display font-bold">{site.name}</div>
            <div className="text-xs text-muted-foreground mt-1">
              50+ businesses scaled with predictable lead systems
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">{site.about.eyebrow}</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">{site.about.title}</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            {site.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {site.about.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
function Services() {
  return (
    <section id="services" className="section-y bg-surface/30 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Core Services</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Done-for-you growth systems
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to attract, capture, nurture, and close more leads — built and
            managed by one team.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.services.core.map((s, i) => {
            const Icon = coreIcons[i % coreIcons.length];
            return (
              <div key={s.title} className="card-surface p-6 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-secondary/20 group-hover:text-secondary transition">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 max-w-2xl">
          <span className="eyebrow">Additional Services</span>
          <h3 className="mt-5 text-2xl sm:text-3xl font-bold">Beyond ads & automation</h3>
          <p className="mt-3 text-muted-foreground">
            Complementary services to round out your digital presence.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {site.services.additional.map((s, i) => {
            const Icon = addonIcons[i % addonIcons.length];
            return (
              <div key={s.title} className="card-surface p-5">
                <Icon className="h-5 w-5 text-secondary" />
                <div className="mt-3 font-semibold">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */
function Process() {
  return (
    <section id="process" className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">The Process</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            A proven 5-step growth framework
          </h2>
          <p className="mt-4 text-muted-foreground">
            No guesswork. Every engagement follows a battle-tested workflow built from 180+
            campaigns.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {site.process.map((p) => (
            <div key={p.step} className="card-surface p-6 relative">
              <div className="font-display text-3xl font-bold text-primary/60">{p.step}</div>
              <h3 className="mt-3 font-display font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PORTFOLIO -------------------- */
function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const items =
    filter === "All"
      ? site.portfolio.items
      : site.portfolio.items.filter((i) => i.category === filter);

  return (
    <section id="portfolio" className="section-y bg-surface/30 border-y border-border">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected Work</span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Recent projects & results
            </h2>
            <p className="mt-4 text-muted-foreground">
              A snapshot of campaigns, funnels, and systems built for clients across industries.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {site.portfolio.filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`chip transition ${
                filter === f
                  ? "!bg-primary !text-primary-foreground !border-primary"
                  : "hover:!text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <article key={it.title} className="card-surface overflow-hidden group">
              <a href={it.url} target="_blank">
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/20">
                  <div className="absolute inset-0 grid place-items-center text-secondary/80 ">
                    <img src={it.img} alt="" />
                  </div>
                </div>
                <div className="p-5 relative">
                  <span className="absolute top-5 left-3 chip !bg-background/70 !backdrop-blur">
                    {it.category}
                  </span>
                  <span className="absolute top-5 right-3 chip !bg-secondary !text-secondary-foreground !border-secondary">
                    {it.result}
                  </span>
                  <h3 className="font-display mt-10 font-bold text-lg flex items-center justify-between">
                    {it.title}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Packages</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">Transparent pricing</h2>
          <p className="mt-4 text-muted-foreground">
            Choose the engagement that fits your stage. Every package is customizable — book a call
            to scope it together.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {site.pricing.map((p) => (
            <div
              key={p.name}
              className={`card-surface p-6 flex flex-col relative ${
                p.featured ? "!border-secondary/60 ring-1 ring-secondary/40" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 chip !bg-secondary !text-secondary-foreground !border-secondary">
                  Most Popular
                </span>
              )}
              <div className="font-display font-bold text-lg">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground min-h-[3.5rem]">{p.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-xs text-muted-foreground">one-time</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={site.bookingUrl}
                className={`mt-7 ${p.featured ? "btn-secondary" : "btn-primary"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
function Testimonials() {
  return (
    <section className="section-y bg-surface/30 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Clients who scaled with systems
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {site.testimonials.map((t: any) => (
            <figure key={t.name} className="card-surface p-6 flex flex-col">
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-primary font-bold text-sm">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </span>
                <span>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={site.upworkUrl} className="btn-ghost">
            View More Reviews on Upwork <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY ME -------------------- */
function WhyMe() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Work With Me</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built different. Built to scale.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.whyMe.map((w) => (
            <div key={w.title} className="card-surface p-6">
              <CheckCircle2 className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 font-display font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y bg-surface/30 border-y border-border">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold">Frequently asked</h2>
        </div>
        <div className="mt-10 space-y-3">
          {site.faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="card-surface overflow-hidden">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition ${
                      active ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {active && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section id="book" className="section-y">
      <div className="container-x">
        <div className="card-surface p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
          <span className="eyebrow">Limited monthly slots</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
            Ready to build a lead system <span className="grad-text">that actually converts?</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Book a free strategy call. We'll audit your current funnel, identify the bottlenecks,
            and show you a clear roadmap to scale — no pitch, just value.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/seunj5304/30min" target="_blank" className="btn-primary">
              <Calendar className="h-4 w-4" /> Book a Free Consultation
            </a>
            <a href={site.upworkUrl} className="btn-ghost">
              View Upwork Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display font-bold text-lg flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <img src={logo} alt="Brand logo" />
          </span>
            {site.name}
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Helping ambitious businesses build scalable lead generation systems through
            high-converting Meta Ads, intelligent automation, and conversion-focused funnels.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-primary transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Get in touch
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary transition">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>{site.phone}</span>
            </li>
          </ul>
          <a href={site.bookingUrl} className="btn-primary mt-5 text-sm py-2 px-4">
            Book a Free Call
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
