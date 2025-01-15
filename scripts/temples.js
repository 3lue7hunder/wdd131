// Update footer with current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


// Select the hamburger button and navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the 'active' class on the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
