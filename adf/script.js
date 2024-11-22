// Product məlumatları
const products = {
    1: {
        name: 'Product 1',
        description: 'This is the detailed description for Product 1.',
        price: '$19.99',
        imageUrl: 'p1.png.webp'
    },
    2: {
        name: 'Product 2',
        description: 'This is the detailed description for Product 2.',
        price: '$29.99',
        imageUrl: 'p2.png.webp'
    },
    3: {
        name: 'Product 3',
        description: 'This is the detailed description for Product 3.',
        price: '$39.99',
        imageUrl: 'p3.png.webp'
    },
    4: {
        name: 'Product 4',
        description: 'This is the detailed description for Product 4.',
        price: '$49.99',
        imageUrl: 'p4.png.webp'
    }
};

// View Details funksiyası
function viewDetails(productId) {
    // localStorage-da məhsul məlumatlarını saxlamaq
    localStorage.setItem('productId', productId);
    localStorage.setItem('productDetails', JSON.stringify(products[productId]));
    
    // Məhsulun detallarına yönləndirmək
    window.location.href = "product-details.html";
}
