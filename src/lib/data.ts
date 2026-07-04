// Single source of truth for Siddhi Vinayak Solar Solutions
import hero from "@/assets/hero-solar.webp";
import facility from "@/assets/facility.webp";
import panelImg from "@/assets/product-panel.webp";
import onGridImg from "@/assets/product-ongrid.webp";
import offGridImg from "@/assets/product-offgrid.webp";
import pumpImg from "@/assets/product-pump.webp";
import chakkiImg from "@/assets/product-chakki.webp";
import logo from "@/assets/logo.webp";

export const site = {
  name: "Siddhi Vinayak Solar Solutions",
  short: "Siddhi Vinayak Solar",
  tagline: "Government Empanelled Solar Installer in Jhansi",
  since: 2015,
  city: "Jhansi, Uttar Pradesh",
  address:
    "Galla Mandi Road, Near Kailash Residency, Jhansi, Uttar Pradesh 284001",
  phones: ["+91 77260 92891", "+91 73073 62517", "+91 77273 62891"],
  primaryPhone: "+917726092891",
  whatsapp: "917726092891",
  email: "info@siddhivinayaksolar.in",
  hours: "Mon–Sat · 9:00 AM – 7:00 PM",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Galla+Mandi+Road+Jhansi",
  images: { hero, facility, logo },
  url: "https://siddhivinayaksolar.in",
  seoTitle: "Siddhi Vinayak Solar Solutions — Rooftop Solar Installer in Jhansi",
  seoDescription: "Government empanelled rooftop solar installer in Jhansi for on-grid, off-grid and hybrid solar systems with PM Surya Ghar subsidy support, net-metering, solar pumps, AMC and free site survey.",
  seoKeywords: [
    "solar panel installer in Jhansi",
    "rooftop solar Jhansi",
    "PM Surya Ghar subsidy Jhansi",
    "on grid solar system Jhansi",
    "off grid solar system Jhansi",
    "hybrid solar system Jhansi",
    "solar water pump Jhansi",
    "UP NEDA solar vendor",
    "DVVNL net metering",
    "solar company in Bundelkhand"
  ],
};

export const stats = [
  { k: "10+", l: "Years in Solar" },
  { k: "1200+", l: "Installations" },
  { k: "₹1.08L", l: "Max PM Subsidy" },
  { k: "8+", l: "Districts Served" },
];

export const trustBadges = [
  "Government Empanelled Vendor",
  "UP NEDA Registered",
  "DVVNL Approved Installer",
  "Authorized Exide Dealer",
  "PM Surya Ghar Registered",
];

export type SolarSystem = {
  slug: "on-grid" | "off-grid" | "hybrid";
  name: string;
  short: string;
  description: string;
  image: string;
  bullets: string[];
  bestFor: string;
  priceFrom: string;
};

export const solarSystems: SolarSystem[] = [
  {
    slug: "on-grid",
    name: "On-Grid Solar System",
    short: "Grid-tied · Zero bills · No battery",
    description:
      "Connect directly to the DVVNL grid via net-metering. Excess generation is exported and adjusted in your monthly bill. The most cost-effective system for homes and offices with steady grid supply.",
    image: onGridImg,
    bullets: [
      "Net-metering with DVVNL",
      "No battery — lower cost",
      "Payback in 4–5 years",
      "Eligible for PM Surya Ghar subsidy",
    ],
    bestFor: "Urban homes, shops, schools, offices",
    priceFrom: "₹55,000 / kW",
  },
  {
    slug: "off-grid",
    name: "Off-Grid Solar System",
    short: "Battery backup · 24×7 power",
    description:
      "Fully independent solar with battery storage — ideal for villages, farms and areas with heavy load-shedding. Runs lights, fans, TV, fridge and pumps day and night.",
    image: offGridImg,
    bullets: [
      "Lithium / tubular battery storage",
      "Works during power cuts",
      "Ideal for rural / border areas",
      "Custom load design",
    ],
    bestFor: "Villages, farms, remote sites",
    priceFrom: "₹85,000 / kW",
  },
  {
    slug: "hybrid",
    name: "Hybrid Solar System",
    short: "Grid + battery · Best of both",
    description:
      "Runs on solar, uses battery when the grid fails and exports the rest to the grid. Premium performance for households that want zero downtime and lowest bills together.",
    image: chakkiImg,
    bullets: [
      "Grid export + battery backup",
      "Smart hybrid inverter",
      "App-based monitoring",
      "Priority solar → battery → grid",
    ],
    bestFor: "Premium homes, clinics, small industry",
    priceFrom: "₹95,000 / kW",
  },
];

export type Service = {
  title: string;
  desc: string;
  icon: "sun" | "home" | "factory" | "tractor" | "wallet" | "wrench";
};

export const services: Service[] = [
  { title: "Rooftop Solar Installation", desc: "Complete residential rooftop solar with structure, wiring and net-metering.", icon: "home" },
  { title: "Commercial Solar (SPGS)", desc: "10 kW – 500 kW turnkey systems for shops, warehouses and offices.", icon: "factory" },
  { title: "Industrial Solar Projects", desc: "MW-scale ground-mount and rooftop for factories and cold storage.", icon: "factory" },
  { title: "Agricultural Solar", desc: "Solar water pumps (3–20 HP), Atta Chakki and irrigation systems.", icon: "tractor" },
  { title: "PM Surya Ghar Subsidy", desc: "End-to-end paperwork, portal application and subsidy disbursal up to ₹1,08,000.", icon: "wallet" },
  { title: "Maintenance & AMC", desc: "Quarterly cleaning, inverter checks and 25-year performance monitoring.", icon: "wrench" },
];

