<?php
class  ArticlesController extends Controller{ 

public function index($name){



    $model=$this->loadModel('Pages');
    $this->request->soustitre;
    $table=explode("_",$this->request->soustitre);

    $idpage=intval($table['0']);
    $page=$model->one_pages($idpage);
    $langue=$this->request->langue;
     $contenumeta=$page;
    $contenu=$page->$langue;
    $this->set(array('langue' => $langue,'contenumeta' => $contenumeta , 'contenupage' => $contenu ,'controller' => $this->request->titre ,'action' => $this->request->soustitre ));
    $this->render('/article/index');
}


}
?>
