<?php

    require_once "connect.php";

    $result = query("SELECT * FROM tbl_produtos");
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)) {
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin: *");
    header("Content-type: application/json");
    echo json_encode($produtos);
