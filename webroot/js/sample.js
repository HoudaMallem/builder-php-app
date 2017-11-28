
var draw_qrcode = function(text, typeNumber, errorCorrectLevel) {
	document.write(create_qrcode(text, typeNumber, errorCorrectLevel) );
};

var create_qrcode = function(text, typeNumber, errorCorrectLevel, table) {

	var qr = qrcode(typeNumber || 8 , errorCorrectLevel || 'Q');
	qr.addData(text);
	qr.make();

	//return qr.createTableTag();
	return qr.createImgTag();
};

var update_qrcode = function() {
	

	//var text = document.forms[0].elements['msg'].value.
	//var operateur = document.forms[0].elements['exposant'].value.
			var civiliteqr = document.getElementById('civiliteqr').value
		var nomqr = document.getElementById('nomqr').value
			var prenomqr = document.getElementById('prenomqr').value
		var categorieqr = document.getElementById('categorieqr').value

		if(categorieqr==1){
			var nomorganisme='Cabinet Privé';
		}else{
			var nomorganisme=document.getElementById('organismeqr').value
		}
		if(document.getElementById('specialiteqr')){
			var specialiteqr = document.getElementById('specialiteqr').value
		}else{
			var specialiteqr = '';
		}	
			if(document.getElementById('fonctionqr')){
			var fonctionqr = document.getElementById('fonctionqr').value
		}else{
			var fonctionqr = 'Docteur';
		}
			
	if(document.getElementById('adresseqr')){
			var adresseqr = document.getElementById('adresseqr').value
		}else{
			var adresseqr = '';
		}
			if(document.getElementById('communeqr')){
			var communeqr = document.getElementById('communeqr').value
		}else{
			var communeqr = '';
		}
				if(document.getElementById('villeqr')){
			var villeqr = document.getElementById('villeqr').value
		}else{
			var villeqr = '';
		}	
					if(document.getElementById('paysqr')){
			var paysqr = document.getElementById('paysqr').value
		}else{
			var paysqr = '';
		}	

			
			var text1=civiliteqr+' '+prenomqr+' '+nomqr+' '+adresseqr+' '+communeqr+' '+villeqr+' '+paysqr
		var text = text1.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '')

	//var nb = document.forms[0].elements['nb'].value.
		
	//document.getElementById('qr').innerHTML = create_qrcode(text);
	var n=civiliteqr+' '+nomqr+' '+prenomqr +'<br/>' +fonctionqr+'<br/>'+nomorganisme
		var image=create_qrcode(text);
		//var canvasTarget = document.getElementById('barcodeTarget').value
			generateBarcode()
		var canvasTarget = $("#barcodeTarget").html()
		//var image='mallem houda';
		print1(n,canvasTarget,image)
};

var update_qrcode1 = function() {
	//var text = document.forms[0].elements['msg'].value.
	//var operateur = document.forms[0].elements['exposant'].value.
		generateBarcode()
	 	var civilite=document.getElementsByName('civilite')
	 
 		for (i=0;i<civilite.length;i++)
		{
			if(civilite[i].checked)
			{
	           civiliteqr =civilite[i].value;             
			}
		}
		

		var nomqr = document.getElementById('nom').value
			var prenomqr = document.getElementById('prenom').value
		var categorieqr = 1


			var nomorganisme='Cabinet Privé';
	
		if(document.getElementById('idspecialiste')){
			var specialiteqr = document.getElementById('idspecialiste').value
		}
	if(document.getElementById(specialiteqr)){
			var specialiteqr1 = document.getElementById(specialiteqr).innerHTML
		}

			var adresseqr = document.getElementById('adresse').value
			var communeqr = document.getElementById('commune').value
			var villeqr = document.getElementById('ville_visiteur').value
			var canvasTarget = document.getElementById('canvasTarget').value
			if(document.getElementById(villeqr)){
				var villeqr1 = document.getElementById(villeqr).innerHTML
				//alert(document.getElementById(villeqr).innerHTML)

		}
			var paysqr = 'Algérie'
			var text1=civiliteqr+' '+prenomqr+' '+nomqr+' '+nomorganisme+' '+specialiteqr1+' '+adresseqr+' '+communeqr+' '+villeqr1+' '+paysqr
	//var text1=villeqr
	var text = text1.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '')

	//var nb = document.forms[0].elements['nb'].value.
		
	//document.getElementById('qr').innerHTML = create_qrcode(text);
	var n=civiliteqr+' '+nomqr+' '+prenomqr+'<br/>'+nomorganisme
		var image=create_qrcode(text);

