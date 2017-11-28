jQuery.noConflict(); 
//alert(window.location.host)
jQuery(document).ready(function(){
    if(document.getElementById('idville')){
        var idv=document.getElementById('idville').value;
         var idC=document.getElementById('idcommune').value;
        
        xhr_recuperationWilaya(document.getElementById('idpays'),'normal',idv,'');
        xhr_recuperationCommune(document.getElementById('idville'),'normal',idC)
    }
    if(document.getElementById('idvilleF')){
        var idvF=document.getElementById('idvilleF').value;
         var idCF=document.getElementById('idcommuneF').value;
        
        xhr_recuperationWilaya(document.getElementById('idpaysF'),'factur',idvF,'');
        xhr_recuperationCommune(document.getElementById('idvilleF'),'factur',idCF)
    }

   if(document.getElementById('pays')){
     if(document.getElementById('pays').value!=''){
      if(document.getElementById('villeIN1') &&  document.getElementById('villeIN1').value!=''){
             var villeIN1=document.getElementById('villeIN1').value;
         var communeIN1=document.getElementById('communeIN1').value;

              xhr_recuperationWilaya(document.getElementById('pays').value,'normal',villeIN1,communeIN1)

              }
     }
   }
    if(document.getElementById('paysF')){
     if(document.getElementById('paysF').value!=''){
      if(document.getElementById('villeIN1F') &&  document.getElementById('villeIN1F').value!=''){
             var villeIN1F=document.getElementById('villeIN1F').value;
         var communeIN1F=document.getElementById('communeIN1F').value;

              xhr_recuperationWilaya(document.getElementById('paysF').value,'factur',villeIN1F,communeIN1F)

              }
     }
   }
 if(document.getElementById('activenomenclature')){     
  if(document.getElementById('activenomenclature').value!=''){
     var id='#idactive'+document.getElementById('activenomenclature').value;
          jQuery(id).css('display','block')
     }
   }


    if(jQuery(".facturation").is(":checked")){
        jQuery(".divfacturation").show();  
    }else{
       jQuery(".divfacturation").hide(); 
    }


/*-------------le menu ------------------*/

 jQuery('#listeproduit li').click(function(){ 
   jQuery('#listeproduit li ul').hide();
   if(jQuery('#listeproduit li a').css('color','#ff6600')){
      jQuery('#listeproduit li a').css('color','#ffffff');
   }
 jQuery('ul',this).show();
 jQuery('a',this).css('color','#ff6600');
   jQuery('#listeproduit ul a').css('color','#222222');
     jQuery('#listeproduit ul a').css('background-color','#E3E3E3');

 });
 jQuery('.accesdirecte div').mouseover(function(){ 
    jQuery('.divshow',this).slideUp();
    jQuery('.divhind',this).slideDown();
    
 });
  jQuery('.accesdirecte div').mouseleave(function(){ 
    jQuery('.divshow',this).slideDown();
    jQuery('.divhind',this).slideUp();
    
 }); 
   jQuery('#tabs li').click(function(){ 
    jQuery('#tabs li a').css('border-radius','10px');
     jQuery('#tabs li a').css('background-color','#ccc');
    
      jQuery('#tabs li a').css('outline','none');
      


      jQuery('a',this).css('border-radius','10px');
      jQuery('a',this).css('background-color','#000000');
      jQuery('a',this).css('outline','none');
     


 });
 //  
 jQuery('.nomenclaturechecked').click(function(){ 
  var checked=jQuery(':checked'); 
  var nb=checked.length
 /* if(nb>10){
    alert("Vous avez dépassé les 10 choix possible\n you have exceeded the 10 possible choices")
    return false
  }else{
     //  var countnomenclatur=document.getElementById("countnomenclatur")
    //  countnomenclatur.firstChild.nodeValue=nb
      jQuery('.countnomenclatur').html(nb)

  }
   */
 });
  jQuery('.codestand1').focus(function(){ 
    if(jQuery('.reservestand1').is(":checked")==false){
      //alert("veuillez cocher la case " )
      //return false
    }
  });
    jQuery('.reservestand1').click(function(){ 

  });
  jQuery('.reservestand2').click(function(){ 
  });
  jQuery('.codestand2').focus(function(){ 
    if(jQuery('.reservestand2').is(":checked")==false){
     // alert("veuillez cocher la case " )
     // return false
    }
  });
  
    jQuery('.valid1').click(function(){ 

    if(jQuery('.reglementG').is(":checked")==false){
       alert("veuillez cocher la 1er case pour accepter le règlement général du salon " )
       return false
    }
    if(jQuery('.reglementG1').is(":checked")==false){
       alert("veuillez cocher la 2eme case pour accepter le règlement général du salon " )
       return false
    }

  });


//-----open the footer div ------/////
  jQuery("#openplant").click(function(){
    
     if(jQuery('.footer').is(":hidden")){ 
        jQuery('.footer').slideDown(100);
      }else{
        jQuery('.footer').slideUp(100);
      }
  });
  jQuery(".onclik").click(function(){
        jQuery(".sousnomenclature1").slideUp("slow");

   
  });
//-----style liste nomenclature ------/////
    jQuery(".dynamique  h2").click(function(){
  jQuery(this).parent().find('div').slideUp("slow");

     if(jQuery("+ div" , this).is(":hidden")){ 
        jQuery("+ div" , this).slideDown("slow");
      }else{
        jQuery("+ div" , this).slideUp("slow");
      }
  });

    //-----style liste nomenclature ------/////

//-----affiche la partie facturation ------/////
  jQuery(".facturation").click(function(){
    if(jQuery(this).is(":checked")){
    //if(jQuery(this).val()=="oui"){
      jQuery(".divfacturation").show();
    }else{
       jQuery(".divfacturation").hide();
    }
    //if(jQuery(this).val()=="non"){
    //  jQuery(".divfacturation").hide();
   // }
 
  });
//-----afficher les block de la page chiffre cles  ------/////

    jQuery(".chiffreclesclick").click(function(){
  jQuery(this).parent().find('div').slideUp("slow");
  jQuery('.plus').html('+')

     if(jQuery("+ div" , this).is(":hidden")){ 
        jQuery("+ div" , this).slideDown("slow");
        jQuery(this).find('.plus').html('-')
      }else{
        jQuery("+ div" , this).slideUp("slow");
        jQuery(this).find('.plus').html('+')
      }
  });
    //---------/////
     jQuery(".seconnecte").click(function(){

     if(jQuery(".divconnecte").is(":hidden")){ 
        jQuery(".divconnecte").slideDown("100");
      }else{
        jQuery(".divconnecte").slideUp("100");
      }
  });

          jQuery(".titreproduit").click(function(){
              jQuery(".a2").hide();
            jQuery(".a1").show();
               jQuery('.titreproduit').css('background-color','#333');
               jQuery('.titreproduit').css('color','#fff');
                jQuery('.titrestand').css('background-color','#fff');
               jQuery('.titrestand').css('color','#000');
          });
          jQuery(".titrestand").click(function(){
             jQuery(".a1").hide();
            jQuery(".a2").show();
                        jQuery('.titrestand').css('background-color','#333');
               jQuery('.titrestand').css('color','#fff');
                jQuery('.titreproduit').css('background-color','#fff');
               jQuery('.titreproduit').css('color','#000');
          
          });

      jQuery(".lienp1").click(function(){
        jQuery(".lienp1").css('color','#ff6600');
        jQuery(".lienp2").css('color','#000');
        jQuery(".lienp3").css('color','#000');
             jQuery(".p2").hide();
                  jQuery(".p3").hide();
            jQuery(".p1").show();
          
          });
      jQuery(".lienp2").click(function(){
         jQuery(".lienp2").css('color','#ff6600');
         jQuery(".lienp1").css('color','#000');
        jQuery(".lienp3").css('color','#000');
             jQuery(".p1").hide();
              jQuery(".p3").hide();
            jQuery(".p2").show();
          
          });
              jQuery(".lienp3").click(function(){
                 jQuery(".lienp3").css('color','#ff6600');
                 jQuery(".lienp2").css('color','#000');
                jQuery(".lienp1").css('color','#000');
             jQuery(".p1").hide();
              jQuery(".p2").hide();
            jQuery(".p3").show();
          
          });         
  jQuery(".nomexposantpro").click(function(){
    jQuery(".spanhind").slideUp("slow");
     if(jQuery("+ span" , this).is(":hidden")){ 
        jQuery("+ span" , this).slideDown("slow");
      }else{
        jQuery("+ span" , this).slideUp("slow");
      }
  });
  });


