"use strict";

// Add or update portfolio concepts here; cards are rendered from this single list.
const projects = [
  {
    name: "The Good Grounds",
    business: "Neighborhood coffee shop",
    description: "A warm, welcoming concept site that puts the menu, location, and daily essentials within easy reach.",
    features: ["Responsive design", "Menu showcase", "Visit us"],
    theme: "cafe",
    url: "https://github.com/JFirm914"
  },
  {
    name: "Northline Fitness",
    business: "Personal training studio",
    description: "An energetic introduction to a coaching studio, with clear services and a confident call to action.",
    features: ["Mobile-first", "Service details", "Contact CTA"],
    theme: "fitness",
    url: "https://github.com/JFirm914"
  },
  {
    name: "Form & Field",
    business: "Independent design studio",
    description: "A considered portfolio concept built to let creative work shine and make new inquiries simple.",
    features: ["Project gallery", "About section", "Inquiry link"],
    theme: "studio",
    url: "https://github.com/JFirm914"
  }
];

const portfolioGrid = document.querySelector("#portfolio-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#primary-menu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const backToTop = document.querySelector(".back-to-top");

function createProjectCard(project) {
  const features = project.features.map((feature) => `<li>${feature}</li>`).join("");

  return `
    <article class="project-card">
      <div class="project-preview" data-theme="${project.theme}" aria-hidden="true">
        <div class="preview-window">
          <div class="preview-bar"><i></i><i></i><i></i></div>
          <div class="preview-layout">
            <div class="preview-copy"><b>${project.name}</b><span></span><span></span></div>
            <div class="preview-image"></div>
          </div>
        </div>
      </div>
      <div class="project-info">
        <p class="project-kicker">${project.business} · concept</p>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <ul class="feature-list" aria-label="Concept features">${features}</ul>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Explore on GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
}

if (portfolioGrid) portfolioGrid.innerHTML = projects.map(createProjectCard).join("");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navMenu.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const sectionObserver = new IntersectionObserver((entries) => {
  const visibleSections = entries
    .filter((entry) => entry.isIntersecting)
    .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

  if (!visibleSections.length) return;
  const currentId = visibleSections[0].target.id;
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5, 1] });

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

function updateBackToTop() {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateBackToTop();
