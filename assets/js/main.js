/**
 * UNESCO Leadership Portfolio interactions.
 * Based on the main interaction pattern of the supplied Clinic template.
 */
(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector('#header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const scrollTop = document.querySelector('#scroll-top');

  function toggleScrolled() {
    if (!header) return;
    body.classList.toggle('scrolled', window.scrollY > 100);
  }

  function closeMobileNav() {
    body.classList.remove('mobile-nav-active');
    if (mobileToggle) {
      mobileToggle.classList.add('bi-list');
      mobileToggle.classList.remove('bi-x');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      body.classList.toggle('mobile-nav-active');
      mobileToggle.classList.toggle('bi-list');
      mobileToggle.classList.toggle('bi-x');
    });
  }

  document.querySelectorAll('#navmenu a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  const preloader = document.querySelector('#preloader');
  window.addEventListener('load', () => {
    if (preloader) preloader.remove();
  });

  function toggleScrollTop() {
    if (scrollTop) scrollTop.classList.toggle('active', window.scrollY > 100);
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function setActiveNav() {
    const position = window.scrollY + 140;
    document.querySelectorAll('#navmenu a[href^="#"]').forEach((link) => {
      const target = document.querySelector(link.getAttribute('href'));
      const active = target && position >= target.offsetTop && position < target.offsetTop + target.offsetHeight;
      link.classList.toggle('active', Boolean(active));
    });
  }

  function initGalleryFilters() {
    const buttons = document.querySelectorAll('.gallery-filter');
    const items = document.querySelectorAll('.gallery-item');
    const empty = document.querySelector('.gallery-empty');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        let visible = 0;

        items.forEach((item) => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.classList.toggle('is-hidden', !show);
          if (show) visible += 1;
        });

        if (empty) empty.hidden = visible !== 0;
      });
    });

    document.querySelectorAll('[data-gallery-target]').forEach((link) => {
      link.addEventListener('click', () => {
        const filter = link.dataset.galleryTarget;
        const button = document.querySelector(`.gallery-filter[data-filter="${filter}"]`);
        if (button) window.setTimeout(() => button.click(), 400);
      });
    });
  }

  function handleMissingImages() {
    document.querySelectorAll('.media-frame img').forEach((img) => {
      const frame = img.closest('.media-frame');
      const markMissing = () => frame && frame.classList.add('image-missing');
      const markLoaded = () => frame && frame.classList.remove('image-missing');
      img.addEventListener('error', markMissing);
      img.addEventListener('load', markLoaded);
      if (img.complete && img.naturalWidth === 0) markMissing();
    });
  }

  window.addEventListener('load', () => {
    if (window.AOS) {
      AOS.init({ duration: 650, easing: 'ease-in-out', once: true, mirror: false, offset: 40 });
    }
    if (window.GLightbox) {
      GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
    }
    if (window.PureCounter) new PureCounter();
    handleMissingImages();
    initGalleryFilters();
    toggleScrolled();
    toggleScrollTop();
    setActiveNav();
  });

  document.addEventListener('scroll', () => {
    toggleScrolled();
    toggleScrollTop();
    setActiveNav();
  }, { passive: true });
})();
