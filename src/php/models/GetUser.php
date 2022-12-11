<?php
    class GetUsers{
        //connection
        private $conn;

        //db connection
        public function __construct($db){
            $this->conn = $db;
            //print_r($this->conn);
        }
        // get all
        public function getUsers(){
            $sqlQuery = "SELECT * FROM users";

            $userObj = $this->conn->select($sqlQuery);

            $users = array();

            while($user = $userObj->fetch_assoc()){
                $user = array(
                    "id" => $user["id"],
                    "email" => $user["email"],
                    "name" => $user["name"],
                    "password" => $user["password"],
                    "role" => $user["role"],
                );
                array_push($users,$user);
            }
            return json_encode($users);

            //return $user;
        }
        
    }
?>