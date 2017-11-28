
var rootvarbial ={
    ROOT: window.location.origin + '/siehm2017',

    FindLanguage : function () {
       var url=  window.location.pathname
       return  url.split('/')[2];

    }
    
  //  LANGUAGE : FindLanguage()
}
//console.log(rootvarbial.LANGUAGE);