import {
  Credential,
  FooterLink,
  FooterLinksMap,
  HeroStat,
  MarqueeItem,
  MaxyStat,
  NavLink,
  Resource,
  Service,
  SocialPost,
  Thought,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Maxy", href: "#maxy" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Resources", href: "#resources" },
  { label: "Work With Me", href: "#newsletter", isCta: true },
];

export const HERO_STATS: HeroStat[] = [
  { num: "3", suffix: "K+", label: "Talents Empowered" },
  { num: "$1", suffix: "M+", label: "Startup Revenue" },
  { num: "5", suffix: "+", label: "Years in AI" },
];

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { text: "AI Transformation" },
  { text: "Agentic AI" },
  { text: "AI Automation Workflows" },
  { text: "Enterprise AI Training" },
  { text: "AI Talent Supply" },
  { text: "MAXY Academy" },
  { text: "Southeaset Asia" },
  { text: "Gen Z Leadership" },
];

export const CREDENTIALS: Credential[] = [
  { title: "CEO & Co-Founder — MAXY Academy", detail: "2021 — Present" },
  { title: "Serial Entrepreneur", detail: "Multiple Ventures" },
  { title: "AI & Automation Practitioner", detail: "5+ Years" },
  { title: "TBN Indonesia — Social Impact", detail: "Active" },
  { title: "University of Portland", detail: "Alumni" },
];

export const SERVICES: Service[] = [
  {
    num: "01",
    tag: "Enterprise",
    title: "Enterprise AI Transformation",
    desc: "End-to-end AI Implementation for organizations. From strategy and roadmap to team training and deployment.",
    pills: ["AI Strategy", "Roadmap", "Training"],
  },
  {
    num: "02",
    tag: "Automation",
    title: "AI Automation Workflows",
    desc: "Custom agentic AI systems and automation workflows for your specific operations. Systems that work while you sleep.",
    pills: ["Agentic AI", "Automation", "Systems"],
  },
  {
    num: "03",
    tag: "Talent",
    title: "AI Talent Supply",
    desc: "Plug-ready AI talent from MAXY Academy's pipeline. Trained, certified, and ready to contribute from day one.",
    pills: ["Placement", "AI Skills", "Pipeline"],
  },
];

export const MAXY_STATS: MaxyStat[] = [
  { num: "3K+", label: "Talents Trained & Placed" },
  { num: "B2C", label: "Students & Young Talent" },
  { num: "B2B", label: "Enterprise & Government" },
  { num: "SEA", label: "Regional Expansion" },
];

export const THOUGHTS: Thought[] = [
  {
    tag: "Agentic AI",
    title: "Why Agentic AI Will Change How Every Business Operates by 2026",
    excerpt:
      "The shift from AI tools to AI agents is not incremental. It's a fundamental change in how work gets done — and most companies are not ready.",
    meta: "May 2026 · 6 min read",
    isFeatured: true,
  },
  {
    tag: "Enterprise",
    title: "The Real Reason Enterprise AI Fails",
    meta: "April 2026 · 4 min read",
    gradient: "linear-gradient(135deg, #C8D4E0, #8898B0)",
  },
  {
    tag: "Talent",
    title: "92M Jobs at Risk. Here's How We Prepare Gen Z.",
    meta: "April 2026 · 5 min read",
    gradient: "linear-gradient(135deg, #D0D8C0, #A0A888)",
  },
];

export const RESOURCES: Resource[] = [
  {
    type: "AI Tools Guide",
    title: "20 AI Tools Every Business Leader Needs in 2026",
    desc: "Curated list of production-ready AI tools by function — marketing, ops, finance, HR. No fluff, just what works.",
    cta: "Download Free Guide ->",
  },
  {
    type: "Automation Workflow",
    title: "5 AI Automation Workflows to Implement This Week",
    desc: "Step-by-step automation blueprints for content, sales, customer support, reporting, and HR onboarding.",
    cta: "Download Workflows →",
  },
  {
    type: "Prompt Library",
    title: "Custom AI Prompts for CEOs, HR, Marketing & Sales",
    desc: "Battle-tested prompts organized by role and function. Copy, customize, use. Built from real enterprise work.",
    cta: "Access Prompt Library →",
  },
];

export const SOCIAL_TABS = [
  "Instagram",
  "Tiktok",
  "YouTube",
  "LinkedIn",
] as const;

export const SOCIAL_POSTS: SocialPost[] = [
  {
    text: "How to build your first AI automattion workflow in under an hour",
    bg: "#D8D8D8",
  },
  {
    text: "The truth about what happens to jobs that don't adapt to AI",
    bg: "#C8D4E0",
  },
  {
    text: "MAXY Academy: 3,000 talents placed. What we learned.",
    bg: "#D0C8C0",
  },
  {
    text: "5 AI tools I actually use every day to run my company",
    bg: "#C0D0C8",
  },
];

export const FOOTER_LINKS: FooterLinksMap = {
  services: [
    { label: "Enterprise AI Transformation", href: "#" },
    { label: "AI Automation Workflows", href: "#" },
    { label: "AI Talent Supply", href: "#" },
    { label: "AI Training Programs", href: "#" },
  ] as FooterLink[],
  content: [
    { label: "Thoughts on AI", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Social Feed", href: "#" },
  ] as FooterLink[],
  company: [
    { label: "About Isaac", href: "#" },
    { label: "MAXY Academy", href: "https://maxy.academy" },
    { label: "Work With Me", href: "#" },
    { label: "Contact", href: "#" },
  ] as FooterLink[],
};
