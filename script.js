var navLinks = document.querySelectorAll('.nav-item a[href^="#"]');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var id = this.getAttribute('href');
    var targetOffset = document.querySelector(id).offsetTop;
    
    window.scrollTo({
      top: targetOffset - 45,
      behavior: 'smooth'
    });
  });
});