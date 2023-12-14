<?php
    require_once("datebaseconnection.php");
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $email_in = $_POST["email"];
        $password = $_POST['password'];

        $sql = "SELECT id  FROM customer WHERE (email = '$email_in' AND passwordhashed = '$password');";
        $result = mysqli_query($connection , $sql);
        if($result)
            {
                $row = mysqli_fetch_assoc($result);
                $id = $row['id'];
                $query = "UPDATE customer SET logged = '1' WHERE id = '$id'";
                mysqli_query($connection , $query);
                $querySql  = "SELECT firstName FROM customer WHERE id = '$id';";
                $temp = mysqli_query($connection, $querySql);
                $arr = mysqli_fetch_assoc($temp);
                $name = $arr['firstName'];  
                setcookie("done" , true ,strtotime("1 year"));
                setcookie("access" , $id ,strtotime("1 year"));
                setcookie("name" , $name ,strtotime("1 year"));
                echo '<script>window.location.href = "index.php";</script>';
                exit();
            }    
    }
    else
    {
        echo "<h1>you should sign up</h1>";
    }
mysqli_close($connection);

