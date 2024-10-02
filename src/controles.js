export function formatarDecimal(campo) {
  let valor = campo.value;
  valor = valor.replace(/[^\d]/g, '');
  valor.length >= 2 ? valor = valor.slice(0, -2) + '.' + valor.slice(-2) : null;
  campo.value = valor;
}

// Função reiniciar
export const reiniciar = (card, grid) => {
  card.forEach(c => c.style.display = "block");
  card.forEach(c => c.classList.remove("active"));
  grid[0].classList.remove("grid-template-columns-active");
};
