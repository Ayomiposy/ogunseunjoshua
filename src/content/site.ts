/**
 * Site content — single source of truth.
 *
 * This file is structured so it can be swapped for a WordPress-driven
 * source later. Keep field names stable; a WP loader can return the
 * same shape (see `src/lib/api/wordpress.functions.ts` when added).
 */

import coachingFunnel from "@/assets/coaching funnel.png";
import agencyWebsite from "@/assets/Agency website.jpeg";
import ghlAutomation from "@/assets/GHL Automation.png";
import healthcare from "@/assets/Healthcare.jpeg";
import metaAds from "@/assets/meta Ads.jpeg";
import saas from "@/assets/saas.jpeg";
import charles from "@/assets/charles.jpeg";
import lara from "@/assets/Lara Kudayisi.jpeg";
import moshood from "@/assets/moshood.jpeg";
import shola from "@/assets/shola.jpeg";

export const site = {
  name: "Joshua Ogunseun",
  role: "Media Buyer & Automation Specialist",
  email: "Seunj5304@gmail.com",
  phone: "+2348127713946",
  upworkUrl: "#",
  bookingUrl: "#book",

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Meta Ads & Lead Generation Specialist",
    title: "Helping Businesses Generate Qualified Leads with Meta Ads & Automation",
    description:
      "I build scalable lead generation systems powered by Facebook Ads, GoHighLevel automation, and high-converting funnels — so you can predict your pipeline and focus on closing deals.",
    primaryCta: { label: "Book a Free Strategy Call", href: "#book" },
    secondaryCta: { label: "View Portfolio", href: "#portfolio" },
    stats: [
      { value: "4.2×", label: "Avg. ROAS" },
      { value: "12k+", label: "Leads / mo" },
    ],
  },

  brands: ["MERIDIAN", "NOVA LABS", "ATLAS CO.", "PULSE", "VERTEX", "HORIZON", "QUANTUM"],

  metrics: [
    { value: "12,500+", label: "Leads Generated" },
    { value: "180+", label: "Campaigns Managed" },
    { value: "75+", label: "Funnels Built" },
    { value: "4.2×", label: "Avg ROAS" },
  ],

  about: {
    eyebrow: "About Joshua",
    title: "The systems behind predictable growth.",
    body: [
      "I'm Joshua Ogunseun, a performance marketer obsessed with one thing — building lead generation systems that compound month over month.",
      "For the past several years I've helped service businesses, coaches, and DTC brands replace random marketing with a reliable engine: Meta Ads, GoHighLevel automation, funnels, and CRM systems working together as one connected machine.",
      "My approach is simple: deeply understand your offer, install conversion-focused infrastructure, and optimize relentlessly until the numbers tell us we're winning.",
    ],
    skills: ["Meta Ads", "Lead Generation", "GoHighLevel", "Funnels", "CRM Systems", "Automation"],
  },

  services: {
    core: [
      {
        title: "Facebook & Instagram Ads",
        desc: "ROI-driven Meta campaigns engineered for qualified leads and scalable customer acquisition.",
      },
      {
        title: "GoHighLevel CRM Setup",
        desc: "Full GHL build-outs — pipelines, automations, calendars, and snapshots ready to scale.",
      },
      {
        title: "Funnel Building",
        desc: "High-converting funnels designed around your offer, audience, and buyer psychology.",
      },
      {
        title: "Lead Generation Systems",
        desc: "Predictable lead engines combining ads, funnels, and nurture for consistent pipeline.",
      },
      {
        title: "Automation Workflows",
        desc: "Done-for-you workflows that move leads through your pipeline without manual work.",
      },
      {
        title: "Lead Nurturing Systems",
        desc: "Multi-channel SMS, email, and DM sequences that warm leads and close more deals.",
      },
    ],
    additional: [
      { title: "Website Design", desc: "Modern, conversion-focused websites." },
      { title: "Shopify Stores", desc: "Premium ecommerce experiences." },
      { title: "SEO Optimization", desc: "Rank higher, drive organic traffic." },
      { title: "Landing Page Design", desc: "Pages built to convert clicks." },
      { title: "Conversion Optimization", desc: "Squeeze more revenue from existing traffic." },
    ],
  },

  process: [
    {
      step: "01",
      title: "Strategy & Research",
      desc: "We map your offer, audience, and competitors to design a winning go-to-market plan.",
    },
    {
      step: "02",
      title: "Campaign / Funnel Setup",
      desc: "Build ad creatives, funnels, and CRM pipelines with conversion best practices.",
    },
    {
      step: "03",
      title: "Automation & Tracking",
      desc: "Install pixel, conversions API, and end-to-end automations to capture every lead.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      desc: "A/B test creatives, copy, audiences, and offers to drive down CPL.",
    },
    {
      step: "05",
      title: "Reporting & Scaling",
      desc: "Weekly performance reviews and scaling sprints once we hit profitable benchmarks.",
    },
  ],

  portfolio: {
    filters: ["All", "Meta Ads", "Funnels", "GHL Automation", "Shopify", "Websites"],
    items: [
      {
        title: "Local Service Brand",
        category: "Meta Ads",
        result: "12.4× ROAS",
        desc: "Scaled lead flow from 0 to 595+ qualified leads in a month.",
        img: metaAds,
        url: "https://drive.google.com/file/d/1e8PzJQgLZyMmAetSdVTAOup2581woj78/view?usp=sharing",
      },
      {
        title: "Coaching Funnel",
        category: "Funnels",
        result: "27% opt-in",
        desc: "VSL funnel converting cold traffic into discovery calls.",
        img: coachingFunnel,
        url: "https://branions.com/ai-masterclass-and-live-mentorship-2/",
      },
      {
        title: "CyberSecurity School CRM",
        category: "GHL Automation",
        result: "62% show rate",
        desc: "Full GHL build with Lead + email nurture sequences.",
        img: ghlAutomation,
        url: "https://quiz.techpathway.cloud/take-a-quiz",
      },
      {
        title: "Healthcare",
        category: "Shopify",
        result: "+184% revenue",
        desc: "Scaled lead flow for qualified leads.",
        img: healthcare,
        url: "https://crystalfertilityclinic.com/",
      },
      {
        title: "Agency Website",
        category: "Websites",
        result: "5× inbound",
        desc: "B2B Agency for loyalty prpograms and rewards.",
        img: agencyWebsite,
        url: "https://loyaltysolutionsnigeria.com/",
      },
      {
        title: "SaaS Organic Growth",
        category: "Funnels",
        result: "+412% traffic",
        desc: "VSL funnel converting cold traffic into sign-up members and subscribers.",
        img: saas,
        url: "https://keoo.ai/all-in-one-ai-tool/",
      },
    ],
  },

  pricing: [
    {
      name: "Starter",
      price: "$250",
      blurb: "Meta Ads Campaign setup and Google Ads campaign setup — ready to launch.",
      features: [
        "Meta Ads Campaign Setup",
        "Google Ads Campaign Setup",
        "Pixel + Tracking Install",
        "Keyword & Audience Targeting",
        "Ad Creative & Copy Direction",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      price: "$500",
      blurb: "A complete, conversion-focused website built to turn visitors into leads.",
      features: [
        "Custom Website Design",
        "Mobile-Responsive Build",
        "Lead Capture Forms",
        "SEO-Ready Structure",
        "1 Week Delivery",
      ],
      cta: "Build My Site",
      featured: false,
    },
    {
      name: "Premium",
      price: "$800",
      blurb: "High-converting sales funnel paired with a Meta Ads campaign that drives traffic.",
      features: [
        "Sales Funnel Build (3 pages)",
        "Meta Ads Campaign Setup",
        "Thank You & Follow-Up Pages",
        "Pixel + Conversion Tracking",
        "Funnel Copy & Design",
      ],
      cta: "Go Premium",
      featured: true,
    },
    {
      name: "Full Branding",
      price: "$1,500",
      blurb:
        "The complete package: Meta Ads, Website, and Sales Funnel — everything you need to scale.",
      features: [
        "Meta Ads Campaign Setup",
        "Full Website Build",
        "Sales Funnel Design",
        "Pixel & Conversion Tracking",
        "Brand-Aligned Creative & Copy",
      ],
      cta: "Get Full Branding",
      featured: false,
    },
  ],

  testimonials: [
    {
      quote:
        "Joshua rebuilt our entire lead system. We went from chasing referrals to a fully booked calendar within 60 days. Game-changer.",
      name: "Lara Kudayisi",
      role: "Founder & Coach LaraKudayisi International.",
      initials: "LK",
      img: lara,
    },
    {
      quote:
        "The funnel + GHL setup he built is a machine. Our discovery calls tripled and our cost per booked call dropped 41%.",
      name: "Shola Olujobi",
      role: "CEO, Techpathway",
      initials: "SO",
      img: shola,
    },
    {
      quote:
        "Most marketers talk theory. Joshua ships systems. ROAS climbed from 1.8× to 4.2× in the first quarter.",
      name: "Charles Odum",
      role: "CEO & Digital Expert, BlueVangas",
      initials: "CO",
      img: charles,
    },
    {
      quote:
        "Clean, data-driven, and zero fluff. The automation alone saves my team 15+ hours a week.",
      name: "Moshood Abiola O.",
      role: "Creative Director, Related Motion",
      initials: "MA",
      img: moshood,
    },
  ],

  whyMe: [
    {
      title: "Results-driven strategy",
      desc: "Every campaign tied to revenue, not vanity metrics.",
    },
    { title: "Fast communication", desc: "Same-day responses and weekly strategy syncs." },
    { title: "Clean systems", desc: "Documented automations and pipelines you actually own." },
    {
      title: "Data-focused optimization",
      desc: "Continuous testing across creative, copy, and offers.",
    },
    { title: "Long-term growth", desc: "Partnerships built for years, not quick wins." },
    { title: "On-time delivery", desc: "Sprints with clear milestones and accountability." },
  ],

  faqs: [
    {
      q: "How long until I see results from Meta Ads?",
      a: "Most clients see qualified leads within the first 7–14 days of launch. Profitable optimization typically locks in by week 4 once we have statistically significant data.",
    },
    {
      q: "Do I need GoHighLevel to work with you?",
      a: "No — but it's the platform I recommend. If you already use another CRM, I'll integrate ads, funnels, and automation into your existing stack.",
    },
    {
      q: "What budget do I need for ads?",
      a: "I typically recommend a minimum $1,500/month ad spend for Meta to gather enough signal. Larger budgets unlock faster optimization and scaling.",
    },
    {
      q: "Do you build funnels from scratch?",
      a: "Yes. Every funnel is custom-designed around your offer, audience, and conversion goal — no recycled templates.",
    },
    {
      q: "How is pricing structured?",
      a: "I offer one-time builds (see Pricing) and monthly retainers for ongoing management. Book a call and we'll scope it together.",
    },
    {
      q: "Do you offer guarantees?",
      a: "I guarantee process and effort, not outcomes — paid advertising depends on many variables. That said, my track record speaks for itself.",
    },
  ],
} as const;
