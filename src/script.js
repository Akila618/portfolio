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
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Function to handle the scroll event
  function fadeSectionsOnScroll() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('fade-in');
      }
    });
  }
  
  // Add scroll event listener to trigger fade-in effect
  window.addEventListener('scroll', fadeSectionsOnScroll);
  
  // Initial check on page load
  window.addEventListener('load', fadeSectionsOnScroll);
  

/*mlsa*/
