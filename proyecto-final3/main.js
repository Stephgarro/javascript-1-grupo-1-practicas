/*Ejercicio 1:
Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
contenga una X representada por medio de ‘x’.
Ej: Si se ingresa el número 6:*/

/*function Generar_matriz(matriz) {
  let matrices = [ ];

  for (let i= 0; i < matriz; i++) {
    let fila = []

    for (let j = 0; j < matriz; j++) {
      if (i == j) {
        fila.push('*');
      }else if (j + 1 === matriz - i) {
        fila.push('*');
      } else {
        fila.push(0)
      }
    }
    matrices.push(fila)
}
return matrices;
}
console.log(Generar_matriz(6))*/


/*Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
los dos arreglos.*/

/*function comparar_arreglo(arreglo_1, arreglo_2) {
  if (arreglo_1 instanceof Array && arreglo_2 instanceof Array ) {
    if (arreglo_1.length === arreglo_2.length) {
      for (let i = 0; i < arreglo_1.length; i++) {
        if (arreglo_1[i] !== arreglo_2[i]) {
          return 'Los arreglos son diferentes';
        }
        
      }
      return 'Los arreglos son iguales';
    }
  }
}

console.log(comparar_arreglo([1, 2, 3], [1, 2, 3]))
console.log(comparar_arreglo([1, 2, 3], [1, 2, 4]))*/

/*function main() {
  Generar_matriz()
  comparar_arreglo()
};*/