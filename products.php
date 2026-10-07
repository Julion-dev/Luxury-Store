<?php
require_once 'includes/config.php';
$page_title = "Nos Produits";
include 'includes/header.php';

try {
    $stmt = $pdo->query("SELECT * FROM products WHERE stock > 0 ORDER BY created_at DESC");
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erreur de base de données : " . $e->getMessage());
}
?>

<div class="products-grid">
    <?php foreach ($products as $product): ?>
        <div class="product-card">
            <img src="<?= htmlspecialchars($product['image_url']) ?>" 
                 alt="<?= htmlspecialchars($product['name']) ?>">
            <h3><?= htmlspecialchars($product['name']) ?></h3>
            <p><?= number_format($product['price'], 2, ',', ' ') ?> €</p>
            <button class="add-to-cart" data-id="<?= $product['id'] ?>">
                Ajouter au panier
            </button>
        </div>
    <?php endforeach; ?>
</div>

<?php include 'includes/footer.php'; ?>