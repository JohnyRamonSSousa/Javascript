//clearTimeout na prática
var x = 0;

var myTimer = setTimeout(function(){
  console.log("0 x É 0");
}, 2000);

x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("0 x passou de 0");
}

//clearInternal na prática

var myInterval = setInterval(function(){
    console.log("imprimindo interval");

}, 500)


setTimeout(function(){
    console.log("Não precisar mais repetir");
    clearInterval(myInterval);
}, 1500);