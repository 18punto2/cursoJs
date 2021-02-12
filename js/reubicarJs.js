//crea elementos
var newParrafo=document.createElement('p');
//crea texto para parrafo
var newText=document.createTextNode('nuevo texto creado');
//agregar texto nuevo en el parrafo
newParrafo.appendChild(newText);
//agregar nuevo atributo de clase
newParrafo.setAttribute('class','texto');

//SELECCIONAR ELEMENTO PADRE
var _parrafo=document.getElementsByClassName('texto')[0];
var padreParrafo=_parrafo.parentNode
padreParrafo.className='contenedor';

var _parrafos=document.getElementsByClassName('texto');
//añadir al inicio
//padreParrafo.insertBefore(newParrafo,_parrafo);//primera forma
//padreParrafo.insertBefore(newParrafo,_parrafos[2]);
/* reemplazar eliminar*/
var _padreParrafo=_parrafos[0].parentNode;
_padreParrafo.replaceChild(newParrafo,_parrafos[1])
//eliminar elemento
_padreParrafo.removeChild(_parrafos[0]);