//selectores individuales
var boton=document.getElementById('boton');
var parrafo2=document.querySelector('#segundo');
//selectores multiples
var parrafos=document.getElementsByClassName('texto');
var parrafos2=document.getElementsByTagName('p');
var parrafos3=document.querySelectorAll('.texto');
//<p></p>
//crea elementos
var newParrafo=document.createElement('p');
//crea texto para parrafo
var newText=document.createTextNode('nuevo texto creado');
//agregar texto nuevo en el parrafo
newParrafo.appendChild(newText);
//agregar nuevo atributo de clase
newParrafo.setAttribute('class','texto');
//seleccionar contenedor
var contenedor=document.getElementsByClassName('contenedor')[0]
//agregar parrafo en contenedor
contenedor.appendChild(newParrafo);
//---Modificando clases---
var secondParrafo=document.getElementById('segundo');
secondParrafo.className='texto fondo-rojo';
//---Modificando ID's---
var firstParrafo=document.getElementsByClassName('texto')[0];
firstParrafo.id='primero';
