<?php 
class Model{
public $table ;
public $db='default' ;
static $connections= array() ;
//------sauvgarder et mis a jours  les donnes -------------------
    function __construct(){
      $conf=conf::$databases[$this->db];
        if(isset(Model::$connections[$this->db])){
            return true ;
        }
	$pdo = new PDO('mysql:host='.$conf['host'].';dbname='.$conf['database'], $conf['login'],  $conf['passwoed'],  array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        $pdo->setAttribute(PDO::FETCH_ASSOC );
            Model::$connections[$this->db] = $pdo;
        
      // echo 'j ai charge ma connection ';
    }
public function save($data,$id,$champ=null){
    if (isset($id)&&!empty($id)){
        $sql="UPDATE `".$this->table."` SET ";
        foreach($data as $k=>$v){
        $v=addslashes($v);
          $sql.="`$k`='$v',";
        }
        $sql=substr($sql,0,-1);
        if (is_array($id)){
        $sql.="where";
            foreach($id as $g=>$d){
             $d=addslashes($d);
            $sql.=" `$g`='$d' "." and ";
        }
        $sql=substr($sql,0,-4);
        }else{
            $sql.=" where `".$champ."`='".addslashes($id)."'";
        }
      //  return  $sql;
    }else{
        $sql="INSERT INTO `".$this->table."` (";
        foreach($data as $k=>$v){
          $sql.="`$k`,";
        }
        $sql=substr($sql,0,-1);
        $sql.=" )VALUES( ";
        foreach($data as $v){
            $f=addslashes($v);
            $sql.="'$f',";
        }
        $sql=substr($sql,0,-1);
        $sql.=")";
    }
    
    
     $bdd = Model::$connections[$this->db] ;
  
    $bdd->query($sql);
return $sql;
}
//---------------------------------------------------------
//------supprimer  donnes -------------------

public function supprimer($id="",$champ){
    $sql="delete FROM `".$this->table."` WHERE ";
    if (is_array($champ)){
        foreach($champ as $k=>$v){
         $v=addslashes($v);
            $sql.=" `$k`='$v'"." and";
        }
            $sql=substr($sql,0,-3);
    }else{
        $sql.="`".$champ."`='".addslashes($id)."'"; 
    }

      $bdd = Model::$connections[$this->db] ;
  
    $data=$bdd->query($sql) ;

}
//---------------------------------------------------------------------
//-----------------find des donne  dans une table ------------------------/-/

public function find($id_liste=null,$wherefield=null,$fieldOrder=null,$typecondition=null,$caractairlike=null,$champs=null){
    $result = array();
    
        if(isset($id_liste) and !empty($id_liste) and is_array($id_liste))
        {
        $condition ="where  ";
            foreach($id_liste as $key => $id){ 
                $condition.="`".$key."`='".addslashes($id);
                if($typecondition==0){
                $condition.="' and ";
                }elseif($typecondition==1){
                $condition.="'  or ";
                }
            }
                $condition=substr($condition,0,-4);
        }else if(isset($wherefield) && !empty($wherefield)){
            $condition="where `".$wherefield."`='".addslashes($id_liste)."'";
        }
        if(isset($id_liste) and !empty($id_liste)){
			if(isset($caractairlike) && !empty($caractairlike)){
				$condition.=" and `".$champs."` like '".addslashes($caractairlike)."%' ";
			}
		}else{
			if(isset($caractairlike) && !empty($caractairlike)){
				$condition.=" where `".$champs."` like '".addslashes($caractairlike)."%' ";
			}
		}
        if(isset($fieldOrder) and !empty($fieldOrder))
        {
        $order="  order by ".$fieldOrder;
        }
    $req="SELECT *  FROM `".$this->table."`  " .$condition.$order ;

    $bdd = Model::$connections[$this->db] ;
  
    $data=$bdd->query($req) ;

        while ($row= $data->fetch()) {
            $result[]=$row;
        }
    return  $result;
}

//----------------------

/*
public function verifecabinet($prenom,$nom){
    $result = array();
	$req="SELECT *
    from `entities` 
    LEFT OUTER JOIN `contactspool` ON ( `entities`.`key` = `contactspool`.`entity_key` ) 
    LEFT OUTER JOIN `contacts` ON ( `contacts`.`key` = `contactspool`.`contact_key` ) 
    LEFT OUTER JOIN `communes` ON ( `communes`.`code` = `entities`.`postal_code` ) 
    where  `entities`.`category_id`=1 and `entities`.`valide`='non'  and `contacts`.`first_name` like '%".addslashes($prenom)."%' and `contacts`.`last_name` like '%".addslashes($nom)."%'";    
    $data=mysql_query($req) or die('Erreur SQL !<br />'.$req.'<br />'.mysql_error());
        while ($row= mysql_fetch_array($data, MYSQL_ASSOC)) {
            $result[]=$row;
        }
    return  $result;

*/
//}
///--------------------------------------------------------------



public function verifecabinet($prenom,$nom){
    $result = array();
     $result2 = array();
	$req="SELECT *
    from `entities` 
    LEFT OUTER JOIN `contactspool` ON ( `entities`.`key` = `contactspool`.`entity_key` ) 
    LEFT OUTER JOIN `contacts` ON ( `contacts`.`key` = `contactspool`.`contact_key` ) 
    LEFT OUTER JOIN `communes` ON ( `communes`.`code` = `entities`.`postal_code` ) 
    where  `entities`.`category_id`=1 and `entities`.`valide`='non'  and `contacts`.`first_name` like '%".addslashes($prenom)."%' and `contacts`.`last_name` like '%".addslashes($nom)."%'";    
    $data=mysql_query($req) or die('Erreur SQL !<br />'.$req.'<br />'.mysql_error());
        while ($row= mysql_fetch_array($data, MYSQL_ASSOC)) {
            $result[]=$row;
        }
	   foreach ($result as $resul){
			if(isset($resul) and !empty($resul)){
				$resul["specialite"]=array();
				$req11='SELECT DISTINCT  `specialtie`.`name`
				FROM `specialtie`
				LEFT OUTER JOIN `specialtiespool` ON ( `specialtiespool`.`specialty_id` = `specialtie`.`id` ) 
				where `specialtiespool`.`key`="'.$resul["entity_key"].'"';
				$data11=mysql_query($req11) or die('Erreur SQL !<br />'.$req11.'<br />'.mysql_error());
				while ($row11= mysql_fetch_array($data11, MYSQL_ASSOC)) {
					$resul["specialite"][]=$row11;
				}
				
				$resul["telephon"]=array();
				$req12='SELECT DISTINCT  `attributespool`.`value`
				FROM `attributespool`
				where `attributespool`.`key`="'.$resul["entity_key"].'" and (`attributespool`.`attribute_id`=1 or `attributespool`.`attribute_id`=8)';
				$data12=mysql_query($req12) or die('Erreur SQL !<br />'.$req12.'<br />'.mysql_error());
				while ($row12= mysql_fetch_array($data12, MYSQL_ASSOC)) {
					$resul["telephon"][]=$row12;
				}
				
			}
		$result2[]=	$resul;		
		}
		
return  $result2;


}
static function load($name){
    require($name.'.php');
    return new $name();
}

//


public function find2($id_liste=null,$wherefield=null,$fieldOrder=null,$typecondition=null,$caractairlike=null,$champs=null){
    $result = array();
    
        if(isset($id_liste) and !empty($id_liste) and is_array($id_liste))
        {
        $condition ="where  ";
            foreach($id_liste as $key => $id){ 
                $condition.="`".$key."`='".addslashes($id);
                if($typecondition==0){
                $condition.="' and ";
                }elseif($typecondition==1){
                $condition.="'  or ";
                }
            }
                $condition=substr($condition,0,-4);
        }else if(isset($wherefield) && !empty($wherefield)){
            $condition="where `".$wherefield."` > '".addslashes($id_liste)."' and `".$champs."` < '".addslashes($caractairlike)."'";
        }

        if(isset($fieldOrder) and !empty($fieldOrder))
        {
        $order="  order by ".$fieldOrder;
        }
    $req="SELECT *  FROM `".$this->table."`  " .$condition.$order ;
    
    $data=mysql_query($req) or die('Erreur SQL !<br />'.$req.'<br />'.mysql_error());
        while ($row= mysql_fetch_array($data, MYSQL_ASSOC)) {
            $result[]=$row;
        }
    return  $result;
}





}
?>
