<?php
class  conf{
/***
configuration de la base des donnes  

***/

static $databases=array(
	'default' => array(
        'host' => 'localhost',
		'database' => 'table',
		'login' => 'login',
		'passwoed' => 'password',
		)
	);

}
/***
configure les prefix 

***/
Router::prefix('MH_AUTHO' , 'login');

/***
Liste toute les composant dynamique en deux langue

***/
Router::$listecontrollor=array(
       array(
        'fr'=>'booking',
        'en'=>'booking'
        )
       
	); 


?>
