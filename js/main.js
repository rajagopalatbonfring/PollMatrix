window.initToastViewport();

   // Navigation toggle
   const navToggle = document.querySelector('.nav-toggle');
   const navMobile = document.querySelector('.nav-mobile');
   navToggle.addEventListener('click', () => {
     navMobile.classList.toggle('active');
     navToggle.textContent = navMobile.classList.contains('active') ? '✕' : '☰';
   });

   // Highlight active link
   const navLinks = document.querySelectorAll('.nav-link');
   navLinks.forEach(link => {
     if (link.href === window.location.href) {
       link.classList.add('active');
     }
   });


   document.querySelectorAll('.tab-input').forEach(input => {
    input.addEventListener('change', () => {
        document.querySelectorAll('.tab-trigger').forEach(label => {
        label.setAttribute('aria-selected', label.getAttribute('for') === input.id);
        });
    });
    });
