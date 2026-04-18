document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle logic
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const menuContainer = document.getElementById("header-menu-container");

    if(mobileBtn && menuContainer) {
        mobileBtn.addEventListener("click", () => {
            mobileBtn.classList.toggle("open");
            menuContainer.classList.toggle("active");

            // Prevent body scroll when menu is open
            if(menuContainer.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });

        // Close menu on link click
        const navLinks = menuContainer.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileBtn.classList.remove("open");
                menuContainer.classList.remove("active");
                document.body.style.overflow = "auto";
            });
        });
    }

    // Scroll reveal animations for bento cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach((card, index) => {
        // Add a slight stagger effect based on index relative to sibling count
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        observer.observe(card);
    });
});