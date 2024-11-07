// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav a');

navToggle.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('nav-open');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Script to dynamically update the Last Updated date
document.addEventListener("DOMContentLoaded", function () {
    const updateDateElement = document.getElementById('update-date');
    const lastUpdatedDate = new Date(2024, 11, 7); 
    const formattedDate = lastUpdatedDate.toLocaleDateString('en-GB');
    updateDateElement.textContent = formattedDate;
  });

  