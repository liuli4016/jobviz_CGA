
<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
  die('Could not connect: ' . mysql_error());
}

mysql_select_db("liuli4016", $con);

$time=date("Y-m-d H:i:s"); 


$sql="INSERT INTO majornodes (`date`, `major`)
VALUES
('$time', '$_POST[majorname]')";


if (!mysql_query($sql, $con))
{
   die('Error: ' . mysql_error());
}


mysql_close($con)

?>
