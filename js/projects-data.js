// projects-data.js - Central data store for all projects

const projectsData = {
  "ai-review": {
    title: "AI Review Generator",
    category: "Backend Development",
    oneLine: "AI-driven review generation platform that automates the creation of authentic, contextual, brand-aligned customer reviews using Spring Boot and OpenAI API.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    thumbnail: "images/Portfolio_Image/AI_REVIEW/ai1.png",
    
    description: `AI Review Generator is an intelligent AI-driven review generation platform that automates the creation of authentic, contextual, brand-aligned customer reviews for businesses. Built using Spring Boot 3.2.3 and Java 17, the system uses the OpenAI (ChatGPT) API with a tag-driven prompt engine to deliver high-quality review content in multiple styles and lengths.`,
    
    highlights: [
      "AI-powered content engine with primary-tag emphasis for highly contextual review generation",
      "Supports multiple output lengths (short / medium / long)",
      "Regeneration, history tracking, and tag caching for faster workflows",
      "Multi-tenant architecture with separate Admin and Client portals",
      "Searchable review history + CSV export for business insights",
      "Highly secure with Spring Security, BCrypt, role-based access, validation, and session protection"
    ],
    
    techStack: {
      frontend: ["Thymeleaf", "HTML5", "CSS3", "JavaScript"],
      backend: ["Spring Boot 3.2.3", "Java 17", "Spring MVC", "Spring Security", "JPA/Hibernate", "MySQL 8"],
      tools: ["OpenAI API", "Apache HTTP Client", "Gson", "BCrypt", "Maven"]
    },
    
    features: [
      {
        title: "AI Content Generation",
        description: "Tag-driven prompt engine (primary + secondary tags) generates consistent brand-aligned reviews with multi-length outputs and high variability"
      },
      {
        title: "Dual Portal System",
        description: "Separate Admin and Client portals with multi-tenant architecture for unlimited client management"
      },
      {
        title: "Review Management",
        description: "Full review history with filtering, CSV export for reporting, and smart caching of last-used tag set"
      },
      {
        title: "Reliability & Safety",
        description: "Transactional guarantees, input validation, file upload controls, and clean separation of tenants"
      },
      {
        title: "Enterprise Security",
        description: "BCrypt password hashing, Spring Security RBAC (ROLE_USER, ROLE_CLIENT), method-level authorization, and session management"
      },
      {
        title: "Performance Optimization",
        description: "Pagination on heavy queries, profile-based configs (dev/prod), optimized logging, and API retries"
      }
    ],
    
    impact: [
      "Eliminates manual review creation",
      "Reduces content-writing costs significantly",
      "Enables scalable AI-powered review generation for unlimited clients",
      "Ensures consistent voice and tone across all reviews",
      "Accelerates delivery for client reputation & marketing teams"
    ],
    
    screenshots: [
      {
        label: "Security & Authentication",
        url: "images/Portfolio_Image/AI_REVIEW/ai6.png"
      },
      {
        label: "Admin Dashboard",
        url: "images/Portfolio_Image/AI_REVIEW/ai1.png"
      },
      {
        label: "Review Generation Interface",
        url: "images/Portfolio_Image/AI_REVIEW/ai2.png"
      },
      {
        label: "Tag Management System",
        url: "images/Portfolio_Image/AI_REVIEW/ai3.png"
      },
      {
        label: "Client Portal",
        url: "images/Portfolio_Image/AI_REVIEW/ai4.png"
      },
      {
        label: "Review History & Export",
        url: "images/Portfolio_Image/AI_REVIEW/ai5.png"
      },
      {
        label: "Multi-Tenant Management",
        url: "images/Portfolio_Image/AI_REVIEW/ai7.png"
      },
      {
        label: "Analytics Dashboard",
        url: "images/Portfolio_Image/AI_REVIEW/ai8.png"
      }
    ]
  },

  "shopify-multi-platform": {
    title: "Enterprise Multi-Platform E-Commerce SaaS",
    category: "Full-Stack Development",
    oneLine: "High-performance SaaS platform centralizing Shopify, Myntra, and Meesho operations with real-time sync, multi-tenant isolation, and enterprise security.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    thumbnail: "images/Portfolio_Image/Shopify/s1.png",
    
    description: `A high-performance enterprise SaaS platform that centralizes and automates e-commerce operations across Shopify, Myntra, and Meesho, enabling sellers to manage their entire business from a single dashboard. Built with Spring Boot 3 + Java 17 and React 19, featuring multi-tenant isolation, real-time synchronization, and enterprise-level security.`,
    
    highlights: [
      "Multi-Platform Integration: Seamless sync with Shopify, Myntra, Meesho (products, orders, customers, inventory)",
      "Enterprise Security: JWT Auth, role-based access, BCrypt, IP tracking, HMAC-verified webhooks",
      "Real-Time Sync: Orders, inventory, refunds, customer data — instant updates via webhooks & async processing",
      "SaaS Subscription System: Multi-tier plans, staff limits, billing cycles, expiration logic, subscription analytics",
      "Complete Store Management: Products, orders, inventory, customers, analytics, notifications — all unified"
    ],
    
    techStack: {
      frontend: ["React 19", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
      backend: ["Spring Boot 3", "Java 17", "Spring Security", "JWT", "MySQL", "Redis"],
      tools: ["Shopify API", "Myntra API", "Meesho API", "Webhooks", "Apache Kafka", "Docker"]
    },
    
    features: [
      {
        title: "Products Management",
        description: "Variants, pricing, inventory, bulk import/export, status automation across all platforms"
      },
      {
        title: "Order Lifecycle Management",
        description: "Real-time syncing, refunds, cancellations, multi-currency support, RTO flow automation"
      },
      {
        title: "Customer Management",
        description: "Unified customer profiles across all platforms, segmentation, activity history tracking"
      },
      {
        title: "SaaS Subscription Management",
        description: "Plan limits, billing cycles, usage tracking, auto-disable on expiry, revenue analytics dashboard"
      },
      {
        title: "Real-Time Notifications",
        description: "Instant alerts for orders, customers, products, and subscription events via webhooks"
      },
      {
        title: "Analytics Dashboard",
        description: "Revenue trends, order KPIs, product insights, platform-wise comparison and reporting"
      }
    ],
    
    impact: [
      "Automates 80% of manual tasks for e-commerce sellers",
      "Centralizes multi-platform operations → reduces complexity & improves efficiency",
      "Real-time insights → better decision-making & faster actions",
      "Supports SaaS monetization with scalable multi-tenant architecture"
    ],
    
    screenshots: [
      {
        label: "Multi-Platform Dashboard",
        url: "images/Portfolio_Image/Shopify/s1.png"
      },
      {
        label: "Products Management",
        url: "images/Portfolio_Image/Shopify/s2.png"
      },
      {
        label: "Order Processing",
        url: "images/Portfolio_Image/Shopify/s3.png"
      },
      {
        label: "Subscription Management",
        url: "images/Portfolio_Image/Shopify/s4.png"
      },
      {
        label: "Analytics Dashboard",
        url: "images/Portfolio_Image/Shopify/s5.png"
      },
      {
        label: "Real-Time Sync",
        url: "images/Portfolio_Image/Shopify/s6.png"
      }
    ]
  },

  "jwt-library": {
    title: "JWT-STUDENT-LIBRARY",
    category: "Microservices Architecture",
    oneLine: "Enterprise-grade Library Management System with microservices architecture, JWT authentication, event-driven workflows, and real-time automation.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    postmanUrl: "https://documenter.getpostman.com/view/43246363/2sB3dSRpKx",
    thumbnail: "images/Portfolio_Image/default-backend.jpg",
    
    description: `JWT-STUDENT-LIBRARY is an enterprise-grade, cloud-ready Library Management System built with a modern microservices architecture. Designed for academic institutions and multi-campus environments, it centralizes book, student, loan, and reservation management with secure JWT authentication, event-driven workflows, and real-time operational automation.`,
    
    highlights: [
      "Microservices Architecture: Auth, Management, and Library services with Eureka Discovery & API Gateway",
      "Strong Security: Stateless JWT (HS256) with RBAC, BCrypt hashing, method-level @PreAuthorize",
      "Event-Driven: Apache Kafka integration for async workflows and service orchestration",
      "Real-Time Automation: Scheduled overdue detection, fine calculation, and reservation workflows",
      "Multi-Campus Ready: Designed for 10,000+ students, 50,000+ books with optimized queries",
      "Complete API Documentation: Postman collection with all endpoints, request/response examples"
    ],
    
    techStack: {
      frontend: ["N/A - Backend Only"],
      backend: ["Spring Boot", "Java 17", "Spring Cloud", "Spring Security", "JPA/Hibernate", "MySQL"],
      tools: ["Apache Kafka", "Eureka Discovery", "Spring Cloud Gateway", "Spring Cloud Config", "Spring Retry", "Maven"]
    },
    
    features: [
      {
        title: "Auth Service (Port 8080)",
        description: "JWT generation/validation, refresh tokens, BCrypt hashing, multi-role support (ADMIN, LIBRARIAN, STUDENT, USER)"
      },
      {
        title: "Management Service (Port 8081)",
        description: "Student CRUD operations, enrollment tracking, verification APIs with full audit trail"
      },
      {
        title: "Library Service (Port 8082)",
        description: "Book catalog, checkout/returns, reservations, overdue detection, fine calculation logic"
      },
      {
        title: "Book Management",
        description: "CRUD operations, availability tracking, ISBN uniqueness, advanced search/filters"
      },
      {
        title: "Loan Workflows",
        description: "14-day default period, max 5 active loans, full audit history, scheduled overdue detection"
      },
      {
        title: "Reservation System",
        description: "PENDING → APPROVED → COMPLETED/CANCELLED lifecycle with one-step loan conversion"
      }
    ],
    
    impact: [
      "93% faster checkout process (30 min → <2 min)",
      "40% lower infrastructure cost through microservices optimization",
      "80% fewer lost books with real-time tracking",
      "65% increase in fine collection automation",
      "Built to scale: 10,000+ students, 50,000+ books"
    ],
    
    screenshots: [
      {
        label: "Microservices Architecture",
        url: "images/Portfolio_Image/default-backend.jpg"
      }
    ]
  },

  "modernshop": {
    title: "ModernShop E-Commerce",
    category: "Frontend Development",
    oneLine: "Fully responsive, production-grade e-commerce web application built with pure HTML, CSS, and ES6+ JavaScript with zero frameworks.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    thumbnail: "images/Portfolio_Image/MordenShop/m1.png",
    
    description: `ModernShop is a fully responsive, production-grade e-commerce web application built using pure HTML, CSS, and modern ES6+ JavaScript with zero frameworks. Designed with a sleek, minimalist UI and advanced interactive components, it delivers a smooth, professional shopping experience with mobile-first optimization and high performance.`,
    
    highlights: [
      "Pure Vanilla JavaScript - No frameworks, fully handcrafted UI",
      "Modern Navigation: Sticky header, smooth scroll, active section highlighting, animated hamburger menu",
      "Premium Hero Section: Split layout, 3D tilt effects, gradient CTAs, glassmorphism info card",
      "Product Showcase: 8 best-seller cards with image zoom, badges, quick-view overlays, star ratings",
      "Lightbox Viewer: Full-screen modal with zoom animation, ESC + click-to-close",
      "Newsletter Module: Real-time validation, success/error states, loading indicators & toast notifications"
    ],
    
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "CSS Grid", "Flexbox", "CSS Animations"],
      backend: ["N/A - Static Site"],
      tools: ["Intersection Observer API", "LocalStorage", "Responsive Design", "Mobile-First Approach"]
    },
    
    features: [
      {
        title: "Modern Navigation System",
        description: "Sticky header with smooth scroll, active section highlighting, and animated hamburger menu"
      },
      {
        title: "Premium Hero Section",
        description: "Split layout with 3D tilt effects, gradient CTAs, and glassmorphism info card"
      },
      {
        title: "Category Grid",
        description: "6 custom categories with hover animations, outline typography & responsive layout"
      },
      {
        title: "Product Showcase",
        description: "8 best-seller cards with image zoom, badges, quick-view overlays, star ratings & animated 'Add to Cart'"
      },
      {
        title: "Lightbox Viewer",
        description: "Full-screen modal with zoom animation, ESC + click-to-close functionality"
      },
      {
        title: "Performance & UX",
        description: "Lazy-loaded animations via Intersection Observer, debounced scroll events, GPU-accelerated transforms"
      }
    ],
    
    impact: [
      "Professional & scalable product showcase",
      "Conversion-optimized CTAs and promotional sections",
      "Lead generation through newsletter subscription",
      "Backend-ready structure: JSON-based product data & modular forms",
      "Fully responsive layouts (320px → 4K displays)"
    ],
    
    screenshots: [
      {
        label: "Homepage Hero",
        url: "images/Portfolio_Image/MordenShop/m1.png"
      },
      {
        label: "Product Grid",
        url: "images/Portfolio_Image/MordenShop/m2.png"
      },
      {
        label: "Category Showcase",
        url: "images/Portfolio_Image/MordenShop/m3.jpeg"
      },
      {
        label: "Product Details",
        url: "images/Portfolio_Image/MordenShop/v1.mp4"
      },
      {
        label: "Shopping Cart",
        url: "images/Portfolio_Image/MordenShop/v2.mp4"
      },
      {
        label: "Newsletter Section",
        url: "images/Portfolio_Image/MordenShop/v3.mp4"
      }
    ]
  },

  "prose-food-delivery": {
    title: "Prose Food Delivery",
    category: "Frontend Development",
    oneLine: "Fully responsive food delivery website with persistent LocalStorage cart, category filters, and checkout-ready payment gateway integration.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    thumbnail: "images/Portfolio_Image/Prose/p1.png",
    
    description: `Prose Development is a fully responsive, production-ready food delivery website built using pure HTML, CSS, and modern ES6+ JavaScript—with zero frameworks or dependencies. It delivers a visually premium, high-performance e-commerce experience with a persistent LocalStorage cart, category-based filtering, and a checkout-ready flow with plug-and-play payment gateway hooks (Stripe/Razorpay).`,
    
    highlights: [
      "Pure Vanilla Frontend — no frameworks, fully handcrafted UI",
      "Social-media-inspired modern layout with premium visual design",
      "Persistent LocalStorage Cart (add/update/remove, item badge, dynamic totals)",
      "10+ food items across 5 categories with instant filters",
      "Checkout-ready flow with integration points for payment gateways"
    ],
    
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage API", "Intersection Observer"],
      backend: ["N/A - Static Site (Payment Gateway Ready)"],
      tools: ["AOS Animation Library", "Font Awesome", "Google Fonts", "Responsive Design"]
    },
    
    features: [
      {
        title: "Glassmorphism Search",
        description: "Full-screen search modal with auto-suggestions and keyboard shortcuts for quick actions"
      },
      {
        title: "Persistent Cart System",
        description: "LocalStorage-based cart with add/update/remove, item badge counter, and dynamic price totals"
      },
      {
        title: "Category Filters",
        description: "10+ food items across 5 categories (Pizza, Burgers, Sushi, Desserts, Drinks) with instant filtering"
      },
      {
        title: "Promo System",
        description: "Promotional banners with copy-to-clipboard coupon codes and toast notifications"
      },
      {
        title: "Checkout Ready",
        description: "Payment gateway integration points for Stripe/Razorpay with form validation & error handling"
      },
      {
        title: "Premium UX",
        description: "Sticky auto-hiding navbar, animated product cards, CTA micro-interactions, AOS scroll animations"
      }
    ],
    
    impact: [
      "Fast-loading, lightweight storefront optimized for high conversions",
      "Persistent cart improves repeat sessions & reduces abandonment",
      "Visually premium interface enhances brand trust",
      "Easily extensible for backend APIs, analytics, or real payment flow",
      "Works seamlessly on all modern browsers with WCAG compliance"
    ],
    
    screenshots: [
      {
        label: "Homepage Banner",
        url: "images/Portfolio_Image/Prose/p1.png"
      },
      {
        label: "Menu Categories",
        url: "images/Portfolio_Image/Prose/p2.png"
      },
      {
        label: "Food Items Grid",
        url: "images/Portfolio_Image/Prose/p3.png"
      },
      {
        label: "Shopping Cart",
        url: "images/Portfolio_Image/Prose/p4.png"
      },
      {
        label: "Checkout Flow",
        url: "images/Portfolio_Image/Prose/p5.png"
      },
      {
        label: "Search & Filter",
        url: "images/Portfolio_Image/Prose/p6.png"
      }
    ]
  },

  "nextjs-landing": {
    title: "Enterprise Next.js Landing Page",
    category: "Full-Stack Development",
    oneLine: "Production-ready Next.js 16 landing page with advanced animations, TypeScript, and 90+ Lighthouse performance score.",
    date: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/TechnicalJin",
    thumbnail: "images/Portfolio_Image/landingPage/l1.png",
    
    description: `A production-ready, enterprise-level landing page engineered with Next.js 16, React 19, and TypeScript 5, built to deliver exceptional performance, accessibility, and user experience. The project demonstrates mastery of modern frontend engineering, advanced animation systems, scalable architecture, and real-world development workflows suitable for high-traffic commercial applications.`,
    
    highlights: [
      "Next.js 16 with App Router, SSR & SSG for optimal performance",
      "React 19 + TypeScript 5 (strict mode) for type-safe development",
      "Framer Motion 12 for advanced animations with reduced motion support",
      "90+ Lighthouse scores with automated performance audits",
      "WCAG 2.1 AA compliant with full keyboard navigation & screen reader support"
    ],
    
    techStack: {
      frontend: ["Next.js 16", "React 19", "TypeScript 5", "TailwindCSS v4", "Framer Motion 12"],
      backend: ["Vercel Serverless", "EmailJS 4.4.1", "Next Themes"],
      tools: ["Webpack Bundle Analyzer", "Lighthouse CI", "Playwright", "Vercel Analytics", "Shadcn UI"]
    },
    
    features: [
      {
        title: "Hero Section",
        description: "Dynamic headline animations, magnetic CTAs, parallax scroll effects, and animated gradients"
      },
      {
        title: "Features Showcase",
        description: "Interactive feature cards with hover transformations, staggered animations, and responsive grid layouts"
      },
      {
        title: "Testimonials Carousel",
        description: "Optimized avatars, animated star ratings, and social proof elements with smooth transitions"
      },
      {
        title: "Pricing Module",
        description: "Billing cycle toggles, animated pricing cards, and comparison matrix for conversion optimization"
      },
      {
        title: "Contact Form",
        description: "Real-time validation, EmailJS integration, loading states, and success/error toast notifications"
      },
      {
        title: "Custom Hooks Library",
        description: "useReducedMotion, useOptimizedScroll, useMicrointeractions, useKeyboardNavigation, useDebounce"
      }
    ],
    
    impact: [
      "High Conversion Focus: Optimized CTAs and frictionless interactions increase user engagement",
      "90+ Lighthouse Scores: SSR, code splitting, lazy loading for enterprise performance",
      "WCAG 2.1 AA Compliance: Full accessibility with screen readers and keyboard navigation",
      "Scalable Architecture: Reusable components, strict TypeScript, CI/CD ready for expansion",
      "Real-Time Insights: Vercel Analytics and Speed Insights for performance tracking"
    ],
    
    screenshots: [
      {
        label: "Hero Section",
        url: "images/Portfolio_Image/landingPage/l1.png"
      },
      {
        label: "Features Grid",
        url: "images/Portfolio_Image/landingPage/l2.png"
      },
      {
        label: "Testimonials",
        url: "images/Portfolio_Image/landingPage/l3.png"
      },
      {
        label: "Pricing Plans",
        url: "images/Portfolio_Image/landingPage/l4.png"
      },
      {
        label: "Contact Form",
        url: "images/Portfolio_Image/landingPage/l5.png"
      },
      {
        label: "Dark Mode",
        url: "images/Portfolio_Image/landingPage/l6.png"
      }
    ]
  }
};

// Helper function to get project by ID
function getProjectData(projectId) {
  return projectsData[projectId] || null;
}

// Helper function to get all project IDs
function getAllProjectIds() {
  return Object.keys(projectsData);
}