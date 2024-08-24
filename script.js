// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

navToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('nav-open');
});

// Close the mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('nav-open');
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'  // Ensure scrolling starts at the top of the section
    });

    // Close the menu if it’s in mobile view
    if (window.innerWidth <= 768) {
      navLinksContainer.classList.remove('nav-open');
    }
  });
});

// Script to dynamically update the Last Updated date
document.addEventListener("DOMContentLoaded", function () {
    const updateDateElement = document.getElementById('update-date');
    const lastUpdatedDate = new Date(2024, 7, 23); // Month is 0-indexed (August is 7)
    const formattedDate = lastUpdatedDate.toLocaleDateString('en-GB');
    updateDateElement.textContent = formattedDate;
});

  