const nameElement = document.getElementById("name-toggle");

const names = [" Full Stack Developer", "Back-end Developer", "Web Developer"];
let index = 0;

function typeText(text, callback) {
  let i = 0;
  const interval = setInterval(() => {
    nameElement.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      setTimeout(callback, 1000);
    }
  }, 100);
}

function deleteText(callback) {
  let text = nameElement.textContent;
  let i = text.length;
  const interval = setInterval(() => {
    nameElement.textContent = text.substring(0, i - 1);
    i--;
    if (i === 0) {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

function loopNames() {
  deleteText(() => {
    index = (index + 1) % names.length;
    typeText(names[index], loopNames);
  });
}

// Start the name animation when page loads
window.addEventListener("DOMContentLoaded", () => {
  typeText(names[index], loopNames);
});
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
