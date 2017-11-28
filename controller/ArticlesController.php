<?php
class  ArticlesController extends Controller{ 

public function index($name){




    $this->set(array('langue' => $langue,'contenumeta' => $contenumeta , 'contenupage' => $contenu ,'controller' => $this->request->titre ,'action' => $this->request->soustitre ));
    $this->render('/article/index');
}


}
?>
