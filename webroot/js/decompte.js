 jQuery(document).ready(function(){
 	var launch =new Date(2017,02,02,10,00,00);
 	var days = jQuery('#days');
 	var hours = jQuery('#hours');
 	var minutes = jQuery('#minutes');
 	var seconds = jQuery('#seconds');

 	function setDate(){
 		var now =new Date();
 		//alert(now);
 		//alert(now.getTime()/1000)/86400;
 		var s=(launch.getTime()-now.getTime())/1000;
 		var d=Math.floor(s/86400);
 		days.html('<strong>'+d+'</strong><br/><b>Jour</b>');
 		s-=d*86400;

		var h=Math.floor(s/3600);
		//var h=Math.floor(d*24);
 		hours.html('<strong>'+h+'</strong><br/><b>Heure</b>');
 		s-=h*3600;

		var m=Math.floor(s/60);
 		minutes.html('<strong>'+m+'</strong><br/><b>Min.</b>');
 		s-=m*60;

		var s=Math.floor(s);
 		seconds.html('<strong>'+s+'</strong><br/><b>Sec.</b>');

 		//+(s>1?'s':'')
setTimeout(setDate,1000);



 	} 

 	setDate()	

 });
