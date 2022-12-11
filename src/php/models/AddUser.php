<?php
    
    
    class AddUser{
        //connection
        private $conn;

        //dbconnection
        public function __construct($db){
            $this->conn = $db;
        }
        public function addUser(){
            $user = json_decode( file_get_contents('php://input') );

            //print_r($user);

            $sqlQuery = "INSERT INTO `users` ( `email`, `name`, `password`, `role`) VALUES ('$user->email','$user->name','$user->password','$user->role')" ;
            $this->conn->insert($sqlQuery);
        }
        public function deleteUser(){
            $id = json_decode(file_get_contents('php://input'));
            //print_r( gettype($ids));

            $sqlQuery = "DELETE FROM `users` WHERE `id`= $id";
            $this->conn->delete($sqlQuery);
        }
        //get by ID
        public function updateUser(){
            $user = json_decode( file_get_contents('php://input'));
            

            $sqlQuery = "UPDATE `users` SET `email`='$user->email', `name`='$user->name', `role` ='$user->role'
                         WHERE `id` = $user->id";

            $this->conn->update($sqlQuery);

            return $user;

        }

    }
?>