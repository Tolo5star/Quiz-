<?php


$link=mysqli_connect("localhost","root","","quiz");
session_start();
extract($_POST);

$name=$_POST["name"];
$pass=$_POST["pass"];
$_SESSION["name"]=$name;
/*
extract($_GET);
$srn=$_GET["srn"];
$pass=$_GET["pass"];
$role=$_GET["role"];
//echo $pass;
*/
$sql="SELECT * FROM users where name='$name' and password='$pass';";
$ret=mysqli_query($link,$sql);
$rows=mysqli_fetch_row($ret);
$res=$ret->num_rows;
if($res==0)
{
	echo "Invalid Credentails";
}
else
{	
	if($_POST["check"]=='1' || $_POST["check"]=='on')
                    {
                    $hour = time() + 3600 * 24 * 30;
                    setcookie('username', $name, $hour);
                    setcookie('password', $pass, $hour);
                    }
	
	ob_start();
	$url="quiznav.html";
    header('Location: '.$url);
    ob_end_flush();
    die();
	
}

	

?>
