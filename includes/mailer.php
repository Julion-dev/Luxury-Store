<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendContactEmail($name, $email, $message) {
    $mail = new PHPMailer(true);
    
    try {
        // Configuration SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'votre@email.com';
        $mail->Password = 'votre_mot_de_passe_app';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom('no-reply@luxurystore.com', 'LuxuryStore');
        $mail->addAddress('contact@luxurystore.com');
        
        // Contenu
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message de $name";
        $mail->Body = "
            <h2>Nouveau contact</h2>
            <p><strong>Nom :</strong> $name</p>
            <p><strong>Email :</strong> $email</p>
            <p><strong>Message :</strong><br>".nl2br(htmlspecialchars($message))."</p>
        ";

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Mail Error: ".$mail->ErrorInfo);
        return false;
    }
}
?>