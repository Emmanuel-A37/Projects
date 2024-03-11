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