<?php
class  Router{ 
	static $prefixes=array();
	static $prefixActions=array();
	static $listeurl=array();
	static $listecontrollor=array();
	static $metas=array();
	static function prefix($urlfront,$urlback){
		self::$prefixes[$urlfront]=$urlback;
	}
	static function prefixAction($urlfront,$urlback){
		self::$prefixActions[$urlfront]=$urlback;
	}
	static function formaturl($urlfront){
		self::$listeurl[]=$urlfront;
	}
	static function Metatable($urlfront,$table){
		self::$metas[$urlfront]=$table;
	}
	static function parse($url,$request){
		$url=trim($url,'/');
		$parames=explode('/',$url);
		if($parames['0']=='fr' or $parames['0']=='en'){
			$request->langue= $parames['0'];
		}else{
			$request->langue='fr';
		}
		if(!$url){
			$request->langue='fr';
		}
		if(!empty($parames['1'])){
	
			if(in_array($parames['1'], array_keys(self::$prefixes))){
						$request->titre=$parames['2'];
						$request->prefixes=self::$prefixes[$parames['1']];
						$request->action = isset($parames['2']) ? $parames['2'] : 'index' ;
						$request->chemain =DS.self::$prefixes[$parames['1']].DS.$parames['2']  ;
						$request->params = array_slice($parames,3);

			}else{
				$request->titre=$parames['1'];
				$request->soustitre=$parames['2'];
				$table=explode('_',$parames['2']);
				$request->controller= 'articles';
				if(in_array($table['0'], array_keys(self::$prefixActions))){
					$request->metatitre=self::$metas[$table['0']]['0'];
					$request->metamots=self::$metas[$table['0']]['1'];
					$request->metadisc=self::$metas[$table['0']]['2'];
					$request->action = self::$prefixActions[$table['0']];
				}else{		
					$request->action = 'index' ;
				}
				$request->chemain =DS.$parames['1'].DS.$parames['2']  ;
				$request->params = array_slice($parames,3);
			
			}
		

		}
		
		
	}
	static function langue_url($url,$langueN){

		$url=trim($url,'/');
		$parames=explode('/',$url);
		
		$langue= trim($parames['0']);

		$newurl = trim($parames['1']).'/'.trim($parames['2']);
		if($parames['3']){
				$newurl.='/'.trim($parames['3']);	
			}
			if($parames['4']){
				$newurl.='/'.trim($parames['4']);	
			}
		
		if(!in_array($parames['1'], array_keys(self::$prefixes))){
		if($newurl){
			foreach (Router::$listeurl as $listeurl) {
				if($newurl==$listeurl[$langue]){
					$formaturlnew=$langueN.'/'.$listeurl[$langueN];
					
				}		
			}
		}
		return $formaturlnew;
	
	}else{
		if($parames['2']){
			foreach (self::$listecontrollor as $listecontrollor) {
				if($parames['2']==$listecontrollor[$langue]){
					$param2=$listecontrollor[$langueN];
					
				}		
			}
		
		}
		$formaturlnew=$langueN.'/'.$parames['1'].'/'.$param2;
			if($parames['3']){
				$formaturlnew.='/'.$parames['3'];	
			}
			if($parames['4']){
				$formaturlnew.='/'.$parames['4'];	
			}
		return $formaturlnew;
		}
	}





}
?>