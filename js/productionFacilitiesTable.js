document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll(
        '.productionFacilities__table-item'
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.4,
        }
    );

    items.forEach((item) => {
        observer.observe(item);
    });
});
