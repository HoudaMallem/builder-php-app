var Calculat = function() {
    return {
            calcule : function(Pannier) {

            var Scuttle = {
                items : Array(),
                Total : 0,
                Dissount : 0,
                TotalHT : 0,
                Tax : 0 ,
                TotalTTC : 0
            }
            var Sum_item_price = function(item){
                item["sumitempric"] = item["pric"]*item["quantity"];
                Scuttle.Total += item["pric"]*item["quantity"];
                //Result.TotalHT += element["prix"]*element["quant"];
            }
            var Sum_global = function(items){
                  items.forEach(Sum_item_price,  Scuttle);
            }
            var Discount_calcul = function(pannier){
                Sum_global(pannier["items"]);
               Scuttle.Dissount=Scuttle.Total*(pannier["discount"]/100);
               Scuttle.TotalHT=Scuttle.Total- Scuttle.Dissount;
            }
            var Tax_calcul = function(taxe){
                Scuttle.Tax+=Scuttle.Total*(taxe["pourcentage"]/100);      
            }
            var Tax_calcul_with_dissount = function(taxe){
                Scuttle.Tax+=Scuttle.TotalHT*(taxe["pourcentage"]/100);      
            }
            var TotalTTC_calcul = function(pannier){
                if(!pannier["discount"]){
                    console.log(pannier["items"]);
                    Sum_global(pannier["items"]);
                    
                    Scuttle.TotalHT= Scuttle.Total ;
                    pannier["taxe"].forEach(Tax_calcul,  Scuttle);        
                    Scuttle.TotalTTC=Scuttle.TotalHT+Scuttle.Tax;   
                }else if(pannier["discount"]){
                    Discount_calcul(pannier);
                    pannier["taxe"].forEach(Tax_calcul_with_dissount,  Scuttle);
                    Scuttle.TotalTTC=Scuttle.TotalHT+Scuttle.Tax;
                }    
            }
            if(Pannier){
                 TotalTTC_calcul(Pannier);
                 Scuttle.items=Pannier["items"]
                   return Scuttle;

            }
            
          //  return Scuttle;
        }
    }
}();
//jQuery(document).ready(function() {
var articles=Array();
var article1={"pric" : 15000 , "quantity" : 5 };
var article2={"pric" : 25050 , "quantity" : 1 };
var article3={"pric" : 45000 , "quantity" : 2 };
var article4={"pric" : 75896 , "quantity" : 4 };
var article5={"pric" : 35600 , "quantity" : 3 };
var articl=[article1,article2,article3,article4,article5];
 articles["items"]=articl;
var taxe1={"nom" : 'tva' , "pourcentage" : 17 };
var taxe=[taxe1];
//$taxe=array(17,14);
articles["taxe"]= taxe;
console.log(articles);
  console.log(Calculat.calcule(articles))  
//});