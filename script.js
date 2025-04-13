// Add animation delay to grid items
document.addEventListener('DOMContentLoaded', () => {
    // Animate tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    // Animate service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });
    const backToTopBtn = document.querySelector(".footer-btn-backToTop");

    //Back to top
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});