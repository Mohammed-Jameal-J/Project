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
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const moreDropdown = document.getElementById('moreDropdown');
        const dropdownContent = document.getElementById('dropdownContent');
        const mobileMoreToggle = document.getElementById('mobileMoreToggle');
        const mobileMoreSection = document.getElementById('mobileMoreSection');

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Desktop dropdown
        moreDropdown.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!moreDropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });

        // Mobile more toggle
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