<?php
require_once("../datebaseconnection.php");
require_once("sign_up.html");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName   = $_POST["firstName"];
    $lastName    = $_POST["lastName"];
    $Address     = $_POST["countryName"];
    $email       = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $pass        = $_POST["pass"];
    $VIP         = $_POST["VIP"];

    
    $checkEmailSql = "SELECT id FROM customer WHERE email = '$email'";
    $result = mysqli_query($connection, $checkEmailSql);
    if (mysqli_num_rows($result) > 0) {
        echo '<script>alert("Email is not unique!");</script>';
        exit();
    }

    
    $insertSql = "INSERT INTO customer (firstName, lastName, email, phone, address, vip, passwordhashed) 
                  VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$Address', '$VIP', '$pass')";

    mysqli_query($connection, $insertSql);
    
    mysqli_close($connection);
    echo '<script>alert("now sign in !");</script>';
    echo '<script>window.location.href = "../index.php";</script>';

    exit();
    
}
?>
