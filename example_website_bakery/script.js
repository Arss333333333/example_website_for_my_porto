// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")
const sidebarOverlay = document.getElementById("sidebarOverlay")
const sidebarClose = document.getElementById("sidebarClose")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
  sidebarOverlay.classList.toggle("active")
})

// Close sidebar when close button is clicked
sidebarClose.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
  sidebarOverlay.classList.remove("active")
})

// Close sidebar when overlay is clicked
sidebarOverlay.addEventListener("click", () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
  sidebarOverlay.classList.remove("active")
})

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    sidebarOverlay.classList.remove("active")
  })
})

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${Array.from(entry.target.parentElement.children).indexOf(entry.target) * 0.1}s`
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all scroll-animate elements
const scrollElements = document.querySelectorAll(".scroll-animate")
scrollElements.forEach((el) => observer.observe(el))

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ===== HERO ANIMATION ON PAGE LOAD =====
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")
  const heroBtn = document.querySelector(".hero .btn-primary")

  if (heroTitle) heroTitle.style.animation = "fadeIn 0.8s ease-out"
  if (heroSubtitle) heroSubtitle.style.animation = "fadeIn 0.8s ease-out 0.2s both"
  if (heroBtn) heroBtn.style.animation = "fadeIn 0.8s ease-out 0.4s both"
})

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
  }
})
