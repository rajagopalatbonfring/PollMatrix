window.initToastViewport();

// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMobile = document.querySelector('.nav-mobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  const icon = navToggle.querySelector('.nav-toggle-icon');
  icon.textContent = navMobile.classList.contains('active') ? '✕' : '☰';
});

// Mobile dropdown toggle
const servicesLinkMobile = document.querySelector('.nav-dropdown-mobile .nav-link');
const dropdownMenuMobile = document.querySelector('.dropdown-menu-mobile');

servicesLinkMobile.addEventListener('click', (e) => {
  e.preventDefault();
  const parent = servicesLinkMobile.parentElement;
  parent.classList.toggle('active');
});

// Highlight active link
const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Tab functionality
document.querySelectorAll('.tab-input').forEach(input => {
  input.addEventListener('change', () => {
    document.querySelectorAll('.tab-trigger').forEach(label => {
      label.setAttribute('aria-selected', label.getAttribute('for') === input.id);
    });
  });
});