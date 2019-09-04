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
$q = "select 1 from FANTUSERS where USERNAME='" . $_GET["username"] . "'";
if ($result = $conn->query($q)) {
    $return_arr = array();
    while($row = $result->fetch_array()) {
        $row_array['dupUser'] = true;
        array_push($return_arr,$row_array);
		$exit = true;
    }
    echo json_encode($return_arr);
    $result->close();
}

if ($exit){
	exit();
}
echo "error";
?>