<?php
// Configuration de base
$page_title = "LuxuryStore - Sneakers & Smartphones Haut de Gamme";
include 'includes/header.php';
?>

<section class="hero">
    <div class="container">
        <h1><?php echo htmlspecialchars("Bienvenue chez LuxuryStore"); ?></h1>
        <p>Découvrez nos collections exclusives</p>
        <a href="products.php" class="btn btn-primary">Voir les produits</a>
    </div>
</section>

<?php include 'includes/footer.php';
$scripts = [
    'assets/js/products-slider.js',
    'assets/js/custom.js'
];
?>