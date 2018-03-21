'use strict';
//   var word= form.ahorcado.value
var abecedario = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p",
  "q","r","s","t","u","v","w","x","y","z"
]
var palabras = [
  "cohete",
  "bomba",
  "explocion",
  "cuidado",
  "alerta",
  "mundo",
  "catastrofe",
  "planeta",
  "vida",
  "muerte",
  "salvar",
  "ayudar",
  "destruccion",
  "guerra",
  "devastacion",
]
function obtenerPalabra(){
  var random= Math.floor(Math.random()*14)


console.log(palabras[random]);

}
function inicio_juego (letra){
  var word = letra.value;
  word = console.log(letra.value);
  obtenerPalabra()
}
function ponerLetra (letra){
  var word = letra.value;
  word = console.log(letra.value);
}


document.addEventListener('keydown',function ponerTecladoLetra(event) {
  var letraTeclado = event.key
  letraTeclado = letraTeclado.toUpperCase()
  console.log(letraTeclado);

})


// de esta forma le voy a poder poner la indicacion para poder comparar letra por letra en la palabra
// var word = ['h', 'o','l','a' ]
// function (letter == word [0]){
//   console.log('le atinaste a la primera');
// }
