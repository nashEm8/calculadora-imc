import { formatarDecimal, reiniciar } from './controles.js';
import { calcularEExibirIMC } from './calcularImc.js';

let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let btnCalcular = document.getElementById("calcular");
let btnReiniciar = document.getElementById("reiniciar");

let grid = document.querySelectorAll("#cards");
let card = document.querySelectorAll("#cards div");
let textImcCard = document.querySelectorAll("#cards div p");

document.getElementById("altura").oninput = (event) => formatarDecimal(event.target);
document.getElementById("peso").oninput = (event) => formatarDecimal(event.target);

let removerCard = (i, y, z) => {
  card[i].style.display = "none";
  card[y].style.display = "none";
  card[z].style.display = "none";
}

let limparInputs = () => {
    peso.value = "";
    altura.value = "";
}

// Adiciona o evento de clique para o botão de reiniciar
btnReiniciar.addEventListener("click", () => reiniciar(card, grid));

btnCalcular.addEventListener("click", () => {
  calcularEExibirIMC(peso.value, altura.value, grid, card, textImcCard, removerCard, limparInputs);
});
  