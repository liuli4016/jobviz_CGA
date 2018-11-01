<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("contacts", $con);

$result = mysql_query("SELECT * FROM contacts");

echo "<table border='1'>
<tr>
<th>Index</th>
<th>Name</th>
<th>Email</th>
<th>Place</th>
<th>Gender</th>
<th>Comment</th>
</tr>";

$i = 0;

while($row = mysql_fetch_array($result))
  {
  $i = $i + 1;
  echo "<tr>";
  echo "<td>" . $i . "</td>";
  echo "<td>" . $row['A'] . "</td>";
  echo "<td>" . $row['B'] . "</td>";
  echo "<td>" . $row['C'] . "</td>";
  echo "<td>" . $row['D'] . "</td>";
  echo "<td>" . $row['E'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysql_close($con);
?>

