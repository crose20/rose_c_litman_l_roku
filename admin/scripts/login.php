<?php 

function login($username, $password, $ip){
	require_once('connect.php');
	//Check if username exists

	$check_exist_query = 'SELECT COUNT(*) FROM tbl_user';
	$check_exist_query .= ' WHERE user_name = :username';

	$user_set = $pdo->prepare($check_exist_query);
	$user_set->execute(
		array(
			':username'=>$username
		)
	);


	if($user_set->fetchColumn()>0){
		//code so that the website is able to pull all of the usernames and passwords from the db
		$get_user_query = 'SELECT * FROM tbl_user WHERE user_name = :username';
		$get_user_query .= ' AND user_pass = :password';


		$get_user_set = $pdo->prepare($get_user_query);

		//binding the placeholders
		$get_user_set->execute(
			array(
				':username'=>$username,
				':password'=>$password
			)
		);

		while($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
			$id = $found_user['user_id'];
			$_SESSION['user_id'] = $id;
			$_SESSION['user_name'] = $found_user['user_name'];

			//Updating the user login IPs
			$update_ip_query = 'UPDATE tbl_user SET user_ip = :ip WHERE user_id = :id';
			$update_ip_set = $pdo->prepare($update_ip_query);
			$update_ip_set->execute(
				array(
					//':ip'=>$ip,
					':id'=>$id
				)
			);

			$user = array();

			$user['id'] = $found_user['user_id'];
			$user['username'] = $found_user['user_name'];
			$user['admin'] = $found_user['user_admin'];
			$user['access'] = $found_user['user_access'];

			// any additional information being pulled from the database is below
			return $user;
		}

		if(empty($id)){
			$message = 'Login has Failed!';
			return $message;
		}

		redirect_to('index.php');
	}else{
		$message = 'Login has Failed!';
		return $message;
	}
}

	function editUser($id, $fname, $username, $password, $email){
		include('connect.php');
		$update_user_query = 'UPDATE tbl_user SET user_fname=:fname, user_name=:username,';
		$update_user_query .=' user_pass=:password, user_email=:email';
		$update_user_query .=' WHERE user_id = :id';
		$update_user_set = $pdo->prepare($update_user_query);
		$update_user_set->execute(
			array(
				':fname'=>$fname,
				':username'=>$username,
				':password'=>$password,
				':email'=>$email,
				':id'=>$id
			)
		);
		//When update successfully, redirect user to index.php
		if($update_user_set->rowCount()){
			redirect_to('index.php');
		}else{
			//otherwise, return an error message
			$message = 'there has been an error. please try again...';
			return $message;
		}
	}
	function deleteUser($id) {
		include('connect.php');
		$delete_query = "DELETE FROM tbl_user WHERE user_id = :id";
		$delete_user_set = $pdo->prepare($delete_query);
		$delete_user_set->execute(
			array(
				':id'=>$id
			)
		);
		if($delete_query) {
			redirect_to("../index.php");
		}else{
			$message = "Something has gone terribly wrong!";
			return $message;
		}
	}