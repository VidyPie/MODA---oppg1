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

$exit = false;
$return_arr = array();
$q = "select 1 from FANTUSERS where USERNAME='" . $_GET["username"] . "'";
if ($result = $conn->query($q)) {
    while($row = $result->fetch_array()) {
        $row_array['dupUser'] = true;
        array_push($return_arr,$row_array);
        echo json_encode($return_arr);
        $exit = true;
        
    }
    $result->close();
}

if ($exit){
    exit();
}

$q2 = "insert into FANTUSERS(USERNAME, PASSWORD) values ('" . $_GET["username"] . "', '" . $_GET["password"] . "')";
$conn->query($q2);
$row_array['valid'] = true;
array_push($return_arr,$row_array);
echo json_encode($return_arr);
?>