/*
var boton=document.getElementById('boton');
var boton2=document.getElementById('boton2');

function alerta(){
    alert('Saludo alert');
}
boton.addEventListener('click',alerta)
function removeAlerta(){
    boton.removeEventListener('click',alerta);
}
boton2.addEventListener('click',removeAlerta)
*/
/* evento que agrega parrafo */
/*
var _boton=document.getElementById('_boton');

_boton.addEventListener('click',function(){
    var newParrafo=document.createElement('p');
    var _text=document.createTextNode('nuevo texto de parrafo');

    newParrafo.appendChild(_text);

    newParrafo.className='boton'
    
    var contenedor=document.getElementsByClassName('contenedor')[0];
    contenedor.appendChild(newParrafo);
})
*/
/*mouse over out */
var parrafo= document.getElementById('_parrafo');

parrafo.addEventListener('mouseover',function(){
    var newParrafo=document.createElement('p');
    var _text=document.createTextNode('nuevo texto de parrafo');

    newParrafo.appendChild(_text);

    newParrafo.className='boton'
    newParrafo.id='addParrafo'
    
    var contenedor=document.getElementsByClassName('contenedor')[0];
    contenedor.appendChild(newParrafo);
});

//evento mouse out-- sacar mouse
parrafo.addEventListener('mouseout',function(){
    var _parrafoAdd=document.getElementById('addParrafo');
    var contenedor=document.getElementsByClassName('contenedor')[0];
    contenedor.removeChild(_parrafoAdd);
});
/**Evento focus */
var _nombre=document.getElementById('nombre');
_nombre.addEventListener('focus',function(){
    _nombre.setAttribute('value','set focus');
});
//evento blur
_nombre.addEventListener('blur',function(){
    _nombre.setAttribute('value','no tiene foco');
});

/*load */