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

   // Toast test button (for debugging)
   const app = document.getElementById('app');
   if (app) {
     app.innerHTML = `
       <button id="show-toast">Show Test Toast</button>
     `;
     document.getElementById('show-toast').addEventListener('click', () => {
       window.createToast({
         title: 'Test Toast',
         description: 'This is a toast message!',
         variant: 'default',
       });
     });
   }

   // Responsive background
   window.initMobileListener((isMobile) => {
     const main = document.querySelector('main');
     main.className = `min-h-screen ${isMobile ? 'mobile' : 'desktop'}`;
   });




// Active link highlight
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Toast init
window.initToastViewport();