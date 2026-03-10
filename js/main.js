// Setup Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
   // --- Header Scroll Effect ---
   const header = document.getElementById("header");
   window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
         header.classList.add("scrolled");
      } else {
         header.classList.remove("scrolled");
      }
   });

   // --- Scroll Reveal Animations ---
   const revealElements = document.querySelectorAll(".reveal");

   const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optional: Stop observing once revealed
            // observer.unobserve(entry.target);
         }
      });
   };

   const revealOptions = {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: "0px 0px -50px 0px",
   };

   const revealObserver = new IntersectionObserver(
      revealCallback,
      revealOptions,
   );

   revealElements.forEach((el) => revealObserver.observe(el));

   // --- Mobile Navigation Toggle ---
   const mobileToggle = document.getElementById("mobile-toggle");
   const nav = document.getElementById("nav");
   const menuOverlay = document.getElementById("menu-overlay");
   const navLinks = document.querySelectorAll(".nav-link");
   const toggleIcon = mobileToggle.querySelector("i");

   const toggleMenu = () => {
      nav.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("open")
         ? "hidden"
         : "";

      // Update icon
      if (nav.classList.contains("open")) {
         toggleIcon.classList.remove("ph-list");
         toggleIcon.classList.add("ph-x");
      } else {
         toggleIcon.classList.remove("ph-x");
         toggleIcon.classList.add("ph-list");
      }
   };

   mobileToggle.addEventListener("click", toggleMenu);
   menuOverlay.addEventListener("click", toggleMenu);

   // Close menu when a link is clicked
   navLinks.forEach((link) => {
      link.addEventListener("click", () => {
         if (nav.classList.contains("open")) {
            toggleMenu();
         }
      });
   });
});
