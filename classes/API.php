<?php
require("config/DbConfig.php");
require("classes/DB.php");
class API{
	#protected $portal_counts =array();

	protected $db;
	protected $all_user_details=array();

	function __construct()
	{
		$this->db = new MySQLDatabase();
	}	

	function retrive_all_users(){

		$this->db->query("SELECT * from sag_users_table");
    	$rows = $this->db->resultSet();
    	foreach($rows as $rowno => $array){
    		array_push($this->all_user_details,$array);
    	}
    	return $this->all_user_details;

	}

	function insert_users($data){
		if(  (isset($data['name']) && $data['name']!="") && (isset($data['email']) && $data['email']!="") && (isset($data['phone']) && $data['phone']!="") ){
			$data['gender'] ='M';
			$sql = "INSERT INTO  sag_users_table(id,`name`, `email`, `phone`, `status`, `gender`, `sales`) values(null,'".$data['name']."','".$data['email']."','".$data['phone']."','".$data['status']."','".$data['gender']."','".$data['sale']."')";
			$res = $this->db->query($sql);
			$this->db->execute();
			return true;
		}
		return false;
	}

}

?>