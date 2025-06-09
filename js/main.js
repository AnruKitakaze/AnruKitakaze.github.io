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
}); 