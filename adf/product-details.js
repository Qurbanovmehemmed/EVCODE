// localStorage-dan məhsul məlumatlarını oxumaq

const productId = localStorage.getItem('productId');
const productDetails = JSON.parse(localStorage.getItem('productDetails'));

// Məhsul tapılarsa, detallarını göstərmək
if (productId && productDetails) {
    document.getElementById('product-details').innerHTML = `
        <img src="${productDetails.imageUrl}" alt="${productDetails.name}" />
        <div class="product-info">
            <h2>${productDetails.name}</h2>
            <p>${productDetails.description}</p>
            <p class="price">${productDetails.price}</p>
            <button class="add-to-cart" onclick="addToCart(${productId})">Add to Cart</button>
        </div>
    `;
} else {
    document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
}

// "Add to Cart" funksiyası
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Var olan cart məlumatlarını oxuyuruq

    // Məhsul məlumatını cart-a əlavə etmək
    cart.push(productId);

    // Yenilənmiş cart məlumatını localStorage-a yazırıq
    localStorage.setItem('cart', JSON.stringify(cart));

    // İstifadəçiyə xəbərdarlıq mesajı
    alert('Product added to cart!');
}

