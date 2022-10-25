// these are some variables
const eje1_array =[ 1,2,3,4,5,6];
const eje2_string = 'atar ala rata';
const eje3_matriz= [
  [1,0,0],
  [0,1,1],
  [0,1,0],
];
const eje4_array =[1,3,3,4,6,7,6,2];
let datos_duplicados = []


/*this is the first exercise 
Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor.*/
/function first_eje (eje1_array) {
  for (let i = 0; i< eje1_array.length; i++) {
    const element = eje1_array[i];
  }
}
console.log(Math.max(...eje1_array));

/*this is the second exercise 
Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for .*/
function second_eje(eje2_string) {
  for (let i = 0; i < eje2_string.length; i++) {
    const element = eje2_string[i];
    
  }
}
console.log(eje2_string);

/*this is the third 
Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for*/

function third_eje (eje3_matriz) {
  let contador = 0 ;
  for (let i = 0; i < eje3_matriz.length; i++) {
    for (let j = 0; j < eje3_matriz[i].length; j++) {
      if (eje3_matriz[i][j]==0) {
        contador++;
      }
     
    }
  }   
  return contador ;
}
console.log(third_eje(eje3_matriz));


/*this is the fourth exercise
Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for.*/

function fourt_eje (eje4_array) {
  for (let i = 0; i < eje4_array.length; i++) {
    if (i + 1 < eje4_array.length && eje4_array.slice(i + 1).indexOf(eje4_array[i]) != -1 && datos_duplicados.indexOf(eje4_array[i])==-1) {
      datos_duplicados.push(eje4_array[i])
    }else if(datos_duplicados.indexOf(eje4_array[i])==-1){
      console.log("no hay duplicados")
    }
  }
  return datos_duplicados
}
console.log(fourt_eje(eje4_array));




/*this iis the fifth exercise
Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema.*/
function fifth_eje() {
let size =5;
for (let i = 0; i <= size; i++) {
  let colum ='';
  for (let j = 1; j <= i; j++) {
    colum+= '* ';
    
  }
  console.log(colum);
}
}
fifth_eje();

/*function main () {
  first_eje()
  second_eje()
  third_eje()
  fourth_eje()
  fifth_eje()
}
main();*/