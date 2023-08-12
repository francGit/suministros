<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $phone = $_POST['phone'];
    $mensaje = $_POST['mensaje'];

    $lastSentTime = file_get_contents('last_sent.txt');
    
    $currentTime = time();
    $timeSinceLastSent = $currentTime - intval($lastSentTime);
    $minSiceLastSent = 6000;
    if($timeSinceLastSent < $minSiceLastSent){
        echo "too_soon"; /// evio demasiado pronto
    }else{
        $to="fmuneton1@gmail.com";
        $subject = "Nuevo mensaje de contacto desde sitio web";

        $message = "Nombre: $name $lastname\n";
        $message = "Teléfono: $phone\n";
        $message = "Email: $email\n";
        $message = "Mensaje: $mensaje\n";

        $headers = "From: $email";
        if(mail($to,$subject,$message,$headers)){
            file_put_contents('last_sent.txt', $currentTime);
            echo "success";
        }else{
            echo "error";
        }
    }

}
?>