//var nombre='nombre test';
// alert('alert de:'+ nombre);
// console.log('console de :' +nombre);
//document.write(nombre);
var inicio=0;
/*
setInterval(contar,1000);
function contar(){
    while(inicio<5)
    {
        ++inicio;
        console.log(inicio);    
    }
}
*/
/*
setInterval(function(){
    while(inicio<10)
    {
        ++inicio;
        console.log(inicio);    
    }
},1000);
*/
/*Retardo- solo se ejecuta 1 vez*/
/*
var texto='Hola test';
setTimeout(function(){
    console.log(texto);
},5000)
*/
/*
var aleatorio=Math.random()*10;
var enteroMenor= Math.floor(aleatorio);
*/
/*
for(var i=1;i<=10;++i){
console.log('indice: '+i);
}*/
var seman=['dom','lun','mar','mie','jue','vie','sab'];
/*
for(var i=0;i<seman.length;i++)
{
    console.log('el dia es: '+ seman[i]);
}
*/
/*
for(dia in seman){
   document.write(seman[dia]+'<br>');
}
*/
//continue-- permite saltar a la siguiente del ciclo
/*
for(var i=0;i<seman.length;i++)
{
    if(seman[i]=='mie'){
        continue;//salta el mie
    }
    console.log('el dia es: '+ seman[i]);
}
*/
/*resultado */
/*
el dia es: dom  
el dia es: lun  
el dia es: mar  
el dia es: jue  
el dia es: vie  
el dia es: sab
*/
//function autoejecutable
(function(){}())
