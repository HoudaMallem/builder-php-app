<?php
class  Controller{ 
	public $request;
	private $vars =array();
	public $layout;
	public $rended=false;
	function __construct($request){
		$this->request=$request;
			$this->session = new Session();

				if($request->langue=='fr'){
					$this->session->getSession("idlangueN",'1');
					$this->session->getSession("langue",'fr');
				}elseif($request->langue=='en'){
					$this->session->getSession("idlangueN",'2');
					$this->session->getSession("langue",'en');
				}else{
					$this->session->getSession("idlangueN",'1');
					$this->session->getSession("langue",'fr');
				}
				require WEBROOT.DS.'config'.DS.'langue'.DS.$this->session->printSession("langue").'.php';
				require WEBROOT.DS.'config'.DS.'aide.php';

			
		
	}

	public function render($view){
		if($this->rended===false){
		extract($this->vars);
			$view=WEBROOT.DS.'view'.$view.'.php';

		ob_start();
		if (file_exists($view)){
			require($view);
		}else{
			header("HTTP/1.0 404 NOT Found");
			$view1=WEBROOT.DS.'view'.DS.'errors'.DS.'404.php';
			require($view1);
			
		}
		$content_for_layout=ob_get_clean();

        require(WEBROOT.DS.'view'.DS.'layout'.DS.$this->layout.'.php');
		$this->rended=true;
		}
	}

	public function set($key , $value=null){
		if(is_array($key)){
			$this->vars += $key;
		}else{
		    $this->vars[$key]=$value;
	    }
	}


	public function loadModel($name){
		$file= WEBROOT.DS.'model'.DS.$name.'.php';
		require_once($file);
		return  new $name();
	}

}
?>