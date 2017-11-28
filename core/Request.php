<?php
class  Request{ 
   public $url;
   public $prefixes=false;
   public $data=false;

	function __construct(){
	
		//$this->url = $_SERVER['REQUEST_URI'];

    $this->url = $_GET['url'];


      if(!empty($_POST)){
      $this->data= new stdClass();
      foreach ($_POST as $key => $value) {
        $this->data->$key=$value;  
      }
    }
   // print_r($_POST);

		
	}





}
?>