<?php

$field1 = $_GET['apr'];
$field2 = $_GET['term'];
$field3 = $_GET['amount'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Calculation Page</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calc_style.css">
</head>

<body>
    <header>
        <img src="mtgg_img.jpg" alt="logo">
        <h1>PHP Mortgage Calculator</h1>
    </header>

    <div class="container">
        <div class="item">
            <h2>Mortgage Information:</h2>
            <?php
            print "APR: $field1<br />";
            print "Term: $field2<br />";
            print "Amount: $field3<br />";
            ?>

            <h3>Monthly Payment</h3>
            <?php
            $amt = $field3;
            $apr = $field1;
            $term = $field2;
            $pay4Month = 0;

            if (is_null($term) || is_null($apr) || is_null($amt)) {
                print "Monthly Payment: $pay4Month";
            } else {
                $monthlyPercent = ($apr / 100) / 12;
                $numPay = $term * 12;
                $pay4Month = $amt * (($monthlyPercent * (1 + $monthlyPercent) ** $numPay) / (((1 + $monthlyPercent) ** $numPay) - 1));
                echo "Monthly Payment: " . number_format((float)$pay4Month, 2, '.', '');
            }
            ?>
        </div>
    </div>

    <footer>
        <nav id="home">
            <a href="/~markcalla/index.html">
                <img src="index.gif" alt="homelink">    
            </a>
        </nav>
        <h5> © Mortgage Calculator by Mark Calla</h5>
    </footer>
</body>

</html>