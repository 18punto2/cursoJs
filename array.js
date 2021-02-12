var arreglo=['cero','uno','dos',true,5];
//arreglo.length;
//arreglo[1];//indice 1
var arregloDos=['cero_','uno_','dos_'];
//concat-- concatenar
var newArreglo=arreglo.concat(arregloDos);
//join('-')-- Lo vuelve una sola cadena concatenando los elementos y colocandoe entre ellos '-' 
var arregloJoin=arreglo.join('-');
//pop-- Extraer el ultimo elemento
var arregloPop=arreglo.pop();
//push
var arregloPush=arreglo.push('newElemento');//agrega nuevo elemento modifica el array 'arreglo'