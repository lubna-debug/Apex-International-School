/**
 * APEX INTERNATIONAL SCHOOL & ACADEMY - PAKISTAN
 * JavaScript Logic & Micro-Interactions
 */

// 0. Page Preloader (Disappears smoothly once all assets/images are loaded)
window.addEventListener('load', () => {
  const preloader = document.getElementById('pagePreloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.remove();
      }, 700);
    }, 450);
  }
});

// Fallback safety timeout (in case of slow network)
setTimeout(() => {
  const preloader = document.getElementById('pagePreloader');
  if (preloader && !preloader.classList.contains('loaded')) {
    preloader.classList.add('loaded');
    setTimeout(() => preloader.remove(), 700);
  }
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header on Scroll
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  // Back to top click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 2. Mobile Navigation Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileNav() {
    hamburgerBtn?.classList.toggle('open');
    mobileNavDrawer?.classList.toggle('open');
    mobileBackdrop?.classList.toggle('open');
    document.body.style.overflow = mobileNavDrawer?.classList.contains('open') ? 'hidden' : '';
  }

  function closeMobileNav() {
    hamburgerBtn?.classList.remove('open');
    mobileNavDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn?.addEventListener('click', toggleMobileNav);
  mobileBackdrop?.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // 3. Stats Counter Animation on Scroll
  const counterElements = document.querySelectorAll('.counter');
  let animated = false;

  function runCounters() {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800; // ms
      const step = Math.ceil(target / (duration / 25)) || 1;
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 25);
    });
  }

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    const statsRow = document.querySelector('.stats-counter-row');
    if (statsRow) observer.observe(statsRow);
  }

  // 4. Interactive Academics Showcase Tab Switcher
  const academicData = {
    cambridge: {
      tag: 'BRITISH COUNCIL CAIE',
      title: 'Cambridge O & A Levels',
      desc: 'Globally recognized curriculum designed for analytical thinking, comprehensive subject depth in Pre-Med, Pre-Eng, Computer Science, and Humanities with top world distinctions.',
      img: 'images/pakistan_school_classroom.jpg',
      features: [
        'British Council CAIE Certified',
        'Straight A* Target Mentorship',
        'Global Uni Admission Counseling',
        'Dedicated Research & Science Labs'
      ]
    },
    fbise: {
      tag: 'FEDERAL BOARD ISLAMABAD',
      title: 'FBISE Matric & FSc (Pre-Med & Pre-Eng)',
      desc: 'Rigorous national curriculum tailored for top board positions and integrated entry test preparation (MDCAT, ECAT, NUMS, NUST NET) with daily testing.',
      img: 'images/pakistan_science_lab.jpg',
      features: [
        'Integrated MDCAT / ECAT Coaching',
        'Board Topper Faculty Mentors',
        'State-of-the-Art Practical Labs',
        'Proven 98%+ Top Board Results'
      ]
    },
    ib: {
      tag: 'IB WORLD SCHOOL GENEVA',
      title: 'International Baccalaureate (IB PYP & MYP)',
      desc: 'Inquiry-based international program fostering critical thinking, global citizenship, multilingual fluency, and creative problem solving from early years to secondary.',
      img: 'images/pakistan_school_library.jpg',
      features: [
        'Inquiry-Based Learning Framework',
        'Global Mindset & Multilingualism',
        'Design Thinking & STEM Projects',
        'Holistic Student Portfolios'
      ]
    }
  };

  const serviceTabBtns = document.querySelectorAll('.service-tab-btn');
  const serviceCardTag = document.getElementById('serviceCardTag');
  const serviceCardTitle = document.getElementById('serviceCardTitle');
  const serviceCardDesc = document.getElementById('serviceCardDesc');
  const serviceCardImg = document.getElementById('serviceCardImg');
  const serviceCardFeatures = document.getElementById('serviceCardFeatures');

  serviceTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const programKey = btn.getAttribute('data-service');
      const data = academicData[programKey];

      if (data && serviceCardTitle && serviceCardDesc && serviceCardImg && serviceCardTag && serviceCardFeatures) {
        serviceCardTag.textContent = data.tag;
        serviceCardTitle.textContent = data.title;
        serviceCardDesc.textContent = data.desc;
        serviceCardImg.src = data.img;

        serviceCardFeatures.innerHTML = data.features.map(f => `
          <div class="service-feature-point">
            <i class="fa-solid fa-circle-check"></i> <span>${f}</span>
          </div>
        `).join('');
      }
    });
  });

  // 5. Toast Notification Utility
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  function showToast(message) {
    if (!toastNotification) return;
    if (toastMessage) toastMessage.textContent = message;
    
    toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }

  // 6. Modal Logic
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const allModals = document.querySelectorAll('.modal-backdrop');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // 7. Form Submissions
  const heroQuoteForm = document.getElementById('heroQuoteForm');
  heroQuoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('🎓 Admission application submitted! Our admissions office will contact you within 24 hours.');
    heroQuoteForm.reset();
  });

  const modalQuoteForm = document.getElementById('modalQuoteForm');
  modalQuoteForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const modal = modalQuoteForm.closest('.modal-backdrop');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
    showToast('🎓 Admission application received! We have sent a confirmation to your email.');
    modalQuoteForm.reset();
  });

  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✨ Thank you for subscribing to Apex Academy admission updates!');
    newsletterForm.reset();
  });

  // 8. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});