print1(n,canvasTarget,image)
	
};
var update_qrcode2 = function(text,n) {
		var image=create_qrcode(text);
	//	generateBarcode()
	//	var canvasTarget = document.getElementById('canvasTarget').value
		print1(n,image)
	
};
//@font-face { font-family: 'UniversLTStd47LightCondensed'; src: url('/adminlocalhostvisiteur/webroot/css/police/univers5-webfont.eot'); src: url('/adminlocalhostvisiteur/webroot/css/police/univers5-webfont.eot?#iefix') format('embedded-opentype'),url('/adminlocalhostvisiteur/webroot/css/police/univers5-webfont.woff') format('woff'),url('/adminlocalhostvisiteur/webroot/css/police/univers5-webfont.ttf') format('truetype');
function print1(n,image){
		jsPrintSetup.setOption('orientation', jsPrintSetup.kPortraitOrientation);
ph=window.open('',"imp","menubar=no, status=no, scrollbars=no,  width=504, height=336" )
ph.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr" >')
ph.document.write('<head>')
ph.document.write('<link rel="stylesheet" type="text/css" href="style.css" media="screen"/>');	
ph.document.write('<link rel="stylesheet" type="text/css" href="style.css" media="print"/>');	
ph.document.write('</head><body>')
ph.document.write('<style>')
ph.document.write("@font-face { font-family: 'UniversLTStd47LightCondensed'; src: url('police/univers5-webfont.eot'); src: url('police/univers5-webfont.eot?#iefix') format('embedded-opentype'),url('police/univers5-webfont.woff') format('woff'),url('police/univers5-webfont.ttf') format('truetype');font-weight: bold; font-style: normal;}")


ph.document.write('body:{ background-image: url("Badge_visiteur.png"); background-repeat:no-repeat; top:0px left:0px; }')
ph.document.write('</style>')
ph.document.write('<div   id="divglobal" style="width:336px;  height:100%; position:relative; font-size:100%;  font-family:UniversLTStd47LightCondensed;   " ><div style="width:100%; text-align: center; font-family: UniversLTStd47LightCondensed; position:absolute; left:340px; top:200px; font-weight: bold; ">')
ph.document.write('<b>')
ph.document.write(n)
ph.document.write('</b>')
ph.document.write('</div>')
ph.document.write('<div style="position:absolute; left:450px; top:290px; ">')
ph.document.write(image)
ph.document.write('</div></div>')

ph.document.write("</body></html>")

	jsPrintSetup.setOption('marginTop',-7);

	jsPrintSetup.setOption('marginLeft',10);

	jsPrintSetup.setOption('headerStrLeft','');
	jsPrintSetup.setOption('headerStrCenter','');
	jsPrintSetup.setOption('headerStrRight', '');
	

	jsPrintSetup.setOption('footerStrLeft', '');
	jsPrintSetup.setOption('footerStrCenter', '');
	jsPrintSetup.setOption('footerStrRight', '');
	jsPrintSetup.setSilentPrint(false);
		//jsPrintSetup.setOption('numCopies',nb);
	jsPrintSetup.print(); 
	ph.close();	
}


function generateBarcode(){

	var i = document.getElementById('idvis').value  
        var settings = {
          output:'css',
          bgColor: '#FFFFFF',
          color: '#000000',
          barWidth: '1',
          barHeight: '25'
        };
  // $("#barcodeTarget").html("").show().barcode(value, btype, settings);
  dt=new Date(); 
cal= i+"/"+ dt.getDate()+"-"+(dt.getMonth()+1) + "-" +dt.getYear() ; 

 $("#barcodeTarget").html("").barcode(cal, 'code39', settings);
        var canvasTarget = $("#barcodeTarget").html()

      }
          
      function showConfig1D(){
        $('.config .barcode1D').show();
        $('.config .barcode2D').hide();
      }
      
      function showConfig2D(){
        $('.config .barcode1D').hide();
        $('.config .barcode2D').show();
      }
      
      function clearCanvas(){
        var canvas = $('#canvasTarget').get(0);
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 1;
        ctx.lineCap = 'butt';
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle  = '#000000';
        ctx.clearRect (0, 0, canvas.width, canvas.height);
        ctx.strokeRect (0, 0, canvas.width, canvas.height);
      }
      
      $(function(){
        $('input[name=btype]').click(function(){
          if ($(this).attr('id') == 'datamatrix') showConfig2D(); else showConfig1D();
        });
        $('input[name=renderer]').click(function(){
          if ($(this).attr('id') == 'canvas') $('#miscCanvas').show(); else $('#miscCanvas').hide();
        });
      //  generateBarcode();
      });
