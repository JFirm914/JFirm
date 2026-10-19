"use strict";

const clientProjectGrid = document.querySelector("#client-project-grid");

function createClientProjectCard(project) {
  const card = document.createElement("article");
  card.className = "client-project-card";

  if (project.image) {
    const image = document.createElement("img");
    image.className = "client-project-image";
    image.src = project.image;
    image.alt = `Screenshot of ${project.name} website`;
    image.width = 960;
    image.height = 540;
    image.loading = "lazy";
    image.decoding = "async";
    card.append(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "client-project-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.textContent = "Project preview";
    card.append(placeholder);
  }

  const details = document.createElement("div");
  details.className = "client-project-details";

  const title = document.createElement("h2");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.className = "button button-small";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Visit ${project.name} website`);
  link.append(document.createTextNode("Visit website "));

  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  link.append(arrow);

  details.append(title, description, link);
  card.append(details);
  return card;
}

if (clientProjectGrid) {
  if (window.clientProjects.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "client-project-empty";
    emptyState.setAttribute("role", "status");
    emptyState.textContent = "Our client projects are on their way. Check back soon!";
    clientProjectGrid.replaceChildren(emptyState);
  } else {
    clientProjectGrid.replaceChildren(...window.clientProjects.map(createClientProjectCard));
  }
}
