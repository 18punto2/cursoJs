//evento change

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

