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
var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  var headline = document.querySelector("h1");
  
  spanText(headline);
  
  let animations = document.querySelectorAll('.animation');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })

/*mlsa*/
// Using GSAP for animation
gsap.set('.txt1, .txt2', { opacity: 0 });

gsap.timeline({ defaults: { duration: 1 } })
  .from('.txt1', { opacity: 0, x: -50, ease: 'power2.inOut' })
  .from('.txt2', { opacity: 0, x: 50, ease: 'power2.inOut' }, '-=0.5')
  .from('.bar', { height: 0, ease: 'power2.inOut' }, '-=0.5');
