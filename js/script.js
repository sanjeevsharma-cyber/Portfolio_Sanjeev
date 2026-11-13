document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const contactForm = document.getElementById("contact-form");
  const backToTopBtn = document.getElementById("back-to-top");
  const currentYearEl = document.getElementById("current-year");
  const toastEl = document.getElementById("toast");

  // 1. Dynamic Footer Year
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Theme Toggle (Light / Dark Mode with localStorage)
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    htmlEl.setAttribute("data-theme", savedTheme);
  } else if (prefersDark) {
    htmlEl.setAttribute("data-theme", "dark");
  }

  themeToggle?.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });

  // 3. Mobile Hamburger Menu
  hamburger?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
    });
  });

  // 4. Active Nav Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => navObserver.observe(section));

  // 5. Scroll Reveal Animation
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // 6. Toast Notification Helper
  let toastTimeout;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 3200);
  }

  // 7. Copy Email to Clipboard
  copyEmailBtn?.addEventListener("click", async () => {
    const email = copyEmailBtn.getAttribute("data-email") || "";
    try {
      await navigator.clipboard.writeText(email);
      showToast(`Copied: ${email}`);
    } catch {
      showToast("Could not copy email automatically.");
    }
  });

  // 8. Contact Form (Static Mailto Handler for GitHub Pages)
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const subject = document.getElementById("sender-subject").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !email || !subject || !message) {
      showToast("Please complete all required fields.");
      return;
    }

    const recipient = copyEmailBtn?.getAttribute("data-email") || "sanjeev.sharma@example.com";
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}
Email: ${email}

Message:
${message}`
    );

    showToast("Opening your email client...");
    window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
  });

  // 9. Back to Top Button
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
