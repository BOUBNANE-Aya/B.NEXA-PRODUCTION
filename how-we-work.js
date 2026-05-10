// Concept map scroll-draw line + node activation
(function () {
  const lineFill = document.getElementById('scrollDrawLine');
  const nodes    = document.querySelectorAll('.concept-node');
  if (!lineFill) return;

  function update() {
    const wrapper = document.querySelector('.concept-wrapper');
    if (!wrapper) return;

    const rect      = wrapper.getBoundingClientRect();
    const viewH     = window.innerHeight;
    const progress  = Math.min(Math.max((viewH - rect.top) / (rect.height + viewH), 0), 1);
    lineFill.style.height = (progress * 100) + '%';

    nodes.forEach(node => {
      const r = node.getBoundingClientRect();
      if (r.top < viewH * 0.78) node.classList.add('active-node');
      else                       node.classList.remove('active-node');
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
