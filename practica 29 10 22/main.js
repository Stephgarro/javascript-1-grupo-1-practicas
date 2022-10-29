//eje 1
function factorizar(numero) {
  if (numero < 0) {
    return -1;
    console.log(numero);
    if (numero == 0) {
      return 1;
    }
    else {
      return (numero * factorizar (numero -1));
    }

  }
}
console.log(factorizar(5));

//eje 2
function recursiva(num2) {
  let resultado = num2
  if (num2 == 0 || num2 == 1) 
    return 1;
  for (let i = num2 - 1; i>= 1; i--) {
   resultado *= i }
   return resultado
}
console.log(recursiva(5))

//eje 3 
function parOimpar(num3) {
  if (num3 < 0 ){
  num3 = math.abs (num3)
  }
  if (num3 == 0) {
    return "si es par"
  }
  if (num3 == 1) {
    return "no es par"
  } else {
    return parOimpar(num3-2)
  }
}
console.log(parOimpar(4))
