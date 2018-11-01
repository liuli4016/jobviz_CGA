<html>

<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("liuli4016", $con);


$processedcomment = mysql_real_escape_string($_POST['comment']);

$sql="INSERT INTO contacts (A, B, C, D, E, F)
VALUES
('$_POST[name]', '$_POST[email]', '$_POST[place]', '$_POST[gender]', '$_POST[grade]', '$processedcomment')";

if (!mysql_query($sql,$con))
{
  die('Error: ' . mysql_error());
}
echo "Thank you for your feedback!";
echo "<h2>Your Input: </h2>";
echo $_POST[name];
echo "<br>";
echo $_POST[email];
echo "<br>";
echo $_POST[place];
echo "<br>";
echo $_POST[gender];
echo "<br>";
echo $_POST[grade];
echo "<br>";
echo $_POST[comment];

mysql_close($con)
?>

<body>
   <br> <br>
   <a href="#" onClick="javascript:window.opener=null;window.close();"> <input name="green" type="submit" value="Close"></a>
   
</body>

</html>