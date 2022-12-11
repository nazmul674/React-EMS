<?php

class AddEquipment{
private $conn;

public function __construct($db){
$this->conn=$db;
}
public function addEquipment(){
$user= json_decode(file_get_contents('php://input'));// file_get_contents it takes json raw data from js page and convert them to array of php objects. As I got the API so I transform it to object and post to database. 
print_r($user);
// print($user);
$sql = "INSERT INTO  `equipments` (`equipname`, `category`, `cabinet`,`price`,`assignto`,`assigndate`,`purchasedate`) VALUES ('$user->equipname','$user->category','$user->cabinet','$user->price','$user->assignto','$user->assigndate','$user->purchasedate')";
 $userObj= $this->conn->insert($sql);

}

  public function deleteEquipment(){
       $id = json_decode(file_get_contents('php://input'));
      // print_r( gettype($id));
      //  $sql = "DELETE FROM `equipments` WHERE `id`= $id";
       $sql =  "DELETE FROM `equipments` WHERE `equipments`.`id` = $id";
       $this->conn->delete($sql);
  }

public function updateEquipment(){
  $user = json_decode( file_get_contents('php://input'));
  $sql = "UPDATE  `equipments` SET `equipname`='$user->equipname', `category`= '$user->category', `cabinet`='$user->cabinet',`price`='$user->price',`assignto`='$user->assignto',`assigndate`='$user->assigndate',`purchasedate`='$user->purchasedate' WHERE `equipments`.`id` = $user->id";
 $this->conn->update($sql);
  return $user;

}

}
?>