const header = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menu-btn]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const heroSlides = document.querySelectorAll('[data-hero-slide]');
const revealEls = document.querySelectorAll('[data-reveal]');

const setMenuOpen = (isOpen) => {
    mobileNav?.classList.toggle('is-open', isOpen);
    header?.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('is-nav-open', isOpen);
    menuBtn?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuBtn?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
};

const onScroll = () => {
    if (!header) {
        return;
    }

    const forceScrolled = header.dataset.forceScrolled === 'true';
    header.classList.toggle('is-scrolled', forceScrolled || window.scrollY > 16);
};

menuBtn?.addEventListener('click', () => {
    const willOpen = !mobileNav?.classList.contains('is-open');
    setMenuOpen(willOpen);
});

mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuOpen(false);
    }
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        setMenuOpen(false);
    }
});

if (heroSlides.length > 1) {
    let active = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
        setInterval(() => {
            heroSlides[active].classList.remove('is-active');
            active = (active + 1) % heroSlides.length;
            heroSlides[active].classList.add('is-active');
        }, 5500);
    }
}

if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
    );

    revealEls.forEach((el) => observer.observe(el));
} else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const galleryFilters = document.querySelector('[data-gallery-filters]');
const galleryItems = document.querySelectorAll('[data-gallery-grid] [data-category]');

if (galleryFilters && galleryItems.length) {
    galleryFilters.querySelectorAll('[data-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            galleryFilters.querySelectorAll('[data-filter]').forEach((item) => {
                item.classList.remove('border-vermillion', 'bg-vermillion', 'text-white');
                item.classList.add('border-gold/30', 'text-gold-soft');
            });

            button.classList.add('border-vermillion', 'bg-vermillion', 'text-white');
            button.classList.remove('border-gold/30', 'text-gold-soft');

            galleryItems.forEach((item) => {
                const match = filter === 'all' || item.getAttribute('data-category') === filter;
                item.classList.toggle('hidden', !match);
            });
        });
    });
}

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = lightbox?.querySelector('[data-lightbox-image]');
const lightboxCaption = lightbox?.querySelector('[data-lightbox-caption]');
const lightboxPrev = lightbox?.querySelector('[data-lightbox-prev]');
const lightboxNext = lightbox?.querySelector('[data-lightbox-next]');
const lightboxTriggers = [...document.querySelectorAll('[data-lightbox-trigger]')];

let lightboxIndex = 0;
let lightboxGroup = lightboxTriggers;

const getVisibleTriggers = (groupRoot) => {
    const scope = groupRoot
        ? [...groupRoot.querySelectorAll('[data-lightbox-trigger]')]
        : lightboxTriggers;

    return scope.filter((item) => !item.classList.contains('hidden') && item.offsetParent !== null);
};

const renderLightbox = () => {
    if (!lightbox || !lightboxImage || !lightboxGroup.length) {
        return;
    }

    const active = lightboxGroup[lightboxIndex];
    const src = active?.getAttribute('data-lightbox-src') || '';
    const alt = active?.getAttribute('data-lightbox-alt') || '';

    lightboxImage.src = src;
    lightboxImage.alt = alt;

    if (lightboxCaption) {
        lightboxCaption.textContent = alt;
        lightboxCaption.hidden = !alt;
    }

    const atStart = lightboxIndex <= 0;
    const atEnd = lightboxIndex >= lightboxGroup.length - 1;

    lightboxPrev?.toggleAttribute('disabled', atStart);
    lightboxNext?.toggleAttribute('disabled', atEnd);
};

const openLightbox = (trigger) => {
    if (!lightbox || !trigger) {
        return;
    }

    const groupRoot = trigger.closest('[data-lightbox-gallery]');
    lightboxGroup = getVisibleTriggers(groupRoot);
    lightboxIndex = Math.max(0, lightboxGroup.indexOf(trigger));

    renderLightbox();
    document.body.classList.add('is-lightbox-open');

    if (typeof lightbox.showModal === 'function') {
        lightbox.showModal();
    } else {
        lightbox.setAttribute('open', '');
    }
};

const closeLightbox = () => {
    if (!lightbox) {
        return;
    }

    if (typeof lightbox.close === 'function' && lightbox.open) {
        lightbox.close();
    } else {
        lightbox.removeAttribute('open');
    }

    document.body.classList.remove('is-lightbox-open');

    if (lightboxImage) {
        lightboxImage.removeAttribute('src');
    }
};

const stepLightbox = (direction) => {
    const nextIndex = lightboxIndex + direction;

    if (nextIndex < 0 || nextIndex >= lightboxGroup.length) {
        return;
    }

    lightboxIndex = nextIndex;
    renderLightbox();
};

lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openLightbox(trigger));
});

lightbox?.querySelectorAll('[data-lightbox-close]').forEach((el) => {
    el.addEventListener('click', closeLightbox);
});

lightboxPrev?.addEventListener('click', () => stepLightbox(-1));
lightboxNext?.addEventListener('click', () => stepLightbox(1));

lightbox?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeLightbox();
});

window.addEventListener('keydown', (event) => {
    if (!lightbox?.open) {
        return;
    }

    if (event.key === 'Escape') {
        closeLightbox();
    }

    if (event.key === 'ArrowLeft') {
        stepLightbox(-1);
    }

    if (event.key === 'ArrowRight') {
        stepLightbox(1);
    }
});
