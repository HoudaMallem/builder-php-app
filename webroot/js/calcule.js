function quantite(variable){  
var idGroupe=document.getElementsByName("idGroupe");
//  $('.message4').css( "display" ,  "none" );  
var taxeTable=new Array();  
var pourTable=new Array(); 
var nomTax=document.getElementsByName("nomTaxe") 
var pourcentage=document.getElementsByName("pourcentage") 
for (s=0 ;s<nomTax.length ; s++){    
  taxeTable.push(nomTax[s].value)   
  pourTable.push(pourcentage[s].value)         
} 
var chaine4= taxeTable.join(",");  
var chaine1 = pourTable.join(","); 
var q1=document.getElementById("quan3")  
var q2=document.getElementById("quan4") 
if(q1.value!=''){    
  nb1=parseFloat(q1.value) 
}else{   
  nb1=0 
} 
if(q2.value!=''){   
  nb2=parseFloat(q2.value)  
}else{   
  nb2=0 
}  
 var   number1=nb1+nb2
if(document.getElementById("quan5")){  
  document.getElementById("quan5").value=q1.value
} 
if(document.getElementById("quan6")){  
  document.getElementById("quan6").value=q1.value
}

if(document.getElementById("quan35")){   
  document.getElementById("quan35").value=q1.value 
}
 jQuery(document).ready(function(){
  // verifier amenagement basic
   if(variable=='5'){     
    if(q1.value==''){       
      alert('Aménagement valable uniquement pour les espaces intérieurs')  
      jQuery("#champradio5").attr('checked', false);    
    }else if(q1.value<18){     
      alert('La surface minimale est de 18 m²')    
      jQuery("#champradio5").attr('checked', false);     
    }  
  }  
  // verifier amenagement confor
  if(variable=='6'){    
    if(q1.value==''){    
      alert('Aménagement valable uniquement pour les espaces intérieurs')   
      jQuery("#champradio6").attr('checked', false);  
    }else if(q1.value<36){      
      alert('La surface minimale est de 36 m²')     
      jQuery("#champradio6").attr('checked', false);    
    }    
  }   
// verifier    
  if(variable=='36'){   
    if(q1.value<55){      
      alert('Pour cette option vous devez r\351server une surface int\351rieure de 54 m2 au minimum') 
      jQuery("#champradio36").attr('checked', false); 
    }   
  } 
  // verifier 
  if(variable=='9'){   
    if(q1.value<18){  
      alert('Pour cette option vous devez r\351server une surface int\351rieure de 18m2 au minimum')
      jQuery("#champradio9").attr('checked', false);    
    }
  } 
  // verifier 
  if(variable=='10'){  
    if(q1.value<36){       
      alert('La surface minimale est de 36 m²')       
      jQuery("#champradio10").attr('checked', false);  
    }  
  }  
    //});
         //if(q1.value>=18){  
  if(document.getElementById("quan75")){   
    if(jQuery('.click5').is(":checked")){     
      document.getElementById("quan75").firstChild.nodeValue=q1.value;  
    }else{    
      document.getElementById("quan75").firstChild.nodeValue="";    
    } 
  }  
  if(document.getElementById("quan76")){  
    if(jQuery('.click6').is(":checked")){ 
      document.getElementById("quan76").firstChild.nodeValue=q1.value;  
    }else{ 
      document.getElementById("quan76").firstChild.nodeValue="" ;  
    } 
  } 
  if(document.getElementById("quan735")){   
    if(jQuery('.click35').is(":checked")){ 
      document.getElementById("quan735").firstChild.nodeValue=q1.value; 
    }else{ 
      document.getElementById("quan735").firstChild.nodeValue="" ;   
    }    
  }
     /*  }else{ 
      if(document.getElementById("quan75")){   
       if(jQuery('.click5').is(":checked")){   
           document.getElementById("quan75").firstChild.nodeValue="";    
              jQuery("#champradio5").attr('checked', false);    
              } 
               }  if(document.getElementById("quan76")){   
                if(jQuery('.click6').is(":checked")){   
                   document.getElementById("quan76").firstChild.nodeValue="" ;    
                      jQuery("#champradio6").attr('checked', false);   
                       } 
                        }  if(document.getElementById("quan735")){  
                          if(jQuery('.click35').is(":checked")){ 
                           document.getElementById("quan735").firstChild.nodeValue="" ;  
                            jQuery("#champradio35").attr('checked', false);    
                            }    
                            } jQuery("#champradio9").attr('checked', false);  
                            jQuery("#champradio10").attr('checked', false);  
    
      }*/ 
 /* if(number1>0){  
    if(document.getElementById("quan78")){   
      if(jQuery('.click8').is(":checked")){  
        document.getElementById("quan78").firstChild.nodeValue=number1;
      }else{ 
        document.getElementById("quan78").firstChild.nodeValue=""   
      }   
    }  
    if(document.getElementById("quan77")){    
      if(jQuery('.click7').is(":checked")){ 
        document.getElementById("quan77").firstChild.nodeValue=number1;   
      }else{ 
        document.getElementById("quan77").firstChild.nodeValue="" ;   
      }     
    }
  }else{ 
    if(document.getElementById("quan78")){
      if(jQuery('.click8').is(":checked")){ 
        document.getElementById("quan78").firstChild.nodeValue=""  
        jQuery("#champradio8").attr('checked', false);   
      }   
    }  
    if(document.getElementById("quan77")){    
      if(jQuery('.click7').is(":checked")){          
        document.getElementById("quan77").firstChild.nodeValue="" ;        
        jQuery("#champradio7").attr('checked', false);    
      }    
    }       
  } */
}); 
  var articles=new Array();
  var articlesId=new Array();
  var quantTable=new Array();
  var prixTable=new Array();   
  for (i=0 ;i<idGroupe.length ; i++){ 
    var articlesId1=new Array(); 
    var quantTable1=new Array();
    var prixTable1=new Array(); 
    var idCategorie="idCategorie"+idGroupe[i].value
    var typeCategorie="typeCategorie"+idGroupe[i].value 
    var idCateggorie=document.getElementsByName(idCategorie) 
    var typeCategorie=document.getElementsByName(typeCategorie) 
      for (k=0 ;k<idCateggorie.length ; k++){  
        var articlesId2=new Array(); 
        var quantTable2=new Array();
        var prixTable2=new Array();  
        var idArticle="idArticle"+idCateggorie[k].value 
        var prix="prix"+idCateggorie[k].value 
        var quant="quant"+idCateggorie[k].value 
        var idArticle=document.getElementsByName(idArticle) 
        var prix=document.getElementsByName(prix) 
        var quant=document.getElementsByName(quant) 
        for (t=0 ;t<quant.length ; t++){   
          var table="table"+idArticle[t].value 
          if(typeCategorie[k].value==0){   
            if(quant[t].value!=''){ 
              if(k==1 && t==0){  
                if(q1.value < 18 && variable=='3'){  
                  alert('vous devez réserver une surface intérieure de 18 m² au minimum') 
                  var totalN=document.getElementById("collonA3")  
                  totalN.value=""; 
                  q1.value="";
                  return false   
                } 
              }else if(k===1 && t===1){ 
                if(q2.value < 36 && variable=='4'){
                  alert('vous devez réserver une surface Extérieure de 36 m² au minimum')   
                  var totalN2=document.getElementById("collonA4")                             
                  var totalN22=document.getElementById("collonA6")                             
                  var totalN23=document.getElementById("collonA10")                    
                  totalN2.value="";                    
                  totalN22.value="";                    
                  totalN23.value="";                   
                  q2.value="";                  
                  document.getElementById("champradio6").checked= false;                  
                  document.getElementById("champradio10").checked= false;                                      
                  return false                                  
                }             
              }           
              if(isNaN(quant[t].value )){                    
                alert("Merci d'utiliser des chiffres seulement");                  
                var totalN44=document.getElementById("collonA"+variable)                     
                totalN44.value="";                  
                return false           
              }                
              var table=new Array();             
              articlesId1.push(idArticle[t].value)            
              quantTable1.push(quant[t].value)            
              prixTable1.push(prix[t].value)                                   
              articlesId.push(idArticle[t].value)          
              quantTable.push(quant[t].value)           
              prixTable.push(prix[t].value)                                   
              articlesId2.push(idArticle[t].value)            
              quantTable2.push(quant[t].value)            
              prixTable2.push(prix[t].value)       
            }                
          }else if(typeCategorie[k].value==1){                     
            jQuery(document).ready(function(){             
              var quant1=document.getElementById("quan3")                                 
              var check=jQuery(':checked');                                              
              for (g=0 ;g<check.length ; g++) {                            
                if(check[g].value==idArticle[t].value ){                                                          
                  if(k===2 && t===1){                              
                    if(q1.value < 18){                                                         
                      var totalN2=document.getElementById("collonA"+variable)                    
                      totalN2.value="";                                         
                      return false                              
                    }                          
                  }                           
                  if(k===4 && t===1){                            
                      if(q1.value < 36){                                                         
                      var totalN2=document.getElementById("collonA"+variable)                    
                      totalN2.value="";                                         
                      return false                               
                    }                           
                  }                              
                  if(k===4 && t===2){                                
                    if(q1.value < 54){                                                       
                      var totalN2=document.getElementById("collonA"+variable)                             
                      totalN2.value="";                                         
                      return false                              
                    }                            
                  }                            
                  if(k===2 && t===0){                             
                    if(q1.value < 18){                                                         
                      var totalN2=document.getElementById("collonA"+variable)                     
                      totalN2.value="";                                         
                      return false                               
                    }                          
                  }                                          
                  var table= new Array();                                 
                  articlesId.push(idArticle[t].value)                                
                  quantTable.push(quant[t].value)                               
                  prixTable.push(prix[t].value)                                                
                  articlesId1.push(idArticle[t].value)                
                  quantTable1.push(quant[t].value)               
                  prixTable1.push(prix[t].value)                               
                  articlesId2.push(idArticle[t].value)                
                  quantTable2.push(quant[t].value)                
                  prixTable2.push(prix[t].value)                           
                }                        
              }                                              
            });                                      
          }else if(typeCategorie[k].value==2){                       
            jQuery(document).ready(function(){             
              var quant1=document.getElementById("quan3")              
              var veri3=verification(quant[t].value,quant1.value)                      
              var check=jQuery(':checked');                                          
              for (g=0 ;g<check.length ; g++){                           
                if(check[g].value==idArticle[t].value  ){                            
                  var table=new Array();               
                  articles.push(table)                
                  articlesId.push(idArticle[t].value)              
                  quantTable.push(quant[t].value)               
                  prixTable.push(prix[t].value)                                              
                  articlesId1.push(idArticle[t].value)                
                  quantTable1.push(quant[t].value)                
                  prixTable1.push(prix[t].value)                                
                  articlesId2.push(idArticle[t].value)               
                  quantTable2.push(quant[t].value)               
                  prixTable2.push(prix[t].value)                           
                }                      
              }                        
            });                                    
          }                                  
        }             
        var idCate="total"+idCateggorie[k].value           
        var chaineB = articlesId2.join(",");     
        var chaine2B = quantTable2.join(",");    
        var chaine3B = prixTable2.join(",");     
        xhr_recuperation2(chaineB,chaine2B,chaine3B,idCate);      
      }     
      var chaineA = articlesId1.join(","); 
      var chaine2A = quantTable1.join(",");  
      var chaine3A = prixTable1.join(",");                                                                                        
//xhr_recuperation1(chaineA,chaine2A,chaine3A,chaine4,chaine1,idCategorie);                           
    }
  var chaine = articlesId.join(",");
  var chaine2 = quantTable.join(",");
  var chaine3 = prixTable.join(",");
  xhr_recuperation(chaine,chaine2,chaine3,chaine4,chaine1);
  jQuery(document).ready(function(){ 
    var qua1=document.getElementById("quan3") 
    var qua2=document.getElementById("quan4")   
    if(qua1.value>=18  ){        
      if(qua2.value>=36){       
        jQuery('#group2').css( "display" ,  "block" );             
      }else{      
        jQuery('#group2').css( "display" ,  "none" );   
      }  
    }else{     
      jQuery('#group2').css( "display" ,  "none" );  
    }   
  });
}
function xhr_connect(){  
  var xhr=false;   
  if(window.XMLHttpRequest){ 
    xhr= new XMLHttpRequest 
  }else if (window.ActiveXObject){
    var reussi=false     
    var iexhr= new array("Msxml2.XMLHTTP.7.0","Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0",     "Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP")       
    for (var i=0; i<iexhr.length && !ressui; i++){    
      try{             
        xhr= new ActiveXObject(iexhr[i])  
        reussi =true   
      }catch(e){   

      }       
    }   
  }   
  return xhr;
}
function xhr_recuperation(arg,arg1,arg2,arg3,arg4){    
  var objxhr=xhr_connect()   
  if (objxhr){       
    objxhr.onreadystatechange=function(){           
      if(objxhr.readyState==4){               
        if(objxhr.status==200){                   
          affiche(objxhr.responseText)               
        }            
      }       
    }              
    var donn="idArticle="+arg+"&quant="+arg1+"&prix="+arg2+"&taxe="+arg3+"&pourcentage="+arg4;       
    var url="https://"+window.location.host+"/siehm2017/folder/test5.php"          
    objxhr.open("POST",url,true);            
    objxhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");        
    objxhr.send(donn);       
  } else {        
    alert("soucis d'xml HTTPrequest")       
  }   
}
function xhr_recuperation1(arg1,arg11,arg21,arg31,arg41,arg51){    
  var objxhr=xhr_connect()   
  if (objxhr){        
    objxhr.onreadystatechange=function(){           
      if(objxhr.readyState==4){                
        if(objxhr.status==200){                
          affiche1(objxhr.responseText)                
        }            
      }       
    }              
    var donn="idArticle="+arg1+"&quant="+arg11+"&prix="+arg21+"&taxe="+arg31+"&pourcentage="+arg41+"&idCategorie="+arg51;         
    var url1="https://"+window.location.host+"/siehm2017/folder/test6.php"          
    objxhr.open("POST",url1,true);            
    objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");        
    objxhr.send(donn);       
  } else {        
    alert("soucis d'xml HTTPrequest")      
  }   
}
function xhr_recuperation2(arg2,arg12,arg22,arg32){    
  var objxhr=xhr_connect()    
  if (objxhr){        
    objxhr.onreadystatechange=function(){            
    if(objxhr.readyState==4){               
      if(objxhr.status==200){                      
        affiche2(objxhr.responseText)                
      }            
    }       
    }              
    var donn="idArticle="+arg2+"&quant="+arg12+"&prix="+arg22+"&idCat="+arg32;        
    var url2="https://"+window.location.host+"/siehm2017/folder/test7.php"         
    objxhr.open("POST",url2,true);            
    objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");        
    objxhr.send(donn);       
  }else {        
    alert("soucis d'xml HTTPrequest")      
  }   
}
function affiche(donnee){  
  var donne1=eval('('+donnee+')')
  var totalN=document.getElementsByName("totalN")
  for (y=0 ;y< totalN.length; y++){ 
    var  con=false;  
    for( var z in donne1 ){ 
      switch(z){   
        case "articles" :     
        for (p=0 ;p< donne1[z].length && !con; p++){  
          var collon="collonA";            
          var id=donne1[z][p].articl.idArtic;            
          var idA=collon+id;     
          if(totalN[y].getAttribute("id")==idA){       
            var dat=donne1[z][p].articl.totalArticle        
            //variable1 = typeof dat;       
            //var val=number_space(dat)       
            totalN[y].value=number_space(dat)                    
            con=true;     
          }else if(totalN[y].getAttribute("id") !=idA){        
            totalN[y].value=''      
          }      
        }     
      }     
    } 
  }       
  var totalGeneral=document.getElementById("totalGeneral")    
  if(totalGeneral){    
    totalGeneral.firstChild.nodeValue=''    
    totalGeneral.firstChild.nodeValue=number_space(donne1.soustotal)  
  }     
  var taxe=document.getElementById("taxe")    
  taxe.firstChild.nodeValue=''  
  taxe.firstChild.nodeValue=number_space(donne1.taxe)   
  var ttc=document.getElementById("ttc")    
  ttc.firstChild.nodeValue=''    
  ttc.firstChild.nodeValue=number_space(donne1.ttc)    
  var raporttotal=document.getElementById("raporttotal")     
  raporttotal.firstChild.nodeValue=''  
  raporttotal.firstChild.nodeValue=number_space(donne1.ttc)       
  var raporttotal1=document.getElementById("raporttotal1")    
  raporttotal1.firstChild.nodeValue=''  
  raporttotal1.firstChild.nodeValue=number_space(donne1.ttc) 
}

