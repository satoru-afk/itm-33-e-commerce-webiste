// Product data
const products = [
    {
        name: "FarmPro X1",
        imgUrl: "/public/products/1.jpeg",
        price: "$899",
        specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14\" Display"],
        tag: "Best Seller"
        
    },
    {
        name: "HarvestBook Air",
        imgUrl: "/public/products/2.jpeg",
        price: "$1,199",
        specs: ["Apple M1", "8GB RAM", "256GB SSD", "13.3\" Retina"],
        tag: "New"
    },
    {
        name: "CropTop Ultra",
        imgUrl: "/public/products/3.jpeg",
        price: "$1,499",
        specs: ["AMD Ryzen 7", "16GB RAM", "512GB SSD", "15.6\" 4K"],
        tag: "Premium"
    },
    {
        name: "Seedling Lite",
        imgUrl: "/public/products/4.jpeg",
        price: "$599",
        specs: ["Intel Core i3", "4GB RAM", "128GB SSD", "13.3\" HD"],
        tag: "Budget"
    },
    {
        name: "Orchard Pro",
        imgUrl: "/public/products/5.jpeg",
        price: "$1,299",
        specs: ["Intel Core i7", "16GB RAM", "1TB SSD", "16\" Touch"],
        tag: "Powerful"
    },
    {
        name: "BarnBook Pro",
        imgUrl: "/public/products/6.jpeg",
        price: "$1,799",
        specs: ["Apple M2", "16GB RAM", "512GB SSD", "14.2\" Liquid"],
        tag: "Flagship"
    }
];

// Load products
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('productGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
            <img src="${product.imgUrl}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <ul class="product-specs">
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
                <div class="product-price">${product.price}</div>
                <button class="btn" ><a href="/src/contect-us/index.html" style="text-decoration: none; color: white;">Contact Us</a></button>
            </div>
            ${product.tag ? `<div class="product-tag">${product.tag}</div>` : ''}
        `;
        
        productGrid.appendChild(productCard);
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thanks for subscribing to our digital farm newsletter!');
                emailInput.value = '';
            }
        });
    }
});
