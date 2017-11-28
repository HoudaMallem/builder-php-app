 jQuery(document).ready(function(){
 $( ".sousnomenclature1  .specialh1" ).hover(function() {
  var color = $(this).parent('div').prev('h2').css( "background-color" );
  $(this).parent('div').find(".specialh1").css( 'background-color', "#ffffff");
  $(this).parent('div').find(".specialh1").css( 'color', "#000000");
  //alert($(this).parent('div').find(".specialh1"));
  $( this ).css( 'background-color', color);
  $( this ).css( 'color', "#ffffff");

});
 $( ".sousnomenclature1  .specialh2" ).hover(function() {
  var color = $(this).parent('div').prev('h2').css( "background-color" );
  $(this).parent('div').find(".specialh2").css( 'background-color', "#ffffff");
   $(this).parent('div').find(".specialh2").css( 'color', "#000000");
  $( this ).css( 'background-color', color);
  $( this ).css( 'color', "#ffffff");

});
 $( ".sousnomenclature1  .survol" ).hover(function() {
  var color = $(this).parent('div').prev('h2').css( "background-color" );
  $(this).parent('div').find(".survol").css( 'background-color', "#ffffff");
   $(this).parent('div').find(".survol").css( 'color', "#000000");
  $( this ).css( 'background-color', color);
  $( this ).css( 'color', "#ffffff");

});

    if(document.getElementById('idville')){
        var idv=document.getElementById('idville').value;
         var idC=document.getElementById('idcommune').value;

        xhr_recuperationWilayaV(document.getElementById('idpays'),'normal',idv,'');
        xhr_recuperationCommuneV(document.getElementById('idville'),'normal',idC);
    }
	 jQuery('#valide1').click(function(){ 
	 	 	var idcategorie=document.getElementsByName('idcategorie_visiteur')
	 	var k=0; 
 		for (i=0;i<idcategorie.length;i++)
		{
			if(idcategorie[i].checked)
			{
	           k++;             
			}
		}
 	 	var civilite=document.getElementsByName('civilite')
	 	var f=0; 
 		for (i=0;i<civilite.length;i++)
		{
			if(civilite[i].checked)
			{
	           f++;             
			}
		}
	 	if(jQuery('#nom').val()=='' || jQuery('#nom').val()=='Nom'){
	 		alert('Nom : champ obligatoire');
	 		return false
	 	}else if(jQuery('#prenom').val()=='' || jQuery('#prenom').val()=='Prénom'){

	 		alert('Prénom : champ obligatoire');
	 		return false
	 	}else if(k==0){

	 		alert('La catégorie : champ obligatoire');
	 		return false
	 	}else if(f==0){

	 		alert('La civilitée : champ obligatoire ');
	 		return false
	 	}


	

	 	 
	 });
 	jQuery('#valide2').click(function(){ 
 	//	alert('sd');
 	var cat=document.getElementById('categorievisiteur').value
 			var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i')
 		if(document.getElementById('position')){
 			var d=0
			for (var i=0;i<20;i++){
				var id='positionV'+i;
				var name='positionV'+i;
				if(document.getElementById(id)){
					if (document.getElementById(id).checked == true){
						d++
					}
				}
			}
 		}else{
 			var d=1
 		}
 	
 	 	var civilite=document.getElementsByName('civilite')
	 	var f=0; 
 		for (i=0;i<civilite.length;i++)
		{
			if(civilite[i].checked)
			{
	           f++;             
			}
		}

		
	 	if(jQuery('#tel').val()=='' || jQuery('#tel').val()=='Tél.'){
	 		alert('téléphone: champ obligatoire');
	 		return false
	 	}else if(isNaN(jQuery('#tel').val() ) ) {
	 		alert("Le téléphone saisie est invalide merci D'utiliser que des chiffres");
	 		return false
	 	}else if(jQuery('#mail').val()=='' || jQuery('#mail').val()=='Email'){

	 		alert('Email: champ obligatoire');
	 		return false
	 	}else if(jQuery('#idspecialiste').val()==''  && cat==1 ){

	 		alert('La spécialisté : champ obligatoire');
	 		return false


	 	}else if(jQuery('#fonction').val()==''  && cat==6  ){

	 		alert('La Fonction : champ obligatoire');
	 		return false

	 		
	 	}else if(jQuery('#organisme_visiteur').val()=='' || jQuery('#organisme_visiteur').val()=="Nom d'organisme"){

	 		alert("Le nom de l'organisme  : champ obligatoire");
	 		return false
	 	} else if(jQuery('#adresse').val()=='' || jQuery('#adresse').val()=='Adresse professionnelle'){

	 		alert("L'adresse : champ obligatoire");
	 		return false
	 	} else if(jQuery('#adresse').val()!=''){

	  		var  donne1=jQuery('#adresse').val().indexOf(" ");
	   
			var donne2=jQuery('#adresse').val().lastIndexOf(" ");
			
			if(donne2<0){
				alert("L'adresse saisie est invalide");
	 			return false
			
			}
	 	}
	 	if(jQuery('#pays_visiteur').val()=='' || jQuery('#pays_visiteur').val()=='--contry--'){

	 		alert('Le Pays : champ obligatoire');
	 		return false
	 	}else if(jQuery('#ville_visiteur').val()=='' ){

	 		alert('La ville : champ obligatoire');
	 		return false
	 	}else if(jQuery('#commune').val()=='' ){

	 		alert('La commune : champ obligatoire');
	 		return false
	 	}else if(jQuery('#ville_visiteur_N') && jQuery('#ville_visiteur_N').val()=='' ){

	 		alert('La ville : champ obligatoire');
	 		return false
	 	}else if(jQuery('#communeN') && jQuery('#communeN').val()=='' ){

	 		alert('La commune : champ obligatoire');
	 		return false
	 	}else if(d==0){

	 		alert('La Position : champ obligatoire');
	 		return false
	 	}
 	/*	if(reg.test(jQuery('#mail').val()))

			{
				return true
			}
		else
			{
				alert("L'Email saisie est invalide");
				return false
			}*/
	/*else if(jQuery('#fonction').val()=='' || jQuery('#fonction').val()=='Fonction'){

	 		alert('fonction');
	 		return false
	 	}*/

	 	 
	 });
 	jQuery('#valide3').click(function(){ 
 			var s=0
			for (var i=0;i<800;i++){
				var id='nomen'+i;
				var name='nomen'+i;
				if(document.getElementById(id)){
					if (document.getElementById(id).checked == true){
						s++
					}
				}
			}

		if(s==0){

	 		alert('activités');
	 		return false
	 	}
	 		

 		
	 });
 });


 	//-----l envoie des donnees autocompelation  ---------////////
