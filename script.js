const nameElement = document.getElementById("name-toggle");

// Roles typed under your name, taken from your resume
const names = ["Generative AI Engineer", "Agentic AI Engineer", "Full-Stack Engineer"];
let index = 0;

function typeText(text, callback) {
  let i = 0;
  const interval = setInterval(() => {
    nameElement.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      setTimeout(callback, 1500);
    }
  }, 90);
}

function deleteText(callback) {
  const text = nameElement.textContent;
  let i = text.length;
  const interval = setInterval(() => {
    nameElement.textContent = text.substring(0, i - 1);
    i--;
    if (i <= 0) {
      clearInterval(interval);
      callback();
    }
  }, 45);
}

function loopNames() {
  deleteText(() => {
    index = (index + 1) % names.length;
    typeText(names[index], loopNames);
  });
}

// Start the typing animation when the page loads
window.addEventListener("DOMContentLoaded", () => {
  if (nameElement) typeText(names[index], loopNames);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}