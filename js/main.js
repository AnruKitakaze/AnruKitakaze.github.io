// Initialize all MDC components
document.addEventListener('DOMContentLoaded', () => {
    // Initialize buttons
    const buttons = document.querySelectorAll('.mdc-button');
    buttons.forEach(button => new mdc.ripple.MDCRipple(button));

    // Initialize chips
    const chips = document.querySelectorAll('.mdc-chip');
    chips.forEach(chip => new mdc.chips.MDCChip(chip));

    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Add visible class for fade-in animation
    document.querySelector('.hero').classList.add('visible');
}); 