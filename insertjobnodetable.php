
<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
  die('Could not connect: ' . mysql_error());
}

mysql_select_db("liuli4016", $con);

$time=date("Y-m-d H:i:s"); 


$sql="INSERT INTO jobnodes (`date`, `title`, `employer`, `city`, `state`)
VALUES
('$time', '$_POST[job_title]', '$_POST[employer]', '$_POST[location_city]', '$_POST[location_state]')";


if (!mysql_query($sql, $con))
{
   die('Error: ' . mysql_error());
}


mysql_close($con)

?>
