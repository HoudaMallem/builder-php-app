<?php
class  Dispatcher{ 
	var $request;
	function __construct(){
		$this->request = new Request();
		Router::parse($this->request->url,$this->request);
		if($this->request->url){
			if($this->request->chemain){	
				if($this->request->prefixes){
					$Module=$this->loadModule();
					if($Module){
						$actionfunction=$this->request->action;
						$Module->$actionfunction($this->request->chemain,$this->request->data);
						return $Module;
					}else{
						$this->error('le controller');
						
					}
				}else{
					$controller=$this->loadController();
					$actionfunction=$this->request->action;
					if($this->request->controller){
						if(in_array($this->request->action , get_class_methods($controller) )){
						//	$this->error('le controller');	
							$controller->$actionfunction($this->request->chemain);
						}else{
							//call_user_func_array(array($controller,$this->request->action),$this->request->params);
							$this->error('le controller');
						}
					}
					return $controller;
				}
			}else{
				if($this->request->langue){
					$this->pagesaccueil();
				}else{
					$this->error('le controller');	
				}
			}
		}else{
			$this->pagesaccueil();
		}

			
	}
	function error($msg){
		header("HTTP/1.0 404 NOT Found");
		$controller= new Controller($this->request);
		$controller->render('/errors/404');
		die();

	}
	function pagesaccueil(){
		$controller= new Controller($this->request);
		$page='/layout/page_accueil_'.$this->request->langue;
		$controller->render($page);
		

	}
	function loadController(){

			$name=ucfirst($this->request->controller).'Controller';
			$file= WEBROOT.DS.'controller'.DS.$name.'.php';
			if (file_exists($file)){
			require $file;

			$fileaction= new $name($this->request);
			$fileaction->session = new Session();
			return $fileaction;
		}else{
					$this->error('le controller');
					return false;
				}
				

	}

		function loadModule(){
			//if($this->request->chemain){
				$name=ucfirst($this->request->action).'Controller';
				$module=ucfirst($this->request->prefixes);
				$action=ucfirst($this->request->action);
				$file= WEBROOT.DS.'controller'.DS.$module.DS.$action.'.php';
				if (file_exists($file)){
					require($file);
					$fileaction= new $name($this->request);
					return $fileaction;
				}else{
					$this->error('le controller');
					return false;
				}
				
				
		
		//	}else{
		//		$this->pagesaccueil();
		//	}
	}

}
?>