document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.screen-slide');
    const indicators = document.querySelectorAll('.indicator');
    const captions = document.querySelectorAll('.screen-caption');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides, indicators, and captions
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        captions.forEach(caption => caption.classList.remove('active'));

        // Add active class to current slide, indicator, and caption
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        captions[index].classList.add('active');
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Add click event listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Function to reset the interval
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Start the slideshow
    resetInterval();

    // Pause slideshow when hovering over the phone frame
    const phoneFrame = document.querySelector('.phone-frame');
    phoneFrame.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    phoneFrame.addEventListener('mouseleave', () => {
        resetInterval();
    });
}); 