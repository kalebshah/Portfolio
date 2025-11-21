function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollRight() {
  const container = document.querySelector('.projects-scroll-container');
  container.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the pixel value as needed
}
