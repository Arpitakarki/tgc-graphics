window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY;
    let headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.style.backgroundColor = 'rgba( 12, 1, 51, 1)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"]');
  
    for (const smoothScrollLink of smoothScrollLinks) {
        smoothScrollLink.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
  
        window.requestAnimationFrame(step);
  
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }
  
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});














let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sub-place");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}