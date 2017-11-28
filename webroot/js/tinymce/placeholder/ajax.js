//--------------------------------------------/////////
//-----connexion ajax  ---------////////


		
function xhr_connect(){
		var xhr=false;
		if(window.XMLHttpRequest){
				xhr= new XMLHttpRequest     
		}else if (window.ActiveXObject){
				var reussi=false
		 var iexhr= new array("Msxml2.XMLHTTP.7.0","Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0",
		 "Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP")
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

//--------------------------------------------/////////


//-----  ---------////////



//--------------------------------------------/////////


//-----l envoie des donnees autocompelation  ---------////////
function xhr_recuperationWilaya(arg,type,idp,comin){
		var objxhr=xhr_connect()
		if (objxhr){
				objxhr.onreadystatechange=function(){
						if(objxhr.readyState==4){
								if(objxhr.status==200){              
							 affichelistewilaya( objxhr.responseText,type,arg,idp,comin);
							//		 alert( objxhr.responseText,type,arg,idp,comin);
								}
						}
				}   
				var args=arg.value;
var donn="idpays="+args;    
var url="http://"+window.location.host+"/siehm/folder/Listewilaya.php"  
				objxhr.open("POST",url,true);
			 objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded charset=utf-8");
				objxhr.send(donn);
		
		} else {
				alert("soucis d'xml HTTPrequest")   
		}    
}





//--------------------------------------------/////////

//-------------affichage de la liste commune----------///
function affichelistewilaya(donnee,type,idp2,idp,comin){
	
		 var disadresse=document.getElementById("disadresse"); 
		 var disadresse1=document.getElementById("disadresse1"); 
	 if(idp2.value==1){
	 
				var donne1=eval('('+donnee+')');
				villeIN=document.getElementById("villeIN")
				if(villeIN){
					 disadresse.removeChild(villeIN);
				
			 }
		 
			 communeIN=document.getElementById("communeIN")
			 if(communeIN){
					 disadresse.removeChild(communeIN);

			 }
						villeINF=document.getElementById("villeINF")
				if(villeINF){
					 disadresse1.removeChild(villeINF);
				
			 }
		 
			 communeINF=document.getElementById("communeINF")
			 if(communeINF){
					 disadresse1.removeChild(communeINF);

			 }
				if(type=='normal'){
		 // var ville = document.getElementById("ville"); 
				
					var ville = document.createElement('select');
						disadresse.appendChild(ville);
							 ville.setAttribute("name",'ville');
					ville.setAttribute("id",'ville');
					 //ville.setAttribute("required");
					 ville.setAttribute("onchange","xhr_recuperationCommune(this,'normal');");

				}else if(type=='factur'){

						var ville = document.createElement('select');
					 // var ville = document.getElementById("villeF");
						 disadresse1.appendChild(ville);
								ville.setAttribute("name",'villeF');
					ville.setAttribute("id",'villeF');
					 ville.setAttribute("onchange","xhr_recuperationCommune(this,'factur');");
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
				targ=document.getElementById("communes")
				if(targ){
					disadresse.removeChild(targ);

				}
			 
			 targ2=document.getElementById("ville")
				if(targ2){
			 disadresse.removeChild(targ2);

				 }
				villeIN=document.getElementById("villeIN")
				if(villeIN){
						 disadresse.removeChild(villeIN);
				}
			
			 communeIN=document.getElementById("communeIN")
			 if(communeIN){
					disadresse.removeChild(communeIN);
				}
				

							var input = document.createElement('input');
								disadresse.appendChild(input);
								 input.setAttribute("type",'text');
								 input.setAttribute("name",'villeIN');
									input.setAttribute("id",'villeIN');
									input.setAttribute("class",'oblige');
									//input.setAttribute("required");
									 input.setAttribute("value",idp);

							var input2 = document.createElement('input');
								disadresse.appendChild(input2);
								 input2.setAttribute("type",'text');
								 input2.setAttribute("name",'communeIN');
									input2.setAttribute("id",'communeIN');
									input2.setAttribute("class",'oblige');
									//input2.setAttribute("required");
										input2.setAttribute("value",comin);
						 
					
					}else if(type=='factur'){

							 targ=document.getElementById("communesF")
				if(targ){
					disadresse1.removeChild(targ);

				}
			 
			 targ2=document.getElementById("villeF")
				if(targ2){
			 disadresse1.removeChild(targ2);

				 }
				villeINF=document.getElementById("villeINF")
				if(villeINF){
						 disadresse1.removeChild(villeINF);
				}
			
			 communeINF=document.getElementById("communeINF")
			 if(communeINF){
					disadresse1.removeChild(communeINF);
				}
				

							var input = document.createElement('input');
								disadresse1.appendChild(input);
								 input.setAttribute("type",'text');
								 input.setAttribute("name",'villeINF');
									input.setAttribute("id",'villeINF');
									input.setAttribute("class",'oblige');
									 input.setAttribute("value",idp);

							var input2 = document.createElement('input');
								disadresse1.appendChild(input2);
								 input2.setAttribute("type",'text');
								 input2.setAttribute("name",'communeINF');
									input2.setAttribute("id",'communeINF');
									input2.setAttribute("class",'oblige');
										input2.setAttribute("value",comin);
						 

					}
				 
			//  document.getElementById("ville").innerHTML='';
		}
}

//--------------------------------------------/////////


//-----l envoie des donnees autocompelation  ---------////////
function xhr_recuperationCommune(arg,type,idv){
		var objxhr=xhr_connect()
		if (objxhr){
				objxhr.onreadystatechange=function(){
						if(objxhr.readyState==4){
								if(objxhr.status==200){              
							 affichelistecommune( objxhr.responseText,type,idv,arg);
								
								}
						}
				}   
				var args=arg.value;
var donn="idwilaya="+args;   
var url1="http://"+window.location.host+"/siehm/folder/Listecommunes.php"      
				objxhr.open("POST",url1,true);
			 objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded charset=utf-8");
				objxhr.send(donn);
		
		} else {
				alert("soucis d'xml HTTPrequest")   
		}    
}





//--------------------------------------------/////////

//-------------affichage de la liste commune----------///
function affichelistecommune(donnee,type,idv,arg){
			 var disadresse=document.getElementById("disadresse");  
			 var disadresse1=document.getElementById("disadresse1");  
		if(arg){

		var donne1=eval('('+donnee+')');

		
				if(type=='normal'){
				//  var commune = document.getElementById("communes"); 
				if(document.getElementById("communes")){
					targ=document.getElementById("communes")
				 disadresse.removeChild(targ);
				 }
				var commune =  document.createElement('select');
					disadresse.appendChild(commune);
				 commune.setAttribute("name",'communes');
					commune.setAttribute("id",'communes');
					//commune.setAttribute("required");
				}else if(type=='factur'){
				 //  var commune = document.getElementById("communeF"); 
				 if(document.getElementById("communesF")){
					targ=document.getElementById("communesF")
				 disadresse1.removeChild(targ);
				 }
				 var commune =   document.createElement('select');
		
						disadresse1.appendChild(commune);
						commune.setAttribute("name",'communesF');
						commune.setAttribute("id",'communesF');
						
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
						 targ=document.getElementById("communes")
						 if(targ){
								 disadresse.removeChild(targ);

						 }
			}else if(type=='factur'){ 

							 targ=document.getElementById("communesF")
						 if(targ){
								 disadresse1.removeChild(targ);

						 }

			}

		}
}


function verifechamps(){

	var Raison_sociale = document.getElementById('Raison_sociale').value;
	var org_name = document.getElementById('org_name').value;
	var street = document.getElementById('street').value;

	var pays = document.getElementById('pays').value;
	if( document.getElementById('communes')){
			var communes = document.getElementById('communes').value;
	}
 if( document.getElementById('ville')){
	var ville = document.getElementById('ville').value;
}
if( document.getElementById('communeIN')){
			var communeIN = document.getElementById('communeIN').value;
	}
 if( document.getElementById('villeIN')){
	var villeIN = document.getElementById('villeIN').value;
}
	var Telephone = document.getElementById('Telephone').value;
		var Fax = document.getElementById('Fax').value;
	var Email = document.getElementById('Email').value;
	var Registre_de_commerce = document.getElementById('Registre_de_commerce').value;
	var Identification_fiscale = document.getElementById('Identification_fiscale').value;


	var first_name1 = document.getElementById('first_name1').value;
	var last_name1 = document.getElementById('last_name1').value;
	var mobil1 = document.getElementById('mobil1').value;
	var fonction1 = document.getElementById('fonction1').value;

	var first_name2 = document.getElementById('first_name2').value;
	var last_name2 = document.getElementById('last_name2').value;
	var mobil2 = document.getElementById('mobil2').value;
	var fonction2 = document.getElementById('fonction2').value;

	var signaletique = document.getElementById('signaletique').value;
	var facturation = document.getElementById('facturation');
	if(document.getElementById('etapesuivant')){
		var etapesuivant = document.getElementById('etapesuivant').value;
	}
	if(document.getElementById('modife')){
		var modife = document.getElementById('modife').value;
	}

	if(facturation.checked)
	{
		var facturation=facturation.value;


	}else{
		var facturation='non';
	}


	var Raison_socialeF = document.getElementById('Raison_socialeF').value;
	var org_nameF = document.getElementById('org_nameF').value;
	var streetF = document.getElementById('streetF').value;

	var paysF = document.getElementById('paysF').value;
	if( document.getElementById('communesF')){
			var communesF = document.getElementById('communesF').value;
	}
 if( document.getElementById('villeF')){
	var villeF = document.getElementById('villeF').value;
}
if( document.getElementById('communeINF')){
			var communeINF = document.getElementById('communeINF').value;
	}
 if( document.getElementById('villeINF')){
	var villeINF = document.getElementById('villeINF').value;
}
var FaxF = document.getElementById('FaxF').value;
	var TelephoneF = document.getElementById('TelephoneF').value;
	var EmailF = document.getElementById('EmailF').value;
	var Registre_de_commerceF = document.getElementById('Registre_de_commerceF').value;
	var Identification_fiscaleF = document.getElementById('Identification_fiscaleF').value;


	var first_name1F = document.getElementById('first_name1F').value;
	var last_name1F = document.getElementById('last_name1F').value;
	var mobil1F = document.getElementById('mobil1F').value;
	var fonction1F = document.getElementById('fonction1F').value;	
var req="Raison_sociale="+Raison_sociale+"&org_name="+org_name+"&street="+street+"&pays="+pays+"&communeIN="+communeIN+"&villeIN="+villeIN+"&communes="+communes+"&ville="+ville+"&Fax="+Fax+"&Telephone="+Telephone+"&Email="+Email+"&Registre_de_commerce="+Registre_de_commerce+"&Identification_fiscale="+Identification_fiscale+"&first_name1="+first_name1+"&last_name1="+last_name1+"&mobil1="+mobil1+"&fonction1="+fonction1+"&first_name2="+first_name2+"&last_name2="+last_name2+"&mobil2="+mobil2+"&fonction2="+fonction2+"&signaletique="+signaletique+"&facturation="+facturation ;  
//alert(req)

for (var i=0;i<20;i++){
	var id='position'+i;
	var name='position'+i;
	if(document.getElementById(id)){
		if (document.getElementById(id).checked == true){
			var position = document.getElementById(id).value;
			req =req+'&'+name+'='+position;
		}
	}
}
//if(facturation.checked)
	//{
		req =req+"&Raison_socialeF="+Raison_socialeF+"&org_nameF="+org_nameF+"&streetF="+streetF+"&paysF="+paysF+"&communeINF="+communeINF+"&villeINF="+villeINF+"&communesF="+communesF+"&villeF="+villeF+"&FaxF="+FaxF+"&TelephoneF="+TelephoneF+"&EmailF="+EmailF+"&Registre_de_commerceF="+Registre_de_commerceF+"&Identification_fiscaleF="+Identification_fiscaleF+"&first_name1F="+first_name1F+"&last_name1F="+last_name1F+"&mobil1F="+mobil1F+"&fonction1F="+fonction1F ;  
//	}
if(modife){
	req =req+"&modife="+modife
}
if(etapesuivant){
	"etapesuivant="+etapesuivant
}

xhr_recuperationvalide(req);




}
function xhr_recuperationvalide(requette){

		var objxhr=xhr_connect()
		if (objxhr){
				objxhr.onreadystatechange=function(){
						if(objxhr.readyState==4){
								if(objxhr.status==200){              
		 		 affichemessage(objxhr.responseText);
			//alert( objxhr.responseText);
					// alert(requette)
								}
							 
						}
				} 
				donne=requette  
			 // objxhr.open("POST","/cms3/folder/Listecommunes.php",true); 
var url2="http://"+window.location.host+"/siehm/folder/verifechamps.php"               
				 objxhr.open("POST",url2,true);
			 objxhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded charset=utf-8");
				objxhr.send(donne);
			
		} else {
				alert("soucis d'xml HTTPrequest")   
		} 
	 
}
/* verification */

function affichemessage(donnee){
if(donnee!=''){
		var donne1=eval('('+donnee+')');

	var table = new Array('org_name','pays','street','Telephone','Email','Registre_de_commerce','Identification_fiscale','Raison_sociale','signaletique')
/*if(document.getElementById("ERREUR_CHAMPS")){
var html=document.getElementById("ERREUR_CHAMPS").value
}*/
 html='Les informations (*) sont obligatoires';

	
	
			if(donne1.org_name){
				 document.getElementById("org_name").style.border= "1px solid red";
				 if(donne1.org_name!='ce champ est vide !'){
				 	  html=html+'<br/>'+donne1.org_name
				 }
				
			}else{
				if(document.getElementById("org_name")){
				 document.getElementById("org_name").style.border= "1px solid #ccc";
				}
			}
			 if(donne1.pays){
			 	if(document.getElementById("pays")){
	 			 	document.getElementById("pays").style.border= "1px solid red";
		 			 	if(donne1.pays!='ce champ est vide !'){
				 	   	html=html+'<br/>'+donne1.pays
			 		}
			 	}
			
			}else{
				if(document.getElementById("pays")){
				 document.getElementById("pays").style.border= "1px solid #ccc";
				 }

			} 
			if(donne1.ville){
				if(document.getElementById("ville")){
					 document.getElementById("ville").style.border= "1px solid red";
	 			 	if(donne1.ville!='ce champ est vide !'){
			 	  		 html=html+'<br/>'+donne1.ville
			 		}
				}
			
			}else{
if(document.getElementById("ville")){
				 document.getElementById("ville").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.villeIN){
				if(document.getElementById("villeIN")){
					 document.getElementById("villeIN").style.border= "1px solid red";
	 			 	if(donne1.villeIN!='ce champ est vide !'){
			 	  		 html=html+'<br/>'+donne1.villeIN
			 		}
				}
			}else{
if(document.getElementById("villeIN")){
				 document.getElementById("villeIN").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.communes){
				if(document.getElementById("communes")){
				 document.getElementById("communes").style.border= "1px solid red";
				 			 if(donne1.communes!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.communes
				 }
				}
		
			}else{
if(document.getElementById("communes")){
				 document.getElementById("communes").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.communeIN){
				if(document.getElementById("communeIN")){
				 document.getElementById("communeIN").style.border= "1px solid red";
				 			 if(donne1.communeIN!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.communeIN
				 }
				}
			}else{
if(document.getElementById("communeIN")){
				 document.getElementById("communeIN").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.street){
				 document.getElementById("street").style.border= "1px solid red";
				 			 if(donne1.street!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.street
				 }
			}else{
if(document.getElementById("street")){
				 document.getElementById("street").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.Email){
				 document.getElementById("Email").style.border= "1px solid red";
				 			 if(donne1.Email!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Email
				 }
			}else{
if(document.getElementById("Email")){
				 document.getElementById("Email").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.Telephone){
				 document.getElementById("Telephone").style.border= "1px solid red";
				 			 if(donne1.Telephone!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Telephone
				 }
			}else{
if(document.getElementById("Telephone")){
				 document.getElementById("Telephone").style.border= "1px solid #ccc";
				 }
			}
						 if(donne1.Fax){
				 document.getElementById("Fax").style.border= "1px solid red";
				 			 if(donne1.Fax!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Fax
				 }
			}else{
if(document.getElementById("Fax")){
				 document.getElementById("Fax").style.border= "1px solid #ccc";
				 }
			}

			 if(donne1.Registre_de_commerce){
				 document.getElementById("Registre_de_commerce").style.border= "1px solid red";
				 			 if(donne1.Registre_de_commerce!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Registre_de_commerce
				 }
			}else{
if(document.getElementById("Registre_de_commerce")){
				 document.getElementById("Registre_de_commerce").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.Identification_fiscale){
				 document.getElementById("Identification_fiscale").style.border= "1px solid red";
				 			 if(donne1.Identification_fiscale!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Identification_fiscale
				 }
			}else{
if(document.getElementById("Identification_fiscale")){
				 document.getElementById("Identification_fiscale").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.Raison_sociale){
				 document.getElementById("Raison_sociale").style.border= "1px solid red";
				 			 if(donne1.Raison_sociale!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Raison_sociale
				 }
			}else{
if(document.getElementById("Raison_sociale")){
				 document.getElementById("Raison_sociale").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.signaletique){
				 document.getElementById("signaletique").style.border= "1px solid red";
				 			 if(donne1.signaletique!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.signaletique
				 }
			}else{
if(document.getElementById("signaletique")){
				 document.getElementById("signaletique").style.border= "1px solid #ccc";
				 }
			}

			if(donne1.first_name1){
				 document.getElementById("first_name1").style.border= "1px solid red";
				 			 if(donne1.first_name1!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.first_name1
				 }
			}else{
if(document.getElementById("first_name1")){
				 document.getElementById("first_name1").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.last_name1){
				 document.getElementById("last_name1").style.border= "1px solid red";
				 			 if(donne1.last_name1!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.last_name1
				 }
			}else{
if(document.getElementById("last_name1")){
				 document.getElementById("last_name1").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.mobil1){
				 document.getElementById("mobil1").style.border= "1px solid red";
				 			 if(donne1.mobil1!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.mobil1
				 }
			}else{
if(document.getElementById("mobil1")){
				 document.getElementById("mobil1").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.fonction1){
				 document.getElementById("fonction1").style.border= "1px solid red";
				 			 if(donne1.fonction1!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.fonction1
				 }
			}else{
if(document.getElementById("fonction1")){
				 document.getElementById("fonction1").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.first_name2){
				 document.getElementById("first_name2").style.border= "1px solid red";
				 			 if(donne1.first_name2!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.first_name2
				 }
			}else{
if(document.getElementById("first_name2")){
				 document.getElementById("first_name2").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.last_name2){
				 document.getElementById("last_name2").style.border= "1px solid red";
				 			 if(donne1.last_name2!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.last_name2
				 }
			}else{
if(document.getElementById("last_name2")){
				 document.getElementById("last_name2").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.mobil2){
				 document.getElementById("mobil2").style.border= "1px solid red";
				 			 if(donne1.mobil2!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.mobil2
				 }
			}else{
if(document.getElementById("mobil2")){
				 document.getElementById("mobil2").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.fonction2){
				 document.getElementById("fonction2").style.border= "1px solid red";
				 			 if(donne1.fonction2!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.fonction2
				 }
			}else{
if(document.getElementById("fonction2")){
				 document.getElementById("fonction2").style.border= "1px solid #ccc";
				 }
			}

			//---facture--//
			if(donne1.org_nameF){
				 document.getElementById("org_nameF").style.border= "1px solid red";
				 if(donne1.org_nameF!='ce champ est vide !'){
				 	  html=html+'<br/>'+donne1.org_nameF
				 }
				
			}else{
if(document.getElementById("org_nameF")){
				 document.getElementById("org_nameF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.paysF){
			 	if(document.getElementById("paysF")){
	 			 	document.getElementById("paysF").style.border= "1px solid red";
		 			 	if(donne1.paysF!='ce champ est vide !'){
				 	   	html=html+'<br/>'+donne1.paysF
			 		}
			 	}
			
			}else{
if(document.getElementById("paysF")){
				 document.getElementById("paysF").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.villeF){
				if(document.getElementById("villeF")){
					 document.getElementById("villeF").style.border= "1px solid red";
	 			 	if(donne1.villeF!='ce champ est vide !'){
			 	  		 html=html+'<br/>'+donne1.villeF
			 		}
				}
			
			}else{
if(document.getElementById("villeF")){
				 document.getElementById("villeF").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.villeINF){
				if(document.getElementById("villeINF")){
					 document.getElementById("villeINF").style.border= "1px solid red";
	 			 	if(donne1.villeINF!='ce champ est vide !'){
			 	  		 html=html+'<br/>'+donne1.villeINF
			 		}
				}
			}else{
if(document.getElementById("villeINF")){
				 document.getElementById("villeINF").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.communesF){
				if(document.getElementById("communesF")){
				 document.getElementById("communesF").style.border= "1px solid red";
				 			 if(donne1.communesF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.communesF
				 }
				}

			}else{
if(document.getElementById("communesF")){
				 document.getElementById("communesF").style.border= "1px solid #ccc";
				 }
			} 
			if(donne1.communeINF){
				if(document.getElementById("communeINF")){
				 document.getElementById("communeINF").style.border= "1px solid red";
				 			 if(donne1.communeINF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.communeINF
				 }
				}
			}else{
if(document.getElementById("communeINF")){
				 document.getElementById("communeINF").style.border= "1px solid #ccc";
				 }
			} 
			
			if(donne1.streetF){
				 document.getElementById("streetF").style.border= "1px solid red";
				 			 if(donne1.streetF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.streetF
				 }
			}else{
if(document.getElementById("streetF")){
				 document.getElementById("streetF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.EmailF){
				 document.getElementById("EmailF").style.border= "1px solid red";
				 			 if(donne1.EmailF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.EmailF
				 }
			}else{
if(document.getElementById("EmailF")){
				 document.getElementById("EmailF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.TelephoneF){
				 document.getElementById("TelephoneF").style.border= "1px solid red";
				 			 if(donne1.TelephoneF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.TelephoneF
				 }
			}else{
if(document.getElementById("TelephoneF")){
				 document.getElementById("TelephoneF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.FaxF){
				 document.getElementById("FaxF").style.border= "1px solid red";
				 			 if(donne1.FaxF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.FaxF
				 }
			}else{
if(document.getElementById("FaxF")){
				 document.getElementById("FaxF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.Registre_de_commerceF){
				 document.getElementById("Registre_de_commerceF").style.border= "1px solid red";
				 			 if(donne1.Registre_de_commerceF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Registre_de_commerceF
				 }
			}else{
if(document.getElementById("Registre_de_commerceF")){
				 document.getElementById("Registre_de_commerceF").style.border= "1px solid #ccc";
				 }
			}
			 if(donne1.Identification_fiscaleF){
				 document.getElementById("Identification_fiscaleF").style.border= "1px solid red";
				 			 if(donne1.Identification_fiscaleF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Identification_fiscaleF
				 }
			}else{
if(document.getElementById("Identification_fiscaleF")){
				 document.getElementById("Identification_fiscaleF").style.border= "1px solid #ccc";
			}
			}
			 if(donne1.Raison_socialeF){
				 document.getElementById("Raison_socialeF").style.border= "1px solid red";
				 			 if(donne1.Raison_socialeF!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.Raison_socialeF
				 }
			}else{
if(document.getElementById("Raison_socialeF")){
				 document.getElementById("Raison_socialeF").style.border= "1px solid #ccc";
				 }
			} 
	

			if(donne1.first_name1F){
				 document.getElementById("first_name1F").style.border= "1px solid red";
				 			 if(donne1.first_name1F!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.first_name1F
				 }
			}else{
if(document.getElementById("first_name1F")){
				 document.getElementById("first_name1F").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.last_name1F){
				 document.getElementById("last_name1F").style.border= "1px solid red";
				 			 if(donne1.last_name1F!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.last_name1F
				 }
			}else{
if(document.getElementById("last_name1F")){
				 document.getElementById("last_name1F").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.mobil1F){
				 document.getElementById("mobil1F").style.border= "1px solid red";
				 			 if(donne1.mobil1F!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.mobil1F
				 }
			}else{
if(document.getElementById("mobil1F")){
				 document.getElementById("mobil1F").style.border= "1px solid #ccc";
				 }
			}
			if(donne1.fonction1F){
				 document.getElementById("fonction1F").style.border= "1px solid red";
				 			 if(donne1.fonction1F!='ce champ est vide !'){
				 	   html=html+'<br/>'+donne1.fonction1F
				 }
			}else{
if(document.getElementById("fonction1F")){
				 document.getElementById("fonction1F").style.border= "1px solid #ccc";
				 }
			}
			//---dddd------//
			if(donne1.position){
				 document.getElementById("position").style.border= "1px solid red";
	 			
				 	   html=html+'<br/>'+donne1.position

			}else{
if(document.getElementById("position")){
				 document.getElementById("position").style.border= "1px solid #ccc";
				 }
			}
			
			document.getElementById("blocerreur").style.display='block'
			document.getElementById("blocerreur").innerHTML=html
		
		}else{

			//document.form.submit();
			var form=document.getElementById("dicbtt")
						var etapesuivant = document.createElement('input');
						form.appendChild(etapesuivant);
							 etapesuivant.setAttribute("type",'hidden');
							  etapesuivant.setAttribute("name",'etape3');
							  etapesuivant.setAttribute("value",'VALIDER');
			document.forms['formep2'].submit();
			//this.form.submit()
		}
		

}
