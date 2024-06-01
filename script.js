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


let slideIndex = {
  rdr2: 0,
  gtav: 0,
  gtatrilogy: 0,
  maxpayne3: 0,
  bully: 0
};

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  resetCarousel(modalId);
}

function changeSlide(n, carouselId) {
  showSlide(slideIndex[carouselId] += n, carouselId);
}

function showSlide(n, carouselId) {
  let i;
  const slides = document.querySelectorAll(`#carousel-${carouselId} img`);
  if (n >= slides.length) {
    slideIndex[carouselId] = 0;
  }
  if (n < 0) {
    slideIndex[carouselId] = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex[carouselId] * 100}%)`;
  }
}

function resetCarousel(modalId) {
  let carouselId = modalId.split('-')[1];
  slideIndex[carouselId] = 0;
  showSlide(slideIndex[carouselId], carouselId);
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      resetCarousel(modals[i].id);
    }
  }
}
