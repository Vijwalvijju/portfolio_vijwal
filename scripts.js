// Smooth Scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple fade-in effect for images
  window.addEventListener('scroll', function () {
    let profileImg = document.querySelector('.profile-img');
    let windowHeight = window.innerHeight;
    let elementTop = profileImg.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 50) {
      profileImg.style.opacity = 1;
      profileImg.style.transform = 'scale(1)';
    }
  });
  
  document.querySelector('.profile-img').style.opacity = 0;
  document.querySelector('.profile-img').style.transform = 'scale(0.8)';
  