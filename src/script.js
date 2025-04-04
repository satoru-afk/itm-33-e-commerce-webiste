// Simple scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Product hover animation
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const tag = card.querySelector('.product-tag');
      if (tag) {
        tag.style.transform = 'scale(1.1)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const tag = card.querySelector('.product-tag');
      if (tag) {
        tag.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add floating clouds
  function createClouds() {
    const hero = document.querySelector('.hero');
    const features = document.querySelector('.features');
    
    for (let i = 0; i < 3; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'cloud decoration';
      cloud.style.width = `${70 + Math.random() * 100}px`;
      cloud.style.height = `${30 + Math.random() * 20}px`;
      cloud.style.top = `${20 + Math.random() * 40}px`;
      cloud.style.left = `${Math.random() * 80}%`;
      cloud.style.opacity = '0.7';
      cloud.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
      cloud.style.animationDelay = `${Math.random() * 5}s`;
      
      hero.appendChild(cloud);
    }
    
    for (let i = 0; i < 3; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'cloud decoration';
      cloud.style.width = `${70 + Math.random() * 100}px`;
      cloud.style.height = `${30 + Math.random() * 20}px`;
      cloud.style.top = `${20 + Math.random() * 40}px`;
      cloud.style.left = `${Math.random() * 80}%`;
      cloud.style.opacity = '0.7';
      cloud.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
      cloud.style.animationDelay = `${Math.random() * 5}s`;
      
      features.appendChild(cloud);
    }
  }
  
  // Run animations
  window.addEventListener('load', () => {
    createClouds();
  });