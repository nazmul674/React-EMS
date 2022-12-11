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
     include_once '../models/AddEquipment.php';
     include_once '../models/GetEquipment.php';
     include_once '../models/MailSender.php';
    $db = new Database();

     $getEquip= new GetEquipment($db);
    $addEquip = new AddEquipment($db); //created object under equipment class
    // $getUser = new GetUsers($database);
    $mailSender = new MailSender();


    // $delEquip= new AddEquipment($db);

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "GET":
            $equip = $getEquip->getEquipment();
            echo $equip;
            break;
        case "POST":
            $equip = $addEquip->addEquipment();// use that object to call a method which is under AddEquipment class. This AddEquipment method will respond the API, requested by fronted 'POST' request by axios.
            echo $equip;
            break;
        
        case "DELETE":
            $equip = $addEquip-> deleteEquipment();
           break;
        case "PUT":
            $equip = $addEquip->updateEquipment();
             break;           
    }

  
    
    


    //return $users;
    
?>