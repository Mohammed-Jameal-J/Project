  document.addEventListener('DOMContentLoaded', () => {
            const menuItems = document.querySelectorAll('.software_menu-item');
            const pageContents = document.querySelectorAll('.software_page-content');

            // Function to switch pages
            function switchPage(pageId) {
                // Deactivate all page content
                pageContents.forEach(content => {
                    content.classList.remove('software_active');
                });
                // Activate the selected page content
                const activePage = document.getElementById(pageId);
                if (activePage) {
                    activePage.classList.add('software_active');
                }

                // Update active menu item style
                menuItems.forEach(item => {
                    item.classList.remove('software_active');
                    if (item.getAttribute('data-page') === pageId) {
                        item.classList.add('software_active');
                    }
                });
            }

            // Add click listeners to menu items
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    const pageId = item.getAttribute('data-page');
                    switchPage(pageId);
                });
            });

            // Set the 'upload' page as active by default on load
            switchPage('dashboard');
        });