// Single source of truth for brand, contact details and page content.
// Swap values here to update every page at once.

export const site = {
  name: "Click & Code",
  legalName: "Click & Code",
  tagline: "Digital marketing & software development company",
  description:
    "Click & Code is a digital marketing and software development company in Lahore, Pakistan. SEO, AEO & GEO, Google Ads, Meta Ads, custom websites, WordPress development and custom apps for startups and growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "ali.ashraf4915@gmail.com",
  phone: "+92 322 4561875",
  phoneHref: "tel:+923224561875",
  city: "Lahore",
  country: "Pakistan",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroTags = [
  "SEO Services",
  "Google Ads",
  "Meta Ads",
  "Custom Websites",
  "WordPress Development",
  "Custom Apps",
];

export const audiences = [
  {
    id: "startups",
    icon: "rocket",
    title: "Startups",
    body: "Launch with a strong digital foundation through high-performing websites, SEO, paid advertising, and scalable technology.",
  },
  {
    id: "smb",
    icon: "storefront",
    title: "Small & Medium Businesses",
    body: "Strengthen your online presence, reach more customers, and turn digital traffic into measurable business growth.",
  },
  {
    id: "brands",
    icon: "trend",
    title: "Growing Brands",
    body: "Scale your marketing and technology with strategies designed to increase visibility, leads, conversions, and customer engagement.",
  },
  {
    id: "entrepreneurs",
    icon: "lightbulb",
    title: "Entrepreneurs",
    body: "Turn your idea into a professional digital presence with the right combination of marketing, websites, and custom applications.",
  },
];

export const services = [
  {
    id: "seo",
    icon: "seo",
    title: "SEO Services",
    short: "SEO",
    body: "Improve your search visibility, attract qualified organic traffic, and build sustainable growth with data-driven SEO strategies.",
    includes: [
      "Technical SEO audits and fixes",
      "Keyword and competitor research",
      "On-page optimization",
      "Content strategy and briefs",
      "Local SEO and Google Business Profile",
      "Monthly performance reporting",
    ],
    idealFor: "Businesses that want steady, compounding traffic without paying for every click.",
  },
  {
    id: "aeo-geo",
    icon: "ai",
    title: "AEO & GEO",
    short: "AEO & GEO",
    body: "Turn search and AI discovery into real business results. We use intelligent SEO, AEO, and GEO strategies to put your brand in front of the right audience, strengthen your digital authority, generate qualified leads, and create long-term organic growth.",
    includes: [
      "Answer-ready content structure",
      "Schema and structured data",
      "Entity and brand authority building",
      "FAQ and conversational content",
      "Citation-worthy expert content",
      "AI search visibility tracking",
    ],
    idealFor: "Brands that want to be the answer when customers ask search engines and AI assistants.",
  },
  {
    id: "google-ads",
    icon: "target",
    title: "Google Ads",
    short: "Google Ads",
    body: "Reach customers actively searching for your products or services with targeted Google Ads campaigns built around conversions.",
    includes: [
      "Account setup and audit",
      "Keyword and search intent research",
      "Ad copy, assets and extensions",
      "Conversion tracking setup",
      "Bid and budget optimization",
      "Landing page recommendations",
    ],
    idealFor: "Businesses that need qualified leads now, from people already searching.",
  },
  {
    id: "meta-ads",
    icon: "megaphone",
    title: "Meta Ads",
    short: "Meta Ads",
    body: "Connect with the right audiences across Facebook and Instagram through creative, targeted campaigns designed to generate leads and sales.",
    includes: [
      "Audience research and targeting",
      "Creative direction and ad copy",
      "Pixel and Conversions API setup",
      "Retargeting funnels",
      "Creative A/B testing",
      "Performance reporting",
    ],
    idealFor: "Brands with a visual story to tell and an audience to build on social.",
  },
  {
    id: "custom-websites",
    icon: "browser",
    title: "Custom Website Development",
    short: "Custom Websites",
    body: "Build a fast, modern website tailored to your brand, business goals, customer journey, and unique functionality.",
    includes: [
      "Discovery and sitemap planning",
      "UI/UX design",
      "Responsive front-end development",
      "CMS or custom back-end",
      "Performance and technical SEO",
      "Analytics and launch support",
    ],
    idealFor: "Businesses that have outgrown templates and need a site built around how they sell.",
  },
  {
    id: "wordpress",
    icon: "layout",
    title: "WordPress Development",
    short: "WordPress",
    body: "Get a professional, flexible WordPress website that's easy to manage, optimized for search engines, and built for performance.",
    includes: [
      "Custom theme development",
      "Block editor and page builder setup",
      "WooCommerce stores",
      "Speed and security hardening",
      "Plugin selection and configuration",
      "Training and handover",
    ],
    idealFor: "Teams that want to publish and update content themselves, without a developer on call.",
  },
  {
    id: "custom-apps",
    icon: "app",
    title: "Custom App Development",
    short: "Custom Apps",
    body: "Turn your app idea into a reliable digital product with custom development focused on usability, performance, and scalability.",
    includes: [
      "Product discovery and scoping",
      "UX flows and prototyping",
      "Web and mobile app development",
      "APIs and third-party integrations",
      "QA and testing",
      "Deployment and maintenance",
    ],
    idealFor: "Founders and companies turning a process or idea into software people rely on.",
  },
];

export const results = [
  { id: "seo", label: "SEO", title: "Higher organic visibility" },
  { id: "ads", label: "Paid Ads", title: "More qualified leads" },
  { id: "web", label: "Web Development", title: "Faster, better experiences" },
  { id: "apps", label: "Custom Apps", title: "Technology built to scale" },
];

export const steps = [
  {
    step: "01",
    name: "Discover",
    title: "Strategy & Consultation",
    body: "We start by understanding your business, audience, challenges, and goals. Then, we identify the right digital strategy and create a clear roadmap for your project.",
  },
  {
    step: "02",
    name: "Plan",
    title: "Strategy, Design & Direction",
    body: "We turn ideas into actionable plans. From SEO and advertising strategies to website structures and app requirements, we define what needs to be done and how we'll achieve it.",
  },
  {
    step: "03",
    name: "Build",
    title: "Web & App Development",
    body: "Our team develops fast, functional, and user-friendly digital experiences. Whether it's a custom website, WordPress site, or application, we build with performance and scalability in mind.",
  },
  {
    step: "04",
    name: "Launch",
    title: "Testing, Optimization & Go-Live",
    body: "Before launch, we test, refine, and optimize every important element. From website performance and technical SEO to ad campaigns and user experience, we make sure everything is ready to perform.",
  },
  {
    step: "05",
    name: "Grow",
    title: "Optimization & Ongoing Support",
    body: "Launching is only the beginning. We continuously analyze performance, identify opportunities, and optimize your marketing, website, or application to support long-term growth.",
  },
];

export const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    price: 400,
    period: "Monthly",
    summary: "The essentials to claim, structure and optimize your Google Business Profile.",
    features: [
      "GBP Listing Management",
      "Keyword Research",
      "Local Citations",
      "On Page SEO",
      "Technical SEO",
      "On Page Keyword Optimization",
    ],
  },
  {
    id: "momentum",
    name: "Momentum Plan",
    price: 450,
    period: "Monthly",
    featured: true,
    summary: "Full profile setup plus the print and video assets that build local trust.",
    features: [
      "GBP Account Creation",
      "GBP Account Management",
      "Technical SEO",
      "On Page Keyword Optimization",
      "NAP Consistency",
      "Business Directory",
      "Business Card & QR Code",
      "Business Flyer",
      "Business YT Video",
    ],
  },
  {
    id: "pioneer",
    name: "Pioneer Plan",
    price: 500,
    period: "Monthly",
    summary: "Everything in Momentum, plus local citations and social media management.",
    features: [
      "GBP Account Creation",
      "GBP Account Management",
      "Technical SEO",
      "On Page Keyword Optimization",
      "Local Citations",
      "NAP Consistency",
      "Business Directory",
      "Business Card & QR Code",
      "Business Flyer",
      "Business YT Video",
      "Social Media Management",
    ],
  },
];

