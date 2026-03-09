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
});
