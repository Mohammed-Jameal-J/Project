 // Image gallery
        const productThumbs = document.querySelectorAll('.product_thumb_item');
        const productMainImg = document.getElementById('productMainImg');

        productThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                productThumbs.forEach(t => t.classList.remove('product_active'));
                this.classList.add('product_active');
                productMainImg.src = this.src;
            });
        });

       // Quantity controls implementation
        function productIncreaseQty() {
            const qtyEl = document.getElementById('productQtyValue');
            let qty = parseInt(qtyEl.textContent);
            if (qty < 100) { // Assuming max stock is 100
                qtyEl.textContent = qty + 1;
            }
        }

        function productDecreaseQty() {
            const qtyEl = document.getElementById('productQtyValue');
            let qty = parseInt(qtyEl.textContent);
            if (qty > 1) { // Min quantity is 1
                qtyEl.textContent = qty - 1;
            }
        }