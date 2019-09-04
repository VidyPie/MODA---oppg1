<?php
$hostname = "vidypie.com.mysql";
$username = "vidypie_com";
$password = "pmbYuj4B";
$db = "vidypie_com";
$port=3306;
$conn = new mysqli($hostname, $username, $password, $db, $port);
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

$return_arr = array();
$q = "insert into ADVERT(IMAGE, TEXT, TITLE, USERNAME) values ('" . $_GET["uri"] . "', '" . $_GET["txt"] . "', '" . $_GET["title"] . "', '" . $_GET["username"] . "')";
$conn->query($q);
$row_array['valid'] = true;
array_push($return_arr,$row_array);
echo json_encode($return_arr);
?>