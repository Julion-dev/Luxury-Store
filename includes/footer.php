        </main> <!-- Fermeture du main-content -->
        
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <!-- Colonne 1 : Logo et description -->
                    <div class="col-md-4">
                        <img src="assets/images/logo-white.png" alt="LuxuryStore" width="150">
                        <p class="footer-description">
                            Votre destination premium pour les sneakers exclusives et smartphones haut de gamme.
                        </p>
                    </div>
                    
                    <!-- Colonne 2 : Liens rapides -->
                    <div class="col-md-2">
                        <h3 class="footer-title">Boutique</h3>
                        <ul class="footer-links">
                            <li><a href="products.php?category=sneakers">Sneakers</a></li>
                            <li><a href="products.php?category=smartphones">Smartphones</a></li>
                            <li><a href="new-arrivals.php">Nouveautés</a></li>
                        </ul>
                    </div>
                    
                    <!-- Colonne 3 : Informations -->
                    <div class="col-md-3">
                        <h3 class="footer-title">Informations</h3>
                        <ul class="footer-info">
                            <li><i class="fas fa-map-marker-alt"></i> 123 Rue du Luxe, Paris</li>
                            <li><i class="fas fa-phone"></i> +33 1 23 45 67 89</li>
                            <li><i class="fas fa-envelope"></i> contact@luxurystore.com</li>
                        </ul>
                    </div>
                    
                    <!-- Colonne 4 : Newsletter -->
                    <div class="col-md-3">
                        <h3 class="footer-title">Newsletter</h3>
                        <form class="newsletter-form" action="newsletter.php" method="POST">
                            <input type="email" name="email" placeholder="Votre email" required>
                            <button type="submit">S'abonner</button>
                        </form>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-x"></i></a>
                        </div>
                    </div>
                </div>
                
                <!-- Copyright -->
                <div class="copyright">
                    <p>&copy; <?= date('Y') ?> LuxuryStore. Tous droits réservés.</p>
                    <div class="legal-links">
                        <a href="privacy.php">Confidentialité</a>
                        <a href="terms.php">Conditions</a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scripts JS -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="assets/js/main.js"></script>
        
        <?php if (isset($scripts)): ?>
            <!-- Scripts spécifiques à certaines pages -->
            <?php foreach ($scripts as $script): ?>
                <script src="<?= htmlspecialchars($script) ?>"></script>
            <?php endforeach; ?>
        <?php endif; ?>
    </body>
</html>