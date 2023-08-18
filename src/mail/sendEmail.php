<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $lastname = $_POST["lastname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $lastSentTime = file_get_contents('last_sent.txt'); // Lee el último tiempo de envío desde el archivo

    $currentTime = time();
    $timeSinceLastSent = $currentTime - intval($lastSentTime);

    $minTimeBetweenSends = 3600; // Tiempo mínimo entre envíos en segundos (1 hora en este caso)

    if ($timeSinceLastSent < $minTimeBetweenSends) {
        echo "too_soon"; // Envío demasiado pronto
    } else {
        $to = "destinatario@example.com"; // Cambia esto al correo del destinatario
        $subject = "Nuevo mensaje de contacto desde el sitio web";

        $message = "Nombre: $name $lastname\n";
        $message .= "Teléfono: $phone\n";
        $message .= "Email: $email\n";
        $message .= "Mensaje: $mensaje\n";

        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            file_put_contents('last_sent.txt', $currentTime); // Guarda el tiempo actual como el último tiempo de envío
            echo "success";
        } else {
            echo "error";
        }
    }
}
?>