// Animation du menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Gestion des dropdowns sur mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Animation de la navbar au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialisation du slider Hero
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // Animations GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation des sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });
    
    // Animation des cartes de catégories
    gsap.utils.toArray('.category-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
        });
    });
    
    // Animation des produits
    gsap.utils.toArray('.product-card').forEach((product, i) => {
        gsap.from(product, {
            scrollTrigger: {
                trigger: product,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
        });
    });
    
    // Animation des cartes de blog
    gsap.utils.toArray('.blog-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
        });
    });
    
    // Compteur panier (exemple)
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    let cartItems = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Animation du bouton
            gsap.to(button, {
                backgroundColor: '#2ecc71',
                duration: 0.3,
                onComplete: function() {
                    gsap.to(button, {
                        backgroundColor: '#e74c3c',
                        duration: 0.3,
                        delay: 0.5
                    });
                }
            });
            
            // Animation de l'icône panier
            gsap.to('.cart-icon', {
                y: -10,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
        });
    });
});