<?php
// Sécurité : empêcher l'accès direct
defined('ACCESS_ALLOWED') or die('Accès direct non autorisé');

// Détection de la page active pour la navigation
$current_page = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($page_title ?? 'LuxuryStore') ?></title>
    
    <!-- Favicon -->
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Metadata SEO -->
    <meta name="description" content="<?= htmlspecialchars($meta_description ?? 'Boutique en ligne de sneakers et smartphones haut de gamme') ?>">
    <meta name="keywords" content="sneakers, smartphones, luxe, collection">
</head>
<body>
    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="assets/images/logo.png" alt="LuxuryStore" width="120">
            </a>
            
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item <?= $current_page === 'index.php' ? 'active' : '' ?>">
                        <a class="nav-link" href="index.php">Accueil</a>
                    </li>
                    <li class="nav-item <?= $current_page === 'products.php' ? 'active' : '' ?>">
                        <a class="nav-link" href="products.php">Produits</a>
                    </li>
                    <li class="nav-item <?= $current_page === 'contact.php' ? 'active' : '' ?>">
                        <a class="nav-link" href="contact.php">Contact</a>
                    </li>
                </ul>
                
                <!-- Panier avec compteur -->
                <div class="cart-section">
                    <a href="cart.php" class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">
                            <?= isset($_SESSION['cart']) ? count($_SESSION['cart']) : 0 ?>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Contenu principal -->
    <main class="main-content">