// Add smooth scrolling, navbar toggle for mobile, and basic form validation

// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100; // Pixels from bottom before it triggers

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

// Check on scroll and on initial page load
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);