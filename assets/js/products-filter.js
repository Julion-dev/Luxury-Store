// Filtrage des produits
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const categoryFilter = document.getElementById('category');
    const brandFilter = document.getElementById('brand');
    const priceFilter = document.getElementById('price');
    const sortFilter = document.getElementById('sort');
    const searchInput = document.querySelector('.search-box input');
    const productsCount = document.querySelector('.products-count');
    
    // Fonction de filtrage
    function filterProducts() {
        const categoryValue = categoryFilter.value;
        const brandValue = brandFilter.value;
        const priceValue = priceFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardBrand = card.getAttribute('data-brand');
            const cardPrice = card.getAttribute('data-price');
            const cardTitle = card.querySelector('.product-title').textContent.toLowerCase();
            
            // Vérifier chaque filtre
            const categoryMatch = categoryValue === 'all' || cardCategory === categoryValue;
            const brandMatch = brandValue === 'all' || cardBrand === brandValue;
            const priceMatch = priceValue === 'all' || cardPrice === priceValue;
            const searchMatch = cardTitle.includes(searchValue);
            
            if (categoryMatch && brandMatch && priceMatch && searchMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Mettre à jour le compteur
        productsCount.textContent = `${visibleCount} produits trouvés`;
        
        // Trier les produits
        sortProducts();
    }
    
    // Fonction de tri
    function sortProducts() {
        const sortValue = sortFilter.value;
        const productsContainer = document.querySelector('.products-grid');
        const products = Array.from(document.querySelectorAll('.product-card'));
        
        products.sort((a, b) => {
            switch(sortValue) {
                case 'newest':
                    // Ici vous pourriez utiliser un attribut data-date
                    return 0; // Pour l'exemple, pas de tri par date
                case 'price-low':
                    const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('€', '').replace(',', ''));
                    const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('€', '').replace(',', ''));
                    return priceA - priceB;
                case 'price-high':
                    const priceAHigh = parseFloat(a.querySelector('.product-price').textContent.replace('€', '').replace(',', ''));
                    const priceBHigh = parseFloat(b.querySelector('.product-price').textContent.replace('€', '').replace(',', ''));
                    return priceBHigh - priceAHigh;
                case 'rating':
                    const ratingA = parseFloat(a.querySelector('.product-rating').textContent.match(/\d+/)[0]);
                    const ratingB = parseFloat(b.querySelector('.product-rating').textContent.match(/\d+/)[0]);
                    return ratingB - ratingA;
                default: // 'popular'
                    return 0; // Pour l'exemple, pas de tri par popularité
            }
        });
        
        // Réorganiser les produits dans le DOM
        products.forEach(product => {
            if (product.style.display !== 'none') {
                productsContainer.appendChild(product);
            }
        });
    }
    
    // Écouteurs d'événements
    categoryFilter.addEventListener('change', filterProducts);
    brandFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);
    
    // Pagination
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
                this.classList.contains('active');{
                document.querySelector('.page-btn.active').classList.remove('active');
                this.classList.add('active');
                // Ici vous pourriez charger les produits de la page sélectionnée via AJAX
            }
        });
    });
    
    // Appliquer les filtres de l'URL
    function applyUrlFilters() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam) {
            categoryFilter.value = categoryParam;
            filterProducts();
        }
    }
    
    applyUrlFilters();
});