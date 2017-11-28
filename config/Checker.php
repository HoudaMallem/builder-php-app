<?php

/****
définir toute les module de ton site
une module c'est d'une rebrique du site créer dynamiquement  

******/

$modul = [{"reference":"Md1","meta_titre":"meta1, meta2","meta_mots":" ","meta_disc":""}]
foreach ($modul as $modul) {
	$table = array();
	Router::prefixAction($modul['reference'],$modul['nom_modul']);
	$table[]=$modul['meta_titre'];
	$table[]=$modul['meta_mots'];
	$table[]=$modul['meta_disc'];
	Router::Metatable($modul['reference'],$table);


}

$modelchecked->table='menu';
$menu=$modelchecked-> find(3,'id_ges');
/****
définir le lien de ton site avec les url en fr et en


******/
foreach ($menu as $menu) {
	$table=array(
		'fr'=>trim($menu['link_fr']),
		'en'=>trim($menu['link_en'])
		);
	Router::formaturl($table);
}

?>