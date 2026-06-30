const dataNascimento = new Date(2004, 7, 1);

function calcularIdade(dataNasc) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNasc.getFullYear();

  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  if (
    mesAtual < dataNasc.getMonth() ||
    (mesAtual === dataNasc.getMonth() && diaAtual < dataNasc.getDate())
  ) {
    idade--;
  }

  return idade;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".idade").textContent = calcularIdade(dataNascimento);
});
