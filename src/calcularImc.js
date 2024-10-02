export const calcularEExibirIMC = (peso, altura, grid, card, textImcCard, removerCard, limparInputs) => {
  const imc = (peso / (altura * altura)).toFixed(2);

  if (imc < 18.5) {
    grid[0].classList.toggle("grid-template-columns-active");
    card[1].classList.add("active");
    removerCard(0, 2, 3);
    textImcCard[1].textContent = `IMC = ${imc}`;
    limparInputs();
  } else if (imc > 18.5 && imc <= 24.9) {
    grid[0].classList.toggle("grid-template-columns-active");
    card[0].classList.add("active");
    removerCard(1, 2, 3);
    textImcCard[0].textContent = `IMC = ${imc}`;
    limparInputs();
  } else if (imc > 24.9 && imc < 30) {
    grid[0].classList.toggle("grid-template-columns-active");
    card[2].classList.add("active");
    removerCard(0, 1, 3);
    textImcCard[2].textContent = `IMC = ${imc}`;
    limparInputs();
  } else if (imc > 30 && imc <= 99) {
    grid[0].classList.toggle("grid-template-columns-active");
    card[3].classList.add("active");
    removerCard(0, 1, 2);
    textImcCard[3].textContent = `IMC = ${imc}`;
    limparInputs();
  }
};