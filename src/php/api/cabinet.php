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
     include_once '../models/AddCabinet.php';
     include_once '../models/GetCabinet.php';
    $db = new Database();

     //created object under equipment class
    // $getUser = new GetUsers($database);

    $mailSender = new MailSender();

 $getCab= new GetCabinet($db);
    $addCab = new AddCabinet($db);
    // $delEquip= new AddEquipment($db);

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "GET":
            $cab =  $getCab->getCabinet();
            echo $cab;
            break;
        case "POST":
            $cab = $addCab ->addCabinet();// use that object to call a method which is under AddEquipment class. This AddEquipment method will respond the API, requested by fronted 'POST' request by axios.
            echo $cab;
            break;
        
        case "DELETE":
            $cab = $addCab -> deleteCabinet();
           break;
        case "PUT":
            $cab =$addCab->updateCabinet();
             break;           
    }

  
    
    


    //return $users;
    
?>