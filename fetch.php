<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');


    // Connect to database
    $mysqli = new mysqli("localhost","root","","taxcalculator");

    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }

    include('api.php');

    $query = "SELECT * FROM taxamount";
    $result = $mysqli->query($query);

    // Get data, convert to JSON and print
    $row = $result -> fetch_assoc();
    json_encode($row);
    
    header('https://localhost/TAX_CALCULATING_SYSTEM/personal.html');

    // Free result set and close connection
    $result -> free_result();
    $mysqli -> close();
?>