# 🚀 Varun Jinjala - Full-Stack Developer Portfolio

A modern, responsive portfolio showcasing enterprise-level projects across Full-Stack Development, Backend Engineering, Frontend Development, and Microservices Architecture.

![Portfolio Preview](images/Portfolio_Image/landingPage/l1.png)

## 🌟 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📋 About

This portfolio showcases 6 production-grade projects demonstrating expertise in:
- **Full-Stack Development** (Spring Boot + React, Next.js)
- **Backend Engineering** (Microservices, REST APIs, OpenAI Integration)
- **Frontend Development** (Pure Vanilla JS, Modern CSS)
- **Enterprise Architecture** (Multi-tenant SaaS, Real-time Sync)

## 🎯 Featured Projects

### 1. **AI Review Generator**
- AI-driven review generation platform using Spring Boot 3.2.3 & OpenAI API
- Multi-tenant architecture with Admin/Client portals
- **Tech:** Spring Boot, Java 17, OpenAI API, MySQL, Thymeleaf

### 2. **Enterprise Multi-Platform E-Commerce SaaS**
- Centralizes Shopify, Myntra & Meesho operations
- Real-time sync with multi-tenant isolation
- **Tech:** Spring Boot 3, React 19, JWT, Redis, Apache Kafka

### 3. **JWT-STUDENT-LIBRARY**
- Microservices-based Library Management System
- Event-driven architecture with Apache Kafka
- **Tech:** Spring Boot, Spring Cloud, JWT, Eureka, MySQL

### 4. **ModernShop E-Commerce**
- Production-grade e-commerce site with pure Vanilla JS
- Zero frameworks, fully handcrafted UI
- **Tech:** HTML5, CSS3, JavaScript ES6+, LocalStorage

### 5. **Prose Food Delivery**
- Responsive food delivery website with persistent cart
- Payment gateway integration ready (Stripe/Razorpay)
- **Tech:** HTML5, CSS3, JavaScript ES6+, AOS Animations

### 6. **Enterprise Next.js Landing Page**
- Next.js 16 with 90+ Lighthouse performance score
- Advanced animations with Framer Motion
- **Tech:** Next.js 16, React 19, TypeScript 5, TailwindCSS

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript ES6+
- React 19, Next.js 16
- TypeScript 5
- TailwindCSS, Bootstrap 5
- Framer Motion, AOS Animations

### Backend
- Java 17, Spring Boot 3
- Spring Cloud (Microservices)
- Node.js
- REST APIs, GraphQL
- JWT Authentication

### Databases
- MySQL 8
- Redis
- LocalStorage API

### DevOps & Tools
- Apache Kafka
- Docker
- Maven
- Git & GitHub
- Vercel, Apache HTTP Client

## 📁 Project Structure

```
Varun-devfolio/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── project.html            # Projects listing
├── single-project.html     # Project details
├── contact.html            # Contact page
├── css/
│   ├── style.css          # Main styles
│   ├── project.css        # Projects page styles
│   └── single-project.css # Project details styles
├── js/
│   ├── script.js          # Main JavaScript
│   └── projects-data.js   # Projects data store
├── images/
│   └── Portfolio_Image/   # All project screenshots/videos
└── documents/
    └── resume.pdf         # Resume
```

## 🎨 Features

- ✅ **Fully Responsive** - Mobile-first design (320px → 4K displays)
- ✅ **Modern UI/UX** - Glassmorphism, animations, smooth transitions
- ✅ **Dynamic Content** - JavaScript-powered project loading
- ✅ **Video Support** - Handles both images and videos in project galleries
- ✅ **AOS Animations** - Smooth scroll-triggered animations
- ✅ **Dark Theme** - Professional dark color scheme
- ✅ **Performance Optimized** - Fast loading, lazy-loaded images
- ✅ **SEO Friendly** - Semantic HTML, proper meta tags
- ✅ **Cross-Browser Compatible** - Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TechnicalJin/Varun-devfolio.git
cd Varun-devfolio
```

2. **Open with Live Server**
   - Using VS Code: Install "Live Server" extension and click "Go Live"
   - Or open `index.html` directly in your browser

3. **Update Content**
   - Edit `js/projects-data.js` to add/modify projects
   - Replace images in `images/Portfolio_Image/`
   - Update resume in `documents/resume.pdf`

## 📝 Customization

### Adding a New Project

Edit `js/projects-data.js`:

```javascript
"your-project-id": {
  title: "Project Title",
  category: "Full-Stack Development",
  oneLine: "Brief description",
  date: "2024",
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  thumbnail: "images/Portfolio_Image/YourProject/thumb.png",
  description: `Full project description`,
  highlights: ["Highlight 1", "Highlight 2"],
  techStack: {
    frontend: ["React", "TypeScript"],
    backend: ["Spring Boot", "MySQL"],
    tools: ["Docker", "GitHub Actions"]
  },
  features: [
    {
      title: "Feature Name",
      description: "Feature description"
    }
  ],
  impact: ["Impact 1", "Impact 2"],
  screenshots: [
    {
      label: "Screenshot Name",
      url: "images/Portfolio_Image/YourProject/image.png"
    }
  ]
}
```

### Updating Categories

Edit the category mapping in `project.html`:

```javascript
const categoryMap = {
  'your-project-id': 'fullstack backend',
};
```

## 📊 Portfolio Highlights

- **6 Production-Grade Projects** showcasing diverse technical expertise
- **Enterprise-Level Solutions** with real business impact metrics
- **Modern Tech Stack** using latest versions (Spring Boot 3, React 19, Next.js 16)
- **Scalable Architecture** designed for 10,000+ users
- **Performance Optimized** with 90+ Lighthouse scores
- **Security First** with JWT, BCrypt, RBAC implementation

## 🤝 Connect With Me

- **GitHub:** [@TechnicalJin](https://github.com/TechnicalJin)
- **LinkedIn:** [Jinjala Varun](https://www.linkedin.com/in/jinjala-varun-2a11182b4)
- **Instagram:** [@_varun__.098](https://www.instagram.com/_varun__.098)
- **Fiverr:** [@varunbuilds](https://www.fiverr.com/varunbuilds)
- **Email:** contact@varun.com

## 📄 License

This portfolio is built using a template from [TemplatesJungle](https://templatesjungle.com/) and customized for personal use.

### Usage Rights
- ✅ Free for personal and commercial use
- ✅ Modify and customize as needed
- ✅ Use in client projects

### Restrictions
- ❌ Cannot remove template credit (unless purchasing No Attribution version)
- ❌ Cannot resell or redistribute as template
- ❌ Cannot use to build premium themes for marketplaces

## 🙏 Credits

- **Template:** [TemplatesJungle - David Portfolio](https://templatesjungle.com/downloads/david/)
- **Framework:** [Bootstrap 5](https://getbootstrap.com/)
- **Animations:** [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Google Fonts - Inter & Syne](https://fonts.google.com/)

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Integrate CMS for dynamic content
- [ ] Add multi-language support
- [ ] Implement dark/light theme toggle
- [ ] Add analytics integration
- [ ] Create mobile app version

## 💡 Support

For any questions or issues:
- Open an issue on GitHub
- Contact via email: contact@varun.com
- Connect on LinkedIn

---

**⭐ If you like this portfolio, please give it a star!**

Made with ❤️ by Varun Jinjala | Full-Stack Developer
