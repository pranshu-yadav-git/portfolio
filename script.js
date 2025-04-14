document.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    const backToTopBtn = document.querySelector(".footer-btn-backToTop");

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    const devSiteBtn = document.getElementById("devSiteBtn");
    if (devSiteBtn) {
        devSiteBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const password = prompt("Enter the password to access the Dev Site:");

            if (password === "030210") {
                window.location.href = "index - beta.html";
            } else {
                alert("Incorrect password. Access denied.");
            }
        });
    }
});
