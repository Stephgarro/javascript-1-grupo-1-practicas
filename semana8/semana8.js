const carro = {
  marca: 'ford',
  modelo: 'mustang',
  anno: 2019,
  color: 'amarillo',
  Especificaciones: ['polarizado , asientos de cuero blancos, automatico'],
  cambiarAnno: function name(anno) {
    this.anno = anno;
  },
  cambiarColor: function (color) {
    this.color = color;
  },
  cambiarModelo: function (modelo) {
    this.modelo = modelo;
  },
  cambiarEspecificaciones: function name(Especificaciones) {
    this.Especificaciones = Especificaciones;
  }
}

console.log(carro.anno); 
carro.cambiarAnno('2022');
console.log(carro.anno);
console.log(carro.color);
carro.cambiarColor('negro mate');
console.log(carro.color);
console.log(carro.modelo);
carro.cambiarModelo('raptor');
console.log(carro.modelo);
console.log(carro.Especificaciones)
carro.Especificaciones('polarizado, asientos de cuero blancos , automatico')

