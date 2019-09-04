<?php
//$q = strval($_GET['q']);
$q = "select * from ADVERT";

$hostname = "vidypie.com.mysql";
$username = "vidypie_com";
$password = "pmbYuj4B";
$db = "vidypie_com";
$port=3306;
$conn = new mysqli($hostname, $username, $password, $db, $port);
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

if ($result = $conn->query($q)) {
    $return_arr = array();
    while($row = $result->fetch_array()) {
        $row_array['TITLE'] = $row['TITLE'];
        $row_array['TEXT'] = $row['TEXT'];
        $row_array['IMAGE'] = $row['IMAGE'];
        $row_array['USERNAME'] = $row['USERNAME'];
        array_push($return_arr,$row_array);
    }
    echo json_encode($return_arr);
    $result->close();
}
?>