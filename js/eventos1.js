/*//evento change

var inputColorFavorito=document.getElementById('colorFavorito');
inputColorFavorito.addEventListener('change',function(){
    var estado=document.getElementById('colorFavorito').checked;
    if(estado==true){
        console.log('true');
        document.getElementById('verde').disabled=false;
        document.getElementById('azul').disabled=false;
        document.getElementById('otro').disabled=false;
    }else{
        document.getElementById('verde').disabled=true;
        document.getElementById('azul').disabled=true;
        document.getElementById('otro').disabled=true;
        console.log('false');
    }
});
*/
//load
//window.addEventListener('load',function(){});
//this
var parrafos=document.getElementsByClassName('texto');
for(var i=0;i<parrafos.length;i++){
    parrafos[i].addEventListener('click',function(){
        this.className='texto fondo-rojo';//this cambia en el ambito donde fue utilizada
    });
}
