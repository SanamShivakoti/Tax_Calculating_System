<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: *');

    // Connect to database
    $mysqli = new mysqli("localhost","root","","taxcalculator");

    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }

    $d = $_POST['status'];
    $monthly = $_POST['monthly'];
    $month = $_POST['month'];
    $bonus = $_POST['bonus'];

    $amount = $monthly*$month+$bonus;

    function calculatetax($amount, $d){

        if ($d == 1){
            //unmarried conditions
        
            if($amount >= 4000000){
                $tax = (0.36*$amount);
            }
            else if($amount >= 2000000){
                $tax = (0.30*$amount);
            }
            else if($amount >= 700000){
                $tax = (0.20*$amount);
            }
            else if($amount >= 500000){
                $tax = (0.10*$amount);  
            }
            else if($amount >= 400000){  
                $tax = (0.01*$amount);   
            }

            }
            //married conditions
        else if($d==2){
            if($amount >= 4000000){
                $tax = (0.36*$amount);
            }
            else if($amount >=  2000000){
                $tax = (0.30*$amount);   
            }
            else if($amount >= 750000){
                $tax = (0.20*$amount);
            }
            else if($amount >= 550000){
                $tax = (0.10*$amount);
            }
            else if($amount >= 450000){
                $tax = (0.01*$amount);
            }
        }
        return $tax;
    }   

    $tax = calculatetax($amount, $d);

    $sql = "INSERT INTO taxamount (taxamount) VALUES('{$tax}')";

    $result = $mysqli -> query($sql);
?>