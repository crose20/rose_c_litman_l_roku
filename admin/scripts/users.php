<?php 

//this code makes sure that the roku app is able to pull in all of the info from the users section of the db

    if (isset($_GET['allusers'])) {
        include('connect.php');

        $query = 'SELECT * FROM tbl_user';
        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute();
        $users = array();

        while($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)) {
            $currentuser =  array();
            $currentuser['id'] = $user['user_id'];
            $currentuser['username'] = $user['user_name']; //name
            $currentuser['admin'] = $user['user_admin']; //administration #
            $currentuser['access'] = $user['user_access']; 
            $currentuser['avatar'] = $user['user_avatar']; //image of an avatar if that user has uploaded one
            $users[] = $currentuser;
        }

        echo json_encode($users);
    }