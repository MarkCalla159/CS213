<?php
$fName = $_POST["firstName"];
$lName = $_POST["lastName"];
$stdId = $_POST["studentId"];
$fName2 = $_POST["firstName2"];
$lName2 = $_POST["lastName2"];
$stdId2 = $_POST["studentId2"];
$perfTy = $_POST["performan"];
$skill = $_POST["skll"];
$instrument = $_POST["instrument"];
$building = $_POST["build"];
$rmNum = $_POST["room"];
$time = $_POST["timeSl"];

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>IDAHO FALLRAISE FESTIVAL - Piano Edition</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="a13.css">
    </head>
    <body>
        <script src="assign13.js"></script>
        <header>
            <h1>IDAHO FALLRAISE FESTIVAL</h1>
            <img src="fst_img.jpg" alt="festival">
        </header>
    </body>
    <h2>STUDENT RECORD</h2>
    <div class="std_record">
        <p>
            <b>First Name:</b> <?php echo $fName ?><br>
            <b>Last Name:</b> <?php echo $lName ?><br>
            <b>First Name 2:</b> <?php echo $fName2 ?><br>
            <b>Last Name:</b> <?php echo $lName2 ?><br>
            <b>Location:</b> <?php echo $building ?> # <?php echo $rmNum?><br>
            <b>Skill:</b> <?php echo $skill ?><br>
            <b>Time:</b> <?php echo $time ?><br>
        </p>
    </div>
    <nav id="home">
            <a href="/~markcalla/index.html">
                <img src="index.gif" alt="homelink"  height="120px" style="float: left; padding: 10px;">    
            </a>
    </nav>
    <footer>
        <h6>© by Mark Calla</h6>
    </footer>
</html>