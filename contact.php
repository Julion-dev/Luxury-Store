<?php
require_once 'includes/config.php';
$page_title = "Contactez-nous";
include 'includes/header.php';

$errors = [];
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Nettoyage des données
    $name = trim($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST['message'] ?? '');

    // Validation
    if (empty($name)) $errors[] = "Le nom est obligatoire";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Email invalide";
    if (strlen($message) < 10) $errors[] = "Message trop court";

    if (empty($errors)) {
        // Envoi sécurisé (exemple avec PHPMailer)
        require_once 'includes/mailer.php';
        $success = sendContactEmail($name, $email, $message);
    }
}
?>

<?php if ($success): ?>
    <div class="alert alert-success">Message envoyé avec succès!</div>
<?php else: ?>
    <form method="POST">
        <input type="text" name="name" required placeholder="Votre nom">
        <input type="email" name="email" required placeholder="Email">
        <textarea name="message" required minlength="10"></textarea>
        <button type="submit">Envoyer</button>
    </form>
<?php endif; ?>

<?php include 'includes/footer.php'; ?>