// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    // Alternar entre modo claro y oscuro
    const toggleThemeBtn = document.querySelector("#toggleTheme");
    let isDarkMode = false;

    toggleThemeBtn.addEventListener("click", () => {
        document.documentElement.style.setProperty(
            "--primary-color",
            isDarkMode ? "#C7A700" : "#FFD700"
        );
        document.documentElement.style.setProperty(
            "--secondary-color",
            isDarkMode ? "#000000" : "#FFFFFF"
        );
        document.documentElement.style.setProperty(
            "--accent-color",
            isDarkMode ? "#4A4A4A" : "#B0B0B0"
        );
        document.body.style.backgroundColor = isDarkMode ? "#FFFFFF" : "#000000";
        isDarkMode = !isDarkMode;
    });

    // Animación al hacer scroll
    const elements = document.querySelectorAll(".image-item, .pricing-card");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        observer.observe(el);
    });

    // Efecto de ondas en botones
    const buttons = document.querySelectorAll("button, .cta-button");
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", (e) => {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 500);
        });
    });
});
