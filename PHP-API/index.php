<?php
require("classes/API.php");
if(isset($_REQUEST['token'])){
		$api = new API();
		$token = $_REQUEST['token']; 
		header('Access-Control-Allow-Origin: *');
		header("Content-Type: application/json; charset=UTF-8");
		switch($token){
			case 'users':
				echo json_encode($api->retrive_all_users());
			break;
			case 'insert':
				header("Access-Control-Allow-Methods: POST");
				header("Access-Control-Max-Age: 3600");
				header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
				$_data = json_decode(file_get_contents("php://input"),true);
				echo json_encode($api->insert_users($_data));
			break;
			case 'update':
				header("Access-Control-Allow-Methods: GET");
				header("Access-Control-Allow-Credentials: true");
				header('Content-Type: application/json');
				$uid = isset($_GET['id']) ? $_GET['id'] : die();
				
			break;
		}
		
}		
?>