export const brands = [
  { name: "Tata Power Solar", note: "Tier-1 panels & inverters" },
  { name: "Adani Solar", note: "Mono PERC modules" },
  { name: "Waaree Solar", note: "Bifacial & half-cut panels" },
  { name: "Luminous", note: "Home inverters & batteries" },
  { name: "Exide Solar", note: "C10 tubular batteries" },
  { name: "UTL Solar", note: "PCU & hybrid inverters" },
  { name: "Microtek", note: "MPPT PCU range" },
  { name: "Havells", note: "Cables & switchgear" },
  { name: "Oswal Solar", note: "Solar water pumps" },
  { name: "Bajaj Finserv", note: "EMI & finance partner" },
];

export const subsidySlabs = [
  { size: "1 kW", cost: "≈ ₹65,000", subsidy: "₹30,000", units: "~120 units/month" },
  { size: "2 kW", cost: "≈ ₹1,30,000", subsidy: "₹60,000", units: "~240 units/month" },
  { size: "3 kW", cost: "≈ ₹1,90,000", subsidy: "₹78,000", units: "~360 units/month" },
  { size: "5 kW & above", cost: "≈ ₹3,10,000+", subsidy: "₹1,08,000 (max)", units: "~600+ units/month" },
];

export const subsidyProcess = [
  { step: "01", title: "Free Site Survey", body: "We visit your rooftop, measure shadow-free area and finalise system size." },
  { step: "02", title: "Portal Registration", body: "We register your application on the National PM Surya Ghar portal." },
  { step: "03", title: "DISCOM Feasibility", body: "DVVNL feasibility approval — we handle the entire paperwork." },
  { step: "04", title: "Installation", body: "Certified installation with Tier-1 modules & Made-in-India inverter." },
  { step: "05", title: "Net Meter & Inspection", body: "Net-meter installation, plant inspection and commissioning." },
  { step: "06", title: "Subsidy Credit", body: "Subsidy of up to ₹1,08,000 credited directly to your bank account." },
];

export type Project = {
  title: string;
  location: string;
  size: string;
  type: "Residential" | "Commercial" | "Agricultural" | "Industrial";
  image: string;
};

export const projects: Project[] = [
  { title: "3 kW Rooftop On-Grid", location: "Civil Lines, Jhansi", size: "3 kW", type: "Residential", image: panelImg },
  { title: "25 kW Commercial Rooftop", location: "Sipri Bazar, Jhansi", size: "25 kW", type: "Commercial", image: onGridImg },
  { title: "10 HP Solar Water Pump", location: "Babina Village", size: "7.5 kW", type: "Agricultural", image: pumpImg },
  { title: "5 kW Hybrid Home System", location: "Bijoli, Jhansi", size: "5 kW", type: "Residential", image: chakkiImg },
  { title: "100 kW Industrial Plant", location: "Jhansi Industrial Area", size: "100 kW", type: "Industrial", image: facility },
  { title: "Solar Atta Chakki Setup", location: "Mauranipur", size: "5 HP", type: "Agricultural", image: chakkiImg },
  { title: "2 kW Rooftop Subsidy", location: "Nagra, Jhansi", size: "2 kW", type: "Residential", image: offGridImg },
  { title: "50 kW Warehouse Solar", location: "Datia Road", size: "50 kW", type: "Commercial", image: hero },
];

export const testimonials = [
  {
    name: "Rakesh Agrawal",
    role: "Homeowner, Civil Lines",
    quote:
      "Bill dropped from ₹4,800 to ₹250 in the first month. Subsidy of ₹78,000 was credited in 45 days. Highly recommended.",
  },
  {
    name: "Kailash Prajapati",
    role: "Farmer, Babina",
    quote:
      "Solar pump has run flawlessly for two seasons. No diesel cost — irrigation is now practically free.",
  },
  {
    name: "Anita Sharma",
    role: "School Principal, Sipri",
    quote:
      "Team handled the entire NEDA and DVVNL paperwork. Installation was clean and completed in 4 days.",
  },
];

export const faqs = [
  {
    q: "How much subsidy will I get under PM Surya Ghar Yojana?",
    a: "₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW. The maximum is ₹1,08,000 for systems of 3 kW and above. We handle the entire application on your behalf.",
  },
  {
    q: "How long does installation take?",
    a: "A typical 3 kW rooftop is installed in 2–4 days. Portal-to-subsidy timeline is usually 45–60 days end-to-end.",
  },
  {
    q: "Which is better — On-Grid, Off-Grid or Hybrid?",
    a: "On-Grid is cheapest and best for city homes with steady supply. Off-Grid suits villages with heavy cuts. Hybrid gives both grid export and battery backup — the premium choice.",
  },
  {
    q: "What warranty do I get?",
    a: "Panels carry a 25-year performance warranty and 12-year product warranty. Inverters come with 5–10 years warranty. We provide a 5-year workmanship warranty.",
  },
  {
    q: "Do you serve areas outside Jhansi?",
    a: "Yes — we install across Jhansi, Lalitpur, Datia, Mahoba, Hamirpur, Orai, Tikamgarh and neighbouring districts.",
  },
  {
    q: "Can I pay in EMI?",
    a: "Yes. We offer no-cost EMI via Bajaj Finserv and other bank partners. Loan approval usually takes 2–3 days.",
  },
];

export const nav = [
  // { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solar-systems", label: "Solar Systems" },
  { to: "/brands", label: "Brands" },
  { to: "/subsidy", label: "Subsidy" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;
