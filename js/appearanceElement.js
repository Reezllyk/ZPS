document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-animate]');

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
            threshold: 0.5, // Срабатывает, когда 10% элемента видно
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});
