(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = '2026';

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const setActive = () => {
    let current = '';
    const offset = 120;
    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('load', setActive);
  setActive();

  // Subtle reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const reveal = () => {
    const trigger = window.innerHeight * 0.9;
    revealEls.forEach((el) => {
      if (el.getBoundingClientRect().top < trigger) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal, { passive: true });
  window.addEventListener('load', reveal);
  reveal();

  // Gentle terminal typing effect (non-blocking, runs once when visible)
  const term = document.querySelector('[data-terminal-typing]');
  if (term) {
    const text = term.getAttribute('data-terminal-typing') || '';
    if (text) {
      term.textContent = '';
      let i = 0;
      let started = false;
      const type = () => {
        if (i < text.length) {
          term.textContent += text.charAt(i);
          i += 1;
          setTimeout(type, 14);
        }
      };
      const tryStart = () => {
        if (started) return;
        const rect = term.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          started = true;
          type();
        }
      };
      window.addEventListener('scroll', tryStart, { passive: true });
      window.addEventListener('load', tryStart);
      tryStart();
    }
  }
})();