function xhr_recuperationWilayaV(arg,type,idp,comin){
		var objxhr=xhr_connect()
		if (objxhr){
				objxhr.onreadystatechange=function(){
						if(objxhr.readyState==4){
								if(objxhr.status==200){              
							 affichelistewilayaV( objxhr.responseText,type,arg,idp,comin);
							//		 alert( objxhr.responseText,type,arg,idp,comin);
								}
						}
				}   
				var args=arg.value;
var donn="idpays="+args;    
var url="https://"+window.location.host+"/siehm2017/folder/Listewilaya.php"  
//var url="/siehmenligne/folder/Listewilaya.php" 
				objxhr.open("POST",url,true);
			 objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded charset=utf-8");
				objxhr.send(donn);
		
		} else {
				alert("soucis d'xml HTTPrequest")   
		}    
}
//--------------------------------------------/////////

//-------------affichage de la liste commune----------///
function affichelistewilayaV(donnee,type,idp2,idp,comin){
	
		 var disadresseV=document.getElementById("disadresseV"); 
	 if(idp2.value==1){
	 
				var donne1=eval('('+donnee+')');
				ville_visiteur=document.getElementById("ville_visiteur")
				if(ville_visiteur){
					 disadresseV.removeChild(ville_visiteur);
				}
		 
			 commune=document.getElementById("commune")
			 if(commune){
					 disadresseV.removeChild(commune);

			 }
	
				ville_visiteur_N=document.getElementById("ville_visiteur_N")
				if(ville_visiteur_N){
						 disadresseV.removeChild(ville_visiteur_N);
				}
			
			 communeN=document.getElementById("communeN")
			 if(communeN){
					disadresseV.removeChild(communeN);
				}	
				if(type=='normal'){
					var ville = document.createElement('select');
						disadresseV.appendChild(ville);
							 ville.setAttribute("name",'ville_visiteur');
							 ville.setAttribute("style",'height:35px;');
					ville.setAttribute("id",'ville_visiteur');
					 //ville.setAttribute("required");
					 ville.setAttribute("onchange","xhr_recuperationCommuneV(this,'normal');");

				}
			
		 
		ville.innerHTML='';
	 var option1 = document.createElement('option');
		 // option1.appendChild('------'); 
				option1.setAttribute("value",'');
				ville.appendChild(option1); 

	for (var y=0 ;y< donne1.nomcommune.length; y++){ 
		var option = document.createElement('option');
		var code=donne1.nomcommune[y].code;
		var name=donne1.nomcommune[y].name;
		var texte = document.createTextNode(name);
		option.appendChild(texte); 
		option.setAttribute("value",code);
		option.setAttribute("id",code);
				if(idp){
			
			if(idp==code){
				option.setAttribute("selected", 'selected');
			}
		}

		ville.appendChild(option); 
	

		}
		}else{

			if(type=='normal'){

				targ=document.getElementById("commune")
				if(targ){
					disadresseV.removeChild(targ);
				}
			 
			 targ2=document.getElementById("ville_visiteur")
				if(targ2){
			 disadresseV.removeChild(targ2);

				 }
				ville_visiteur_N=document.getElementById("ville_visiteur_N")
				if(ville_visiteur_N){
						 disadresseV.removeChild(ville_visiteur_N);
				}
			
			 communeN=document.getElementById("communeN")
			 if(communeN){
					disadresseV.removeChild(communeN);
				}		
					var input = document.createElement('input');
					disadresseV.appendChild(input);
					input.setAttribute("type",'text');
					input.setAttribute("name",'ville_visiteur_N');
					input.setAttribute("id",'ville_visiteur_N');
					input.setAttribute("class",'oblige');
					input.setAttribute("style",'height:35px; font-size:16px;');
					//input.setAttribute("required");
					input.setAttribute("value",idp);
                
                    input.setAttribute("placeholder",'City');

					var input2 = document.createElement('input');
					disadresseV.appendChild(input2);
					input2.setAttribute("type",'text');
					input2.setAttribute("name",'communeN');
					input2.setAttribute("id",'communeN');
					input2.setAttribute("class",'oblige');
					input2.setAttribute("style",'height:35px; font-size:16px;');
					//input2.setAttribute("required");
					input2.setAttribute("value",comin);	

                    input2.setAttribute("placeholder",'Location');                    
					}
				 
			//  document.getElementById("ville").innerHTML='';
		}
}

