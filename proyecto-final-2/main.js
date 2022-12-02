//global variables 
//let n= '';
//let m= '';
//let numeros= [ ];

/*Ejercicio 1:
Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter*/

//intente 2 formas pero solo esta es mas crcana sin embargo no me lo imprime correctamente



/*function imprimir_cuadrado() {

  let a = 10;

function imprimir_asterisco() {
  for (let i = 1; i <= a; ++i) {

    let resultado = ''

    for (let j = 10; j >= i; j--) {
      resultado += '* '
    }
    console.log(resultado)
}
function imprimir_numeral() {
  for (let i = 1; i <= a; ++i) {
    let resultado = ''

    for (let a = 1; a <= i; ++a) {
      resultado += '# '
    }
    console.log(resultado)
  }
}

imprimir_numeral()


}
imprimir_asterisco()

}

imprimir_cuadrado()*/


//Escriba una función que calcule el valor de un número N elevado por otro número
//M. (La función debe de recibir ambos parámetros).

/*function potencia(n , m) {

  for (let i = 0; i < n , m ; i++) {

   return n = n  * m ;
    
  }
  console.log(Math.pow(3, 2)); 
}

potencia()*/


/*Ejercicio 3:
Escriba una función que resuelve el problema del ejercicio anterior de manera
recursiva.*/

/*function potencia_recursiva(n , m ) {
  if ( m == 0) {
    return 1;

  } else {

    return n * potencia_recursiva( n , m -1)
  }
}

console.log(potencia_recursiva(5,3))*/


/*Ejercicio 4:
Escriba una función recursiva que reciba un arreglo y calcule la suma de sus
elementos.*/


/*function arreglo_suma(array) {  

  if (array.length === 1 ) {

    return array [0];

  } else {

    return array.pop(0) + arreglo_suma(array);
  }

}

console.log(arreglo_suma([1, 2, 3, 4, 5]));*/


//general function 

/*function main() {
  imprimir_cuadrado()
  potencia()
  potencia_recursiva()
  arreglo_suma()
}*/


