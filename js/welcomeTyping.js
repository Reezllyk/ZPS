function typeEffect(element, speed = 50) {
    const text = element.getAttribute('data-text');
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const h1 = document.querySelector('.welcome__title');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                typeEffect(h1);
                observer.unobserve(h1);
            }
        });
    },
    {
        threshold: 0.5,
    }
);

observer.observe(h1);
