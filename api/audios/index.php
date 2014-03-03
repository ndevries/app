<?php

    $status         = array();
    $data           = array();

    $status["error"] = false;
    $status["message"] = "Error message here";

    for ($i = 0; $i < 10; $i++) {
        $audio = array();
        $audio["name"] = "Audio " . ($i + 1);
        $audio["id"] = "" . $i + 1 . "";
        $audio["author"] = "William Shakespeare";
        $audio["url"] = "http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg";
        $audio["description"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $data[] = $audio;
    }

    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);