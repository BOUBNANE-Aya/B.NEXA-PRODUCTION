/* ── CUSTOM CURSOR ─────────────────────────── */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top  = mouseY + 'px';
    });

    (function animateRing() {
        ringX += (mouseX - ringX) * 0.13;
        ringY += (mouseY - ringY) * 0.13;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    })();

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .cinematic-card, .craft-panel, .t-btn')) {
            cursorDot.classList.add('expanded');
            cursorRing.classList.add('expanded');
        } else {
            cursorDot.classList.remove('expanded');
            cursorRing.classList.remove('expanded');
        }
    });
}

/* ── SCROLL EVENTS ─────────────────────────── */
const scrollProgressEl = document.getElementById('scrollProgress');
const mainNav          = document.getElementById('mainNav');
const backToTopBtn     = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    const scrollTop    = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollProgressEl) {
        scrollProgressEl.style.width = ((scrollTop / scrollHeight) * 100) + '%';
    }

    if (mainNav) {
        scrollTop > 60
            ? mainNav.classList.add('scrolled')
            : mainNav.classList.remove('scrolled');
    }

    if (backToTopBtn) {
        scrollTop > 300
            ? backToTopBtn.classList.add('show')
            : backToTopBtn.classList.remove('show');
    }
}, { passive: true });

/* ── BACK TO TOP ───────────────────────────── */
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ── MOBILE MENU ───────────────────────────── */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu    = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileMenuBtn.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-nav')) {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.classList.remove('open');
        }
    });
}

/* ── AOS ───────────────────────────────────── */
if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, offset: 80, duration: 900, easing: 'ease-out-cubic' });
}
