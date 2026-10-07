// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Réinitialiser les messages d'erreur
            clearErrors();
            
            // Valider les champs
            const nameValid = validateField('name', 'Veuillez entrer votre nom complet');
            const emailValid = validateEmail('email', 'Veuillez entrer une adresse email valide');
            const subjectValid = validateField('subject', 'Veuillez sélectionner un sujet');
            const messageValid = validateField('message', 'Veuillez entrer votre message');
            
            if (nameValid && emailValid && subjectValid && messageValid) {
                // Ici vous pourriez envoyer le formulaire via AJAX
                // Pour l'exemple, nous simulons un envoi réussi
                showSuccessMessage();
                
                // Réinitialiser le formulaire
                contactForm.reset();
            }
        });
    }
    
    // Fonction de validation de champ
    function validateField(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;
        
        if (!field.value.trim()) {
            errorElement.textContent = errorMessage;
            field.classList.add('error');
            return false;
        }
        
        return true;
    }
    
    // Fonction de validation d'email
    function validateEmail(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const errorElement = field.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!field.value.trim()) {
            errorElement.textContent = 'Veuillez entrer votre adresse email';
            field.classList.add('error');
            return false;
        }
        
        if (!emailRegex.test(field.value)) {
            errorElement.textContent = errorMessage;
            field.classList.add('error');
            return false;
        }
        
        return true;
    }
    
    // Fonction pour effacer les erreurs
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const errorFields = document.querySelectorAll('.error');
        
        errorMessages.forEach(element => {
            element.textContent = '';
        });
        
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
    
    // Fonction pour afficher un message de succès
    function showSuccessMessage() {
        const submitButton = document.querySelector('.submit-btn');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message envoyé avec succès';
        submitButton.style.backgroundColor = '#2ecc71';
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.style.backgroundColor = '';
        }, 3000);
    }
    
    // FAQ Accordéon
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Fermer les autres éléments ouverts
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = '0';
                    item.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                    item.querySelector('.faq-question i').classList.add('fa-chevron-down');
                }
            });
            
            // Basculer l'élément actuel
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                answer.style.maxHeight = '0';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
});