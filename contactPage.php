<!DOCTYPE HTML> 
<html>
<head>
<style>
	
.error {color: #FF0000;}

.style1 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
}

</style>
</head>


<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $placeErr = $gradeErr = "";
$name = $email = $gender = $comment = $place = $grade = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
   if (empty($_POST["name"])) 
   {
     $nameErr = "name is required";
   } 
   else 
   {
     $name = test_input($_POST["name"]);
     // 检查姓名是否包含字母和空白字符
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) 
     {
       $nameErr = "only character and space are allowed"; 
     }
   }
   
   if (empty($_POST["email"])) 
   {
     $emailErr = "email is required";
   } 
   else 
   {
     $email = test_input($_POST["email"]);
     // 检查电子邮件地址语法是否有效
     if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) 
     {
       $emailErr = "invalid email format"; 
     }
   }
     
   if (empty($_POST["place"])) 
   {
     $place = "";
   } 
   else 
   {
     $place = $_POST["place"];
   }

   if (empty($_POST["gender"])) 
   {
     $genderErr = "";
   } 
   else 
   {
     $gender = test_input($_POST["gender"]);
   }
   
   
   if (empty($_POST["grade"])) 
   {
     $gradeErr = "";
   } 
   else 
   {
     $grade = test_input($_POST["grade"]);
   }
   

   if (empty($_POST["comment"])) 
   {
     $commentErr = "";
   } 
   else 
   {
     $comment = test_input($_POST["comment"]);
   }   
}

function test_input($data) 
{
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

<body> 

<form action="insertcontact.php" method="post">
   Name: <input type="text" name="name" style="width:150px; font-size:12px">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   Email: <input type="text" name="email" style="width:150px; font-size:12px">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   
   Place: 
<select name = "place" id = "place" style="height:30px; width:150px; font-size:16px">
   <option value="AL"> Alabama </option>
   <option value="AK"> Alaska </option>
   <option value="AZ"> Arizona </option> 
   <option value="AR"> Arkansas </option>
   <option value="CA"> California </option>
   <option value="CO"> Colorado </option> 
   <option value="CT"> Connecticut </option>
   <option value="DE"> Delaware </option>
   <option value="FL"> Florida </option> 
   <option value="GA"> Georgia </option>
   <option value="HI"> Hawaii </option>
   <option value="ID"> Idaho </option>  
   <option value="IL"> Illinois </option>
   <option value="IN"> Indiana </option>
   <option value="IA"> Iowa </option> 
   <option value="KS"> Kansas </option>
   <option value="KY"> Kentucky </option>
   <option value="LA"> Louisiana </option> 
   <option value="ME"> Maine </option>
   <option value="MD"> Maryland </option>
   <option value="MA"> Massachusetts </option> 
   <option value="MI"> Michigan </option>
   <option value="MN"> Minnesota </option>
   <option value="MS"> Mississippi </option>    
   <option value="MO"> Missouri </option>
   <option value="MT"> Montana </option>
   <option value="NE"> Nebraska </option> 
   <option value="NV"> Nevada </option>
   <option value="NH"> New Hampshire </option>
   <option value="NJ"> New Jersey </option> 
   <option value="NM"> New Mexico </option>
   <option value="NY"> New York </option>
   <option value="NC"> North Carolina </option> 
   <option value="ND"> North Dakota </option>
   <option value="OH"> Ohio </option>
   <option value="OK"> Oklahoma </option>  
   <option value="OR"> Oregon </option> 
   <option value="PA"> Pennsylvania </option>
   <option value="RI"> Rhode Island </option> 
   <option value="SC"> South Carolina </option>
   <option value="SD"> South Dakota </option>
   <option value="TN"> Tennessee </option> 
   <option value="TX"> Texas </option>
   <option value="UT"> Utah </option>
   <option value="VT"> Vermont </option> 
   <option value="VA"> Virginia </option>
   <option value="WA"> Washington </option>
   <option value="WV"> West Virginia </option>    
   <option value="WI"> Wisconsin </option>
   <option value="WY"> Wyoming </option> 
   <option value="OUTSIDE"> Outside United States </option> 
</select>

<br><br>
  
   Gender: &nbsp;
   <input type="radio" name="gender" value="female">Female &nbsp;
   <input type="radio" name="gender" value="male">Male
   <br>
   
   
<p>
    Are you _ ?  <br>
    <INPUT TYPE="radio" name="grade" value="freshman">
    <span class="style1"> a) Freshman </span>
    <input type="radio" name="grade" value="sophomore">
    <span class="style1"> b) Sophomore  </span>
    <input type="radio" name="grade" value="junior">
    <span class="style1"> c) Junior  </span>
    <input type="radio" name="grade" value="senior">
    <span class="style1"> d) Senior  </span>
    <input type="radio" name="grade" value="graduate">
    <span class="style1"> e) Graduate Student  </span>
    <input type="radio" name="grade" value="not_student">
    <span class="style1"> f) Not a Student  </span>
</p>
   
  <br>
    
   Comment: <br><br>
   <textarea name="comment" rows="5" cols="40"></textarea>
   <br><br>
   <input type="submit" name="submit" value="Submit"> 
</form>


<!--
<?php
echo "<h2>Your Input：</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $place;
echo "<br>";
echo $gender;
echo "<br>";
echo $grade;
echo "<br>";
echo $comment;
?>
-->

</body>
</html>
