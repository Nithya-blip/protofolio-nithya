// 1. Show welcome message when page loads
window.onload = function () {
  alert("Welcome to Nithya Shree's Portfolio!");
};

// 2. Add current year to footer
const footer = document.querySelector('footer');
const year = new Date().getFullYear();
footer.innerHTML += ` | © ${year}`;

// 3. Toggle dark mode on double-click anywhere
document.body.ondblclick = function () {
  document.body.classList.toggle('dark-mode');
};

// 4. Optional: Log something to console
console.log("Script loaded successfully!");
