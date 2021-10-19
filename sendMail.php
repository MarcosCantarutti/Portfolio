<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $name = addslashes($_POST(['name']));
    $email = addslashes($_POST['email']);
    $message = addslashes($_POST['msg']);

    $to = 'marcossandim21@gmail.com';
    $subject = 'Contato - Formulário portfolio';
    $body = "Nome: " . $name . "\r\n" .
        "Email: " . $email . "\r\n" .
        "Mensagem: " . $message;

    $header = "From:marcossandim21@gmail.com" . "\r\n"
        . "Reply-to:" . $email . "\e\n"
        . "X=Mailer:PHP" . phpversion();


    if (mail($to, $subject, $body, $header, 'marcossandim21@gmail.com')) {

        echo ('O Email enviado com sucesso.');
    } else {
        echo ('O Email não pode ser enviado.');
    }
};
