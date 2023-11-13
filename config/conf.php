<?php
class  conf{
/***

database configuration 

***/

static $databases=array(
	'default' => array(
        'host' => 'localhost',
		'database' => 'table',
		'login' => 'login',
		'password' => 'password',
		)
	);

}
/***
default prefix configuration 

***/
Router::prefix('MH_AUTHO' , 'login');

/***
define the default list of all dynamic components used
***/
Router::$listecontrollor=array(
       array(
        'fr'=>'booking',
        'en'=>'booking'
        )
       
	); 


?>
