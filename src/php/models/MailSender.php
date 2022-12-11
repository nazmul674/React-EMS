<?php
    // include './vendor/phpmailer/phpmailer/src/PHPMailer.php';
    // require './vendor/phpmailer/phpmailer/src/Exception.php';
    // require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
    use PHPMailer\PHPMailer\PHPMailer;
    //require_once '../../../vendor/autoload.php';
    

    class MailSender{
        public function sendMail(){
            $user = json_decode( file_get_contents('php://input') );


            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'smtp.mailtrap.io';
            $mail->SMTPAuth = true;
            $mail->Port = 2525;
            $mail->Username = '12172529508df4';
            $mail->Password = 'c376c269c91475';

            $mail->setFrom('ems@coderex.co', 'EMS Coderex');
            $mail->addAddress($user->email, $user->name);


            $mail->isHTML(true);

            $mail->Subject = "Welcome to EMS Coderex";

            $mail->Body = "<h3>Hello {$user->name},
            <br> You are added as {$user->role} in Equipment Management System Code Rex(EMS)
            <br>Please Use this credential to login - <br> <br></h3>
            <h4><br>Email    : {$user->email}
            <br>Password : {$user->raw_password}</h4>";

            try {
                $mail->send();
                echo "Message has been sent successfully";
            } catch (Exception $e) {
                echo "Mailer Error: " . $mail->ErrorInfo;
            }
        }
        

    }
?>