<?php
    class GetCabinet{
        //connection
        private $conn;

        //db connection
        public function __construct($db){
            $this->conn = $db;
            //print_r($this->conn);
        }
        // get all
        public function getCabinet(){
            $sqlQuery = "SELECT * FROM cabinet";
            $userObj = $this->conn->select($sqlQuery);

            $cabinet = array();

           while($result = $userObj->fetch_assoc()){
                $result= array(
                    "id"=> $result["id"],
                    "location" => $result["location"],
                    "row" => $result["row"],
                    "cabinet" => $result["cabinet"],
                    "capacity" => $result["capacity"],
                 
                );
                array_push($cabinet,$result);
            }
            return json_encode($cabinet);

            //return $user;
        }
    }
?>