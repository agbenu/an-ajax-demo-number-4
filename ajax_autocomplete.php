<?php 
// get what user typed in autocomplete input
$term = trim($_REQUEST['first_name']);

$con = mysqli_connect('127.0.0.1', 'root','','test');

$sql = 'select first_name,last_name,dob,gender 
		from people
		where first_name like "%'.$term.'%"  limit 1';

$name_select = mysqli_query($con,$sql);

$row = mysqli_fetch_row($name_select);
 		
print $row[0].'~'.$row[1].'~'.$row[2].'~'.$row[3];

?>