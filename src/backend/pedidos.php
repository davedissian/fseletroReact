<?php

    require_once "connect.php";

    $resultado = query("SELECT * FROM pedidos");
    $pedidos = [];

    while($row = mysqli_fetch_assoc($resultado)) {
        $pedidos[] = $row;
    }

    header("Access-Control-Allow-Origin: *");
    header("Content-type: application/json");
    echo json_encode($pedidos);
