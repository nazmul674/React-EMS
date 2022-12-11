<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

// header("Access-Control-Allow-Origin:http://localhost:3000");
//     const cors = require('cors');
//      const corsOptions = { 
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// header('Access-Control-Allow-Methods:GET,POST');
// header('Access-Control-Allow-Headers:X-requested-with ');
    
    include_once '../config/database.php';
    include_once '../models/GetUser.php';
    include_once '../models/AddUser.php';
    include_once '../models/MailSender.php';

    // require_once './vendor/autoload.php';


    $database = new Database();

    
    $addUser = new AddUser($database);
    $getUser = new GetUsers($database);
    $mailSender = new MailSender();

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "GET":
            $users = $getUser->getUsers();
            echo $users;
            break;
        case "POST":
            $users = $addUser->addUser();
            $mailSender->sendMail();
            break;
        case "DELETE":
            $users = $addUser->deleteUser();
            break;
        case "PUT":
            $users = $addUser->updateUser();
            break;
    }

    //return $users;
    
?>