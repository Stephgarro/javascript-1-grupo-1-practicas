//how the user enter the numbers
let myArray = [  ];
function numero_usuario() {
 while (true) {
  let comprobar_datos =prompt('Ingrese los valores')
  if (comprobar_datos === "") {
    alert('Este es un string vacio');
    break;
  } else{
    alert('Este es un numero');
    myArray.push(parseInt(comprobar_datos))
  }
 }
}

console.log(numero_usuario(myArray))

// how to find the average in array
function encontrar_promedio(myArray) {
  let i = 0, suma = 0, ArrayLen = myArray.length;
  while (i < ArrayLen) {
      suma = suma+ myArray[i++];
}
  return suma / ArrayLen;
}

let resultado = encontrar_promedio(myArray);
console.log(resultado)


//how to find the median in array
//let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

function calcular_mediana(myArray) {
 myArray = myArray.sort((x, y)=> x- y)
 let mitad = Math.floor(myArray.length / 2);
 return myArray.length % 2 == 1 ? myArray[mitad] : (myArray[mitad -1 ] + myArray[mitad + 2]) /2;
}

console.log(calcular_mediana(myArray))


//how to find minius value
function encontar_minimo (myArray) {
  for (let i = 0; i< myArray.length; i++) {
    const element = myArray[i];
  }
}
console.log(Math.min(...myArray));

//hoewto find maximun  value
function encontar_maximo (myArray) {
  for (let i = 0; i< myArray.length; i++) {
    const element = myArray[i];
  }
}
console.log(Math.max(...myArray)); 

function main() {
  numero_usuario()
  encontrar_promedio()
  calcular_mediana()
  encontar_minimo()
  encontar_maximo()
}