//--------------------------------------------/////////


//-----l envoie des donnees autocompelation  ---------////////
function xhr_recuperationCommuneV(arg,type,idv){
		var objxhr=xhr_connect()
		if (objxhr){
				objxhr.onreadystatechange=function(){
						if(objxhr.readyState==4){
								if(objxhr.status==200){              
							 affichelistecommuneV( objxhr.responseText,type,idv,arg);
								
								}
						}
				}   
				var args=arg.value;
var donn="idwilaya="+args; 
var url1="https://"+window.location.host+"/siehm2017/folder/Listecommunes.php"    
//var url1="/siehmenligne/folder/Listecommunes.php"      
				objxhr.open("POST",url1,true);
			 objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded charset=utf-8");
				objxhr.send(donn);
		
		} else {
				alert("soucis d'xml HTTPrequest")   
		}    
}





//--------------------------------------------/////////

//-------------affichage de la liste commune----------///
function affichelistecommuneV(donnee,type,idv,arg){
			  var disadresseV=document.getElementById("disadresseV");  
		if(arg){

		var donne1=eval('('+donnee+')');

		
				if(type=='normal'){
				//  var commune = document.getElementById("communes"); 
				if(document.getElementById("commune")){
					targ=document.getElementById("commune")
				 disadresseV.removeChild(targ);
				 }
				var commune =  document.createElement('select');
					disadresseV.appendChild(commune);
				 commune.setAttribute("name",'commune');
					commune.setAttribute("id",'commune');
					 commune.setAttribute("style",'height:35px;');
					//commune.setAttribute("required");
				}
				commune.innerHTML='';
		 var option1 = document.createElement('option');
		 // option1.appendChild('-- ----'); 
				option1.setAttribute("value",'');
				commune.appendChild(option1); 
		for (var y=0 ;y< donne1.nomcommune.length; y++){ 
				var option = document.createElement('option');
				var code=donne1.nomcommune[y].code;
				var name=donne1.nomcommune[y].name;
				var texte = document.createTextNode(name);
				option.appendChild(texte); 
				option.setAttribute("value",name);
				option.setAttribute("id",code);
		if(idv){
			
			if(idv==name){
				option.setAttribute("selected", 'selected');
			}
		}

				commune.appendChild(option); 
		

		}
		}else{
				 if(type=='normal'){  
						 targ=document.getElementById("commune")
						 if(targ){
								 disadresseV.removeChild(targ);

						 }
			}

		}
}
