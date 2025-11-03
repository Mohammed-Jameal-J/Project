 // Menu navigation
        const menuLinks = document.querySelectorAll('.profile_menu-link');
        const sections = document.querySelectorAll('.profile_section');

        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                
                // Remove active class from all menu links
                menuLinks.forEach(l => l.classList.remove('profile_active'));
                
                // Add active class to clicked link
                this.classList.add('profile_active');
                
                // Hide all sections
                sections.forEach(s => s.classList.remove('profile_active'));
                
                // Show selected section
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('profile_active');
                }
            });
        });

        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        let isDarkMode = false;

        themeToggle.addEventListener('click', function() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('profile_dark-mode');
            
            if (isDarkMode) {
                this.innerHTML = '<i class="fas fa-sun"></i><span>Switch to Light</span>';
            } else {
                this.innerHTML = '<i class="fas fa-moon"></i><span>Switch to Dark</span>';
            }
        });

        // Country dropdown toggle
        const countryBtn = document.getElementById('countryBtn');
        const countryDropdown = document.getElementById('countryDropdown');

        countryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            countryDropdown.classList.toggle('profile_active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            countryDropdown.classList.remove('profile_active');
        });

        // Select country function
        function selectCountry(flag, country) {
            countryBtn.innerHTML = `${flag} <span>${country}</span> <i class="fas fa-chevron-down"></i>`;
            countryDropdown.classList.remove('profile_active');
        }

        // Newsletter form submission
        document.querySelector('.profile_newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
        });