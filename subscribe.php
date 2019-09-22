
<?php


$email = $_POST['email'];

$to_email = "marketing@immology.org";
$subject = "You have a new Subscriber";
$body =
'<b>Email: </b>' .  $email . '<br>' . '<br>'
;
$headers = "From: new Immology subscriber ";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

if ( mail($to_email, $subject, $body, $headers)) {
  echo("Email successfully sent to $to_email...");
  header("Location: index.html");

} else {
 header("Location: index.html");
 echo("Email sending failed...");
}


?>
