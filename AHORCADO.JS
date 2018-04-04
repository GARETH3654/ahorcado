'use strict';
var word;
var palabras;
//   var word= form.ahorcado.value
var abecedario = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p",
  "q","r","s","t","u","v","w","x","y","z"
]
 palabras = [
  "COHETE",
  "BOMBA",
  "EXPLOCION",
  "CUIDADO",
  "ALERTA",
  "MUNDO",
  "CATASTROFE",
  "PLANETA",
  "VIDA",
  "MUERTE",
  "SALVAR",
  "AYUDAR",
  "DESTRUCCION",
  "GUERRA",
  "DEVASTACION",
]
function obtenerPalabra(){
  var random= Math.floor(Math.random()*14)
  var palabrasAhorcados = (palabras[random]);
  document.querySelector('.palabra'). innerHTML = palabrasAhorcados;
  palabrasAhorcados= palabrasAhorcados.split('');

  console.log(palabrasAhorcados);
}
function compararLetra() {
  for (var i = 0; i < word.length; i++) {
    if (word = palabrasAhorcados[i]) {
        console.log('le atinaste a la letra' + i);
    }
  }
}
function inicio_juego (letra){
  word = letra.value;
  obtenerPalabra()
  document.querySelector('.inicio_juego'). innerHTML = word;
}

function ponerLetra (letra){
  word = letra.value;
  document.querySelector('.ponerLetra'). innerHTML = word;
  console.log(word);
}

document.addEventListener('keydown',function ponerTecladoLetra(event) {
  var letraTeclado = event.key
  letraTeclado = letraTeclado.toUpperCase()
  console.log(letraTeclado);

  document.querySelector('.ponerLetra'). innerHTML = letraTeclado;
})

// de esta forma le voy a poder poner la indicacion para poder comparar letra por letra en la palabra
// var word = ['h', 'o','l','a' ]
// function (letter == word [0]){
//   console.log('le atinaste a la primera');
// }
