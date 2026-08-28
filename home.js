/* ── HERO INIT ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', animateHero);

/* ── HERO TEXT REVEAL ──────────────────────── */
function animateHero() {
    const items = [
        { id: 'heroEyebrow', delay: 0 },
        { id: 'heroTitle',   delay: 180 },
        { id: 'heroSub',     delay: 420 },
        { id: 'heroCta',     delay: 620 },
        { id: 'scrollHint',  delay: 900 },
    ];
    items.forEach(({ id, delay }) => {
        const el = document.getElementById(id);
        if (!el) return;
        setTimeout(() => {
            el.style.transition = 'opacity .9s ease, transform .9s ease';
            el.style.opacity    = '1';
            el.style.transform  = 'translateY(0)';
        }, delay);
    });
}

/* ── FILM FRAME COUNTER ────────────────────── */
let frameCount = 1;
const frameEl  = document.getElementById('frameNum');
if (frameEl) {
    setInterval(() => {
        frameCount++;
        frameEl.textContent = String(frameCount).padStart(4, '0');
    }, 1000 / 24);
}

/* ── STAT COUNTER ──────────────────────────── */
function countUp(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    let count    = 0;
    const step   = target / (1800 / 16);
    const timer  = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = Math.floor(count) + suffix;
        if (count >= target) clearInterval(timer);
    }, 16);
}

const statsSection = document.getElementById('stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(countUp);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

/* ── TESTIMONIAL TABS ──────────────────────── */
function openTab(evt, tabId) {
    document.querySelectorAll('.t-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.t-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

/* ── CRAFT PANELS ──────────────────────────── */
function toggleCraft(clickedPanel) {
    if (clickedPanel.classList.contains('active')) {
        clickedPanel.classList.remove('active');
        return;
    }
    document.querySelectorAll('.craft-panel').forEach(p => p.classList.remove('active'));
    clickedPanel.classList.add('active');
}
