<?php
$mPfullDay = $_POST["item_0"];
$cheap1Day = $_POST["item_1"];
$mpCuzco5Days = $_POST["item_2"];
$rainMount = $_POST["item_3"];
$mpFamily = $_POST["item_4"];
$firstName = $_POST["first_name"];
$lastName = $_POST["last_name"];
$address = $_POST["address"];
$phone = $_POST["phone"];
$tCard = $_POST["card"];
$cCard = $_POST["credit_card"];
$expDate = $_POST["exp_date"];

function calculateTotal($mPfullDay, $cheap1Day, $mpCuzco5Days, $rainMount, $mpFamily){
    $cost_0 = 275;
    $cost_1 = 260;
    $cost_2 = 780;
    $cost_3 = 585;
    $cost_4 = 985;

    $total = ($mPfullDay * $cost_0) + ($cheap1Day * $cost_1) + ($mpCuzco5Days * $cost_2) + ($rainMount * $cost_3) + ($mpFamily * $cost_4);
    echo "$" . $total;
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Macchu Picchu Qhatu: Review Page</title>
        <meta charset="utf-8">
        <meta name="description" content="width=device-width, initial-scale=4.0">
        <link rel="stylesheet" href="mpq_style.css"/>
    </head>
    <body>
        <script src="mpq.js"></script>
        <h3>TOURS</h3>
        <h2>Review your Tour:</h2>
        <div class="tour_container">
            <section id="container_0" class="blue_rounded">
                <article class="tours rounded">
                    <div class="tour1">
                        <p>Machu Picchu 1 Day Tour, Trip From Cusco | Machu Picchu Full Day</p>
                        <img src="tour_1.jpg" alt="Macchu_Picchu_Full_Day">
                        <p>Cost: US $275,00 per person <br> Parcial Amount: <?php echo $mPfullDay ?> </p>
                    </div>
                </article>
            </section>
    
            <section id="container_1" class="blue_rounded">
                <article class="tours rounded">
                    <div class="tour2">
                        <p>CHEAPEST Tour To Machu Picchu 1 Day</p>
                        <img src="tour_2.jpg" alt="CHEAPEST_1_Day">
                        <p>Cost: US $260,00 per person <br> Parcial Amount: <?php echo $cheap1Day ?> </p>
                    </div>
                </article>
            </section>
    
            <section id="container_2" class="blue_rounded">
                <article class="tours rounded">
                    <div class="tour3">
                        <p>Inti Raymi 2020: Tour in Cusco and Machu Picchu 5 Days</p>
                        <img src="tour_3.jpg" alt="Macchu_Picchu_and_Cusco_5Days">
                        <p>Cost: US $780,00 per person <br> Parcial Amount: <?php echo $mpCuzco5Days ?> </p>
                    </div>
                </article>
            </section>
    
            <section id="container_3" class="blue_rounded">
                <article class="tours rounded">
                    <div class="tour4">
                        <p>Cusco, Sacred Valley, Machu Picchu And Rainbow Mountain 5 Days Tour</p>
                        <img src="tour_4.jpg" alt="Macchu_Picchu_Sacred_Valley">
                        <p>Cost: US $585,00 per person <br> Parcial Amount: <?php echo $rainMount ?> </p>
                </article>
            </section>
    
            <section id="container_4" class="blue_rounded">
                <article class="tours rounded">
                    <div class="tour5">
                        <p>Family Vacation Tour to the Sacred Valley & Machu Picchu 4 Days</p>
                        <img src="tour_5.jpg" alt="Macchu_Picchu_Family">
                        <p>Cost: US $985.00 per family (4 person per family) <br> Parcial Amount: <?php echo $mpFamily ?> </p>
                    </div>
                </article>
            </section>
        </div>
        <div class="total_container">
            <p>Total:<?php calculateTotal($mPfullDay, $cheap1Day, $mpCuzco5Days, $rainMount, $mpFamily) ?> </p>
        </div>
        <h2>Verify Your Info</h2>
        <div class="verif_cont">
            <p>
                <b>First Name:</b> <?php echo $firstName ?><br>
                <b>Last Name:</b> <?php echo $lastName ?><br>
                <b>Address:</b> <?php echo $address ?><br>
                <b>Phone #:</b> <?php echo $phone ?><br>
                <b>Credit Card Type:</b> <?php echo $tCard ?><br>
                <b>Credit Card #:</b> <?php echo $cCard ?><br>
                <b>Expiration Date:</b> <?php echo $expDate ?><br>
            </p>
            <form action="assign11_a.php" method="post">
                <button type="submit" name="submit" value="Confirm">Confirm Info and purchase</button>
                <button type="submit" name="submit" value="Cancel">Cancel Purchase</button>
            </form>
        </div>
        <nav id="home">
        <a href="/~markcalla/index.html">
            <img src="index.gif" alt="homelink"  height="120px" style="float: left; padding: 10px;">    
        </a>
        </nav>
        <footer>
            <h6>© by Mark Calla</h6>
        </footer>
    </body>
</html>