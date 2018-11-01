<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
   die('Could not connect: ' . mysql_error());
}



// Create table in database
mysql_select_db("liuli4016", $con);
$tbl1 = "CREATE TABLE majornodes 
(
  `date` datetime DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL
)";

mysql_query($tbl1, $con);

mysql_close($con);
?>