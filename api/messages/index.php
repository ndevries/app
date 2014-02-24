<?php

    $status         = array();
    $data           = array();

    $status["error"] = false;
    $status["message"] = "";

    for ($i = 0; $i < 10; $i++) {
        $messages = array();
        $messages["name"] = "John Doe";
        $messages["id"] = "" . $i + 1 . "";
        $messages["avatar"] = "http://placehold.it/150x150&text=:]";
        $messages["time"] = "January 3, 2013 3:24 PM";
        $messages["audio"] = false;
        $messages["message"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $data[] = $messages;
    }

    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);