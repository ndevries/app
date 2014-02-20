<?php

    $status         = array();
    $data           = array();

    $status["error"] = false;
    $status["message"] = "Error message here";

    for ($i = 0; $i < 20; $i++) {
        $video = array();
        $video["name"] = "Video " . ($i + 1);
        $video["id"] = "" . $i + 1 . "";
        $video["author"] = "William Shakespeare";
        $data[] = $video;
    }

    $response["status"] = $status;
    $response["data"] = $data;
    header('Content-Type: application/json');
    echo json_encode($response);