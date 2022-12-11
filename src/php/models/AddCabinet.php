<?php

class AddCabinet{
private $conn;

public function __construct($db){
$this->conn=$db;
}
public function addCabinet(){
$user= json_decode(file_get_contents('php://input'));// file_get_contents it takes json raw data from js page and convert them to array of php objects. As I got the API so I transform it to object and post to database. 
print_r($user);
// print($user);
$sql = "INSERT INTO  `cabinet` (`location`, `row`, `cabinet`,`capacity`) VALUES ('$user->location','$user->row','$user->cabinet','$user->capacity')";
 $userObj= $this->conn->insert($sql);

}
public function deleteCabinet(){
    $id = json_decode(file_get_contents('php://input'));
 
    $sql =  "DELETE FROM `cabinet` WHERE `cabinet`.`id` = $id";
    // $sql= "DELETE FROM `cabinet` WHERE `id`= $id";
    $this->conn->delete($sql);
}

public function updateCabinet(){
$user = json_decode( file_get_contents('php://input'));
$sql = "UPDATE  `cabinet` SET `location`='$user->location', `row`= '$user->row', `cabinet`='$user->cabinet',`capacity`='$user->capacity' WHERE `cabinet`.`id` = $user->id";
$this->conn->update($sql);
return $user;

}

}
?>