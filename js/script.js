// import ask from "./ask.js";
// import shop from "./shop.js";

// ask.init();
// shop.init();


// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Grab the hamburger button and the nav menu
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');

  // Add a click event to the button
  toggleBtn.addEventListener('click', () => {
    // Toggle the "active" class on the nav
    nav.classList.toggle('active');
  });
});

console.log("JS file loaded!");



