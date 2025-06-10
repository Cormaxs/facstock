// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light"
    this.init()
  }

  init() {
    this.setTheme(this.theme)
    this.bindEvents()
  }

  setTheme(theme) {
    this.theme = theme

    // Remove both classes first
    document.documentElement.classList.remove("light", "dark")

    // Add the appropriate class
    document.documentElement.classList.add(theme)

    // Store in localStorage
    localStorage.setItem("theme", theme)

    // Update header background based on theme
    this.updateHeaderBackground()
  }

  toggleTheme() {
    const newTheme = this.theme === "light" ? "dark" : "light"
    this.setTheme(newTheme)
  }

  updateHeaderBackground() {
    const header = document.querySelector(".header")
    if (header) {
      const currentScrollY = window.scrollY

      if (this.theme === "dark") {
        if (currentScrollY > 100) {
          header.style.background = "rgba(15, 23, 42, 0.98)"
        } else {
          header.style.background = "rgba(15, 23, 42, 0.95)"
        }
      } else {
        if (currentScrollY > 100) {
          header.style.background = "rgba(255, 255, 255, 0.98)"
        } else {
          header.style.background = "rgba(255, 255, 255, 0.95)"
        }
      }
    }
  }

  bindEvents() {
    const toggleButtons = document.querySelectorAll(".theme-toggle")
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => this.toggleTheme())
    })
  }
}

// Mobile Menu Management
class MobileMenu {
  constructor() {
    this.menuBtn = document.getElementById("mobileMenuBtn")
    this.menu = document.getElementById("mobileMenu")
    this.isOpen = false
    this.init()
  }

  init() {
    if (this.menuBtn && this.menu) {
      this.bindEvents()
    }
  }

  toggle() {
    this.isOpen = !this.isOpen
    this.menu.classList.toggle("active", this.isOpen)

    // Update button icon
    const icon = this.menuBtn.querySelector("i")
    if (icon) {
      icon.className = this.isOpen ? "fas fa-times" : "fas fa-bars"
    }

    // Update aria attributes
    this.menuBtn.setAttribute("aria-expanded", this.isOpen.toString())
    this.menuBtn.setAttribute("aria-label", this.isOpen ? "Cerrar menú" : "Abrir menú")

    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isOpen ? "hidden" : ""
  }

  close() {
    this.isOpen = false
    this.menu.classList.remove("active")
    const icon = this.menuBtn.querySelector("i")
    if (icon) {
      icon.className = "fas fa-bars"
    }
    this.menuBtn.setAttribute("aria-expanded", "false")
    this.menuBtn.setAttribute("aria-label", "Abrir menú")
    document.body.style.overflow = ""
  }

  bindEvents() {
    // Toggle menu on button click
    this.menuBtn.addEventListener("click", () => this.toggle())

    // Close menu when clicking on nav links
    const navLinks = this.menu.querySelectorAll(".mobile-nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => this.close())
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (this.isOpen && !this.menu.contains(e.target) && !this.menuBtn.contains(e.target)) {
        this.close()
      }
    })

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close()
      }
    })
  }
}

// FAQ Accordion Management
class FAQAccordion {
  constructor() {
    this.faqItems = document.querySelectorAll(".faq-item")
    this.init()
  }

  init() {
    this.bindEvents()
  }

  toggleItem(item) {
    const isActive = item.classList.contains("active")
    const question = item.querySelector(".faq-question")

    // Close all items
    this.faqItems.forEach((faqItem) => {
      faqItem.classList.remove("active")
      const faqQuestion = faqItem.querySelector(".faq-question")
      if (faqQuestion) {
        faqQuestion.setAttribute("aria-expanded", "false")
      }
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active")
      if (question) {
        question.setAttribute("aria-expanded", "true")
      }
    }
  }

  bindEvents() {
    this.faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      if (question) {
        question.addEventListener("click", () => this.toggleItem(item))
      }
    })
  }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
  constructor() {
    this.init()
  }

  init() {
    this.bindEvents()
  }

  scrollToElement(targetId) {
    const target = document.querySelector(targetId)
    if (target) {
      const header = document.querySelector(".header")
      const headerHeight = header ? header.offsetHeight : 0
      const targetPosition = target.offsetTop - headerHeight - 20

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      })
    }
  }

  bindEvents() {
    // Handle all anchor links
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const targetId = link.getAttribute("href")
        if (targetId && targetId !== "#") {
          this.scrollToElement(targetId)
        }
      }
    })
  }
}

// Form Handling
class FormHandler {
  constructor() {
    this.init()
  }

  init() {
    this.bindEvents()
  }

  handleEmailSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.querySelector('input[type="email"]')

    if (!input) return

    const email = input.value.trim()

    if (this.validateEmail(email)) {
      // Simulate form submission
      this.showSuccess("¡Gracias! Te contactaremos pronto.")
      input.value = ""
    } else {
      this.showError("Por favor, ingresa un email válido.")
      input.focus()
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  showSuccess(message) {
    this.showNotification(message, "success")
  }

  showError(message) {
    this.showNotification(message, "error")
  }

  showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification")
    existingNotifications.forEach((notification) => notification.remove())

    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message
    notification.setAttribute("role", "alert")
    notification.setAttribute("aria-live", "polite")

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: white;
      font-weight: 600;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 90vw;
      word-wrap: break-word;
      ${type === "success" ? "background: #22c55e;" : "background: #ef4444;"}
    `

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }, 5000)
  }

  bindEvents() {
    // Handle CTA form submission
    const ctaForm = document.querySelector(".cta-form")
    if (ctaForm) {
      ctaForm.addEventListener("submit", (e) => this.handleEmailSubmit(e))
    }
  }
}

// Intersection Observer for Animations
class AnimationObserver {
  constructor() {
    this.observer = null
    this.init()
  }

  init() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      })

      this.observeElements()
    }
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        this.observer.unobserve(entry.target)
      }
    })
  }

  observeElements() {
    const elements = document.querySelectorAll(
      ".benefit-card, .feature-card, .pricing-card, .testimonial-card, .section-header",
    )

    elements.forEach((element) => {
      this.observer.observe(element)
    })
  }
}

// Header Scroll Effect
class HeaderScrollEffect {
  constructor() {
    this.header = document.querySelector(".header")
    this.lastScrollY = window.scrollY
    this.themeManager = null
    this.init()
  }

  init() {
    if (this.header) {
      this.bindEvents()
    }
  }

  setThemeManager(themeManager) {
    this.themeManager = themeManager
  }

  handleScroll() {
    const currentScrollY = window.scrollY
    const isDark = document.documentElement.classList.contains("dark")

    if (isDark) {
      if (currentScrollY > 100) {
        this.header.style.background = "rgba(15, 23, 42, 0.98)"
      } else {
        this.header.style.background = "rgba(15, 23, 42, 0.95)"
      }
    } else {
      if (currentScrollY > 100) {
        this.header.style.background = "rgba(255, 255, 255, 0.98)"
      } else {
        this.header.style.background = "rgba(255, 255, 255, 0.95)"
      }
    }

    this.lastScrollY = currentScrollY
  }

  bindEvents() {
    let ticking = false

    const updateHeader = () => {
      this.handleScroll()
      ticking = false
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateHeader)
          ticking = true
        }
      },
      { passive: true },
    )
  }
}

// Performance and Error Handling
class PerformanceManager {
  constructor() {
    this.init()
  }

  init() {
    this.preloadCriticalImages()
    this.handleErrors()
    this.optimizeImages()
  }

  preloadCriticalImages() {
    const criticalImages = ["images/facstock-logo.png"]

    criticalImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }

  handleErrors() {
    window.addEventListener("error", (e) => {
      console.error("Error occurred:", e.error)
    })

    window.addEventListener("unhandledrejection", (e) => {
      console.error("Unhandled promise rejection:", e.reason)
    })
  }

  optimizeImages() {
    const images = document.querySelectorAll("img")

    if ("loading" in HTMLImageElement.prototype) {
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) {
          img.loading = "lazy"
        }
      })
    }
  }
}

// Initialize all components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Initialize performance manager first
    new PerformanceManager()

    // Initialize theme manager
    const themeManager = new ThemeManager()

    // Initialize other components
    new MobileMenu()
    new FAQAccordion()
    new SmoothScroll()
    new FormHandler()
    new AnimationObserver()

    // Initialize header scroll effect and connect it to theme manager
    const headerScrollEffect = new HeaderScrollEffect()
    headerScrollEffect.setThemeManager(themeManager)

    // Add loading animation to page
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.3s ease"

    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 100)
  } catch (error) {
    console.error("Error initializing components:", error)
  }
})

// Handle window resize
window.addEventListener("resize", () => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 768) {
    const mobileMenu = document.getElementById("mobileMenu")
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")

    if (mobileMenu && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""

      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute("aria-expanded", "false")
        mobileMenuBtn.setAttribute("aria-label", "Abrir menú")
        const icon = mobileMenuBtn.querySelector("i")
        if (icon) {
          icon.className = "fas fa-bars"
        }
      }
    }
  }
})

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
