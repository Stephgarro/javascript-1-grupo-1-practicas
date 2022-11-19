//variables en orden de ejecisios 
let numero = 10;
let resultado = 1;
let año =  ' ' ;


//Ejercicio 1:
//Escriba un programa que calcule el factorial de un número de manera recursiva.

function factorial(numero){
  if (numero == 0 || numero == 1)
     return numero;
  else 
   return factorial(numero-1) * numero
}

console.log("Factorial de 10 es: " + factorial(10));


/*Ejercicio 2:
Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
y 2000 sí lo es (divisible entre 400).
Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.*/

function año_usuario() {
 while (true) {
  let probar_datos =prompt('Ingrese el año para comprobar')
  if (probar_datos === "") {
    alert('Este es un string vacio');
    break;
  } else{
    año=(parseInt(probar_datos))
  }
 }
}

console.log(año_usuario(año))

function Es_bisiesto(año) {
  return año % 100 === 0 ? año % 400 === 0 : año % 4 === 0;
}

console.log (`¿El año ingresado ${año}  es bisiesto?: ${Es_bisiesto(año)}`);

/*Ejercicio 3:
Escriba un programa que solicite al usuario un texto y un carácter y le indique al
usuario cuántas veces aparece en el texto ese carácter.*/
//no lo logre
/*let myArray = [  ];
function texto_usuario() {
 while (true) {
  let datos =prompt('Ingrese el texto')
  if (datos === "") {
    alert('Este es un string vacio');
    break;
  } else{
    alert('Ingrese un caracter');
    myArray.push(datos)
  }
 }
}

console.log(texto_usuario(myArray))

function contar_caracter(myArray) {
  for(var i = 0; i < myArray.length; i++) {
    myArray[i] =  myArray.push(i);
  }
  
}
console.log(`La cantidad de veces que el caracter se repite es : ${contar_caracter(myArray)}`);*/




/*Ejercicio 4:
Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
100. El programa debe continuar preguntando por nuevos números al usuario hasta
que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
usuario falle, si el número ingresado es mayor o menor que el número a adivinar.*/


/*Ejercicio 5:
Escriba un programa que solicite un texto y lo imprima en la consola con todos los
espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
with you”, el programa debe retornar “Maytheforcebewithyou”.*/