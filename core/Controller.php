<?php
class  Controller{ 
	public $request;
	private $vars =array();
	public $layout;
	public $rended=false;
	public $datacalcule;
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
					$file = WEBROOT.DS.'config'.DS.'langue'.DS.$this->session->printSession("langue").'.php';
				require $file;
			 	$menu=$this->loadMenu($request->langue);
				$this->set(array('menu' => $menu));
				require_once WEBROOT.DS.'lib'.DS.'verification.php';
				$this->verife = new verification($this->request->data);
				require WEBROOT.DS.'config'.DS.'aide.php';

			
		
	}

	public function render($view){
		if($this->rended===false){
		extract($this->vars);
		//if(strpos($view ,'/')===0){
			$view=WEBROOT.DS.'view'.$view.'.php';

		//}else{
			//$view=WEBROOT.DS.'view'.DS.$this->request->controller.DS.$view.'.php';
		//}
		ob_start();
		if (file_exists($view)){
			require($view);
		}else{
			header("HTTP/1.0 404 NOT Found");
			$view1=WEBROOT.DS.'view'.DS.'errors'.DS.'404.php';
			require($view1);
			
		}
		$content_for_layout=ob_get_clean();
		if($this->request->prefixes and $this->request->prefixes=='admin'){
          
        }else{
           //$this->layout='default';   
        }
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
	public function seturl($parame1 , $parame2){
		//WEBROOT
	}
	public function loadMenu($langue){
			$this->menu=3;
			$model=$this->loadModel('Gestionnaire');
			$model->langue=$langue;
    		$menu=$model->Liste_menu_global($this->menu,0,1);
    		return $menu;
	}
	public function loadModel($name){
		$file= WEBROOT.DS.'model'.DS.$name.'.php';
		require_once($file);
		return  new $name();
	}

}
?>