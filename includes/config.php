<?php
// Sécurité : Empêcher l'accès direct
if (!defined('ACCESS_ALLOWED')) {
    die('Accès direct non autorisé');
}

// Configuration de la base de données
define('DB_HOST', 'localhost');
define('DB_NAME', 'luxurystore');
define('DB_USER', 'secure_user');
define('DB_PASS', 'votre_mot_de_passe_complexe');

// Connexion PDO avec gestion d'erreurs
try {
    $pdo = new PDO(
        "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    error_log("DB Error: " . $e->getMessage());
    die("Une erreur est survenue. Merci de réessayer plus tard.");
}

// Démarrer la session sécurisée
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 86400,
        'path' => '/',
        'domain' => $_SERVER['HTTP_HOST'],
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]);
    session_start();
}
?>