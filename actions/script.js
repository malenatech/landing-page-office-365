// =============================================
// MOBILE MENU
// =============================================
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.mobile-menu-overlay');
const menuClose = document.querySelector('.menu-close');

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeMenu = () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuClose) menuClose.addEventListener('click', closeMenu);

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) closeMenu();
  });

  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// =============================================
// HEADER SCROLL EFFECT
// =============================================
const header = document.querySelector('.cabecalho');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================
function observeElements() {
  const elements = document.querySelectorAll(
    '.benefit-card, .feature-card, .testimonial-card, .guarantee-card, .cta-section, .tutorial'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', observeElements);

// =============================================
// SWIPER - BENEFITS CAROUSEL (MOBILE)
// =============================================
if (document.querySelector('.swiper-container')) {
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    breakpoints: {
      320: { slidesPerView: 'auto', spaceBetween: 12 },
      640: { slidesPerView: 'auto', spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
    }
  });
}

// =============================================
// SWIPER - TESTIMONIALS CAROUSEL
// =============================================
if (document.querySelector('.testimonial-swiper-container')) {
  new Swiper('.testimonial-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 600,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });
}

// =============================================
// SMOOTH ANCHOR SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
