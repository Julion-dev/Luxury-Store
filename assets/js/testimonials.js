// Témoignages et notation
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation du slider Swiper
    const testimonialsSwiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
    
    // Système de notation
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('review-rating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
        
        star.addEventListener('mouseover', function() {
            const hoverRating = parseInt(this.getAttribute('data-rating'));
            
            stars.forEach((s, index) => {
                if (index < hoverRating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach(s => {
                s.classList.remove('hover');
            });
        });
    });
    
    // Validation du formulaire d'avis
    const reviewForm = document.querySelector('.review-form');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Vérifier la note
            if (ratingInput.value === '0') {
                alert('Veuillez attribuer une note en cliquant sur les étoiles');
                return;
            }
            
            // Ici vous pourriez envoyer les données du formulaire
            alert('Merci pour votre avis ! Il sera publié après modération.');
            reviewForm.reset();
            
            // Réinitialiser les étoiles
            stars.forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
            });
            ratingInput.value = '0';
        });
    }
    
    // Animation des statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent.replace('%', '').replace('/5', ''));
        let current = 0;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            
            if (number.textContent.includes('%')) {
                number.textContent = Math.round(current) + '%';
            } else if (number.textContent.includes('/')) {
                number.textContent = current.toFixed(1) + '/5';
            } else {
                number.textContent = Math.round(current);
            }
        }, 30);
    });
});