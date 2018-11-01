<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
  die('Could not connect: ' . mysql_error());
}

// Create table in contacts database
mysql_select_db("liuli4016", $con);
$sql2 = "CREATE TABLE contacts
(
A varchar(20),
B varchar(20),
C varchar(50),
D varchar(20),
E varchar(20),
F text
)";

mysql_query($sql2, $con);


mysql_close($con);
?>



CREATE TABLE contacts
(
Name varchar(20),
Email varchar(20),
Place varchar(50),
Gender varchar(20),
Grade varchar(20),
Feedback text
);
