   function startCountdown(duration, display) {
    let timer = duration;
    let hours, minutes, seconds;

    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('countdown-hr').textContent = hours;
        document.getElementById('countdown-min').textContent = minutes;
        document.getElementById('countdown-sec').textContent = seconds;

        if (--timer < 0) {
            timer = duration; // Loop the countdown (or stop it here if preferred)
        }
    }, 1000);
}

// Initial duration (10 hours, 12 minutes, 9 seconds)
// 10 * 3600 + 12 * 60 + 9 = 36729 seconds
const initialDuration = 36729; 


// --- Slider Logic (Same as before, adjusted for new card size/gap) ---
document.addEventListener('DOMContentLoaded', () => {
    // Start the countdown when the page loads
    startCountdown(initialDuration, null); 

    const slider = document.getElementById('deals-slider');
    const prevBtn = document.getElementById('daily-deals-prev');
    const nextBtn = document.getElementById('daily-deals-next');

    const getScrollAmount = () => {
        const firstCard = slider.querySelector('.product-card');
        if (!firstCard) return 0;
        
        // Get the computed gap from CSS
        const style = window.getComputedStyle(slider);
        const gap = parseFloat(style.gap) || 20;

        return firstCard.offsetWidth + gap;
    };

    const scrollSlider = (direction) => {
        const scrollAmount = getScrollAmount();
        
        if (direction === 'prev') {
            slider.scrollLeft -= scrollAmount;
        } else if (direction === 'next') {
            slider.scrollLeft += scrollAmount;
        }
    };

    // Attach event listeners
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollSlider('prev');
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollSlider('next');
    });
});
        // --- JAVASCRIPT FOR INTERACTIVITY ---
        const body = document.body;
        const hamburgerButton = document.getElementById('openDrawer');
        const navBarWrapper = document.querySelector('.nav-bar-wrapper');
        const moreButton = document.getElementById('toggleMore');
        const desktopDropdownContent = document.getElementById('moreLinks');

        // 1. Mobile Hamburger Menu Toggle
        if (hamburgerButton) {
            hamburgerButton.addEventListener('click', () => {
                // Toggle the 'mobile-open' class on the BODY for full-screen control
                body.classList.toggle('mobile-open');

                const isExpanded = body.classList.contains('mobile-open');
                hamburgerButton.setAttribute('aria-expanded', isExpanded);

                // Close desktop 'More' dropdown if open
                if (moreButton) {
                    moreButton.setAttribute('aria-expanded', 'false');
                }
            });
        }


        // 2. Desktop "More" Dropdown Toggle (Remains the same)
        if (moreButton && desktopDropdownContent) {
            moreButton.addEventListener('click', (event) => {
                event.stopPropagation();

                const isExpanded = moreButton.getAttribute('aria-expanded') === 'true' || false;
                moreButton.setAttribute('aria-expanded', !isExpanded);

                // Close mobile drawer if open when toggling desktop dropdown
                if (body.classList.contains('mobile-open')) {
                     body.classList.remove('mobile-open');
                     hamburgerButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Close dropdown if user clicks outside of it
            document.addEventListener('click', (event) => {
                const isClickInsideDropdown = event.target.closest('.nav-more-dropdown');
                
                // Do not close if clicking inside the mobile drawer
                const isClickInsideMobileMenu = event.target.closest('.mobile-menu-content');

                if (!isClickInsideDropdown && !isClickInsideMobileMenu) {
                    moreButton.setAttribute('aria-expanded', 'false');
                }
            });
        }

        