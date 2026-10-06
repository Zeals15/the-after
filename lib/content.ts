import {
  BrainCircuit,
  Building2,
  Clapperboard,
  Cloud,
  CodeXml,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Lightbulb,
  Palette,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Truck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import aiImg from "@/public/images/ai.jpg";
import cloudImg from "@/public/images/cloud.jpg";
import ecommerceImg from "@/public/images/ecommerce.jpg";
import fintechImg from "@/public/images/fintech.jpg";
import healthcareImg from "@/public/images/healthcare.jpg";
import manufacturingImg from "@/public/images/manufacturing.jpg";

export const site = {
  name: "THE AFTER",
  tagline: "Ideas Today. A Better Tomorrow.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://theafter.tech",
  description:
    "THE AFTER is a software development and IT consulting company delivering enterprise-grade web, mobile, cloud and AI solutions that drive measurable digital transformation.",
  email: "hello@theafter.tech",
  phone: "+91 98765 43210",
  address: "Vadodara, Gujarat, India",
  hours: "Mon – Fri, 9:30 AM – 6:30 PM IST",
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
    github: "https://github.com/Zeals15",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const trustedBy = ["Northwind", "Vertexa", "HelixCare", "QuantPay", "Orbitly", "Lumen Retail"];

export const stats = [
  { value: 10, suffix: "+", label: "Years of Team Experience" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export const values = [
  { title: "Engineering Excellence", text: "Clean architecture, automated testing and code you can scale with confidence." },
  { title: "Radical Transparency", text: "Clear roadmaps, weekly demos and honest reporting at every sprint." },
  { title: "Outcome Ownership", text: "We measure success by your business KPIs, not lines of code." },
];

export type Service = { icon: LucideIcon; title: string; text: string; tags: string[] };

export const services: Service[] = [
  {
    icon: CodeXml,
    title: "Custom Software Development",
    text: "Bespoke, secure and scalable software engineered around your workflows — from internal tools to enterprise platforms.",
    tags: ["ERP & CRM", "SaaS Platforms", "API Integrations"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    text: "High-performance web apps and native-quality iOS & Android experiences built with modern, battle-tested frameworks.",
    tags: ["Next.js", "React Native", "Flutter"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud-native architecture, CI/CD automation and infrastructure-as-code that cut costs and accelerate releases.",
    tags: ["AWS / Azure / GCP", "Kubernetes", "CI/CD"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Generative AI, predictive analytics and intelligent automation that turn your data into a competitive advantage.",
    tags: ["LLM Apps", "Computer Vision", "MLOps"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Research-driven product design that makes complex software intuitive, accessible and a pleasure to use.",
    tags: ["Product Strategy", "Design Systems", "Prototyping"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    text: "Strategic technology advisory, architecture reviews and digital roadmaps aligned with your growth objectives.",
    tags: ["Digital Strategy", "Tech Audits", "CTO-as-a-Service"],
  },
];

export const industries: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: HeartPulse, name: "Healthcare", text: "HIPAA-ready telehealth & EHR systems" },
  { icon: Landmark, name: "FinTech", text: "Secure payments, lending & wealth platforms" },
  { icon: ShoppingCart, name: "E-commerce", text: "Headless commerce & marketplaces" },
  { icon: GraduationCap, name: "Education", text: "LMS, EdTech & virtual classrooms" },
  { icon: Factory, name: "Manufacturing", text: "IoT, MES & predictive maintenance" },
  { icon: Building2, name: "Real Estate", text: "PropTech portals & CRM automation" },
  { icon: Truck, name: "Logistics", text: "Fleet tracking & supply-chain visibility" },
  { icon: Clapperboard, name: "Media & Entertainment", text: "Streaming & content platforms" },
];

export const processSteps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Discovery & Planning",
    text: "Workshops to understand your goals, users and constraints — producing a clear scope, roadmap and estimate.",
  },
  {
    icon: Layers,
    title: "Design & Architecture",
    text: "UX wireframes, high-fidelity UI and a scalable technical architecture validated before a line of code ships.",
  },
  {
    icon: Workflow,
    title: "Agile Development",
    text: "Two-week sprints with demos, transparent progress tracking and continuous integration from day one.",
  },
  {
    icon: Rocket,
    title: "Testing & Deployment",
    text: "Automated and manual QA, security hardening and zero-downtime launches — followed by ongoing support.",
  },
];

export type CaseStudy = { image: StaticImageData; category: string; title: string; outcome: string };

export const caseStudies: CaseStudy[] = [
  {
    image: fintechImg,
    category: "FinTech",
    title: "PayFlow — Real-time Treasury Dashboard",
    outcome: "Cut month-end reconciliation time by 70% for a multi-entity finance team.",
  },
  {
    image: healthcareImg,
    category: "Healthcare",
    title: "CareLink Telehealth Platform",
    outcome: "Enabled 40,000+ secure remote consultations in the first year.",
  },
  {
    image: ecommerceImg,
    category: "E-commerce",
    title: "ShopSphere Headless Commerce",
    outcome: "2.3× faster page loads and a 32% lift in checkout conversion.",
  },
  {
    image: manufacturingImg,
    category: "Manufacturing",
    title: "FactoryIQ Smart Monitoring",
    outcome: "Reduced unplanned machine downtime by 45% with IoT analytics.",
  },
  {
    image: aiImg,
    category: "AI & ML",
    title: "DocuMind Intelligent Document Processing",
    outcome: "Automated 85% of manual data entry with LLM-powered extraction.",
  },
  {
    image: cloudImg,
    category: "Cloud & DevOps",
    title: "LogiTrack Cloud Migration",
    outcome: "Lowered infrastructure spend by 38% while achieving 99.95% uptime.",
  },
];

export const testimonials = [
  {
    quote:
      "THE AFTER felt like an extension of our own team. They re-architected our payments platform ahead of schedule and the quality of engineering was outstanding.",
    name: "Rahul Mehta",
    role: "CTO",
    company: "QuantPay",
  },
  {
    quote:
      "From discovery to launch, communication was crystal clear. Our telehealth app went live in 14 weeks and patient satisfaction scores jumped immediately.",
    name: "Dr. Sarah Collins",
    role: "Director of Digital Health",
    company: "HelixCare",
  },
  {
    quote:
      "Their cloud and DevOps expertise transformed how we ship. Deployments went from monthly to daily, and our AWS bill dropped by over a third.",
    name: "Ankit Sharma",
    role: "VP of Engineering",
    company: "Orbitly",
  },
];

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: "#services" })),
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#contact" },
    { label: "Blog", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};
