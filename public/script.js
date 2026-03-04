document.addEventListener('DOMContentLoaded', () => {
    // Top banner spacing management
    const navbar = document.querySelector('.navbar');
    const topBanner = document.querySelector('.top-banner');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(253, 251, 247, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
    // FAQ Accordion Toggle
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;

            // Close all other open items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle the clicked item
            currentItem.classList.toggle('active');
        });
    });

    // Apple-style Hero Scroll Animation (Parallax & Scale)
    const heroContent = document.querySelector('.hero-content');
    const heroImageWrapper = document.querySelector('.header-image-wrapper');
    const softShape = document.querySelector('.soft-shape');

    if (heroContent || heroImageWrapper) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;

            // Performance: Only animate if we are vaguely near the top or on desktop
            if (scrolled > window.innerHeight * 1.5 || window.innerWidth <= 968) {
                // Reset transforms if resized to mobile
                if (window.innerWidth <= 968) {
                    if (heroContent) {
                        heroContent.style.opacity = 1;
                        heroContent.style.transform = 'none';
                    }
                    if (heroImageWrapper) {
                        heroImageWrapper.style.transform = 'none';
                    }
                    if (softShape) {
                        softShape.style.transform = 'none';
                    }
                }
                return;
            }

            // 1. Text fading and moving down slower than scrolling
            if (heroContent) {
                // Fade out text gradually over the first 400px of scroll
                const opacity = Math.max(0, 1 - (scrolled / 400));
                // Move text down at 40% speed of the scroll (parallax)
                const yOffset = scrolled * 0.4;

                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(${yOffset}px)`;
            }

            // 2. Image Wrapper subtly scaling down and moving
            if (heroImageWrapper) {
                // Scale down slightly (to 85% min) for a shrink effect
                const scale = Math.max(0.85, 1 - (scrolled / 2000));
                // Move image down at 20% speed of the scroll
                const imgYOffset = scrolled * 0.2;

                heroImageWrapper.style.transform = `translateY(${imgYOffset}px) scale(${scale})`;

                // Soft Background Shape scaling and shifting
                if (softShape) {
                    // Shape scales up slightly and moves downward faster
                    const shapeScale = 1 + (scrolled / 1500);
                    const shapeYOffset = scrolled * 0.5;
                    softShape.style.transform = `translateY(${shapeYOffset}px) scale(${shapeScale})`;
                }
            }
        });
    }
});
