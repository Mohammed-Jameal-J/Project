  document.addEventListener('DOMContentLoaded', function() {
            const menuLinks = document.querySelectorAll('.profile_menu-link');
            const sections = document.querySelectorAll('.profile_section');
            const sidebar = document.querySelector('.profile_sidebar');
            const mainContent = document.querySelector('.profile_main-content');
            const mobileBackBtn = document.querySelector('.profile_mobile-back-btn');
            const desktopTabsInProfile = document.querySelector('#profile .profile_tabs');

            // Show/hide tabs based on screen size
            function handleTabsVisibility() {
                if (window.innerWidth > 768) {
                    desktopTabsInProfile.style.display = 'flex';
                } else {
                    desktopTabsInProfile.style.display = 'none';
                }
            }

            // Initial check
            handleTabsVisibility();

            // Check on resize
            window.addEventListener('resize', handleTabsVisibility);

            // Menu navigation
            menuLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Skip if it's a regular link (My Dashboard)
                    if (this.hasAttribute('href') && this.getAttribute('href') !== '#') {
                        return;
                    }

                    e.preventDefault();
                    const sectionId = this.getAttribute('data-section');
                    
                    if (!sectionId) return;

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

                    // Mobile: Show main content and hide sidebar
                    if (window.innerWidth <= 768) {
                        sidebar.style.display = 'none';
                        mainContent.classList.add('profile_mobile-show');
                        window.scrollTo(0, 0);
                    }
                });
            });

            // Mobile back button
            if (mobileBackBtn) {
                mobileBackBtn.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        sidebar.style.display = 'block';
                        mainContent.classList.remove('profile_mobile-show');
                        window.scrollTo(0, 0);
                    }
                });
            }

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    sidebar.style.display = 'block';
                    mainContent.classList.remove('profile_mobile-show');
                } else if (window.innerWidth <= 768 && !mainContent.classList.contains('profile_mobile-show')) {
                    sidebar.style.display = 'block';
                }
            });

            // Dark mode toggle
            const themeToggle = document.getElementById('themeToggle');
            let isDarkMode = false;

            if (themeToggle) {
                themeToggle.addEventListener('click', function() {
                    isDarkMode = !isDarkMode;
                    document.body.classList.toggle('profile_dark-mode');
                    
                    if (isDarkMode) {
                        this.innerHTML = '<i class="fas fa-sun"></i><span>Switch to Light</span>';
                    } else {
                        this.innerHTML = '<i class="fas fa-moon"></i><span>Switch to Dark</span>';
                    }
                });
            }

            // Newsletter form submission
            const newsletterForm = document.querySelector('.profile_newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for subscribing!');
                });
            }
        });