const scrollUpBtn = document.getElementById('scroll-up-btn');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  const scrollDifference = currentScrollPos - prevScrollPos;

  if (scrollDifference > 10) {
    scrollUpBtn.style.opacity = '0';
    setTimeout(() => {
      scrollUpBtn.style.display = 'block';
    }, 500);
  } else if (scrollDifference < -10) {
    setTimeout(() => {
      scrollUpBtn.style.display = 'block';
    }, 500);
    scrollUpBtn.style.opacity = '1';
  }

  prevScrollPos = currentScrollPos;
});