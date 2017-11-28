<?php
class  conf{


static $databases=array(
	'default' => array(

		'host' => 'localhost',
		'database' => 'base06/01/2013',
		'login' => 'root',
		'passwoed' => 'root',
		)
	);

}

Router::prefix('com_mb' , 'members');
Router::prefix('com_admin' , 'admin');


Router::$listecontrollor=array(
       array(
        'fr'=>'inscription',
        'en'=>'inscription'
        ),
       array(
        'fr'=>'espace_exposant',
        'en'=>'espace_exposant'
        )
       
	); 


?>