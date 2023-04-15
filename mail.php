<?php


 require_once "Mail.php";


$from = '<divyanshutripathi7826@gmail.com>';
$to = '<divyanshu.tripathi@inframantra.com>';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'smtp.gmail.com',
        'port' => '587',
        'auth' => true,
        'username' => 'divyanshutripathu7826@gmail.com ',
        'password' => '9695ddhh98'
    ));

  $mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}

?>