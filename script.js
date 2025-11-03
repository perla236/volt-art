document.addEventListener("DOMContentLoaded", function () {
  // ===== Mobile menu toggle =====
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // ===== Aktivni link prema stranici =====
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // ===== Dark mode toggle functionality =====
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "darkMode",
        document.documentElement.classList.contains("dark")
      );

      const icon = this.querySelector("i");
      if (document.documentElement.classList.contains("dark")) {
        icon.setAttribute("data-feather", "sun");
      } else {
        icon.setAttribute("data-feather", "moon");
      }
      feather.replace();
    });
  }

  // ===== Check for saved dark mode preference =====
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  }

  // ===== Animate elements when they come into view =====
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, [class*="animate-"]'
    );

    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        const animationClasses = Array.from(element.classList)
          .filter((cls) => cls.startsWith("animate-"))
          .map((cls) => cls.replace("animate-", ""));

        element.style.opacity = "1";

        // Add staggered delay based on index
        const delay = (index % 5) * 0.1;
        element.style.animationDelay = `${delay}s`;

        animationClasses.forEach((animation) => {
          element.classList.add(animation);
        });
      }
    });
  };
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on page load

  // ===== Form submission =====
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      alert("Hvala na poruci! Kontaktirat ćemo vas u najkraćem mogućem roku.");
      this.reset();
    });
  }
});
