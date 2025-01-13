 // Hamburger menu toggle
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');

 hamburger.addEventListener('click', () => {
   navMenu.classList.toggle('active');
 });

 // ScrollReveal animation
 ScrollReveal().reveal('.logo', { delay: 200, origin: 'top', distance: '50px', duration: 800 });
 ScrollReveal().reveal('.search-bar', { delay: 400, origin: 'top', distance: '50px', duration: 800 });
 ScrollReveal().reveal('.nav-menu a', { delay: 600, origin: 'top', distance: '50px', duration: 800, interval: 200 });

 // JavaScript for ScrollReveal Animation
ScrollReveal().reveal('.home-content h1', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
  });
  
  ScrollReveal().reveal('.home-content p', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 400,
  });
  
  ScrollReveal().reveal('.shop-now', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 600,
  });
  
  ScrollReveal().reveal('.dog-image', {
    origin: 'left',
    distance: '100px',
    duration: 1500,
    delay: 800,
  });
  
  ScrollReveal().reveal('.cat-image', {
    origin: 'right',
    distance: '100px',
    duration: 1500,
    delay: 1000,
  });

  ScrollReveal().reveal('.category-item', { distance: '50px', duration: 1000, interval: 200, origin: 'bottom' });

//   product section
    ScrollReveal().reveal('.product-item', { distance: '50px', duration: 1000, interval: 200, origin: 'bottom' });
    ScrollReveal().reveal('.product-item',{
        
    });




    // <-- JavaScript for Form Validation & Animation -->

      $(document).ready(function () {
        $('#contact-form').on('submit', function (e) {
          e.preventDefault();
          
          const name = $('#name').val().trim();
          const email = $('#email').val().trim();
          const message = $('#message').val().trim();
  
          // Simple validation
          if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
          }
  
          // Simulate form submission with a success message
          $('#contact-form')[0].reset();
          $('#success-message').fadeIn().delay(3000).fadeOut();
        });
      });    