export const pricingFaq = [
  {
    q: "What is a Google Business Profile (GBP)?",
    a: "It's the free listing that shows your business on Google Search and Google Maps: your name, address, phone, hours, photos and reviews. For local businesses it is often the first thing a customer sees, so a complete, consistent profile has a direct effect on calls and visits.",
  },
  {
    q: "Which plan should I choose?",
    a: "If your profile already exists and you want it optimized, Starter covers listing management, keyword research, citations and on-page work. If you need the profile created and want marketing assets like a business card, QR code, flyer and YouTube video, choose Momentum. Pioneer adds local citations and social media management on top of Momentum.",
  },
  {
    q: "What does NAP consistency mean?",
    a: "NAP stands for Name, Address and Phone number. Search engines cross-check these details across directories and websites. When they match everywhere, Google trusts your listing more, which supports local rankings.",
  },
  {
    q: "Do you price websites, ads and apps the same way?",
    a: "No. SEO, Google Ads, Meta Ads, website and app projects are scoped around your goals, so we quote them after a free consultation. Tell us what you need on the contact page and we'll come back with a clear proposal.",
  },
  {
    q: "How do I get started?",
    a: "Call us or send a message through the contact page. We'll talk through your business, recommend the right plan and get your profile work started.",
  },
];

export const principles = [
  {
    title: "Strategy before spend",
    body: "Every project starts with your goals, audience and numbers. We decide what to build or run only after we know what success looks like.",
  },
  {
    title: "Marketing and technology, one team",
    body: "The people planning your campaigns talk to the people building your website. Nothing gets lost between agencies.",
  },
  {
    title: "Built for performance",
    body: "Fast pages, clean code, tracked conversions. We build things that load quickly, rank well and are easy to measure.",
  },
  {
    title: "No guesswork, no unnecessary complexity",
    body: "Clear scopes, plain-language reporting and a process you can follow from first call to launch and beyond.",
  },
];
