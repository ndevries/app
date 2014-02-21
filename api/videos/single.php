<?php

    $request = json_decode(file_get_contents("php://input"));

    $status         = array();
    $data           = array();

    $status["error"] = false;
    $status["message"] = "Error message here";

    $video = array();
    $video["name"] = "Video " . $request->id;
    $video["id"] = $request->id;
    $video["author"] = "William Shakespeare";
    $video["url"] = "http://vjs.zencdn.net/v/oceans.mp4";
    $video["description"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    $data = $video;

    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);