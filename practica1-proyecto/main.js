
//variables
//let numero = '';
//let lista = '' ;
//let contador = 0;

/*Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.*/

/*
function es_primo(numero) {

  for (let i = 2; i < numero / 2; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
console.log(es_primo('25'))*/


/*Ejercicio 2:
Escriba un programa que permita encontrar las soluciones de una ecuación
cuadrática:
dadas por la siguiente fórmula:

Implemente detección de errores para verificar que el usuario introduzca valores
correctos
para a, b y c. Además, debe detectarse el caso en el que la ecuación no tiene
soluciones
(cuando b ac 0 ) y notificarlo al usuario.*/

/*function ecuacion() {

let a = 1;
let b = 4;
let c = 3;

function ecuacion_one (a, b, c) {
  return (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a);
}

let total_1 = ecuacion_one (a, b, c)
console.log('ecuacion_one = ' + total_1);

function ecuacion_two (a, b, c) {
  return (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a)
}

let total_2 = ecuacion_two (a, b, c);
console.log('ecuacion_two = ' + total_2)

}

*/


/*Ejercicio 3:
Escriba un programa que imprima todos los números del 1 al 100, uno por línea.*/

/*function imprimir_linea(numeros) {
  for (let numeros = 1; numeros <= 100 ; numeros++) {
    console.log(numeros)
    
  }
}

 */


/*Ejercicio 4:
Modifique el programa anterior para que sólo imprima los números pares.*/

/*function imprimir_pares(numeros) {
  for (let numeros = 1; numeros <= 100 ; numeros++) {
    numeros++;
    console.log(numeros)
  }
 
}

*/


/*Ejercicio 5:
Modifique el programa del ejercicio 4 para que imprima 10 números por línea,
separados por
un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
la tercera
del 21 al 30 y así hasta llegar a 100.*/


/*function numeros_horizontal(lista) {

 for (let i = 1; i <= 100; i++) {
   for (let i = 1; i <= lista; i++) {
   contador++;
    
   }
  return  i <= 10;
 }

}*/


//funcion general
/*function main() {
  es_primo()
  ecuacion()
  imprimir_linea()
  imprimir_pares()
  numeros_horizontal()
}*/
