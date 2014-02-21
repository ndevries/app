<?php

    $request = json_decode(file_get_contents("php://input"));

    $status         = array();
    $data           = array();

    $status["error"] = false;
    $status["message"] = "Error message here";

    $audio = array();
    $audio["name"] = "Audio " . $request->id;
    $audio["id"] = $request->id;
    $audio["author"] = "William Shakespeare";
    $audio["url"] = "http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3";
    $audio["description"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    $data = $audio;

    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);