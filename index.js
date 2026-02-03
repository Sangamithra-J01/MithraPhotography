// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});

// Contact form submission (basic)
$('#contact-form').on('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

