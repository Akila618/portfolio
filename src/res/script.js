/*loading screen */
document.addEventListener('DOMContentLoaded', function () {
    // Hide loading screen when all content is loaded
    window.addEventListener('load', function () {
      document.getElementById('loading-screen').style.display = 'none';
    });
  });
  
/*scroll to top*/
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 100) { // Adjust the value as needed for when the button should appear
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/*Animation */
const section2 = document.getElementById('section_2');
const section3 = document.getElementById('section_3');
const section4 = document.getElementById('section_4');
const section5 = document.getElementById('section_5');
const section6 = document.getElementById('section_6');
const section7 = document.getElementById('section_7');

const observer2 = new IntersectionObserver((entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
    section2.classList.add('fade-in');
    observer.unobserve(section2);
}
});
}, { threshold: 0.2 });

const observer3 = new IntersectionObserver((entries, observer) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
    section3.classList.add('fade-in');
    observer.unobserve(section3);
}
});
}, { threshold: 0.2 });

// Repeat for sections 4 to 7 with their respective IntersectionObservers
// ...

observer2.observe(section2);
observer3.observe(section3);
// Observe other sections as needed
// ...

/*mlsa*/
