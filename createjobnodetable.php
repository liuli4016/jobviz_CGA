<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
   die('Could not connect: ' . mysql_error());
}



// Create table in database
mysql_select_db("liuli4016", $con);
$tbl1 = "CREATE TABLE jobnodes 
(
  `date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `employer` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL
)";

mysql_query($tbl1, $con);

mysql_close($con);
?>