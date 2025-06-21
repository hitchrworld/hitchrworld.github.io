document.addEventListener('DOMContentLoaded', function() {
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    let currentTestimonial = 0;
    let testimonialInterval;
    let isUserInteracting = false;

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

    // Function to show next testimonial (for auto-advance)
    function nextTestimonial() {
        if (isUserInteracting) return; // Don't auto-advance if user is interacting
        
        let next = currentTestimonial + 1;
        if (next >= testimonialSlides.length) {
            next = 0;
        }
        showTestimonial(next);
    }

    // Function to manually advance to next testimonial
    function manualNextTestimonial() {
        let next = currentTestimonial + 1;
        if (next >= testimonialSlides.length) {
            next = 0;
        }
        showTestimonial(next);
    }

    // Function to show previous testimonial
    function prevTestimonial() {
        let prev = currentTestimonial - 1;
        if (prev < 0) {
            prev = testimonialSlides.length - 1;
        }
        showTestimonial(prev);
    }

    // Add click event listeners to dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isUserInteracting = true;
            showTestimonial(index);
            resetInterval();
            // Resume auto-advance after 10 seconds of no interaction
            setTimeout(() => {
                isUserInteracting = false;
            }, 10000);
        });
    });

    // Add click event listeners to navigation arrows
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            isUserInteracting = true;
            prevTestimonial();
            resetInterval();
            // Resume auto-advance after 10 seconds of no interaction
            setTimeout(() => {
                isUserInteracting = false;
            }, 10000);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            isUserInteracting = true;
            manualNextTestimonial(); // Use the manual function instead
            resetInterval();
            // Resume auto-advance after 10 seconds of no interaction
            setTimeout(() => {
                isUserInteracting = false;
            }, 10000);
        });
    } else {
        console.error('Next button not found!');
    }

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
        isUserInteracting = true;
        clearInterval(testimonialInterval);
    });

    testimonialCarousel.addEventListener('mouseleave', () => {
        isUserInteracting = false;
        resetInterval();
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            isUserInteracting = true;
            prevTestimonial();
            resetInterval();
            setTimeout(() => {
                isUserInteracting = false;
            }, 10000);
        } else if (e.key === 'ArrowRight') {
            isUserInteracting = true;
            nextTestimonial();
            resetInterval();
            setTimeout(() => {
                isUserInteracting = false;
            }, 10000);
        }
    });
}); 