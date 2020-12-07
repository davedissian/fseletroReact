<?php

abstract class Connect {
    protected static function getDb(){
    $conn = new PDO("mysql:host=localhost;dbname=fullstackeletro;charset=utf8",
            "root", 
            ""
            );
            if ($conn){
                return $conn;
            } else {
                echo "<h2>ERRO NA CONEXÃO COM O BD</h2>";
            }
    }
}
