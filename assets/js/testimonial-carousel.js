document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Remove active class from all testimonials and dots
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current testimonial and dot
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }

    // Function to show next testimonial
    function nextTestimonial() {
        let next = currentTestimonial + 1;
        if (next >= testimonialSlides.length) {
            next = 0;
        }
        showTestimonial(next);
    }

    // Add click event listeners to dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            resetInterval();
        });
    });

    // Function to reset the interval
    function resetInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(nextTestimonial, 6000); // Change testimonial every 6 seconds
    }

    // Start the testimonial carousel
    resetInterval();

    // Pause carousel when hovering over testimonials
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    testimonialCarousel.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });

    testimonialCarousel.addEventListener('mouseleave', () => {
        resetInterval();
    });
}); 