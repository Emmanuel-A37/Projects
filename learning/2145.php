<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rider</title>
    <link rel="stylesheet" href="214.css">
</head>
<body>

<?php
$fName = $_POST['fName'];
$lName = $_POST['lName'];
$email = $_POST['email'];
$number = $_POST['number'];


$conn = new mysqli("localhost","root","Bankai37#","CSC214");
if($conn -> connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}else{
    $stat = $conn->prepare("insert into RIDER(fName,lName,email,number)
    values(?,?,?,?)");
    $stat->bind_param("sssi",$fName,$lName,$email,$number);
    $stat->execute();
    echo "registration successful!!";
    $stat->close();
    $conn->close();
}
?>

    <div id="container">
        <div class="line">
          <h1>RIDER</h1>
          <form  method="post">
            <label for="fName">First Name</label>
            <input type="text" name="fName" id="fName" required>
            <label for="lName">Last Name</label>
            <input type="text" name="lName" id="lName" required>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>
            <label for="number">Phone Number</label>
            <input type="tel" name="number" id="number" required>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
    
</body>
</html>