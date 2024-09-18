let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let btnCalcular = document.getElementById("calcular");

let grid = document.querySelectorAll("#cards");
let card = document.querySelectorAll("#cards div");
let textImcCard = document.querySelectorAll("#cards div p");

console.log(textImcCard);


function formatarDecimal(input) {
  let valor = input.value;

  valor = valor.replace(/[^\d]/g, '');

  if (valor.length >= 2) {
    valor = valor.slice(0, -2) + '.' + valor.slice(-2);
  }

  input.value = valor;
}

let removerCard = (i, y, z) => {
  card[i].style.display = "none";
  card[y].style.display = "none";
  card[z].style.display = "none";
}

let limparInputs = () => {
    peso.value = "";
    altura.value = "";
}

let reiniciar = () => {
  card.forEach(c => c.style.display = "block");
  card.forEach(c => c.classList.remove("active"));
  grid[0].classList.remove("grid-template-columns-active");
};



btnCalcular.addEventListener("click", () => {
  let imc = (peso.value / (altura.value * altura.value)).toFixed(2);

  if(imc < 18.5){
    grid[0].classList.toggle("grid-template-columns-active");
    card[1].classList.add("active");
    removerCard(0, 2, 3);
    textImcCard[1].textContent = `IMC = ${imc}`;
    limparInputs();

  } else if(imc > 18.5 && imc <= 24.9){
    grid[0].classList.toggle("grid-template-columns-active");
    card[0].classList.add("active");
    removerCard(1, 2, 3);
    textImcCard[0].textContent = `IMC = ${imc}`;
    limparInputs();

  } else if(imc > 24.9 && imc < 30){
    grid[0].classList.toggle("grid-template-columns-active");
    card[2].classList.add("active");
    removerCard(0, 1, 3);
    textImcCard[2].textContent = `IMC = ${imc}`;
    limparInputs();

  } else if(imc > 30 && imc <= 99){
    grid[0].classList.toggle("grid-template-columns-active");
    card[3].classList.add("active");
    removerCard(0, 1, 2);
    textImcCard[3].textContent = `IMC = ${imc}`;
    limparInputs();
  }

});


