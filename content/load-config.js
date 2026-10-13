document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-config]").forEach(element => {
        const key = element.dataset.config;
        const value = siteConfig[key];

        if (value === undefined) return;

        if (element.hasAttribute("data-email-link")) {
            element.href = `mailto:${value}`;
        }

        element.textContent = value;
    });
});