<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    $data = array(
        'get'   =>  $_GET,
        'post'  =>  $_POST
    );

    echo json_encode($data);
?>