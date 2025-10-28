document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const viewAllLink = document.querySelector('.view-all');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // --- Tab Icon Configuration ---
    const tabConfigs = [
        { tab: 'featured', iconClass: 'bx-star', text: 'Featured Products' },
        { tab: 'bestselling', iconClass: 'bxs-hot', text: 'Best Selling' },
        { tab: 'latest', iconClass: 'bx-time', text: 'Latest Products' }
    ];
    const viewAllIconClass = 'bx-right-arrow-alt';

    // Function to set up the tab buttons with text AND an icon wrapper
    const setupTabs = () => {
        tabConfigs.forEach(config => {
            const button = document.querySelector(`[data-tab="${config.tab}"]`);
            if (button) {
                // *** CRITICAL FIX: Inject both icon wrapper AND text so CSS can toggle them ***
                button.innerHTML = `
                    <span class="tab-icon-wrapper"><i class="bx ${config.iconClass}"></i></span>
                    <span class="tab-text">${config.text}</span>
                `;
            }
        });
        
        // Setup View All button
        if (viewAllLink) {
            viewAllLink.innerHTML = `
                <span class="tab-text">View All</span>
                <span class="tab-icon-wrapper"><i class="bx ${viewAllIconClass}"></i></span>
            `;
        }
    };
    
    // Function to handle active state style (remains mostly the same)
    const setActiveTabStyle = (targetTab) => {
        tabs.forEach(item => {
            item.classList.remove('active');
        });
        
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    };
    
    // --- Carousel Logic Constants ---
    const TOTAL_PRODUCTS = 12; // Total number of products used in the data set
    let currentTabIndex = 'featured'; 
    let currentSlide = 0; 

    // Function to determine how many products fit in the current view (used for slide math)
    const getProductsPerView = () => {
        const width = window.innerWidth;
        if (width <= 480) {
            return 2; // 2 per view
        } else if (width <= 768) {
            return 4; // 4 per view
        } else {
            return 6; // 6 per view (Desktop)
        }
    };

    // --- Product Data ---
    const allProducts = { /* ... (Your product data payload goes here) ... */ 
        featured: [ /* ... (Product data from the image/previous context) ... */ 
            { id: 1, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760975011/products/k7rjmsueam76u2dm8oli.png", title: "Genuine Luxury Golden Masquerade Pa...", price: "23,040.00", status: "New", options: [] },
            { id: 2, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760955400/products/rqlw6wca1lsnsjlxgsbm.png", title: "Genuinel  12 Pack Vibrant Tinsel...", price: "16,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] },
            { id: 3, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760974254/products/z92oisn7bvuxf5scksqh.png", title: "Genuinel  12 Packs Vibrant Veneti...", price: "14,720.00", status: "New", options: [{ type: 'color', value: 'Blue' }, { type: 'color', value: 'Green' }, { type: 'color', value: 'Black' }, { type: 'text', value: '12, 14, 16' }] },
            { id: 4, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760981627/products/o6p6uschak4cfxubedar.jpg", title: "Genuinel  Super Inflatable Gorilla...", price: "1,088,000.00", status: "New", options: [{ type: 'color', value: 'Grey' }, { type: 'text', value: "3', 5', 5.5', 6'" }] },
            { id: 5, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1761159435/products/jka7ss6ag86t0cqmxoh0.png", title: "Avengers: Endgame Iron Man Action F...", price: "56,000.00", status: "New", options: [{ type: 'check' }] },
            { id: 6, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759250698/products/byksi6qmwfkbjh1a9ibn.jpg", title: "Crop top and baggy combi pant", price: "39,680.00", status: "Almost Done", options: [{ type: 'text', value: 'New' }, { type: 'color', value: 'Blue' }] },
            { id: 7, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760995885/products/vgcoob9n4g4dfrmjsc0y.png", title: "Genuinel 12 Pack of Black Phantom P...", price: "19,968.00", status: "New", options: [] },
            { id: 8, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759248372/products/q5eqdycacibglyxhnqq9.jpg", title: "Unisex Puffy Jacket", price: "40,320.00", oldPrice: "45,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] },
            { id: 9, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758899464/products/yzbhrhsifieiugrl1vko.jpg", title: "EWA :Embroidered kaftan", price: "51,200.00", status: "Original", options: [{ type: 'color', value: 'Blue' }, { type: 'color', value: 'Green' }, { type: 'color', value: 'Black' }, { type: 'text', value: '12, 14, 16' }] },
            { id: 10, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758655423/products/iopu0x2mupkch0mkril4.jpg", title: "L'RIYU \"Velour Crest\" Embroidered L...", price: "89,600.00", status: "New", options: [{ type: 'color', value: 'Grey' }, { type: 'text', value: "3', 5', 5.5', 6'" }] },
            { id: 11, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759243272/products/iyve5thbcmshyrgkorrx.jpg", title: "IPHONE 13", price: "563,200.00", status: "Almost Gone", options: [{ type: 'text', value: 'New' }, { type: 'color', value: 'Black' }] },
            { id: 12, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760958946/products/cy48mynprwt87lkihdqk.png", title: "12 Vibrant Feather Fring Masque...", price: "19,840.00", status: "New", options: [] },
        ],
        bestselling: [ /* ... (Product data for best selling) ... */ 
            { id: 13, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758846456/products/msfjiwycyldpzjavucza.jpg", title: "Bolu boubou kaftan", price: "57,600.00", status: "New", options: [{ type: 'color', value: 'White' }, { type: 'text', value: '12, 14, 16, 18' }] },
            { id: 14, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758709742/products/chdevdn6wl7n8axgym0i.jpg", title: "Gberni Collection: Imperial Embellis...", price: "51,200.00", status: "New", options: [{ type: 'color', value: 'Red' }] },
            { id: 15, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1750489027/products/qyhg18ccwh7fdhi1x8s1.jpg", title: "AeroStride Performance Trainers", price: "35,840.00", status: "New", options: [{ type: 'color', value: 'Multi' }, { type: 'text', value: '40, 41, 42, 43' }] },
            { id: 16, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758871782/products/cp86vgtyjthkxceqkpfu.jpg", title: "AeroStride Performance Trainers", price: "35,840.00", status: "New", options: [{ type: 'color', value: 'Multi' }, { type: 'text', value: '40, 41, 42, 43' }] },
            { id: 17, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758873628/products/srzps6fxhtglqure8bd3.jpg", title: "Language Translator Device", price: "38,400.00", status: "New", options: [{ type: 'color', value: 'Black' }, { type: 'color', value: 'Grey' }] },
            { id: 18, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1761139696/products/dv3kd7s42eroz3tms0ba.jpg", title: "KEDI REVIVE CAPSULE", price: "52,480.00", status: "New", options: [{ type: 'color', value: 'White' }, { type: 'color', value: 'Green' }] },
            { id: 19, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758900079/products/rnamntsfswsughyf5crs.jpg", title: "Product Title 19", price: "25,000.00", status: "New", options: [] },
            { id: 20, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1761305714/products/d8ltuwxlk4j2mhigjto4.jpg", title: "Product Title 20", price: "30,000.00", status: "New", options: [] },
            { id: 21, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758881554/products/vnyeyh7e6a0ivbkvapob.jpg", title: "Product Title 21", price: "40,000.00", status: "New", options: [] },
            { id: 22, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758888068/products/v0plqcv19xjw5vxij3ye.jpg", title: "Product Title 22", price: "15,000.00", status: "New", options: [] },
            { id: 23, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1756745142/products/m2fjv9n2szvabwkimqrv.png", title: "Product Title 23", price: "60,000.00", status: "New", options: [] },
            { id: 24, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758891789/products/u3fudkob1bijqy1zzeys.jpg", title: "Product Title 24", price: "75,000.00", status: "New", options: [] },
        ],
        latest: [ /* ... (Product data for latest) ... */ 
            { id: 25, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760996746/products/bmaico1uv5qrkafg1y44.png", title: "Product Title 25 (Latest)", price: "18,000.00", status: "New", options: [] },
            { id: 26, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758721562/products/duxzrgyppaidltjwhget.jpg", title: "Product Title 26 (Latest)", price: "22,000.00", status: "New", options: [] },
            { id: 27, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758651702/products/lzzlsjxmn5red1r52xg8.jpg", title: "Product Title 27 (Latest)", price: "30,000.00", status: "New", options: [] },
            { id: 28, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758650199/products/j1ychuqebch9kh2ewqth.jpg", title: "Product Title 28 (Latest)", price: "12,000.00", status: "New", options: [] },
            { id: 29, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760975011/products/k7rjmsueam76u2dm8oli.png", title: "Product Title 29 (Latest)", price: "15,000.00", status: "New", options: [] },
            { id: 30, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760955400/products/rqlw6wca1lsnsjlxgsbm.png", title: "Product Title 30 (Latest)", price: "17,500.00", status: "New", options: [] },
            { id: 31, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760974254/products/z92oisn7bvuxf5scksqh.png", title: "Product Title 31 (Latest)", price: "16,200.00", status: "New", options: [] },
            { id: 32, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760981627/products/o6p6uschak4cfxubedar.jpg", title: "Product Title 32 (Latest)", price: "900,000.00", status: "New", options: [] },
            { id: 33, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1761159435/products/jka7ss6ag86t0cqmxoh0.png", title: "Product Title 33 (Latest)", price: "50,000.00", status: "New", options: [{ type: 'check' }] },
            { id: 34, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759250698/products/byksi6qmwfkbjh1a9ibn.jpg", title: "Product Title 34 (Latest)", price: "35,000.00", status: "Almost Done", options: [{ type: 'text', value: 'New' }, { type: 'color', value: 'Blue' }] },
            { id: 35, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760995885/products/vgcoob9n4g4dfrmjsc0y.png", title: "Product Title 35 (Latest)", price: "21,000.00", status: "New", options: [] },
            { id: 36, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759248372/products/q5eqdycacibglyxhnqq9.jpg", title: "Product Title 36 (Latest)", price: "42,000.00", oldPrice: "48,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] },
        ]
    };

    // Function to create the product card HTML (replicated from previous step)
    const createProductCard = (product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        let optionsHtml = '';
        if (product.options && product.options.length > 0) {
            optionsHtml = '<div class="options-row">';
            product.options.forEach(option => {
                if (option.type === 'color') {
                    // Assuming you have styles for color circles defined elsewhere or generic ones work
                    optionsHtml += `<div class="option"><span class="option-circle ${option.value.toLowerCase().replace(/ /g, '-')}"></span><span class="option-text">${option.value}</span></div>`;
                } else if (option.type === 'text') {
                    optionsHtml += `<div class="option"><span class="option-text">${option.value}</span></div>`;
                } else if (option.type === 'check') {
                    optionsHtml += `<div class="option"><span class="option-circle check-icon" style="background-color: var(--green-check); border-color: var(--green-check);">✓</span><span class="option-text">Available</span></div>`;
                }
            });
            optionsHtml += '</div>';
        }

        const statusIcon = product.status === "New" || product.status === "Original" ? '<i class="fas fa-check-circle green icon" style="color: var(--green-check);"></i>' : '<i class="fas fa-exclamation-circle red icon" style="color: var(--red-alert);"></i>';

        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.title}">
                <div class="heart-icon tabs_heart">0 <i class="far fa-heart"></i></div>
            </div>
            <div class="product-details">
                <h3>${product.title}</h3>
                <div class="product-status">
                    ${statusIcon}
                    <span>${product.status}</span>
                </div>
                ${optionsHtml}
                <p class="price">NGN ${product.price}</p>
            </div>
        `;
        return productCard;
    };
    
    // Function to render products (same as before)
    const renderProducts = (tabName) => {
        const currentTabProducts = allProducts[tabName];
        const activeTabPane = document.getElementById(tabName);
        const grid = activeTabPane.querySelector('.products-grid');
        grid.innerHTML = ''; 

        // IMPORTANT: For the slide math to work, we need to ensure the grid width is set correctly
        // based on the view size, or rely on the JS to manage the translateX percentage.
        // Since you want to avoid changing the card calculation style, we'll keep the JS math simple
        // and rely on the CSS flex basis calculation for card width.
        
        currentTabProducts.forEach(product => {
            grid.appendChild(createProductCard(product));
        });
        
        // Give a moment for DOM painting before updating carousel position
        setTimeout(updateCarouselPosition, 0); 
    };

    // Function to handle the horizontal movement and arrow state (Crucial for fixing gray bars)
    const updateCarouselPosition = () => {
        const grid = document.getElementById(currentTabIndex).querySelector('.products-grid');
        const perView = getProductsPerView();
        
        // Normalize currentSlide to the starting index of a slide set
        // This prevents partial slides from appearing when resizing
        currentSlide = Math.floor(currentSlide / perView) * perView;
        
        // Clamp the slide index so it doesn't go too far right
        currentSlide = Math.min(currentSlide, TOTAL_PRODUCTS - perView); 
        
        // Calculate the percentage shift: (Current Slide Index / Total Items) * 100%
        // Since the grid is 100% of the theoretical full width, we shift by the item index.
        // This relies on the CSS .product-card flex-basis correctly defining the width of one item.
        let transformValue = `translateX(-${(currentSlide / TOTAL_PRODUCTS) * 100 * (TOTAL_PRODUCTS / perView) }%)`;
        
        // A simpler, more common carousel translation based on slide index:
        // The grid contains all 12 items. We shift by the number of *views* we moved.
        // We need to move by the width of the items we passed.
        if (perView > 0) {
            transformValue = `translateX(-${(currentSlide / perView) * 100}%)`;
        } else {
            transformValue = `translateX(0%)`; // Avoid division by zero
        }


        grid.style.transform = transformValue;
        
        // Update arrow states
        leftArrow.disabled = currentSlide === 0;
        rightArrow.disabled = currentSlide >= (TOTAL_PRODUCTS - perView); 
    };

    // Tab switching logic (Updated to use new content structure for styling)
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            tabPanes.forEach(item => item.classList.remove('active'));

            const targetTab = tab.dataset.tab;
            document.getElementById(targetTab).classList.add('active');

            setActiveTabStyle(targetTab);
            
            currentTabIndex = targetTab;
            currentSlide = 0; // Reset slide index when switching tabs
            
            renderProducts(currentTabIndex);
        });
    });

    // Arrow navigation logic
    leftArrow.addEventListener('click', () => {
        const perView = getProductsPerView();
        if (currentSlide > 0) {
            currentSlide = Math.max(0, currentSlide - perView); 
            updateCarouselPosition();
        }
    });

    rightArrow.addEventListener('click', () => {
        const perView = getProductsPerView();
        if (currentSlide < (TOTAL_PRODUCTS - perView)) {
            currentSlide = Math.min(TOTAL_PRODUCTS - perView, currentSlide + perView); 
            updateCarouselPosition();
        }
    });

    // Initial setup
    setupTabs();
    setActiveTabStyle(currentTabIndex); 
    renderProducts(currentTabIndex);
    
    // Handle resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateCarouselPosition, 250);
    });
});