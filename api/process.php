<?php

if ($_GET["type"] == "audios") {

    // Logic for audio

    if (isset($_GET["id"])) {

        $status = array(
            "error"   => false,
            "message" => ""
        );

        $data = array(
            "name"        => "Audio " . $_GET["id"],
            "author"      => "William Shakespeare",
            "url"         => "http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3",
            "description" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        );

    } else {

        $status = array(
            "error"   => false,
            "message" => ""
        );

        for ($i = 0; $i < 7; $i++) {

            $data[] = array(
                "name"   => "Audio " . ($i + 1),
                "id"     => "" . $i + 1 . "",
                "author" => "William Shakespeare"
            );

        }

    }

} elseif ($_GET["type"] == "videos") {

    // Logic for video

    if (isset($_GET["id"])) {

        $status = array(
            "error"   => false,
            "message" => ""
        );

        $data = array(
            "name"        => "Video " . $_GET["id"],
            "author"      => "William Shakespeare",
            "url"         => "http://vjs.zencdn.net/v/oceans.mp4",
            "description" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        );

    } else {

        $status = array(
            "error"   => false,
            "message" => ""
        );

        for ($i = 0; $i < 7; $i++) {

            $data[] = array(
                "name"   => "Video " . ($i + 1),
                "id"     => "" . $i + 1 . "",
                "author" => "William Shakespeare"
            );

        }

    }

} elseif ($_GET["type"] == "users") {

    // Logic for user

    $status = array(
        "error"   => false,
        "message" => ""
    );

    $data = array(
        "id"       => "12345",
        "name"     => "Nicholas",
        "password" => "password"
    );

} else {

    // Error message
    $status = array(
        "error"   => true,
        "message" => "Invalid type"
    );

}

// Create json
$json["status"] = $status;
$json["data"] = $data;

// Return json
header('Content-Type: application/json');
echo json_encode($json);
