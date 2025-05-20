const footer = document.createElement("footer");
const body = document.body;
body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const footerElement = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Habon Nur`;
footerElement.appendChild(copyright);

// Skills section

const skills = ["HTML", "CSS", "JavaScript", "GitHub", "VS Code"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}