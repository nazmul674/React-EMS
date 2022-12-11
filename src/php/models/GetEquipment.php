<?php
    class GetEquipment{
        //connection
        private $conn;

        //db connection
        public function __construct($db){
            $this->conn = $db;
            //print_r($this->conn);
        }
        // get all
        public function getEquipment(){
            $sqlQuery = "SELECT * FROM equipments";
            $userObj = $this->conn->select($sqlQuery);

            $users = array();

           while($result = $userObj->fetch_assoc()){
                $result= array(
                    "id"=> $result["id"],
                    "equipname" => $result["equipname"],
                    "category" => $result["category"],
                    "cabinet" => $result["cabinet"],
                    "price" => $result["price"],
                    "assignto" => $result["assignto"],
                     "assigndate" => $result["assigndate"],
                      "purchasedate" => $result["purchasedate"],
                );
                array_push($users,$result);
            }
            return json_encode($users);

            //return $user;
        }
    }
?>