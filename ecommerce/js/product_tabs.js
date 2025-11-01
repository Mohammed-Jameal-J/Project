 const allProducts = {
            featured: [
                { id: 1, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760975011/products/k7rjmsueam76u2dm8oli.png", title: "Genuine Luxury Golden Masquerade Pa...", price: "23,040.00", status: "New", options: [] },
                { id: 2, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760955400/products/rqlw6wca1lsnsjlxgsbm.png", title: "Genuinel 12 Pack Vibrant Tinsel...", price: "16,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] },
                { id: 3, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760974254/products/z92oisn7bvuxf5scksqh.png", title: "Genuinel 12 Packs Vibrant Veneti...", price: "14,720.00", status: "New", options: [{ type: 'color', value: 'Blue' }, { type: 'color', value: 'Green' }, { type: 'color', value: 'Black' }, { type: 'text', value: '12, 14, 16' }] },
                { id: 4, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760981627/products/o6p6uschak4cfxubedar.jpg", title: "Genuinel Super Inflatable Gorilla...", price: "1,088,000.00", status: "New", options: [{ type: 'color', value: 'Grey' }, { type: 'text', value: "3', 5', 5.5', 6'" }] },
                { id: 5, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1761159435/products/jka7ss6ag86t0cqmxoh0.png", title: "Avengers: Endgame Iron Man Action F...", price: "56,000.00", status: "New", options: [{ type: 'check' }] },
                { id: 6, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759250698/products/byksi6qmwfkbjh1a9ibn.jpg", title: "Crop top and baggy combi pant", price: "39,680.00", status: "Almost Done", options: [{ type: 'text', value: 'New' }, { type: 'color', value: 'Blue' }] },
                { id: 7, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760995885/products/vgcoob9n4g4dfrmjsc0y.png", title: "Genuinel 12 Pack of Black Phantom P...", price: "19,968.00", status: "New", options: [] },
                { id: 8, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759248372/products/q5eqdycacibglyxhnqq9.jpg", title: "Unisex Puffy Jacket", price: "40,320.00", oldPrice: "45,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] },
                { id: 9, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758899464/products/yzbhrhsifieiugrl1vko.jpg", title: "EWA :Embroidered kaftan", price: "51,200.00", status: "Original", options: [{ type: 'color', value: 'Blue' }, { type: 'color', value: 'Green' }, { type: 'color', value: 'Black' }, { type: 'text', value: '12, 14, 16' }] },
                { id: 10, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758655423/products/iopu0x2mupkch0mkril4.jpg", title: "L'RIYU \"Velour Crest\" Embroidered L...", price: "89,600.00", status: "New", options: [{ type: 'color', value: 'Grey' }, { type: 'text', value: "3', 5', 5.5', 6'" }] },
                { id: 11, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759243272/products/iyve5thbcmshyrgkorrx.jpg", title: "IPHONE 13", price: "563,200.00", status: "Almost Gone", options: [{ type: 'text', value: 'New' }, { type: 'color', value: 'Black' }] },
                { id: 12, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1760958946/products/cy48mynprwt87lkihdqk.png", title: "12 Vibrant Feather Fring Masque...", price: "19,840.00", status: "New", options: [] }
            ],
            bestselling: [
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
                { id: 24, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1758891789/products/u3fudkob1bijqy1zzeys.jpg", title: "Product Title 24", price: "75,000.00", status: "New", options: [] }
            ],
            latest: [
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
                { id: 36, image: "https://res.cloudinary.com/dbczfoqnc/image/upload/v1759248372/products/q5eqdycacibglyxhnqq9.jpg", title: "Product Title 36 (Latest)", price: "42,000.00", oldPrice: "48,000.00", status: "New", options: [{ type: 'text', value: 'Floral' }, { type: 'text', value: '40, 45, 48' }] }
            ]
        };

        function createProductCard(product) {
            let optionsHtml = '';
            if (product.options && product.options.length > 0) {
                optionsHtml = '<div class="options-row">';
                product.options.forEach(option => {
                    if (option.type === 'color') {
                        optionsHtml += `<div class="option"><span class="option-circle ${option.value.toLowerCase().replace(/ /g, '-')}"></span><span class="option-text">${option.value}</span></div>`;
                    } else if (option.type === 'text') {
                        optionsHtml += `<div class="option"><span class="option-text">${option.value}</span></div>`;
                    } else if (option.type === 'check') {
                        optionsHtml += `<div class="option"><span class="option-circle check-icon" style="background-color: var(--green-check); border-color: var(--green-check);">✓</span><span class="option-text">Available</span></div>`;
                    }
                });
                optionsHtml += '</div>';
            }

            const statusIcon = product.status === "New" || product.status === "Original" ? 
                '<i class="fas fa-check-circle" style="color: var(--green-check);"></i>' : 
                '<i class="fas fa-exclamation-circle" style="color: var(--red-alert);"></i>';

            const priceHtml = product.oldPrice ? 
                `<p class="price">NGN ${product.price} <span class="old-price">NGN ${product.oldPrice}</span></p>` : 
                `<p class="price">NGN ${product.price}</p>`;

            return `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.title}">
                        <div class="heart-icon">0 <i class="far fa-heart"></i></div>
                    </div>
                    <div class="product-details">
                        <h3>${product.title}</h3>
                        <div class="product-status">
                            ${statusIcon}
                            <span>${product.status}</span>
                        </div>
                        ${optionsHtml}
                        ${priceHtml}
                    </div>
                </div>
            `;
        }

        function renderProducts(category, containerId) {
            const container = document.getElementById(containerId);
            const products = allProducts[category];
            container.innerHTML = products.map(product => createProductCard(product)).join('');
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderProducts('featured', 'featured-products');
            renderProducts('bestselling', 'bestselling-products');
            renderProducts('latest', 'latest-products');
        });