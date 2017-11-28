<?php
//phpinfo();
define('WEBROOT', dirname(__FILE__));
define('ROOT', dirname(WEBROOT));
define('DS',DIRECTORY_SEPARATOR);
define('CORE', WEBROOT.DS.'core');
define('BASE_URL', dirname(dirname($_SERVER['SCRIPT_NAME'])));
$lien='http://'.$_SERVER['HTTP_HOST'].'';
define('URL', $lien);

require CORE.DS.'includes.php';
new dispatcher();
?>
