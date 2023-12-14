<?php
    require_once("datebaseconnection.php");
    $id = $_COOKIE["access"];
    $querySql = "SELECT firstName FROM customer WHERE id = '$id';";
    $result = mysqli_query($connection , $sql);
    $firstName ="";
    if($result)
        {
            $row = mysqli_fetch_assoc($result);
            $firstName = $row['firstName'];
        }
    else 
        $firstName = "aboOmar";
        mysqli_close($connection);
?>
