<?php

    $request = json_decode(file_get_contents("php://input"));

    $status         = array();
    $data           = array();

    if ($request->name == "admin" && $request->password == "admin") {
        $status["error"]    = false;
        $status["message"]  = "Log in successful.";

        $data["id"] = "12";
        $data["secret"] = md5(uniqid(rand(), TRUE));
    } else {
        $status["error"]    = true;
        $status["message"]  = "Log in failed. Use [admin] for IBO # and password.";
    }

    // Return JSON
    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);
