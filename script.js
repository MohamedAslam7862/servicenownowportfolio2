/* =====================================================
   SERVICENOW PORTFOLIO - JAVASCRIPT
   Mohamed Aslam M J | ServiceNow Consultant
   ===================================================== */

// =====================================================
// HAMBURGER MENU TOGGLE
// =====================================================

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// =====================================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// =====================================================

document.addEventListener("DOMContentLoaded", function() {
  // Handle all navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      
      if (targetId && targetId !== "#") {
        e.preventDefault();
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const navHeight = document.querySelector("#desktop-nav")?.offsetHeight || 
                           document.querySelector("#hamburger-nav")?.offsetHeight || 0;
          
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
});

// =====================================================
// NAVBAR BACKGROUND ON SCROLL
// =====================================================

window.addEventListener("scroll", function() {
  const nav = document.querySelector("#desktop-nav") || document.querySelector("#hamburger-nav");
  
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.background = "hsla(195, 25%, 8%, 0.95)";
      nav.style.boxShadow = "0 4px 20px hsla(160, 40%, 50%, 0.1)";
    } else {
      nav.style.background = "hsla(195, 25%, 8%, 0.9)";
      nav.style.boxShadow = "none";
    }
  }
});

// =====================================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// =====================================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  let currentSection = "";
  const navHeight = document.querySelector("#desktop-nav")?.offsetHeight || 
                   document.querySelector("#hamburger-nav")?.offsetHeight || 80;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);
document.addEventListener("DOMContentLoaded", updateActiveNavLink);

// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

function revealOnScroll() {
  const reveals = document.querySelectorAll(".about-card, .project-card, .cert-card, .skill-category, .contact-card, .company-card, .expertise-item");
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("revealed");
    }
  });
}

// Add CSS for reveal animation
const style = document.createElement("style");
style.textContent = `
  .about-card,
  .project-card,
  .cert-card,
  .skill-category,
  .contact-card,
  .company-card,
  .expertise-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .about-card.revealed,
  .project-card.revealed,
  .cert-card.revealed,
  .skill-category.revealed,
  .contact-card.revealed,
  .company-card.revealed,
  .expertise-item.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger animation for grid items */
  .about-card:nth-child(1) { transition-delay: 0.1s; }
  .about-card:nth-child(2) { transition-delay: 0.2s; }
  .about-card:nth-child(3) { transition-delay: 0.3s; }
  
  .project-card:nth-child(1) { transition-delay: 0.1s; }
  .project-card:nth-child(2) { transition-delay: 0.2s; }
  .project-card:nth-child(3) { transition-delay: 0.3s; }
  .project-card:nth-child(4) { transition-delay: 0.4s; }
  
  .cert-card:nth-child(1) { transition-delay: 0.05s; }
  .cert-card:nth-child(2) { transition-delay: 0.1s; }
  .cert-card:nth-child(3) { transition-delay: 0.15s; }
  .cert-card:nth-child(4) { transition-delay: 0.2s; }
  .cert-card:nth-child(5) { transition-delay: 0.25s; }
  .cert-card:nth-child(6) { transition-delay: 0.3s; }
  .cert-card:nth-child(7) { transition-delay: 0.35s; }

  .company-card:nth-child(1) { transition-delay: 0.1s; }
  .company-card:nth-child(2) { transition-delay: 0.2s; }

  .expertise-item:nth-child(1) { transition-delay: 0.02s; }
  .expertise-item:nth-child(2) { transition-delay: 0.04s; }
  .expertise-item:nth-child(3) { transition-delay: 0.06s; }
  .expertise-item:nth-child(4) { transition-delay: 0.08s; }
  .expertise-item:nth-child(5) { transition-delay: 0.1s; }
  .expertise-item:nth-child(6) { transition-delay: 0.12s; }
  .expertise-item:nth-child(7) { transition-delay: 0.14s; }
  .expertise-item:nth-child(8) { transition-delay: 0.16s; }
  .expertise-item:nth-child(9) { transition-delay: 0.18s; }
  .expertise-item:nth-child(10) { transition-delay: 0.2s; }
  .expertise-item:nth-child(11) { transition-delay: 0.22s; }
  .expertise-item:nth-child(12) { transition-delay: 0.24s; }
  .expertise-item:nth-child(13) { transition-delay: 0.26s; }
  .expertise-item:nth-child(14) { transition-delay: 0.28s; }
  .expertise-item:nth-child(15) { transition-delay: 0.3s; }
  .expertise-item:nth-child(16) { transition-delay: 0.32s; }

  .contact-card:nth-child(1) { transition-delay: 0.1s; }
  .contact-card:nth-child(2) { transition-delay: 0.15s; }
  .contact-card:nth-child(3) { transition-delay: 0.2s; }
  .contact-card:nth-child(4) { transition-delay: 0.25s; }
  .contact-card:nth-child(5) { transition-delay: 0.3s; }
  
  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);

window.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);

// =====================================================
// TYPING EFFECT FOR HERO TITLE (Optional Enhancement)
// =====================================================

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment to enable typing effect
// document.addEventListener("DOMContentLoaded", function() {
//   const title = document.querySelector("#profile .title");
//   if (title) {
//     typeWriter(title, "MOHAMED ASLAM", 80);
//   }
// });

// =====================================================
// CLOSE MOBILE MENU ON OUTSIDE CLICK
// =====================================================

document.addEventListener("click", function(e) {
  const hamburgerNav = document.querySelector("#hamburger-nav");
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  
  if (hamburgerNav && menuLinks && hamburgerIcon) {
    const isClickInside = hamburgerNav.contains(e.target);
    
    if (!isClickInside && menuLinks.classList.contains("open")) {
      menuLinks.classList.remove("open");
      hamburgerIcon.classList.remove("open");
    }
  }
});

// =====================================================
// SKILL TAGS HOVER EFFECT
// =====================================================

document.addEventListener("DOMContentLoaded", function() {
  const skillTags = document.querySelectorAll(".skill-tag, .cert-tag");
  
  skillTags.forEach(tag => {
    tag.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.05)";
    });
    
    tag.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
    });
  });
});

// =====================================================
// CONSOLE LOG FOR PORTFOLIO
// =====================================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Mohamed Aslam M J | ServiceNow Portfolio               ║
║   ─────────────────────────────────────────              ║
║                                                           ║
║   🚀 ServiceNow Consultant @ Deloitte                    ║
║   📜 CSA | CAD | CIS-ITSM Certified                      ║
║   💼 HRSD | ITSM | GRC Expert                            ║
║                                                           ║
║   📧 sayhi2aslam@gmail.com                               ║
║   🔗 linkedin.com/in/mohamedaslammj-servicenow           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
