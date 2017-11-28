<?php
class  Session{ 
    function __construct(){
        if(!isset($_SESSION)){
    	   session_start();
        }
    }
   public function Flash(){
    	if(isset($_SESSION['flash'])){
            $html='<h1>'.$_SESSION['flash']['message'].'</h1>';
            
             $_SESSION['flash']=array();
    	       return $html;

    	}
    }
     public function printSession($key){
      if(isset($_SESSION[$key])){  
        return $_SESSION[$key];
      }
    }
  	public function getSession($key,$value){
    		return $_SESSION[$key]=$value;
    }
    public function videSession($key){
            return $_SESSION[$key]='';
    }
    public function unsetSession($key){
             unset($_SESSION[$key]);
    }
    public function isSession($key){
      if($_SESSION[$key]){
        return true;
      }else{
        return false;
      }
    }

}
?>