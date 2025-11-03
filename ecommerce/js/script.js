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

        const hrElement = document.getElementById('countdown-hr');
        const minElement = document.getElementById('countdown-min');
        const secElement = document.getElementById('countdown-sec');

        if (hrElement) hrElement.textContent = hours;
        if (minElement) minElement.textContent = minutes;
        if (secElement) secElement.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Initial duration (10 hours, 12 minutes, 9 seconds)
const initialDuration = 36729;

// --- Slider Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Start the countdown only if countdown elements exist
    if (document.getElementById('countdown-hr')) {
        startCountdown(initialDuration, null);
    }

    const slider = document.getElementById('deals-slider');
    const prevBtn = document.getElementById('daily-deals-prev');
    const nextBtn = document.getElementById('daily-deals-next');

    if (slider && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const firstCard = slider.querySelector('.product-card');
            if (!firstCard) return 0;
            
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
    }

    // Mobile menu functionality
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const moreDropdown = document.getElementById('moreDropdown');
    const dropdownContent = document.getElementById('dropdownContent');
    const mobileMoreToggle = document.getElementById('mobileMoreToggle');
    const mobileMoreSection = document.getElementById('mobileMoreSection');

    // Mobile menu toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Desktop dropdown
    if (moreDropdown && dropdownContent) {
        moreDropdown.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!moreDropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Mobile more toggle
    if (mobileMoreToggle && mobileMoreSection) {
        mobileMoreToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (mobileMoreSection.style.display === 'none') {
                mobileMoreSection.style.display = 'block';
                mobileMoreToggle.textContent = 'More ▲';
            } else {
                mobileMoreSection.style.display = 'none';
                mobileMoreToggle.textContent = 'More ▼';
            }
        });
    }
});