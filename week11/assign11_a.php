<?php
$choice = $_POST["submit"];
$outputText;
$emailText = "A Confirmation Email Has Been Sent. Please follow the indications and resend a mail with the date you have chosen";

if ($choice === "Confirm") {
    $outputText = "<strong>Congratulations, your Tour has been confirmed!</strong><br>" . $emailText . "<br><br>Confirmation #: " . (rand());
} else {
    $outputText = "Your tour has been canceled.";
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Macchu Picchu Qhatu: Tour Status Page</title>
        <meta charset="utf-8">
        <meta name="description" content="width=device-width, initial-scale=4.0">
        <link rel="stylesheet" href="mpq_style.css"/>
    </head>
    <body>
        <script src="mpq.js"></script>
        <h1>Macchu Picchu Qhatu: Tours</h1>
        <h2>Tour Status Page</h2>
        <h3>Tour Status:</h3>
        <div class="os_container">
            <?php echo $outputText ?>
        </div>
    </body>
    <footer>
        <h5>© Macchu Picchu Qhatu:Checkout by Mark Calla</h5>
        <h6>
            "ENJOY YOUR EXPERIENCE, CHOOSE US"
            CONTACT NUMBER: +51 976505295
        </h6>
        <nav id="home">
            <a href="/~markcalla/index.html">
            <img src="index.gif" alt="homelink">    
            </a>
        </nav>
    </footer>
</html>