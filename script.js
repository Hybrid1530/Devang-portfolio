// Improved highlighting for active nav link
const links = document.querySelectorAll(".navbar a");
const currentPath = window.location.pathname.replace(/\\/g, '/').split('/').pop();

links.forEach(link => {
  const linkPath = link.getAttribute("href");
  const isHomePage = currentPath === '' || currentPath === 'index.html';

  if ((isHomePage && linkPath.includes('index')) || linkPath === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});