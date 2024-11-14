document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const revealSection = function(entries, observer) {
        const [entry] = entries;
        
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });
});