function affiche1(donnee){  
  var donne1=eval('('+donnee+')')   
  var idgroup='totalGeneral1'+donne1.idCategorie    
  var totalGeneral=document.getElementById(idgroup)  
  if(totalGeneral){   
    totalGeneral.firstChild.nodeValue=donne1.soustotal  
  }  
  var taxe='taxe1'+donne1.idCategorie    
  var totalGeneral=document.getElementById(taxe)    
  totalGeneral.firstChild.nodeValue=donne1.taxe  
  var ttc1='ttc1'+donne1.idCategorie   
  var totalGeneral=document.getElementById(ttc1)    
  totalGeneral.firstChild.nodeValue=donne1.ttc
}
function affiche2(donnee){ 
  var donne1=eval('('+donnee+')')     
  var idCategorie=donne1.idCat    
  var totalGeneral=document.getElementById(idCategorie)    
  totalGeneral.value=number_space(donne1.soustotal)  
}
function number_space(number1){
  number1=number1.toString()  
  if(number1.length>1){ 
    number1=(10*number1)/10 
    number2=number1.toFixed(2)  
    number=number2.toString()     
    var chaine=number.length -3     
    if(chaine >6){    
      var resu= number[0]+' '+number[1]+number[2]+number[3]+' ';       
      for (k=4; k < number.length ; k++) {       
        resu =resu+number[k];       
      }           
    }else if(chaine>5 && chaine <= 6){    
      var resu= number[0]+number[1]+number[2]+' ';        
      for (k=3; k < number.length ; k++) {        
        resu =resu+number[k];       
      }          
    }else if(chaine==5){    
      var resu= number[0]+number[1]+' ';   
      for ( k=2; k < number.length ; k++) {       
        resu =resu+number[k];      
      }        
    }else if(chaine==4){    
      var resu= number[0]+' ';    
      for ( k=1; k < number.length ; k++) {        
        resu =resu+number[k];         
      }        
    }else if(chaine <4){   
      var resu='';   
      for ( k=0; k < number.length ; k++) {       
        resu =resu+number[k];      
      } 
    }
    var typesociete=document.getElementById("typesociete").value 
    //resu=resu+','+number[number.length-2]+number[number.length-1]+'  '+typesociete  
    resu=resu+'  '+typesociete
  }else{
    resu=''
  }
  return resu
}
jQuery(document).ready(function(){  
//alert("salam")  
if(document.getElementById("quan3")){      
var qua1=document.getElementById("quan3")      
/*   if(qua1.value>=18  ){       
if(document.getElementById("quan4")){          
var qua2=document.getElementById("quan4")      
if(qua2.value>=36){        
jQuery('#group2').css( "display" ,  "block" );              
}else{       
jQuery('#group2').css( "display" ,  "none" );     
}   
}   
}else{      
jQuery('#group2').css( "display" ,  "none" );     }*/  
} 
});
