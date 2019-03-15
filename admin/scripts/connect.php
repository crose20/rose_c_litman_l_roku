<?php 
$db_dsn = array(
	'host'=>'localhost',
	'dbname'=>'db_movies', //db that the website is connected to 
	'charset'=>'utf8'
);

$dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

//This is the DB credentials
$db_user = 'root';
$db_pass = 'root'; //take this off if you're on windows

try{
	$pdo = new PDO($dsn, $db_user, $db_pass);
}catch(PDOException $exception){
	echo 'You are experiencing a connection error'.$exception->getMessage();
	exit();
}