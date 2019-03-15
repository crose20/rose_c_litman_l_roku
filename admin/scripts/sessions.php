<?php //login and logout functions!!!!!! .......
	session_start();
	function confirm_logged_in(){
		if(!isset($_SESSION['user_id'])){
			redirect_to('admin_login.php');
		}
	}
	function logged_out(){ //when a user logs out redirect them to the main page of the website
		session_destroy();
		redirect_to('../admin_login.php');
	}