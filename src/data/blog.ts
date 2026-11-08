export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Engineering" | "Architecture" | "UI/UX Design" | "Enterprise Tech";
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  featured: boolean;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "high-performance-enterprise-architecture",
    title: "Building High-Performance Enterprise Platforms with Server-First Architecture",
    excerpt: "How we achieve sub-second page loads, zero CLS, and seamless hydration for high-traffic digital products.",
    category: "Engineering",
    tags: ["Performance", "Web Vitals", "Architecture", "Cloud Scale"],
    author: {
      name: "Keds Engineering Team",
      role: "Lead Software Architect",
      avatar: "KT"
    },
    publishedAt: "September 24, 2026",
    readingTime: "6 min read",
    featured: true,
    content: `
Modern digital businesses cannot afford sluggish load times. Every 100ms delay drops conversion rates by up to 7%. At Keds Technology, we treat performance as a foundational feature, not an afterthought.

### 1. Hybrid Rendering: The Server-First Advantage
With server-first architectures, the heavy lifting occurs on the distributed edge. Dynamic database queries and heavy dependencies are executed before emitting lightweight HTML to the client browser.

### 2. Eliminating Layout Shifts (Zero CLS)
Cumulative Layout Shift ruins user experiences. By utilizing responsive aspect-ratio wrappers and modern optimized image loading patterns, images and dynamic banners occupy their exact calculated dimensions from frame zero.

### 3. Micro-Interactions That Don't Block the Main Thread
CSS-driven hardware-accelerated animations combined with selective client-side hydration ensure silky 60fps micro-interactions even on mid-range mobile hardware.
    `
  },
  {
    slug: "why-off-the-shelf-erp-fails-growing-businesses",
    title: "Why Generic ERPs Fail and How Custom Architecture Unlocks 10x Operational Speed",
    excerpt: "Off-the-shelf ERPs force businesses to change how they operate. Discover why custom domain-driven ERPs yield massive ROI.",
    category: "Architecture",
    tags: ["ERP", "Enterprise", "Supply Chain", "Automation"],
    author: {
      name: "Keds Solutions Division",
      role: "Enterprise Systems Architect",
      avatar: "KS"
    },
    publishedAt: "September 18, 2026",
    readingTime: "8 min read",
    featured: true,
    content: `
Most businesses that purchase expensive off-the-shelf ERP software discover a painful truth within six months: the software imposes rigid workflows that do not match their real-world manufacturing or service models.

### The Cost of Rigid Workflows
Employees resort to shadow spreadsheets when an ERP requires 14 clicks to approve a simple purchase order. This creates data silos and destroys inventory accuracy.

### Domain-Driven Custom Architecture
A custom ERP engineered around your specific production batches, GST requirements, and warehouse zones eliminates fluff. Your staff gets exactly what they need on one intuitive screen.
    `
  },
  {
    slug: "modern-ui-ux-glassmorphism-cyber-aesthetics",
    title: "The Anatomy of High-Converting B2B UI/UX: Beyond Basic Templates",
    excerpt: "Exploring the delicate balance between high-end digital aesthetics (glassmorphism, subtle neon glows) and ruthless usability.",
    category: "UI/UX Design",
    tags: ["UI/UX", "Design Systems", "Figma", "Conversion"],
    author: {
      name: "Keds Design Studio",
      role: "Head of Product Design",
      avatar: "KD"
    },
    publishedAt: "September 10, 2026",
    readingTime: "5 min read",
    featured: false,
    content: `
A website is often the very first interaction a prospect has with your company. If it looks like a generic $29 template, prospects assume your software and service are equally commoditized.

### Visual Authority Builds Instant Trust
Clean typography, high-contrast dark space backgrounds, and disciplined purple gradients inspire confidence. When users feel they are interacting with an Apple-grade or Linear-grade interface, willingness to engage multiplies.
    `
  },
  {
    slug: "transforming-sports-facility-operations",
    title: "How Ath Elite Sports Club Automated Court Bookings and Grew 340%",
    excerpt: "Case study breakdown: Transforming a bustling sports complex from telephone-based scheduling to an automated digital portal.",
    category: "Enterprise Tech",
    tags: ["Case Study", "Sports Tech", "Booking Engine", "Web Platform"],
    author: {
      name: "Product Strategy Team",
      role: "Senior Consultant",
      avatar: "PS"
    },
    publishedAt: "August 28, 2026",
    readingTime: "7 min read",
    featured: false,
    content: `
Managing badminton courts, turf football, and tennis slots manually during prime evening hours leads to frustrated players and revenue leaks. Here is how our team transformed the Ath Elite Sports complex into an automated digital facility.
    `
  }
];
