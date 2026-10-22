(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector('.mix-button');
  const recipe = document.querySelector('.recipe');
  if (button && recipe) {
    button.hidden = false;
    button.addEventListener('click', () => {
      if (reduced.matches) return;
      recipe.classList.remove('mixing');
      void recipe.offsetWidth;
      recipe.classList.add('mixing');
    });
    recipe.addEventListener('animationend', () => recipe.classList.remove('mixing'));
  }
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('enter');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.12});
    document.querySelectorAll('.rule, .characters, .calm').forEach(item => observer.observe(item));
  }
})();
const trailer = document.querySelector('.video-shell');
trailer?.addEventListener('toggle', () => {
  const video = trailer.querySelector('video');
  if (trailer.open) video.play().catch(() => {});
  else video.pause();
});
