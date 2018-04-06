'use strict';
var word;
var letter;
var palabras;
var palabrasAhorcado;
var letraTeclado;
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
  palabrasAhorcado = (palabras[random]);
  document.querySelector('.palabra'). innerHTML = palabrasAhorcado;
  palabrasAhorcado= palabrasAhorcado.split('');

  console.log(palabrasAhorcado);
}
function compararLetra() {
  for (var i = 0; i < palabrasAhorcado.length; i++) {
    if (letter == palabrasAhorcado [i]) {
        console.log('le atinaste a la letra' + i);
        alert('le atinaste a la letra ' + i);
    }else if (letraTeclado == palabrasAhorcado [i]) {
        console.log('le atinaste a la letra' + i);
        alert('le atinaste a la letra ' + i);
    }else if (letter != palabrasAhorcado [i]) {
      console.log('fallaste intentalo otravez');
      alert('fallaste');
    }
    console.log(letter);
    console.log(palabrasAhorcado);
  }
}
function inicio_juego (letra){
  word = letra.value;
  obtenerPalabra()
  document.querySelector('.inicio_juego'). innerHTML = word;
  console.log(word);
}

function ponerLetra (letra){
  letter = letra.value;
  document.querySelector('.ponerLetra'). innerHTML = word;
  console.log(letter);
  compararLetra();
}

document.addEventListener('keydown',function ponerTecladoLetra(event) {
  letraTeclado = event.key
  letraTeclado = letraTeclado.toUpperCase()
  console.log(letraTeclado);
  document.querySelector('.ponerLetra'). innerHTML = letraTeclado;
  compararLetra();
})

// de esta forma le voy a poder poner la indicacion para poder comparar letra por letra en la palabra
// var word = ['h', 'o','l','a' ]
// function (letter == word [0]){
//   console.log('le atinaste a la primera');
// }
